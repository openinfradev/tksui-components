import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as z}from"./index-4g5l5LRQ.js";import{T as k}from"./TModal-DssAiBXQ.js";import{T as c}from"./TButton-wzgHEj5b.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index-VFMbf6KQ.js";import"./TIcon-Vi1lColy.js";import"./ThemeToken.module-mxnC7jdb.js";import"./UseRipple-bKa6TkVL.js";const A={title:"Screen/TModal",component:k,args:{containerId:"storybook-root"}},e=C=>{const[E,m]=z.useState(!1),O=r.jsxs(r.Fragment,{children:[r.jsx(c,{size:"large",onClick:()=>m(!1),children:"취소"}),r.jsx(c,{size:"large",main:!0,children:"저장"})]});return r.jsxs(r.Fragment,{children:[r.jsx(c,{onClick:()=>m(!0),children:"모달 열기"}),r.jsx(k,{...C,title:"클러스터 생성",isOpen:E,onRequestClose:()=>m(!1),footer:O,children:"클러스터 생성 모달입니다."})]})},a={render:e,args:{small:!0}},s={render:e,args:{medium:!0}},t={render:e,args:{large:!0}},o={render:e,args:{xlarge:!0}},n={render:e,args:{xxlarge:!0}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(M=(X=n.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};const D=["Small","Medium","Large","XLarge","XXLarge"];export{t as Large,s as Medium,a as Small,o as XLarge,n as XXLarge,D as __namedExportsOrder,A as default};