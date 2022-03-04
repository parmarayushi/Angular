import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from './service/form.service';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { DepartmentPipePipe } from './pipes/department-pipe.pipe';
import { FormModelComponent } from './form-model/form-model.component';


@NgModule({
  declarations: [
    UsersComponent,
    FormComponent,
    ListComponent,
    UserFilterPipe,
    DepartmentPipePipe,
    FormModelComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule
  ],
  providers:[
    FormService
  ]
})
export class UsersModule { }
