import{S as a,A as d}from"./assets/vendor-584ac928.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const o=new a(".swiper",{preventInteractionOnTransition:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var l=document.querySelector(".swiper-button-prev"),u=document.querySelector(".swiper-button-next");l.disabled=!0;l.addEventListener("click",function(){o.slidePrev()});u.addEventListener("click",function(){o.slideNext()});o.on("slideChange",function(){u.disabled=!!o.isEnd,l.disabled=!!o.isBeginning});const f=new d(".accordion-container",{showMultiple:!0}),p=document.querySelectorAll(".faq-item");p.forEach(i=>{const r=i.querySelector(".ac-header"),c=i.querySelector(".ac-trigger"),n=i.querySelector(".ac-text");r.addEventListener("click",()=>{n.classList.contains("active")?f.close(n):c.click()})});
//# sourceMappingURL=commonHelpers.js.map
