import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { SliderService } from '../../services/slider.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @HostBinding('class') componentCssClass: any;
  showBtnNext: boolean = false;

  modDark: boolean = true;
  btn1 = new FormControl();
  btn2 = new FormControl();
  AndroidFunction: any;

  options: AnimationOptions[] = [];

  data: any = [
    {
      targetNumber: 1,
      image: "babyjason.json",
      title: "¿Sabías que ...?",
      paragraph1: "",
      paragraph2: "Todos nacemos con 35 talentos y los utilizamos en nuestro día a día",
      type: 1,
      uri: "../assets/images/"
    },
    {
      targetNumber: 2,
      image: "work.json",
      title: "¿Te gustaría ...?",
      paragraph1: "- Mejorar profesionalmente\n- Encontrar el trabajo ideal para ti\n- Ser emprendedor\n- Saber que estudiar",
      paragraph2: "Te ayudaremos a que esto sea posible conociendo tus talentos y conocer como se tienen que aplicar en tu día a día.",
      type: 1,
      uri: "../assets/images/"
    },
    {
      targetNumber: 3,
      image: "marketing.json",
      title: "Te ayudaremos a",
      paragraph1: "Conocer tus talentos dominantes y como poder aplicarlos para que logres:\n1. Establecer relaciones concretas con otras personas\n2. Resolver problemas\n3. Conocer que te motiva\n4. Saber que te hace resaltar de los demás",
      paragraph2: "",
      type: 1,
      uri: "../assets/images/"
    },
  ];

  showPoints: boolean = true;
  constructor(
    private servicio: SliderService,
    public overlayContainer: OverlayContainer,
  ) {

  }

  ngOnInit(): void {
    this.getInfoSlider();
  }




  animationCreated(animationItem: AnimationItem): void {

    console.log(animationItem);
  }

  getInfoSlider(): void {



    console.log(this.data);
    this.data.forEach((element: any) => {
      element.paragraph1 = element.paragraph1.split("\n").join("<br />");
      element.paragraph2 = element.paragraph2.split("\n").join("<br />");
      this.options.push({
        path: '../assets/images/' + element.image,
      })
    });
    this.options.reverse();

    console.log(this.options)


    this.servicio.PostRequest('register', 'APISTALENTPOR', {
    }).subscribe((response: any) => {
      if (response.Message == true) {

      }
      else {

      }
    }, (error) => {

    });
  }
  hidePoints(opc: number): void {
    switch (opc) {
      case 1:
        break;
      case 2:
        break;
      case this.data.length:
        setTimeout(() => {
          this.showPoints = false;
          this.showBtnNext = true;
        }, 100)
        break;
    }


  }
  emitFinishToMobile(): void {
    console.log('El Carrusel a terminado');
  }
}
