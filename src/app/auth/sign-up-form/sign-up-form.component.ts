import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IAuthState } from '../../shared/store/auth/auth.reducer';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.min(4), Validators.required])
  });

  constructor(private store: Store<IAuthState>) { }

  get email(): AbstractControl {
    return this.form.controls.email;
  }

  get password(): AbstractControl {
    return this.form.controls.password;
  }

  signUp(): void {
    if (this.form.invalid) {
      return;
    }
    // this.store.dispatch(sign(this.form.getRawValue()));
  }

}
