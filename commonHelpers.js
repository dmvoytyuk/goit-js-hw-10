/* empty css                      */import{f as p,i as y}from"./assets/vendor-77e16229.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const a=document.querySelector("button[data-start]"),d=document.querySelector("#datetime-picker"),h={seconds:document.querySelector("span[data-seconds]"),minutes:document.querySelector("span[data-minutes]"),hours:document.querySelector("span[data-hours]"),days:document.querySelector("span[data-days]")};let c="";function u(e,t=!1){t===!1?e.setAttribute("disabled","true"):e.removeAttribute("disabled")}function l(e,t=!0){t===!1?e.setAttribute("disabled","true"):e.removeAttribute("disabled")}function g(e){const n=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:i,minutes:f,seconds:m}}function b(e){let t={};for(const o in e)e[o]<10?t[o]=e[o].toString().padStart(2,0):t[o]=e[o].toString();return t}function S(e,t){for(const o in e)t[o].textContent=e[o]}function D(){u(a,!1),l(d,!1);const e=setInterval(()=>{const t=new Date;if(c.getTime()-t.getTime()<0)clearInterval(e);else{const o=g(c.getTime()-t.getTime()),s=b(o);S(s,h)}},1e3)}l(d,!0);u(a,!1);a.addEventListener("click",D);p("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=new Date(e[0]),c<=new Date?(y.error({message:"Please choose a date in the future",timeout:2e3,position:"topRight",transitionIn:"fadeInDown",progressBar:!1}),u(a,!1)):u(a,!0)}});
//# sourceMappingURL=commonHelpers.js.map
