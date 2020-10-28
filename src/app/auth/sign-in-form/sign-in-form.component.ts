import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { signIn } from '../../shared/store/auth/auth.actions';
import { IAuthState } from '../../shared/store/auth/auth.reducer';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.min(4), Validators.required])
  });

  get username(): AbstractControl {
    return this.form.controls.username;
  }

  get password(): AbstractControl {
    return this.form.controls.password;
  }

  constructor(private store: Store<IAuthState>) {}

  signIn(): void {
    if (this.form.invalid) {
      return;
    }
    this.store.dispatch(signIn(this.form.getRawValue()));
  }
}
