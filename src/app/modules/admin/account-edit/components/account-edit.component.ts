import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Inject, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AccountInterface } from '../../../../shared/interfaces/account.model';
import { ValidationsRegexService } from '../../../../shared/services/validations-regex.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatCalendar } from '@angular/material/datepicker';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})

export class AccountEditComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  form!: FormGroup;
  exampleHeader = ExampleHeader;
  dataForm!: AccountInterface;

  constructor(
    private fb: FormBuilder,
    private validationsRegexService: ValidationsRegexService,
    private datePipe: DatePipe,
    public dialog: MatDialog
  ) { }

  today = new Date();
  maxDateTo = this.today;

  ngOnInit(): void {
    const regexPhoneNumber = this.validationsRegexService.regexPhoneNumber;
    const regexEmail = this.validationsRegexService.regexEmail;
    this.form = this.fb.group({
      birthday: ['', Validators.required],      
      lastName: ['', Validators.required],
      phone: ['+52', [Validators.required, Validators.pattern(regexPhoneNumber)]],
      email: ['', [Validators.required, Validators.pattern(regexEmail)]],
    });
  }

  submit(){

    this.dataForm = this.form.getRawValue();
    this.dataForm.birthday = this.datePipe.transform(this.form.get('birthday')!.value, 'yyyy-MM-dd')?.toString();
    this.openDialogResult('Tu registro fue exitoso', 'checkmark-circle-outline.png', true );
  }

  openDialogResult(messageApi: string, image: string, buttonOk?: boolean, buttonBack?:  boolean,  errorMessage1?: string, errorMessage2?: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {
              title: '',
              message: messageApi,
              image,
              errorMessage1,
              errorMessage2,
              buttonOk,
              buttonBack
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      const consoleLog = {
        status: true,
        status2: false,
        text: 'text'
      }
      console.log(consoleLog);
      console.log('Actualización de datos exitoso')
    }
    });
  }
}

@Component({
  selector: 'example-header',
  styles: [
    `
    .example-header {
      display: flex;
      align-items: center;
      padding: 0.5em;
      background: #774DA2;
      color: #fff;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }

    .example-header-label {
      flex: 1;
      height: 1em;
      font-weight: 500;
      text-align: center;
    }
  `,
  ],
  template: `
    <div class="example-header">
      <button mat-icon-button (click)="previousClicked('month')">
        <!-- <mat-icon>keyboard_arrow_left</mat-icon> --> 
      </button>
      <span class="example-header-label" (click)="currentPeriodClicked()">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <!-- <mat-icon>keyboard_arrow_right</mat-icon> -->
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ExampleHeader<D> implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.monthYearLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }

  currentPeriodClicked(){
    console.log('abri el calendar');

    this._calendar.currentView = this._calendar.currentView == 'month' ? 'multi-year' : 'month';
  }
}
