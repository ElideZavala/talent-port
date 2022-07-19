import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faEyeSlash = faEyeSlash;
  form!: FormGroup;
  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      // name: [{ value: '', disabled: this.option === 'new' ? false : true },  [Validators.required, Validators.maxLength(100)]],
      // description: [''],
      // url: ['', [Validators.required, Validators.pattern(regexUrl)]],
      // contact: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required]
    });
  }

}
