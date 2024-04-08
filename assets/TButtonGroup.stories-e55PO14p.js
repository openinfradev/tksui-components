import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as p}from"./index-CBqU2yxZ.js";import{T as l}from"./TButtonGroup-XVw6cmkP.js";import{T as o}from"./TIcon-DX3nHo9a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TButton-CY0yEcNN.js";import"./UseRipple-B0f24SXl.js";import"./uniqueId-BdmaqBQH.js";import"./toString-Biug5Hwg.js";import"./TIconButton-DkgXVGIn.js";import"./ThemeToken.module-BX06fUfM.js";import"./TDataGrid-CnmWmOjf.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./TPagination-Bki_S1qz.js";import"./TNumberField-BuLgJdu3.js";import"./UseValidator-XS2alT9g.js";import"./TValidatorRule-BwpR5Vl5.js";import"./TActionBar-DQB_gbBV.js";import"./TDropHolder-C0JHXJKJ.js";import"./UseClickOutside-Bbiir3uY.js";import"./TSection-IZqRhGi2.js";import"./TFormSectionItem-DE9Of4FT.js";import"./TTooltip-hEd-iOmd.js";import"./THighlightText-ySiKuYph.js";import"./TSearchBoxItem-DqPCw8W8.js";import"./TTabItem-BNADMDmB.js";import"./TStepBox-C9RDjbEV.js";import"./TCardContent-BYDJa0uB.js";import"./TBadge-DTKfRUhI.js";/* empty css                      */import"./TInputValidationHint-B6k-5azr.js";import"./TProgress-CiK0FHzT.js";import"./TModal-CYAQwdiE.js";import"./TToast-B8C8rUdq.js";import"./TCheckbox-e-mXbj8-.js";import"./TCheckboxGroup-DtirqzPH.js";import"./TChip-CPnBRrCx.js";import"./TDropdown-rTlLuJj1.js";import"./TTextField-CalRg7Q_.js";import"./TRadioGroup-xwDlibt5.js";import"./TSwitch-De2qQJKg.js";import"./TTextArea-CvuaTDHk.js";import"./TDatePicker-yk0Fro-g.js";import"./TPage-BPWAe13O.js";const se={title:"Button/TButtonGroup",component:l},i=({label:r,children:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{fontSize:"14px"},children:r}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:t})]}),f=r=>{const[t,h]=p.useState(r.value),a=p.useCallback(j=>{h(j)},[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(i,{label:`Default(value: ${r.multiSelect?t.join(", "):t})`,children:e.jsx(l,{...r,value:t,onChange:a})}),e.jsx(i,{label:`Primary(value: ${r.multiSelect?t.join(", "):t})`,children:e.jsx(l,{...r,primary:!0,value:t,onChange:a})}),e.jsx(i,{label:`Main(value: ${r.multiSelect?t.join(", "):t})`,children:e.jsx(l,{...r,main:!0,value:t,onChange:a})}),e.jsx(i,{label:"Disabled",children:e.jsx(l,{...r,disabled:!0,value:t,onChange:a})})]})},m={render:f,args:{value:"1d",items:[{template:"최근 1주",value:"1W"},{template:"1개월",value:"1M"},{template:"3개월",value:"3M"}],multiSelect:!1}},n={render:f,args:{value:["italic"],items:[{template:e.jsx(o,{small:!0,children:"format_bold"}),value:"bold"},{template:e.jsx(o,{small:!0,children:"format_italic"}),value:"italic"},{template:e.jsx(o,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:e.jsx(o,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var s,u,c;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(u=m.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,x,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const ue=["SingleSelect","MultiSelect"];export{n as MultiSelect,m as SingleSelect,ue as __namedExportsOrder,se as default};
