"use strict";(self.webpackChunktalent_port=self.webpackChunktalent_port||[]).push([[124],{124:(H,b,s)=>{s.r(b),s.d(b,{AdminModule:()=>L});var e=s(4650),d=s(6895),C=s(3060),a=s(4006),g=s(2324),_=s(3238),T=s(7579),P=s(2722),v=s(1942),h=s(5412),c=s(9549),y=s(4144),x=s(4859),m=s(9602);function k(o,r){1&o&&(e.TgZ(0,"label",14),e._uU(1,"Apellido"),e.qZA())}function M(o,r){1&o&&(e.TgZ(0,"mat-label",14),e._uU(1," Fecha de nacimiento * "),e.qZA())}function I(o,r){1&o&&(e.TgZ(0,"mat-label",14),e._uU(1,"Correo electr\xf3nico *"),e.qZA())}let F=(()=>{class o{constructor(t,n,i,l){this.fb=t,this.validationsRegexService=n,this.datePipe=i,this.dialog=l,this.startDate=new Date(1990,0,1),this.exampleHeader=O,this.today=new Date,this.maxDateTo=this.today}ngOnInit(){const n=this.validationsRegexService.regexEmail;this.form=this.fb.group({birthday:["",a.kI.required],lastName:["",a.kI.required],phone:["+52",[a.kI.required,a.kI.pattern(this.validationsRegexService.regexPhoneNumber)]],email:["",[a.kI.required,a.kI.pattern(n)]]})}submit(){this.dataForm=this.form.getRawValue(),this.dataForm.birthday=this.datePipe.transform(this.form.get("birthday").value,"yyyy-MM-dd")?.toString(),this.openDialogResult("Tu registro fue exitoso","checkmark-circle-outline.png",!0)}openDialogResult(t,n,i,l,u,f){this.dialog.open(g.a,{width:"350px",data:{title:"",message:t,image:n,errorMessage1:u,errorMessage2:f,buttonOk:i,buttonBack:l}}).afterClosed().subscribe(p=>{p&&(console.log({status:!0,msg:"Success"}),console.log("Actualizaci\xf3n de datos exitoso")),p||(console.log({status:!1,msg:"Error"}),console.log("Error al actualizar los datos"))})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.qu),e.Y36(v.W),e.Y36(d.uU),e.Y36(h.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-account-edit"]],decls:26,vars:9,consts:[[1,"main"],[1,"main-form",3,"formGroup"],[1,"main-form-inputs"],["class","label",4,"ngIf"],["appearance","outline",1,"main-form-inputs-input"],["matInput","","placeholder","Apellido *","formControlName","lastName"],["matInput","","placeholder","Fecha de Nacimiento *","formControlName","birthday",1,"label",3,"matDatepicker","max","disabled"],["matSuffix","",1,"calendar",3,"for"],["touchUi","","disabled","false","startView","year"],["picker",""],["mat-raised-button","","matDateRangePickerApply","",2,"background","#774DA2","color","#fff"],["matInput","","placeholder","N\xfamero de celular *","formControlName","phone"],["matInput","","placeholder","Correo electr\xf3nico *","formControlName","email"],["type","submit","cdkFocusInitial","",1,"main-form-button",3,"disabled","click"],[1,"label"]],template:function(t,n){if(1&t&&(e.TgZ(0,"main",0)(1,"form",1)(2,"div",2),e.YNc(3,k,2,0,"label",3),e.TgZ(4,"mat-form-field",4),e._UZ(5,"input",5),e.qZA(),e.YNc(6,M,2,0,"mat-label",3),e.TgZ(7,"mat-form-field",4),e._UZ(8,"input",6),e.TgZ(9,"mat-hint"),e._uU(10,"DD/MM/YYYY"),e.qZA(),e._UZ(11,"mat-datepicker-toggle",7),e.TgZ(12,"mat-datepicker",8,9)(14,"mat-date-range-picker-actions")(15,"button",10),e._uU(16,"Aceptar"),e.qZA()()()(),e.TgZ(17,"mat-form-field",4),e._UZ(18,"input",11),e.TgZ(19,"mat-hint"),e._uU(20,"Ejemplo: +529999999999"),e.qZA()(),e.YNc(21,I,2,0,"mat-label",3),e.TgZ(22,"mat-form-field",4),e._UZ(23,"input",12),e.qZA()(),e.TgZ(24,"button",13),e.NdJ("click",function(){return n.submit()}),e._uU(25,"Guardar"),e.qZA()()()),2&t){const i=e.MAs(13);e.xp6(1),e.Q6J("formGroup",n.form),e.xp6(2),e.Q6J("ngIf",n.form.controls.lastName.touched),e.xp6(3),e.Q6J("ngIf",n.form.controls.birthday.touched&&n.form.controls.birthday.valid),e.xp6(2),e.Q6J("matDatepicker",i)("max",n.maxDateTo)("disabled",!0),e.xp6(3),e.Q6J("for",i),e.xp6(10),e.Q6J("ngIf",n.form.controls.email.touched),e.xp6(3),e.Q6J("disabled",!n.form.valid)}},dependencies:[d.O5,c.KE,c.bx,c.hX,c.R9,y.Nt,x.lW,m.Mq,m.hl,m.nW,m.M5,m.DK,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:[".main[_ngcontent-%COMP%]{margin-top:1rem;display:flex;justify-content:center;height:100vh;width:100%;padding:0;font-family:Inter,sans-serif}.main-form[_ngcontent-%COMP%]{margin:.5rem;padding:0;position:relative}.main-form-inputs[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.main-form-inputs-input[_ngcontent-%COMP%]{outline:none;border-radius:8px;width:95vw;letter-spacing:.5px;font-weight:400;font-size:14px;color:var(--color-senary)}.main-form-inputs-input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:var(--color-senary);background-color:transparent}.main-form-button[_ngcontent-%COMP%]{position:absolute;display:inline-block;outline:none;padding:.6rem 1rem;border-radius:5px;background-color:transparent;border:2px solid var(--color-septenary);color:var(--color-septenary);font-weight:600;cursor:pointer;transition:all .3s ease-in-out}.main-form-button[_ngcontent-%COMP%]:hover, .main-form-button[_ngcontent-%COMP%]:active{background-color:var(--color-septenary);color:var(--color-octonary)}.label[_ngcontent-%COMP%]{color:var(--color-novenary)}  .mat-form-field-outline{outline:.5px solid var(--color-unique);border-radius:6px;box-shadow:0 0 5px var(--color-unique);z-index:20}  .mat-form-field-outline:active,   .mat-form-field-outline:hover{outline:none}mat-hint[_ngcontent-%COMP%]{color:var(--color-novenary)}.calendar[_ngcontent-%COMP%]{color:var(--color-novenary)}"]}),o})(),O=(()=>{class o{constructor(t,n,i,l){this._calendar=t,this._dateAdapter=n,this._dateFormats=i,this._destroyed=new T.x,t.stateChanges.pipe((0,P.R)(this._destroyed)).subscribe(()=>l.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}get periodLabel(){return this._dateAdapter.format(this._calendar.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase()}previousClicked(t){this._calendar.activeDate="month"===t?this._dateAdapter.addCalendarMonths(this._calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this._calendar.activeDate,-1)}nextClicked(t){this._calendar.activeDate="month"===t?this._dateAdapter.addCalendarMonths(this._calendar.activeDate,1):this._dateAdapter.addCalendarYears(this._calendar.activeDate,1)}currentPeriodClicked(){console.log("abri el calendar"),this._calendar.currentView="month"==this._calendar.currentView?"multi-year":"month"}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m._H),e.Y36(_._A),e.Y36(_.sG),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-header"]],decls:5,vars:1,consts:[[1,"example-header"],["mat-icon-button","",3,"click"],[1,"example-header-label",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.previousClicked("month")}),e.qZA(),e.TgZ(2,"span",2),e.NdJ("click",function(){return n.currentPeriodClicked()}),e._uU(3),e.qZA(),e.TgZ(4,"button",1),e.NdJ("click",function(){return n.nextClicked("month")}),e.qZA()()),2&t&&(e.xp6(3),e.Oqu(n.periodLabel))},dependencies:[x.lW],styles:[".example-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5em;background:#774DA2;color:#fff;border-top-left-radius:15px;border-top-right-radius:15px}.example-header-label[_ngcontent-%COMP%]{flex:1;height:1em;font-weight:500;text-align:center}"],changeDetection:0}),o})();var U=s(7392);function E(o,r){1&o&&(e.TgZ(0,"mat-label"),e._uU(1,"Contrase\xf1a *"),e.qZA())}function D(o,r){1&o&&(e.TgZ(0,"mat-label"),e._uU(1,"Contrase\xf1a *"),e.qZA())}function N(o,r){1&o&&(e.TgZ(0,"mat-label"),e._uU(1,"Confirma la contrase\xf1a *"),e.qZA())}let J=(()=>{class o{constructor(t,n,i,l){this.fb=t,this.validationsRegexService=n,this.datePipe=i,this.dialog=l,this.password="password",this.newpassword="password",this.confirmPassword="password"}ngOnInit(){const t=this.validationsRegexService.regexOnly9TextandNumberSimbols;this.form=this.fb.group({password:["",[a.kI.required,a.kI.pattern(t),a.kI.min(9)]],newpassword:["",[a.kI.required,a.kI.pattern(t),a.kI.min(9)]],confirmPassword:["",[a.kI.required,a.kI.pattern(t),a.kI.min(9)]]}),this.form.valueChanges.subscribe(n=>{n.newpassword!==n.confirmPassword&&this.form.controls.confirmPassword.setErrors({incorrect:!0})})}changeView(t){this.password="password"==t&&"password"===this.password?"text":"password",this.newpassword="password"==t&&"password"===this.password?"text":"password",this.confirmPassword="confirmPassword"==t&&"password"===this.confirmPassword?"text":"password"}submit(){this.dataForm=this.form.getRawValue(),this.openDialogResult("Tu registro fue exitoso","checkmark-circle-outline.png",!0)}openDialogResult(t,n,i,l,u,f){this.dialog.open(g.a,{width:"350px",data:{title:"",message:t,image:n,errorMessage1:u,errorMessage2:f,buttonOk:i,buttonBack:l}}).afterClosed().subscribe(p=>{p&&(console.log({status:!0,status2:!1,text:"text"}),console.log("ya se completo el registro"))})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.qu),e.Y36(v.W),e.Y36(d.uU),e.Y36(h.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-password-change"]],decls:35,vars:8,consts:[[1,"main"],[1,"main-header"],[1,"main-header-title"],[1,"main-header-instructions"],[1,"main-form",3,"formGroup"],["for",""],[4,"ngIf"],["appearance","outline"],["matInput","","placeholder","Contrase\xf1a   *","formControlName","password","minlength","9",3,"type"],["matSuffix","","mat-icon-button","",3,"click"],["type","button",1,"main-form-link"],["matInput","","placeholder","Contrase\xf1a *","formControlName","password","minlength","9",3,"type"],["matInput","","placeholder","Confirma la contrase\xf1a *","formControlName","confirmPassword","minlength","9",3,"type"],["mat-button","","cdkFocusInitial","",1,"main-form-button",3,"disabled","click"]],template:function(t,n){1&t&&(e.TgZ(0,"main",0)(1,"div",1)(2,"h1",2),e._uU(3," Cambio de contrase\xf1a "),e.qZA(),e.TgZ(4,"p",3),e._uU(5," Tu nueva contrase\xf1a debe contener al menos una letra may\xfascula, un n\xfamero, y un n\xfamero, y un s\xedmbolo, adem\xe1s de tener al menos 9 caracteres "),e.qZA()(),e.TgZ(6,"form",4)(7,"label",5),e._uU(8,"Contrase\xf1a actual"),e.qZA(),e.YNc(9,E,2,0,"mat-label",6),e.TgZ(10,"mat-form-field",7),e._UZ(11,"input",8),e.TgZ(12,"button",9),e.NdJ("click",function(){return n.changeView("password")}),e.TgZ(13,"mat-icon"),e._uU(14,"visibility_off"),e.qZA()()(),e.TgZ(15,"button",10),e._uU(16,"No recuerdo mi contrase\xf1a"),e.qZA(),e.TgZ(17,"label",5),e._uU(18,"Nueva contrase\xf1a"),e.qZA(),e.YNc(19,D,2,0,"mat-label",6),e.TgZ(20,"mat-form-field",7),e._UZ(21,"input",11),e.TgZ(22,"button",9),e.NdJ("click",function(){return n.changeView("password")}),e.TgZ(23,"mat-icon"),e._uU(24,"visibility_off"),e.qZA()()(),e.TgZ(25,"label",5),e._uU(26,"Confirma nueva contrase\xf1a"),e.qZA(),e.YNc(27,N,2,0,"mat-label",6),e.TgZ(28,"mat-form-field",7),e._UZ(29,"input",12),e.TgZ(30,"button",9),e.NdJ("click",function(){return n.changeView("confirmPassword")}),e.TgZ(31,"mat-icon"),e._uU(32,"visibility_off"),e.qZA()()(),e.TgZ(33,"button",13),e.NdJ("click",function(){return n.submit()}),e._uU(34,"Aceptar"),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("formGroup",n.form),e.xp6(3),e.Q6J("ngIf",n.form.controls.password.touched),e.xp6(2),e.Q6J("type",n.password),e.xp6(8),e.Q6J("ngIf",n.form.controls.newpassword.touched),e.xp6(2),e.Q6J("type",n.password),e.xp6(6),e.Q6J("ngIf",n.form.controls.confirmPassword.touched),e.xp6(2),e.Q6J("type",n.confirmPassword),e.xp6(4),e.Q6J("disabled",!n.form.valid))},dependencies:[d.O5,c.KE,c.hX,c.R9,y.Nt,U.Hw,x.lW,a._Y,a.Fj,a.JJ,a.JL,a.wO,a.sg,a.u],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}.main-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:2rem}.main-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.main-form-link[_ngcontent-%COMP%]{border:none;background:transparent;color:var(--color-quinary)}.main-form-button[_ngcontent-%COMP%]{border:none;padding:.6rem 1rem;border-radius:5px;background-color:var(--color-septenary);color:var(--color-font)!important;font-weight:600;cursor:pointer;transition:all .3s ease-in-out}"]}),o})();var w=s(1576);const Y=[{path:"invitation",component:(()=>{class o{constructor(t){this.dialog=t}ngOnInit(){}apply(){}generateCode(){console.log("Success")}openDialogResult(t,n,i,l,u,f){this.dialog.open(g.a,{width:"350px",data:{title:"",message:t,image:n,errorMessage1:u,errorMessage2:f,buttonOk:i,buttonBack:l}}).afterClosed().subscribe(p=>{p&&console.log("aca reporto a los nativos mobiles")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-invitation-code"]],decls:21,vars:0,consts:[["fxLayout","column","fxLayoutAlign","center center"],["fxLayout","column","fxLayoutAlign","center center",1,"w-100","m-t-70p"],["fxLayout","column","fxLayoutAlign","center center",1,"w-100","m-t-5"],[1,"w-85"],[1,"title"],[1,"descripcion"],["fxLayout","row","fxLayoutAlign","center center",1,"search","m-t-15"],["type","text","placeholder","C\xf3digo de invitaci\xf3n",1,"searchTerm"],["type","submit",1,"searchButton"],["fxLayout","column","fxLayoutAlign","center center",1,"w-100"],["type","submit",1,"generarCodigo",3,"click"],["src","./assets/img/chatboot.png","alt","",1,"icon-chat"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),e._uU(5,"C\xf3digo de invitaci\xf3n"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"span",5),e._uU(9,"Ingresa el c\xf3digo que tu referido te ha enviado "),e._UZ(10,"br"),e._uU(11," Para disfrutar sus beneficios"),e.qZA()()()(),e.TgZ(12,"div",6),e._UZ(13,"input",7),e.TgZ(14,"button",8),e._uU(15,"Aplicar "),e.qZA()(),e.TgZ(16,"div",9)(17,"button",10),e.NdJ("click",function(){return n.generateCode()}),e._uU(18,"Genera un c\xf3digo para compartir "),e.qZA()(),e.TgZ(19,"div"),e._UZ(20,"img",11),e.qZA()())},dependencies:[w.xw,w.Wh],styles:[".title[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:700;font-size:16px;line-height:19px;color:var(--color-code-invitation-title)}.descripcion[_ngcontent-%COMP%]{color:var(--color-code-invitation-description);font-family:Inter;font-weight:400;font-size:12px;line-height:15px}.icon-chat[_ngcontent-%COMP%]{position:absolute;left:76.1%;right:8.53%;top:60%;bottom:0}.search[_ngcontent-%COMP%]{position:relative;display:flex;width:100%}.searchTerm[_ngcontent-%COMP%]{width:58%;height:24px;border:1px solid #C7D3E8;border-right:none;padding:5px;border-radius:6px 0 0 6px;outline:none;font-family:Inter;color:#777;font-weight:400;text-align:center}.searchButton[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;width:25%;height:36px;border:1px solid #C7D3E8;background:#E81968;text-align:center;color:#fff;border-radius:2px 6px 6px 2px;cursor:pointer;font-size:14px}.generarCodigo[_ngcontent-%COMP%]{margin-top:70px;font-family:Inter;font-style:normal;font-weight:400;width:85%;height:36px;border:1px solid #C7D3E8;background:#E81968;text-align:center;color:#fff;border-radius:6px;cursor:pointer;font-size:14px}.w-100[_ngcontent-%COMP%]{width:100%}.m-t-5[_ngcontent-%COMP%]{margin-top:5px}.w-85[_ngcontent-%COMP%]{width:85%}.m-t-70p[_ngcontent-%COMP%]{margin-top:70px}.m-t-15[_ngcontent-%COMP%]{margin-top:15px}"]}),o})()},{path:"account",component:F},{path:"account/passwordChange",component:J}];let q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[C.Bz.forChild(Y),C.Bz]}),o})();var R=s(3660);let L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[d.uU,{provide:e.soG,useValue:"es-MX"}],imports:[d.ez,R.m,q,a.UX]}),o})()}}]);