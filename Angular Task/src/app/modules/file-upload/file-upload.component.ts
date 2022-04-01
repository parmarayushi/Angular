import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from './file-upload.service';
import { MyFile } from './file.modal';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  public filesList$: Observable<MyFile[]>

  constructor(private fileService: FileUploadService) { 
    this.filesList$ = new Observable<MyFile[]>();
  }

  ngOnInit(): void {
    this.filesList$ = this.fileService.getFiles();
  }

  UploadFile(file: MyFile) {
    this.fileService.addFiles(file).subscribe({
      next: () => {
        alert("File Added Successfully");
        this.filesList$ = this.fileService.getFiles();
      },
      error: (e) => { console.log(e) }
    })
  }
}
