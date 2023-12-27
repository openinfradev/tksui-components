import{j as l}from"./jsx-runtime-ffb262ed.js";import{r}from"./index-76fb7be0.js";import{T as y}from"./TTooltip-db5933d8.js";import"./_commonjsHelpers-de833af9.js";const s=e=>{const a=r.useMemo(()=>{const t=[];return e.className&&t.push(e.className),e.clickable&&t.push("t-card--clickable"),e.selected&&t.push("t-card--selected"),t.join(" ")},[e.className,e.clickable,e.selected]),i=r.useMemo(()=>{let t={};return e.width&&(t={...t,width:e.width}),e.height&&(t={...t,height:e.height}),e.style&&(t={...t,...e.style}),t},[e.height,e.style,e.width]);return l.jsx("div",{className:`t-card ${a}`,style:i,onClick:e.onClick,"data-tooltip-id":e.tooltipId,"data-tooltip-content":e.tooltipContent,"data-tooltip-place":e.tooltipPlace,"data-tooltip-hidden":e.tooltipHidden,children:e.children})};s.defaultProps={};s.displayName="TCard";try{s.displayName="TCard",s.__docgenInfo={description:"",displayName:"TCard",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tooltipId:{defaultValue:null,description:"",name:"tooltipId",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!1,type:{name:"string"}},tooltipPlace:{defaultValue:null,description:"",name:"tooltipPlace",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},tooltipHidden:{defaultValue:null,description:"",name:"tooltipHidden",required:!1,type:{name:"boolean"}}}}}catch{}const o=e=>{const{className:a,style:i}=e,t=r.useMemo(()=>{const n=[];return a&&n.push(a),n.join(" ")},[a]),u=r.useMemo(()=>i||{},[i]);return l.jsxs("header",{className:`t-card-header ${t}`,style:u,children:[l.jsx("h4",{className:"t-card-header__title",children:e.title}),l.jsx("div",{className:"t-card-header__sub-title",children:e.subTitle})]})};o.defaultProps={};o.displayName="TCard";try{TCard.displayName="TCard",TCard.__docgenInfo={description:"",displayName:"TCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const c=e=>{const{className:a,style:i}=e,t=r.useMemo(()=>{const n=[];return a&&n.push(a),n.join(" ")},[a]),u=r.useMemo(()=>i||{},[i]);return l.jsx("section",{className:`t-card-content ${t}`,style:u,children:e.children})};c.defaultProps={};c.displayName="TCard";try{TCard.displayName="TCard",TCard.__docgenInfo={description:"",displayName:"TCard",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const N={title:"DataContainer/TCard",component:s},h=e=>{const[a,i]=r.useState("");return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[l.jsx(y,{id:"card-tooltip"}),l.jsxs(s,{...e,clickable:!0,onClick:()=>i("1"),width:"300px",selected:a==="1",children:[l.jsx(o,{title:"AWS",subTitle:"Lorem ipsum dolor sit"}),l.jsx(c,{children:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"})]}),l.jsxs(s,{clickable:!0,onClick:()=>i("2"),width:"300px",selected:a==="2",tooltipId:"card-tooltip",tooltipContent:"툴팁 예시",children:[l.jsx(o,{title:"BYOH",subTitle:"Lorem ipsum dolor sit"}),l.jsx(c,{children:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"})]})]})},d={render:h,args:{}};var m,p,f;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(f=(p=d.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const x=["Default"];export{d as Default,x as __namedExportsOrder,N as default};
