import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as D}from"./index-4g5l5LRQ.js";import{u as s}from"./UseInputState-c2ZRlSca.js";import{T as n}from"./TCheckbox-pkAXpSt3.js";import{T as $}from"./TButton-gGUl2Bcb.js";import{r as v}from"./TValidatorRule-2e1-PYPO.js";import{u as N}from"./UseRefs-Fkg0BOi5.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./TIcon-4O00LWfy.js";import"./UseValidator-M-ibdt69.js";import"./ThemeToken.module-mxnC7jdb.js";import"./UseRipple-aO9_-GhK.js";import"./uniqueId-M9xs3r9t.js";import"./toString-wsudKogf.js";const J={title:"Input/TCheckbox",component:n},x={display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",gap:"8px"},R=({children:a})=>e.jsx("div",{style:{...x,gap:"24px"},children:a}),c=({label:a,children:r})=>e.jsxs("div",{style:x,children:[e.jsx("p",{style:{fontSize:"12px"},children:a}),e.jsx("div",{style:{...x,flexDirection:"row",gap:"16px"},children:r})]}),B=a=>{const r=s(!1),t=s("N"),l=s(!0),o=s(!1),i=s(!1);s(!0);const[m,z]=D.useState(!0);function p(I){i.onChange(I),z(!1)}return e.jsxs(R,{children:[e.jsxs(c,{label:`Boolean Value(value: ${r.value.toString()})`,children:[e.jsx(n,{...a,onChange:r.onChange,value:r.value,children:"사과"}),e.jsx(n,{...a,onChange:r.onChange,value:r.value,children:"Apple"})]}),e.jsxs(c,{label:`Custom Value(value: ${t.value.toString()})`,children:[e.jsx(n,{...a,onChange:t.onChange,value:t.value,positiveValue:"Y",negativeValue:"N",children:"파인애플"}),e.jsx(n,{...a,onChange:t.onChange,value:t.value,positiveValue:"Y",negativeValue:"N",children:"Pineapple"})]}),e.jsxs(c,{label:`Disabled checked (value: ${l.value.toString()})`,children:[e.jsx(n,{...a,disabled:!0,onChange:l.onChange,value:l.value,children:"바나나"}),e.jsx(n,{...a,disabled:!0,onChange:l.onChange,value:l.value,children:"Banana"})]}),e.jsxs(c,{label:`Disabled unchecked (value: ${o.value.toString()})`,children:[e.jsx(n,{...a,disabled:!0,onChange:o.onChange,value:o.value,children:"오렌지"}),e.jsx(n,{...a,disabled:!0,onChange:o.onChange,value:o.value,children:"Orange"})]}),e.jsxs(c,{label:`Indeterminate(${m}) (value: ${i.value.toString()}) : `,children:[e.jsx(n,{...a,onChange:p,value:i.value,indeterminate:m,children:"수박"}),e.jsx(n,{...a,onChange:p,value:i.value,indeterminate:m,children:"WaterMelon"})]})]})},u={render:B},T=a=>{const r=s(!1),t=s(!1),[l,o]=N(2);function i(){l.current.validate(),o.current.validate()}return e.jsxs(e.Fragment,{children:[e.jsx(n,{...a,ref:l,onChange:r.onChange,value:r.value,rules:[v.equal(!0,"약관에 동의하지 않으시면 서비스 이용이 불가합니다")],successMessage:"약관에 동의하셨습니다",children:"약관을 읽고, 동의합니다. (성공, 실패 메시지 표시)"}),e.jsx("br",{}),e.jsx(n,{...a,ref:o,onChange:t.onChange,value:t.value,rules:[v.equal(!0,"약관에 동의하지 않으시면 서비스 이용이 불가합니다")],children:"약관을 읽고, 동의합니다. (실패 메시지 표시)"}),e.jsx("br",{}),e.jsx($,{main:!0,onClick:i,children:"회원 가입"})]})},d={render:T,args:{lazy:!1}},h={render:T,args:{lazy:!0}};var g,C,f;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: NormalTemplate
}`,...(f=(C=u.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,b,k;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false
  }
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,V,S;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true
  }
}`,...(S=(V=h.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const K=["Default","Validation","LazyValidation"];export{u as Default,h as LazyValidation,d as Validation,K as __namedExportsOrder,J as default};
