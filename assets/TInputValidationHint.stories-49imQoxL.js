import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{T as i}from"./TInputValidationHint-agk1MrNG.js";import{T as u}from"./TTextField-PL5EbYmw.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./toString-wsudKogf.js";import"./TIcon-Vi1lColy.js";import"./UseValidator-M-ibdt69.js";import"./ThemeToken.module-mxnC7jdb.js";const V={title:"Guide/TInputValidationHint",component:i},l=()=>{const[s,p]=m.useState("");return t.jsxs(t.Fragment,{children:[t.jsx(u,{value:s,onChange:p,width:"300px",counter:16,password:!0}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(i,{value:s,description:"다음 요건에 맞는 비밀번호를 입력해 주세요.",rules:[{rule:e=>e.length>=8&&e.length<=16,description:"8자에서 16자 사이로 입력해 주세요."},{rule:e=>/^[a-zA-Z0-9!@#$%^&*()+=_-]*$/.test(e),description:"영문 대 소문자, 숫자, 특수문자(!@#$%%^&*()+=_-)만 입력해 주세요."}]})]})},r={render:l};var o,a,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const _=["Default"];export{r as Default,_ as __namedExportsOrder,V as default};