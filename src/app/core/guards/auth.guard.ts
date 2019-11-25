import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canLoad(router: Route) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        console.log('logged in');
        return true;
    }
    console.log('logged out');
    this.router.navigate(['public/login']);
    return false;
  }

}
