import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getFormList(): Observable<Form[]> {
    return this.http.get<Form[]>(`${this.apiLink}/form`);
  }

  saveProduct(formData: Form): Observable<Form> {
    return this.http.post<Form>(`${this.apiLink}/form/`,userData);
  }
}
