import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AuthGuard, AdminGuard } from '../infra/security';

const routes: Routes = [
  { path: '', component: ListUserComponent, canActivate: [AdminGuard]  },
  { path: 'add', component: AddUserComponent, canActivate: [AdminGuard]  },
  { path: 'edit/:id', component: AddUserComponent, canActivate: [AdminGuard]  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
