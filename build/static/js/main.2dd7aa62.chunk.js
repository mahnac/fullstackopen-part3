(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(17),c=t.n(o),a=t(8),u=t(4),i=t(0),s=function(e){var n=e.onChange;return Object(i.jsxs)(i.Fragment,{children:["filter shown with ",Object(i.jsx)("input",{onChange:n})]})},b=function(e){var n=e.person,t=e.removePerson;return Object(i.jsxs)("div",{children:[n.name," ",n.number,Object(i.jsx)("button",{value:n.id,onClick:t,children:"remove"})]})},j=function(e){var n=e.personsToShow,t=e.removePerson;return Object(i.jsx)(i.Fragment,{children:n.map((function(e){return Object(i.jsx)(b,{person:e,removePerson:t},e.id)}))})},h=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{onChange:e.handleNameChange})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{onChange:e.handleNumberChange})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})})},d=t(3),l=t.n(d),f="http://localhost:3001/persons",m=function(){return l.a.get(f).then((function(e){return e.data}))},O=function(e){return l.a.post(f,e).then((function(e){return e.data}))},v=function(e){return l.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},p=function(e,n){return l.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},g=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),b=Object(u.a)(c,2),d=b[0],l=b[1],f=Object(r.useState)(""),g=Object(u.a)(f,2),x=g[0],w=g[1],C=Object(r.useState)(""),S=Object(u.a)(C,2),k=S[0],P=S[1];Object(r.useEffect)((function(){console.log("effect"),m().then((function(e){return o(e)}))}),[]),console.log("render",t.length,"persons");var N=""===k?t:t.filter((function(e){return e.name.toLowerCase().includes(k)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(s,{onChange:function(e){return P(e.target.value.toLowerCase())}}),Object(i.jsx)("h3",{children:"Add a new Person:"}),Object(i.jsx)(h,{onSubmit:function(e){e.preventDefault();var n,r=(n=d,t.find((function(e){return e.name===n})));r?window.confirm("".concat(r.name," is already added to the phonebook, replace the old number with a new one?"))&&function(e,n){var r=Object(a.a)(Object(a.a)({},n),{},{number:e});p(n.id,r).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e})))}))}(x,r):function(e,n){O({name:e,number:n}).then((function(e){o(t.concat(e))}))}(d,x),l(""),w(""),e.target[0].value="",e.target[1].value=""},handleNameChange:function(e){return l(e.target.value)},handleNumberChange:function(e){return w(e.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(j,{removePerson:function(e){var n=e.target.previousSibling.previousSibling.previousSibling.data,r=parseInt(e.target.value);window.confirm("Remove ".concat(n," ?"))&&(o(t.filter((function(e){return e.id!==r}))),v(r))},personsToShow:N})]})};c.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2dd7aa62.chunk.js.map