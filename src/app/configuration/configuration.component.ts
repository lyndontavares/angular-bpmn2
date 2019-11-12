import { Component, OnInit, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { name, routes } from '../data';
import { Configuration } from './configuration.model';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit, OnDestroy, AfterViewInit {

  subscribe = new Subscription();
  urlApi = "/apidfe/configuracion";
  showPassword = "password";
  showApiPassword = "password";
  icon = "visibility";
  icon2 = "visibility";
  config: Configuration = new Configuration() 
  configFormGroup: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient, 
              private formBuilder: RxFormBuilder,
              private _snackBarService: MatSnackBar) {
    Object.assign(this, { name, routes })
  }

  @HostListener('window:keydown.f6') 
  public onGravar(): void {
    this.updateConfig() ;
  }

  @HostListener('window:keydown.esc') 
  public onEsc(): void {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
    this.configFormGroup = this.formBuilder.formGroup(this.config);
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

  ngAfterViewInit(): void {
    this.getConfiguracaoAtual();
  }

  ativarSincronizacao() {
    let syncAtiva = this.configFormGroup.controls.ativarSincronizacao.value;
    if (syncAtiva) {
      this.configFormGroup.controls.intervaloChecagemRecebimento.enable();
      this.configFormGroup.controls.intervaloEnvioEmails.enable();
    } else {
      this.configFormGroup.controls.intervaloChecagemRecebimento.disable();
      this.configFormGroup.controls.intervaloEnvioEmails.disable();
    }
  }
  
  getConfiguracaoAtual() {
    this.subscribe = this.http
      .get<Configuration>(this.urlApi)
      .pipe( )
      .subscribe(apiData => {
        this.config = apiData as Configuration;
        delete(this.config['imagem']);
        this.configFormGroup.setValue(this.config);
        //console.log(this.config);
      },
      response => {
        this._snackBarService.open("No fue posible accesar las configuraciones generales.");
        //console.log("GET call in error", response);
      });
 
  }

  updateConfig() {
    return this.http
      .put<Configuration>(`${this.urlApi}/update`, this.configFormGroup.getRawValue())
      .subscribe(
        (val) => {
          //console.log("Atualizado com sucesso!", val);
          this.router.navigate(['/dashboard']);
        },
        response => {
          //console.log("PUT call in error", response);
        },
        () => {
          this._snackBarService.open("Configuraciones alteradas correctamente");
          console.log("The PUT observable is now completed.");
        });
  }

  onShowPassword(){
    this.showPassword = this.showPassword === "password" ? "text" : "password";
    this.icon = this.icon === "visibility_off" ? "visibility" : "visibility_off";
  }
  onShowApiPassword(){
    this.showApiPassword = this.showApiPassword === "password" ? "text" : "password";
    this.icon2 = this.icon2 === "visibility_off" ? "visibility" : "visibility_off";
  }

}