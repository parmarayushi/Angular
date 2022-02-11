import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularbasicsRoutingModule } from './angularbasics-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { AngularBasicComponent } from './angular-basic.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    MainComponent,
    AngularBasicComponent
  ],
  imports: [
    CommonModule,
    AngularbasicsRoutingModule
  ]
})
export class AngularbasicsModule { }
