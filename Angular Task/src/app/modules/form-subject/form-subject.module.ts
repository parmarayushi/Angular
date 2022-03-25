import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSubjectRoutingModule } from './form-subject-routing.module';
import { FormSubjectComponent } from './form-subject.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormServiceService } from './form-subject-service/form-service.service';


@NgModule({
  declarations: [
    FormSubjectComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormSubjectRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    FormServiceService
  ]
})
export class FormSubjectModule { }
