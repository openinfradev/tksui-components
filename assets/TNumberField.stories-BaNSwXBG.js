import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as O,r as x}from"./TButtonGroup-qTX4U8HC.js";import{u as i}from"./UseInputState-C4ClfJCt.js";import{u as C}from"./UseRefs-xnoYwlYs.js";import{a as t}from"./TBadge-CoF-KBLQ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TIconButton-zcDaY7Vs.js";import"./UseRipple-mfUvMdkz.js";import"./uniqueId-BdmaqBQH.js";import"./toString-Biug5Hwg.js";import"./TIcon-Cxgxukqq.js";import"./ThemeToken.module-BX06fUfM.js";import"./index-Dk74W0Oi.js";import"./index-B8XB3FuZ.js";import"./TDropHolder-B-Qcii7r.js";import"./TPage-DBxYc1cp.js";import"./TTooltip-C1z9xQQS.js";import"./THighlightText-BwpA2dOG.js";import"./TTabItem-COTcJKZI.js";import"./TCardContent-BOqVmtMU.js";import"./TInputValidationHint-DVejngM-.js";import"./TChip-dAVbTOtw.js";/* empty css                      */import"./UseValidator-o4VEqFQR.js";import"./TTextField-6R9FQZxS.js";import"./TSwitch-Bm5SUfmf.js";const oe={title:"Input/TNumberField",component:t},z=r=>{const d=i(""),m=i(""),n=i(""),a=i(""),u=i(""),c=i(""),w=i(""),R={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:R,children:[e.jsx(t,{...r,label:"값 제한 없음",...d}),e.jsx(t,{...r,label:"0-10, step 1",...m,min:0,max:10,step:1}),e.jsx(t,{...r,label:"3-99, step 3",...n,min:3,max:99,step:3}),e.jsx(t,{...r,label:"-10-10, step 5",...a,min:-10,max:10,step:5}),e.jsx(t,{...r,label:"읽기 전용",value:"3",disabled:!0}),e.jsx(t,{...r,label:"커스텀 너비",...u,width:"200px"}),e.jsx(t,{...r,label:"필수 값",...c,required:!0}),e.jsx(t,{...r,label:"가이드 메시지",...w,width:"400px",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."})]})})})},o={render:z,args:{type:"outline"}},s={render:z,args:{type:"underline"}},N=r=>{const d=i(""),m=i(""),[n,a]=C(2),u={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"},c=()=>{n.current.validate(),a.current.validate()};return e.jsxs(e.Fragment,{children:[e.jsx(O,{main:!0,onClick:c,children:"검사"}),e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:u,children:[e.jsx(t,{...r,rules:[x.required()],...d,ref:n,required:!0,label:"필수 값"}),e.jsx(t,{...r,rules:[x.required()],...m,ref:a,required:!0,type:"underline",label:"필수 값",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."})]})})]})},l={render:N,args:{lazy:!1,required:!0}},p={render:N,args:{lazy:!0,required:!0}};var y,b,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'outline'
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,g,h;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'underline'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var F,T,q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false,
    required: true
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var v,S,V;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true,
    required: true
  }
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const se=["Outline","Underline","Validation","LazyValidation"];export{p as LazyValidation,o as Outline,s as Underline,l as Validation,se as __namedExportsOrder,oe as default};
