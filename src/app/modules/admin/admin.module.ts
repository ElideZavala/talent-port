import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvitationCodeComponent } from './invitation-code/invitation-code.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AdminRoutingModule } from './admin-fronted-routing.module';



@NgModule({
  declarations: [
    InvitationCodeComponent,
    AccountEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,


  ]
})
export class AdminModule { }
