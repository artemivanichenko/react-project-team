"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[392],{8035:function(n,e,t){t.d(e,{Z:function(){return b}});var r,i,o,s,l=t(8687),c=t(7614),a=t(1941),d=t(168),p=t(6088),h=t(948),x=p.Z.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  width: 334px;\n  margin: 40px auto 8px auto;\n"]))),u=p.Z.p(i||(i=(0,d.Z)(["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.16;\n  letter-spacing: 0.02em;\n  color: #c7ccdc;\n"]))),m=p.Z.button(o||(o=(0,d.Z)(["\n  background-color: transparent;\n  border: 2px solid #80848f;\n  border-radius: 16px;\n  width: 125px;\n  height: 44px;\n  font-size: 12px;\n  line-height: 1.16;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: #c7ccdc;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  &:hover {\n    background-color: #42a652;\n    border: 2px solid #42a652;\n    color: #f6f7fb;\n  }\n"]))),f=(0,p.Z)(h.h3)(s||(s=(0,d.Z)(["\n  background-color: transparent;\n  border: 2px solid #80848f;\n  border-radius: 16px;\n  width: 125px;\n  height: 44px;\n  color: #f6f7fb;\n  text-align: end;\n  box-sizing: border-box;\n  padding: 12px 20px 12px 8px;\n"]))),g=t(184),b=function(){var n=(0,l.useSelector)(a.QM);console.log(n);var e=(0,l.useDispatch)();return(0,g.jsxs)(x,{onSubmit:function(n){n.preventDefault();var t=Number.parseFloat(n.currentTarget.elements.balance.value);console.log(t),e((0,c.s0)({newBalance:t}))},children:[(0,g.jsx)(u,{children:"Balance:"}),(0,g.jsx)(f,{required:!0,name:"balance",value:n,suffix:" UAH",placeholder:"00.00 UAH",onValueChange:function(n,e){console.log(n,e)}}),(0,g.jsx)(m,{type:"submit",children:"Confirm"})]})}},8392:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,i,o,s,l,c,a,d,p,h=t(8035),x=t(9439),u=t(9779),m=t(2017),f=t(3385),g=t(8802),b=t(8687),Z=t(3548),j=t(2791),w=t(168),A=t(6088),S=A.Z.span(r||(r=(0,w.Z)(["\nfont-weight: 700;\nfont-size: 14px;\nline-height: 1.16666px;\nletter-spacing: 0.02em;\ncolor: #F6F7FB;\nmargin-top: 15px;\n"]))),Y=A.Z.span(i||(i=(0,w.Z)(["\nfont-weight: 400;\nfont-size: 12px;\nline-height: 14px;\nletter-spacing: 0.04em;\ncolor: rgba(199, 204, 220, 0.5);\n"]))),R=A.Z.div(o||(o=(0,w.Z)(["\ndisplay: flex;\njustify-content: flex-end;\nalign-items: center;\n    align-items: center;\n    flex-direction: column;\n"]))),k=A.Z.div(s||(s=(0,w.Z)(["\ndisplay: flex;\n"]))),I=t(184),v=function(){var n=(0,b.useDispatch)(),e=(0,j.useState)(u.ou.now()),t=(0,x.Z)(e,2),r=t[0],i=t[1];(0,j.useEffect)((function(){n((0,Z._E)(r.toFormat("yyyy-LL")))}),[n,r]);return(0,I.jsxs)(R,{children:[(0,I.jsx)(Y,{children:"Current period"}),(0,I.jsxs)(k,{children:[(0,I.jsx)(g.Z,{variant:"text",startIcon:(0,I.jsx)(m.Z,{htmlColor:"green"}),onClick:function(){i((function(n){return n.minus({month:1})}))}}),(0,I.jsx)(S,{children:r.toFormat("LLLL yyyy").toUpperCase()}),(0,I.jsx)(g.Z,{variant:"text",endIcon:(0,I.jsx)(f.Z,{htmlColor:"green"}),onClick:function(){i((function(n){return n.plus({month:1})}))},disabled:!(r.startOf("month")<u.ou.now().startOf("month"))})]})]})},F=t(9419),O=A.Z.span(l||(l=(0,w.Z)(["\ncolor:white;\nfont-style: normal;\nfont-weight: 400;\nfont-size: 12px;\nline-height:1.1666;\nletter-spacing: 0.04em;\n\n\na{\n   text-decoration: none; \n}\n"]))),V=function(){return(0,I.jsxs)(O,{children:[(0,I.jsx)(F.Z,{sx:{width:20,height:12,marginBottom:-.2,marginRight:2},children:" "}),"Main page"]})},y=t(1087),D=A.Z.div(c||(c=(0,w.Z)(["\n@media (min-width: 320px) {\n    max-width:480px;\n display: flex;\nalign-items: center;\njustify-content: space-between;\npadding: 40px 20px;\nflex-direction: column;\ngap:32px;\n}\n@media (min-width: 768px) {\n     min-width: 768px;\n     margin:auto;\n        flex-direction: row;\n    display: flex;\nalign-items: center;\njustify-content: space-between;\n    padding: 40px 32px;\n}\n@media (min-width: 1280px) {\n    max-width: 1280px;\n     margin:auto;\n    padding: 40px 123px;\n}\n\npadding: 40px 123px;\n"]))),W=function(){return(0,I.jsxs)(D,{children:[(0,I.jsx)(y.NavLink,{to:"/home",children:(0,I.jsx)(V,{})}),(0,I.jsx)(h.Z,{}),(0,I.jsx)(v,{})]})},C=t(3628),H=function(){var n=(0,b.useSelector)(C.ld),e=function(n){return Object.entries(n).map((function(n){var e=(0,x.Z)(n,2);return[e[0],e[1]]}))},t=e((0,b.useSelector)(C.UT));e(n);return console.log(t),(0,I.jsx)(I.Fragment,{children:t.map((function(n){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("p",{children:[" ",n[0]]}),(0,I.jsx)("img",{src:"data:image/png;base64,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",alt:"armchair"}),(0,I.jsxs)("p",{children:[" ",n[1].total]})]})}))})},B=function(){return(0,I.jsx)("section",{children:"Report Charts"})},Q=t(8789),P=Q.ZP.div(a||(a=(0,w.Z)(["\n  display: flex;\n  background-color: #383847;\n  justify-content: center;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  width: 280px;\n  height: 85px;\n  @media screen and (min-width: 768px) {\n    width: 1034px;\n    height: 50px;\n  }\n"]))),q=Q.ZP.span(d||(d=(0,w.Z)(["\n  margin-left: 10px;\n  font-weight: 700;\n  line-height: calc(24 / 16);\n  color: ",";\n"])),(function(n){return n.red?"#FE4566":"#60C470"})),L=Q.ZP.p(p||(p=(0,w.Z)(["\n  color: rgba(199, 204, 220, 1);\n  border-left: 3px solid #474759;\n  margin-left: 20px;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  &:first-child {\n    border-left: none;\n    padding-left: 0;\n    margin-left: 0;\n  }\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),K=function(){var n=(0,b.useSelector)(C.TW),e=(0,b.useSelector)(C.jq);return(0,I.jsxs)(P,{children:[(0,I.jsxs)(L,{children:["Expenses:",(0,I.jsxs)(q,{red:!0,children:[" - ",n," UAH"]})]}),(0,I.jsxs)(L,{children:["Income: ",(0,I.jsxs)(q,{children:[" + ",e," UAH"]})]})]})},N=function(){return(0,I.jsxs)("section",{children:[(0,I.jsx)(W,{}),(0,I.jsx)(K,{}),(0,I.jsx)(H,{}),(0,I.jsx)(B,{})]})}}}]);
//# sourceMappingURL=392.fbbd41ab.chunk.js.map