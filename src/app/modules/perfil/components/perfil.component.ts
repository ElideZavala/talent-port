import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AppComponent } from 'src/app/app.component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { PerfilInterface } from 'src/app/shared/interfaces/perfil.model';
import { ConfigurationModeService } from 'src/app/shared/services/configuration-mode.service';
import { HttpErrorsService } from 'src/app/shared/services/http-errors.service';
import { ValidationsRegexService } from 'src/app/shared/services/validations-regex.service';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  form!: FormGroup;
  dataForm!: PerfilInterface;
  constructor(
    private fb: FormBuilder,
    private validationsRegexService: ValidationsRegexService,
    private datePipe: DatePipe,
    private perfilService: PerfilService,
    private httpErrorService: HttpErrorsService,
    public dialog: MatDialog,
    private configurationModeService: ConfigurationModeService, public appComponent: AppComponent) { }
  today = new Date();
  maxDateTo = this.today;
  mode: string | undefined;
  ngOnInit(): void {
    this.mode = this.configurationModeService.getMode();
    console.log(this.mode);
    const regexOnly9TextandNumberSimbols = this.validationsRegexService.regexOnly9TextandNumberSimbols;
    const regexPhoneNumber = this.validationsRegexService.regexPhoneNumber;
    const regexEmail = this.validationsRegexService.regexEmail;
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['+52', [Validators.required, Validators.pattern(regexPhoneNumber)]],
      email: ['', [Validators.required, Validators.pattern(regexEmail)]],
      birthday: ['', Validators.required],
      mode: [this.mode === 'light' ? false : true],
    });
  }

  submit(){
    this.dataForm = this.form.getRawValue();
    this.dataForm.birthday = this.datePipe.transform(this.form.get('birthday')!.value, 'yyyy-MM-dd')?.toString();
    // console.log(this.dataForm);
    this.perfilService.create(this.dataForm)
    .subscribe({
      next: async (res) => {
        if (res.status === 201) {
          console.log('mensaje exitoso');
          this.openDialogResult('Tu registro fue exitoso', 'checkmark-circle-outline.png', true );
        }
        if(res.status === 403) {
          this.openDialogResult('', 'icon-error.png',true, false, 'La dirección de correo electrónico ya ha sido registrada previamente en TalentPor',
    'Recupera la contraseña para poder realizar el registro');
        }
      },
      error: err => this.httpErrorService.errorHttp(err)
    });
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
      console.log('aca reporto a los nativos mobiles')
    }
    });
  }

  changeMode(event: MatSlideToggleChange){
    // console.log(event.checked);
    this.mode = event.checked ? 'dark' : 'light';
    localStorage.setItem('mode', this.mode);
    this.appComponent.mode = this.mode;
    console.log(this.mode);
  }

}
