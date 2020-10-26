import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(options: {email: string, password: string}) {
    console.log(options);
  }
  register(options: {name: string, email: string, password: string}) {
    console.log(options);
  }
  resetPassword(options: {email: string}) {
    console.log(options);
  }
  updatePassword(options: {password}) {
    console.log(options);
  }
}
