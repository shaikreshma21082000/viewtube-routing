import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {VerifyService} from './verify.service'

@Injectable({
  providedIn: 'root'
})
export class VerifyGuard implements CanActivate {
  constructor(private verifyService: VerifyService,private router: Router) { 

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url == '/studio-upload')
      return this.checkIsUserLogin(state.url);
    return true;
  }
  checkIsUserLogin(url: string) {
    if (this.verifyService.isLoggedIn) {
      return this.verifyService.isLoggedIn;
    }
    this.verifyService.redirectUrl = url;
    return this.router.parseUrl('/accounts/login');
  }
  
}
