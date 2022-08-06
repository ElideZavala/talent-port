import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEditComponent } from './account-edit/components/account-edit.component';
import { PasswordChangeComponent } from './account-edit/password-change/components/password-change.component';
import { InvitationCodeComponent } from './invitation-code/invitation-code.component';

const routes: Routes = [
  {
    path: 'invitation',
    component: InvitationCodeComponent
  },
  {
    path: 'account',
    component: AccountEditComponent
  },
  {
    path: 'account/passwordChange',
    component: PasswordChangeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
