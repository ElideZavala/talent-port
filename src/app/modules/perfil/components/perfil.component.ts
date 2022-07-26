import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { PerfilInterface } from 'src/app/shared/interfaces/perfil.model';
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
    public dialog: MatDialog,) { }
  today = new Date();
  maxDateTo = this.today;
  ngOnInit(): void {
    const regexOnly9TextandNumberSimbols = this.validationsRegexService.regexOnly9TextandNumberSimbols;
    const regexPhoneNumber = this.validationsRegexService.regexPhoneNumber;
    const regexEmail = this.validationsRegexService.regexEmail;
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['+52', [Validators.required, Validators.pattern(regexPhoneNumber)]],
      email: ['', [Validators.required, Validators.pattern(regexEmail)]],
      birthday: ['', Validators.required],
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

}
