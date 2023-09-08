import{j as e}from"./jsx-runtime-ffb262ed.js";import{u as w,T as x}from"./UseRefs-3912494c.js";import{u as a}from"./UseInputState-38eb87e9.js";import{T as O}from"./TButton-52e217e1.js";import{T as t}from"./TNumberField-74d5b180.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./UseRipple-bad4b27c.js";import"./TIcon-88002bc5.js";import"./UseValidator-1d683c89.js";const G={title:"Input/TNumberField",component:t},z=r=>{const p=a(""),u=a(""),n=a(""),s=a(""),m=a(""),c=a(""),R={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:R,children:[e.jsx(t,{...r,label:"값 제한 없음",...p}),e.jsx(t,{...r,label:"0-10, step 1",...u,min:0,max:10,step:1}),e.jsx(t,{...r,label:"0-10, step 2",...n,min:0,max:10,step:2}),e.jsx(t,{...r,label:"-10-10, step 5",...s,min:-10,max:10,step:5}),e.jsx(t,{...r,label:"읽기 전용",value:"3",disabled:!0}),e.jsx(t,{...r,label:"커스텀 너비",...m,width:"200px"}),e.jsx(t,{...r,label:"필수 값",...c,required:!0})]})})})},i={render:z,args:{type:"outline"}},l={render:z,args:{type:"underline"}},N=r=>{const p=a(""),u=a(""),[n,s]=w(2),m={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"},c=()=>{n.current.validate(),s.current.validate()};return e.jsxs(e.Fragment,{children:[e.jsx(O,{main:!0,onClick:c,children:"검사"}),e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:m,children:[e.jsx(t,{...r,rules:[x.required()],...p,ref:n,required:!0,label:"필수 값"}),e.jsx(t,{...r,rules:[x.required()],...u,ref:s,required:!0,type:"underline",label:"필수 값"})]})})]})},o={render:N,args:{lazy:!1,required:!0}},d={render:N,args:{lazy:!0,required:!0}};var y,b,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'outline'
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,j,T;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'underline'
  }
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var F,h,q;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false,
    required: true
  }
}`,...(q=(h=o.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var v,V,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true,
    required: true
  }
}`,...(S=(V=d.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const H=["Outline","Underline","Validation","LazyValidation"];export{d as LazyValidation,i as Outline,l as Underline,o as Validation,H as __namedExportsOrder,G as default};
//# sourceMappingURL=TNumberField.stories-f56ab311.js.map
