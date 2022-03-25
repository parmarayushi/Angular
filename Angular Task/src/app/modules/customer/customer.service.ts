import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer, Department } from './customer.model';

@Injectable()
export class CustomerService {
  apiLink:string

  constructor(private http:HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  public getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }
  
  public getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiLink}/customer`);
  }

  public addCustomer(form:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.apiLink}/customer`,form)
  }

  public getCustomerById(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.apiLink}/customer/${id}`)
  }

  public editCustomer(id:number,form:Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this.apiLink}/customer/${id}`,form)
  }

  public deleteCustomer(id:number):Observable<number>{
    return this.http.delete<number>(`${this.apiLink}/customer/${id}`);
  }
}
