(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),i=c.n(s),a=(c(13),c(4)),j=c.n(a),o=c(7),u=c(2),l=c(8),b=c.n(l),d=c(0),h=function(){return Object(d.jsxs)("div",{className:"loading",children:[Object(d.jsx)(b.a,{className:"load",type:"bars",color:"hsl(205, 63%, 48%)",height:"60%",width:"60%"}),Object(d.jsx)("h1",{children:"Loading..."})]})},O=c(5),x=function(e){var t=e.id,c=e.name,r=e.image,s=e.info,i=e.price,a=e.removeTour,j=Object(n.useState)(!1),o=Object(u.a)(j,2),l=o[0],b=o[1];return Object(d.jsxs)("article",{className:"single-tour",children:[Object(d.jsx)("img",{src:r,alt:c}),Object(d.jsxs)("footer",{children:[Object(d.jsxs)("div",{className:"tour-info",children:[Object(d.jsx)("h4",{children:c}),Object(d.jsxs)("h4",{className:"tour-price",children:["$",i]})]}),Object(d.jsxs)("p",{children:[l?s:"".concat(s.substring(0,200),"..."),Object(d.jsx)("button",{onClick:function(){return b(!l)},children:l?"Show Less":"Read More"})]}),Object(d.jsx)("button",{className:"delete-btn",onClick:function(){return a(t)},children:"Not Intrested"})]})]})},f=function(e){var t=e.tours,c=e.removeTour;return Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h2",{children:"our tours"}),Object(d.jsx)("div",{className:"underline"})]}),Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)(x,Object(O.a)(Object(O.a)({},e),{},{removeTour:c}),e.id)}))})]})};var m=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),a=i[0],l=i[1],b=function(){var e=Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,r(!1),l(c),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),r(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),c?Object(d.jsx)("main",{children:Object(d.jsx)(h,{})}):0===a.length?Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h2",{children:"No Tours Left"}),Object(d.jsx)("div",{className:"underline"}),Object(d.jsx)("button",{className:"btn",onClick:b,children:"Referesh"})]})}):Object(d.jsx)("main",{children:Object(d.jsx)(f,{tours:a,removeTour:function(e){var t=a.filter((function(t){return t.id!==e}));l(t)}})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e0f460d1.chunk.js.map