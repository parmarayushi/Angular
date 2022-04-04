import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {

  private fileUpload:Subject<MyFile>;
  public fileUpload$:Observable<MyFile>;

  constructor() { 
    this.fileUpload=new Subject<MyFile>();
    this.fileUpload$=new Observable<MyFile>();
    this.fileUpload$=this.fileUpload.asObservable();
  }

  allowedFileType=["image/png","image/jpeg","application/pdf"]

  uploadFile(files:FileList){
    for(let i=0;i<files.length;i++){
      const file={} as MyFile
      let size=Math.round(files[i].size/1024/1024)
      if(size<=2 && this.allowedFileType.includes(files[i].type)){
        file.name=files[i].name;
        file.size=size;
        file.type=files[i].type;
  
        //file reader to read file content
        const reader=new FileReader();
        //read as url to get base64 type data
        reader.readAsDataURL(files[i]);
        reader.onload=(event)=>{
        file.content=event.target?.result as string;
  
        this.fileUpload.next(file);
        }
      }
      else if(this.allowedFileType.includes(file.type)){
        alert("Please upload proper format")
      }
  
      else{
        alert("File Size is greater than 2MB");
      }
    }
    }
}
