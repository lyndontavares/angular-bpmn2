import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AuthGuard } from '../infra/security';
import { ListMovimentoComponent } from './list/list-movimento.component';
import { AddMovimentoComponent } from './add/add-movimento.component';
import { ShowKudeComponent } from './show-kude/show-kude.component';

const routes: Routes = [
  { path: '', component: ListMovimentoComponent, canActivate: [AuthGuard]  },
  { path: '_blank', component: ShowKudeComponent, canActivate: [AuthGuard]  },
  { path: 'add', component: AddMovimentoComponent, canActivate: [AuthGuard]  },
  { path: 'edit/:id', component: AddMovimentoComponent, canActivate: [AuthGuard]  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentoRoutingModule { }
