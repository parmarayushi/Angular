import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.css']
})
export class CustomerListContainerComponent implements OnInit {

  public customerList$:Observable<Customer[]>;
  constructor(private customerService:CustomerService) { 
    this.customerList$=new Observable();
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerList$=this.customerService.getCustomer()
  }

  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(()=>{
      alert("Id "+id+ "is deleted");
      this.getCustomers()
    })
  }
}
