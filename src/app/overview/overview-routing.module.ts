import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';
import { AuthGuard } from '../infra/security';

const routes: Routes = [
  { path: '', component: OverviewComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
