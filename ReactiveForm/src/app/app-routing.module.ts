import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'reactive',loadChildren:()=>import('./modules/users/users.module').then(m=>m.UsersModule)},
  // {path:'',redirectTo:"reactive",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
