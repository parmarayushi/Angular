import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FileDragNDropDirective } from './directive/file-drag-n-drop.directive';



@NgModule({
  declarations: [
    PaginationComponent,
    FileDragNDropDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginationComponent,
    FileDragNDropDirective,
  ]
})
export class SharedModule { }
