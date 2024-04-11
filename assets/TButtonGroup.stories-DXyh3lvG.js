import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as p}from"./index-CBqU2yxZ.js";import{T as l}from"./TButtonGroup-DL6nsoed.js";import{T as o}from"./TIcon-EWWlP-3y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TButton-DUlY-K2D.js";import"./UseRipple-B0f24SXl.js";import"./uniqueId-BdmaqBQH.js";import"./toString-Biug5Hwg.js";import"./TSpinner-c3-0io3m.js";import"./ThemeToken.module-BX06fUfM.js";import"./TIconButton-C7c11qDl.js";import"./TDataGrid-C4WOVFjv.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./TPagination-BYqDZg3p.js";import"./TNumberField-BuLgJdu3.js";import"./UseValidator-XS2alT9g.js";import"./TValidatorRule-BwpR5Vl5.js";import"./TActionBar-DQB_gbBV.js";import"./TDropHolder-CM_sgaBQ.js";import"./UseClickOutside-Bbiir3uY.js";import"./TSection-IZqRhGi2.js";import"./TFormSectionItem-B1CpJEja.js";import"./TTooltip-hEd-iOmd.js";import"./THighlightText-ySiKuYph.js";import"./TSearchBoxItem-BLIl8FvR.js";import"./TTabItem-BNADMDmB.js";import"./TStepBox-DIv_3BJJ.js";import"./TCardContent-Du16KiJS.js";import"./TBadge-DTKfRUhI.js";/* empty css                      */import"./TInputValidationHint-B6k-5azr.js";import"./TProgress-CiGgQlFd.js";import"./TModal-Dy9NsabF.js";import"./TToast-B8C8rUdq.js";import"./TCheckbox-_luUXGq9.js";import"./TCheckboxGroup-Bqaefv98.js";import"./TChip-CaCqlvuZ.js";import"./TDropdown-Bc_fCn6G.js";import"./TTextField-BjgZW2WT.js";import"./TRadioGroup-MEYiqtT_.js";import"./TSwitch-De2qQJKg.js";import"./TTextArea-CvuaTDHk.js";import"./TDatePicker-CfoARQ5q.js";import"./TPage-DmNbUUB-.js";const ue={title:"Button/TButtonGroup",component:l},i=({label:r,children:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{fontSize:"14px"},children:r}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:t})]}),f=r=>{const[t,h]=p.useState(r.value),a=p.useCallback(j=>{h(j)},[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(i,{label:`Default(value: ${r.multiSelect?t.join(", "):t})`,children:e.jsx(l,{...r,value:t,onChange:a})}),e.jsx(i,{label:`Primary(value: ${r.multiSelect?t.join(", "):t})`,children:e.jsx(l,{...r,primary:!0,value:t,onChange:a})}),e.jsx(i,{label:`Main(value: ${r.multiSelect?t.join(", "):t})`,children:e.jsx(l,{...r,main:!0,value:t,onChange:a})}),e.jsx(i,{label:"Disabled",children:e.jsx(l,{...r,disabled:!0,value:t,onChange:a})})]})},m={render:f,args:{value:"1d",items:[{template:"최근 1주",value:"1W"},{template:"1개월",value:"1M"},{template:"3개월",value:"3M"}],multiSelect:!1}},n={render:f,args:{value:["italic"],items:[{template:e.jsx(o,{small:!0,children:"format_bold"}),value:"bold"},{template:e.jsx(o,{small:!0,children:"format_italic"}),value:"italic"},{template:e.jsx(o,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:e.jsx(o,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var s,u,c;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const ce=["SingleSelect","MultiSelect"];export{n as MultiSelect,m as SingleSelect,ce as __namedExportsOrder,ue as default};
