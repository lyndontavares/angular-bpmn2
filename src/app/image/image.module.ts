import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from './image.component';
import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';
import { ImageRoutingModule } from './image-routing.module';
  
@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    ImageRoutingModule
     
  ]
})
export class ImageModule { }  
