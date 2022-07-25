import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule }            from '@angular/material/card';
import { MatMenuModule }            from '@angular/material/menu';
import { MatTabsModule }            from '@angular/material/tabs';
import {MatGridListModule}          from '@angular/material/grid-list';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatDatepickerModule }      from '@angular/material/datepicker';
import { MatListModule }            from '@angular/material/list';
import { MatDividerModule }         from '@angular/material/divider';
import { MatProgressBarModule }     from '@angular/material/progress-bar';
import { MatSidenavModule }         from '@angular/material/sidenav';
import { MatAutocompleteModule }    from '@angular/material/autocomplete';
import { MatStepperModule }         from '@angular/material/stepper';
import { MatTableModule }           from '@angular/material/table';
import { MatExpansionModule }       from '@angular/material/expansion';
import { MatSelectModule }          from '@angular/material/select';
import { MatSnackBarModule }        from '@angular/material/snack-bar';
import { MatDialogModule }          from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule }         from '@angular/material/tooltip';
import { MatBadgeModule }           from '@angular/material/badge';
import { MatSortModule }            from '@angular/material/sort';
import { MatChipsModule }           from '@angular/material/chips';
import {MatTreeModule} from '@angular/material/tree';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    // HttpClientModule,
    MatTooltipModule,
    MatBadgeModule,
    MatSortModule,
    MatChipsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatRadioModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatSlideToggleModule,
    MatStepperModule

  ]
})
export class MaterialModule { }
