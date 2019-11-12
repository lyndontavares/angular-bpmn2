import { Component, OnInit, ViewChild, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { Movimento } from '../model/movimento.model';
import { MatTableDataSource, MatSnackBar, MatPaginator, MatSort, MatDialog, MatIconRegistry } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService } from '@covalent/core';
import { Router } from '@angular/router';
import { DlgxmlComponent } from '../dlgxml/dlgxml.component';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-list-movimento',
  templateUrl: './list-movimento.component.html',
  styleUrls: ['./list-movimento.component.scss']
})
export class ListMovimentoComponent implements OnInit, OnDestroy {

  private subscribe: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Movimento>;
  users: Array<Movimento>;
  
  
  displayedColumns = [
    'id',
    'cdc',
    'updatedDate',
    'emailEnviado',
    'situacao',
    'actions'
    ];

  constructor(
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    private router: Router,
    private http: HttpClient, 
    private dialogService: TdDialogService,
    public dialog: MatDialog,
    private snackBarService: MatSnackBar) {

      iconRegistry.addSvgIcon('file-xml',sanitizer.bypassSecurityTrustResourceUrl('assets/file-xml.svg'));
      iconRegistry.addSvgIcon('file-pdf',sanitizer.bypassSecurityTrustResourceUrl('assets/file-pdf.svg'));

     }

    @HostListener('window:keydown.esc') 
    public onEsc(): void {
      this.router.navigate(['/dashboard']);
    }
    

  ngOnInit() {
    this.listAll();
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  listAll() {
      this.subscribe = this.http.get<Movimento[]>('/apidfe/documentos')
      .pipe(
      )
      .subscribe(
      data => {
        //console.log(data)
        this.dataSource = new MatTableDataSource<Movimento>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      },
      response => {
        this.snackBarService.open('No fue posible recuperar los movimentos.');
      }
    );
  }
 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //console.log('>>>applyfilter');
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      //console.log('>>>first page');
    }
  }

  showKude(cdc){
    window.open(`/apidfe/kude?cdc=${cdc}`, '_blank');
  }

  enviarEmail(cdc){

    this.dialogService.openConfirm({
      message: `Confirma email CDC ${cdc}`,
      title: 'Enviar Email',
      cancelButton: 'Cancelar',
      acceptButton: 'Enviar',
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.snackBarService.open(`Enviado email  CDC ${cdc}`);
        this.http
        .get<any>(`/apidfe/mail/adjunto?cdc=${cdc}`)
        .subscribe(
          (val) => {
            this.snackBarService.open(val);
          },
          response => {
            this.snackBarService.open(response.error.text);
          },
        );
      } 
    });

  }

  enviarSifen(mov){

    if ( mov.situacao === 'Aguardando Envio')
    {

    this.http
      .post<any>(`/apidfe/v1/recibe/enviar/pendiente/cdc`,mov.cdc)
      .subscribe(
        (val) => {
          this.snackBarService.open(val);
        },
        response => {
          //console.log(response);
          this.snackBarService.open(response.error.text);
        },
      );
    }
    else
    {
      this.snackBarService.open('Envar Sifem solamente com situación: Aguardando Envio');
    }
  }

  imprimirKude(cdc){
    // this.router.navigate(['/movimento/_blank',cdc]);
    openKude(); 
    function openKude() { 
            var win = window.open('/movimento/_blank','_blank'); 
            setTimeout(() => {  
                downloadFile( `/apidfe/kude?cdc=${cdc}` , function(blob) {  
                    const url: any = URL.createObjectURL(blob);  
                    win.location = url;  
                })  
            , 300 })
     };  

     function downloadFile(url, success) {  
       const currentUser = JSON.parse(localStorage.getItem('currentUser'));
       let xhr = new XMLHttpRequest();  
       xhr.open('GET', url, true);  
       xhr.setRequestHeader('Authorization', `Bearer ${currentUser.token}`);  
       xhr.responseType = 'blob'; 
       xhr.onreadystatechange = function() {  
       if (xhr.readyState == 4) {  
           if (success) success(xhr.response); 
           } 
       };
       xhr.send(null);
    };
  }
  
  imprimirXML(cdc){
    this.http
    .get<string>(`/apidfe/documentos/xml/`+cdc, { responseType: 'text' as 'json'})
    .subscribe(
      (xml) => {

        const dialogRef : any = this.dialog.open(DlgxmlComponent, {
          width: '1124px',
          data: xml
        });

        dialogRef.afterClosed().subscribe(result => {
          if(result) {
          }
        });

      },
      response => {
        console.log(response)
        this.snackBarService.open(response.error.text);
      },
    );
  }
 
}
