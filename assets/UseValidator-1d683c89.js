import{r as o}from"./index-76fb7be0.js";function E(n,s,i,c=!0){const[u,a]=o.useState(c),[l,r]=o.useState("");return{result:u,message:l,validate:()=>{try{s==null||s.forEach(t=>{const e=t(n);if(e!==!0)throw Error(e)})}catch(t){if(t instanceof Error)return r(t.message),a(!1),t.message}return r(i||""),a(!0),!0},clearValidation:()=>{r(""),a(!0)},manualValidate:(t,e)=>{a(t),e&&r(e)}}}export{E as u};
//# sourceMappingURL=UseValidator-1d683c89.js.map