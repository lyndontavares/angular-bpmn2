import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatIconRegistry } from '@angular/material';
import { UserService } from '../infra/auth';
import { AuthenticationService } from '../infra/security';
import { DomSanitizer } from '@angular/platform-browser';
import { tap, catchError, first } from 'rxjs/operators';

class Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./css/main.css', './css/util.css']
})
export class Login3Component implements OnInit {

  login : Login = new Login();
  loading = false;
  returnUrl: string;
  apiBloqueada=false;
  token='';
    
  @ViewChild("username") nameField:ElementRef;
  editUSerName():void{
    this.nameField.nativeElement.focus();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private snackBarService: MatSnackBar,
    private userService: UserService,
    private authenticationService: AuthenticationService ,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer   
  ) { 
    this._iconRegistry.addSvgIconInNamespace('assets','logo', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg'));          
  }

  ngOnInit() {
    this.userService.logout();
  }

  isBloqueada(){
    return this.apiBloqueada;
  }

  doLogin() {
    if ( this.login.username==='admin' && this.login.password==='admin')
    {
      localStorage.setItem('currentUser', JSON.stringify({ username:this.login.username , token: 'token', authorities: [] }));
      this.router.navigate(['dashboard']);
    }
    else{
      this.snackBarService.open('Login/Contraseña invalido.')
    }
  }

  doReset(loginForm){
    loginForm.resetForm();
  }
}
