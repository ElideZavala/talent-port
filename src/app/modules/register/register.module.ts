import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { ExampleHeader, RegisterComponent } from './components/register.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegisterComponent,
    ExampleHeader
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'es-MX' }],
})
export class RegisterModule { }
