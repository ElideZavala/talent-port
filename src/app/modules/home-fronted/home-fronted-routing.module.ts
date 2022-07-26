import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFrontedComponent } from './components/home-fronted/home-fronted.component';

const routes: Routes = [
  {
  path: '',
  component: HomeFrontedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFrontedRoutingModule { }
