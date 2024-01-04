import{j as i}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{T as v}from"./TIcon-06114f05.js";import{u as g}from"./UseValidator-1d683c89.js";const c=s.forwardRef((e,r)=>{const l=g(e.value,e.rules,e.successMessage),u=s.useRef(null);s.useEffect(y,[e.value,e.indeterminate,e.checked,e.positiveValue]);const[t,n]=s.useState("uncheck");s.useImperativeHandle(r,()=>({focus(){var a;(a=u==null?void 0:u.current)==null||a.focus()},validate(){return l.validate()}}));function o(){const a=[];return e.className&&a.push(e.className),e.disabled&&a.push("t-checkbox--disabled"),l.result||a.push("t-checkbox--failure"),l.result&&l.message&&a.push("t-checkbox--success"),a.join(" ")}function f(){let a={};return e.style&&(a={...e.style}),a}function m(){d()}function h(){e.lazy||l.validate()}function k(a){(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),d())}function d(){typeof e.onChange=="function"&&(t==="check"?e.onChange(e.negativeValue,e.positiveValue):e.onChange(e.positiveValue))}function y(){e.checked===!0?n("check"):e.checked===!1?n("uncheck"):e.indeterminate?n("indeterminate"):e.value===e.positiveValue?n("check"):n("uncheck")}function b(){let a;if(t==="indeterminate")a="t_check_intermediate";else if(t==="check")a="t_check_on";else if(t==="uncheck"&&e.disabled)a="t_check_disabled_off";else if(t==="uncheck"&&!e.disabled)a="t_check_off";else throw Error("Invalid status");return i.jsx(v,{small:!0,type:"filled",className:`t-checkbox__icon t-checkbox__icon--${t}`,children:a})}return i.jsxs("div",{ref:u,className:`t-checkbox ${o()}`,style:f(),children:[i.jsxs("div",{className:"t-checkbox__container",tabIndex:e.disabled?-1:0,onFocus:l.clearValidation,onBlur:h,onKeyDown:k,onClick:m,children:[b(),i.jsx("span",{className:"t-checkbox__label",children:e.children})]}),e.rules&&i.jsx("div",{className:"t-checkbox__message",children:l.message})]})});c.defaultProps={positiveValue:!0,negativeValue:!1,checked:null,lazy:!0};c.displayName="TCheckbox";try{c.displayName="TCheckbox",c.__docgenInfo={description:"",displayName:"TCheckbox",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ [key: string]: string; }"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"Element"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"TCheckboxValue"}},checked:{defaultValue:{value:"null"},description:"",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},positiveValue:{defaultValue:{value:"true"},description:"",name:"positiveValue",required:!1,type:{name:"string | boolean"}},negativeValue:{defaultValue:{value:"false"},description:"",name:"negativeValue",required:!1,type:{name:"string | boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string | boolean, positiveValue?: string | boolean) => void"}},lazy:{defaultValue:{value:"true"},description:"",name:"lazy",required:!1,type:{name:"boolean"}},rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:"((value: any) => string | true)[]"}},successMessage:{defaultValue:null,description:"",name:"successMessage",required:!1,type:{name:"string"}}}}}catch{}export{c as T};