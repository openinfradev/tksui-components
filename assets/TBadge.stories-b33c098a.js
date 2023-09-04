import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";/* empty css                      */import{T as g}from"./TIcon-a8804371.js";import{T as b}from"./TNumberField-74d5b180.js";import"./_commonjsHelpers-de833af9.js";import"./UseValidator-1d683c89.js";const r=t=>{const a=l.useMemo(()=>{let n={};return t.style&&(n={...n,...t.style}),n},[t.style]),s=l.useMemo(()=>{const n=[];return t.className&&n.push(t.className),n.join(" ")},[t.className]),o=l.useMemo(()=>{const n=[];return t.dot?n.push("t-badge-content--dot"):n.push("t-badge-content--detail"),t.inline&&n.push("t-badge-content--inline"),n.join(" ")},[t.dot,t.inline]),f=l.useMemo(()=>{let n={};return t.color&&(n={...n,backgroundColor:t.color}),n},[t.color]),y=l.useMemo(()=>t.max&&t.content>t.max?`${t.max}+`:`${t.content}`,[t.content,t.max]);return e.jsxs("div",{className:`t-badge ${s}`,style:a,children:[t.children&&t.children,(t.content>0||t.content===0&&t.showZero)&&e.jsx("div",{className:`t-badge-content ${o}`,style:f,children:!t.dot&&y})]})};r.defaultProps={};try{r.displayName="TBadge",r.__docgenInfo={description:"",displayName:"TBadge",props:{max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},dot:{defaultValue:null,description:"",name:"dot",required:!1,type:{name:"boolean"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},showZero:{defaultValue:null,description:"",name:"showZero",required:!1,type:{name:"boolean"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const I={title:"Guide/TBadge",component:r},p=()=>{const[t,a]=l.useState(1),s=()=>e.jsx(g,{type:"filled",children:"notifications"});return e.jsxs(e.Fragment,{children:[e.jsx(b,{onChange:o=>a(Number.parseInt(o,10)),value:t.toString(),min:0}),e.jsx("br",{}),e.jsx("br",{}),"dot",e.jsx("br",{}),e.jsx("br",{}),e.jsx(r,{content:t,dot:!0,children:e.jsx(s,{})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"dot + showZero ",e.jsx("br",{}),e.jsx("br",{}),e.jsx(r,{content:t,dot:!0,showZero:!0,children:e.jsx(s,{})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"showZero ",e.jsx("br",{}),e.jsx("br",{}),e.jsx(r,{content:t,children:e.jsx(s,{})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"max 99 ",e.jsx("br",{}),e.jsx("br",{}),e.jsx(r,{content:t,max:99,children:e.jsx(s,{})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"max 99 + showZero",e.jsx("br",{}),e.jsx("br",{}),e.jsx(r,{content:t,max:99,showZero:!0,children:e.jsx(s,{})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"inline",e.jsx("br",{}),e.jsx("br",{}),e.jsx(r,{content:t,max:99,inline:!0,children:e.jsx(s,{})})]})},i={render:p},C=t=>{const[a,s]=l.useState(1);return e.jsxs(e.Fragment,{children:[e.jsx(b,{onChange:o=>s(Number.parseInt(o,10)),value:a.toString(),min:0}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{style:{width:"200px",border:"1px solid gray"},children:[e.jsxs("div",{style:{height:"48px",display:"flex",alignItems:"center",padding:"0 16px"},children:[e.jsx("div",{style:{flex:"1 0 auto"},children:"받은 메일함"}),e.jsx(r,{content:a,max:99,color:"#3617CE",...t})]}),e.jsxs("div",{style:{height:"48px",display:"flex",alignItems:"center",padding:"0 16px"},children:[e.jsx("div",{style:{flex:"1 0 auto"},children:"보낸 메일함"}),e.jsx(r,{content:a,max:99,color:"#3BCDC7",...t})]}),e.jsxs("div",{style:{height:"48px",display:"flex",alignItems:"center",padding:"0 16px"},children:[e.jsx("div",{style:{flex:"1 0 auto"},children:"휴지통"}),e.jsx(r,{content:a,max:99,...t})]})]})]})},d={render:C};var c,x,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template
}`,...(m=(x=i.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var u,j,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: InlineTemplate
}`,...(h=(j=d.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};const V=["WithAnchor","WithoutAnchor"];export{i as WithAnchor,d as WithoutAnchor,V as __namedExportsOrder,I as default};
//# sourceMappingURL=TBadge.stories-b33c098a.js.map
