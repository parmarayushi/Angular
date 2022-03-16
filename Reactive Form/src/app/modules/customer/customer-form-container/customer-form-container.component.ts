import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form-container',
  templateUrl: './customer-form-container.component.html',
  styleUrls: ['./customer-form-container.component.css']
})
export class CustomerFormContainerComponent implements OnInit {

  public id!:number;
  public customerData$:Observable<Customer>

  constructor(private customerService:CustomerService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { 
    this.customerData$=new Observable();
    this.id=parseInt(this.activatedRoute.snapshot.params['id']);

    if (this.id){
      this.customerData$=this.customerService.getCustomerById(this.id);
    }
  }

  ngOnInit(): void {
  }

  addCustomerData(customerForm:Customer){
    this.customerService.addCustomer(customerForm).subscribe(()=>{
      alert("Customer Added Successfully")
      this.router.navigateByUrl('customer/list');
    })
  }

  editCustomerData(form: Customer) {
    this.customerService.editCustomer(this.id,form).subscribe(
      () => {
        alert('Edit success')
        this.router.navigateByUrl('customer/list');
      }
    );
  }
}
