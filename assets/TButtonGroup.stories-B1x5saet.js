import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-Bkkj9pTw.js";import{T as a}from"./TButtonGroup-DH6ZZTrZ.js";import{T as n}from"./TIcon-BZndhXHG.js";import"./TTabItem-Brhf-x-F.js";import"./index-BBisz5Cx.js";import"./index-B7RxxPJE.js";import"./TBadge-R-65HBMi.js";import"./UseValidator-CkTCfSQi.js";import"./TDropHolder-B41fHPmd.js";import"./THighlightText-pTj3K_4-.js";import"./TInputValidationHint-BKBc60i2.js";import"./TChip-CnX8ufgd.js";import"./TTextField-CVc4-CwK.js";import"./TSwitch-octfEEab.js";const G={title:"Button/TButtonGroup",component:a},o=({label:l,children:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{fontSize:"14px"},children:l}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:t})]}),f=l=>{const[t,h]=s.useState(l.value),r=s.useCallback(j=>{h(j)},[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(o,{label:`Default(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,value:t,onChange:r})}),e.jsx(o,{label:`Primary(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,primary:!0,value:t,onChange:r})}),e.jsx(o,{label:`Main(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,main:!0,value:t,onChange:r})}),e.jsx(o,{label:"Disabled",children:e.jsx(a,{...l,disabled:!0,value:t,onChange:r})})]})},i={render:f,args:{value:"1d",items:[{template:"최근 1주",value:"1W"},{template:"1개월",value:"1M"},{template:"3개월",value:"3M"}],multiSelect:!1}},m={render:f,args:{value:["italic"],items:[{template:e.jsx(n,{small:!0,children:"format_bold"}),value:"bold"},{template:e.jsx(n,{small:!0,children:"format_italic"}),value:"italic"},{template:e.jsx(n,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:e.jsx(n,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var c,u,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,x,v;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(x=m.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const W=["SingleSelect","MultiSelect"];export{m as MultiSelect,i as SingleSelect,W as __namedExportsOrder,G as default};
