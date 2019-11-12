import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            //console.log(">>>autorizado");
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        //console.log('>>>não autorizado!')
        return false;
    }
}
