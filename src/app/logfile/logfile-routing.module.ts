import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogfileComponent } from './logfile.component';
import { AuthGuard } from '../infra/security';

const routes: Routes = [
  { path: '', component: LogfileComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogfileRoutingModule { }
