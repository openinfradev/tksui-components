import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r as a}from"./index-4g5l5LRQ.js";import{T as r,a as l,b as i}from"./TCardContent-7pJeZO8i.js";import{T as c}from"./TTooltip-U4fkG3S2.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./TIcon-Vi1lColy.js";const f={title:"DataContainer/TCard",component:r},s=({children:e,label:m})=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:[m&&o.jsx("p",{style:{fontSize:"14px"},children:m}),o.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",width:"100%"},children:e})]}),x=e=>{const[m,d]=a.useState("");return o.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"20px",flexDirection:"column"},children:[o.jsx(c,{id:"card-tooltip"}),o.jsxs(s,{label:"Normal / Normal Dashed",children:[o.jsx(r,{...e,width:"200px",height:"200px"}),o.jsx(r,{...e,width:"200px",height:"200px",dashed:!0})]}),o.jsx(s,{label:"Normal with alone Header",children:o.jsx(r,{...e,type:"blue",children:o.jsx(l,{title:"AWS",subTitle:"Lorem ipsum dolor sit"})})}),o.jsx(s,{label:"Normal with alone Content",children:o.jsx(r,{...e,children:o.jsx(i,{children:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"})})}),o.jsxs(s,{label:"Clickable",children:[o.jsxs(r,{...e,clickable:!0,onClick:()=>d("1"),width:"300px",selected:m==="1",children:[o.jsx(l,{title:"AWS",subTitle:"Lorem ipsum dolor sit"}),o.jsx(i,{children:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"})]}),o.jsxs(r,{...e,clickable:!0,onClick:()=>d("2"),width:"300px",selected:m==="2",children:[o.jsx(l,{title:"AWS",subTitle:"Lorem ipsum dolor sit"}),o.jsx(i,{children:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"})]})]}),o.jsxs(s,{label:"Only Text / Card Icon + Text / Header Icon + Text",children:[o.jsxs(r,{...e,width:"343px",children:[o.jsx(l,{title:"title",subTitle:"Sub Title"}),o.jsx(i,{children:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"})]}),o.jsxs(r,{...e,width:"343px",icon:"edit",iconSize:"large",iconColor:"#3617CE",children:[o.jsx(l,{title:"title",subTitle:"Sub Title"}),o.jsx(i,{children:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"})]}),o.jsxs(r,{...e,width:"343px",children:[o.jsx(l,{title:"title",subTitle:"Sub Title",icon:"alarm",iconColor:"violet"}),o.jsx(i,{children:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"})]})]}),o.jsx(s,{label:"Widget Card",children:o.jsx(r,{...e,width:360,height:240,dashed:!0,center:!0,icon:"add",iconSize:"large",iconColor:"#71747A",clickable:!0})})]})},t={render:x,args:{}};var p,u,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(n=(u=t.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,f as default};