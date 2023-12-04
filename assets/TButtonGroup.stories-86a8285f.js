import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as n}from"./index-76fb7be0.js";import{T}from"./TButton-7c26ac9e.js";import{T as m}from"./TIcon-06114f05.js";import"./_commonjsHelpers-de833af9.js";import"./UseRipple-565834b6.js";const l=e=>{const r=n.useMemo(()=>{const a=[];return e.className&&a.push(e.className),e.disabled&&a.push("t-button-group--disabled"),e.primary&&a.push("t-button-group--primary"),a.join(" ")},[e.className,e.disabled,e.primary]),d=n.useMemo(()=>{let a={};return e.style&&(a={...e.style}),a},[e.style]),s=n.useCallback((a,u)=>{if(u){const f=e.value.filter(_=>JSON.stringify(_)!==JSON.stringify(a));e.onChange(f)}else{const f=e.value.concat(a);e.onChange(f)}return a},[e]),i=n.useCallback(a=>{e.onChange(a)},[e]),b=n.useCallback(a=>e.multiSelect?e.value.some(u=>JSON.stringify(u)===JSON.stringify(a)):typeof e.value=="object"?JSON.stringify(e.value)===JSON.stringify(a):e.value===a,[e.multiSelect,e.value]),h=n.useCallback((a,u)=>{e.multiSelect?s(a,u):i(a)},[e.multiSelect,s,i]);return t.jsx("div",{className:`t-button-group ${r}`,style:d,"data-testid":"button-group-root",children:e.items.map((a,u)=>t.jsx(T,{small:!0,primary:e.primary,disabled:e.disabled,main:b(a.value),onClick:()=>h(a.value,b(a.value)),children:a.template},u))})};l.displayName="TButtonGroup";l.defaultProps={primary:!1,disabled:!1};try{l.displayName="TButtonGroup",l.__docgenInfo={description:"",displayName:"TButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TButtonGroupItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: any) => void"}},multiSelect:{defaultValue:null,description:"",name:"multiSelect",required:!1,type:{name:"boolean"}},primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Button/TButtonGroup",component:l},g=e=>{const[r,d]=n.useState(e.value),s=n.useCallback(i=>{d(i)},[]);return t.jsxs(t.Fragment,{children:[t.jsxs("span",{style:{fontSize:"20px"},children:["선택된 값 = ",e.multiSelect?r.join(", "):r]})," ",t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),"Normal ",t.jsx("br",{})," ",t.jsx("br",{}),t.jsx(l,{...e,value:r,onChange:s}),t.jsx("br",{})," ",t.jsx("br",{}),"Primary ",t.jsx("br",{})," ",t.jsx("br",{}),t.jsx(l,{...e,primary:!0,value:r,onChange:s}),t.jsx("br",{})," ",t.jsx("br",{}),"Disabled ",t.jsx("br",{})," ",t.jsx("br",{}),t.jsx(l,{...e,disabled:!0,value:r,onChange:s}),t.jsx("br",{})," ",t.jsx("br",{}),"Primary + Disabled ",t.jsx("br",{})," ",t.jsx("br",{}),t.jsx(l,{...e,primary:!0,disabled:!0,value:r,onChange:s})]})},o={render:g,args:{value:"1d",items:[{template:"최근 1일",value:"1d"},{template:"7일",value:"7d"},{template:"30일",value:"30d"}],multiSelect:!1}},c={render:g,args:{value:["italic"],items:[{template:t.jsx(m,{small:!0,children:"format_bold"}),value:"bold"},{template:t.jsx(m,{small:!0,children:"format_italic"}),value:"italic"},{template:t.jsx(m,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:t.jsx(m,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var y,p,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: '1d',
    items: [{
      template: '최근 1일',
      value: '1d'
    }, {
      template: '7일',
      value: '7d'
    }, {
      template: '30일',
      value: '30d'
    }],
    multiSelect: false
  }
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: ['italic'],
    items: [{
      template: <TIcon small>format_bold</TIcon>,
      value: 'bold'
    }, {
      template: <TIcon small>format_italic</TIcon>,
      value: 'italic'
    }, {
      template: <TIcon small>format_list_numbered_rtl</TIcon>,
      value: 'ol'
    }, {
      template: <TIcon small>format_strikethrough</TIcon>,
      value: 'strike'
    }],
    multiSelect: true
  }
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const O=["SingleSelect","MultiSelect"];export{c as MultiSelect,o as SingleSelect,O as __namedExportsOrder,B as default};
