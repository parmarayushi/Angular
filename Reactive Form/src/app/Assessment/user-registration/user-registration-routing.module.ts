import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration.component';


const routes: Routes = [

  {path:'',
    children:[
      {path:'',component:UserRegistrationComponent},
      {path:"cancel",component:UserRegistrationComponent},
      // {path:'user',component:UserRegistrationComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegistrationRoutingModule { }
