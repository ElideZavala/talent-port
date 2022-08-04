import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEditComponent } from './account-edit/components/account-edit.component';
import { InvitationCodeComponent } from './invitation-code/invitation-code.component';

const routes: Routes = [
  {
    path: 'Invitation',
    component: InvitationCodeComponent
  },
  {
    path: 'account',
    component: AccountEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
