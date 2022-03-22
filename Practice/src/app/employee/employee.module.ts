import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeService } from './services/employee.service';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeCardComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeeModule { }
