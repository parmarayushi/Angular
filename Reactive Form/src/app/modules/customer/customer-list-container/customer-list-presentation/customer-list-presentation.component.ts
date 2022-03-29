import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, Department, Filter } from '../../customer.model';
import { CustomerListPresenterService } from '../customer-list-presenter/customer-list-presenter.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.css'],
  viewProviders:[CustomerListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CustomerListPresentationComponent implements OnInit {

  searchText:string="";

  @Input() public set customerList(value:Customer[] |  null){
    if(value){
      if(!this._newCustomerList){
        this._newCustomerList=value;
      }
      this._customerList=value;
    }  
  }

  public get customerList():Customer[] {
    return this._customerList;
  }

  @Input() public set departmentList(value:Department[] |  null){
    if(value){
      this._departmentList=value;
    }  
  }

  public get departmentList():Department[]{
    return this._departmentList;
  }

  @Output() public delete:EventEmitter<number>;

  private _newCustomerList:Customer[];
  private _customerList: Customer[];
  public _newcustomer: Customer[];
  private _departmentList:Department[];
  constructor(private customerListPresenter:CustomerListPresenterService ,private router:Router,private cdr:ChangeDetectorRef) { 
    this.searchText = "";
    this._departmentList=[];
    this.delete=new EventEmitter();
  }

  ngOnInit(): void {
    this.customerListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    })

    this.customerListPresenter.filter$.subscribe(res=>{
      // const newCustomerList=this._customerList.filter(data=> data.age == res.customerage);
      // console.log(newCustomerList);    
      // this._customerList = newCustomerList;  
      
      this._customerList=res;
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
    this.customerListPresenter.openFilterModel(this._newCustomerList);
  }

  changePage(userList:Customer[]) {
    this._newcustomer = userList;
  //  this.cdr.markForCheck();
  //  console.log(this.customerList);

}
}