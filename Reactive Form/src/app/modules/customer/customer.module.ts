import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { CustomerListPresentationComponent } from './customer-list-container/customer-list-presentation/customer-list-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentPipe } from './pipe/department.pipe';
import { FilterFormPresentationComponent } from './customer-list-container/filter-form-presentation/filter-form-presentation.component';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormContainerComponent,
    CustomerListContainerComponent,
    CustomerFormPresentationComponent,
    CustomerListPresentationComponent,
    DepartmentPipe,
    FilterFormPresentationComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule
  ],
  providers:[
    CustomerService
  ]
})
export class CustomerModule { }
