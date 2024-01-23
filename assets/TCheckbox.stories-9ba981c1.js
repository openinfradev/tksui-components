import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as z}from"./index-76fb7be0.js";import{u as n}from"./UseInputState-38eb87e9.js";import{T as r}from"./TCheckbox-cc235536.js";import{T as I}from"./TButton-d81d8fd9.js";import{r as m}from"./TValidatorRule-b0087869.js";import{u as D}from"./UseRefs-686b71bd.js";import"./_commonjsHelpers-de833af9.js";import"./TIcon-09805f2a.js";import"./UseValidator-1d683c89.js";import"./UseRipple-565834b6.js";const w={title:"Input/TCheckbox",component:r},N=a=>{const t=n(!1),o=n("N"),s=n(!0),l=n(!1),c=n(!1),[V,S]=z.useState(!0);function T(y){c.onChange(y),S(!1)}return e.jsxs(e.Fragment,{children:["Boolean Value(value: ",t.value.toString(),")",e.jsx(r,{...a,onChange:t.onChange,value:t.value,children:"사과"}),"Custom Value(value: ",o.value.toString(),")",e.jsx(r,{...a,onChange:o.onChange,value:o.value,positiveValue:"Y",negativeValue:"N",children:"파인애플"}),"Disabled checked (value: ",s.value.toString(),")",e.jsx(r,{...a,disabled:!0,onChange:s.onChange,value:s.value,children:"바나나"}),"Disabled unchecked (value: ",l.value.toString(),")",e.jsx(r,{...a,disabled:!0,onChange:l.onChange,value:l.value,children:"귤"}),"Indeterminate (value: ",c.value.toString(),")",e.jsx(r,{...a,onChange:T,value:c.value,indeterminate:V,children:"수박"})]})},u={render:N},j=a=>{const t=n(!1),o=n(!1),[s,l]=D(2);function c(){s.current.validate(),l.current.validate()}return e.jsxs(e.Fragment,{children:[e.jsx(r,{...a,ref:s,onChange:t.onChange,value:t.value,rules:[m.equal(!0,"약관에 동의하지 않으시면 서비스 이용이 불가합니다")],successMessage:"약관에 동의하셨습니다",children:"약관을 읽고, 동의합니다. (성공, 실패 메시지 표시)"}),e.jsx("br",{}),e.jsx(r,{...a,ref:l,onChange:o.onChange,value:o.value,rules:[m.equal(!0,"약관에 동의하지 않으시면 서비스 이용이 불가합니다")],children:"약관을 읽고, 동의합니다. (실패 메시지 표시)"}),e.jsx("br",{}),e.jsx(I,{main:!0,onClick:c,children:"회원 가입"})]})},i={render:j,args:{lazy:!1}},d={render:j,args:{lazy:!0}};var h,p,x;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: NormalTemplate
}`,...(x=(p=u.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var v,g,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,b,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true
  }
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const G=["Default","Validation","LazyValidation"];export{u as Default,d as LazyValidation,i as Validation,G as __namedExportsOrder,w as default};
