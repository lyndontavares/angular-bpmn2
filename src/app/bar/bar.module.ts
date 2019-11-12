import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';
import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';
import { ChartModule } from '../shared/chart/chart.module';
   
@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    ChartModule,
    BarRoutingModule
  ]
})
export class BarModule {
} 

