import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{T as d}from"./TButton-7a565153.js";import{T as c}from"./TModal-242a345f.js";import"./_commonjsHelpers-de833af9.js";import"./UseRipple-bad4b27c.js";import"./TIcon-a8804371.js";import"./index-d3ea75b5.js";import"./index-9d475cdf.js";function a(e){const r=l.useMemo(()=>{const t=[];return e.className&&t.push(e.className),t.join(" ")},[e.className]),n=l.useMemo(()=>{let t={};return e.style&&(t={...e.style}),t},[e.style]);return s.jsxs(c,{containerId:e.containerId,isOpen:e.isOpen,onRequestClose:e.onRequestClose,className:`t-progress ${r}`,style:n,overlayClassName:"t-progress__overlay",bodyClassName:"t-progress__modal-body",children:[s.jsxs("div",{className:"t-progress__spinner",children:[s.jsx("div",{className:"t-progress__spinner__slice"}),s.jsx("div",{className:"t-progress__spinner__slice"}),s.jsx("div",{className:"t-progress__spinner__slice"})]}),s.jsx("div",{className:"t-progress__message",children:e.message})]})}a.defaultProps={message:"잠시만 기다려 주십시오",containerId:"root"};try{a.displayName="TProgress",a.__docgenInfo={description:"",displayName:"TProgress",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"",name:"onRequestClose",required:!1,type:{name:"() => void"}},message:{defaultValue:{value:"잠시만 기다려 주십시오"},description:"",name:"message",required:!1,type:{name:"string"}},containerId:{defaultValue:{value:"root"},description:"",name:"containerId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const T={title:"Guide/TProgress",component:a},p=()=>{const[e,r]=l.useState(!1),n=()=>{r(!0),setTimeout(()=>r(!1),3e3)};return s.jsxs(s.Fragment,{children:[s.jsx(d,{onClick:n,children:"Progress 3초간 열기"}),s.jsx(a,{containerId:"storybook-root",isOpen:e,onRequestClose:()=>r(!1),message:"3초 후 닫힙니다"})]})},o={render:p};var i,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,T as default};
//# sourceMappingURL=TProgress.stories-2447ba54.js.map
