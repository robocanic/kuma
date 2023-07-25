import{J as u,D as d,T as h,u as f,a as b}from"./kongponents.es-cb60a408.js";import{A as g,_ as w}from"./DataSource.vue_vue_type_script_setup_true_lang-0d8526cf.js";import{g as y,A as v,_ as k,f as V}from"./RouteView.vue_vue_type_script_setup_true_lang-f43ad4b4.js";import{_ as x}from"./RouteTitle.vue_vue_type_script_setup_true_lang-d51da5f6.js";import{d as z,r as C,o as L,a as A,w as e,h as s,b as t,q as n,g as r,t as M}from"./index-8cf34a8f.js";const $={class:"stack"},N=z({__name:"MeshListView",props:{page:{},size:{}},setup(l){const o=l,{t:i}=y();return(B,D)=>{const c=C("RouterLink");return L(),A(k,{name:"mesh-list-view"},{default:e(({route:p})=>[s(w,{src:`/meshes?page=${o.page}&size=${o.size}`},{default:e(({data:a,error:_})=>[s(v,{breadcrumbs:[{to:{name:"mesh-list-view"},text:t(i)("meshes.routes.items.breadcrumbs")}]},{title:e(()=>[n("h1",null,[s(x,{title:t(i)("meshes.routes.items.title"),render:!0},null,8,["title"])])]),default:e(()=>[r(),n("div",$,[s(t(u),null,{body:e(()=>[s(g,{class:"mesh-collection","data-testid":"mesh-collection","empty-state-title":t(i)("common.emptyState.title"),"empty-state-message":t(i)("common.emptyState.message",{type:"Meshes"}),headers:[{label:"Name",key:"name"},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":o.page,"page-size":o.size,total:a==null?void 0:a.total,items:a==null?void 0:a.items,error:_,onChange:p.update},{name:e(({row:m})=>[s(c,{to:{name:"mesh-detail-view",params:{mesh:m.name}}},{default:e(()=>[r(M(m.name),1)]),_:2},1032,["to"])]),actions:e(({row:m})=>[s(t(d),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[s(t(h),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:e(()=>[s(t(f),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:e(()=>[s(t(b),{item:{to:{name:"mesh-detail-view",params:{mesh:m.name}},label:"View"}},null,8,["item"])]),_:2},1024)]),_:2},1032,["empty-state-title","empty-state-message","page-number","page-size","total","items","error","onChange"])]),_:2},1024)])]),_:2},1032,["breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});const q=V(N,[["__scopeId","data-v-881302ed"]]);export{q as default};