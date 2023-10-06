import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as g}from"./index-76fb7be0.js";import{T as t}from"./TTextField-489517b1.js";import{u as _,T as a}from"./UseRefs-3912494c.js";import{u as s}from"./UseInputState-38eb87e9.js";import{T as k}from"./TButton-fdb4956a.js";import"./_commonjsHelpers-de833af9.js";import"./toString-a79d3543.js";import"./TIcon-d773ec1e.js";import"./UseValidator-1d683c89.js";import"./UseRipple-bdb3149e.js";const te={title:"Input/TTextField",component:t},L=r=>{const[l,n]=g.useState(""),i={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px"},children:"Normal"}),e.jsxs("div",{style:i,children:[e.jsx(t,{...r,value:l,onChange:n,label:"무옵션"}),e.jsx(t,{...r,value:l,onChange:n,label:"Clearable",clearable:!0}),e.jsx(t,{...r,value:l,onChange:n,label:"Required",required:!0}),e.jsx(t,{...r,value:l,onChange:n,label:"Password",password:!0,clearable:!0}),e.jsx(t,{...r,value:l,onChange:n,label:"Searchable",searchable:!0,placeholder:"검색어를 입력해주세요",clearable:!0}),e.jsx(t,{...r,value:l,onChange:n,label:"Counter",counter:20}),e.jsx(t,{...r,value:l,onChange:n,label:"Guide Message",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."}),e.jsx(t,{...r,value:"읽을 수만 있는 값",label:"Read-only",disabled:!0}),e.jsx(t,{...r,value:l,onChange:n,label:"너비-400",width:"400px"}),e.jsx(t,{...r,value:l,onChange:n,label:"너비-300",width:"300px"}),e.jsx(t,{...r,value:l,onChange:n,label:"너비-200",width:"200px"})]})]})})})},o={render:L,args:{type:"outline"}},d={render:L,args:{type:"underline",label:"Hello World"}},G=r=>{const[l,n]=g.useState(""),[i,x]=g.useState(""),m={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px"},children:"Normal, 일반 웹페이지"}),e.jsxs("div",{style:m,children:[e.jsx(t,{...r,value:l,onChange:n,label:"Trim (Default)",counter:20}),e.jsx(t,{...r,value:i,onChange:x,label:"No Trim",noTrim:!0,counter:20})]})]})})})},u={render:G,args:{type:"outline"}},E=r=>{const l=s(""),n=s(""),i=s(""),x=s(""),m=s(""),H=s(""),[h,f,y,j,b,T]=_(6),I={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"},W=()=>{h.current.validate(),f.current.validate(),y.current.validate(),j.current.validate(),b.current.validate(),T.current.validate()};return e.jsxs(e.Fragment,{children:[e.jsx(k,{main:!0,onClick:W,children:"검사"}),e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:I,children:[e.jsx(t,{...r,label:"Outline Default",rules:[a.required(),a.lengthBetween(3,12)],...l,ref:h,placeholder:"값을 입력해 주세요",counter:12}),e.jsx(t,{...r,label:"Outline Custom Long Message",rules:[a.required("에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다."),a.lengthBetween(3,12)],...n,ref:f,counter:12}),e.jsx(t,{...r,label:"Outline Success Message",rules:[a.required(),a.lengthBetween(3,12)],counter:12,...i,ref:y,successMessage:"사용할 수 있는 아이디입니다"}),e.jsx(t,{...r,label:"Underline Default",rules:[a.required(),a.lengthBetween(3,12)],counter:12,...x,ref:j,type:"underline"}),e.jsx(t,{...r,label:"Underline Custom Long Message",rules:[a.required("에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다."),a.lengthBetween(3,12)],counter:12,...m,ref:b,type:"underline"}),e.jsx(t,{...r,label:"Underline Success Message",rules:[a.required(),a.lengthBetween(3,12)],counter:12,successMessage:"사용할 수 있는 아이디입니다",...H,ref:T,type:"underline"})]})})]})},c={render:E,args:{lazy:!1,required:!0}},p={render:E,args:{lazy:!0,required:!0}};var v,C,F;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'outline'
  }
}`,...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var S,w,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    type: 'underline',
    label: 'Hello World'
  }
}`,...(V=(w=d.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var q,R,z;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: TrimTemplate,
  args: {
    type: 'outline'
  }
}`,...(z=(R=u.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var B,M,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false,
    required: true
  }
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var D,O,U;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true,
    required: true
  }
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const le=["Outline","Underline","Trim","Validation","LazyValidation"];export{p as LazyValidation,o as Outline,u as Trim,d as Underline,c as Validation,le as __namedExportsOrder,te as default};
//# sourceMappingURL=TTextField.stories-8d3131a7.js.map
