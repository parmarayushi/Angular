import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularBasicComponent } from './angular-basic.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path:'',component:AngularBasicComponent,
  children:[
    {path:'' ,component:MainComponent},
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularbasicsRoutingModule { }
