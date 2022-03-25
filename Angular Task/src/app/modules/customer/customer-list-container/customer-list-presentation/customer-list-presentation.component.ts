import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, Department, Filter } from '../../customer.model';
import { CustomerListPresenterService } from '../customer-list-presenter/customer-list-presenter.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.scss'],
  viewProviders:[CustomerListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CustomerListPresentationComponent implements OnInit {

  @Input() public set customerList(value:Customer[] |  null){
    if(value){
      console.log(this.filterList)
      this._customerList=value;
      // console.log(value);
    }  
  }

  public get customerList():Customer[] | null{
    return this._customerList;
  }

  @Input() public set departmentList(value:Department[] |  null){
    if(value){
      this._departmentList=value;
      // console.log(value);
    }  
  }

  public get departmentList():Department[]{
    return this._departmentList;
  }

  @Output() public delete:EventEmitter<number>;

  public filterList:Filter;
  private _customerList: Customer[];
  private _departmentList:Department[];
  constructor(private customerListPresenter:CustomerListPresenterService ,private router:Router,private cdr:ChangeDetectorRef) { 
    this._departmentList=[];
    this.delete=new EventEmitter();
  }

  ngOnInit(): void {
    this.customerListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    })

    this.customerListPresenter.filter$.subscribe(res=>{
      const newCustomerList=this._customerList.filter(data=> data.age == res.customerage);
      console.log(newCustomerList);    
      this._customerList = newCustomerList;  
      this.cdr.detectChanges();
    })
  }

  onDelete(id:number){
    this.customerListPresenter.onDelete(id);
  }

  onEdit(id: number) {
    this.router.navigateByUrl(`customer/edit/${id}`);
  }

  onFilterSubmit(){
    this.customerListPresenter.openFilterModel();
  }
}
