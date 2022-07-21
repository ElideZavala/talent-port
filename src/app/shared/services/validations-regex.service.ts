import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsRegexService {
  // REGEX PHONE NUMBER INTERNATIONAL
  public regexPhoneNumber = /\+[0-9]{1,3}[0-9]{1}[0-9]{9,10}/;
  public regexOnlyText = /[a-zA-Z ]+$/;
  public regexOnlyNumber = /^[0-9]\d*$/;
  public regexOnlyTextandNumber = /^[A-Za-z0-9\s]+$/;
  public regexOnly9TextandNumberSimbols = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  public regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  constructor() { }


}
