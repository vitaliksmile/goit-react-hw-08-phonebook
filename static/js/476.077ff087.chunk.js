"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[476],{476:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(885),r="ContactForm_form__dhl+T",s="ContactForm_input__Bl93P",o="ContactForm_label__-cVXI",c="ContactForm_button-30__JtAye",u=n(791),l=n(434),i=function(e){return e.contacts.contacts.items},m=function(e){return i(e).length>0},d=function(e){return e.contacts.filter},h=n(558),_=n(184),f=function(){var e=(0,l.I0)(),t=(0,l.v9)(i),n=(0,u.useState)(""),m=(0,a.Z)(n,2),d=m[0],f=m[1],b=(0,u.useState)(""),p=(0,a.Z)(b,2),v=p[0],C=p[1],x=function(){f(""),C("")};return(0,_.jsxs)("form",{className:r,onSubmit:function(n){n.preventDefault(),t.some((function(e){return e.name.trim().toLowerCase()===d.trim().toLowerCase()||e.number===v}))?alert("name: ".concat(d,"  or number: ").concat(v," is already in contacts ")):e((0,h.uK)({name:d,number:v})),x()},children:[(0,_.jsxs)("label",{className:o,htmlFor:"name",children:["Name",(0,_.jsx)("input",{placeholder:"Name",className:s,onChange:function(e){return f(e.target.value)},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:d})]}),(0,_.jsxs)("label",{className:o,htmlFor:"number",children:["Number",(0,_.jsx)("input",{placeholder:"Number",className:s,onChange:function(e){return C(e.target.value)},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:v})]}),(0,_.jsx)("button",{className:c,type:"submit",children:"Add Contact"})]})},b={li:"ContactList_li__dzNT+","button-30":"ContactList_button-30__gZdWs"},p=function(){var e=(0,l.I0)(),t=(0,l.v9)(d),n=(0,l.v9)(i),a=function(){var e=null===t||void 0===t?void 0:t.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return(0,_.jsx)("ul",{className:b.ul,children:a.map((function(t){var n=t.name,a=t.number,r=t.id;return(0,_.jsxs)("li",{className:b.li,children:[n,": ",a,(0,_.jsx)("button",{className:b["button-30"],type:"button",onClick:function(){e((0,h.zY)(r))},children:"Delete"})]},r)}))})},v=n(167),C="Filter_input__N7T3z",x=function(){var e=(0,l.v9)(d),t=(0,l.I0)();return(0,_.jsx)("input",{className:C,placeholder:"Find a contact",onChange:function(e){return t((0,v.W)(e.currentTarget.value))},type:"text",name:"filter",value:e})},N=n(14),j="Contacts_box__j5UmY",g="Contacts_text__LjyDq",y=function(){var e=(0,l.I0)(),t=(0,l.v9)(m),n=(0,l.v9)(N.LP);return(0,u.useEffect)((function(){n&&e((0,h.NJ)())}),[e,n]),n&&(0,_.jsxs)("div",{className:j,children:[(0,_.jsx)("h2",{className:g,children:"Phonebook"}),(0,_.jsx)(f,{}),t&&(0,_.jsx)("h2",{className:g,children:"Contacts"}),t&&(0,_.jsx)(x,{}),t&&(0,_.jsx)(p,{})]})}}}]);
//# sourceMappingURL=476.077ff087.chunk.js.map