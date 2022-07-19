import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'validar',
    loadChildren: () =>
      import('./modules/validar-password/validar-password.module').then((m) => m.ValidarPasswordModule),
  },
  {
    path: 'slider',
    loadChildren: () =>
      import('./modules/slider/slider.module').then((m) => m.SliderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
