import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as z}from"./index-76fb7be0.js";import{T as k}from"./TModal-0e069f15.js";import{T as c}from"./TButton-d81d8fd9.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-9d475cdf.js";import"./TIcon-09805f2a.js";import"./UseRipple-565834b6.js";const w={title:"Screen/TModal",component:k,args:{containerId:"storybook-root"}},r=C=>{const[E,m]=z.useState(!1),O=e.jsxs(e.Fragment,{children:[e.jsx(c,{size:"large",onClick:()=>m(!1),children:"취소"}),e.jsx(c,{size:"large",main:!0,children:"저장"})]});return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>m(!0),children:"모달 열기"}),e.jsx(k,{...C,title:"클러스터 생성",isOpen:E,onRequestClose:()=>m(!1),footer:O,children:"클러스터 생성 모달입니다."})]})},a={render:r,args:{small:!0}},s={render:r,args:{medium:!0}},t={render:r,args:{large:!0}},o={render:r,args:{xlarge:!0}},n={render:r,args:{xxlarge:!0}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    small: true
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,u,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  args: {
    medium: true
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,T,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    large: true
  }
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var S,j,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    xlarge: true
  }
}`,...(h=(j=o.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var L,X,M;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    xxlarge: true
  }
}`,...(M=(X=n.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};const A=["Small","Medium","Large","XLarge","XXLarge"];export{t as Large,s as Medium,a as Small,o as XLarge,n as XXLarge,A as __namedExportsOrder,w as default};
