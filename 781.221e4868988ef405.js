"use strict";(self.webpackChunktalent_port=self.webpackChunktalent_port||[]).push([[781],{4781:(w,v,n)=>{n.r(v),n.d(v,{PerfilModule:()=>Q});var t=n(4650),p=n(6895),y=n(3060);function x(e,i,o,r,a,s,m){try{var c=e[s](m),d=c.value}catch(f){return void o(f)}c.done?i(d):Promise.resolve(d).then(r,a)}var l=n(4006),C=n(2324),P=n(1942),M=n(2340),Z=n(529);let T=(()=>{class e{constructor(o){this.http=o,this.apiUrl=M.N.API}create(o){return this.http.post(`${this.apiUrl}/register`,o,{observe:"response"})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(Z.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var O=n(2586),k=n(5412),A=n(8360),I=n(5041),g=n(9549),S=n(4144),F=n(4859),u=n(9602),N=n(455),h=n(1576);function U(e,i){1&e&&(t.TgZ(0,"mat-label"),t._uU(1,"\xbfComo quieres que te llamemos?"),t.qZA())}function D(e,i){1&e&&(t.TgZ(0,"mat-label"),t._uU(1,"Fecha de nacimiento *"),t.qZA())}function R(e,i){1&e&&(t.TgZ(0,"mat-label"),t._uU(1,"Correo electr\xf3nico *"),t.qZA())}const Y=[{path:"",component:(()=>{class e{constructor(o,r,a,s,m,c,d,f,z){this.fb=o,this.validationsRegexService=r,this.datePipe=a,this.perfilService=s,this.httpErrorService=m,this.dialog=c,this.configurationModeService=d,this.appComponent=f,this.renderer=z,this.startDate=new Date(1990,0,1),this.today=new Date,this.maxDateTo=this.today}ngOnInit(){this.mode=this.configurationModeService.getMode(),console.log(this.mode);const a=this.validationsRegexService.regexEmail;this.form=this.fb.group({name:["",l.kI.required],phone:["+52",[l.kI.required,l.kI.pattern(this.validationsRegexService.regexPhoneNumber)]],email:["",[l.kI.required,l.kI.pattern(a)]],birthday:["",l.kI.required],mode:["light"!==this.mode]})}submit(){var r,o=this;this.dataForm=this.form.getRawValue(),this.dataForm.birthday=this.datePipe.transform(this.form.get("birthday").value,"yyyy-MM-dd")?.toString(),this.perfilService.create(this.dataForm).subscribe({next:(r=function b(e){return function(){var i=this,o=arguments;return new Promise(function(r,a){var s=e.apply(i,o);function m(d){x(s,r,a,m,c,"next",d)}function c(d){x(s,r,a,m,c,"throw",d)}m(void 0)})}}(function*(a){201===a.status&&(console.log("mensaje exitoso"),o.openDialogResult("Tu registro fue exitoso","checkmark-circle-outline.png",!0)),403===a.status&&o.openDialogResult("","icon-error.png",!0,!1,"La direcci\xf3n de correo electr\xf3nico ya ha sido registrada previamente en TalentPor","Recupera la contrase\xf1a para poder realizar el registro")}),function(s){return r.apply(this,arguments)}),error:r=>this.httpErrorService.errorHttp(r)})}openDialogResult(o,r,a,s,m,c){this.dialog.open(C.a,{width:"350px",data:{title:"",message:o,image:r,errorMessage1:m,errorMessage2:c,buttonOk:a,buttonBack:s}}).afterClosed().subscribe(f=>{f&&console.log("aca reporto a los nativos mobiles")})}changeMode(o){this.mode=o.checked?"dark":"light",localStorage.setItem("mode",this.mode),this.appComponent.mode=this.mode,this.renderer.removeClass(document.body,"dark"===this.mode?"light":"dark"),this.renderer.addClass(document.body,this.mode),console.log(this.mode)}change(){console.log("chage")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.qu),t.Y36(P.W),t.Y36(p.uU),t.Y36(T),t.Y36(O.a),t.Y36(k.uw),t.Y36(A.O),t.Y36(I.y),t.Y36(t.Qsj))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-perfil"]],decls:33,vars:11,consts:[["fxFlex","","fxLayout","column","fxLayout.xs","column","fxLayoutGap.xs","0"],["fxLayout","column",1,"formContainer",3,"formGroup"],[4,"ngIf"],["appearance","outline"],["matInput","","placeholder","\xbfComo quieres que te llamemos?","formControlName","name"],["appearance","outline",1,"example-full-width"],["matInput","","placeholder","Fecha de Nacimiento *","formControlName","birthday",1,"input",3,"matDatepicker","max","disabled"],["matSuffix","",3,"for","click"],["touchUi","","disabled","false","startView","year"],["picker",""],["mat-raised-button","","matDateRangePickerApply","",1,"buttonAceptCalendar"],["matInput","","placeholder","N\xfamero de celular *","formControlName","phone"],["matInput","","placeholder","Correo electr\xf3nico *","formControlName","email"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"modeDark"],["formControlName","mode","labelPosition","before",3,"change"],["mat-button","","cdkFocusInitial","",1,"button",3,"disabled","click"]],template:function(o,r){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,U,2,0,"mat-label",2),t.TgZ(3,"mat-form-field",3),t._UZ(4,"input",4),t.qZA(),t.YNc(5,D,2,0,"mat-label",2),t.TgZ(6,"mat-form-field",5),t._UZ(7,"input",6),t.TgZ(8,"mat-hint"),t._uU(9,"DD/MM/YYYY"),t.qZA(),t.TgZ(10,"mat-datepicker-toggle",7),t.NdJ("click",function(){return r.change()}),t.qZA(),t.TgZ(11,"mat-datepicker",8,9)(13,"mat-date-range-picker-actions")(14,"button",10),t._uU(15,"Aceptar"),t.qZA()()()(),t.TgZ(16,"mat-label"),t._uU(17,"N\xfamero de celular *"),t.qZA(),t.TgZ(18,"mat-form-field",3),t._UZ(19,"input",11),t.TgZ(20,"mat-hint"),t._uU(21,"Ejemplo: +529999999999"),t.qZA()(),t.YNc(22,R,2,0,"mat-label",2),t.TgZ(23,"mat-form-field",3),t._UZ(24,"input",12),t.qZA(),t.TgZ(25,"div",13)(26,"div")(27,"span",14),t._uU(28,"Modo obscuro"),t.qZA()(),t.TgZ(29,"div")(30,"mat-slide-toggle",15),t.NdJ("change",function(s){return r.changeMode(s)}),t.qZA()()(),t.TgZ(31,"button",16),t.NdJ("click",function(){return r.submit()}),t._uU(32,"Continuar"),t.qZA()()()),2&o){const a=t.MAs(12);t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(1),t.Q6J("ngIf",r.form.controls.name.touched),t.xp6(3),t.Q6J("ngIf",r.form.controls.birthday.touched&&r.form.controls.birthday.valid),t.xp6(2),t.Q6J("matDatepicker",a)("max",r.maxDateTo)("disabled",!0),t.xp6(3),t.Q6J("for",a),t.xp6(12),t.Q6J("ngIf",r.form.controls.email.touched),t.xp6(3),t.Udp("margin-bottom",75,"px"),t.xp6(6),t.Q6J("disabled",!r.form.valid)}},dependencies:[p.O5,g.KE,g.bx,g.hX,g.R9,S.Nt,F.lW,u.Mq,u.hl,u.nW,u.M5,u.DK,N.Rr,l.Fj,l.JJ,l.JL,l.sg,l.u,h.xw,h.SQ,h.Wh,h.yH],styles:['@import"https://rsms.me/inter/inter.css";@font-face{font-family:Inter;font-style:normal;src:url(https://rsms.me/inter/inter.css)}[_nghost-%COMP%]{width:100%;background-color:var(--color-primary)}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:var(--color-secondary)}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background:var(--color-primary)}[_nghost-%COMP%]     .mat-slide-toggle-bar{border-radius:15px!important;height:29px!important;width:59px!important;background-color:var(--color-primary);border:1px solid #DFDFE8}[_nghost-%COMP%]     .mat-slide-toggle-thumb{width:30px!important;height:30px!important;transform:translate(10%,10%)}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(25px,0,0)!important}[_nghost-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:var(--color-senary)}[_nghost-%COMP%]   mat-hint[_ngcontent-%COMP%]{color:var(--color-senary)}[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{color:var(--color-senary)}[_nghost-%COMP%]     .mat-button-wrapper{color:var(--color-senary)}.formContainer[_ngcontent-%COMP%]{margin:25px}.button[_ngcontent-%COMP%]{background:var(--color-secondary);color:#fff;font-family:Inter;font-style:normal;font-weight:700;font-size:14px;line-height:17px;height:46px;width:100%;border-radius:0}.mat-button[_ngcontent-%COMP%]{cursor:default;color:#fff!important;border-radius:10px}.mat-button-disabled[_ngcontent-%COMP%]{opacity:.5;color:#fff!important}input[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:var(--color-senary)}.input[_ngcontent-%COMP%]{color:var(--color-senary)}mat-label[_ngcontent-%COMP%]{color:var(--color-senary)}.modeDark[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:var(--color-senary)}']}),e})()}];let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[y.Bz.forChild(Y),y.Bz]}),e})();var L=n(3660);let Q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[p.uU,{provide:t.soG,useValue:"es-MX"}],imports:[p.ez,J,L.m]}),e})()}}]);