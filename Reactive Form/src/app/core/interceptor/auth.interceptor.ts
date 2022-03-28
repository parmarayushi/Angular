import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  token:string;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token=localStorage.getItem('token') ?? "Fake Token";
    return next.handle(request.clone({
    setHeaders:{
    "Authorization":`Bearer ${this.token}`
    }
    }));
  }
}
