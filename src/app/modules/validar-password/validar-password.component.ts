import { Component, OnInit } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-validar-password',
  templateUrl: './validar-password.component.html',
  styleUrls: ['./validar-password.component.scss']
})
export class ValidarPasswordComponent implements OnInit {

  faEyeSlash = faEyeSlash;

  constructor() { }

  ngOnInit(): void {
  }

}
