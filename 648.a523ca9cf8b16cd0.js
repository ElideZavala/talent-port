"use strict";(self.webpackChunktalent_port=self.webpackChunktalent_port||[]).push([[648],{8648:(rt,u,r)=>{r.r(u),r.d(u,{SliderModule:()=>ot,playerFactory:()=>L});var c=r(6895),g=r(3060),M=r(5861),A=r(2324),e=r(4650),S=r(2340),O=r(529);let P=(()=>{class n{constructor(t){this.http=t,this.apiUrl=S.N.API}getSlider(){return this.http.get(`${this.apiUrl}/slider`,{observe:"response"})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(O.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var I=r(8184),b=r(5412),w=r(2586),T=r(4859),f=r(1576),F=r(457),D=r(9646),Z=r(6406),m=r(7579),j=r(1135),N=r(9770),R=r(8306),y=r(4004),_=r(8505),$=r(6063);class J extends m.x{constructor(o=1/0,t=1/0,i=$.l){super(),this._bufferSize=o,this._windowTime=t,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,o),this._windowTime=Math.max(1,t)}next(o){const{isStopped:t,_buffer:i,_infiniteTimeWindow:a,_timestampProvider:s,_windowTime:l}=this;t||(i.push(o),!a&&i.push(s.now()+l)),this._trimBuffer(),super.next(o)}_subscribe(o){this._throwIfClosed(),this._trimBuffer();const t=this._innerSubscribe(o),{_infiniteTimeWindow:i,_buffer:a}=this,s=a.slice();for(let l=0;l<s.length&&!o.closed;l+=i?1:2)o.next(s[l]);return this._checkFinalizedStatuses(o),t}_trimBuffer(){const{_bufferSize:o,_timestampProvider:t,_buffer:i,_infiniteTimeWindow:a}=this,s=(a?1:2)*o;if(o<1/0&&s<i.length&&i.splice(0,i.length-s),!a){const l=t.now();let d=0;for(let p=1;p<i.length&&i[p]<=l;p+=2)d=p;d&&i.splice(0,d+1)}}}var B=r(3099),z=r(5363),C=r(9300),v=r(3900),E=r(2722);const W=["container"],x=new e.OlP("LottieOptions");let h=(()=>{class n{constructor(t,i){this.ngZone=t,this.options=i,this.player$=function Q(n,o){const t=n();return(t instanceof Promise?(0,F.D)(t).pipe((0,y.U)(a=>a.default||a)):(0,D.of)(t)).pipe((0,_.b)(a=>a.useWebWorker(o)),function Y(n,o,t){let i,a=!1;return n&&"object"==typeof n?({bufferSize:i=1/0,windowTime:o=1/0,refCount:a=!1,scheduler:t}=n):i=n??1/0,(0,B.B)({connector:()=>new J(i,o,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}({bufferSize:1,refCount:!0}))}(this.options.player,this.options.useWebWorker).pipe((0,z.Q)(Z.Z))}loadAnimation(t){return this.player$.pipe((0,y.U)(i=>this.createAnimationItem(i,t)))}resolveOptions(t,i){return Object.assign({container:i,renderer:"svg",loop:!0,autoplay:!0},t)}createAnimationItem(t,i){return this.ngZone.runOutsideAngular(()=>t.loadAnimation(i))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(e.R0b),e.LFG(x))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),U=(()=>{class n{constructor(t,i,a){this.ngZone=t,this.platformId=i,this.animationLoader=a,this.options=null,this.containerClass=null,this.styles=null,this.animationCreated=this.getAnimationItem(),this.complete=this.awaitAnimationItemAndStartListening("complete"),this.loopComplete=this.awaitAnimationItemAndStartListening("loopComplete"),this.enterFrame=this.awaitAnimationItemAndStartListening("enterFrame"),this.segmentStart=this.awaitAnimationItemAndStartListening("segmentStart"),this.configReady=this.awaitAnimationItemAndStartListening("config_ready"),this.dataReady=this.awaitAnimationItemAndStartListening("data_ready"),this.domLoaded=this.awaitAnimationItemAndStartListening("DOMLoaded"),this.destroy=this.awaitAnimationItemAndStartListening("destroy"),this.error=this.awaitAnimationItemAndStartListening("error"),this.destroy$=new m.x,this.loadAnimation$=new m.x,this.animationItem$=new j.X(null),this.setupLoadAnimationListener()}ngOnDestroy(){this.destroy$.next(),this.destroyAnimation()}loadAnimation(t,i){this.loadAnimation$.next([t,i])}getAnimationItem(){return(0,N.P)(()=>this.animationItem$).pipe((0,C.h)(t=>null!==t))}awaitAnimationItemAndStartListening(t){return this.getAnimationItem().pipe((0,v.w)(i=>new R.y(a=>{this.ngZone.runOutsideAngular(()=>{i.addEventListener(t,s=>{this.ngZone.runOutsideAngular(()=>{a.next(s)})})})})))}setupLoadAnimationListener(){this.loadAnimation$.pipe((0,C.h)(([t])=>(0,c.NF)(this.platformId)&&void 0!==t.options),(0,v.w)(([t,i])=>(this.destroyAnimation(),this.animationLoader.loadAnimation(this.animationLoader.resolveOptions(t.options.currentValue,i)))),(0,E.R)(this.destroy$)).subscribe(t=>{this.animationItem$.next(t)})}destroyAnimation(){const t=this.animationItem$.getValue();null!==t&&(t.destroy(),this.animationItem$.next(null))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.R0b),e.Y36(e.Lbi),e.Y36(h))},n.\u0275dir=e.lG2({type:n,selectors:[["","lottie",""]],inputs:{options:"options",containerClass:"containerClass",styles:"styles"},outputs:{animationCreated:"animationCreated",complete:"complete",loopComplete:"loopComplete",enterFrame:"enterFrame",segmentStart:"segmentStart",configReady:"configReady",dataReady:"dataReady",domLoaded:"domLoaded",destroy:"destroy",error:"error"}}),n})(),G=(()=>{class n extends U{constructor(t,i,a){super(t,i,a),this.width=null,this.height=null,this.container=null}ngOnChanges(t){super.loadAnimation(t,this.container.nativeElement)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.R0b),e.Y36(e.Lbi),e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-lottie"]],viewQuery:function(t,i){if(1&t&&e.Gf(W,7),2&t){let a;e.iGM(a=e.CRH())&&(i.container=a.first)}},inputs:{width:"width",height:"height"},features:[e.qOj,e.TTD],decls:2,vars:6,consts:[[3,"ngStyle","ngClass"],["container",""]],template:function(t,i){1&t&&e._UZ(0,"div",0,1),2&t&&(e.Udp("width",i.width||"100%")("height",i.height||"100%"),e.Q6J("ngStyle",i.styles)("ngClass",i.containerClass))},dependencies:[c.PC,c.mk],encapsulation:2,changeDetection:0}),n})(),H=(()=>{class n{static forRoot(t){return{ngModule:n,providers:[h,{provide:x,useValue:t}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez]]}),n})();function K(n,o){if(1&n&&(e.TgZ(0,"div",13),e._UZ(1,"span",14),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("innerHTML",t.paragraph1,e.oJD)}}function k(n,o){if(1&n&&(e.TgZ(0,"div",13),e._UZ(1,"span",15),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("innerHTML",t.paragraph2,e.oJD)}}function V(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",6),e._UZ(2,"input",7),e.TgZ(3,"div",8)(4,"div",9)(5,"ng-lottie",10),e.NdJ("animationCreated",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.animationCreated(a))}),e.qZA()(),e.TgZ(6,"span",11),e._uU(7),e.qZA(),e.YNc(8,K,2,1,"div",12),e.YNc(9,k,2,1,"div",12),e.qZA()()()}if(2&n){const t=o.$implicit,i=o.index,a=e.oxw();e.xp6(2),e.MGl("id","slide-",t.targetNumber,""),e.xp6(3),e.Q6J("options",a.options[i]),e.xp6(2),e.Oqu(t.title),e.xp6(1),e.Q6J("ngIf",t.paragraph1),e.xp6(1),e.Q6J("ngIf",t.paragraph2)}}function X(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",17)(1,"label",19),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.hidePoints(s.targetNumber))}),e._uU(2,"\u2022"),e.qZA()()}if(2&n){const t=o.$implicit;e.xp6(1),e.MGl("for","slide-",t.targetNumber,"")}}function q(n,o){if(1&n&&(e.TgZ(0,"ol",16)(1,"div",17),e.YNc(2,X,3,1,"li",18),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.dataSlider)}}function tt(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",20)(1,"button",21),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.emitFinishToMobile())}),e._uU(2,"Continuar"),e.qZA()()}}const et=[{path:"",component:(()=>{class n{constructor(t,i,a,s){this.sliderService=t,this.overlayContainer=i,this.dialog=a,this.httpErrorService=s,this.showBtnNext=!1,this.options=[],this.showPoints=!0}ngOnInit(){this.getInfoSlider()}animationCreated(t){}getInfoSlider(){var t;this.sliderService.getSlider().subscribe({next:(t=(0,M.Z)(function*(i){}),function(a){return t.apply(this,arguments)}),error:t=>this.httpErrorService.errorHttp(t)}),this.dataSlider=[{targetNumber:1,image:"babyjason.json",title:"\xbfSab\xedas que ...?",paragraph1:"",paragraph2:"Todos nacemos con 35 talentos y los utilizamos en nuestro d\xeda a d\xeda",type:1,uri:"../assets/images/"},{targetNumber:2,image:"work.json",title:"\xbfTe gustar\xeda ...?",paragraph1:"- Mejorar profesionalmente\n- Encontrar el trabajo ideal para ti\n- Ser emprendedor\n- Saber que estudiar",paragraph2:"Te ayudaremos a que esto sea posible conociendo tus talentos y conocer como se tienen que aplicar en tu d\xeda a d\xeda.",type:1,uri:"../assets/images/"},{targetNumber:3,image:"marketing.json",title:"Te ayudaremos a",paragraph1:"Conocer tus talentos dominantes y como poder aplicarlos para que logres:\n1. Establecer relaciones concretas con otras personas\n2. Resolver problemas\n3. Conocer que te motiva\n4. Saber que te hace resaltar de los dem\xe1s",paragraph2:"",type:1,uri:"../assets/images/"}],console.log(this.dataSlider),this.dataSlider.forEach(t=>{t.paragraph1=t.paragraph1.split("\n").join("<br />"),t.paragraph2=t.paragraph2.split("\n").join("<br />"),this.options.push({path:"../assets/images/"+t.image})}),this.options.reverse(),console.log(this.options)}openDialogResult(t,i,a,s,l,d){this.dialog.open(A.a,{width:"350px",data:{title:"",message:t,image:i,errorMessage1:l,errorMessage2:d,buttonOk:a,buttonBack:s}}).afterClosed().subscribe(at=>{at&&console.log("aca reporto a los nativos mobiles")})}hidePoints(t){this.dataSlider.length==t&&setTimeout(()=>{this.showPoints=!1,this.showBtnNext=!0},100)}emitFinishToMobile(){console.log("El Carrusel a terminado")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(P),e.Y36(I.Xj),e.Y36(b.uw),e.Y36(w.a))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-slider"]],hostVars:2,hostBindings:function(t,i){2&t&&e.Tol(i.componentCssClass)},decls:6,vars:3,consts:[["fxLayout","column","fxLayoutAlign","start center",2,"height","100%"],["fxLayout","column","fxLayoutAlign","center center",1,"slide"],["fxLayout","column","fxLayoutAlign","center center",1,"slide-inner"],["fxLayout","column","fxLayoutAlign","center center",4,"ngFor","ngForOf"],["class","slide-indicador","fxLayout","row","fxLayoutAlign","center center",4,"ngIf"],["style","margin-top:auto; margin-bottom: 40px; width: 89%;","fxLayout","column","fxLayoutAlign","ende center",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center"],["type","radio","name","slide","aria-hidden","true","hidden","","checked","checked",1,"slide-open",3,"id"],["fxLayout","column","fxLayoutAlign","center center",1,"slide-item"],["fxLayout","column","fxLayoutAlign","center center",1,"containerImg",2,"margin-bottom","30px"],["width","240px","height","200px",3,"options","animationCreated"],["fxLayout","column","fxLayoutAlign","center center",1,"title",2,"width","100%"],["style","margin-top:30px; width: 89%;","fxLayout","column","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",2,"margin-top","30px","width","89%"],["fxLayout","column","fxLayoutAlign","center center",1,"descriptionAlignStart",2,"width","89%",3,"innerHTML"],["fxLayout","column","fxLayoutAlign","center center",1,"descriptionAlignCenter",2,"width","89%",3,"innerHTML"],["fxLayout","row","fxLayoutAlign","center center",1,"slide-indicador"],["fxLayout","row","fxLayoutAlign","center center"],["fxLayout","row","fxLayoutAlign","center center",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","center center",1,"slide-circulo",3,"for","click"],["fxLayout","column","fxLayoutAlign","ende center",2,"margin-top","auto","margin-bottom","40px","width","89%"],["mat-raised-button","",1,"colorBtn",2,"width","89%",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.YNc(3,V,10,5,"div",3),e.YNc(4,q,3,1,"ol",4),e.qZA()(),e.YNc(5,tt,3,0,"div",5),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngForOf",i.dataSlider.slice().reverse()),e.xp6(1),e.Q6J("ngIf",i.showPoints),e.xp6(1),e.Q6J("ngIf",i.showBtnNext))},dependencies:[c.sg,c.O5,T.lW,f.xw,f.Wh,G],styles:[".slide[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.slide-inner[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;height:100%}.slide-open[_ngcontent-%COMP%]:checked + .slide-item[_ngcontent-%COMP%]{position:static;opacity:100}.slide-item[_ngcontent-%COMP%]{position:absolute;opacity:0;transition:opacity .6s ease-out;height:100%}.slide-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;height:auto;max-width:121px;height:121px}.slide-control[_ngcontent-%COMP%]{background:rgba(0,0,0,.28);border-radius:50%;color:#fff;display:none;font-size:40px;height:40px;line-height:35px;position:absolute;top:50%;-webkit-transform:translate(0,-50%);cursor:pointer;transform:translateY(-50%);text-align:center;width:40px;z-index:10}.slide-control.prev[_ngcontent-%COMP%]{left:2%}.slide-control.next[_ngcontent-%COMP%]{right:2%}.slide-control[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.8);color:#aaa}#slide-1[_ngcontent-%COMP%]:checked ~ .control-1[_ngcontent-%COMP%], #slide-2[_ngcontent-%COMP%]:checked ~ .control-2[_ngcontent-%COMP%], #slide-3[_ngcontent-%COMP%]:checked ~ .control-3[_ngcontent-%COMP%], #slide-4[_ngcontent-%COMP%]:checked ~ .control-4[_ngcontent-%COMP%]{display:block}.slide-indicador[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;position:absolute;text-align:center;z-index:10;left:43.73%;right:43.47%;top:93%;bottom:8.99%}.slide-indicador[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin:0 5px}.slide-circulo[_ngcontent-%COMP%]{color:#c46fdc;cursor:pointer;display:block;font-size:35px}.slide-circulo[_ngcontent-%COMP%]:hover{color:#9567c4}#slide-1[_ngcontent-%COMP%]:checked ~ .control-1[_ngcontent-%COMP%] ~ .slide-indicador[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   .slide-circulo[_ngcontent-%COMP%], #slide-2[_ngcontent-%COMP%]:checked ~ .control-2[_ngcontent-%COMP%] ~ .slide-indicador[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   .slide-circulo[_ngcontent-%COMP%], #slide-3[_ngcontent-%COMP%]:checked ~ .control-3[_ngcontent-%COMP%] ~ .slide-indicador[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   .slide-circulo[_ngcontent-%COMP%], #slide-4[_ngcontent-%COMP%]:checked ~ .control-4[_ngcontent-%COMP%] ~ .slide-indicador[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   .slide-circulo[_ngcontent-%COMP%]{color:#774da2}#titulo[_ngcontent-%COMP%]{width:100%;position:absolute;padding:0;margin:0 auto;text-align:center;font-size:27px;color:#fff;font-family:Open Sans,sans-serif;z-index:9999;text-shadow:0px 1px 2px rgba(0,0,0,.33),-1px 0px 2px rgba(255,255,255,0)}span[_ngcontent-%COMP%]{text-align:center;width:75%}.mat-card-per[_ngcontent-%COMP%]{height:100%;margin-top:20px;border-radius:30px 30px 0 0}.title[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:700;font-size:22px;line-height:27px;margin-top:20px}.descriptionAlignStart[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px;text-align:start;color:#777;margin-top:20px}.descriptionAlignCenter[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px;text-align:center;color:#777;margin-top:20px}.mat-raised-button[_ngcontent-%COMP%]{color:#fff;background:#774DA2;width:70%;border-radius:10px;height:46px}.m-t-20[_ngcontent-%COMP%]{margin-top:120px}.xs-margin[_ngcontent-%COMP%]{margin-top:30%}.xl-margin[_ngcontent-%COMP%], .gt-margin[_ngcontent-%COMP%], .md-margin[_ngcontent-%COMP%]{margin-top:10%}"]}),n})()}];let nt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(et),g.Bz]}),n})();var it=r(2782);function L(){return r.e(487).then(r.t.bind(r,4487,23))}let ot=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,nt,it.m,H.forRoot({player:L})]}),n})()}}]);