import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{u as s}from"./UseInputState-c2ZRlSca.js";import{T as o}from"./TRadioGroup-7U1a3wZX.js";import{u as C}from"./UseRefs-Fkg0BOi5.js";import{T as G}from"./TButton-Rb7c_CsH.js";import{r as m}from"./TValidatorRule-2e1-PYPO.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./UseValidator-M-ibdt69.js";import"./TIcon-TpoxWvqq.js";import"./ThemeToken.module-mxnC7jdb.js";import"./UseRipple-bKa6TkVL.js";const F={title:"Input/TRadioGroup",component:o},l=[{text:"Apple",koreanText:"사과",value:"apple",value2:"a"},{text:"Banana",koreanText:"바나나",value:"banana",value2:"b"},{text:"Mango",koreanText:"망고",value:"mango",value2:"m"},{text:"Peach",koreanText:"복숭아",value:"peach",value2:"p"},{text:"Water melon",koreanText:"수박",value:"watermelon",value2:"w"},{text:"Melon",koreanText:"멜론",value:"melon",value2:"m2"},{text:"Durian",koreanText:"두리안",value:"durian",value2:"d1",disabled:!0},{text:"Disabled",koreanText:"선택 불가 과일",value:"disabled",value2:"d2",disabled:!0}],V=()=>{const a=s("a"),r=s("banana"),t=s("disabled");return e.jsxs(e.Fragment,{children:["Value Key 예제: ",a.value," ",e.jsx("br",{}),e.jsx("br",{}),e.jsx(o,{value:a.value,onChange:a.onChange,items:l,valueKey:"value2"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"Text Key 예제: ",r.value," ",e.jsx("br",{}),e.jsx("br",{}),e.jsx(o,{value:r.value,onChange:r.onChange,items:l,textKey:"koreanText"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"Label Template: ",t.value," ",e.jsx("br",{}),e.jsx("br",{}),e.jsx(o,{value:t.value,onChange:t.onChange,items:l,labelTemplate:n=>`${n.koreanText} (${n.text})`}),e.jsx("br",{})]})},u={render:V},k=a=>{const r=s(""),t=s(""),[n,d]=C(2);function y(){n.current.validate(),d.current.validate()}return e.jsxs(e.Fragment,{children:[e.jsx(G,{main:!0,onClick:y,children:"검사"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"실패메시지 표시",e.jsx("br",{}),e.jsx("br",{}),e.jsx(o,{...a,ref:n,value:r.value,onChange:r.onChange,items:l,valueKey:"value2",rules:[m.requiredArr("가장 좋아하는 과일을 선택해 주세요")]}),e.jsx("br",{}),e.jsx("br",{}),"성공, 실패메시지 표시",e.jsx("br",{}),e.jsx("br",{}),e.jsx(o,{...a,ref:d,value:t.value,onChange:t.onChange,items:l,valueKey:"value2",rules:[m.requiredArr("가장 좋아하는 과일을 선택해 주세요")],successMessage:"드디어 과일을 선택하셨군요!"})]})},i={render:k,args:{lazy:!1}},x={render:k,args:{lazy:!0}};var p,c,v;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: NormalTemplate
}`,...(v=(c=u.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var b,j,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false
  }
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var g,f,h;x.parameters={...x.parameters,docs:{...(g=x.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true
  }
}`,...(h=(f=x.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const I=["Default","Validation","LazyValidation"];export{u as Default,x as LazyValidation,i as Validation,I as __namedExportsOrder,F as default};
