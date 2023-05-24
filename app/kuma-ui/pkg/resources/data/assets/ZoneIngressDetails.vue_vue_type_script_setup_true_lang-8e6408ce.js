import{A as w,a as k}from"./AccordionList-e61ff40e.js";import{T as p,a as b,D}from"./TextWithCopyButton-28c506a3.js";import{E as c}from"./EnvoyData-ef5ed127.js";import{_ as O,S as B}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-a2ddff1a.js";import{T as C}from"./TabsWidget-72787dfe.js";import{d as S,c as m,x as T,o as t,b as l,w as e,i as q,h as d,g as s,t as h,j as v,q as y,F as g}from"./index-7c362181.js";const A={class:"entity-heading"},F=S({__name:"ZoneIngressDetails",props:{zoneIngressOverview:{type:Object,required:!0}},setup(_){const u=_,f=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Ingress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],z=m(()=>({name:"zone-ingress-detail-view",params:{zoneIngress:u.zoneIngressOverview.name}})),n=m(()=>{const{type:i,name:a}=u.zoneIngressOverview;return{type:i,name:a}}),I=m(()=>{var a;const i=((a=u.zoneIngressOverview.zoneIngressInsight)==null?void 0:a.subscriptions)??[];return Array.from(i).reverse()});return(i,a)=>{const x=T("router-link");return t(),l(C,{tabs:f},{tabHeader:e(()=>[q("h1",A,[d(`
        Zone Ingress:

        `),s(p,{text:n.value.name},{default:e(()=>[s(x,{to:z.value},{default:e(()=>[d(h(n.value.name),1)]),_:1},8,["to"])]),_:1},8,["text"])])]),overview:e(()=>[s(D,null,{default:e(()=>[(t(!0),v(g,null,y(n.value,(o,r)=>(t(),l(b,{key:r,term:r},{default:e(()=>[r==="name"?(t(),l(p,{key:0,text:o},null,8,["text"])):(t(),v(g,{key:1},[d(h(o),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),insights:e(()=>[s(k,{"initially-open":0},{default:e(()=>[(t(!0),v(g,null,y(I.value,(o,r)=>(t(),l(w,{key:r},{"accordion-header":e(()=>[s(O,{details:o},null,8,["details"])]),"accordion-content":e(()=>[s(B,{details:o,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),"xds-configuration":e(()=>[s(c,{"data-path":"xds","zone-ingress-name":n.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-stats":e(()=>[s(c,{"data-path":"stats","zone-ingress-name":n.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-clusters":e(()=>[s(c,{"data-path":"clusters","zone-ingress-name":n.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),_:1})}}});export{F as _};