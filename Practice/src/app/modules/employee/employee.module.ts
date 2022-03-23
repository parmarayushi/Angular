import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmpCardComponent } from './emp-card/emp-card.component';
import { EmpService } from './services/emp.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmpCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EmployeeRoutingModule
  ],
  providers:[
    EmpService
  ]
})
export class EmployeeModule { }
