import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as n}from"./index-76fb7be0.js";import{T as u}from"./TIcon-09805f2a.js";import{T as h}from"./TSection-ecc5689e.js";import{T as S}from"./TTooltip-3e70452a.js";const d=n.createContext(null),r=e=>{const i=n.useMemo(()=>{const l=[];return e.className&&l.push(e.className),l.join(" ")},[e.className]),o=n.useMemo(()=>e.style?{...e.style}:{},[e.style]);return t.jsxs(h,{className:`t-form-section ${i}`,style:o,id:e.id,label:e.label,customLabel:e.customLabel,rightAction:e.rightAction,leftAction:e.leftAction,contentClassName:"t-form-section__content",children:[(e.information||e.customInformation)&&t.jsxs("div",{className:"t-form-section__content__info",children:[t.jsx(u,{small:!0,className:"t-form-section__content__info__icon",color:"#666666",children:"t_information"}),t.jsx("div",{className:"t-form-section__content__info__content",children:e.customInformation?e.customInformation:e.information.split(`
`).map((l,s)=>t.jsx("div",{children:l},s))})]}),t.jsx(d.Provider,{value:{column:e.column,labelWidth:e.labelWidth},children:e.children})]})};r.defaultProps={column:2,labelWidth:"84px"};try{r.displayName="TFormSection",r.__docgenInfo={description:"",displayName:"TFormSection",props:{column:{defaultValue:{value:"2"},description:"",name:"column",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},customLabel:{defaultValue:null,description:"",name:"customLabel",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},information:{defaultValue:null,description:"",name:"information",required:!1,type:{name:"string"}},customInformation:{defaultValue:null,description:"",name:"customInformation",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},labelWidth:{defaultValue:{value:"84px"},description:"",name:"labelWidth",required:!1,type:{name:"string"}},leftAction:{defaultValue:null,description:"",name:"leftAction",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rightAction:{defaultValue:null,description:"",name:"rightAction",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const c=e=>{const i=n.useMemo(()=>{const l=[];return e.className&&l.push(e.className),l.join(" ")},[e.className]),o=n.useMemo(()=>e.style?{...e.style}:{},[e.style]);return t.jsx("div",{className:`t-form-section-row ${i}`,style:o,children:e.children})};try{c.displayName="TFormSectionRow",c.__docgenInfo={description:"",displayName:"TFormSectionRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const m=e=>{const{column:i,labelWidth:o}=n.useContext(d),l=n.useId(),s=n.useMemo(()=>{const a=[];return e.className&&a.push(e.className),e.required&&a.push("t-form-section-item--required"),a.join(" ")},[e.className,e.required]),f=n.useMemo(()=>{const a=e.style?e.style:{};return a.width=`calc(100% / ${i} * ${e.span||1})`,a},[i,e.span,e.style]),y=n.useMemo(()=>{const a={marginBottom:e.labelMarginBottom};return a.flex=`0 0 ${o}`,a},[o]),_=n.useMemo(()=>e.contentStyle?{...e.contentStyle}:{},[e.contentStyle]);return t.jsxs("span",{className:`t-form-section-item ${s}`,style:f,role:"group",children:[e.label&&t.jsxs("label",{className:"t-form-section-item__label",style:y,children:[t.jsx("span",{className:"t-form-section-item__label__text",children:e.label}),e.information&&t.jsx(u,{className:"t-form-section-item__label__info-icon",xsmall:!0,tooltipContent:e.information,tooltipId:l,clickable:!0,children:"t_information"})]}),t.jsxs("div",{className:"t-form-section-item__content",style:_,children:[e.children," "]}),e.information&&t.jsx(S,{id:l,openOnClick:!0})]})};try{m.displayName="TFormSectionItem",m.__docgenInfo={description:"",displayName:"TFormSectionItem",props:{information:{defaultValue:null,description:"",name:"information",required:!1,type:{name:"string"}},span:{defaultValue:null,description:"",name:"span",required:!1,type:{name:"number"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelMarginBottom:{defaultValue:null,description:"",name:"labelMarginBottom",required:!1,type:{name:"string"}},contentStyle:{defaultValue:null,description:"",name:"contentStyle",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{r as T,c as a,m as b};
