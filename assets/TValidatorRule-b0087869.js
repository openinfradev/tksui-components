const u={requiredArr(e){return r=>(r.length>0||e)??"1개 이상 선택해 주세요"},required(e){return r=>(!!r||e)??"값을 입력해 주세요"},lengthMin(e,r){return t=>(t.length>=e||r)??`${e}자 이상 입력해 주세요`},lengthMax(e,r){return t=>(t.length<=e||r)??`${e}자 이내로 입력해 주세요`},lengthBetween(e,r,t){return n=>(n.length>=e&&n.length<=r||t)??`${e}-${r}자 사이로 입력해 주세요`},valueMin(e,r){return t=>(Number.parseInt(t,10)>=e||r)??`${e} 이상으로 입력해 주세요`},valueMax(e,r){return t=>(Number.parseInt(t,10)<=e||r)??`${e} 이하로 입력해 주세요`},valueBetween(e,r,t){return n=>(Number.parseInt(n,10)>=e&&Number.parseInt(n,10)<=r||t)??`${e}-${r} 사이로 입력해 주세요`},valueSpecified(e,r){return t=>(e.some(n=>n===Number.parseInt(t,10))||r)??`[${e.join(", ")}] 중 선택해 주세요`},equal(e,r){return t=>(t===e||r)??"올바른 값을 입력해 주세요"},email(e){const r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return t=>(r.test(t)||e)??"올바른 형태의 이메일을 입력해 주세요"},regexp(e,r){return t=>(e.test(t)||r)??"값을 규칙에 맞게 입력해 주세요"}};export{u as r};
