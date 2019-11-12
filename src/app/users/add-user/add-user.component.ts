import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { MatSnackBar } from '@angular/material';
import { RxFormBuilder, ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { FormGroup } from '@angular/forms';
import { name, routes } from '../../data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {

  subscribe = new Subscription();
  urlApi = "/apidfe/usuarios";
  id: string; 
  title: string;
  user: User = new User();
  fg: FormGroup;
  icon = "visibility";
  showPassword = "password";


  onShowPassword(){
    this.showPassword = this.showPassword === "password" ? "text" : "password";
    this.icon = this.icon === "visibility_off" ? "visibility" : "visibility_off";
  }

  @HostListener('window:keydown.esc') 
  public onEsc(): void {
    this.router.navigate(['/users']);
  }
  
  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private snackBarService: MatSnackBar,
    private formBuilder: RxFormBuilder
  ) { Object.assign(this, { name, routes }) }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
 
  ngOnInit() {
    this.fg = this.formBuilder.formGroup(this.user);
    this.id = this.route.snapshot.paramMap.get('id');
    this.setFormTitle( this.id );
    this.loadUsuario();

    ReactiveFormConfig.set({
      'validationMessage': {
        'required': 'Campo requerido',
        'minLength': 'tamaño mínimo: {{1}}',
        'maxLength': 'tamnaño máximo: {{1}}',
        'compare': 'no pasó en la comparación',
        'specialCharacter': 'carateres no permitido(s)',
        'numeric': 'Solamente caracteres numéricos',
        'alpha': 'Solamente caracteres alfabéticos'
      }
    });
  }

  loadUsuario() {
    if ( this.id === null ) {
      this.user = new User();
    }
    else{
      this.subscribe = this.http.get<User>(`/apidfe/usuarios/${this.id}`)
      .pipe(
      )
      .subscribe(
          data => { 
            //console.log(">>>");
            //console.log(data);
            this.fg.setValue(data);}
      );
    }
  }

  updateUser(model) {
     
    let user = this.fg.getRawValue();
    delete user.authorities;
    
    let verb,rota;
    if (this.id === null)
    {
      verb="POST";rota="/add";
      delete user.id;
    }
    else{
      verb="PUT";rota="/edit";
    }

    //delete user.authorities;
    //delete user.id;
    //console.log(this.fg.getRawValue());
    //console.log(user);

    this.http.request(verb,`${this.urlApi}${rota}`, {body:user} )
      .subscribe(
        (val) => {
          //console.log("PUT call successful value returned in body", val);
          this.router.navigate(['/users']);
        },
        response => {
          this.snackBarService.open("No fue grabar usuário.");
          //console.log('No fue grabar usuário.', response);
        },
        () => {
          const modo = (this.fg.getRawValue() as User).id === null ? 'adicionado':'alterado'; 
          this.snackBarService.open(`Usuário ${modo} correctamente`);
          //console.log("The PUT observable is now completed.");
      });
  }

  setFormTitle( id: any  ) {
    this.title = 'usuário';
    if ( this.id === null ) {
       this.title = 'Novo usuário';
    } else {
       this.title = 'Editar usuário';
    }
  }

}
