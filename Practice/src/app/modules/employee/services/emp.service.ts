import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/emp.model';

@Injectable()
export class EmpService {

  private apiLink:string="http://localhost:3000"

  constructor(private http:HttpClient) { }

  getDept():Observable<Department[]>{
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }
}
