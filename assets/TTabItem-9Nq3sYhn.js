import{j as i}from"./jsx-runtime-vNq4Oc-g.js";import{r as a}from"./index-4g5l5LRQ.js";import{u as x}from"./UseRipple-7ICVH8IR.js";const T=a.createContext({activeTab:0,onChangeActiveTab:null}),m=u=>{const{onChange:s,value:n,children:c,style:l,className:r}=u,o=a.useMemo(()=>{const e=[];return r&&e.push(r),e.join(" ")},[r]),p=a.useMemo(()=>l||{},[l]),d=a.useMemo(()=>{var e;return(e=c.filter((t,v)=>t.props.value?t.props.value===n:v===n)[0])==null?void 0:e.props.content},[c,n]),b=a.useCallback(e=>s(e),[s]);return i.jsxs("div",{className:`t-tab-box ${o}`,style:p,children:[i.jsx("ul",{className:"t-tab-box__tab-list",children:i.jsx(T.Provider,{value:{activeTab:n,onChangeActiveTab:b},children:c.map((e,t)=>a.cloneElement(e,{index:t,key:e.props.value||t}))})}),i.jsx("div",{className:"t-tab-box__tab-content t-tab-item-content",children:d})]})};m.defaultProps={};m.displayName="TTabBox";try{m.displayName="TTabBox",m.__docgenInfo={description:"",displayName:"TTabBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TTabBoxValue"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: TTabBoxValue) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const f=u=>{const{value:s,index:n,label:c}=u,l=a.useContext(T),r=a.useRef(null),o=x(r),p=a.useCallback(t=>{o.register(t)},[o]),d=a.useCallback(()=>{o.remove(),l.onChangeActiveTab(s||n)},[l,n,s,o]),b=a.useCallback(()=>{o.remove()},[o]),e=a.useMemo(()=>{const t=[];return(l.activeTab===s||!s&&l.activeTab===n)&&t.push("t-tab-item-label--active"),t.join(" ")},[l.activeTab,n,s]);return i.jsxs("li",{ref:r,className:`t-tab-item-label ${e}`,onMouseDown:p,onMouseUp:d,onMouseLeave:b,children:[c,i.jsx("div",{className:"t-tab-item-label__active-indicator"})]})};try{f.displayName="TTabItem",f.__docgenInfo={description:"",displayName:"TTabItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"TTabBoxValue"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"TTabBoxValue"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}export{m as T,f as a};
