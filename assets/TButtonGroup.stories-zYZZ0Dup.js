import{j as e}from"./jsx-runtime-Cdt8AxIN.js";import{r as s}from"./index-UfW7PFvU.js";import{T as a}from"./TButtonGroup-Cx74v2qO.js";import{T as n}from"./TIcon-eN_VrG1x.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TIconButton-x198CyLQ.js";import"./UseRipple-COsNAeZB.js";import"./uniqueId-BdmaqBQH.js";import"./toString-Biug5Hwg.js";import"./ThemeToken.module-BX06fUfM.js";import"./index-Dk74W0Oi.js";import"./index-vYzv6AEf.js";import"./TBadge-DAhhOFyO.js";import"./UseValidator-BCvboljs.js";/* empty css                      */import"./TDropHolder-xIvW_HPG.js";import"./TPage-DSB64qq6.js";import"./TTooltip-6YPFHCmL.js";import"./THighlightText-7zs6zJAi.js";import"./TTabItem-DBd6CMqy.js";import"./TCardContent-BHoepR3f.js";import"./TInputValidationHint-Crxa6CXA.js";import"./TChip-CYyGuSQu.js";import"./TTextField-Pn5wEzo8.js";import"./TSwitch-DFHTgJad.js";const J={title:"Button/TButtonGroup",component:a},o=({label:l,children:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{fontSize:"14px"},children:l}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:t})]}),f=l=>{const[t,h]=s.useState(l.value),r=s.useCallback(j=>{h(j)},[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(o,{label:`Default(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,value:t,onChange:r})}),e.jsx(o,{label:`Primary(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,primary:!0,value:t,onChange:r})}),e.jsx(o,{label:`Main(value: ${l.multiSelect?t.join(", "):t})`,children:e.jsx(a,{...l,main:!0,value:t,onChange:r})}),e.jsx(o,{label:"Disabled",children:e.jsx(a,{...l,disabled:!0,value:t,onChange:r})})]})},i={render:f,args:{value:"1d",items:[{template:"최근 1주",value:"1W"},{template:"1개월",value:"1M"},{template:"3개월",value:"3M"}],multiSelect:!1}},m={render:f,args:{value:["italic"],items:[{template:e.jsx(n,{small:!0,children:"format_bold"}),value:"bold"},{template:e.jsx(n,{small:!0,children:"format_italic"}),value:"italic"},{template:e.jsx(n,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:e.jsx(n,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var u,p,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,x,v;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(x=m.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const K=["SingleSelect","MultiSelect"];export{m as MultiSelect,i as SingleSelect,K as __namedExportsOrder,J as default};
