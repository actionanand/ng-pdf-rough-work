"use strict";(self.webpackChunkng_pdf_rough_work=self.webpackChunkng_pdf_rough_work||[]).push([[353],{353:(g,p,t)=>{t.r(p),t.d(p,{InbuiltPdfViewerComponent:()=>o});var r=t(6895),d=t(2340),a=t(8246),l=t(4132),n=t(8256),c=t(1735);function f(i,e){1&i&&(n.TgZ(0,"div",3),n._UZ(1,"app-spinner"),n.qZA())}function _(i,e){if(1&i&&(n.TgZ(0,"div",4)(1,"iframe",5),n.ALo(2,"safe"),n.TgZ(3,"p"),n._uU(4,"Not Supported"),n.qZA()()()),2&i){const s=n.oxw();n.xp6(1),n.uIk("src",n.xi3(2,1,s.pdfUrl,"resourceUrl"),n.uOi)}}class o{constructor(e){this.pdfServ=e,this.loading=!0}ngOnInit(){this.pdfUrl=d.N.backend.localPdf,this.pdfSub=this.pdfServ.downloadPdf$(this.pdfUrl).subscribe(e=>{this.loading=!1;const s=new Blob([e],{type:"application/pdf"});this.pdfUrl=window.URL.createObjectURL(s)})}ngOnDestroy(){this.pdfSub&&this.pdfSub.unsubscribe()}}o.\u0275fac=function(e){return new(e||o)(n.Y36(c.F))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-inbuilt-pdf-viewer"]],standalone:!0,features:[n.jDz],decls:5,vars:2,consts:[[1,"pdf-title"],["class","spinner-wrap",4,"ngIf","ngIfElse"],["loadPDF",""],[1,"spinner-wrap"],[1,"pdf-container"],["type","application/pdf",1,"pdf-content"]],template:function(e,s){if(1&e&&(n.TgZ(0,"h1",0),n._uU(1,"PDF Blob or byte array rendered in inbuilt browser after processing"),n.qZA(),n.YNc(2,f,2,0,"div",1),n.YNc(3,_,5,4,"ng-template",null,2,n.W1O)),2&e){const u=n.MAs(4);n.xp6(2),n.Q6J("ngIf",s.loading)("ngIfElse",u)}},dependencies:[r.O5,a.y,l.O],styles:[".pdf-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:0 auto;width:70vw;height:80vh}.pdf-content[_ngcontent-%COMP%]{width:100%;height:100%}.pdf-title[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.8rem}.spinner-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:50vh}@media only screen and (max-width: 850px){.pdf-container[_ngcontent-%COMP%]{width:90vw}}@media only screen and (min-width: 1100px){.pdf-container[_ngcontent-%COMP%]{width:60vw}}"]})}}]);