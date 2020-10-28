import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.authService.hasToken()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
