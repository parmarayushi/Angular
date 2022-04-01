import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { FileListPresentationComponent } from './file-list-presentation/file-list-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileUploadService } from './file-upload.service';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadPresentationComponent,
    FileListPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[
    FileUploadService
  ]
})
export class FileUploadModule { }
