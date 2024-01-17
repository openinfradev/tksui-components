import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as a}from"./index-76fb7be0.js";import{u as A}from"./UseValidator-1d683c89.js";import{u as B}from"./UseClickOutside-961b265f.js";import{T as G}from"./TCheckbox-5de8d524.js";import{T as J}from"./TTextField-ab65370b.js";import{T as Q}from"./THighlightText-0de6d4e4.js";import{T}from"./TIcon-4c0f64bb.js";import{T as U}from"./TChip-2fb95d18.js";const h=a.forwardRef((e,V)=>{var x;const i=A(e.value,e.rules,e.successMessage),j=a.useRef(null),c=a.useRef(null),C=a.useRef(null),[d,v]=a.useState(""),[s,w]=a.useState(!1),[m,K]=a.useState(new Map);a.useImperativeHandle(V,()=>({focus(){var l;(l=c==null?void 0:c.current)==null||l.focus()},validate(){return i.validate()}}));const r=a.useCallback(()=>{c.current.focus()},[]),f=a.useCallback(l=>{e.onChange(l),e.multiple?e.value.includes(l)?e.onChange(e.value.filter(t=>t!==l)):e.onChange([...e.value,l]):e.onChange(l)},[e]),g=a.useCallback(()=>{e.onChange("")},[e]),N=a.useCallback(()=>{const l=new Map;e.items.forEach(t=>{l.set(t[e.valueKey],t)}),K(l)},[e.items,e.valueKey]),u=a.useCallback(l=>{w(!1),v(""),l&&r()},[r]),b=a.useCallback(()=>{w(!0),i.clearValidation()},[i]),y=a.useCallback(()=>{s?u(!0):b()},[u,s,b]),o=a.useCallback(l=>l?e.itemTemplate?e.itemTemplate(l):l[e.textKey]:"",[e]),_=a.useCallback(()=>!e.multiple&&d===o(m.get(e.value))?e.items:e.items.filter(l=>o(l).toLowerCase().includes(d==null?void 0:d.toLowerCase())),[d,o,m,e.items,e.multiple,e.value]),q=a.useMemo(()=>{const l=[];return e.className&&l.push(e.className),s&&l.push("t-dropdown--open"),e.disabled&&l.push("t-dropdown--disabled"),i.result||l.push("t-dropdown--failure"),i.result&&i.message&&l.push("t-dropdown--success"),l.push(`t-dropdown--${e.type}`),l.join(" ")},[s,e.className,e.disabled,e.type,i.message,i.result]),D=a.useMemo(()=>{var t;const l=[];return((t=e.value)==null?void 0:t.length)===0&&l.push("t-dropdown__control__selected--empty"),l.join(" ")},[(x=e.value)==null?void 0:x.length]),z=a.useMemo(()=>{const l=[];return s&&l.push("t-dropdown__items--open"),e.noDetail&&l.push("t-dropdown__items--no-detail"),_().length===0&&l.push("t-dropdown__items--empty"),l.join(" ")},[_,s,e.noDetail]),M=a.useCallback(l=>{const t=[];return(typeof e.value=="object"&&e.value.includes(l[e.valueKey])||typeof e.value=="string"&&e.value===l[e.valueKey])&&t.push("t-dropdown__items__item--selected"),t.join(" ")},[e.value,e.valueKey]),I=a.useMemo(()=>{let l={};return e.style&&(l={...e.style}),e.width&&(l={...l,width:e.width}),l},[e.style,e.width]),E=a.useCallback(()=>{y(),r()},[r,y]),P=a.useCallback(l=>{l.stopPropagation(),g()},[g]),k=a.useCallback(l=>{f(l),e.multiple||u(!0)},[u,f,e.multiple]),R=a.useCallback(()=>{!s&&!e.lazy&&i.validate()},[s,e.lazy,i]),$=a.useCallback(l=>{v(l)},[]),F=a.useCallback(l=>{l.key==="Escape"&&u(!0)},[u]),S=a.useCallback(l=>{l.key==="Escape"&&u(!0),(l.key==="Enter"||l.key===" ")&&y()},[u,y]),O=a.useCallback((l,t)=>{l.key==="Escape"&&u(!0),l.key==="Enter"&&(f(t),e.multiple||(r(),u(!0)))},[u,r,f,e.multiple]),H=a.useCallback(()=>{e.multiple||e.onChange("")},[e]),L=a.useMemo(()=>{var l;return((l=e.value)==null?void 0:l.length)===0?e.placeholder:null},[e.value,e.placeholder]);return B(C,()=>u(!1)),a.useEffect(()=>{N()},[e.items,e.valueKey]),n.jsxs("div",{ref:C,className:`t-dropdown ${q}`,style:I,onBlur:R,id:e.id,"data-testid":"dropdown-root",children:[n.jsxs("div",{className:"t-dropdown__control",tabIndex:e.disabled?-1:0,onKeyDown:S,ref:c,onClick:E,children:[n.jsxs("div",{className:`t-dropdown__control__selected ${D}`,children:[L,e.multiple&&e.chip&&e.value.map(l=>n.jsx(U,{small:!0,onRemove:e.disabled?null:()=>k(l),children:o(m.get(l))},l)),e.multiple&&!e.chip&&e.value.map(l=>o(m.get(l))).join(", "),!e.multiple&&o(m.get(e.value))]}),!e.multiple&&e.value&&n.jsx(T,{className:"t-dropdown__control__remover",xsmall:!0,type:"filled",onClick:P,children:"cancel"}),n.jsx(T,{className:`t-dropdown__control__opener ${s?"t-dropdown__control__opener--open":""}`,small:!0,color:e.disabled?"#CCCCCC":"#000000",children:"arrow_drop_down"})]}),n.jsxs("div",{className:`t-dropdown__items ${z}`,children:[n.jsx(J,{ref:j,className:"t-dropdown__items__filter-text",value:d,placeholder:e.filterPlaceholder,disabled:e.disabled,noTrim:!0,searchable:!0,onChange:$,onClear:H,onKeyDown:F}),n.jsxs("div",{className:"t-dropdown__items__wrapper",children:[s&&_().map(l=>n.jsxs("div",{className:`t-dropdown__items__item ${M(l)}`,tabIndex:e.multiple?-1:0,onClickCapture:()=>k(l[e.valueKey]),onKeyDown:t=>O(t,l[e.valueKey]),children:[e.multiple&&n.jsx(G,{className:"t-dropdown__items__item__checkbox",checked:e.value.includes(l[e.valueKey])}),n.jsx(Q,{keyword:d,children:o(l)})]},l[e.valueKey])),s&&_().length===0&&n.jsx("div",{className:"t-dropdown__items__item t-dropdown__items__item--no-result",children:"검색 결과가 없습니다."})]})]}),!e.noDetail&&n.jsx("div",{className:"t-dropdown__details",children:n.jsx("div",{className:"t-dropdown__details__message",children:i.message&&`${i.message}`})})]})});h.defaultProps={type:"outline",valueKey:"value",textKey:"text",placeholder:"선택",filterPlaceholder:"검색",chip:!0,lazy:!0};h.displayName="TDropdown";try{h.displayName="TDropdown",h.__docgenInfo={description:"",displayName:"TDropdown",props:{itemsClassName:{defaultValue:null,description:"",name:"itemsClassName",required:!1,type:{name:"string"}},type:{defaultValue:{value:"outline"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"underline"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TDropdownItem[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TDropdownValue"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},noDetail:{defaultValue:null,description:"",name:"noDetail",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"선택"},description:"",name:"placeholder",required:!1,type:{name:"string"}},filterPlaceholder:{defaultValue:{value:"검색"},description:"",name:"filterPlaceholder",required:!1,type:{name:"string"}},textKey:{defaultValue:{value:"text"},description:"",name:"textKey",required:!1,type:{name:"string"}},valueKey:{defaultValue:{value:"value"},description:"",name:"valueKey",required:!1,type:{name:"string"}},itemTemplate:{defaultValue:null,description:"",name:"itemTemplate",required:!1,type:{name:"(item: TDropdownItem) => string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string | string[]) => void"}},chip:{defaultValue:{value:"true"},description:"",name:"chip",required:!1,type:{name:"boolean"}},lazy:{defaultValue:{value:"true"},description:"",name:"lazy",required:!1,type:{name:"boolean"}},rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:"((value: any) => string | true)[]"}},successMessage:{defaultValue:null,description:"",name:"successMessage",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{h as T};
