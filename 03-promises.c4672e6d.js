var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("iQIUW");const r=document.querySelector(".js-promise-btn"),l=document.querySelector(".form");r.addEventListener("click",(function(e){e.preventDefault();const o=new FormData(l),t=o.get("delay"),n=o.get("step"),r=o.get("amount");let s=0;setTimeout((()=>{intervalId=setInterval(((e,o)=>{if(s<r)return s+=1,void function(e,o){const t=Math.random()>.3;return new Promise(((n,i)=>{t?n({position:e,delay:o}):i({position:e,delay:o})}))}(e,o).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}));clearInterval(intervalId)}),n)}),t)}));
//# sourceMappingURL=03-promises.c4672e6d.js.map
