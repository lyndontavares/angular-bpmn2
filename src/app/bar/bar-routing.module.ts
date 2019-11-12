import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../infra/security';
import { BarComponent } from './bar.component';

const routes: Routes = [
  { path: '', component: BarComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
