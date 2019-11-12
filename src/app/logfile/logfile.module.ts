import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogfileComponent } from './logfile.component';
import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';
import { LogfileRoutingModule } from './logfile-routing.module';
  
@NgModule({
  declarations: [LogfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    LogfileRoutingModule
  ]
})
export class LogfileModule { }  
