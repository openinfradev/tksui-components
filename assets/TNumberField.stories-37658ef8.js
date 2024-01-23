import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as x}from"./TValidatorRule-b0087869.js";import{u as n}from"./UseInputState-38eb87e9.js";import{T as O}from"./TButton-d81d8fd9.js";import{u as C}from"./UseRefs-686b71bd.js";import{T as t}from"./TNumberField-e4b9ba09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./UseRipple-565834b6.js";import"./TIcon-09805f2a.js";import"./UseValidator-1d683c89.js";const J={title:"Input/TNumberField",component:t},z=r=>{const p=n(""),m=n(""),a=n(""),i=n(""),u=n(""),c=n(""),w=n(""),R={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:R,children:[e.jsx(t,{...r,label:"값 제한 없음",...p}),e.jsx(t,{...r,label:"0-10, step 1",...m,min:0,max:10,step:1}),e.jsx(t,{...r,label:"3-99, step 3",...a,min:3,max:99,step:3}),e.jsx(t,{...r,label:"-10-10, step 5",...i,min:-10,max:10,step:5}),e.jsx(t,{...r,label:"읽기 전용",value:"3",disabled:!0}),e.jsx(t,{...r,label:"커스텀 너비",...u,width:"200px"}),e.jsx(t,{...r,label:"필수 값",...c,required:!0}),e.jsx(t,{...r,label:"가이드 메시지",...w,width:"400px",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."})]})})})},s={render:z,args:{type:"outline"}},l={render:z,args:{type:"underline"}},N=r=>{const p=n(""),m=n(""),[a,i]=C(2),u={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"},c=()=>{a.current.validate(),i.current.validate()};return e.jsxs(e.Fragment,{children:[e.jsx(O,{main:!0,onClick:c,children:"검사"}),e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:u,children:[e.jsx(t,{...r,rules:[x.required()],...p,ref:a,required:!0,label:"필수 값"}),e.jsx(t,{...r,rules:[x.required()],...m,ref:i,required:!0,type:"underline",label:"필수 값",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."})]})})]})},o={render:N,args:{lazy:!1,required:!0}},d={render:N,args:{lazy:!0,required:!0}};var y,b,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'outline'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,g,h;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'underline'
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var F,T,q;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false,
    required: true
  }
}`,...(q=(T=o.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var v,S,V;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true,
    required: true
  }
}`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const K=["Outline","Underline","Validation","LazyValidation"];export{d as LazyValidation,s as Outline,l as Underline,o as Validation,K as __namedExportsOrder,J as default};
