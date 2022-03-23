import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';
import { ComponentCommunicationComponent } from './component-communication.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponentCommunicationComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ComponentCommunicationRoutingModule,
    FormsModule
  ]
})
export class ComponentCommunicationModule { }
