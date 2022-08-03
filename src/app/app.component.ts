import { Component } from '@angular/core';
import { ConfigurationModeService } from './shared/services/configuration-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'talent-port';
  public mode: string = 'light';
  constructor(private configurationModeService: ConfigurationModeService){
   this.mode = this.configurationModeService.getMode();
   console.log(this.mode);
  }
}
