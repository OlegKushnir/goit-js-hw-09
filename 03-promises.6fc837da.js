var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){i[e]=o},e.parcelRequired7c6=t);var n=t("iQIUW");const l=document.querySelector(".js-promise-btn"),r=document.querySelector(".form");function s(e,o){const i=Math.random()>.3;return new Promise(((t,n)=>{i?t({position:e,delay:o}):n({position:e,delay:o})}))}l.addEventListener("click",(function(e){e.preventDefault();const o=new FormData(r);let i=Number(o.get("delay"));const t=Number(o.get("step")),l=Number(o.get("amount"));let d=1;setTimeout((()=>{s(d,i).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),i+=t;let e=setInterval((()=>{if(d<l)return d+=1,s(d,i).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),void(i+=t);clearInterval(e)}),t)}),i)}));
//# sourceMappingURL=03-promises.6fc837da.js.map
