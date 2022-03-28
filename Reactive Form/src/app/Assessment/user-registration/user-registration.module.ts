import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './services/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { ClientPipe } from './pipes/client.pipe';
import { OfficePipe } from './pipes/office.pipe';
import { SortclientPipe } from './pipes/sortclient.pipe';

@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserFormComponent,
    UserListComponent,
    SearchPipe,
    ClientPipe,
    OfficePipe,
    SortclientPipe,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    // HttpClientModule,
    UserRegistrationRoutingModule
  ],
   providers: [
     UsersService
    ],
})
export class UserRegistrationModule {}
