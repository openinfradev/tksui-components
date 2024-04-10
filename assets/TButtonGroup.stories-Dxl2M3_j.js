import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as p}from"./index-CBqU2yxZ.js";import{T as l}from"./TButtonGroup-B7fhNBwX.js";import{T as o}from"./TIcon-BNJ4MhZ5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./TButton-DTcO0l4q.js";import"./UseRipple-B0f24SXl.js";import"./uniqueId-BdmaqBQH.js";import"./toString-Biug5Hwg.js";import"./TIconButton-BtMPxq6q.js";import"./ThemeToken.module-BX06fUfM.js";import"./TDataGrid-CPeovF3S.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./TPagination-CQTFw5oV.js";import"./TNumberField-BuLgJdu3.js";import"./UseValidator-XS2alT9g.js";import"./TValidatorRule-BwpR5Vl5.js";import"./TActionBar-DQB_gbBV.js";import"./TDropHolder-CjGvY1il.js";import"./UseClickOutside-Bbiir3uY.js";import"./TSection-IZqRhGi2.js";import"./TFormSectionItem-Dzu5fbw1.js";import"./TTooltip-hEd-iOmd.js";import"./THighlightText-ySiKuYph.js";import"./TSearchBoxItem-Bb1L5QgC.js";import"./TTabItem-BNADMDmB.js";import"./TStepBox-D9Z1L6ga.js";import"./TCardContent-D9XrQ0MP.js";import"./TBadge-DTKfRUhI.js";/* empty css                      */import"./TInputValidationHint-B6k-5azr.js";import"./TProgress-DBjQsaE5.js";import"./TModal-C1yLlH0c.js";import"./TToast-B8C8rUdq.js";import"./TCheckbox-CHrz6HjB.js";import"./TCheckboxGroup-D59Ohr84.js";import"./TChip-CkXErXUr.js";import"./TDropdown-B_88Sgfs.js";import"./TTextField-C-nBWJRr.js";import"./TRadioGroup-TYSTuYq6.js";import"./TSwitch-De2qQJKg.js";import"./TTextArea-CvuaTDHk.js";import"./TDatePicker-DQqujsvi.js";import"./TPage-D7jo6jse.js";const se={title:"Button/TButtonGroup",component:l},i=({label:r,children:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{fontSize:"14px"},children:r}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:t})]}),f=r=>{const[t,h]=p.useState(r.value),a=p.useCallback(j=>{h(j)},[]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(i,{label:`Default(value: ${r.multiSelect?t.join(", "):t})`,children:e.jsx(l,{...r,value:t,onChange:a})}),e.jsx(i,{label:`Primary(value: ${r.multiSelect?t.join(", "):t})`,children:e.jsx(l,{...r,primary:!0,value:t,onChange:a})}),e.jsx(i,{label:`Main(value: ${r.multiSelect?t.join(", "):t})`,children:e.jsx(l,{...r,main:!0,value:t,onChange:a})}),e.jsx(i,{label:"Disabled",children:e.jsx(l,{...r,disabled:!0,value:t,onChange:a})})]})},m={render:f,args:{value:"1d",items:[{template:"최근 1주",value:"1W"},{template:"1개월",value:"1M"},{template:"3개월",value:"3M"}],multiSelect:!1}},n={render:f,args:{value:["italic"],items:[{template:e.jsx(o,{small:!0,children:"format_bold"}),value:"bold"},{template:e.jsx(o,{small:!0,children:"format_italic"}),value:"italic"},{template:e.jsx(o,{small:!0,children:"format_list_numbered_rtl"}),value:"ol"},{template:e.jsx(o,{small:!0,children:"format_strikethrough"}),value:"strike"}],multiSelect:!0}};var s,u,c;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
