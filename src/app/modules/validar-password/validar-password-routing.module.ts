import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarPasswordComponent } from './validar-password.component';

const routes: Routes = [
  {
    path: '',
  component: ValidarPasswordComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidarPasswordRoutingModule { }
