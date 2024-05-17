"use strict";(self.webpackChunkreact_events=self.webpackChunkreact_events||[]).push([[278],{2412:function(n,e,i){i.d(e,{Z:function(){return o}});i(2791);var r=i(6540),a=i(4086),t=i(184);function o(n){var e=n.message;return(0,t.jsxs)(a.B,{children:[(0,t.jsx)("h2",{className:"empty-title",children:e}),(0,t.jsx)(r.yi3,{className:"icon-empty"})]})}},6616:function(n,e,i){i.d(e,{B:function(){return t}});var r,a=i(168),t=i(5867).ZP.div(r||(r=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: minmax(380px, 1fr);\n  grid-template-rows: 1fr;\n  padding: 20px;\n  margin: 0 auto;\n"])))},4278:function(n,e,i){i.r(e),i.d(e,{default:function(){return F}});i(2791);var r,a,t,o,l=i(6616),d=i(9439),s=i(5705),p=i(8007),c=i(1413),u=i(4925),m=i(168),x=i(5867),f=x.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #fafafa;\n  margin: 0;\n  padding: 0;\n\n  .my-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 300px;\n    background-color: white;\n    border-radius: 16px;\n    border: 2px solid #eeeeee;\n    margin: 8px auto;\n    gap: 4px;\n    padding: 8px;\n  }\n  .my-title {\n    font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);\n    text-align: center;\n    font-weight: 700;\n    color: #616161;\n    padding: 0;\n    margin: 0;\n  }\n  .button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    color: white;\n    font-size: 16px;\n    font-weight: 700;\n    background-color: #bdbdbd;\n    border-radius: 16px;\n    border: 1px solid #bdbdbd;\n    outline: #bdbdbd;\n    height: 40px;\n    margin: 0;\n    padding: 0 100px;\n    cursor: pointer;\n    &:hover,\n    :focus {\n      background-color: #757575;\n    }\n    @media screen and (min-width: 767px) {\n      margin: 8px auto;\n    }\n  }\n"]))),g=x.ZP.div(a||(a=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 8px auto 8px auto;\n  .my-input {\n    display: flex;\n    flex-grow: 1;\n    /* height: 20px; */\n    font-size: 16px;\n    border-radius: 8px;\n    border: 2px solid #616161;\n    outline: #616161;\n    padding: 4px 8px;\n    margin: 0;\n  }\n  .my-input.error {\n    border: 2px solid #ff1744;\n  }\n  .label-input {\n    position: absolute;\n    top: -24%;\n    left: 28px;\n    font-size: 14px;\n    text-align: center;\n    color: #616161;\n    background-color: white;\n    pointer-events: none;\n    transition: all 0.2s ease-in-out;\n    padding: 0;\n    margin: 0;\n  }\n  .label-input.error {\n    color: #ff1744;\n  }\n  .my-password {\n    display: flex;\n    flex-grow: 1;\n    /* height: 20px; */\n    font-size: 16px;\n    border-radius: 8px;\n    border: 2px solid #616161;\n    outline: #616161;\n    padding: 4px 8px;\n    margin: 0;\n  }\n  .my-password.error {\n    border: 2px solid #ff1744;\n  }\n"]))),b=x.ZP.div(t||(t=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 40px 40px;\n  .radio-title {\n    display: grid;\n    font-size: 16px;\n    border-radius: 8px;\n    border: 2px solid #616161;\n    outline: #616161;\n    padding: 4px 8px;\n    margin: 0;\n  }\n  .radio-group {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n  }\n  .lable-picked {\n    display: grid;\n    font-size: 16px;\n    color: #616161;\n  }\n  .label-picked.error {\n    color: #ff1744;\n  }\n  .input-picked {\n    display: grid;\n    font-size: 16px;\n    color: #616161;\n  }\n  .input-picked.error {\n    border: 2px solid #ff1744;\n  }\n"]))),h=x.ZP.div(o||(o=(0,m.Z)(["\n  color: #ff1744;\n  font-size: 12px;\n"]))),y=i(184),v=["label"];function j(n){var e=n.label,i=(0,u.Z)(n,v),r=(0,s.U$)(i),a=(0,d.Z)(r,2),t=a[0],o=a[1],l=o.touched&&o.error?"error":"";return(0,y.jsxs)(g,{children:[(0,y.jsx)("label",{htmlFor:i.id||i.name,className:"label-input ".concat(l),children:e}),(0,y.jsx)("input",(0,c.Z)((0,c.Z)({className:"my-input ".concat(l)},t),i)),o.touched&&o.error?(0,y.jsx)(h,{children:o.error}):null]})}function Z(n){var e=n.name,i=n.options,r=(0,s.U$)(e),a=(0,d.Z)(r,2),t=a[0],o=a[1],l=o.touched&&o.error?"error":"";return(0,y.jsxs)(b,{children:[i.map((function(n){return(0,y.jsxs)("label",{className:"label-picked ".concat(l),children:[(0,y.jsx)("input",(0,c.Z)((0,c.Z)({type:"radio"},t),{},{value:n.value,checked:t.value===n.value,className:"input-input ".concat(l)})),n.label]},n.value)})),o.touched&&o.error?(0,y.jsx)(h,{children:o.error}):null]})}var w=i(621),k=p.Ry({name:p.Z_().min(5,"Too Short!").max(15,"Too Long!").required("This field is required"),email:p.Z_().email("Invalid email").required("This field is required"),birthday:p.hT().min(new Date(1900,0,1)).required("This field is required"),radio:p.Z_().required("Please select")}),z={name:"",email:"",birthday:"",radio:""};function N(n){var e=n.id,i=n.data,r=[{value:"Social media",label:"Social media"},{value:"Friends",label:"Friends"},{value:"Found myself",label:"Found myself"}],a=(0,w.g6)(),t=(0,d.Z)(a,1)[0];return(0,y.jsx)(f,{children:(0,y.jsx)(s.J9,{initialValues:z,validationSchema:k,onSubmit:function(n,r){var a=r.setSubmitting,o=r.resetForm,l=i.participants.concat(n),d={title:i.title,description:i.description,date:i.date,organizer:i.organizer,participants:l};t({id:e,newData:d}),a(!0),o()},children:function(n){return(0,y.jsxs)(s.l0,{className:"my-form",autoComplete:"off",children:[(0,y.jsx)("h3",{className:"my-title",children:" Event registration"}),(0,y.jsx)(j,{label:"Full name*",name:"name",type:"text"}),(0,y.jsx)(j,{label:"Email*",name:"email",type:"email"}),(0,y.jsx)(j,{label:"Birthday*",name:"birthday",type:"date"}),(0,y.jsx)(Z,{name:"radio",options:r}),(0,y.jsx)("button",{type:"submit",className:"button",children:n.isSubmitting?"loading...":"Submit"})]})}})})}var S=i(7689),T=i(19),q=i(2412);function F(){var n=(0,S.UO)().id,e=(0,w.in)(n),i=e.data,r=e.error,a=e.isLoading;return(0,y.jsxs)(l.B,{children:[a?(0,y.jsx)(T.Z,{}):(0,y.jsx)(N,{data:i,id:n}),r&&(0,y.jsx)(q.Z,{message:"The service is temporarily unavailable. Try later"})]})}}}]);
//# sourceMappingURL=278.fa48303e.chunk.js.map