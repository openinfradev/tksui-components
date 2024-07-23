import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as O,r as x}from"./TButtonGroup-BVr2eVLv.js";import{u as i}from"./UseInputState-BmGx72wN.js";import{u as C}from"./UseRefs-Bqm1-DuU.js";import{a as t}from"./TBadge-CWf5AMUf.js";import"./index-RYns6xqu.js";import"./TIconButton-DnW_sYyk.js";import"./UseRipple-CmgAXcET.js";import"./uniqueId-z-hUi63g.js";import"./toString-C5d8lDEI.js";import"./isObjectLike-CtHjPEDi.js";import"./TIcon-CqqqpP48.js";import"./index-D16Yfzz8.js";import"./TDropHolder-B1dNhpMc.js";import"./TTooltip-WR4Hjy6I.js";import"./THighlightText-DsBl_yz7.js";import"./TTabItem-CmoRMSRb.js";import"./TCardContent-DmFM6Zcc.js";import"./TInputValidationHint-LMvcBoAk.js";import"./index-DNUR7M9R.js";import"./TChip-cOreyuC7.js";/* empty css                      */import"./UseValidator-BTb8MpPh.js";import"./TTextField-FeCqQVtg.js";import"./TSwitch-CZ_ed9Cf.js";const ne={title:"Input/TNumberField",component:t},z=r=>{const p=i(""),m=i(""),n=i(""),a=i(""),u=i(""),c=i(""),w=i(""),R={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:R,children:[e.jsx(t,{...r,label:"값 제한 없음",...p}),e.jsx(t,{...r,label:"0-10, step 1",...m,min:0,max:10,step:1}),e.jsx(t,{...r,label:"3-99, step 3",...n,min:3,max:99,step:3}),e.jsx(t,{...r,label:"-10-10, step 5",...a,min:-10,max:10,step:5}),e.jsx(t,{...r,label:"읽기 전용",value:"3",disabled:!0}),e.jsx(t,{...r,label:"커스텀 너비",...u,width:"200px"}),e.jsx(t,{...r,label:"필수 값",...c,required:!0}),e.jsx(t,{...r,label:"가이드 메시지",...w,width:"400px",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."})]})})})},s={render:z,args:{type:"outline"}},o={render:z,args:{type:"underline"}},N=r=>{const p=i(""),m=i(""),[n,a]=C(2),u={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"},c=()=>{n.current.validate(),a.current.validate()};return e.jsxs(e.Fragment,{children:[e.jsx(O,{main:!0,onClick:c,children:"검사"}),e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:u,children:[e.jsx(t,{...r,rules:[x.required()],...p,ref:n,required:!0,label:"필수 값"}),e.jsx(t,{...r,rules:[x.required()],...m,ref:a,required:!0,type:"underline",label:"필수 값",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."})]})})]})},l={render:N,args:{lazy:!1,required:!0}},d={render:N,args:{lazy:!0,required:!0}};var y,b,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'outline'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,g,h;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'underline'
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var F,T,q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false,
    required: true
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var v,S,V;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true,
    required: true
  }
}`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const ae=["Outline","Underline","Validation","LazyValidation"];export{d as LazyValidation,s as Outline,o as Underline,l as Validation,ae as __namedExportsOrder,ne as default};
