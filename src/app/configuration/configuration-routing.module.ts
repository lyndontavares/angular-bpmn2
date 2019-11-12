import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { AuthGuard } from '../infra/security';

const routes: Routes = [
  { path: '', component: ConfigurationComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
