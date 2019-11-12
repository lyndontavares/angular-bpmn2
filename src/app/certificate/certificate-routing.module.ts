import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificateComponent } from './certificate.component';
import { AuthGuard } from '../infra/security';

const routes: Routes = [
  { path: '', component: CertificateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateRoutingModule { }
