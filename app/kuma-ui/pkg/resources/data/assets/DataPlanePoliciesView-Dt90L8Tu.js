import{A as F,a as G}from"./AccordionList-Pegay9b0.js";import{d as O,a as b,o as e,c as t,m as i,f as s,F as o,D as h,t as d,e as n,w as a,q as N,b as g,U as Y,s as J,v as M,_ as T,p as S,l as Q,n as W}from"./index-kNITWRcL.js";import{C as x}from"./CodeBlock-DFFWuXZY.js";import{P as H}from"./PolicyTypeTag-DvZP1wl0.js";import{T as D}from"./TagList-C4jQjMfB.js";import{t as U}from"./toYaml-DB9FPXFY.js";import{A as X}from"./AppCollection-DDGXlrXy.js";import{R as Z}from"./RuleMatchers-Caz7UEO_.js";const A=v=>(J("data-v-184c6d72"),v=v(),M(),v),E={class:"policies-list"},ee={class:"mesh-gateway-policy-list"},te=A(()=>i("h3",{class:"mb-2"},`
        Gateway policies
      `,-1)),ae={key:0},se=A(()=>i("h3",{class:"mt-6 mb-2"},`
        Listeners
      `,-1)),le=A(()=>i("b",null,"Host",-1)),ne=A(()=>i("h4",{class:"mt-2 mb-2"},`
                Routes
              `,-1)),oe={class:"dataplane-policy-header"},ie=A(()=>i("b",null,"Route",-1)),ce=A(()=>i("b",null,"Service",-1)),re={key:0,class:"badge-list"},ue={class:"mt-1"},de=O({__name:"BuiltinGatewayPolicies",props:{gatewayDataplane:{},types:{}},setup(v){const $=v;return(P,B)=>{const L=b("RouterLink"),w=b("KBadge");return e(),t("div",E,[i("div",ee,[te,s(),P.gatewayDataplane.routePolicies.length>0?(e(),t("ul",ae,[(e(!0),t(o,null,h(P.gatewayDataplane.routePolicies,(l,c)=>{var p;return e(),t("li",{key:c},[i("span",null,d(l.type),1),s(`:

          `),n(L,{to:{name:"policy-detail-view",params:{mesh:l.mesh,policyPath:((p=$.types[l.type])==null?void 0:p.path)??"",policy:l.name}}},{default:a(()=>[s(d(l.name),1)]),_:2},1032,["to"])])}),128))])):N("",!0),s(),se,s(),i("div",null,[(e(!0),t(o,null,h(P.gatewayDataplane.listenerEntries,(l,c)=>(e(),t("div",{key:c},[i("div",null,[i("div",null,[le,s(": "+d(l.hostName)+":"+d(l.port)+" ("+d(l.protocol)+`)
            `,1)]),s(),l.routeEntries.length>0?(e(),t(o,{key:0},[ne,s(),n(G,{"initially-open":[],"multiple-open":""},{default:a(()=>[(e(!0),t(o,null,h(l.routeEntries,(p,r)=>(e(),g(F,{key:r},Y({"accordion-header":a(()=>{var u;return[i("div",oe,[i("div",null,[i("div",null,[ie,s(": "),n(L,{to:{name:"policy-detail-view",params:{mesh:p.route.mesh,policyPath:((u=$.types[p.route.type])==null?void 0:u.path)??"",policy:p.route.name}}},{default:a(()=>[s(d(p.route.name),1)]),_:2},1032,["to"])]),s(),i("div",null,[ce,s(": "+d(p.service),1)])]),s(),p.origins.length>0?(e(),t("div",re,[(e(!0),t(o,null,h(p.origins,(f,m)=>(e(),g(w,{key:`${c}-${m}`},{default:a(()=>[s(d(f.type),1)]),_:2},1024))),128))])):N("",!0)])]}),_:2},[p.origins.length>0?{name:"accordion-content",fn:a(()=>[i("ul",ue,[(e(!0),t(o,null,h(p.origins,(u,f)=>{var m;return e(),t("li",{key:`${c}-${f}`},[s(d(u.type)+`:

                        `,1),n(L,{to:{name:"policy-detail-view",params:{mesh:u.mesh,policyPath:((m=$.types[u.type])==null?void 0:m.path)??"",policy:u.name}}},{default:a(()=>[s(d(u.name),1)]),_:2},1032,["to"])])}),128))])]),key:"0"}:void 0]),1024))),128))]),_:2},1024)],64)):N("",!0)])]))),128))])])])}}}),pe=T(de,[["__scopeId","data-v-184c6d72"]]),me={class:"policy-type-heading"},_e={class:"policy-list"},he={key:0},ye=O({__name:"PolicyTypeEntryList",props:{items:{},types:{}},setup(v){const $=v;function P({headerKey:B}){return{class:`cell-${B}`}}return(B,L)=>{const w=b("RouterLink"),l=b("KTable");return e(),g(G,{"initially-open":[],"multiple-open":""},{default:a(()=>[(e(!0),t(o,null,h(B.items,(c,p)=>(e(),g(F,{key:p},{"accordion-header":a(()=>[i("h3",me,[n(H,{"policy-type":c.type},{default:a(()=>[s(d(c.type)+" ("+d(c.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":a(()=>[i("div",_e,[n(l,{class:"policy-type-table",fetcher:()=>({data:c.connections,total:c.connections.length}),headers:[{label:"From",key:"sourceTags"},{label:"To",key:"destinationTags"},{label:"On",key:"name"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}],"cell-attrs":P,"disable-pagination":"","is-clickable":""},{sourceTags:a(({row:r})=>[r.sourceTags.length>0?(e(),g(D,{key:0,class:"tag-list","should-truncate":"",tags:r.sourceTags},null,8,["tags"])):(e(),t(o,{key:1},[s(`
                —
              `)],64))]),destinationTags:a(({row:r})=>[r.destinationTags.length>0?(e(),g(D,{key:0,class:"tag-list","should-truncate":"",tags:r.destinationTags},null,8,["tags"])):(e(),t(o,{key:1},[s(`
                —
              `)],64))]),name:a(({row:r})=>[r.name!==null?(e(),t(o,{key:0},[s(d(r.name),1)],64)):(e(),t(o,{key:1},[s(`
                —
              `)],64))]),origins:a(({row:r})=>[r.origins.length>0?(e(),t("ul",he,[(e(!0),t(o,null,h(r.origins,(u,f)=>{var m;return e(),t("li",{key:`${p}-${f}`},[n(w,{to:{name:"policy-detail-view",params:{mesh:u.mesh,policyPath:((m=$.types[u.type])==null?void 0:m.path)??"",policy:u.name}}},{default:a(()=>[s(d(u.name),1)]),_:2},1032,["to"])])}),128))])):(e(),t(o,{key:1},[s(`
                —
              `)],64))]),config:a(({row:r})=>[r.config?(e(),g(x,{key:0,code:S(U)(r.config),language:"yaml","show-copy-button":!1},null,8,["code"])):(e(),t(o,{key:1},[s(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}}),ge=T(ye,[["__scopeId","data-v-458a45e2"]]),fe={class:"policy-type-heading"},ke={key:0,class:"matcher"},be={key:1},ve={key:0},$e=O({__name:"RuleList",props:{rules:{},types:{}},setup(v){const{t:$}=Q(),P=v;return(B,L)=>{const w=b("RouterLink");return e(),g(G,{"initially-open":[],"multiple-open":""},{default:a(()=>[(e(!0),t(o,null,h([P.rules.reduce((l,c)=>(typeof l[c.type]>"u"&&(l[c.type]=[]),l[c.type].push(c),l),{})],l=>(e(),t(o,{key:l},[(e(!0),t(o,null,h(l,(c,p)=>(e(),g(F,{key:p},{"accordion-header":a(()=>[i("h3",fe,[n(H,{"policy-type":p},{default:a(()=>[s(d(p),1)]),_:2},1032,["policy-type"])])]),"accordion-content":a(()=>[(e(!0),t(o,null,h([c.some(r=>r.matchers.length>0)],r=>(e(),t("div",{key:r,class:"policy-list"},[n(X,{class:W(["policy-type-table",{"has-matchers":r}]),total:c.length,items:c,headers:[...r?[{label:"Matchers",key:"matchers"}]:[],{label:"Origin policies",key:"origins"},{label:"Conf",key:"config"}]},{matchers:a(({row:u})=>[u.matchers.length>0?(e(),t("span",ke,[n(Z,{items:u.matchers},null,8,["items"])])):(e(),t("i",be,d(S($)("data-planes.routes.item.matches_everything")),1))]),origins:a(({row:u})=>[u.origins.length>0?(e(),t("ul",ve,[(e(!0),t(o,null,h(u.origins,(f,m)=>{var C;return e(),t("li",{key:`${p}-${m}`},[n(w,{to:{name:"policy-detail-view",params:{mesh:f.mesh,policyPath:((C=P.types[f.type])==null?void 0:C.path)??"",policy:f.name}}},{default:a(()=>[s(d(f.name),1)]),_:2},1032,["to"])])}),128))])):(e(),t(o,{key:1},[s(d(S($)("common.collection.none")),1)],64))]),config:a(({row:u})=>[Object.keys(u.raw).length>0?(e(),g(x,{key:0,code:S(U)(u.raw),language:"yaml","show-copy-button":!1},null,8,["code"])):(e(),t(o,{key:1},[s(d(S($)("common.collection.none")),1)],64))]),_:2},1032,["class","total","items","headers"])]))),128))]),_:2},1024))),128))],64))),128))]),_:1})}}}),q=T($e,[["__scopeId","data-v-69b6111a"]]),we={class:"stack"},Pe={class:"mb-2"},Ce={key:0},Oe=O({__name:"DataPlanePoliciesView",props:{data:{}},setup(v){const $=v;return(P,B)=>{const L=b("RouteTitle"),w=b("KCard"),l=b("DataCollection"),c=b("DataLoader"),p=b("DataSource"),r=b("AppView"),u=b("RouteView");return e(),g(u,{name:"data-plane-policies-view",params:{mesh:"",dataPlane:""}},{default:a(({can:f,route:m,t:C})=>[n(r,null,{title:a(()=>[i("h2",null,[n(L,{title:C("data-planes.routes.item.navigation.data-plane-policies-view")},null,8,["title"])])]),default:a(()=>[s(),i("div",we,[n(p,{src:"/policy-types"},{default:a(({data:V,error:K})=>[(e(!0),t(o,null,h([((V==null?void 0:V.policies)??[]).reduce((R,k)=>Object.assign(R,{[k.name]:k}),{})],R=>(e(),t(o,{key:R},[n(c,{src:`/meshes/${m.params.mesh}/rules/for/${m.params.dataPlane}`,data:[V],errors:[K]},{default:a(({data:k})=>[n(l,{items:k.rules},{default:a(()=>[(e(),t(o,null,h(["proxy","to"],y=>n(l,{key:y,items:k.rules,predicate:_=>_.ruleType===y,comparator:(_,I)=>_.type.localeCompare(I.type),empty:!1},{default:a(({items:_})=>[n(w,null,{default:a(()=>[i("h3",null,d(C(`data-planes.routes.item.rules.${y}`)),1),s(),n(q,{class:"mt-2",rules:_,types:R,"data-testid":`${y}-rule-list`},null,8,["rules","types","data-testid"])]),_:2},1024)]),_:2},1032,["items","predicate","comparator"])),64)),s(),n(l,{items:k.rules,predicate:y=>y.ruleType==="from",comparator:(y,_)=>y.type.localeCompare(_.type),empty:!1},{default:a(({items:y})=>[n(w,null,{default:a(()=>[i("h3",Pe,d(C("data-planes.routes.item.rules.from")),1),s(),(e(!0),t(o,null,h([Object.groupBy(y,_=>_.inbound.port)],_=>(e(),t(o,{key:_},[(e(!0),t(o,null,h(Object.entries(_).sort(([I],[j])=>Number(j)-Number(I)),([I,j],z)=>(e(),t("div",{key:z},[i("h4",null,d(C("data-planes.routes.item.port",{port:I})),1),s(),n(q,{class:"mt-2",rules:j,types:R,"data-testid":`from-rule-list-${z}`},null,8,["rules","types","data-testid"])]))),128))],64))),128))]),_:2},1024)]),_:2},1032,["items","predicate","comparator"])]),_:2},1032,["items"])]),_:2},1032,["src","data","errors"]),s(),f("use zones")?N("",!0):(e(),t("div",Ce,[$.data.dataplaneType==="builtin"?(e(),g(c,{key:0,src:`/meshes/${m.params.mesh}/dataplanes/${m.params.dataPlane}/gateway-dataplane-policies`,data:[V],errors:[K]},{default:a(({data:k})=>[k?(e(),g(l,{key:0,items:k.routePolicies,empty:!1},{default:a(()=>[i("h3",null,d(C("data-planes.routes.item.legacy_policies")),1),s(),n(w,{class:"mt-4"},{default:a(()=>[n(pe,{types:R,"gateway-dataplane":k,"data-testid":"builtin-gateway-dataplane-policies"},null,8,["types","gateway-dataplane"])]),_:2},1024)]),_:2},1032,["items"])):N("",!0)]),_:2},1032,["src","data","errors"])):(e(),g(c,{key:1,src:`/meshes/${m.params.mesh}/dataplanes/${m.params.dataPlane}/sidecar-dataplane-policies`,data:[V],errors:[K]},{default:a(({data:k})=>[n(l,{predicate:y=>{var _;return((_=R[y.type])==null?void 0:_.isTargetRefBased)===!1},items:k.policyTypeEntries,empty:!1},{default:a(({items:y})=>[i("h3",null,d(C("data-planes.routes.item.legacy_policies")),1),s(),n(w,{class:"mt-4"},{default:a(()=>[n(ge,{items:y,types:R,"data-testid":"sidecar-dataplane-policies"},null,8,["items","types"])]),_:2},1024)]),_:2},1032,["predicate","items"])]),_:2},1032,["src","data","errors"]))]))],64))),128))]),_:2},1024)])]),_:2},1024)]),_:1})}}});export{Oe as default};
