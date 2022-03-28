import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  loginToken(creds:Login):Observable<any>{
    return this.http.post<any>(`http://localhost:3001/login`,creds);
  }
}
