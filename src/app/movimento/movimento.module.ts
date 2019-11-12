import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';
 
import { MovimentoRoutingModule } from './movimento-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddMovimentoComponent } from './add/add-movimento.component';
import { ListMovimentoComponent } from './list/list-movimento.component';
import { ShowKudeComponent } from './show-kude/show-kude.component';
import { DlgxmlComponent } from './dlgxml/dlgxml.component';
    
@NgModule({
  declarations: [
    AddMovimentoComponent , 
    ListMovimentoComponent, 
    ShowKudeComponent, 
    DlgxmlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CovalentModule,
    MovimentoRoutingModule
  ],
  // Para que o componente DlgxmlComponent seja utilizável como um corpo de diálogo, 
  // precisamos declará-lo entryComponent, caso contrário, obteremos 
  // o seguinte erro ao abrir a caixa de diálogo:rror: No component factory found for DlgxmlComponent.
  // Did you add it to @NgModule.entryComponents?
  entryComponents: [DlgxmlComponent]
})
export class MovimentoModule { }  
