import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as x}from"./index-CBqU2yxZ.js";import{T as s}from"./TPagination-Bki_S1qz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TIcon-DX3nHo9a.js";import"./TButton-CY0yEcNN.js";import"./UseRipple-B0f24SXl.js";import"./uniqueId-BdmaqBQH.js";import"./toString-Biug5Hwg.js";import"./TNumberField-BuLgJdu3.js";import"./UseValidator-XS2alT9g.js";import"./TValidatorRule-BwpR5Vl5.js";const D={title:"DataContainer/TPagination",component:s},i=({label:t,children:r})=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx("p",{style:{fontSize:"14px"},children:t}),e.jsx("div",{style:{display:"flex",alignItems:"center",border:"1px solid lightgray",padding:"32px 16px",width:"100%"},children:r})]}),d=t=>{const[r,n]=x.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%"},children:[e.jsx(i,{label:"Normal",children:e.jsx(s,{...t,pageNumber:r,onChangePageNumber:a=>{n(a)}})}),e.jsx(i,{label:"Jumper",children:e.jsx(s,{...t,pageNumber:r,onChangePageNumber:a=>{n(a)}})}),e.jsx(i,{label:"Custom Jumper Text",children:e.jsx(s,{...t,pageNumber:r,jumperText:"Go",onChangePageNumber:a=>{n(a)}})})]})},o={render:d,args:{totalPages:23}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    totalPages: 23
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,D as default};