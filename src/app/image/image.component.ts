import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { TdMediaService } from '@covalent/core';
import { MatSnackBar } from '@angular/material';
import { tap, last, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

class Configuracao{
  imagem:string;
  ambiente:string;
  versaoApi:string;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  
  file: any;
  config = new Configuracao();

  constructor(
    private  router : Router,
    private http: HttpClient,
    public media: TdMediaService,
    private _snackBarService: MatSnackBar
    ) {
  }


  @HostListener('window:keydown.esc') 
  public onEsc(): void {
    this.router.navigate(['/dashboard']);
  }
  
  ngOnInit() {
    this.getImagem();
  }

  getImagem(): void
  {
    const url = '/apidfe/configuracion';
    
    this.http.get<Configuracao>(url)
    .pipe(
      catchError( (error: HttpErrorResponse) => {
        if (error.error.message !== undefined )
        this._snackBarService.open(error.error.message);
        return of('Error al leer la imagen');
      })
    )
    .subscribe(
        data => { 
          this.config = data as Configuracao;
        }
    ).unsubscribe;
  }

  uploadEvent(file: File): void {
    const fd = new FormData();
    fd.append('file', file);
    this.file = fd;
    const req = new HttpRequest('POST', '/apidfe/configuracion/image/enviar', fd );
    this.http.request(req).pipe(
      tap(message => { }),
      //last(),
      catchError((error: HttpErrorResponse) => {
          //console.log(error);
          if (error === undefined ){
            this._snackBarService.open('> '+error.error.message);
            return of(`Error cargando ${file.name}.`);
          }
          return of( error.error.ok )
      })
      ).subscribe(
        (event: any) => {
            if (typeof (event) === 'string')
            {
              this._snackBarService.open(event);
            }
            else if (typeof (event) === 'object') {
              this.getImagem();
              this._snackBarService.open('Sucesso!');
            }
      }
      ).unsubscribe;
  }

  selectEvent($event){}
  cancelEvent(){}
}
