
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log( '>>>JwtInterceptor colocando Token no request' );
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {

             //console.log( '>>>JwtInterceptor Token' );
             //console.log( currentUser.token );

            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        } else{
            //console.log( '>>>JwtInterceptor Token NAO' );
        }

        return next.handle(request);
    }
}
