import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PerfilRoutingModule } from './perfil-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilComponent } from './components/perfil.component';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'es-MX' }],
})
export class PerfilModule { }
