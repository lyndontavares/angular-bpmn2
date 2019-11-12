import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { MaterialModule } from '../shared/material/material.module';
import { CovalentModule } from '../shared/covalent/covalent.module';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutofocusModule } from '../infra/directive/autofocus.module';
    
@NgModule({
  declarations: [AddUserComponent , ListUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CovalentModule,
    AutofocusModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }  
