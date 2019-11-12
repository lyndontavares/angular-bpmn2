import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { TdMediaService, tdRotateAnimation } from '@covalent/core';
import { name, overview, routes } from '../data';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

class InfoMovimento {
    pendientes:number;
    aprovados:number;
    cancelados:number;
}
@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css'],
  animations: [
    tdRotateAnimation, // using implicit anchor name '@tdRotate' in template
  ],
})
export class OverviewComponent implements OnInit {
  
  overviewMenu=overview;
  triggerState: boolean = false;
  info: InfoMovimento;
  dataSinc: Date;

  ngOnInit(): void {
    //this.sincronizar();
  }
  
  constructor(
    private snackBarService: MatSnackBar,
    private http: HttpClient, 
    public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
    Object.assign(this, { name, overview, routes });
    this._iconRegistry.addSvgIconInNamespace('assets','logo', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg'));          
    this._iconRegistry.addSvgIconInNamespace('assets','logo-white', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/logo-white.svg'));          
    this._iconRegistry.addSvgIconInNamespace('assets','logo-red', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/logo-red.svg'));          
  }


  sincronizar() {
    this.triggerState = !this.triggerState;
    this.http.get<InfoMovimento>('/apidfe/movimento/info')
      .pipe(
      )
      .subscribe(
      data => {
        console.log(data);
        this.info = data as InfoMovimento;
        this.dataSinc = new Date();
      },
      response => {
        this.snackBarService.open('No fue posible accesar informaciones del movimiento de documentos.');
      }
    );
  }
}