function e(e,t){return new Promise(((o,n)=>{const s=Math.random()>.3;setTimeout((()=>{s?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}const t=document.querySelector(".form");t.addEventListener("submit",(o=>{o.preventDefault(),console.clear();const n=parseInt(t.elements.delay.value),s=parseInt(t.elements.step.value),l=parseInt(t.elements.amount.value);let a=n;for(let t=1;t<=l;t++){e(t,a).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),a+=s}}));
//# sourceMappingURL=03-promises.492a8ccc.js.map
