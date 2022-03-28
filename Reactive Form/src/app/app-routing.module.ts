import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {
    path: 'angularbasics',
    loadChildren: () =>
      import('./modules/angularbasics/angularbasics.module').then(
        (m) => m.AngularbasicsModule
      ),
  },
  {
    path: 'directivepipes',
    loadChildren: () =>
      import('./modules/directivepipes/directivepipes.module').then(
        (m) => m.DirectivepipesModule
      ),
  },
  {
    path: 'databinding',
    loadChildren: () =>
      import('./modules/databinding/databinding.module').then(
        (m) => m.DatabindingModule
      ),
  },
  {
    path: 'reactive',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builder.module').then(
        (m) => m.ResumeBuilderModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./Assessment/user-registration/user-registration.module').then(
        (m) => m.UserRegistrationModule
      ),
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./modules/todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'ng-template-outlet',
    loadChildren: () =>
      import('./modules/ng-template-outlet/ng-template-outlet.module').then((m) => m.NgTemplateOutletModule),
  },
  { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'form-subject', loadChildren: () => import('./modules/form-subject/form-subject.module').then(m => m.FormSubjectModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
