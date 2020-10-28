import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { UpdatePasswordFormComponent } from './update-password-form/update-password-form.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
    ResetPasswordFormComponent,
    UpdatePasswordFormComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
