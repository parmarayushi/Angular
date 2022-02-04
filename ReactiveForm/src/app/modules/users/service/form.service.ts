import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Department, User } from '../model/form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiLink}/department`);
  }

  createUser(userData: User): Observable<User> {
    return this.http.post<User>(`${this.apiLink}/form/`, userData);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}/form`);
  }

  updateUser(id:number,userData: User): Observable<User> {
    return this.http.put<User>(`${this.apiLink}/form/${id}`, userData);
  }

  getById(id: number) {
    return this.http.get<User>(`${this.apiLink}/form/${id}`);
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/form/${id}`);
  }
}
