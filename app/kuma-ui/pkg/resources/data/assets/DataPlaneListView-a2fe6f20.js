import{d as m,L as g,o as n,g as r,w as s,h as i,p as f,A as h,m as y,C as z,i as p,l as b,a2 as k,E as q,_ as v,q as w}from"./index-2c980e5c.js";import{D as C,K as V}from"./KFilterBar-a264b9bc.js";import"./dataplane-30467516.js";const $=m({__name:"DataPlaneListView",props:{page:{},size:{},search:{},query:{},mesh:{}},setup(c){const e=c,{t:u}=g();return(d,x)=>(n(),r(v,{name:"data-planes-list-view"},{default:s(({route:o})=>[i(f,{src:`/meshes/${e.mesh}/dataplanes?page=${e.page}&size=${d.size}&search=${e.search}`},{default:s(({data:a,error:l})=>[i(h,null,{title:s(()=>[y("h2",null,[i(z,{title:p(u)("data-planes.routes.items.title"),render:!0},null,8,["title"])])]),default:s(()=>[b(),i(p(k),null,{body:s(()=>[l!==void 0?(n(),r(q,{key:0,error:l},null,8,["error"])):(n(),r(C,{key:1,"data-testid":"data-plane-collection",class:"data-plane-collection","page-number":e.page,"page-size":e.size,total:a==null?void 0:a.total,items:a==null?void 0:a.items,error:l,onChange:({page:t,size:_})=>{o.update({page:String(t),size:String(_)})}},{toolbar:s(()=>[i(V,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:e.query,fields:{name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:t=>o.update({query:t.query,s:t.query.length>0?JSON.stringify(t.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"])]),_:2},1032,["page-number","page-size","total","items","error","onChange"]))]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1}))}});const N=w($,[["__scopeId","data-v-ed46ed4e"]]);export{N as default};