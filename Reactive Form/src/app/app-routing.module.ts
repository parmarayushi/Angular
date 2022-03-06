import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
