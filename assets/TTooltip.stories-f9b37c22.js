import{j as t}from"./jsx-runtime-ffb262ed.js";import{T as o}from"./TIcon-06114f05.js";import{T as d}from"./TButton-7c26ac9e.js";import{T as i}from"./TTooltip-db5933d8.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./UseRipple-565834b6.js";const I={title:"Guide/TTooltip",component:i},u=l=>t.jsxs(t.Fragment,{children:[t.jsx(i,{id:"common-tooltip"}),t.jsxs("div",{style:{position:"absolute",left:"calc(50% - 86px)",top:"calc(50% - 24px)"},children:[t.jsx(o,{xlarge:!0,clickable:!0,tooltipContent:"위로 뜨는 툴팁",tooltipPlace:"top",tooltipId:"common-tooltip",children:"expand_less"}),t.jsx(o,{xlarge:!0,clickable:!0,tooltipContent:"오른쪽으로 뜨는 툴팁",tooltipPlace:"right",tooltipId:"common-tooltip",children:"navigate_next"}),t.jsx(o,{xlarge:!0,clickable:!0,tooltipContent:"아래로 뜨는 툴팁",tooltipPlace:"bottom",tooltipId:"common-tooltip",children:"keyboard_arrow_down"}),t.jsx(o,{xlarge:!0,clickable:!0,tooltipContent:"왼쪽으로 뜨는 툴팁",tooltipPlace:"left",tooltipId:"common-tooltip",children:"chevron_left"}),t.jsx("br",{}),t.jsx(d,{tooltipContent:"tooltipPlace props 에 top, right, bottom, left 중 값을 입력해주세요",tooltipId:"common-tooltip",...l,children:"방향 테스트"})]})]}),e={render:u,args:{tooltipPlace:"top"}},x=l=>t.jsxs(t.Fragment,{children:[t.jsxs(i,{id:"custom-html",...l,children:[t.jsx(o,{style:{marginRight:"8px"},children:"fingerprint"})," 지문으로 인증해 주세요. 이런 식으로 툴팁 내부에 텍스트가 아닌 값을 넣을 수 있어요."]}),t.jsx(o,{xlarge:!0,clickable:!0,tooltipId:"custom-html",children:"fingerprint"})]}),r={render:x,args:{place:"top"}};var a,n,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: NormalTemplate,
  args: {
    tooltipPlace: 'top'
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var s,c,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: CustomTemplate,
  args: {
    place: 'top'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["Normal","HtmlCustom"];export{r as HtmlCustom,e as Normal,P as __namedExportsOrder,I as default};
