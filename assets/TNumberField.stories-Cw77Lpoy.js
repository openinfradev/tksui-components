import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as n}from"./UseInputState-7VrOZXML.js";import{u as C}from"./UseRefs-DVqE44oS.js";import{a as E,r as y}from"./TButtonGroup-DkzWU4CD.js";import{a as t}from"./TBadge-B8yc9zRE.js";import"./index-BqztxKQk.js";import"./TTabItem-CKcer2mH.js";import"./TIcon-CYhWV6Ep.js";import"./index-DmlQtXDA.js";import"./index-C6xMosk4.js";import"./TDropHolder-B7z40qzo.js";import"./THighlightText-pTj3K_4-.js";import"./TInputValidationHint-C1mvkrXU.js";import"./TChip-DgOBpbU4.js";import"./UseValidator-DgLpkHEc.js";import"./TTextField-C6MSjj1d.js";import"./TSwitch-YoEgX14L.js";const re={title:"Input/TNumberField",component:t},O=r=>{const a=n(""),i=n(""),s=n(""),o=n(""),c=n(""),x=n(""),D=n(""),U={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:U,children:[e.jsx(t,{...r,label:"값 제한 없음",...a}),e.jsx(t,{...r,label:"0-10, step 1",...i,min:0,max:10,step:1}),e.jsx(t,{...r,label:"3-99, step 3",...s,min:3,max:99,step:3}),e.jsx(t,{...r,label:"-10-10, step 5",...o,min:-10,max:10,step:5}),e.jsx(t,{...r,label:"읽기 전용",value:"3",disabled:!0}),e.jsx(t,{...r,label:"커스텀 너비",...c,width:"200px"}),e.jsx(t,{...r,label:"필수 값",...x,required:!0}),e.jsx(t,{...r,label:"가이드 메시지",...D,width:"400px",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."})]})})})},l={render:O,args:{type:"outline"}},d={render:O,args:{type:"underline"}},R=r=>{const a=n(""),i=n(""),[s,o]=C(2),c={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"},x=()=>{s.current.validate(),o.current.validate()};return e.jsxs(e.Fragment,{children:[e.jsx(E,{main:!0,onClick:x,children:"검사"}),e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:c,children:[e.jsx(t,{...r,rules:[y.required()],...a,ref:s,required:!0,label:"필수 값"}),e.jsx(t,{...r,rules:[y.required()],...i,ref:o,required:!0,type:"underline",label:"필수 값",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."})]})})]})},p={render:R,args:{lazy:!1,required:!0}},u={render:R,args:{lazy:!0,required:!0}},I=r=>{const a=n(""),i=n(""),s={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:s,children:[e.jsx(t,{...r,label:"No Buttons - Outline",...a,type:"outline",noButtons:!0,min:0,max:100,step:1}),e.jsx(t,{...r,label:"No Buttons - Underline",...i,type:"underline",noButtons:!0,min:0,max:100,step:1})]})})})},m={render:I,args:{noButtons:!0}};var b,g,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'outline'
  }
}`,...(j=(g=l.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var f,h,F;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'underline'
  }
}`,...(F=(h=d.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var T,B,N;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false,
    required: true
  }
}`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var v,q,S;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true,
    required: true
  }
}`,...(S=(q=u.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var V,z,w;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: NoButtonsTemplate,
  args: {
    noButtons: true
  }
}`,...(w=(z=m.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const te=["Outline","Underline","Validation","LazyValidation","NoButtons"];export{u as LazyValidation,m as NoButtons,l as Outline,d as Underline,p as Validation,te as __namedExportsOrder,re as default};
