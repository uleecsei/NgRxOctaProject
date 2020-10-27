import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-update-password-form',
  templateUrl: './update-password-form.component.html',
  styleUrls: ['./update-password-form.component.scss']
})
export class UpdatePasswordFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.min(4)]),
    repeatPassword: new FormControl(null, [Validators.required, Validators.min(4)])
  });
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get repeatPassword(): AbstractControl {
    return this.form.get('repeatPassword');
  }

  onSubmit() {
    this.authService.updatePassword({password: this.form.get('password').value});
  }
}
