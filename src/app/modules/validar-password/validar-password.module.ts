import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidarPasswordRoutingModule } from './validar-password-routing.module';
import { ValidarPasswordComponent } from './validar-password.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ValidarPasswordComponent
  ],
  imports: [
    CommonModule,
    ValidarPasswordRoutingModule,
    SharedModule
  ]
})
export class ValidarPasswordModule { }
