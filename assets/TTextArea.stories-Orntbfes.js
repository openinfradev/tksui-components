import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as N}from"./index-CBqU2yxZ.js";import{u as t,a as E,r as n}from"./TButtonGroup-CqYQbUbp.js";import{u as o}from"./UseInputState-BMLhFmM_.js";import{u as F}from"./UseRefs-B71Mt8Xu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TIconButton-C90MRYlA.js";import"./UseRipple-B0f24SXl.js";import"./uniqueId-BdmaqBQH.js";import"./toString-Biug5Hwg.js";import"./TIcon-DISAoatz.js";import"./ThemeToken.module-BX06fUfM.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./TBadge-C5SG4UU5.js";import"./UseValidator-XS2alT9g.js";/* empty css                      */import"./TDropHolder-oMQ0ExO9.js";import"./TPage-Ctc42GQy.js";import"./TTooltip-hEd-iOmd.js";import"./THighlightText-ySiKuYph.js";import"./TTabItem-BNADMDmB.js";import"./TCardContent-G1oNrwQi.js";import"./TInputValidationHint-B6k-5azr.js";import"./TChip-BXKIvb6C.js";import"./TTextField-D-62YPvP.js";import"./TSwitch-De2qQJKg.js";const me={title:"Input/TTextArea",component:t},z=r=>{const[a,s]=N.useState(""),u={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px"},children:"Normal, 일반 웹페이지"}),e.jsxs("div",{style:u,children:[e.jsx(t,{...r,value:a,onChange:s,label:"무옵션"}),e.jsx(t,{...r,value:a,onChange:s,label:"Placeholder",placeholder:"설명을 입력해주세요"}),e.jsx(t,{...r,value:a,onChange:s,label:"Counter",counter:200}),e.jsx(t,{...r,value:a,onChange:s,label:"Read-only",disabled:!0}),e.jsx(t,{...r,value:a,onChange:s,label:"너비-400",width:"400px"}),e.jsx(t,{...r,value:a,onChange:s,label:"너비-300",width:"300px"}),e.jsx(t,{...r,value:a,onChange:s,label:"너비-200",width:"200px"})]})]})})})},l={render:z,args:{type:"outline",rows:4}},i={render:z,args:{type:"underline",rows:4}},B=r=>{const a=o(""),s=o(""),u=o(""),M=o(""),O=o(""),U=o(""),[c,m,x,g,h,f]=F(6),D={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"},L=()=>{c.current.validate(),m.current.validate(),x.current.validate(),g.current.validate(),h.current.validate(),f.current.validate()};return e.jsxs(e.Fragment,{children:[e.jsx(E,{main:!0,onClick:L,children:"검사"}),e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:D,children:[e.jsx(t,{...r,label:"Outline Default",rules:[n.required(),n.lengthBetween(3,12)],...a,ref:c,placeholder:"값을 입력해 주세요",counter:12}),e.jsx(t,{...r,label:"Outline Custom Long Message",rules:[n.required("에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다."),n.lengthBetween(3,12)],...s,ref:m,counter:12}),e.jsx(t,{...r,label:"Outline Success Message",rules:[n.required(),n.lengthBetween(3,12)],counter:12,...u,ref:x,successMessage:"사용할 수 있는 아이디입니다"}),e.jsx(t,{...r,label:"Underline Default",rules:[n.required(),n.lengthBetween(3,12)],counter:12,...M,ref:g,type:"underline"}),e.jsx(t,{...r,label:"Underline Custom Long Message",rules:[n.required("에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다."),n.lengthBetween(3,12)],counter:12,...O,ref:h,type:"underline"}),e.jsx(t,{...r,label:"Underline Success Message",rules:[n.required(),n.lengthBetween(3,12)],counter:12,successMessage:"사용할 수 있는 아이디입니다",...U,ref:f,type:"underline"})]})})]})},d={render:B,args:{lazy:!1,required:!0}},p={render:B,args:{lazy:!0,required:!0}};var y,j,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'outline',
    rows: 4
  }
}`,...(b=(j=l.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,A,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'underline',
    rows: 4
  }
}`,...(v=(A=i.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var T,C,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false,
    required: true
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var q,R,V;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true,
    required: true
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const xe=["Outline","Underline","Validation","LazyValidation"];export{p as LazyValidation,l as Outline,i as Underline,d as Validation,xe as __namedExportsOrder,me as default};
