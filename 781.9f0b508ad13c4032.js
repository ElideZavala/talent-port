"use strict";(self.webpackChunktalent_port=self.webpackChunktalent_port||[]).push([[781],{4781:(L,v,a)=>{a.r(v),a.d(v,{PerfilModule:()=>J});var t=a(4650),d=a(6895),x=a(3060);function b(e,i,o,r,n,s,m){try{var u=e[s](m),c=u.value}catch(h){return void o(h)}u.done?i(c):Promise.resolve(c).then(r,n)}var l=a(4006),P=a(2324),C=a(1942),Z=a(2340),M=a(529);let T=(()=>{class e{constructor(o){this.http=o,this.apiUrl=Z.N.API}create(o){return this.http.post(`${this.apiUrl}/register`,o,{observe:"response"})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(M.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var A=a(2586),F=a(5412),p=a(9549),I=a(4144),U=a(4859),f=a(9602),D=a(455),g=a(1576);function S(e,i){1&e&&(t.TgZ(0,"mat-label"),t._uU(1,"\xbfComo quieres que te llamemos?"),t.qZA())}function k(e,i){1&e&&(t.TgZ(0,"mat-label"),t._uU(1,"Fecha de nacimiento *"),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"mat-label"),t._uU(1,"Correo electr\xf3nico *"),t.qZA())}const R=[{path:"",component:(()=>{class e{constructor(o,r,n,s,m,u){this.fb=o,this.validationsRegexService=r,this.datePipe=n,this.perfilService=s,this.httpErrorService=m,this.dialog=u,this.startDate=new Date(1990,0,1),this.today=new Date,this.maxDateTo=this.today}ngOnInit(){const n=this.validationsRegexService.regexEmail;this.form=this.fb.group({name:["",l.kI.required],phone:["+52",[l.kI.required,l.kI.pattern(this.validationsRegexService.regexPhoneNumber)]],email:["",[l.kI.required,l.kI.pattern(n)]],birthday:["",l.kI.required]})}submit(){var r,o=this;this.dataForm=this.form.getRawValue(),this.dataForm.birthday=this.datePipe.transform(this.form.get("birthday").value,"yyyy-MM-dd")?.toString(),this.perfilService.create(this.dataForm).subscribe({next:(r=function y(e){return function(){var i=this,o=arguments;return new Promise(function(r,n){var s=e.apply(i,o);function m(c){b(s,r,n,m,u,"next",c)}function u(c){b(s,r,n,m,u,"throw",c)}m(void 0)})}}(function*(n){201===n.status&&(console.log("mensaje exitoso"),o.openDialogResult("Tu registro fue exitoso","checkmark-circle-outline.png",!0)),403===n.status&&o.openDialogResult("","icon-error.png",!0,!1,"La direcci\xf3n de correo electr\xf3nico ya ha sido registrada previamente en TalentPor","Recupera la contrase\xf1a para poder realizar el registro")}),function(s){return r.apply(this,arguments)}),error:r=>this.httpErrorService.errorHttp(r)})}openDialogResult(o,r,n,s,m,u){this.dialog.open(P.a,{width:"350px",data:{title:"",message:o,image:r,errorMessage1:m,errorMessage2:u,buttonOk:n,buttonBack:s}}).afterClosed().subscribe(h=>{h&&console.log("aca reporto a los nativos mobiles")})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.qu),t.Y36(C.W),t.Y36(d.uU),t.Y36(T),t.Y36(A.a),t.Y36(F.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-perfil"]],decls:33,vars:11,consts:[["fxFlex","","fxLayout","column","fxLayout.xs","column","fxLayoutGap.xs","0"],["fxLayout","column",1,"formContainer",3,"formGroup"],[4,"ngIf"],["appearance","outline"],["matInput","","placeholder","\xbfComo quieres que te llamemos?","formControlName","name"],["appearance","outline",1,"example-full-width"],["matInput","","placeholder","Fecha de Nacimiento *","formControlName","birthday",3,"matDatepicker","max","disabled"],["matSuffix","",3,"for"],["touchUi","","disabled","false","startView","year"],["picker",""],["mat-raised-button","","matDateRangePickerApply","",2,"background","#774DA2","color","#fff"],["matInput","","placeholder","N\xfamero de celular *","formControlName","phone"],["matInput","","placeholder","Correo electr\xf3nico *","formControlName","email"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"modeDark"],["labelPosition","before"],["mat-button","","cdkFocusInitial","",1,"button",3,"disabled","click"]],template:function(o,r){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,S,2,0,"mat-label",2),t.TgZ(3,"mat-form-field",3),t._UZ(4,"input",4),t.qZA(),t.YNc(5,k,2,0,"mat-label",2),t.TgZ(6,"mat-form-field",5),t._UZ(7,"input",6),t.TgZ(8,"mat-hint"),t._uU(9,"DD/MM/YYYY"),t.qZA(),t._UZ(10,"mat-datepicker-toggle",7),t.TgZ(11,"mat-datepicker",8,9)(13,"mat-date-range-picker-actions")(14,"button",10),t._uU(15,"Aceptar"),t.qZA()()()(),t.TgZ(16,"mat-label"),t._uU(17,"N\xfamero de celular *"),t.qZA(),t.TgZ(18,"mat-form-field",3),t._UZ(19,"input",11),t.TgZ(20,"mat-hint"),t._uU(21,"Ejemplo: +529999999999"),t.qZA()(),t.YNc(22,N,2,0,"mat-label",2),t.TgZ(23,"mat-form-field",3),t._UZ(24,"input",12),t.qZA(),t.TgZ(25,"div",13)(26,"div")(27,"span",14),t._uU(28,"Modo obscuro"),t.qZA()(),t.TgZ(29,"div"),t._UZ(30,"mat-slide-toggle",15),t.qZA()(),t.TgZ(31,"button",16),t.NdJ("click",function(){return r.submit()}),t._uU(32,"Continuar"),t.qZA()()()),2&o){const n=t.MAs(12);t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(1),t.Q6J("ngIf",r.form.controls.name.touched),t.xp6(3),t.Q6J("ngIf",r.form.controls.birthday.touched&&r.form.controls.birthday.valid),t.xp6(2),t.Q6J("matDatepicker",n)("max",r.maxDateTo)("disabled",!0),t.xp6(3),t.Q6J("for",n),t.xp6(12),t.Q6J("ngIf",r.form.controls.email.touched),t.xp6(3),t.Udp("margin-bottom",75,"px"),t.xp6(6),t.Q6J("disabled",!r.form.valid)}},dependencies:[d.O5,p.KE,p.bx,p.hX,p.R9,I.Nt,U.lW,f.Mq,f.hl,f.nW,f.M5,f.DK,D.Rr,l.Fj,l.JJ,l.JL,l.sg,l.u,g.xw,g.SQ,g.Wh,g.yH],styles:['@import"https://rsms.me/inter/inter.css";@font-face{font-family:Inter;font-style:normal;src:url(https://rsms.me/inter/inter.css)}[_nghost-%COMP%]{width:100%;background-color:var(--color-primary)}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#774da2}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background:#fff}[_nghost-%COMP%]     .mat-slide-toggle-bar{border-radius:15px!important;height:29px!important;width:59px!important;background-color:#fff;border:1px solid #DFDFE8}[_nghost-%COMP%]     .mat-slide-toggle-thumb{width:30px!important;height:30px!important;transform:translate(10%,10%)}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(25px,0,0)!important}.formContainer[_ngcontent-%COMP%]{margin:25px}.button[_ngcontent-%COMP%]{background:#774DA2;color:#fff;font-family:Inter;font-style:normal;font-weight:700;font-size:14px;line-height:17px;height:46px;width:100%;border-radius:0}.mat-button[_ngcontent-%COMP%]{cursor:default;color:#fff!important;border-radius:10px}.mat-button-disabled[_ngcontent-%COMP%]{opacity:.5}input[_ngcontent-%COMP%], .modeDark[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:#777}']}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[x.Bz.forChild(R),x.Bz]}),e})();var Y=a(3660);let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[d.uU,{provide:t.soG,useValue:"es-MX"}],imports:[d.ez,O,Y.m]}),e})()}}]);