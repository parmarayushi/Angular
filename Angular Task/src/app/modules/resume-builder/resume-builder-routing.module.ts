import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';


const routes: Routes = [
  {
  path:'',
  children:[
   {path:'',redirectTo:'form',pathMatch:'full'},
   {
     path:'form',component:ResumeFormComponent
   },
    {path:'review',component:ResumeViewComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
