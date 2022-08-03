import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationModeService {

  constructor() { }

  getMode(){
    return  localStorage.getItem('mode') ? localStorage.getItem('mode')! : 'light';
  }
}
