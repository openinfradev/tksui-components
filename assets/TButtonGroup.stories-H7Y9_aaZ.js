import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{T as s}from"./TButtonGroup-cVKX3-xt.js";import{T as a}from"./TIcon-8TOxnOiC.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./TButton-tTjSDtDa.js";import"./UseRipple-JqpP8l15.js";import"./uniqueId-M9xs3r9t.js";import"./toString-wsudKogf.js";const M={title:"Button/TButtonGroup",component:s},i=({label:t,children:l})=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{fontSize:"14px"},children:t}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:l})]}),f=t=>{const[l,h]=m.useState(t.value),o=m.useCallback(S=>{h(S)},[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(i,{label:`Default(value: ${t.multiSelect?l.join(", "):l})`,children:e.jsx(s,{...t,value:l,onChange:o})}),e.jsx(i,{label:"Disabled",children:e.jsx(s,{...t,disabled:!0,value:l,onChange:o})})]})},r={render:f,args:{value:"1d",items:[{template:"최근 1주",value:"1W"},{template:"1개월",value:"1M"},{template:"3개월",value:"3M"}],multiSelect:!1}},n={render:f,args:{value:["italic"],items:[{template:e.jsx(a,{small:!0,children:"format_bold"}),value:"bold"},{template:e.jsx(a,{small:!0,children:"format_italic"}),value:"italic"},{template:e.jsx(a,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:e.jsx(a,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,x,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const k=["SingleSelect","MultiSelect"];export{n as MultiSelect,r as SingleSelect,k as __namedExportsOrder,M as default};
