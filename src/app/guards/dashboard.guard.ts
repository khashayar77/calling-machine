import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class Dashabaord implements CanActivate {
  constructor(private authservice: AuthService, private router: Router ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean | UrlTree {
    return this.authservice.user.getValue() != null ? true : this.router.parseUrl('/dashboard');
  }
}
