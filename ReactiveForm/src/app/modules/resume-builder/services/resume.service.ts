import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resume } from '../model/resume.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  saveData(data: Resume): Observable<Resume> {
    return this.http.post<Resume>(`${this.apiLink}/resume`, data);
  }

  getData(id: number):Observable<Resume>{
    return this.http.get<Resume>(`${this.apiLink}/resume/${id}`);
  }

  deleteData(id:number):Observable<number>{
    return this.http.delete<number>(`${this.apiLink}/resume/${id}`)
  }
}
