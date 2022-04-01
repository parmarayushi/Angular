import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Customer, Department} from '../../customer.model';
import { CustomerListPresenterService } from '../customer-list-presenter/customer-list-presenter.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.scss'],
  viewProviders: [CustomerListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerListPresentationComponent implements OnInit {
  searchText: string = '';

  @Input() public set customerList(value: Customer[] | null) {
    if (value) {
      if (!this._newCustomerList) {
        this._newCustomerList = value;
      }
      this._customerList = value;
    }
  }

  public get customerList(): Customer[] {
    return this._customerList;
  }

  @Input() public set departmentList(value: Department[] | null) {
    if (value) {
      this._departmentList = value;
    }
  }

  public get departmentList(): Department[] {
    return this._departmentList;
  }

  @Output() public delete: EventEmitter<number>;

  private _customerList: Customer[];
  public _newCustomerList: Customer[];
  public newcustomerList!: Customer[];
  private _departmentList: Department[];
  constructor(
    private customerListPresenter: CustomerListPresenterService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.searchText = '';
    this._departmentList = [];
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.customerListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    });

    this.customerListPresenter.filter$.subscribe((res) => {
      // const newCustomerList=this._customerList.filter(data=> data.age == res.customerage);
      // console.log(newCustomerList);
      // this._customerList = newCustomerList;

      this._customerList = res;
      this.cdr.detectChanges();
    });
  }

  onDelete(id: number) {
    this.customerListPresenter.onDelete(id);
  }

  onEdit(id: number) {
    this.router.navigateByUrl(`customer/edit/${id}`);
  }

  onFilterSubmit() {
    this.customerListPresenter.openFilterModel(this._newCustomerList);
  }

  changePage(userList: Customer[]) {
    this.newcustomerList = userList;
     this.cdr.markForCheck();
    //  console.log(this.customerList);
  }

  sortedBy: string = 'id';
  isDesc: boolean = false;

  sort(colName: any) {
    let sortBy = colName.target.getAttribute('data-value');
    
    if (this.sortedBy === sortBy) {
      this.isDesc = !this.isDesc
    } else {
      this.sortedBy = sortBy;
      this.isDesc = true;
    }
    console.log(this.sortedBy, this.isDesc)
    this.newcustomerList = this.customerListPresenter.sortBy(sortBy, this._newCustomerList, this.isDesc);
    // console.log(this._newCustomerList)
    // this.cdr.markForCheck();
  }
}
