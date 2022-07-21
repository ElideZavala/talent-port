import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title!: string;
  message!: string;
  description!: string;
  buttonYes!: boolean;
  buttonNo!: boolean;
  buttonOk!: boolean;

  constructor(
      private dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any
      ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.message = this.data.message;
    this.description = this.data.description;
    this.buttonNo = this.data.buttonNo;
    this.buttonYes = this.data.buttonYes;
    this.buttonOk = this.data.buttonOk;
  }

  onNoClick(): void {
   this.dialogRef.close();
  }

}
