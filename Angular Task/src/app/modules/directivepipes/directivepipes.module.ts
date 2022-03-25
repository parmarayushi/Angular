import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivepipesRoutingModule } from './directivepipes-routing.module';
import { DirectivePipesComponent } from './directive-pipes/directive-pipes.component';
import { CapitalPipe } from './capital.pipe';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    DirectivePipesComponent,
    CapitalPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    DirectivepipesRoutingModule
  ]
})
export class DirectivepipesModule { }
