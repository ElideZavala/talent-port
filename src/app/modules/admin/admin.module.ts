import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { InvitationCodeComponent } from './invitation-code/invitation-code.component';
import { AccountEditComponent } from './account-edit/components/account-edit.component';
import { AdminRoutingModule } from './admin-fronted-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleHeader } from './account-edit/components/account-edit.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { PasswordChangeComponent } from './account-edit/password-change/components/password-change.component';



@NgModule({
  declarations: [
    InvitationCodeComponent,
    AccountEditComponent,
    ExampleHeader,
    PasswordChangeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'es-MX' }],
})
export class AdminModule { }
