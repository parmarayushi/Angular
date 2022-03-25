import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSubjectComponent } from './form-subject.component';

const routes: Routes = [
  { path: '', component: FormSubjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormSubjectRoutingModule { }
