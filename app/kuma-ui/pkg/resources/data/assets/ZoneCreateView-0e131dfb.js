import{d as D,t as p,v as se,V as ae,o as c,j as _,m as t,h as i,w as r,g as k,i as e,H as F,at as re,aq as x,ax as le,ay as H,l as n,U as N,a1 as ie,L as R,e as j,f as $,D as o,R as ce,a8 as ue,az as A,r as O,A as de,C as me,$ as Z,k as h,F as T,G as fe,aA as pe,aB as _e,E as ve,X as be,N as M,aC as G,aD as ze,_ as ge}from"./index-947f516c.js";import{_ as y}from"./CodeBlock.vue_vue_type_style_index_0_lang-2b54f2f9.js";import{g as he}from"./dataplane-30467516.js";const ke=["data-test-state"],ye={class:"scanner-content"},Ee={class:"mr-1"},Ce=D({__name:"EntityScanner",props:{interval:{type:Number,required:!1,default:1e3},retries:{type:Number,required:!1,default:3600},hasError:{type:Boolean,default:!1},loaderFunction:{type:Function,required:!0},canComplete:{type:Boolean,default:!1}},emits:["hide-siblings"],setup(g,{emit:s}){const a=g,z=p(0),b=p(!1),E=p(!1),d=p(null);se(function(){C()}),ae(function(){I()});function C(){b.value=!0,E.value=!1,I(),d.value=window.setInterval(async()=>{z.value++,await a.loaderFunction(),(z.value===a.retries||a.canComplete===!0)&&(I(),b.value=!1,E.value=!0,s("hide-siblings",!0))},a.interval)}function I(){d.value!==null&&window.clearInterval(d.value)}return(m,S)=>(c(),_("div",{class:"scanner","data-test-state":b.value?"waiting":g.hasError?"error":"success"},[t("div",ye,[i(e(ie),{"cta-is-hidden":""},{title:r(()=>[t("span",Ee,[b.value?(c(),k(e(F),{key:0,icon:"spinner",color:e(re),size:e(x)},null,8,["color","size"])):g.hasError?(c(),k(e(F),{key:1,icon:"errorFilled",color:e(le),size:e(x)},null,8,["color","size"])):(c(),k(e(F),{key:2,icon:"circleCheck",color:e(H),size:e(x)},null,8,["color","size"]))]),n(),b.value?N(m.$slots,"loading-title",{key:0}):g.hasError?N(m.$slots,"error-title",{key:1}):N(m.$slots,"complete-title",{key:2})]),message:r(()=>[b.value?N(m.$slots,"loading-content",{key:0}):g.hasError?N(m.$slots,"error-content",{key:1}):N(m.$slots,"complete-content",{key:2})]),_:3})])],8,ke))}}),$e={class:"form-step-title"},Ie=t("span",{class:"form-step-number"},"1",-1),we={class:"instruction-list"},Ne={href:"https://helm.sh/docs/intro/install/"},Se={class:"form-step-title"},Ve=t("span",{class:"form-step-number"},"2",-1),Ze=t("p",null,"On your local machine, create a namespace in your Kubernetes cluster and pull down the kong Helm repo.",-1),qe={class:"instruction-list"},Ae={class:"form-step-title"},Te=t("span",{class:"form-step-number"},"3",-1),De={class:"form-step-title"},Le=t("span",{class:"form-step-number"},"4",-1),Ke={class:"field-group-label mt-4"},Be={class:"mt-4"},Ue=D({__name:"ZoneCreateKubernetesInstructions",props:{zoneName:{type:String,required:!0},globalKdsAddress:{type:String,required:!0},zoneIngressEnabled:{type:Boolean,required:!0},zoneEgressEnabled:{type:Boolean,required:!0},token:{type:String,required:!0},base64EncodedToken:{type:String,required:!0}},setup(g){const s=g,a=R(),z=j(),b=$(()=>a.t("zones.form.kubernetes.secret.createSecretCommand",{token:s.base64EncodedToken}).trim()),E=$(()=>{const d={zoneName:s.zoneName,globalKdsAddress:s.globalKdsAddress,zoneIngressEnabled:String(s.zoneIngressEnabled),zoneEgressEnabled:String(s.zoneEgressEnabled)};return typeof z.params.virtualControlPlaneId=="string"&&(d.controlPlaneId=z.params.virtualControlPlaneId),a.t("zones.form.kubernetes.connectZone.config",d).trim()});return(d,C)=>(c(),_("div",null,[t("h3",$e,[Ie,n(" "+o(e(a).t("zones.form.kubernetes.prerequisites.title")),1)]),n(),t("ul",we,[t("li",null,[t("b",null,o(e(a).t("zones.form.kubernetes.prerequisites.step1Label"))+o(s.zoneIngressEnabled?" "+e(a).t("zones.form.kubernetes.prerequisites.step1LabelAddendum"):""),1),n(`:
        `+o(e(a).t("zones.form.kubernetes.prerequisites.step1Description",{productName:e(a).t("common.product.name")})),1)]),n(),t("li",null,[t("b",null,o(e(a).t("zones.form.kubernetes.prerequisites.step2Label")),1),n(`:
        `+o(e(a).t("zones.form.kubernetes.prerequisites.step2Description")),1)]),n(),t("li",null,[t("a",Ne,o(e(a).t("zones.form.kubernetes.prerequisites.step3LinkTitle")),1),n(" "+o(e(a).t("zones.form.kubernetes.prerequisites.step3Tail")),1)])]),n(),t("h3",Se,[Ve,n(" "+o(e(a).t("zones.form.kubernetes.helm.title")),1)]),n(),Ze,n(),t("ol",qe,[t("li",null,[t("b",null,o(e(a).t("zones.form.kubernetes.helm.step1Description")),1),n(),i(y,{id:"zone-kubernetes-create-namespace",class:"mt-2",code:e(a).t("zones.form.kubernetes.helm.step1Command"),language:"bash"},null,8,["code"])]),n(),t("li",null,[t("b",null,o(e(a).t("zones.form.kubernetes.helm.step2Description")),1),n(),i(y,{id:"zone-kubernetes-add-charts-repo",class:"mt-2",code:e(a).t("zones.form.kubernetes.helm.step2Command"),language:"bash"},null,8,["code"])]),n(),t("li",null,[t("b",null,o(e(a).t("zones.form.kubernetes.helm.step3Description")),1),n(),i(y,{id:"zone-kubernetes-repo-update",class:"mt-2",code:e(a).t("zones.form.kubernetes.helm.step3Command"),language:"bash"},null,8,["code"])])]),n(),t("h3",Ae,[Te,n(" "+o(e(a).t("zones.form.kubernetes.secret.title")),1)]),n(),t("p",null,o(e(a).t("zones.form.kubernetes.secret.createSecretDescription")),1),n(),i(y,{id:"zone-kubernetes-create-secret",class:"mt-4",code:b.value,language:"bash"},null,8,["code"]),n(),t("h3",De,[Le,n(" "+o(e(a).t("zones.form.kubernetes.connectZone.title")),1)]),n(),t("p",null,o(e(a).t("zones.form.kubernetes.connectZone.configDescription")),1),n(),t("span",Ke,o(e(a).t("zones.form.kubernetes.connectZone.configFileName")),1),n(),i(y,{id:"zone-kubernetes-config-code-block","data-testid":"zone-kubernetes-config",code:E.value,language:"yaml"},null,8,["code"]),n(),t("p",Be,o(e(a).t("zones.form.kubernetes.connectZone.connectDescription")),1),n(),i(y,{id:"zone-kubernetes-command-code-block",class:"mt-4",code:e(a).t("zones.form.kubernetes.connectZone.connectCommand").trim(),language:"bash"},null,8,["code"])]))}}),Fe={class:"form-step-title"},xe=t("span",{class:"form-step-number"},"1",-1),Oe={class:"form-step-title"},Re=t("span",{class:"form-step-number"},"2",-1),Pe={class:"field-group-label mt-4"},Xe={class:"mt-4"},Me=D({__name:"ZoneCreateUniversalInstructions",props:{zoneName:{type:String,required:!0},globalKdsAddress:{type:String,required:!0},token:{type:String,required:!0}},setup(g){const s=g,a=R(),z=j(),b=$(()=>a.t("zones.form.universal.saveToken.saveTokenCommand",{token:s.token}).trim()),E=$(()=>{const d={zoneName:s.zoneName,globalKdsAddress:s.globalKdsAddress};return typeof z.params.virtualControlPlaneId=="string"&&(d.controlPlaneId=z.params.virtualControlPlaneId),a.t("zones.form.universal.connectZone.config",d).trim()});return(d,C)=>(c(),_("div",null,[t("h3",Fe,[xe,n(" "+o(e(a).t("zones.form.universal.saveToken.title")),1)]),n(),t("p",null,o(e(a).t("zones.form.universal.saveToken.saveTokenDescription")),1),n(),i(y,{id:"zone-kubernetes-token",class:"mt-4",code:b.value,language:"bash"},null,8,["code"]),n(),t("h3",Oe,[Re,n(" "+o(e(a).t("zones.form.universal.connectZone.title")),1)]),n(),t("p",null,o(e(a).t("zones.form.universal.connectZone.configDescription")),1),n(),t("span",Pe,o(e(a).t("zones.form.universal.connectZone.configFileName")),1),n(),i(y,{id:"zone-universal-config-code-block","data-testid":"zone-universal-config",class:"mt-4",code:E.value,language:"yaml"},null,8,["code"]),n(),t("p",Xe,o(e(a).t("zones.form.universal.connectZone.connectDescription")),1),n(),i(y,{id:"zone-universal-connect-command-code-block",class:"mt-4",code:e(a).t("zones.form.universal.connectZone.connectCommand").trim(),language:"bash"},null,8,["code"])]))}}),Ge={class:"form-wrapper"},He={class:"form"},je={class:"form-header"},We={class:"form-title"},Je={class:"text-gradient"},Qe={key:0},Ye={key:0},en={class:"fact-list"},nn={class:"form-section"},tn={class:"form-section__header"},on={class:"form-section-title"},sn={key:0},an={class:"form-section__content"},rn={class:"form-section","data-testid":"connect-zone-instructions"},ln={class:"form-section__header"},cn={class:"form-section-title"},un={key:0},dn={class:"form-section__content"},mn={class:"field-group-list"},fn={class:"field-group"},pn={class:"field-group-label"},_n={class:"radio-button-group"},vn={class:"field-group"},bn={class:"field-group-label"},zn={class:"radio-button-group"},gn={class:"field-group"},hn={class:"field-group-label"},kn={class:"radio-button-group"},yn={class:"form-section"},En={class:"form-section__header"},Cn={class:"form-section-title"},$n={key:0},In={class:"form-section__content"},wn={class:"form-section"},Nn={class:"form-section__header"},Sn={class:"form-section-title"},Vn={key:0},Zn={class:"form-section__content"},qn={class:"mt-2"},Ln=D({__name:"ZoneCreateView",setup(g){const{t:s,tm:a}=R(),z=ce(),b=ue(),E=/^(?![-0-9])[a-z0-9-]{1,63}$/,d=p(null),C=p(!1),I=p(!1),m=p({error:null,title:null,icon:"warning",badgeAppearance:"warning"}),S=p(null),q=p(!1),L=p(null),v=p(""),w=p("kubernetes"),K=p(!0),B=p(!0),V=$(()=>d.value!==null&&d.value.token?d.value.token:""),W=$(()=>V.value!==""?window.btoa(V.value):""),J=$(()=>v.value===""||C.value||d.value!==null),U=$(()=>{if(S.value!==null)return S.value;if(m.value.error instanceof A){const l=m.value.error.invalidParameters.find(u=>u.field==="name");if(l!==void 0)return l.reason}return null});async function Q(){C.value=!0,m.value={error:null,title:null,icon:"warning",badgeAppearance:"warning"};try{if(!P(v.value))return;d.value=await z.createZone({name:v.value})}catch(l){l instanceof A&&[409,500].includes(l.status)?m.value={error:l,title:s(`zones.create.statusError.${l.status}.title`,{zoneName:v.value}),description:s(`zones.create.statusError.${l.status}.description`).trim(),icon:l.status===500?"warning":"errorFilled",badgeAppearance:l.status===500?"warning":"danger"}:l instanceof Error?m.value={error:l,title:l instanceof A?l.title:s("zones.create.generalError.title"),description:l instanceof A&&l.detail?l.detail:void 0,icon:"errorFilled",badgeAppearance:"danger"}:console.error(l)}finally{C.value=!1}}function P(l){const u=E.test(l);return u?S.value=null:S.value=s("zones.create.invalidNameError"),u}async function Y(){q.value=!1,L.value=null;try{const l=await z.getZoneOverview({name:v.value}),u=he(l.zoneInsight);q.value=u==="online"}catch(l){l instanceof Error?L.value=l:console.error(l)}}function X(){I.value=!I.value}return(l,u)=>{const ee=O("KIcon"),ne=O("DataSource"),te=O("KCard");return c(),k(ge,{attrs:{class:"is-fullscreen"}},{default:r(()=>[i(de,{fullscreen:!0,breadcrumbs:[]},{title:r(()=>[t("h1",null,[i(me,{title:e(s)("zones.routes.create.title"),render:!0},null,8,["title"])])]),actions:r(()=>[V.value===""||q.value?(c(),k(e(Z),{key:0,appearance:"outline","data-testid":"exit-button",to:{name:"zone-cp-list-view"}},{default:r(()=>[n(o(e(s)("zones.form.exit")),1)]),_:1})):(c(),k(e(Z),{key:1,appearance:"outline","data-testid":"exit-button",onClick:X},{default:r(()=>[n(o(e(s)("zones.form.exit")),1)]),_:1}))]),default:r(()=>[n(),n(),t("div",Ge,[i(te,{class:"form-card"},{body:r(()=>[t("div",He,[t("div",je,[t("div",null,[t("h1",We,[t("span",Je,o(e(s)("zones.form.title")),1)]),n(),e(s)("zones.form.description")!==" "?(c(),_("p",Qe,o(e(s)("zones.form.description")),1)):h("",!0)]),n(),e(a)("zones.form.facts").length>0?(c(),_("div",Ye,[t("ul",en,[(c(!0),_(T,null,fe(e(a)("zones.form.facts"),(f,oe)=>(c(),_("li",{key:oe,class:"fact-list__item"},[i(ee,{icon:"check",color:e(H)},null,8,["color"]),n(" "+o(f),1)]))),128))])])):h("",!0)]),n(),t("div",nn,[t("div",tn,[t("h2",on,o(e(s)("zones.form.section.name.title")),1),n(),e(s)("zones.form.section.name.description")!==" "?(c(),_("p",sn,o(e(s)("zones.form.section.name.description")),1)):h("",!0)]),n(),t("div",an,[t("div",null,[i(e(pe),{for:"zone-name",required:"","tooltip-attributes":{placement:"right"}},{tooltip:r(()=>[n(o(e(s)("zones.form.name_tooltip")),1)]),default:r(()=>[n(o(e(s)("zones.form.nameLabel"))+" ",1)]),_:1}),n(),i(e(_e),{id:"zone-name",modelValue:v.value,"onUpdate:modelValue":u[0]||(u[0]=f=>v.value=f),type:"text",name:"zone-name","data-testid":"name-input","data-test-error-type":U.value!==null?"invalid-dns-name":void 0,"has-error":U.value!==null,"error-message":U.value??void 0,disabled:d.value!==null,onBlur:u[1]||(u[1]=f=>P(v.value))},null,8,["modelValue","data-test-error-type","has-error","error-message","disabled"])]),n(),i(e(Z),{appearance:"primary",class:"mt-4",icon:C.value?"spinner":"plus",disabled:J.value,"data-testid":"create-zone-button",onClick:Q},{default:r(()=>[n(o(e(s)("zones.form.createZoneButtonLabel")),1)]),_:1},8,["icon","disabled"]),n(),m.value.error!==null?(c(),k(ve,{key:0,class:"mt-4",error:m.value.error,"badge-appearance":m.value.badgeAppearance,icon:m.value.icon,"data-testid":"create-zone-error"},be({default:r(()=>[t("p",null,o(m.value.title),1),n()]),_:2},[m.value.description?{name:"message",fn:r(()=>[t("p",null,o(m.value.description),1)]),key:"0"}:void 0]),1032,["error","badge-appearance","icon"])):h("",!0)])]),n(),d.value!==null?(c(),_(T,{key:0},[t("div",rn,[t("div",ln,[t("h2",cn,o(e(s)("zones.form.section.configuration.title")),1),n(),e(s)("zones.form.section.configuration.description")!==" "?(c(),_("p",un,o(e(s)("zones.form.section.configuration.description")),1)):h("",!0)]),n(),t("div",dn,[t("div",mn,[t("div",fn,[t("span",pn,o(e(s)("zones.form.environmentLabel"))+` *
                        `,1),n(),t("div",_n,[i(e(M),{id:"zone-environment-universal",modelValue:w.value,"onUpdate:modelValue":u[2]||(u[2]=f=>w.value=f),"selected-value":"universal",name:"zone-environment","data-testid":"environment-universal-radio-button"},{default:r(()=>[n(o(e(s)("zones.form.universalLabel")),1)]),_:1},8,["modelValue"]),n(),i(e(M),{id:"zone-environment-kubernetes",modelValue:w.value,"onUpdate:modelValue":u[3]||(u[3]=f=>w.value=f),"selected-value":"kubernetes",name:"zone-environment","data-testid":"environment-kubernetes-radio-button"},{default:r(()=>[n(o(e(s)("zones.form.kubernetesLabel")),1)]),_:1},8,["modelValue"])])]),n(),w.value==="kubernetes"?(c(),_(T,{key:0},[t("div",vn,[t("span",bn,o(e(s)("zones.form.zoneIngressLabel"))+` *
                          `,1),n(),t("div",zn,[i(e(G),{id:"zone-ingress-enabled",modelValue:K.value,"onUpdate:modelValue":u[4]||(u[4]=f=>K.value=f),"data-testid":"ingress-input-switch"},{label:r(()=>[n(o(e(s)("zones.form.zoneIngressEnabledLabel")),1)]),_:1},8,["modelValue"])])]),n(),t("div",gn,[t("span",hn,o(e(s)("zones.form.zoneEgressLabel"))+` *
                          `,1),n(),t("div",kn,[i(e(G),{id:"zone-egress-enabled",modelValue:B.value,"onUpdate:modelValue":u[5]||(u[5]=f=>B.value=f),"data-testid":"egress-input-switch"},{label:r(()=>[n(o(e(s)("zones.form.zoneEgressEnabledLabel")),1)]),_:1},8,["modelValue"])])])],64)):h("",!0)])])]),n(),t("div",yn,[t("div",En,[t("h2",Cn,o(e(s)("zones.form.section.connect_zone.title")),1),n(),e(s)("zones.form.section.connect_zone.description")!==" "?(c(),_("p",$n,o(e(s)("zones.form.section.connect_zone.description")),1)):h("",!0)]),n(),t("div",In,[i(ne,{src:"/control-plane/addresses"},{default:r(({data:f})=>[typeof f<"u"?(c(),_(T,{key:0},[w.value==="universal"?(c(),k(Me,{key:0,"zone-name":v.value,token:V.value,"global-kds-address":f.kds},null,8,["zone-name","token","global-kds-address"])):(c(),k(Ue,{key:1,"zone-name":v.value,"zone-ingress-enabled":K.value,"zone-egress-enabled":B.value,token:V.value,"base64-encoded-token":W.value,"global-kds-address":f.kds},null,8,["zone-name","zone-ingress-enabled","zone-egress-enabled","token","base64-encoded-token","global-kds-address"]))],64)):h("",!0)]),_:1})])]),n(),t("div",wn,[t("div",Nn,[t("h2",Sn,o(e(s)("zones.form.section.scanner.title")),1),n(),e(s)("zones.form.section.scanner.description")!==" "?(c(),_("p",Vn,o(e(s)("zones.form.section.scanner.description")),1)):h("",!0)]),n(),t("div",Zn,[i(Ce,{"loader-function":Y,"has-error":L.value!==null,"can-complete":q.value,"data-testid":"zone-connected-scanner"},{"loading-title":r(()=>[n(o(e(s)("zones.form.scan.waitTitle")),1)]),"complete-title":r(()=>[n(o(e(s)("zones.form.scan.completeTitle")),1)]),"complete-content":r(()=>[t("p",null,o(e(s)("zones.form.scan.completeDescription",{name:v.value})),1),n(),t("p",qn,[i(e(Z),{appearance:"primary",to:{name:"zone-cp-detail-view",params:{zone:v.value}}},{default:r(()=>[n(o(e(s)("zones.form.scan.completeButtonLabel",{name:v.value})),1)]),_:1},8,["to"])])]),"error-title":r(()=>[t("h3",null,o(e(s)("zones.form.scan.errorTitle")),1)]),"error-content":r(()=>[t("p",null,o(e(s)("zones.form.scan.errorDescription")),1)]),_:1},8,["has-error","can-complete"])])])],64)):h("",!0)])]),_:1})]),n(),i(e(ze),{"is-visible":I.value,title:e(s)("zones.form.confirm_modal.title"),"data-testid":"confirm-exit-modal",onCanceled:X,onProceed:u[6]||(u[6]=f=>e(b).push({name:"zone-cp-list-view"}))},{"header-content":r(()=>[n(o(e(s)("zones.form.confirm_modal.title")),1)]),"body-content":r(()=>[n(o(e(s)("zones.form.confirm_modal.body")),1)]),"action-buttons":r(()=>[i(e(Z),{appearance:"primary",to:{name:"zone-cp-list-view"},"data-testid":"confirm-exit-button"},{default:r(()=>[n(o(e(s)("zones.form.confirm_modal.action_button")),1)]),_:1})]),_:1},8,["is-visible","title"])]),_:1})]),_:1})}}});export{Ln as default};