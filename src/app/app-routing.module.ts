import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-frontend',
    pathMatch: 'full',
  },
  {
    path: 'home-frontend',
    loadChildren: () =>
      import('./modules/home-fronted/home-fronted.module').then((m) => m.HomeFrontedModule),
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
  {
    path: 'perfil',
    loadChildren: () =>
      import('./modules/perfil/perfil.module').then((m) => m.PerfilModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
