import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title!: string;
  image!: string;
  message!: string;
  description!: string;
  errorMessage1!: string;
  errorMessage2!: string;
  buttonYes!: boolean;
  buttonNo!: boolean;
  buttonOk!: boolean;
  buttonBack!: boolean;
  constructor(
      private dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any
      ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.image = `assets/img/${this.data.image}`;
    this.message = this.data.message;
    this.description = this.data.description;
    this.errorMessage1 = this.data.errorMessage1;
    this.errorMessage2 = this.data.errorMessage2;
    this.buttonNo = this.data.buttonNo;
    this.buttonYes = this.data.buttonYes;
    this.buttonOk = this.data.buttonOk;
    this.buttonBack = this.data.buttonBack;
  }

  onNoClick(): void {
   this.dialogRef.close();
  }

}
