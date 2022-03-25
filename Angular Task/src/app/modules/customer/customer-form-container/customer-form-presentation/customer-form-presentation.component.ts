import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Customer, Department } from '../../customer.model';
import { CustomerFormPresenterService } from '../customer-form-presenter/customer-form-presenter.service';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.component.html',
  styleUrls: ['./customer-form-presentation.component.scss'],
  viewProviders: [CustomerFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerFormPresentationComponent implements OnInit {

  @Input() public set customerData(value:Customer | null){
    if(value){
      this.formTitle='Edit Customer'

      this.customerForm.patchValue(value);
      this._customerData=value;
    }
  }

  public get customerData():Customer | null{
    return this._customerData;
  }

  @Input() public set departmentList(value:Department[] |  null){
    if(value){
      this._departmentList=value;
      // console.log(value);
    }  
  }

  public get departmentList():Department[] | null{
    return this._departmentList;
  }

  private _customerData!:Customer;
  private _departmentList!:Department[];

  @Output() public add:EventEmitter<Customer>;
  @Output() public edit:EventEmitter<Customer>;

  public formTitle:string
  public customerForm: FormGroup;
  constructor( private customerFormPresenter: CustomerFormPresenterService,  private location:Location) { 
    this.customerForm=this.customerFormPresenter.buildForm();
    this._departmentList=[];
    this.add=new EventEmitter();
    this.edit=new EventEmitter();
    this.formTitle="Add Customer"
  }

  ngOnInit(): void {
    this.customerFormPresenter.customerFormData$.subscribe((result:Customer)=>{
      
      this.formTitle ==="Add Customer" ? this.add.emit(result) : this.edit.emit(result);
    })
  }

  onSubmit(){ 
    this.customerFormPresenter.onSubmit(this.customerForm)
  }

  onCancel() {
    this.location.back();
  }

  get getvalue() {
    return this.customerForm.controls;
  }
}
