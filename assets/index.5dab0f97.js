import{j as N,r as m,R as C,a as E}from"./vendor.ec2483b0.js";const S=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}};S();const e=N.exports.jsx,s=N.exports.jsxs;function j(h){let a=[];for(let l=0;l<h.prop.count;l++)a.push(l);let c=a.map(l=>e("div",{style:{height:Number(h.prop.height),width:"inherit"}},l));return e("div",{className:"parent",style:{height:"inherit",width:Number(h.prop.width)},children:c})}function F(){const[h,a]=m.exports.useState(""),[c,l]=m.exports.useState(""),[t,r]=m.exports.useState(""),[n,f]=m.exports.useState([{width:0,height:0,count:0}]);function p(i,o){let d=[...n];d[i][o.target.name]=Math.floor(Number(o.target.value)),f(d);const b=n.map((u,g)=>u.height*u.count),y=n.map((u,g)=>u.width),w=(u,g)=>u+g,x=y.reduce(w);b.some(u=>u>Number(c))||x>Number(t)?(console.log("ERR SIZE"),a("Error")):a("")}function v(){let i={width:0,height:0,count:0};f([...n,i])}return s("div",{className:"container",children:[s("div",{className:"init",children:[e("label",{className:"label",children:"Ground "}),s("div",{className:"field is-grouped",children:[s("div",{className:"field",children:[e("label",{className:"label",children:"Height"}),e("div",{className:"control",children:e("input",{className:"input is-primary is-normal",type:"number",onChange:i=>l(i.target.value),name:"groundH",placeholder:"height",id:"",min:1,value:c,required:!0})})]}),s("div",{className:"field",children:[e("label",{className:"label",children:"Width"}),e("div",{className:"control",children:e("input",{className:"input is-primary is-normal",type:"number",onChange:i=>r(i.target.value),name:"groundW",placeholder:"width",id:"",value:t,min:1,required:!0})})]})]})]}),c&&t?s("div",{className:"boxes",children:[e("form",{children:n.map((i,o)=>s("div",{className:"field is-grouped",children:[s("div",{className:"field",children:[e("label",{className:"label",children:"Width"}),e("div",{className:"control",children:e("input",{name:"width",className:"input",placeholder:"Width",value:i.width,onChange:d=>p(o,d)})})]}),s("div",{className:"field",children:[e("label",{className:"label",children:"Height"}),e("div",{className:"control",children:e("input",{name:"height",className:"input",placeholder:"Height",value:i.height,onChange:d=>p(o,d)})})]}),s("div",{className:"field",children:[e("label",{className:"label",children:"Count"}),e("div",{className:"control",children:e("input",{name:"count",placeholder:"Count",value:i.count,onChange:d=>p(o,d),className:`input ${h?"invalidInput":""}`})})]})]},o))}),e("button",{className:"button is-info",onClick:v,children:"Add more +"})]}):e("div",{}),h&&e("div",{className:"error",children:"Error"}),e("div",{className:"ground",style:{height:Number(c),width:Number(t)},children:n.map((i,o)=>e(j,{prop:i},o))})]})}C.render(e(E.StrictMode,{children:e(F,{})}),document.getElementById("root"));
