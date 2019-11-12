import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateComponent } from './certificate.component';
import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';
import { FileUploadComponent } from '../infra/comps/file-upload/file-upload.component';
import { AutofocusModule } from '../infra/directive/autofocus.module';
  
@NgModule({
  declarations: [CertificateComponent , FileUploadComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CovalentModule,
    AutofocusModule,
    CertificateRoutingModule
     
  ]
})
export class CertificateModule { }  
