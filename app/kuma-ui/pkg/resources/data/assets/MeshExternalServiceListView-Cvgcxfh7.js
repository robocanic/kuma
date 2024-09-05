import{d as K,r,o as t,m as p,w as s,b as n,e as c,l as T,ax as B,A as N,a2 as w,t as i,c as _,L as u,p as v,M as f,E as S}from"./index-CeTpyiyE.js";import{S as E}from"./SummaryView-wGXCefwD.js";const F=K({__name:"MeshExternalServiceListView",setup(X){return(q,G)=>{const k=r("RouteTitle"),h=r("XAction"),g=r("KBadge"),y=r("KTruncate"),z=r("XActionGroup"),b=r("RouterView"),x=r("DataCollection"),C=r("DataLoader"),V=r("KCard"),A=r("AppView"),R=r("RouteView");return t(),p(R,{name:"mesh-external-service-list-view",params:{page:1,size:50,mesh:"",service:""}},{default:s(({route:o,t:d,can:D,uri:L,me:m})=>[n(k,{render:!1,title:d("services.routes.mesh-external-service-list-view.title")},null,8,["title"]),c(),n(A,{docs:d("services.mesh-external-service.href.docs")},{default:s(()=>[n(V,null,{default:s(()=>[n(C,{src:L(T(B),"/meshes/:mesh/mesh-external-services",{mesh:o.params.mesh},{page:o.params.page,size:o.params.size})},{loadable:s(({data:a})=>[n(x,{type:"services",items:(a==null?void 0:a.items)??[void 0],page:o.params.page,"page-size":o.params.size,total:a==null?void 0:a.total,onChange:o.update},{default:s(()=>[n(N,{"data-testid":"service-collection",headers:[{...m.get("headers.name"),label:"Name",key:"name"},{...m.get("headers.namespace"),label:"Namespace",key:"namespace"},...D("use zones")?[{...m.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...m.get("headers.tls"),label:"TLS",key:"tls"},{...m.get("headers.addresses"),label:"Addresses",key:"addresses"},{...m.get("headers.port"),label:"Port",key:"port"},{...m.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:a==null?void 0:a.items,"is-selected-row":e=>e.name===o.params.service,onResize:m.set},{name:s(({row:e})=>[n(w,{text:e.name},{default:s(()=>[n(h,{"data-action":"",to:{name:"mesh-external-service-summary-view",params:{mesh:e.mesh,service:e.id},query:{page:o.params.page,size:o.params.size}}},{default:s(()=>[c(i(e.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),namespace:s(({row:e})=>[c(i(e.namespace),1)]),zone:s(({row:e})=>[e.labels&&e.labels["kuma.io/origin"]==="zone"&&e.labels["kuma.io/zone"]?(t(),_(u,{key:0},[e.labels["kuma.io/zone"]?(t(),p(h,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.labels["kuma.io/zone"]}}},{default:s(()=>[c(i(e.labels["kuma.io/zone"]),1)]),_:2},1032,["to"])):v("",!0)],64)):(t(),_(u,{key:1},[c(i(d("common.detail.none")),1)],64))]),tls:s(({row:e})=>[n(g,{appearance:"neutral"},{default:s(()=>{var l;return[c(i((l=e.spec.tls)!=null&&l.enabled?"Enabled":"Disabled"),1)]}),_:2},1024)]),addresses:s(({row:e})=>[e.status.addresses.length===1?(t(),p(w,{key:0,text:e.status.addresses[0].hostname},{default:s(()=>[c(i(e.status.addresses[0].hostname),1)]),_:2},1032,["text"])):(t(),p(y,{key:1},{default:s(()=>[(t(!0),_(u,null,f(e.status.addresses,l=>(t(),_("span",{key:l.hostname},i(l.hostname),1))),128))]),_:2},1024))]),port:s(({row:e})=>[e.spec.match?(t(!0),_(u,{key:0},f([e.spec.match],l=>(t(),p(g,{key:l.port,appearance:"info"},{default:s(()=>[c(i(l.port)+"/"+i(l.protocol),1)]),_:2},1024))),128)):v("",!0)]),actions:s(({row:e})=>[n(z,null,{default:s(()=>[n(h,{to:{name:"mesh-external-service-detail-view",params:{mesh:e.mesh,service:e.id}}},{default:s(()=>[c(i(d("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),c(),a!=null&&a.items&&o.params.service?(t(),p(b,{key:0},{default:s(e=>[n(E,{onClose:l=>o.replace({name:"mesh-external-service-list-view",params:{mesh:o.params.mesh},query:{page:o.params.page,size:o.params.size}})},{default:s(()=>[(t(),p(S(e.Component),{items:a==null?void 0:a.items},null,8,["items"]))]),_:2},1032,["onClose"])]),_:2},1024)):v("",!0)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["docs"])]),_:1})}}});export{F as default};
