import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './modules/users/form/form.component';
import { ListComponent } from './modules/users/list/list.component';
import { UsersModule } from './modules/users/users.module';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./modules/users/users.module').then(m=>m.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
