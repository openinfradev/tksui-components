import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as o}from"./index-4g5l5LRQ.js";import{T as a}from"./TButtonGroup-Xt5WpkWX.js";import{T as s}from"./TIcon-4O00LWfy.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./TButton-urOILK2N.js";import"./UseRipple-bKa6TkVL.js";const I={title:"Button/TButtonGroup",component:a},j=t=>{const[r,b]=o.useState(t.value),l=o.useCallback(v=>{b(v)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs("span",{style:{fontSize:"20px"},children:["선택된 값 = ",t.multiSelect?r.join(", "):r]})," ",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"Normal ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsx(a,{...t,value:r,onChange:l}),e.jsx("br",{})," ",e.jsx("br",{}),"Primary ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsx(a,{...t,primary:!0,value:r,onChange:l}),e.jsx("br",{})," ",e.jsx("br",{}),"Disabled ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsx(a,{...t,disabled:!0,value:r,onChange:l}),e.jsx("br",{})," ",e.jsx("br",{}),"Primary + Disabled ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsx(a,{...t,primary:!0,disabled:!0,value:r,onChange:l})]})},n={render:j,args:{value:"1d",items:[{template:"최근 1일",value:"1d"},{template:"7일",value:"7d"},{template:"30일",value:"30d"}],multiSelect:!1}},m={render:j,args:{value:["italic"],items:[{template:e.jsx(s,{small:!0,children:"format_bold"}),value:"bold"},{template:e.jsx(s,{small:!0,children:"format_italic"}),value:"italic"},{template:e.jsx(s,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:e.jsx(s,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var u,i,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,d,x;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(d=m.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const k=["SingleSelect","MultiSelect"];export{m as MultiSelect,n as SingleSelect,k as __namedExportsOrder,I as default};
