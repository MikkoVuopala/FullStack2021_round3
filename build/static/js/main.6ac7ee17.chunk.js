(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),l=t(2),c=t(3),i=t.n(c),m=function(){return i.a.get("/api/persons").then((function(e){return e.data}))},s=function(e){return i.a.post("/api/persons",e).then((function(e){return e.data}))},f=function(e){return i.a.delete("/api/persons"+"/".concat(e)).then((function(e){return e.data}))},d=function(e){return r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},h=function(e){return r.a.createElement("div",null,"filtering with: ",r.a.createElement("input",{value:e.filter,onChange:e.hfc}))},b=function(e){return r.a.createElement("div",null,e.persons.map((function(n){return r.a.createElement("p",{key:n.name},n.name," ",n.number,r.a.createElement("button",{onClick:e.delName,value:n.id},"delete"))})))},p=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),c=Object(l.a)(u,2),i=c[0],g=c[1],v=Object(a.useState)(""),E=Object(l.a)(v,2),w=E[0],N=E[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),C=O[0],k=O[1],S=Object(a.useState)(t),y=Object(l.a)(S,2),D=y[0],I=y[1],J=Object(a.useState)(null),L=Object(l.a)(J,2),T=L[0],x=L[1];Object(a.useEffect)((function(){console.log("effect"),m().then((function(e){console.log(e),o(e),I(e)}))}),[]),console.log("render",t.length,"persons");return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:T}),r.a.createElement(h,{hfc:function(e){console.log(e.target.value),k(e.target.value),I(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))},filter:C}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(d,{addName:function(e){e.preventDefault();var n={name:i,number:w};t.some((function(e){return e.name===i}))?(console.log(n.name),window.alert("".concat(i," is already added to phonebook")),g(""),N("")):s(n).then((function(e){o(t.concat(e)),I(t.concat(e)),x("'".concat(i,"' was added to the phonebook!")),setTimeout((function(){x(null)}),5e3),g(""),N("")}))},newName:i,handleNameChange:function(e){console.log(e.target.value),g(e.target.value)},newNumber:w,handleNumberChange:function(e){console.log(e.target.value),N(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(b,{persons:D,delName:function(e){e.preventDefault();var n=e.target.value,a=t.find((function(e){return e.id===parseInt(n)})).name;window.confirm("Delete ".concat(a,"?"))&&f(n).then((function(e){o(t.filter((function(n){return n!==e}))),I(t.filter((function(n){return n!==e}))),x("'".concat(a,"' was removed from the phonebook!")),setTimeout((function(){x(null)}),5e3)}))}}))};t(36);u.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6ac7ee17.chunk.js.map