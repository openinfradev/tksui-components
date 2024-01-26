import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as h}from"./index-4g5l5LRQ.js";import{T as l}from"./TTextField-7J7mIsMe.js";import{r as s}from"./TValidatorRule-2e1-PYPO.js";import{u}from"./UseInputState-c2ZRlSca.js";import{T as U}from"./TButton-Rb7c_CsH.js";import{u as E}from"./UseRefs-Fkg0BOi5.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./toString-wsudKogf.js";import"./TIcon-TpoxWvqq.js";import"./UseValidator-M-ibdt69.js";import"./ThemeToken.module-mxnC7jdb.js";import"./UseRipple-bKa6TkVL.js";const ee={title:"Input/TTextField",component:l},A=r=>{const[t,a]=h.useState(""),[n,i,o,f]=E(4);h.useEffect(()=>{n.current.validate(),i.current.validate(),o.current.validate()},[]);const d={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"24px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px"},children:"Normal"}),e.jsxs("div",{style:d,children:[e.jsx(l,{...r,value:t,onChange:a,label:"무옵션"}),e.jsx(l,{...r,value:t,onChange:a,label:"Clearable",clearable:!0}),e.jsx(l,{...r,value:t,onChange:a,label:"Required",required:!0}),e.jsx(l,{...r,value:t,onChange:a,label:"Password",password:!0,clearable:!0}),e.jsx(l,{...r,value:t,onChange:a,label:"Searchable",searchable:!0,placeholder:"검색어를 입력해주세요",clearable:!0}),e.jsx(l,{...r,value:t,onChange:a,label:"Counter",counter:20}),e.jsx(l,{...r,value:t,onChange:a,label:"Guide Message",hint:"개수를 줄이시면 가장 마지막 호스트네임부터 삭제 됩니다."}),e.jsx(l,{...r,ref:n,value:t,onChange:a,label:"Error",rules:[s.required("이미 사용중인 네임스페이스 입니다.")],successMessage:"사용 할 수 있는 네임스페이스 입니다.",counter:200,lazy:!1,clearable:!0}),e.jsx(l,{...r,ref:i,value:t,onChange:a,rules:[()=>!0],successMessage:"사용 할 수 있는 이름 입니다.",label:"Success",lazy:!1,counter:10}),e.jsx(l,{...r,value:"입력 불가능한 값",label:"Disabled",disabled:!0}),e.jsx(l,{...r,value:"읽을 수만 있는 값",label:"Read-only",readOnly:!0}),e.jsx(l,{...r,multiline:!0,value:t,onChange:a,label:"Multi-line",rows:3}),e.jsx(l,{...r,multiline:!0,value:t,onChange:a,label:"Multi-line",rows:3}),e.jsx(l,{...r,ref:o,multiline:!0,value:t,onChange:a,label:"Multi-line - Success",rows:3,rules:[()=>!0],successMessage:"사용 할 수 있는 이름 입니다.",lazy:!1,placeholder:"placeholder",counter:10}),e.jsx(l,{...r,ref:f,multiline:!0,value:t,onChange:a,label:"Multi-line - Error",rows:3,placeholder:"placeholder",rules:[s.required("이미 사용중인 네임스페이스 입니다.")],successMessage:"사용 할 수 있는 이름 입니다.",lazy:!1,counter:10}),e.jsx(l,{...r,value:t,onChange:a,label:"너비-400",width:"400px"}),e.jsx(l,{...r,value:t,onChange:a,label:"너비-300",width:"300px"}),e.jsx(l,{...r,value:t,onChange:a,label:"너비-200",width:"200px"})]})]})})})},c={render:A,args:{label:"Hello World"}},H=r=>{const[t,a]=h.useState(""),[n,i]=h.useState(""),o={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"};return e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"20px"},children:"Normal, 일반 웹페이지"}),e.jsxs("div",{style:o,children:[e.jsx(l,{...r,value:t,onChange:a,label:"Trim (Default)",counter:20}),e.jsx(l,{...r,value:n,onChange:i,label:"No Trim",noTrim:!0,counter:20})]})]})})})},p={render:H,args:{type:"outline"}},N=r=>{const t=u(""),a=u(""),n=u(""),i=u(""),o=u(""),f=u(""),[d,g,j,b,y,T]=E(6),O={width:"500px",border:"1px solid lightgray",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column",gap:"16px"},L=()=>{d.current.validate(),g.current.validate(),j.current.validate(),b.current.validate(),y.current.validate(),T.current.validate()};return e.jsxs(e.Fragment,{children:[e.jsx(U,{main:!0,onClick:L,children:"검사"}),e.jsx("div",{style:{display:"flex",gap:"24px"},children:e.jsxs("div",{style:O,children:[e.jsx(l,{...r,label:"Outline Default",rules:[s.required(),s.lengthBetween(3,12)],...t,ref:d,placeholder:"값을 입력해 주세요",counter:12}),e.jsx(l,{...r,label:"Outline Custom Long Message",rules:[s.required("에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다."),s.lengthBetween(3,12)],...a,ref:g,counter:12}),e.jsx(l,{...r,label:"Outline Success Message",rules:[s.required(),s.lengthBetween(3,12)],counter:12,...n,ref:j,successMessage:"사용할 수 있는 아이디입니다"}),e.jsx(l,{...r,label:"Underline Default",rules:[s.required(),s.lengthBetween(3,12)],counter:12,...i,ref:b}),e.jsx(l,{...r,label:"Underline Custom Long Message",rules:[s.required("에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다. 에러 메시지가 길면 벽에 닿아서 말 줄임표로 표현됩니다."),s.lengthBetween(3,12)],counter:12,...o,ref:y}),e.jsx(l,{...r,label:"Underline Success Message",rules:[s.required(),s.lengthBetween(3,12)],counter:12,successMessage:"사용할 수 있는 아이디입니다",...f,ref:T})]})})]})},x={render:N,args:{lazy:!1,required:!0}},m={render:N,args:{lazy:!0,required:!0}};var C,v,F;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    label: 'Hello World'
  }
}`,...(F=(v=c.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var w,S,M;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: TrimTemplate,
  args: {
    type: 'outline'
  }
}`,...(M=(S=p.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var q,R,z;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: false,
    required: true
  }
}`,...(z=(R=x.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var V,D,B;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: ValidationTemplate,
  args: {
    lazy: true,
    required: true
  }
}`,...(B=(D=m.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const re=["Default","Trim","Validation","LazyValidation"];export{c as Default,m as LazyValidation,p as Trim,x as Validation,re as __namedExportsOrder,ee as default};
