(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{87:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA",active:"Dialogs_active__2sQhs",dialogs_item:"Dialogs_dialogs_item__2KlcX",massages:"Dialogs_massages__3TLCQ",message:"Dialogs_message__1xIDh"}},91:function(e,s,a){"use strict";a.r(s);var t=a(2),i=a(16),n=a(17),c=a(19),r=a(18),d=a(0),o=a(1),l=a.n(o),m=a(50),j=a(87),u=a.n(j),b=a(14),g=function(e){var s="/dialogs/"+e.id;return Object(d.jsx)("li",{className:u.a.dialog,children:Object(d.jsx)(b.b,{to:s,activeClassName:u.a.active,children:e.name})})},p=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:u.a.message,children:e.message})})},h=function(e){var s=e.data.dialogsData.map((function(e){return Object(d.jsx)(g,{name:e.name,id:e.id},e.id)})),a=e.data.messagesData.map((function(e){return Object(d.jsx)(p,{message:e.message},e.id)}));return Object(d.jsxs)("div",{className:u.a.dialogs,children:[Object(d.jsx)("div",{className:u.a.dialogs_item,children:Object(d.jsx)("ul",{children:s})}),Object(d.jsx)("div",{className:u.a.massages,children:a})]})},O=a(13),x=a(15),f=a(20),v=a(22),_=a.n(v),D=function(e){return Object(d.jsxs)("form",{className:"add_message",onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(f.a,{type:"text",placeholder:"Send message",name:"sendMessage",component:"textarea"})}),Object(d.jsx)("div",{className:_.a.wrapper_button,children:Object(d.jsx)("button",{disabled:e.pristine||e.submitting,onClick:e.form.rest,children:"Add"})})]})},N=function(e){Object(c.a)(a,e);var s=Object(r.a)(a);function a(){return Object(i.a)(this,a),s.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,Object(t.a)({},this.props)),Object(d.jsx)(f.b,{onSubmit:function(s){e.props.addMassageAction(s.sendMessage)},children:function(e){var s=e.handleSubmit,a=e.pristine,t=e.form,i=e.reset,n=e.submitting;return Object(d.jsx)(D,{handleSubmit:s,pristine:a,form:t,reset:i,submitting:n})}})]})}}]),a}(l.a.Component);s.default=Object(x.d)(Object(O.b)((function(e){return console.log(e.messagePage),{data:e.messagePage}}),{addMassageAction:m.a}))(N)}}]);
//# sourceMappingURL=4.d47803b9.chunk.js.map