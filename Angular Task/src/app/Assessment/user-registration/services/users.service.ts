import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, Office, UserRegistration } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
   }

   getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiLink}/client`);
  }

  getOffice(): Observable<Office[]> {
    return this.http.get<Office[]>(`${this.apiLink}/office`);
  }

  createUser(userData:UserRegistration): Observable<UserRegistration> {
    return this.http.post<UserRegistration>(`${this.apiLink}/users/`, userData);
  }
  
  getUserList(): Observable<UserRegistration[]> {
    return this.http.get<UserRegistration[]>(`${this.apiLink}/users`);
  }
  
  updateUser(id:number,userData: UserRegistration): Observable<UserRegistration> {
    return this.http.put<UserRegistration>(`${this.apiLink}/users/${id}`, userData);
  }
  
  getById(id: number) {
    return this.http.get<UserRegistration>(`${this.apiLink}/users/${id}`);
  }
  
  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/users/${id}`);
  }
  
}

