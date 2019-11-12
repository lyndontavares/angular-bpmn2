import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Movimento } from '../model/movimento.model';
import { MatSnackBar } from '@angular/material';
import { RxFormBuilder, ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { FormGroup } from '@angular/forms';
import { name, routes } from '../../data';

@Component({
  selector: 'app-add-movimento',
  templateUrl: './add-movimento.component.html',
  styleUrls: ['./add-movimento.component.scss']
})
export class AddMovimentoComponent implements OnInit, OnDestroy {
  
  subscribe:any;
  urlApi = "/apidfe/documentos";
  id: string; 
  title: string;
  user: Movimento = new Movimento();
  fg: FormGroup;

  @HostListener('window:keydown.esc') 
  public onEsc(): void {
    this.router.navigate(['/movimento']);
  }
  
  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private snackBarService: MatSnackBar,
    private formBuilder: RxFormBuilder
  ) { Object.assign(this, { name, routes }) }

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

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  loadUsuario() {
    if ( this.id === null ) {
      this.user = new Movimento();
    }
    else{

    this.subscribe = this.http.get<Movimento>(`/apidfe/documentos/${this.id}`)
      .pipe(
      )
      .subscribe(
          data => { this.fg.setValue(data);}
      );
    }
  }

  updateUser(model) {
    this.http
      .put<Movimento>(`${this.urlApi}/edit`, this.fg.getRawValue())
      .subscribe(
        (val) => {
          console.log("PUT call successful value returned in body", val);
          this.router.navigate(['/movimento']);
        },
        response => {
          this.snackBarService.open("No fue grabar movimento.");
        },
        () => {
          const modo = (this.fg.getRawValue() as Movimento).id === null ? 'adicionado':'alterado'; 
          this.snackBarService.open(`Movimiento ${modo} correctamente`);
      });
  }

  setFormTitle( id: any  ) {
    this.title = 'Movimiento';
    if ( this.id === null ) {
       this.title = 'Novo Movimiento';
    } else {
       this.title = 'Editar Movimiento';
    }
  }



}
