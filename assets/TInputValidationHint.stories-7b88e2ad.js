import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{T as y}from"./TTextField-53f2a63b.js";import"./_commonjsHelpers-de833af9.js";import"./toString-a79d3543.js";import"./TIcon-48c53834.js";import"./UseValidator-1d683c89.js";const l=i.forwardRef((e,r)=>{const[n,_]=i.useState([]);i.useImperativeHandle(r,()=>({manualValidate(){d()}}));const f=i.useMemo(()=>{const t=[];return e.className&&t.push(e.className),t.join(" ")},[e.className]),v=i.useCallback(t=>t?"t-input-validation-hint__rules__item--valid":"t-input-validation-hint__rules__item--invalid",[]),h=i.useMemo(()=>{let t={};return e.style&&(t={...e.style}),t},[e.style]),d=i.useCallback(()=>{const t=e.rules.reduce((u,o)=>[...u,{...o,result:o.rule(e.value)}],[]);_(t)},[e.rules,e.value]);return i.useEffect(()=>{d()},[e.value]),a.jsxs("div",{className:`t-input-validation-hint ${f}`,id:e.id,style:h,"data-testid":"t-input-validation-hint-root",children:[e.description&&a.jsx("div",{className:"t-input-validation-hint__description","data-testid":"t-input-validation-hint-description",children:e.description}),a.jsx("ul",{className:"t-input-validation-hint__rules",children:n.map((t,u)=>a.jsxs("div",{className:`t-input-validation-hint__rules__item ${v(t.result)}`,children:[t.description," (",t.result?"O":"X",")"]},u))})]})});l.displayName="TInputValidationHint";try{l.displayName="TInputValidationHint",l.__docgenInfo={description:"",displayName:"TInputValidationHint",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number | boolean"}},rules:{defaultValue:null,description:"",name:"rules",required:!0,type:{name:"TInputValidationHintRuleVO[]"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const H={title:"Guide/TInputValidationHint",component:l},x=()=>{const[e,r]=i.useState("");return a.jsxs(a.Fragment,{children:[a.jsx(y,{value:e,onChange:r,width:"300px",counter:16,password:!0}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(l,{value:e,description:"다음 요건에 맞는 비밀번호를 입력해 주세요.",rules:[{rule:n=>n.length>=8&&n.length<=16,description:"8자에서 16자 사이로 입력해 주세요."},{rule:n=>/^[a-zA-Z0-9!@#$%^&*()+=_-]*$/.test(n),description:"영문 대 소문자, 숫자, 특수문자(!@#$%%^&*()+=_-)만 입력해 주세요."}]})]})},s={render:x};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const q=["Default"];export{s as Default,q as __namedExportsOrder,H as default};
