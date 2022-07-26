import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFrontedRoutingModule } from './home-fronted-routing.module';
import { HomeFrontedComponent } from './components/home-fronted/home-fronted.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeFrontedComponent
  ],
  imports: [
    CommonModule,
    HomeFrontedRoutingModule,
    SharedModule
  ]
})
export class HomeFrontedModule { }
