import { Component, Renderer2 } from '@angular/core';
import { ConfigurationModeService } from './shared/services/configuration-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'talent-port';
  public mode: string = 'light';
  constructor(private configurationModeService: ConfigurationModeService, private renderer: Renderer2){
  this.renderer.removeClass(document.body, this.mode === 'dark' ? 'light' : 'dark');
  this.mode = this.configurationModeService.getMode();
  this.renderer.addClass(document.body, this.mode)
   console.log(this.mode);
  }
}
