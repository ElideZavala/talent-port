"use strict";(self.webpackChunktalent_port=self.webpackChunktalent_port||[]).push([[919],{9919:(q,g,r)=>{r.r(g),r.d(g,{RegisterModule:()=>L});var e=r(4650),d=r(6895),h=r(3060),y=r(5861),n=r(4006),x=r(3238),Z=r(7579),C=r(2722),T=r(2324),A=r(1942),w=r(2340),R=r(529);let k=(()=>{class t{constructor(a){this.http=a,this.apiUrl=w.N.API}create(a){return this.http.post(`${this.apiUrl}/register`,a,{observe:"response"})}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(R.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var I=r(2586),N=r(5412),u=r(9549),_=r(4144),b=r(7392),v=r(4859),c=r(9602),p=r(1576);function P(t,s){1&t&&(e.TgZ(0,"mat-label"),e._uU(1,"Nombre *"),e.qZA())}function U(t,s){1&t&&(e.TgZ(0,"mat-label"),e._uU(1,"Apellido"),e.qZA())}function F(t,s){1&t&&(e.TgZ(0,"mat-label"),e._uU(1,"Correo electr\xf3nico *"),e.qZA())}function D(t,s){1&t&&(e.TgZ(0,"mat-label"),e._uU(1,"Fecha de nacimiento *"),e.qZA())}function M(t,s){1&t&&(e.TgZ(0,"mat-label"),e._uU(1,"Contrase\xf1a *"),e.qZA())}function Y(t,s){1&t&&(e.TgZ(0,"mat-label"),e._uU(1,"Confirma la contrase\xf1a *"),e.qZA())}let J=(()=>{class t{constructor(a,o,i,l,m,f){this.fb=a,this.validationsRegexService=o,this.datePipe=i,this.registerService=l,this.httpErrorService=m,this.dialog=f,this.startDate=new Date(1990,0,1),this.exampleHeader=S,this.password="password",this.confirmPassword="password",this.today=new Date,this.maxDateTo=this.today}ngOnInit(){console.log({status:!0,status2:!1,text:"text"}),console.log("ya se completo el registro");const o=this.validationsRegexService.regexOnly9TextandNumberSimbols,l=this.validationsRegexService.regexEmail;this.form=this.fb.group({name:["",n.kI.required],lastName:["",n.kI.required],phone:["+52",[n.kI.required,n.kI.pattern(this.validationsRegexService.regexPhoneNumber)]],email:["",[n.kI.required,n.kI.pattern(l)]],birthday:["",n.kI.required],password:["",[n.kI.required,n.kI.pattern(o),n.kI.min(9)]],confirmPassword:["",[n.kI.required,n.kI.pattern(o),n.kI.min(9)]]}),this.form.valueChanges.subscribe(m=>{m.password!==m.confirmPassword&&this.form.controls.confirmPassword.setErrors({incorrect:!0})})}changeView(a){this.password="password"==a&&"password"===this.password?"text":"password",this.confirmPassword="confirmPassword"==a&&"password"===this.confirmPassword?"text":"password"}submit(){var o,a=this;this.dataForm=this.form.getRawValue(),this.dataForm.birthday=this.datePipe.transform(this.form.get("birthday").value,"yyyy-MM-dd")?.toString(),this.registerService.create(this.dataForm).subscribe({next:(o=(0,y.Z)(function*(i){201===i.status&&(console.log("mensaje exitoso"),a.openDialogResult("Tu registro fue exitoso","checkmark-circle-outline.png",!0)),403===i.status&&a.openDialogResult("","icon-error.png",!0,!1,"La direcci\xf3n de correo electr\xf3nico ya ha sido registrada previamente en TalentPor","Recupera la contrase\xf1a para poder realizar el registro")}),function(l){return o.apply(this,arguments)}),error:o=>this.httpErrorService.errorHttp(o)})}openDialogResult(a,o,i,l,m,f){this.dialog.open(T.a,{width:"350px",data:{title:"",message:a,image:o,errorMessage1:m,errorMessage2:f,buttonOk:i,buttonBack:l}}).afterClosed().subscribe(Q=>{Q&&console.log("aca reporto a los nativos mobiles")})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(n.qu),e.Y36(A.W),e.Y36(d.uU),e.Y36(k),e.Y36(I.a),e.Y36(N.uw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:44,vars:14,consts:[["fxFlex","","fxLayout","column","fxLayout.xs","column","fxLayoutGap.xs","0"],["fxLayout","column","fxFlexAlign","center",1,"formContainer",3,"formGroup"],[4,"ngIf"],["appearance","outline"],["matInput","","placeholder","Nombre *","formControlName","name"],["matInput","","placeholder","Apellido *","formControlName","lastName"],["matInput","","placeholder","N\xfamero de celular *","formControlName","phone"],["matInput","","placeholder","Correo electr\xf3nico *","formControlName","email"],["appearance","outline",1,"example-full-width"],["matInput","","placeholder","Fecha de Nacimiento *","formControlName","birthday",3,"matDatepicker","max","disabled"],["matSuffix","",3,"for"],["touchUi","","disabled","false","startView","year"],["picker",""],["mat-raised-button","","matDateRangePickerApply","",2,"background","#774DA2","color","#fff"],["matInput","","placeholder","Contrase\xf1a *","formControlName","password","minlength","9",2,"-webkit-text-security","square",3,"type"],["matSuffix","","mat-icon-button","",3,"click"],["matInput","","placeholder","Confirma la contrase\xf1a *","formControlName","confirmPassword","minlength","9",3,"type"],["fxFlex","",1,"textPassword"],["mat-button","","cdkFocusInitial","",1,"button",3,"disabled","click"]],template:function(a,o){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,P,2,0,"mat-label",2),e.TgZ(3,"mat-form-field",3),e._UZ(4,"input",4),e.qZA(),e.YNc(5,U,2,0,"mat-label",2),e.TgZ(6,"mat-form-field",3),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"mat-label"),e._uU(9,"N\xfamero de celular *"),e.qZA(),e.TgZ(10,"mat-form-field",3),e._UZ(11,"input",6),e.TgZ(12,"mat-hint"),e._uU(13,"Ejemplo: +529999999999"),e.qZA()(),e.YNc(14,F,2,0,"mat-label",2),e.TgZ(15,"mat-form-field",3),e._UZ(16,"input",7),e.qZA(),e.YNc(17,D,2,0,"mat-label",2),e.TgZ(18,"mat-form-field",8),e._UZ(19,"input",9),e.TgZ(20,"mat-hint"),e._uU(21,"DD/MM/YYYY"),e.qZA(),e._UZ(22,"mat-datepicker-toggle",10),e.TgZ(23,"mat-datepicker",11,12)(25,"mat-date-range-picker-actions")(26,"button",13),e._uU(27,"Aceptar"),e.qZA()()()(),e.YNc(28,M,2,0,"mat-label",2),e.TgZ(29,"mat-form-field",3),e._UZ(30,"input",14),e.TgZ(31,"button",15),e.NdJ("click",function(){return o.changeView("password")}),e.TgZ(32,"mat-icon"),e._uU(33,"visibility_off"),e.qZA()()(),e.YNc(34,Y,2,0,"mat-label",2),e.TgZ(35,"mat-form-field",3),e._UZ(36,"input",16),e.TgZ(37,"button",15),e.NdJ("click",function(){return o.changeView("confirmPassword")}),e.TgZ(38,"mat-icon"),e._uU(39,"visibility_off"),e.qZA()()(),e.TgZ(40,"p",17),e._uU(41,"Tu nueva contrase\xf1a debe contener al menos una letra may\xfascula, un n\xfamero, y un s\xedmbolo, adem\xe1s de tener al menos 9 caracteres."),e.qZA(),e.TgZ(42,"button",18),e.NdJ("click",function(){return o.submit()}),e._uU(43,"Aceptar"),e.qZA()()()),2&a){const i=e.MAs(24);e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("ngIf",o.form.controls.name.touched),e.xp6(3),e.Q6J("ngIf",o.form.controls.lastName.touched),e.xp6(9),e.Q6J("ngIf",o.form.controls.email.touched),e.xp6(3),e.Q6J("ngIf",o.form.controls.birthday.touched&&o.form.controls.birthday.valid),e.xp6(2),e.Q6J("matDatepicker",i)("max",o.maxDateTo)("disabled",!0),e.xp6(3),e.Q6J("for",i),e.xp6(6),e.Q6J("ngIf",o.form.controls.password.touched),e.xp6(2),e.Q6J("type",o.password),e.xp6(4),e.Q6J("ngIf",o.form.controls.confirmPassword.touched),e.xp6(2),e.Q6J("type",o.confirmPassword),e.xp6(6),e.Q6J("disabled",!o.form.valid)}},dependencies:[d.O5,u.KE,u.bx,u.hX,u.R9,_.Nt,b.Hw,v.lW,c.Mq,c.hl,c.nW,c.M5,c.DK,n.Fj,n.JJ,n.JL,n.wO,n.sg,n.u,p.xw,p.SQ,p.XD,p.yH],styles:['@import"https://rsms.me/inter/inter.css";@font-face{font-family:Inter;font-style:normal;src:url(https://rsms.me/inter/inter.css)}.formContainer[_ngcontent-%COMP%]{margin:25px}.button[_ngcontent-%COMP%]{background:#E81968;color:#fff;font-family:Inter;font-style:normal;font-weight:700;font-size:14px;line-height:17px;height:46px;width:100%;border-radius:0}.textPassword[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:10px;line-height:12px;color:#3b4559;margin-right:15px;margin-left:15px;margin-bottom:25px}.mat-button[_ngcontent-%COMP%]{cursor:default;color:#fff!important;border-radius:10px}.mat-button-disabled[_ngcontent-%COMP%]{opacity:.5}input[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:#777}']}),t})(),S=(()=>{class t{constructor(a,o,i,l){this._calendar=a,this._dateAdapter=o,this._dateFormats=i,this._destroyed=new Z.x,a.stateChanges.pipe((0,C.R)(this._destroyed)).subscribe(()=>l.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}get periodLabel(){return this._dateAdapter.format(this._calendar.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase()}previousClicked(a){this._calendar.activeDate="month"===a?this._dateAdapter.addCalendarMonths(this._calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this._calendar.activeDate,-1)}nextClicked(a){this._calendar.activeDate="month"===a?this._dateAdapter.addCalendarMonths(this._calendar.activeDate,1):this._dateAdapter.addCalendarYears(this._calendar.activeDate,1)}currentPeriodClicked(){console.log("abri el calendar"),this._calendar.currentView="month"==this._calendar.currentView?"multi-year":"month"}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(c._H),e.Y36(x._A),e.Y36(x.sG),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-header"]],decls:9,vars:1,consts:[[1,"example-header"],["mat-icon-button","",3,"click"],[1,"example-header-label",3,"click"]],template:function(a,o){1&a&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return o.previousClicked("month")}),e.TgZ(2,"mat-icon"),e._uU(3,"keyboard_arrow_left"),e.qZA()(),e.TgZ(4,"span",2),e.NdJ("click",function(){return o.currentPeriodClicked()}),e._uU(5),e.qZA(),e.TgZ(6,"button",1),e.NdJ("click",function(){return o.nextClicked("month")}),e.TgZ(7,"mat-icon"),e._uU(8,"keyboard_arrow_right"),e.qZA()()()),2&a&&(e.xp6(5),e.Oqu(o.periodLabel))},dependencies:[b.Hw,v.lW],styles:[".example-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5em;background:#774DA2;color:#fff;border-top-left-radius:15px;border-top-right-radius:15px}.example-header-label[_ngcontent-%COMP%]{flex:1;height:1em;font-weight:500;text-align:center}.example-double-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin:-22%}"],changeDetection:0}),t})();const O=[{path:"",component:J}];let E=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.Bz.forChild(O),h.Bz]}),t})();var H=r(2782);let L=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[d.uU,{provide:e.soG,useValue:"es-MX"}],imports:[d.ez,E,H.m]}),t})()}}]);