import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as t}from"./index-76fb7be0.js";import{u as v}from"./UseValidator-1d683c89.js";const i=t.forwardRef((e,c)=>{var d;const[u,r]=t.useState(!1),l=v(e.value,e.rules,e.successMessage),s=t.useRef(null);t.useImperativeHandle(c,()=>({focus(){var a;(a=s==null?void 0:s.current)==null||a.focus()},validate(){return l.validate()}}));const o=t.useCallback(a=>{if(e.counter&&a.target.value.length>e.counter){e.onChange(a.target.value.substring(0,e.counter));return}e.onChange(a.target.value)},[e]),m=t.useCallback(()=>{l.clearValidation(),r(!0)},[l]),f=t.useCallback(()=>{e.lazy||l.validate(),r(!1)},[e.lazy,l]),y=t.useCallback(a=>{a.key==="Enter"&&e.onKeyDownEnter&&e.onKeyDownEnter(a),e.onKeyDown&&e.onKeyDown(a)},[e]),b=t.useMemo(()=>{const a=[];return e.className&&a.push(e.className),e.disabled&&a.push("t-text-area--disabled"),l.result||a.push("t-text-area--failure"),u&&a.push("t-text-area--focused"),l.result&&l.message&&a.push("t-text-area--success"),a.push(`t-text-area--${e.type}`),a.join(" ")},[e.className,e.disabled,e.type,l.result,l.message,u]),h=t.useMemo(()=>{const a=[];return e.required&&a.push("t-text-area__label--required"),a.join(" ")},[e.required]),x=t.useMemo(()=>{let a={};return e.style&&(a={...e.style}),e.width&&(a={...a,width:e.width}),a},[e.style,e.width]),_=t.useMemo(()=>{const a=[];return e.disabled&&a.push("t-text-area__container__input--disabled"),a.join(" ")},[e.disabled]),g=t.useMemo(()=>e.label&&!u||e.disabled?"":e.placeholder,[e.label,u,e.disabled,e.placeholder]);return n.jsxs("div",{className:`t-text-area ${b}`,style:x,id:e.id,"data-testid":"t-text-area-root",children:[e.label&&n.jsx("label",{className:`t-text-area__label ${h}`,children:e.label}),n.jsx("div",{className:"t-text-area__container",children:n.jsx("textarea",{ref:s,tabIndex:e.disabled?-1:0,className:`t-text-area__container__input ${_}`,disabled:e.disabled,placeholder:g,value:e.value,rows:e.rows,onChange:o,onKeyDown:y,onBlur:f,onFocus:m})}),n.jsxs("div",{className:"t-text-area__details",children:[n.jsx("div",{className:"t-text-area__details__message",children:l.message&&`${l.message}`}),n.jsx("div",{className:"t-text-area__details__counter",children:e.counter&&!e.disabled&&`${(d=e.value)==null?void 0:d.length} / ${e.counter}`})]})]})});i.defaultProps={type:"outline",rows:5,lazy:!0};i.displayName="TTextArea";try{i.displayName="TTextArea",i.__docgenInfo={description:"",displayName:"TTextArea",props:{type:{defaultValue:{value:"outline"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"underline"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},counter:{defaultValue:null,description:"",name:"counter",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},rows:{defaultValue:{value:"5"},description:"",name:"rows",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"(event: KeyboardEvent<HTMLTextAreaElement>) => void"}},onKeyDownEnter:{defaultValue:null,description:"",name:"onKeyDownEnter",required:!1,type:{name:"(event: KeyboardEvent<HTMLTextAreaElement>) => void"}},lazy:{defaultValue:{value:"true"},description:"",name:"lazy",required:!1,type:{name:"boolean"}},rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:"((value: any) => string | true)[]"}},successMessage:{defaultValue:null,description:"",name:"successMessage",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{i as T};
