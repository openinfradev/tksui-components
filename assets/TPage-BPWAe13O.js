import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as n}from"./index-CBqU2yxZ.js";import{T as _}from"./TIcon-DX3nHo9a.js";const p="360px",l=e=>{const[i,s]=n.useState(!1),[o,r]=n.useState(!1),[g,d]=n.useState(p),m=n.useRef(null),h=n.useCallback(()=>{s(!1)},[]),v=a=>{a.stopPropagation();const c=u=>{const f=window.innerWidth-u.pageX;if(r(!0),f<=700){const y=m.current.getBoundingClientRect().x;d(`calc(100% - ${u.pageX-y}px)`)}f<=200&&(d(p),s(!1),document.removeEventListener("mousemove",c))},j=()=>{document.removeEventListener("mousemove",c),r(!1)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",j,{once:!0})},x=n.useMemo(()=>{const a=[];return e.className&&a.push(e.className),o&&a.push("t-page--resizing"),a.join(" ")},[o,e.className]),N=n.useMemo(()=>{const a=[];return i?a.push("t-page__information-area--visible"):a.push("t-page__information-area--invisible"),o&&a.push("t-page__information-area--resizing"),a.join(" ")},[i,o]),P=n.useMemo(()=>`t-page__content-area--direction-${e.contentDirection}`,[e.contentDirection]);return n.useEffect(()=>{i&&(s(!0),r(!1))},[i]),t.jsxs("div",{className:`t-page ${x}`,style:e.style,ref:m,id:e.id,"data-testid":"t-page-root",children:[t.jsxs("div",{className:"t-page__content-container",children:[t.jsxs("div",{className:"t-page__title-area",children:[t.jsx("h3",{className:"t-page__title-area__title",children:e.title}),e.infoPanelContent&&t.jsx(_,{fill:!0,clickable:!0,onClick:()=>{s(!i)},children:"info"})]}),t.jsx("article",{className:`t-page__content-area ${P}`,children:e.children})]}),e.infoPanelContent&&t.jsxs("div",{className:`t-page__information-area ${N}`,style:i?{flex:`0 0 ${g}`}:{},"data-testid":"t-page-information-area",children:[i&&t.jsx("div",{className:"t-page__information-area__resizer",onMouseDown:v,"data-testid":"t-page-information-area-resizer"}),t.jsxs("div",{className:"t-page__information-area__container",children:[t.jsx("div",{className:"t-page__information-area__header",children:t.jsx(_,{className:"t-page__information-area__header__close",clickable:!0,onClick:h,children:"close"})}),t.jsx("div",{className:"t-page__information-area__content",children:e.infoPanelContent})]})]})]})};l.defaultProps={contentDirection:"top-bottom"};l.displayName="TPage";try{l.displayName="TPage",l.__docgenInfo={description:"",displayName:"TPage",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},infoPanelContent:{defaultValue:null,description:"",name:"infoPanelContent",required:!1,type:{name:"ReactNode"}},contentDirection:{defaultValue:{value:"top-bottom"},description:"",name:"contentDirection",required:!1,type:{name:"enum",value:[{value:'"top-bottom"'},{value:'"left-right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{l as T};