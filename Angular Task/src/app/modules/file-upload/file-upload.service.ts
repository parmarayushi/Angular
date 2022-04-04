import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyFile } from './file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private apiLink:string;

  constructor(private http:HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  public getFile():Observable<MyFile[]>{
    return this.http.get<MyFile[]>(`${this.apiLink}/files`)
  }

  public addFile(file:MyFile):Observable<MyFile>{
    return this.http.post<MyFile>(`${this.apiLink}/files`,file)
  }

  public deleteFile(id:number):Observable<number>{
    return this.http.delete<number>(`${this.apiLink}/files/${id}`);
  }
}
