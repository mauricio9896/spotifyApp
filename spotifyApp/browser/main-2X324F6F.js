import{g as f}from"./chunk-7Y6UA3V4.js";import{B as r,G as m,H as i,Ra as a,Sa as c,Ua as l,Ya as s,la as p}from"./chunk-RRMFOBXZ.js";var g=[{path:"login",loadChildren:()=>import("./chunk-RZEH36TH.js").then(o=>o.AuthModule)},{path:"home",loadChildren:()=>import("./chunk-36P7RMOW.js").then(o=>o.HomeModule)},{path:"**",redirectTo:"/login",pathMatch:"full"}],u=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[s.forRoot(g),s]});let o=t;return o})();var h=(()=>{let t=class t{constructor(){this.title="spotifyApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,y){e&1&&p(0,"router-outlet")},dependencies:[l]});let o=t;return o})();var M=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[h]}),t.\u0275inj=r({imports:[c,u,f]});let o=t;return o})();a().bootstrapModule(M).catch(o=>console.error(o));
