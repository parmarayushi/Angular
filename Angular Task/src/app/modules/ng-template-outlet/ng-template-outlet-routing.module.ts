import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';

const routes: Routes = [
  {path:'',component:NgTemplateOutletComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTemplateOutletRoutingModule { }
