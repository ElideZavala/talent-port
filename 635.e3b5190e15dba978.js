"use strict";(self.webpackChunktalent_port=self.webpackChunktalent_port||[]).push([[635],{7635:(J,h,r)=>{r.r(h),r.d(h,{PerfilModule:()=>R});var t=r(4650),m=r(6895),g=r(3060),v=r(5861),i=r(4006),x=r(2324),y=r(1942),b=r(2340),P=r(529);let C=(()=>{class e{constructor(o){this.http=o,this.apiUrl=b.N.API}create(o){return this.http.post(`${this.apiUrl}/register`,o,{observe:"response"})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(P.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=r(2586),T=r(5412),f=r(9549),I=r(4144),M=r(4859),s=r(9602),c=r(1576);function A(e,l){1&e&&(t.TgZ(0,"mat-label"),t._uU(1,"\xbfComo quieres que te llamemos?"),t.qZA())}function F(e,l){1&e&&(t.TgZ(0,"mat-label"),t._uU(1,"Fecha de nacimiento *"),t.qZA())}function N(e,l){1&e&&(t.TgZ(0,"mat-label"),t._uU(1,"Correo electr\xf3nico *"),t.qZA())}const S=[{path:"",component:(()=>{class e{constructor(o,a,n,u,d,p){this.fb=o,this.validationsRegexService=a,this.datePipe=n,this.perfilService=u,this.httpErrorService=d,this.dialog=p,this.startDate=new Date(1990,0,1),this.today=new Date,this.maxDateTo=this.today}ngOnInit(){const n=this.validationsRegexService.regexEmail;this.form=this.fb.group({name:["",i.kI.required],phone:["+52",[i.kI.required,i.kI.pattern(this.validationsRegexService.regexPhoneNumber)]],email:["",[i.kI.required,i.kI.pattern(n)]],birthday:["",i.kI.required]})}submit(){var a,o=this;this.dataForm=this.form.getRawValue(),this.dataForm.birthday=this.datePipe.transform(this.form.get("birthday").value,"yyyy-MM-dd")?.toString(),this.perfilService.create(this.dataForm).subscribe({next:(a=(0,v.Z)(function*(n){201===n.status&&(console.log("mensaje exitoso"),o.openDialogResult("Tu registro fue exitoso","checkmark-circle-outline.png",!0)),403===n.status&&o.openDialogResult("","icon-error.png",!0,!1,"La direcci\xf3n de correo electr\xf3nico ya ha sido registrada previamente en TalentPor","Recupera la contrase\xf1a para poder realizar el registro")}),function(u){return a.apply(this,arguments)}),error:a=>this.httpErrorService.errorHttp(a)})}openDialogResult(o,a,n,u,d,p){this.dialog.open(x.a,{width:"350px",data:{title:"",message:o,image:a,errorMessage1:d,errorMessage2:p,buttonOk:n,buttonBack:u}}).afterClosed().subscribe(Y=>{Y&&console.log("aca reporto a los nativos mobiles")})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(i.qu),t.Y36(y.W),t.Y36(m.uU),t.Y36(C),t.Y36(Z.a),t.Y36(T.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-perfil"]],decls:27,vars:9,consts:[["fxFlex","","fxLayout","column","fxLayout.xs","column","fxLayoutGap.xs","0"],["fxLayout","column",1,"formContainer",3,"formGroup"],[4,"ngIf"],["appearance","outline"],["matInput","","placeholder","\xbfComo quieres que te llamemos?","formControlName","name"],["appearance","outline",1,"example-full-width"],["matInput","","placeholder","Fecha de Nacimiento *","formControlName","birthday",3,"matDatepicker","max","disabled"],["matSuffix","",3,"for"],["touchUi","","disabled","false","startView","year"],["picker",""],["mat-raised-button","","matDateRangePickerApply","",2,"background","#774DA2","color","#fff"],["matInput","","placeholder","N\xfamero de celular *","formControlName","phone"],["matInput","","placeholder","Correo electr\xf3nico *","formControlName","email"],["mat-button","","cdkFocusInitial","",1,"button",3,"disabled","click"]],template:function(o,a){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,A,2,0,"mat-label",2),t.TgZ(3,"mat-form-field",3),t._UZ(4,"input",4),t.qZA(),t.YNc(5,F,2,0,"mat-label",2),t.TgZ(6,"mat-form-field",5),t._UZ(7,"input",6),t.TgZ(8,"mat-hint"),t._uU(9,"DD/MM/YYYY"),t.qZA(),t._UZ(10,"mat-datepicker-toggle",7),t.TgZ(11,"mat-datepicker",8,9)(13,"mat-date-range-picker-actions")(14,"button",10),t._uU(15,"Aceptar"),t.qZA()()()(),t.TgZ(16,"mat-label"),t._uU(17,"N\xfamero de celular *"),t.qZA(),t.TgZ(18,"mat-form-field",3),t._UZ(19,"input",11),t.TgZ(20,"mat-hint"),t._uU(21,"Ejemplo: +529999999999"),t.qZA()(),t.YNc(22,N,2,0,"mat-label",2),t.TgZ(23,"mat-form-field",3),t._UZ(24,"input",12),t.qZA(),t.TgZ(25,"button",13),t.NdJ("click",function(){return a.submit()}),t._uU(26,"Continuar"),t.qZA()()()),2&o){const n=t.MAs(12);t.xp6(1),t.Q6J("formGroup",a.form),t.xp6(1),t.Q6J("ngIf",a.form.controls.name.touched),t.xp6(3),t.Q6J("ngIf",a.form.controls.birthday.touched&&a.form.controls.birthday.valid),t.xp6(2),t.Q6J("matDatepicker",n)("max",a.maxDateTo)("disabled",!0),t.xp6(3),t.Q6J("for",n),t.xp6(12),t.Q6J("ngIf",a.form.controls.email.touched),t.xp6(3),t.Q6J("disabled",!a.form.valid)}},dependencies:[m.O5,f.KE,f.bx,f.hX,f.R9,I.Nt,M.lW,s.Mq,s.hl,s.nW,s.M5,s.DK,i.Fj,i.JJ,i.JL,i.sg,i.u,c.xw,c.SQ,c.yH],styles:['@import"https://rsms.me/inter/inter.css";@font-face{font-family:Inter;font-style:normal;src:url(https://rsms.me/inter/inter.css)}[_nghost-%COMP%]{width:100%}.formContainer[_ngcontent-%COMP%]{margin:25px}.button[_ngcontent-%COMP%]{background:#774DA2;color:#fff;font-family:Inter;font-style:normal;font-weight:700;font-size:14px;line-height:17px;height:46px;width:100%;border-radius:0}.mat-button[_ngcontent-%COMP%]{cursor:default;color:#fff!important;border-radius:10px}.mat-button-disabled[_ngcontent-%COMP%]{opacity:.5}input[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:#777}']}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(S),g.Bz]}),e})();var D=r(2782);let R=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[m.uU,{provide:t.soG,useValue:"es-MX"}],imports:[m.ez,U,D.m]}),e})()}}]);