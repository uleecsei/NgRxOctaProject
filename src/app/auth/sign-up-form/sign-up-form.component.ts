import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.min(4), Validators.required])
  });

  constructor(authService: AuthService) { }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  ngOnInit() {
  }
}
