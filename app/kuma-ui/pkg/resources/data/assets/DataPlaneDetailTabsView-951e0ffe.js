import{d as b,L as h,a7 as v,r as V,o as i,g as m,w as t,h as s,A as $,i as u,m as g,a8 as x,C as k,l as f,p as B,E as C,s as G,j as N,F as R,n as P,_ as T}from"./index-2c980e5c.js";import{N as D}from"./NavTabs-1ef0f500.js";const q=b({__name:"DataPlaneDetailTabsView",props:{isGatewayView:{type:Boolean,required:!1,default:!1}},setup(_){var w;const n=_,{t:d}=h(),y=(((w=v().getRoutes().find(e=>e.name===`${n.isGatewayView?"gateway":"data-plane"}-detail-tabs-view`))==null?void 0:w.children)??[]).map(e=>{var l,o;const c=typeof e.name>"u"?(l=e.children)==null?void 0:l[0]:e,r=c.name,a=((o=c.meta)==null?void 0:o.module)??"";return{title:d(`${n.isGatewayView?"gateways":"data-planes"}.routes.item.navigation.${r}`),routeName:r,module:a}});return(e,c)=>{const r=V("RouterView");return i(),m(T,{name:"data-plane-detail-tabs-view","data-testid":"data-plane-detail-tabs-view"},{default:t(({route:a})=>[s($,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:a.params.mesh}},text:a.params.mesh},{to:{name:`${n.isGatewayView?"gateways":"data-planes"}-list-view`,params:{mesh:a.params.mesh}},text:u(d)(`${n.isGatewayView?"gateways":"data-planes"}.routes.item.breadcrumbs`)}]},{title:t(()=>[g("h1",null,[s(x,{text:a.params.dataPlane},{default:t(()=>[s(k,{title:u(d)(`${n.isGatewayView?"gateways":"data-planes"}.routes.item.title`,{name:a.params.dataPlane}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:t(()=>[f(),s(B,{src:`/meshes/${a.params.mesh}/dataplane-overviews/${a.params.dataPlane}`},{default:t(({data:p,error:l})=>[l?(i(),m(C,{key:0,error:l},null,8,["error"])):p===void 0?(i(),m(G,{key:1})):(i(),N(R,{key:2},[s(D,{class:"route-data-plane-view-tabs",tabs:u(y)},null,8,["tabs"]),f(),s(r,null,{default:t(o=>[(i(),m(P(o.Component),{data:p},null,8,["data"]))]),_:2},1024)],64))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{q as default};