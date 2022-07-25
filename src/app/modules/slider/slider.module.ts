import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LottieModule } from 'ngx-lottie'; // add this line


export function playerFactory() { // add this line
  return import('lottie-web'); // add this line
} 

@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    SliderRoutingModule,
    SharedModule, 
    LottieModule.forRoot({ player: playerFactory, }) // add this line

  ]
})
export class SliderModule { }
