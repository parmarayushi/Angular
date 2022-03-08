import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration.component';


const routes: Routes = [

  {path:'',
    children:[
      {path:'',component:UserRegistrationComponent},
      {path:"cancel",component:UserRegistrationComponent},
      {path:'user',component:UserRegistrationComponent},
      {path:"edit/:id",component:UserRegistrationComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegistrationRoutingModule { }
