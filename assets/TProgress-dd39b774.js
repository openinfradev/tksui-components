import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as t}from"./index-76fb7be0.js";import{T as i}from"./TModal-0e069f15.js";function r(e){const l=t.useMemo(()=>{const a=[];return e.className&&a.push(e.className),a.join(" ")},[e.className]),n=t.useMemo(()=>{let a={};return e.style&&(a={...e.style}),a},[e.style]);return s.jsxs(i,{containerId:e.containerId,isOpen:e.isOpen,onRequestClose:e.onRequestClose,className:`t-progress ${l}`,style:n,overlayClassName:"t-progress__overlay",bodyClassName:"t-progress__modal-body",children:[s.jsxs("div",{className:"t-progress__spinner",children:[s.jsx("div",{className:"t-progress__spinner__slice"}),s.jsx("div",{className:"t-progress__spinner__slice"}),s.jsx("div",{className:"t-progress__spinner__slice"})]}),s.jsx("div",{className:"t-progress__message",children:e.message})]})}r.defaultProps={message:"잠시만 기다려 주십시오",containerId:"root"};try{r.displayName="TProgress",r.__docgenInfo={description:"",displayName:"TProgress",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"",name:"onRequestClose",required:!1,type:{name:"() => void"}},message:{defaultValue:{value:"잠시만 기다려 주십시오"},description:"",name:"message",required:!1,type:{name:"string"}},containerId:{defaultValue:{value:"root"},description:"",name:"containerId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}export{r as T};
