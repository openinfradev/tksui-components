import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as z}from"./index-4g5l5LRQ.js";import{T as k}from"./TModal-OIYUZu1c.js";import{T as c}from"./TButton-XVn2jxf4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index-VFMbf6KQ.js";import"./TIcon-8TOxnOiC.js";import"./ThemeToken.module-dCmVaUNK.js";import"./UseRipple-aO9_-GhK.js";import"./uniqueId-M9xs3r9t.js";import"./toString-wsudKogf.js";const G={title:"Screen/TModal",component:k,args:{containerId:"storybook-root"}},e=C=>{const[E,m]=z.useState(!1),O=r.jsxs(r.Fragment,{children:[r.jsx(c,{size:"large",onClick:()=>m(!1),children:"취소"}),r.jsx(c,{size:"large",main:!0,children:"저장"})]});return r.jsxs(r.Fragment,{children:[r.jsx(c,{onClick:()=>m(!0),children:"모달 열기"}),r.jsx(k,{...C,title:"클러스터 생성",isOpen:E,onRequestClose:()=>m(!1),footer:O,children:"클러스터 생성 모달입니다."})]})},a={render:e,args:{small:!0}},s={render:e,args:{medium:!0}},t={render:e,args:{large:!0}},o={render:e,args:{xlarge:!0}},n={render:e,args:{xxlarge:!0}};var p,l,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    small: true
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(M=(X=n.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};const H=["Small","Medium","Large","XLarge","XXLarge"];export{t as Large,s as Medium,a as Small,o as XLarge,n as XXLarge,H as __namedExportsOrder,G as default};
