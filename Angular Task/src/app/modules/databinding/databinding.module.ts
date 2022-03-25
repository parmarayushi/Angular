import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabindingRoutingModule } from './databinding-routing.module';
import { ChildComponent } from './Test/child/child.component';
import { ParentComponent } from './Test/parent/parent.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    DatabindingRoutingModule,
    FormsModule
  ]
})
export class DatabindingModule { }
