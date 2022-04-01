import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../file.modal';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {

  private file:MyFile;
  private fileUpload:Subject<MyFile>;
  public fileUpload$:Observable<MyFile>;

  constructor() { 
    this.file={} as File;
    this.fileUpload=new Subject<MyFile>();
    this.fileUpload$=new Observable<MyFile>();
    this.fileUpload$=this.fileUpload.asObservable();
  }

  uploadFile(file:File){
    let size=Math.round(file.size/1024/1024)
    if(size<=2){
      this.file.name=file.name;
      this.file.size=size;
      this.file.type=file.type;

      this.fileUpload.next(this.file);
    }
    else{
      alert("File Size is greater than 2MB");
    }
  }
}
