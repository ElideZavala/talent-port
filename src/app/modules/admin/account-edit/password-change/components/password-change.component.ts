
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatDateFormats, DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { HttpErrorsService } from 'src/app/shared/services/http-errors.service';
import { ValidationsRegexService } from 'src/app/shared/services/validations-regex.service';
// import { RegisterService } from '../services/register.service';
import { PasswordInterface } from '../../../../../shared/interfaces/passwordChange.model';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {
  form!: FormGroup;
  password: string = 'password';
  newpassword: string = 'password'
  confirmPassword: string = 'password';
  dataForm!: PasswordInterface;

  constructor(
    private fb: FormBuilder,
    private validationsRegexService: ValidationsRegexService,
    private datePipe: DatePipe,
    public dialog: MatDialog,) { }

  ngOnInit(): void {

    const regexOnly9TextandNumberSimbols = this.validationsRegexService.regexOnly9TextandNumberSimbols;
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.pattern(regexOnly9TextandNumberSimbols), Validators.min(9)]],
      newpassword: ['', [Validators.required, Validators.pattern(regexOnly9TextandNumberSimbols), Validators.min(9)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(regexOnly9TextandNumberSimbols), Validators.min(9)]]
    });

    this.form.valueChanges.subscribe((val) => {
      if (val.newpassword !== val.confirmPassword){
        this.form.controls['confirmPassword'].setErrors({incorrect: true});
      }
    });

  }

  changeView(input: string){
    this.password = input == 'password' ? this.password === 'password' ? 'text' : 'password' : 'password' ;
    this.newpassword = input == 'password' ? this.password === 'password' ? 'text' : 'password' : 'password' ;
    this.confirmPassword = input == 'confirmPassword' ? this.confirmPassword === 'password' ? 'text' : 'password' : 'password' ;
  }

  submit(){

    this.dataForm = this.form.getRawValue();
    
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
      console.log('ya se completo el registro')
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
      <!-- <button mat-icon-button (click)="previousClicked('month')"> -->
        <!-- <mat-icon>keyboard_arrow_left</mat-icon> --> 
      <!-- </button> -->
      <!-- <span class="example-header-label" (click)="currentPeriodClicked()">{{periodLabel}}</span> -->
      <!-- <button mat-icon-button (click)="nextClicked('month')"> -->
        <!-- <mat-icon>keyboard_arrow_right</mat-icon> -->
      <!-- </button> -->
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ExampleHeader<D> implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    // private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    // _calendar.stateChanges
      // .pipe(takeUntil(this._destroyed))
      // .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  // get periodLabel() {
  //   return this._dateAdapter
  //     .format(
  //     )
  //     .toLocaleUpperCase();
  }

  // previousClicked(mode: 'month' | 'year') {
  //   this._calendar.activeDate =
  //     mode === 'month'
  //       ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
  //       : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  // }

  // nextClicked(mode: 'month' | 'year') {
  //   this._calendar.activeDate =
  //     mode === 'month'
  //       ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
  //       : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  // }

  // currentPeriodClicked(){
  //   console.log('abri el calendar');

  //   this._calendar.currentView = this._calendar.currentView == 'month' ? 'multi-year' : 'month';
  // }
