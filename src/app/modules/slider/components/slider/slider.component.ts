import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { SliderInterface } from 'src/app/shared/interfaces/slider.model';
import { HttpErrorsService } from 'src/app/shared/services/http-errors.service';
import Swiper from 'swiper';
import { SliderService } from '../../services/slider.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],

})
export class SliderComponent implements OnInit, AfterViewInit {
  mySwiper1 = new Swiper('.swiper', {
    direction: 'horizontal',
  });


  @HostBinding('class') componentCssClass: any;
  showBtnNext: boolean = false;
  options: AnimationOptions[] = [];
  dataSlider!: SliderInterface[];
  positionSlider = 0;

  constructor(
    private sliderService: SliderService,
    public overlayContainer: OverlayContainer,
    private dialog: MatDialog,
    private httpErrorService: HttpErrorsService,
  ) {

  }
  ngAfterViewInit(): void {
    var mySwiper = new Swiper('.swiper', {
      direction: 'horizontal',
    });

    localStorage.setItem('index', (0).toString());

    let length = this.dataSlider.length;
    let position = 0;

    mySwiper.on('slideChange', function () {
      if (mySwiper.realIndex == (length - 1)) {
        console.log('Fin carrusel');
        position = mySwiper.realIndex;
        mySwiper.disable();
      }
    });

    mySwiper.on('tap', function () {
      setTimeout(() => {
        let index = localStorage.getItem('index');
        mySwiper.slideTo(Number(index), 500);
      }, 500)
    });
  }


  ngOnInit(): void {
    this.getInfoSlider();
  }

  animationCreated(animationItem: AnimationItem): void {
  }

  getInfoSlider(): void {
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

    this.dataSlider = [
      {
        targetNumber: 1,
        image: "babyjason.json",
        title: "¿Sabías que ...?",
        paragraph1: "",
        paragraph2: "Todos nacemos con 35 talentos y los utilizamos en nuestro día a día",
        type: 1,
        // uri: './assets/images/'
        uri: "https://elidezavala.github.io/talent-port/assets/images/"
      },
      {
        targetNumber: 2,
        image: "work.json",
        title: "¿Te gustaría ...?",
        paragraph1: "- Mejorar profesionalmente\n- Encontrar el trabajo ideal para ti\n- Ser emprendedor\n- Saber que estudiar",
        paragraph2: "Te ayudaremos a que esto sea posible conociendo tus talentos y conocer como se tienen que aplicar en tu día a día.",
        type: 1,
        // uri: './assets/images/'

        uri: "https://elidezavala.github.io/talent-port/assets/images/"
      },
      {
        targetNumber: 3,
        image: "marketing.json",
        title: "Te ayudaremos a",
        paragraph1: "Conocer tus talentos dominantes y como poder aplicarlos para que logres:\n1. Establecer relaciones concretas con otras personas\n2. Resolver problemas\n3. Conocer que te motiva\n4. Saber que te hace resaltar de los demás",
        paragraph2: "",
        type: 1,
        // uri: './assets/images/'

        uri: "https://elidezavala.github.io/talent-port/assets/images/"
      },
    ];

    // console.log(this.dataSlider);
    this.dataSlider.forEach((element: any) => {
      element.paragraph1 = element.paragraph1.split("\n").join("<br />");
      element.paragraph2 = element.paragraph2.split("\n").join("<br />");
      this.options.push({
        // path: './assets/images/' + element.image,

        path: 'https://elidezavala.github.io/talent-port/assets/images/' + element.image,

      })
    });

    this.options;

    // console.log(this.options)
    //TEST 2
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

  public positionCircle(opc: number): void {

    localStorage.setItem('index', (opc).toString());
  }





}
