/* empty css                      */import{f,i as m}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const i=document.querySelector("button[data-start]");i.addEventListener("click",y);u(i,!1);let a="";f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=new Date(e[0]),a<=new Date?(m.error({message:"Please choose a date in the future",timeout:2e3,position:"topRight",transitionIn:"fadeInDown",progressBar:!1}),u(i,!1)):u(i,!0)}});function u(e,r=!1){r===!1?e.setAttribute("disabled","true"):e.removeAttribute("disabled")}function p(e){const o=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:s,minutes:d,seconds:l}}function h(e){let r={};for(const n in e)e[n]<10?r[n]=e[n].toString().padStart(2,0):r[n]=e[n].toString();return r}function y(){currentDate=new Date;const e=p(a.getTime()-currentDate.getTime()),r=h(e);console.log(r)}
//# sourceMappingURL=commonHelpers.js.map