import{d as _,u as d,r as i,v as u,o as r,j as c,b as l,g}from"./index-7c362181.js";import{_ as k}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-133f9b41.js";import{_ as w}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-6507ce20.js";import{E}from"./ErrorBlock-41d3ccd4.js";import{_ as z}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-b7beddaa.js";import{u as h}from"./store-72ab29d4.js";import{u as y}from"./index-efbce9eb.js";import"./AccordionList-e61ff40e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TextWithCopyButton-28c506a3.js";import"./kongponents.es-414449e8.js";import"./EnvoyData-ef5ed127.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-c645bc0d.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-6ef0b459.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-a2ddff1a.js";import"./TabsWidget-72787dfe.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";const B={class:"zone-details"},$={key:3,class:"kcard-border"},H=_({__name:"ZoneEgressDetailView",setup(b){const p=y(),e=d(),f=h(),o=i(null),t=i(!0),a=i(null);u(()=>e.params.mesh,function(){e.name==="zone-egress-detail-view"&&n()}),u(()=>e.params.name,function(){e.name==="zone-egress-detail-view"&&n()}),v();function v(){f.dispatch("updatePageTitle",e.params.zoneEgress),n()}async function n(){t.value=!0,a.value=null;const m=e.params.zoneEgress;try{o.value=await p.getZoneEgressOverview({name:m})}catch(s){o.value=null,s instanceof Error?a.value=s:console.error(s)}finally{t.value=!1}}return(m,s)=>(r(),c("div",B,[t.value?(r(),l(z,{key:0})):a.value!==null?(r(),l(E,{key:1,error:a.value},null,8,["error"])):o.value===null?(r(),l(w,{key:2})):(r(),c("div",$,[g(k,{"zone-egress-overview":o.value},null,8,["zone-egress-overview"])]))]))}});export{H as default};