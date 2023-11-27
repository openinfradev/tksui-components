import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as a}from"./index-76fb7be0.js";import{u as C}from"./UseRipple-565834b6.js";import{u as g}from"./UseInputState-38eb87e9.js";import"./_commonjsHelpers-de833af9.js";const _=a.createContext({activeTab:0,onChangeActiveTab:null}),u=i=>{const{onChange:l,value:r,children:m,style:s,className:c}=i,o=a.useMemo(()=>{const t=[];return c&&t.push(c),t.join(" ")},[c]),b=a.useMemo(()=>s||{},[s]),T=a.useMemo(()=>{var t;return(t=m.filter((n,h)=>n.props.value?n.props.value===r:h===r)[0])==null?void 0:t.props.content},[m,r]),x=a.useCallback(t=>l(t),[l]);return e.jsxs("div",{className:`t-tab-box ${o}`,style:b,children:[e.jsx("ul",{className:"t-tab-box__tab-list",children:e.jsx(_.Provider,{value:{activeTab:r,onChangeActiveTab:x},children:m.map((t,n)=>a.cloneElement(t,{index:n,key:t.props.value||n}))})}),e.jsx("div",{className:"t-tab-box__tab-content t-tab-item-content",children:T})]})};u.defaultProps={};u.displayName="TTabBox";try{u.displayName="TTabBox",u.__docgenInfo={description:"",displayName:"TTabBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TTabBoxValue"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: TTabBoxValue) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const d=i=>{const{value:l,index:r,label:m}=i,s=a.useContext(_),c=a.useRef(null),o=C(c),b=a.useCallback(n=>{o.register(n)},[o]),T=a.useCallback(()=>{o.remove(),s.onChangeActiveTab(l||r)},[s,r,l,o]),x=a.useCallback(()=>{o.remove()},[o]),t=a.useMemo(()=>{const n=[];return(s.activeTab===l||!l&&s.activeTab===r)&&n.push("t-tab-item-label--active"),n.join(" ")},[s.activeTab,r,l]);return e.jsxs("li",{ref:c,className:`t-tab-item-label ${t}`,onMouseDown:b,onMouseUp:T,onMouseLeave:x,children:[m,e.jsx("div",{className:"t-tab-item-label__active-indicator"})]})};try{d.displayName="TTabItem",d.__docgenInfo={description:"",displayName:"TTabItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"TTabBoxValue"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"TTabBoxValue"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const I={title:"DataContainer/TTabBox",component:u},j=i=>{const l=g(0);return e.jsx(e.Fragment,{children:e.jsxs(u,{...l,...i,children:[e.jsx(d,{label:"One",content:e.jsx("div",{children:"Tab One"})}),e.jsx(d,{label:"Two",content:e.jsx("div",{children:"Tab Two"})}),e.jsx(d,{label:"Three",content:e.jsx("div",{children:"Tab Three"})})]})})},p={render:j};var f,v,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template
}`,...(y=(v=p.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const M=["Default"];export{p as Default,M as __namedExportsOrder,I as default};
//# sourceMappingURL=TTabBox.stories-7b81df47.js.map