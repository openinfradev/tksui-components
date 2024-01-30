import{j as d}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{u as _}from"./UseValidator-M-ibdt69.js";import{T as v}from"./TIcon-4O00LWfy.js";import{t as g}from"./ThemeToken.module-mxnC7jdb.js";const u=e=>{const c=i.useCallback(()=>{const l=[];return e.className&&l.push(e.className),e.disabled&&l.push("t-radio--disabled"),l.join(" ")},[e.className,e.disabled]),t=i.useCallback(()=>e.style||{},[e.style]),s=i.useCallback(()=>{e.onSelect(e.positiveValue)},[e]),m=i.useCallback(()=>{e.disabled||s()},[e.disabled,s]),f=i.useCallback(l=>{e.disabled||(l.key==="Enter"||l.key===" ")&&s()},[e.disabled,s]),y=i.useCallback(()=>{const l=e.selected?"selected":"deselected";let n,r=g.tGrayColor3;return e.selected?(n="t_radio_on",r=g.tPrimaryColor):e.disabled?n="t_radio_disabled_off":n="t_radio_off",d.jsx(v,{xsmall:!0,className:`t-radio__icon t-radio__icon--${l}`,color:r,children:n})},[e.selected,e.disabled]);return d.jsx("div",{className:`t-radio ${c()}`,style:t(),id:e.id,"data-testid":"t-radio-root",children:d.jsxs("div",{className:"t-radio__container",tabIndex:e.disabled?-1:0,onKeyDown:f,onClick:m,"data-testid":"t-radio-container",children:[y(),d.jsx("span",{className:"t-radio__label",children:e.children})]})})};u.defaultProps={};u.displayName="TRadio";try{u.displayName="TRadio",u.__docgenInfo={description:"",displayName:"TRadio",props:{positiveValue:{defaultValue:null,description:"",name:"positiveValue",required:!1,type:{name:"TRadioValue"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(value: TRadioValue) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const o=i.forwardRef((e,c)=>{const t=_(e.value,e.rules,e.successMessage),s=i.useRef(null);i.useImperativeHandle(c,()=>({validate(){return t.validate()}}));function m(){const a=[];return e.className&&a.push(e.className),e.disabled&&a.push("t-radio-group--disabled"),t.result||a.push("t-radio-group--failure"),t.result&&t.message&&a.push("t-radio-group--success"),a.join(" ")}function f(){let a={};return e.style&&(a={...e.style}),a}function y(a){r(a)}function l(){e.rules&&t.clearValidation()}function n(a){const b=a.relatedTarget;e.rules&&!e.lazy&&!s.current.contains(b)&&t.validate()}function r(a){e.onChange(a)}return d.jsxs("div",{className:`t-radio-group ${m()}`,style:f(),ref:s,tabIndex:e.disabled?-1:0,onFocus:l,onBlur:n,id:e.id,"data-testid":"t-radio-group-root",children:[d.jsx("div",{className:"t-radio-group__container",children:e.items.map((a,b)=>d.jsx(u,{positiveValue:a[e.valueKey],selected:e.value===a[e.valueKey],disabled:e.disabled||a.disabled,onSelect:y,children:e.labelTemplate?e.labelTemplate(a):a[e.textKey]},b))}),e.rules&&d.jsx("div",{className:"t-radio-group__message",children:t.message})]})});o.defaultProps={textKey:"text",valueKey:"value",lazy:!0};o.displayName="TRadioGroup";try{o.displayName="TRadioGroup",o.__docgenInfo={description:"",displayName:"TRadioGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TRadioValue"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TRadioGroupItem[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textKey:{defaultValue:{value:"text"},description:"",name:"textKey",required:!1,type:{name:"string"}},valueKey:{defaultValue:{value:"value"},description:"",name:"valueKey",required:!1,type:{name:"string"}},labelTemplate:{defaultValue:null,description:"",name:"labelTemplate",required:!1,type:{name:"(item: TRadioGroupItem) => string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: TRadioValue) => void"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},lazy:{defaultValue:{value:"true"},description:"",name:"lazy",required:!1,type:{name:"boolean"}},rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:"((value: any) => string | true)[]"}},successMessage:{defaultValue:null,description:"",name:"successMessage",required:!1,type:{name:"string"}}}}}catch{}export{o as T};
