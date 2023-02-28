import{a as ae,u as te,k as K,i as le,p as se}from"./production-501bc9c9.js";import{g as ne,A as H,B as oe,X as re}from"./kongponents.es-012aa1f7.js";import{Q}from"./QueryParameter-70743f73.js";import{u as ie}from"./store-98bbb813.js";import{D as ue}from"./DataOverview-ed3b46e0.js";import{d as R,o as m,a as L,w as r,e as g,u as a,f as i,r as t,c as B,q as F,i as ce,s as pe,h as P,g as n,X as me,a5 as de,F as W,l as G,t as C,b as T,I as X,p as ye,k as ve}from"./runtime-dom.esm-bundler-062436f2.js";import{F as fe}from"./FrameSkeleton-469f3e69.js";import{_ as Y}from"./LabelList.vue_vue_type_style_index_0_lang-5e4924da.js";import{u as Z,a as he}from"./index-720a7f1e.js";import{T as _e}from"./TabsWidget-3bb57b8c.js";import{_ as ge}from"./YamlView.vue_vue_type_script_setup_true_lang-d61e0f41.js";import{_ as be}from"./_plugin-vue_export-helper-c27b6911.js";import"./datadogLogEvents-302eea7b.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-7f6549ae.js";import"./ErrorBlock-70ebe300.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-21fa9f22.js";import"./StatusBadge-5a5c160e.js";import"./TagList-bb7a0ea4.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-506233d0.js";import"./toYaml-4e00099e.js";const ke=R({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(d){const l=d;return(E,S)=>(m(),L(a(H),{class:"docs-link",appearance:"outline",target:"_blank",to:l.href},{default:r(()=>[g(a(ne),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),i(`

    Documentation
  `)]),_:1},8,["to"]))}}),we=n("h4",null,"Dataplanes",-1),Pe=R({__name:"PolicyConnections",props:{mesh:{type:String,required:!0},policyType:{type:String,required:!0},policyName:{type:String,required:!0}},setup(d){const l=d,E=Z(),S=t(!1),N=t(!0),q=t(!1),y=t([]),k=t(""),b=B(()=>{const u=k.value.toLowerCase();return y.value.filter(({dataplane:s})=>s.name.toLowerCase().includes(u))});F(()=>l.policyName,function(){v()}),ce(function(){v()});async function v(){q.value=!1,N.value=!0;try{const{items:u,total:s}=await E.getPolicyConnections({mesh:l.mesh,policyType:l.policyType,policyName:l.policyName});S.value=s>0,y.value=u??[]}catch{q.value=!0}finally{N.value=!1}}return(u,s)=>{const f=pe("router-link");return m(),P("div",null,[g(Y,{"has-error":q.value,"is-loading":N.value,"is-empty":!S.value},{default:r(()=>[n("ul",null,[n("li",null,[we,i(),me(n("input",{id:"dataplane-search","onUpdate:modelValue":s[0]||(s[0]=c=>k.value=c),type:"text",class:"k-input mb-4",placeholder:"Filter by name",required:"","data-testid":"dataplane-search-input"},null,512),[[de,k.value]]),i(),(m(!0),P(W,null,G(a(b),(c,w)=>(m(),P("p",{key:w,class:"my-1","data-testid":"dataplane-name"},[g(f,{to:{name:"data-plane-detail-view",params:{mesh:c.dataplane.mesh,dataPlane:c.dataplane.name}}},{default:r(()=>[i(C(c.dataplane.name),1)]),_:2},1032,["to"])]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"])])}}}),Ee=d=>(ye("data-v-e43a7936"),d=d(),ve(),d),Se={key:0,class:"mb-4"},De=Ee(()=>n("p",null,[n("strong",null,"Warning"),i(` This policy is experimental. If you encountered any problem please open an
            `),n("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),xe={class:"entity-heading","data-testid":"policy-single-entity"},Ae={"data-testid":"policy-overview-tab"},Te={class:"config-wrapper"},Ce=R({__name:"PolicyView",props:{selectedPolicyName:{type:String,required:!1,default:null},policyPath:{type:String,required:!0},offset:{type:Number,required:!1,default:0}},setup(d){const l=d,E=Z(),S=he(),N=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}],q=ae(),y=te(),k=ie(),b=t(!0),v=t(!1),u=t(null),s=t(!0),f=t(!1),c=t(!1),w=t(!1),D=t({}),x=t(null),M=t(null),z=t(l.offset),U=t({headers:[{label:"Actions",key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Type",key:"type"}],data:[]}),h=B(()=>k.state.policyTypesByPath[l.policyPath]),j=B(()=>k.state.policyTypes.map(e=>({length:k.state.sidebar.insights.mesh.policies[e.name]??0,label:e.name,value:e.path,selected:e.path===l.policyPath})));F(()=>y.params.mesh,function(){y.name===l.policyPath&&(b.value=!0,v.value=!1,s.value=!0,f.value=!1,c.value=!1,w.value=!1,u.value=null,I(0))}),F(()=>y.query.ns,function(){b.value=!0,v.value=!1,s.value=!0,f.value=!1,c.value=!1,w.value=!1,u.value=null,I(0)}),I(l.offset);async function I(e){z.value=e,Q.set("offset",e>0?e:null),b.value=!0,u.value=null;const p=y.query.ns||null,o=y.params.mesh,A=h.value.path;try{let _;if(o!==null&&p!==null)_=[await E.getSinglePolicyEntity({mesh:o,path:A,name:p})],M.value=null;else{const $={size:K,offset:e},V=await E.getAllPolicyEntitiesFromMesh({mesh:o,path:A},$);_=V.items??[],M.value=V.next}if(_.length>0){U.value.data=_.map(V=>ee(V)),w.value=!1,v.value=!1;const $=l.selectedPolicyName??_[0].name;await O({name:$,mesh:o,path:A})}else U.value.data=[],w.value=!0,v.value=!0,f.value=!0}catch(_){_ instanceof Error?u.value=_:console.error(_),v.value=!0}finally{b.value=!1,s.value=!1}}function J(e){q.push({name:"policy",params:{...y.params,policyPath:e.value}})}function ee(e){if(!e.mesh)return e;const p=e,o={name:"mesh-detail-view",params:{mesh:e.mesh}};return p.meshRoute=o,p}async function O(e){c.value=!1,s.value=!0,f.value=!1;try{const p=await E.getSinglePolicyEntity({mesh:e.mesh,path:h.value.path,name:e.name});if(p){const o=["type","name","mesh"];D.value=le(p,o),Q.set("policy",D.value.name),x.value=se(p)}else D.value={},f.value=!0}catch(p){c.value=!0,console.error(p)}finally{s.value=!1}}return(e,p)=>a(h)?(m(),P("div",{key:0,class:X(["relative",a(h).path])},[a(h).isExperimental?(m(),P("div",Se,[g(a(oe),{appearance:"warning"},{alertMessage:r(()=>[De]),_:1})])):T("",!0),i(),g(fe,null,{default:r(()=>[g(ue,{"selected-entity-name":D.value.name,"page-size":a(K),error:u.value,"is-loading":b.value,"empty-state":{title:"No Data",message:`There are no ${a(h).name} policies present.`},"table-data":U.value,"table-data-is-empty":w.value,next:M.value,"page-offset":z.value,onTableAction:O,onLoadData:I},{additionalControls:r(()=>[g(a(re),{label:"Policies",items:a(j),"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:J},{"item-template":r(({item:o})=>[n("span",{class:X({"policy-type-empty":o.length===0})},C(o.label),3)]),_:1},8,["items"]),i(),g(ke,{href:`${a(S)("KUMA_DOCS_URL")}/policies/${a(h).path}/?${a(S)("KUMA_UTM_QUERY_PARAMS")}`,"data-testid":"policy-documentation-link"},null,8,["href"]),i(),e.$route.query.ns?(m(),L(a(H),{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"policy",params:{policyPath:l.policyPath}}},{default:r(()=>[i(`
            View all
          `)]),_:1},8,["to"])):T("",!0)]),default:r(()=>[i(`
        >
        `)]),_:1},8,["selected-entity-name","page-size","error","is-loading","empty-state","table-data","table-data-is-empty","next","page-offset"]),i(),v.value===!1?(m(),L(_e,{key:0,"has-error":u.value!==null,error:u.value,"is-loading":b.value,tabs:N},{tabHeader:r(()=>[n("h1",xe,C(a(h).name)+": "+C(D.value.name),1)]),overview:r(()=>[g(Y,{"has-error":c.value,"is-loading":s.value,"is-empty":f.value},{default:r(()=>[n("div",Ae,[n("ul",null,[(m(!0),P(W,null,G(D.value,(o,A)=>(m(),P("li",{key:A},[n("h4",null,C(A),1),i(),n("p",null,C(o),1)]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"]),i(),n("div",Te,[x.value!==null?(m(),L(ge,{key:0,id:"code-block-policy","has-error":c.value,"is-loading":s.value,"is-empty":f.value,content:x.value,"is-searchable":""},null,8,["has-error","is-loading","is-empty","content"])):T("",!0)])]),"affected-dpps":r(()=>[x.value!==null?(m(),L(Pe,{key:0,mesh:x.value.mesh,"policy-name":x.value.name,"policy-type":a(h).path},null,8,["mesh","policy-name","policy-type"])):T("",!0)]),_:1},8,["has-error","error","is-loading"])):T("",!0)]),_:1})],2)):T("",!0)}});const Ze=be(Ce,[["__scopeId","data-v-e43a7936"]]);export{Ze as default};