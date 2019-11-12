import { Component, OnInit, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { User } from '../model/user.model';
import { MatTableDataSource, MatSnackBar, MatPaginator, MatSort } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TdDialogService } from '@covalent/core';
import { catchError } from 'rxjs/operators';
import { of, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<User>;
  users: Array<User>;
  subscribe = new Subscription();
  
  displayedColumns = [
    'login',
    'alias',
    'actions'
    ];
    @HostListener('window:keydown.esc') 
    public onEsc(): void {
      this.router.navigate(['/dashboard']);
    }
  constructor(
    private router:Router,
    private http: HttpClient, 
    private dialogService: TdDialogService,
    private snackBarService: MatSnackBar) { }

  ngOnInit() {
    this.listAll();
  }

  ngOnDestroy(): void {
     this.subscribe.unsubscribe();
  }
  
  listAll() {
      this.subscribe = this.http.get<User[]>('/apidfe/usuarios')
      .pipe(
      )
      .subscribe(
      data => {
        this.dataSource = new MatTableDataSource<User>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      },
      response => {
        this.snackBarService.open('No fue posible accesar usuários.');
        //console.log('No fue posible accesar usuarios.', response);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(user:User): void {
    if ( user.username === 'admin' )
    {
      this.snackBarService.open('No fue posible eliminar usuário admin.');
    }
    else
    {
     this.dialogService.openConfirm({
        message: `Confirma que desea eliminar el usuário: ${user.username}`,
        title: 'Eliminar',
        cancelButton: 'Cancelar',
        acceptButton: 'OK',
      }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
          this.http.delete<any>(`/apidfe/usuarios/remove/${user.id}`)
            .pipe(
            )
            .subscribe(
            _ => {
              this.listAll();
            }
      );

        } else {
          // DO SOMETHING ELSE
        }
      });
    }
  }

  updateSenha(user:User)
  {
    this.dialogService.openPrompt({
      message: `Nueva Contraseña para  ${user.username}`,
      title: 'Contraseña',
      cancelButton: 'Cancelar',
      acceptButton: 'OK',
    })
    .afterClosed().subscribe((newValue: string) => {
        this.http.put<any>(`/apidfe/usuarios/password/${user.id}`, newValue)
        .pipe(
        )
        .subscribe( _ => { 
        } , res => {
          if ( res.status === 400 )
            this.snackBarService.open('contraseña no alterada');
          else if ( res.status ===200 )
            this.snackBarService.open('Nueva contraseña grabada com sucesso!');
          else if ( res.status !==200 )
            this.snackBarService.open(res.error);
          //console.log(res);
        }
        )
    });
  }

}
