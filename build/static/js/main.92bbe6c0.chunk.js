(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),u=t.n(r),l=t(2),c=t(3),i=t.n(c),m=function(){return i.a.get("/api/persons").then((function(e){return e.data}))},s=function(e){return i.a.post("/api/persons",e).then((function(e){return e.data}))},f=function(e){return i.a.delete("/api/persons"+"/".concat(e)).then((function(e){return e.data}))},d=function(e){return o.a.createElement("form",{onSubmit:e.addName},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.newName,onChange:e.handleNameChange}),o.a.createElement("br",null),"number: ",o.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},h=function(e){return o.a.createElement("div",null,"filtering with: ",o.a.createElement("input",{value:e.filter,onChange:e.hfc}))},b=function(e){return o.a.createElement("div",null,e.persons.map((function(n){return o.a.createElement("p",{key:n.name},n.name," ",n.number,o.a.createElement("button",{onClick:e.delName,value:n.id},"delete"))})))},p=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"error"},n)},g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),c=Object(l.a)(u,2),i=c[0],g=c[1],v=Object(a.useState)(""),E=Object(l.a)(v,2),w=E[0],N=E[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),C=O[0],k=O[1],S=Object(a.useState)(t),y=Object(l.a)(S,2),D=y[0],T=y[1],J=Object(a.useState)(null),L=Object(l.a)(J,2),x=L[0],A=L[1];Object(a.useEffect)((function(){console.log("effect"),m().then((function(e){console.log(e),r(e),T(e)}))}),[]),console.log("render",t.length,"persons");return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(p,{message:x}),o.a.createElement(h,{hfc:function(e){console.log(e.target.value),k(e.target.value),T(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))},filter:C}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(d,{addName:function(e){e.preventDefault();var n={name:i,number:w};t.some((function(e){return e.name===i}))?(console.log(n.name),window.alert("".concat(i," is already added to phonebook")),g(""),N("")):s(n).then((function(e){r(t.concat(e)),T(t.concat(e)),A("'".concat(i,"' was added to the phonebook!")),setTimeout((function(){A(null)}),5e3),g(""),N("")})).catch((function(e){A("".concat(e.response.data.error)),setTimeout((function(){A(null)}),5e3),g(""),N("")}))},newName:i,handleNameChange:function(e){console.log(e.target.value),g(e.target.value)},newNumber:w,handleNumberChange:function(e){console.log(e.target.value),N(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(b,{persons:D,delName:function(e){e.preventDefault();var n=e.target.value,a=t.find((function(e){return e.id===n})).name;window.confirm("Delete ".concat(a,"?"))&&f(n).then((function(e){r(t.filter((function(n){return n.name!==e}))),T(t.filter((function(n){return n.name!==e}))),A("'".concat(a,"' was removed from the phonebook!")),setTimeout((function(){A(null)}),5e3)}))}}))};t(36);u.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.92bbe6c0.chunk.js.map