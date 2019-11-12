import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private snackBarService: MatSnackBar,
    private authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationService.getCurrentUser()) {

      //console.log('>>>');
      //console.log(this.authenticationService.getCurrentUser());

      if (JSON.stringify(this.authenticationService.getCurrentUser().authorities).search('ROLE_ADMIN') !== -1) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }

    } else {
      this.snackBarService.open("No tiene permisión para configuraciones de usuarios");
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}

