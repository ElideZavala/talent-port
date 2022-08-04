import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-invitation-code',
  templateUrl: './invitation-code.component.html',
  styleUrls: ['./invitation-code.component.scss']
})
export class InvitationCodeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  apply(): void {
    // this.sliderService.getSlider()
    //   .subscribe({
    //     next: async (res) => {
    //       if (res.status === 201) {

    //       }
    //       if (res.status === 403) {
    //         // 
    //       }
    //     },
    //     error: err => this.httpErrorService.errorHttp(err)
    //   });
  }
  generateCode(): void {
    console.log("Success");
    // this.sliderService.getSlider()
    //   .subscribe({
    //     next: async (res) => {
    //       if (res.status === 201) {

    //       }
    //       if (res.status === 403) {
    //         // 
    //       }
    //     },
    //     error: err => this.httpErrorService.errorHttp(err)
    //   });
  }

  openDialogResult(messageApi: string, image: string, buttonOk?: boolean, buttonBack?: boolean, errorMessage1?: string, errorMessage2?: string) {
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
