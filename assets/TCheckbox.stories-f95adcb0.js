import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as z}from"./index-76fb7be0.js";import{u as r}from"./UseInputState-38eb87e9.js";import{T as n}from"./TCheckbox-fdd1088e.js";import{T as I}from"./TButton-7a565153.js";import{u as R,T as m}from"./UseRefs-3912494c.js";import"./_commonjsHelpers-de833af9.js";import"./TIcon-a8804371.js";import"./UseValidator-1d683c89.js";import"./UseRipple-bad4b27c.js";const Y={title:"Input/TCheckbox",component:n},D=a=>{const t=r(!1),o=r("N"),s=r(!0),l=r(!1),c=r(!1),[T,V]=z.useState(!0);function S(y){c.onChange(y),V(!1)}return e.jsxs(e.Fragment,{children:["Boolean Value(value: ",t.value.toString(),")",e.jsx(n,{...a,onChange:t.onChange,value:t.value,children:"사과"}),"Custom Value(value: ",o.value.toString(),")",e.jsx(n,{...a,onChange:o.onChange,value:o.value,positiveValue:"Y",negativeValue:"N",children:"파인애플"}),"Disabled checked (value: ",s.value.toString(),")",e.jsx(n,{...a,disabled:!0,onChange:s.onChange,value:s.value,children:"바나나"}),"Disabled unchecked (value: ",l.value.toString(),")",e.jsx(n,{...a,disabled:!0,onChange:l.onChange,value:l.value,children:"귤"}),"Indeterminate (value: ",c.value.toString(),")",e.jsx(n,{...a,onChange:S,value:c.value,indeterminate:T,children:"수박"})]})},u={render:D},j=a=>{const t=r(!1),o=r(!1),[s,l]=R(2);function c(){s.current.validate(),l.current.validate()}return e.jsxs(e.Fragment,{children:[e.jsx(n,{...a,ref:s,onChange:t.onChange,value:t.value,rules:[m.equal(!0,"약관에 동의하지 않으시면 서비스 이용이 불가합니다")],successMessage:"약관에 동의하셨습니다",children:"약관을 읽고, 동의합니다. (성공, 실패 메시지 표시)"}),e.jsx("br",{}),e.jsx(n,{...a,ref:l,onChange:o.onChange,value:o.value,rules:[m.equal(!0,"약관에 동의하지 않으시면 서비스 이용이 불가합니다")],children:"약관을 읽고, 동의합니다. (실패 메시지 표시)"}),e.jsx("br",{}),e.jsx(I,{main:!0,onClick:c,children:"회원 가입"})]})},i={render:j,args:{lazy:!1}},d={render:j,args:{lazy:!0}};var h,p,x;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const w=["Default","Validation","LazyValidation"];export{u as Default,d as LazyValidation,i as Validation,w as __namedExportsOrder,Y as default};
//# sourceMappingURL=TCheckbox.stories-f95adcb0.js.map
