import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' ,redirectTo:'emp' ,pathMatch:'full'},
  { path: 'emp', loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'component-communication', loadChildren: () => import('./modules/component-communication/component-communication.module').then(m => m.ComponentCommunicationModule) },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
