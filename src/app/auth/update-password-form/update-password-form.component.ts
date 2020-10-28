import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-update-password-form',
  templateUrl: './update-password-form.component.html',
  styleUrls: ['./update-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdatePasswordFormComponent {
  form: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.min(4)]),
    repeatPassword: new FormControl(null, [Validators.required, Validators.min(4)])
  });
  constructor(private authService: AuthService) { }

  get password(): AbstractControl {
    return this.form.controls.password;
  }

  get repeatPassword(): AbstractControl {
    return this.form.controls.repeatPassword;
  }

  onSubmit() {
    // this.authService.updatePassword({password: this.form.get('password').value});
  }
}
