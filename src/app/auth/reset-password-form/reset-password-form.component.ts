import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAuthState } from '../../shared/store/auth/auth.reducer';
import { resetPassword } from '../../shared/store/auth/auth.actions';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordFormComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email])
  });
  constructor(private store: Store<IAuthState>) { }

  get username(): AbstractControl {
    return this.form.controls.username;
  }

  onReset(): void {
    if (this.form.invalid) {
      return;
    }
    this.store.dispatch(resetPassword(this.form.getRawValue()));
  }
}
