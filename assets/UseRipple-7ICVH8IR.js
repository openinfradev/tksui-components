import{r as C}from"./index-4g5l5LRQ.js";import{u as E}from"./uniqueId-M9xs3r9t.js";function R(n,t){const e=n.match(/\d+(\.\d+)?/g);return`rgb(${[Math.max(0,parseInt(e[0],10)-t),Math.max(0,parseInt(e[1],10)-t),Math.max(0,parseInt(e[2],10)-t)].join(",")})`}function x(n,t){const e=n.match(/\d+(\.\d+)?/g);return`rgb(${[Math.min(255,parseInt(e[0],10)+t),Math.min(255,parseInt(e[1],10)+t),Math.min(255,parseInt(e[2],10)+t)].join(",")})`}const I={shadeColor:R,tintColor:x},k={uniqueId:E},d="t-ripple",M="span",q=n=>{const t=C.useRef("off"),e=C.useRef();return{register:o=>{if(o.type.includes("key")){const a=o;if(a.key!=="Enter"&&a.key!==" ")return;const r=o.target.getElementsByClassName(d);if(t.current==="on"||(r==null?void 0:r.length)>0)return}t.current="on";const i=k.uniqueId(`${d}-`);e.current=new Promise(a=>{const{x:s,y:r,width:c,height:l}=n.current.getBoundingClientRect(),{clientX:y=s+c/2,clientY:f=r+l/2}=o,p=Math.sqrt(c*c+l*l),u=document.createElement(M);u.classList.add(d),u.classList.add(i);const b=window.getComputedStyle(n.current).getPropertyValue("background-color"),h={position:"absolute",top:`${(f-r-p)/l*100}%`,left:`${(y-s-p)/c*100}%`,width:`${p*2}px`,height:`${p*2}px`,opacity:"0.1",background:I.shadeColor(b,100),borderRadius:"50%",animation:"0.35s ripple linear"};Object.keys(h).forEach(g=>{u.style[g]=h[g]}),n.current.append(u),setTimeout(()=>{a(i)},350)})},remove:()=>{var o;(o=e.current)==null||o.then(i=>{var s,r;(r=((s=n.current)==null?void 0:s.getElementsByClassName(i))[0])==null||r.remove(),t.current="off"})}}};export{q as u};
