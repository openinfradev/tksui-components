import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{T as s}from"./TIcon-d773ec1e.js";const n={xsm:"xsmall",sm:"small",md:"medium",lg:"large",xlg:"xlarge"},r=i.forwardRef((e,d)=>{const o=i.useRef(null);i.useImperativeHandle(d,()=>({remove(){m()}}));const a=i.useMemo(()=>e.size?e.size:e.xsmall?n.xsm:e.small?n.sm:e.medium?n.md:e.large?n.lg:e.xlarge?n.xlg:n.md,[e.size,e.xsmall,e.small,e.medium,e.large,e.xlarge]),c=i.useMemo(()=>{const l=[];return l.push(`t-chip--${a}`),e.type==="outlined"&&l.push("t-chip--outlined"),e.type==="filled"&&l.push("t-chip--filled"),e.primary&&l.push("t-chip--primary"),e.className&&l.push(e.className),l.join(" ")},[a,e.type,e.primary,e.className]),f=i.useMemo(()=>e.style,[e.style]),m=l=>{e.onRemove(l)},u=i.useMemo(()=>a==="xsmall"?{fontSize:"12px"}:a==="small"?{fontSize:"14px"}:a==="medium"?{fontSize:"16px"}:a==="large"?{fontSize:"20px"}:a==="xlarge"?{fontSize:"24px"}:{fontSize:"16px"},[a]);return t.jsxs("div",{ref:o,className:`t-chip ${c}`,onClick:l=>l.stopPropagation(),style:f,children:[e.icon&&t.jsx(s,{type:"filled",className:"t-chip__prev-icon",style:u,children:e.icon}),t.jsx("div",{className:"t-chip__label",children:e.children}),!!e.onRemove&&t.jsx(s,{type:"filled",className:"t-chip__remove-icon",style:u,clickable:!0,onClick:l=>m(l),children:e.removeIcon})]})});r.defaultProps={type:"filled",removeIcon:"cancel"};r.displayName="TChip";try{r.displayName="TChip",r.__docgenInfo={description:"",displayName:"TChip",props:{type:{defaultValue:{value:"filled"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},removeIcon:{defaultValue:{value:"cancel"},description:"",name:"removeIcon",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},xsmall:{defaultValue:null,description:"",name:"xsmall",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},medium:{defaultValue:null,description:"",name:"medium",required:!1,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}},xlarge:{defaultValue:null,description:"",name:"xlarge",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"(event?: MouseEvent<Element, MouseEvent>) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{r as T};
//# sourceMappingURL=TChip-b8a4a41e.js.map
