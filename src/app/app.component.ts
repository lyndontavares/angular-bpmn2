import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  name = '';

  routes: Object[] = [
  {
    icon: 'dashboard',
    route: 'dashboard',
    title: 'Dashboard',
  }, 
  {
    icon: 'bug_report',
    route: 'logs',
    title: 'Server Logs',
  }, 
  {
    icon: 'exit_to_app',
    route: 'login',
    title: 'Salir',
  }
  
  ];

  constructor(
    public media: TdMediaService, 
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {

    this._iconRegistry.addSvgIconInNamespace('assets','logo', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg'));          
    this._iconRegistry.addSvgIconInNamespace('assets','logo-white', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/logo-white.svg'));          
    this._iconRegistry.addSvgIconInNamespace('assets','logo-red', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/logo-red.svg'));          


  }


  ngOnInit() {
    ReactiveFormConfig.set({
      'validationMessage': {
      'required':  'Campo requerido',
      'minLength': 'tamanho mínimo: {{1}}',
      'maxLength': 'tamnanho máximo: {{1}}',
      'compare': 'não passou na comparação',
      'specialCharacter' : 'carateres não permitido(s)',
      'alpha': 'somente caracteres alfabáticos'
      }
  });
  }

}
