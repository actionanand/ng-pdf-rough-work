"use strict";(self.webpackChunkng_pdf_rough_work=self.webpackChunkng_pdf_rough_work||[]).push([[918],{3918:(O,s,r)=>{r.r(s),r.d(s,{HomeComponent:()=>p});var t=r(8256),C=r(6895),A=r(529),b=r(590),i=r(1879),h=r(6805),c=r(4004);const U=r(2340).N.backend.players;const S=new t.OlP("Logger Injection Token",{factory:()=>({log:console.log})});class l{constructor(){this.host=(0,i.X)(),this.classManager=function J(e,o){const n=(0,t.f3M)(t.Qsj);return{add:()=>n.addClass(e,o),remove:()=>n.removeClass(e,o)}}((0,i.X)(),"red-color"),this.logger=(0,t.f3M)(S).log,this.players1=[],this.players2=[],function y(){return function T(e,o){const n="object"==typeof o;return new Promise((a,K)=>{let g,d=!1;e.subscribe({next:u=>{g=u,d=!0},error:K,complete:()=>{d?a(g):n?a(o.defaultValue):K(new h.K)}})})}((0,t.f3M)(A.eN).get(U).pipe((0,c.U)(e=>e.data)))}().then(o=>{this.players1=o,console.log("Players 1: ",this.players1)}),this.unsubPlayers=function k(){return(0,t.f3M)(A.eN).get(U).pipe((0,c.U)(e=>e.data))}().subscribe(o=>{this.players2=o,console.log("Players 2",this.players2)})}ngOnInit(){}setFontColorAsRed(){this.classManager.add()}removeFontColor(){this.classManager.remove()}onReqPost(){this.logger("Hello AR")}ngOnDestroy(){this.unsubPlayers&&this.unsubPlayers.unsubscribe()}}l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-inject-works"]],standalone:!0,features:[t._Bn([{provide:S,useFactory:()=>{const e=(0,t.f3M)(A.eN);return{log:o=>{e.post("https://www.anandraja.com",{value:o}).pipe((0,b.P)()).subscribe(),console.log("Post request is sent: ",JSON.stringify(o))}}}}]),t.jDz],decls:10,vars:0,consts:[[1,"inject-warap"],[1,"btn-wrap"],[3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"That's a test for Angular Inject function!"),t.qZA(),t.TgZ(3,"div",1)(4,"button",2),t.NdJ("click",function(){return n.setFontColorAsRed()}),t._uU(5,"Set text color as red"),t.qZA(),t.TgZ(6,"button",2),t.NdJ("click",function(){return n.removeFontColor()}),t._uU(7,"Remove text color"),t.qZA(),t.TgZ(8,"button",2),t.NdJ("click",function(){return n.onReqPost()}),t._uU(9,"Inject Post Req"),t.qZA()()())},dependencies:[C.ez],styles:[".red-color[_nghost-%COMP%]{color:red}.inject-warap[_ngcontent-%COMP%]{padding:.6rem}.btn-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;padding-top:.6rem;gap:.6rem}.btn-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.4rem;border-radius:4px}.btn-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer;color:#fff;border-color:green;background-color:green}"]});class p{constructor(){this.imgData="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBORXhpZgAASUkqAAgAAAACAA4BAgAPAAAAJgAAAJiCAgARAAAANQAAAAAAAABDbG9zZS11cCBvZiBQdWdVbGlhbmEgRGVtZW50aWV2Yf/tAG5QaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAURwCUAAFdWxrYW4cAngAD0Nsb3NlLXVwIG9mIFB1ZxwCdAARVWxpYW5hIERlbWVudGlldmEcAm4AGEdldHR5IEltYWdlcy9pU3RvY2twaG90bwD/4QUraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iVWxpYW5hIERlbWVudGlldmEiIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy9pU3RvY2twaG90byIgR2V0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",this.arHeartSvgData='\n  <svg version="1.1" height="96" width="96" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <style>\n      use { fill: limegreen; animation: .4s infinite ease, color 1s infinite linear alternate;}\n      @keyframes color {to {fill: magenta\t}}\n      @keyframes left {to {transform: translate(-32px, 0)}}\n      @keyframes down {to {transform: translate(0, 32px)}}\n      @keyframes right {to {transform: translate(32px, 0)}}\n      @keyframes up {to {transform: translate(0, -32px)}}\n    </style>\n    <defs>\n      <path id="skull" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />\n    </defs>\n    <use href="#skull" x="0" y="0"  style="animation-name: down, color"/>\n    <use href="#skull" x="32" y="0" style="animation-name: left, color"/>\n    <use href="#skull" x="64" y="0" style="animation-name: left, color"/>\n    <use href="#skull" x="0" y="32" style="animation-name: down, color"/>\n    <use href="#skull" x="0" y="64" style="animation-name: right, color"/>\n    <use href="#skull" x="32" y="64" style="animation-name: right, color"/>\n    <use href="#skull" x="64" y="64" style="animation-name: up, color"/>\n    <use href="#skull" x="64" y="32" style="animation-name: up, color"/>\n  </svg>',this.host=(0,i.X)(),this.renderer=(0,t.f3M)(t.Qsj)}ngOnInit(){const o=new Blob([this.arHeartSvgData],{type:"image/svg+xml"}),a=`url(${URL.createObjectURL(o)})`;this.renderer.setStyle(this.host.querySelector(".repeating-linear"),"border-image-source",a)}}p.\u0275fac=function(o){return new(o||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"home-wrap"],[1,"pug-frame"],["alt","pug",1,"repeating-linear",3,"src"],[1,"inject-comp"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3),t._UZ(4,"app-inject-works"),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("src",n.imgData,t.LSH))},dependencies:[l],styles:[".pug-frame[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:65vh}.pug-frame[_ngcontent-%COMP%]   .repeating-linear[_ngcontent-%COMP%]{position:relative;margin:auto;border:24px solid;border-image:url(ar-heart-red-animation.ca1180294aa7af73.svg);border-image-slice:32;border-image-repeat:round}.pug-frame[_ngcontent-%COMP%]   .repeating-linear[_ngcontent-%COMP%]:hover{cursor:pointer;border-image:url(ar-heart-red-animation.ca1180294aa7af73.svg)!important;border-image-slice:32!important;border-image-repeat:round!important}",".home-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:1rem}",".inject-comp[_ngcontent-%COMP%]{padding:.6rem;margin:.6rem;border-radius:4px;border:1px solid teal;background:rgb(34,193,195);background:radial-gradient(circle,rgb(34,193,195) 0%,rgba(117,202,74,.5551470588) 100%)}"]})}}]);