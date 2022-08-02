import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { InvitationCodeComponent } from './invitation-code/invitation-code.component';

const routes: Routes = [
  {
    path: '',
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
