import{g as u,o as h,A as d,p as f,q as g,K as y,_ as w,f as v}from"./RouteView.vue_vue_type_script_setup_true_lang-fbd72064.js";import{d as b,r as z,o as C,a as V,w as s,h as t,q as m,b as e,g as c,G as k,t as x,V as L,D as N,v as A,H as I}from"./index-73ac0e73.js";import{_ as R}from"./RouteTitle.vue_vue_type_script_setup_true_lang-0d00e209.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-367da69d.js";const T={class:"stack"},E=b({__name:"MeshListView",props:{page:{},size:{}},setup(l){const n=l,{t:o}=u();return($,M)=>{const p=z("RouterLink");return C(),V(w,{name:"mesh-list-view"},{default:s(({route:r})=>[t(h,{src:`/meshes?page=${n.page}&size=${n.size}`},{default:s(({data:a,error:_})=>[t(d,null,{title:s(()=>[m("h1",null,[t(R,{title:e(o)("meshes.routes.items.title"),render:!0},null,8,["title"])])]),default:s(()=>[c(),m("div",T,[t(e(k),null,{body:s(()=>[t(f,{class:"mesh-collection","data-testid":"mesh-collection",headers:[{label:"Name",key:"name"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":n.page,"page-size":n.size,total:a==null?void 0:a.total,items:a==null?void 0:a.items,error:_,"empty-state-message":e(o)("common.emptyState.message",{type:"Meshes"}),"empty-state-cta-to":e(o)("meshes.href.docs"),"empty-state-cta-text":e(o)("common.documentation"),onChange:r.update},{name:s(({row:i})=>[t(p,{to:{name:"mesh-detail-view",params:{mesh:i.name}}},{default:s(()=>[c(x(i.name),1)]),_:2},1032,["to"])]),actions:s(({row:i})=>[t(e(L),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:s(()=>[t(e(N),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:s(()=>[t(e(A),{color:e(g),icon:"more",size:e(y)},null,8,["color","size"])]),_:1})]),items:s(()=>[t(e(I),{item:{to:{name:"mesh-detail-view",params:{mesh:i.name}},label:e(o)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"])]),_:2},1024)])]),_:2},1024)]),_:2},1032,["src"])]),_:1})}}});const U=v(E,[["__scopeId","data-v-e70cfa66"]]);export{U as default};