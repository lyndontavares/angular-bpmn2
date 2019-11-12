import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { UserService } from '../auth';
import { User, Authority } from '../users/users.service';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

    constructor(
      private http: HttpClient,
      private snackBarService: MatSnackBar,
      private configService: ConfigService,
      private userService: UserService
    ) { }

    doApiDesbloqueio(token)
    {
      return this.http.post<any>( this.configService.getDesbloqueiopiUrl(),token)
    }

    checkApiBloqueada()
    {
      return this.http.get<any>( this.configService.getCheckApiUrl())
    }

    login(username: string, password: string) {
        return this.
            http.post<any>( this.configService.getLogin_url(), { username: username, password: password })
            .pipe(map((res: any) => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                    this.snackBarService.open(username + ', ¡Bienvenido!');
                    //console.log(JSON.stringify({ username, token: res.token }));
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));
                    this.userService.getMyInfo().subscribe(
                      info => {
                           //console.log( '>>>authorities: ');
                           //console.log( info );
                           //console.log( '>>>username: ');
                           //console.log( username );
                           localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token, authorities: info }));
                      }
                      );
                }
                else{
                  this.snackBarService.open('Usuário/Senha inválido!');
                }
            }));
    }

    getToken(): String {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const token = currentUser && currentUser.token;
      return token ? token : '';
    }

    isLoggedIn(): boolean {
      const token: String = this.getToken();
      return token && token.length > 0;
    }

    logout(): void {
      localStorage.removeItem('currentUser');
    }

    getCurrentUser() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser ? currentUser : '';
    }

    isAdmin(): boolean {
       const currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
       const a: Array<Authority> = currentUser.authorities;
       //console.log( '>>>authorities');
       //console.log( a );
       //console.log( a.find( aut => aut.authority === 'ROLE_ADMIN' ) );
      return true;
    }

}



