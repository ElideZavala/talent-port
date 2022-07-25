import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { MatDialog } from '@angular/material/dialog';
import { ErrorInterface } from '../interfaces/error.model';
import { DialogComponent } from '../components/dialog/dialog.component';
@Injectable({
  providedIn: 'root'
})
export class HttpErrorsService {

  constructor(
    public dialog: MatDialog,
    private router: Router) { }

  errorHttp(err: any): void {
    const er: ErrorInterface = err.error.errors[0];
    switch (err.status) {
     case 401:
          this.router.navigate(['/login']);
          break;
      case 409:
        this.dialog.open(DialogComponent, {
          data: {
            title: 'dialogComponent.information',
            message: er.code === '1451' ? `${er.status} - ${er.title}, No se puede eliminar porque contiene información dependiente` : `${er.status} - ${er.title}, ${er.detail}` ,
            buttonYes: false,
            buttonNo: false,
            buttonOk: true,
          },
        });
        break;
      default:
        this.dialog.open(DialogComponent, {
          data: {
            title: 'dialogComponent.information',
            message: `${er.status} - ${er.title}, ${er.detail}` ,
            buttonYes: false,
            buttonNo: false,
            buttonOk: true,
          },
        });
        break;
    }

  }
}

