import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { UpdatePasswordFormComponent } from './update-password-form/update-password-form.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: SignInFormComponent
      },
      {
        path: 'register',
        component: SignUpFormComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordFormComponent
      },
      {
        path: 'update-password',
        component: UpdatePasswordFormComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
