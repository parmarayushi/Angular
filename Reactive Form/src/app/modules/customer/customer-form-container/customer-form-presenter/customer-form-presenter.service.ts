import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../../customer.model';

@Injectable()
export class CustomerFormPresenterService {

  private customerFormData:Subject<Customer>;
  public customerFormData$:Observable<Customer>;

  constructor(private fb:FormBuilder) {
    this.customerFormData=new Subject();
    this.customerFormData$=new Observable();

    this.customerFormData$=this.customerFormData.asObservable();
   }

  buildForm(){
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      city: ['', Validators.required],
      contactno: ['', Validators.required],
      email:['',[Validators.required,Validators.email]],
      age: ['', Validators.required],
      department: ['', Validators.required ],
      gender: ['', Validators.required]
    })
  }

  onSubmit(customerForm:FormGroup){
    if(!customerForm.valid){
      return
    }
    this.customerFormData.next(customerForm.value);
  }
}
