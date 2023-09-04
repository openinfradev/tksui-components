import{j as a}from"./jsx-runtime-ffb262ed.js";import{T as _}from"./TTextField-f6c08e1c.js";import{u as f}from"./UseInputState-38eb87e9.js";import{T as p,n as N}from"./TToast-dec64875.js";import{r as n}from"./index-76fb7be0.js";import{T as h}from"./TButton-7a565153.js";import{T as j}from"./TCheckboxGroup-c357f8df.js";import"./_commonjsHelpers-de833af9.js";import"./toString-a79d3543.js";import"./TIcon-a8804371.js";import"./UseValidator-1d683c89.js";/* empty css                      */import"./UseRipple-bad4b27c.js";import"./TCheckbox-fdd1088e.js";const b=n.createContext({column:2,labelWidth:"500px"});function i(e){const r={column:e.column,labelWidth:e.labelWidth},s=n.useMemo(()=>{const t=[];return e.className&&t.push(e.className),t.join(" ")},[e.className]),l=n.useMemo(()=>{let t={};return e.style&&(t={...e.style}),t},[e.style]),d=n.useCallback(()=>{e.onSearch()},[e]),m=n.useCallback(()=>{e.onReset()},[e]);return a.jsxs("fieldset",{role:"form",className:`t-search-box ${s}`,style:l,children:[a.jsx("legend",{className:"screen-reader-only",children:"검색 조건"}),a.jsx("div",{className:"t-search-box__content",children:a.jsx(b.Provider,{value:{...r},children:e.children})}),(e.onReset||e.onSearch)&&a.jsxs("div",{className:"t-search-box__action-bar",children:[e.onReset&&a.jsx(h,{large:!0,primary:!0,onClick:m,children:"초기화"}),e.onSearch&&a.jsx(h,{large:!0,main:!0,onClick:d,children:"조회"})]})]})}i.defaultProps={column:2,labelWidth:"15%"};try{i.displayName="TSearchBox",i.__docgenInfo={description:"",displayName:"TSearchBox",props:{column:{defaultValue:{value:"2"},description:"",name:"column",required:!1,type:{name:"number"}},labelWidth:{defaultValue:{value:"15%"},description:"",name:"labelWidth",required:!1,type:{name:"string"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"() => void"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}function c(e){const r=n.useMemo(()=>{const l=[];return e.className&&l.push(e.className),l.join(" ")},[e.className]),s=n.useMemo(()=>{let l={};return e.style&&(l={...e.style}),l},[e.style]);return a.jsx("div",{className:`t-search-box-row ${r}`,style:s,children:e.children})}try{c.displayName="TSearchBoxRow",c.__docgenInfo={description:"",displayName:"TSearchBoxRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}function u(e){const{column:r,labelWidth:s}=n.useContext(b),l=n.useMemo(()=>{const t=[];return e.className&&t.push(e.className),e.required&&t.push("t-search-box-item--required"),t.join(" ")},[e.className,e.required]),d=n.useMemo(()=>{let t={};return t.width=`calc(100% / ${r} * ${e.span||1})`,e.style&&(t={...e.style}),t},[r,e.span,e.style]),m=n.useMemo(()=>{const t={};return t.flex=`0 0 ${s}`,t},[s]);return a.jsxs("span",{className:`t-search-box-item ${l}`,role:"group",style:d,children:[e.label&&a.jsx("label",{className:"t-search-box-item__label",style:m,children:e.label}),a.jsxs("div",{className:"t-search-box-item__content",children:[" ",e.children," "]})]})}try{u.displayName="TSearchBoxItem",u.__docgenInfo={description:"",displayName:"TSearchBoxItem",props:{span:{defaultValue:null,description:"",name:"span",required:!1,type:{name:"number"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"TFormLabel"}},labelMarginBottom:{defaultValue:null,description:"",name:"labelMarginBottom",required:!1,type:{name:"string"}},contentStyle:{defaultValue:null,description:"",name:"contentStyle",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const k={title:"DataContainer/TSearchBox",component:i},g=e=>{const r=f(""),s=f([]);function l(){r.onChange(""),s.onChange([])}return a.jsxs(a.Fragment,{children:[a.jsx(p,{}),a.jsxs(i,{column:2,labelWidth:"15%",onReset:l,onSearch:()=>N.info("검색 이벤트 발생"),...e,children:[a.jsx(c,{children:a.jsx(u,{label:"아이디",children:a.jsx(_,{...r})})}),a.jsx(c,{children:a.jsx(u,{label:"상태",children:a.jsx(j,{...s,items:[{value:"CREATED",text:"조치 전"},{value:"INPROGRESS",text:"조치 중"},{value:"CLOSED",text:"종료"},{value:"ERROR",text:"에러"}]})})})]})]})},o={render:g};var y,x,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,k as default};
//# sourceMappingURL=TSearchBox.stories-903f0b47.js.map
