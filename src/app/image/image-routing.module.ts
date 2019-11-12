import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image.component';
import { AuthGuard } from '../infra/security';

const routes: Routes = [
  { path: '', component: ImageComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
