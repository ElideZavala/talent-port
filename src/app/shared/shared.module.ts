import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DialogComponent
  ]
})
export class SharedModule { }
