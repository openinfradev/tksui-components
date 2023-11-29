import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as N}from"./index-76fb7be0.js";import{u as E,r as n}from"./TValidatorRule-86bd80ca.js";import{u as l}from"./UseInputState-38eb87e9.js";import{T as F}from"./TButton-aead8822.js";import{T as t}from"./TTextArea-0998abd1.js";import"./_commonjsHelpers-de833af9.js";import"./UseRipple-565834b6.js";import"./TIcon-06114f05.js";import"./UseValidator-1d683c89.js";const X={title:"Input/TTextArea",component:t},z=r=>{const[a,s]=N.useState(""),c={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px"},children:"Normal, 일반 웹페이지"}),e.jsxs("div",{style:c,children:[e.jsx(t,{...r,value:a,onChange:s,label:"무옵션"}),e.jsx(t,{...r,value:a,onChange:s,label:"Placeholder",placeholder:"설명을 입력해주세요"}),e.jsx(t,{...r,value:a,onChange:s,label:"Counter",counter:200}),e.jsx(t,{...r,value:a,onChange:s,label:"Read-only",disabled:!0}),e.jsx(t,{...r,value:a,onChange:s,label:"너비-400",width:"400px"}),e.jsx(t,{...r,value:a,onChange:s,label:"너비-300",width:"300px"}),e.jsx(t,{...r,value:a,onChange:s,label:"너비-200",width:"200px"})]})]})})})},o={render:z,args:{type:"outline",rows:4}},i={render:z,args:{type:"underline",rows:4}},B=r=>{const a=l(""),s=l(""),c=l(""),M=l(""),O=l(""),U=l(""),[p,x,m,g,h,f]=E(6),D={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"},L=()=>{p.current.validate(),x.current.validate(),m.current.validate(),g.current.validate(),h.current.validate(),f.current.validate()};return e.jsxs(e.Fragment,{children:[e.jsx(F,{main:!0,onClick:L,children:"검사"}),e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:D,children:[e.jsx(t,{...r,label:"Outline Default",rules:[n.required(),n.lengthBetween(3,12)],...a,ref:p,placeholder:"값을 입력해 주세요",counter:12}),e.jsx(t,{...r,label:"Outline Custom Long Message",rules:[n.required("에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다."),n.lengthBetween(3,12)],...s,ref:x,counter:12}),e.jsx(t,{...r,label:"Outline Success Message",rules:[n.required(),n.lengthBetween(3,12)],counter:12,...c,ref:m,successMessage:"사용할 수 있는 아이디입니다"}),e.jsx(t,{...r,label:"Underline Default",rules:[n.required(),n.lengthBetween(3,12)],counter:12,...M,ref:g,type:"underline"}),e.jsx(t,{...r,label:"Underline Custom Long Message",rules:[n.required("에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다."),n.lengthBetween(3,12)],counter:12,...O,ref:h,type:"underline"}),e.jsx(t,{...r,label:"Underline Success Message",rules:[n.required(),n.lengthBetween(3,12)],counter:12,successMessage:"사용할 수 있는 아이디입니다",...U,ref:f,type:"underline"})]})})]})},d={render:B,args:{lazy:!1,required:!0}},u={render:B,args:{lazy:!0,required:!0}};var y,j,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'outline',
    rows: 4
  }
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,T,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'underline',
    rows: 4
  }
}`,...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var v,C,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false,
    required: true
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var q,R,V;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true,
    required: true
  }
}`,...(V=(R=u.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const Y=["Outline","Underline","Validation","LazyValidation"];export{u as LazyValidation,o as Outline,i as Underline,d as Validation,Y as __namedExportsOrder,X as default};
