import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';
import { AutofocusModule } from '../infra/directive/autofocus.module';

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CovalentModule,
    AutofocusModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }  
