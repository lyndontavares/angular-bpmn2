import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import { TdMediaService, tdRotateAnimation } from '@covalent/core';
import { MatIconRegistry, MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

class Resumo {
  aprovados:number;
  cancelados:number;
  pendientes:number;
}

class Serie {
    name: string;
    value: Resumo;
}

@Component({
  selector: 'types-bar',
  templateUrl: './logfile.component.html',
  styleUrls: ['./logfile.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  animations: [
    tdRotateAnimation, // using implicit anchor name '@tdRotate' in template
  ],
})
export class LogfileComponent implements OnInit, AfterViewInit {

  arquivos:Array<string>;
  arquivo:string;
  nomeArquivo:string;
  triggerState: boolean = false;

  ngAfterViewInit(): void { 
   // this.listarArquivos();
  }
  
  ngOnInit(): void {
    this.listarArquivos();
  }

  constructor(
    public media: TdMediaService,
    private http: HttpClient, 
    private snackBarService: MatSnackBar,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
  }


  listarArquivos(){
    this.http.get<Array<string>>('/apidfe/configuracion/server/logs')
      .subscribe(
      data => {
        //console.log(data);
        this.arquivos = data as Array<string>;
        this.arquivos=this.arquivos.sort();
        this.nomeArquivo = '';
        this.arquivo = null;
      },
      response => {
        this.snackBarService.open('No fue posible accesar informaciones de logs.');
      }
    );
  }

  carregarArquivo(arquivo){
    //console.log(arquivo);
    this.nomeArquivo=arquivo;
    this.http.get<any>('/apidfe/configuracion/server/logs/'+arquivo)
      .subscribe(
      data => {
        //console.log(data);
        this.arquivo = data as string;
        if ( this.arquivo == null  ||  this.arquivo == '')
          this.arquivo ='(sin contenido)'
      },
      response => {
        //console.log(response);
        this.snackBarService.open('No fue posible accesar informaciones de log.');
       }
    );
  }



}
