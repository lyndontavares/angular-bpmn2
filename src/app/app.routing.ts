import { Routes, RouterModule } from '@angular/router';
import { Login3Component } from './login3/login3.component';

  const appRoutes: Routes = [
  { path: '', component: Login3Component },
  { path: 'dashboard', loadChildren: './overview/overview.module#OverviewModule' },
  { path: 'certificate', loadChildren: './certificate/certificate.module#CertificateModule' },
  { path: 'image', loadChildren: './image/image.module#ImageModule' },
  { path: 'grafico', loadChildren: './bar/bar.module#BarModule' },
  { path: 'logs', loadChildren: './logfile/logfile.module#LogfileModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'movimento', loadChildren: './movimento/movimento.module#MovimentoModule' },
  { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationModule' },
  { path: 'login' , component: Login3Component },
  { path: '**', component: Login3Component  }
];

export const routing = RouterModule.forRoot(appRoutes);
