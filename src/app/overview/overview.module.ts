import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { } 
