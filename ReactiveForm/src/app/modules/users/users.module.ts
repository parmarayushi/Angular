import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from './service/form.service';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { DepartmentPipePipe } from './pipes/department-pipe.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    FormComponent,
    ListComponent,
    UserFilterPipe,
    DepartmentPipePipe,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    FormService
  ]
})
export class UsersModule { }
