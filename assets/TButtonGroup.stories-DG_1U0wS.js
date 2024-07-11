import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{T as a}from"./TButtonGroup-CG5cLqzz.js";import{T as n}from"./TIcon-Bh5MdPWU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TIconButton-BUGIwiv4.js";import"./UseRipple-B9sLGhCT.js";import"./uniqueId-BdmaqBQH.js";import"./toString-Biug5Hwg.js";import"./index-Dk74W0Oi.js";import"./index-B8XB3FuZ.js";import"./TBadge-CoF-KBLQ.js";import"./UseValidator-o4VEqFQR.js";/* empty css                      */import"./TDropHolder-DsbBwhbz.js";import"./TPage-wmpgzsoF.js";import"./TTooltip-BABhC7Z3.js";import"./THighlightText-BwpA2dOG.js";import"./TTabItem-GvFX-zLb.js";import"./TCardContent-CysHRDzG.js";import"./TInputValidationHint-DVejngM-.js";import"./TChip-CIVAyZ_4.js";import"./TTextField-DajabmrH.js";import"./TSwitch-Bm5SUfmf.js";const H={title:"Button/TButtonGroup",component:a},o=({label:l,children:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{fontSize:"14px"},children:l}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:t})]}),f=l=>{const[t,h]=s.useState(l.value),r=s.useCallback(j=>{h(j)},[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(o,{label:`Default(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,value:t,onChange:r})}),e.jsx(o,{label:`Primary(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,primary:!0,value:t,onChange:r})}),e.jsx(o,{label:`Main(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,main:!0,value:t,onChange:r})}),e.jsx(o,{label:"Disabled",children:e.jsx(a,{...l,disabled:!0,value:t,onChange:r})})]})},i={render:f,args:{value:"1d",items:[{template:"최근 1주",value:"1W"},{template:"1개월",value:"1M"},{template:"3개월",value:"3M"}],multiSelect:!1}},m={render:f,args:{value:["italic"],items:[{template:e.jsx(n,{small:!0,children:"format_bold"}),value:"bold"},{template:e.jsx(n,{small:!0,children:"format_italic"}),value:"italic"},{template:e.jsx(n,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:e.jsx(n,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var u,c,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,x,v;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(x=m.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const J=["SingleSelect","MultiSelect"];export{m as MultiSelect,i as SingleSelect,J as __namedExportsOrder,H as default};
