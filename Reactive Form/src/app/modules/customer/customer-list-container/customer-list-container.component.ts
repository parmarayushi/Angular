import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, Department } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.css']
})
export class CustomerListContainerComponent implements OnInit {

  public customerList$:Observable<Customer[]>=new Observable();
  public departmentList$:Observable<Department[]>=new Observable();
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getDepartments();
  }

  getCustomers(){
    this.customerList$=this.customerService.getCustomer()
  }

  getDepartments(){
   this.departmentList$=this.customerService.getDepartment()
  }

  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(()=>{
      alert("Id "+id+ "is deleted");
      this.getCustomers()
    })
  }
}
