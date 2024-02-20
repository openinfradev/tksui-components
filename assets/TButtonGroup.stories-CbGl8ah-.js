import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as m}from"./index-CBqU2yxZ.js";import{T as a}from"./TButtonGroup-DhtpA2YU.js";import{T as n}from"./TIcon-DWitXKJd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TButton-B5_kg9S7.js";import"./UseRipple-B0f24SXl.js";import"./uniqueId-BdmaqBQH.js";import"./toString-Biug5Hwg.js";const M={title:"Button/TButtonGroup",component:a},s=({label:l,children:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{fontSize:"14px"},children:l}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:t})]}),f=l=>{const[t,h]=m.useState(l.value),r=m.useCallback(j=>{h(j)},[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(s,{label:`Default(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,value:t,onChange:r})}),e.jsx(s,{label:`Primary(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,primary:!0,value:t,onChange:r})}),e.jsx(s,{label:`Main(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,main:!0,value:t,onChange:r})}),e.jsx(s,{label:"Disabled",children:e.jsx(a,{...l,disabled:!0,value:t,onChange:r})})]})},o={render:f,args:{value:"1d",items:[{template:"최근 1주",value:"1W"},{template:"1개월",value:"1M"},{template:"3개월",value:"3M"}],multiSelect:!1}},i={render:f,args:{value:["italic"],items:[{template:e.jsx(n,{small:!0,children:"format_bold"}),value:"bold"},{template:e.jsx(n,{small:!0,children:"format_italic"}),value:"italic"},{template:e.jsx(n,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:e.jsx(n,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var u,c,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: '1d',
    items: [{
      template: '최근 1주',
      value: '1W'
    }, {
      template: '1개월',
      value: '1M'
    }, {
      template: '3개월',
      value: '3M'
    }],
    multiSelect: false
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,x,v;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const k=["SingleSelect","MultiSelect"];export{i as MultiSelect,o as SingleSelect,k as __namedExportsOrder,M as default};
