import{d as f,v as p,r as d,o as i,a as c,w as n,h as a,b as h,g as v,i as w}from"./index-236ce8af.js";import{i as R,f as b,_ as C}from"./RouteView.vue_vue_type_script_setup_true_lang-9d07ccf3.js";import{N}from"./NavTabs-c236eca4.js";import"./kongponents.es-062e0284.js";const D=f({__name:"MeshView",setup(V){var r;const l=R(),_=(((r=p().getRoutes().find(e=>e.name==="mesh-detail-view"))==null?void 0:r.children)??[]).map(e=>{var m,u;const s=typeof e.name>"u"?(m=e.children)==null?void 0:m[0]:e,t=s.name,o=((u=s.meta)==null?void 0:u.module)??"";return{title:l.t(`meshes.routes.item.navigation.${t}`),routeName:t,module:o}});return(e,s)=>{const t=d("RouterView");return i(),c(C,null,{default:n(()=>[a(b,null,{default:n(()=>[a(N,{class:"route-mesh-view-tabs",tabs:h(_)},null,8,["tabs"]),v(),a(t,null,{default:n(o=>[(i(),c(w(o.Component),{key:o.route.path}))]),_:1})]),_:1})]),_:1})}}});export{D as default};