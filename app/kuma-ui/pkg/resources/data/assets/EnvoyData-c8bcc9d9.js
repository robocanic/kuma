import{K as v}from"./index-52545d1d.js";import{d as k,a as g,o,c,e as a,w as _,b as s,F as E,p as h,q as i,ar as q,f as l,as as B,_ as C}from"./index-b149f888.js";import{_ as x}from"./CodeBlock.vue_vue_type_style_index_0_lang-d3b1f1fb.js";import{_ as N}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-52d4c52a.js";import{E as b}from"./ErrorBlock-60126425.js";import{_ as I}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-d2fe4749.js";const K={class:"envoy-data-actions"},$=k({__name:"EnvoyData",props:{resource:{},src:{},query:{default:""}},emits:["query-change"],setup(m,{emit:u}){const n=m,p=u;return(D,t)=>{const f=g("KButton");return o(),c("div",null,[a(B,{src:n.src},{default:_(({data:e,error:r,refresh:y})=>[r?(o(),s(b,{key:0,error:r},null,8,["error"])):e===void 0?(o(),s(I,{key:1})):e===""?(o(),s(N,{key:2})):(o(),c(E,{key:3},[h("div",K,[a(f,{appearance:"primary","data-testid":"envoy-data-refresh-button",onClick:y},{default:_(()=>[a(i(q),{size:i(v)},null,8,["size"]),l(`

            Refresh
          `)]),_:2},1032,["onClick"])]),l(),a(x,{id:"code-block-envoy-data",language:"json",code:typeof e=="string"?e:JSON.stringify(e,null,2),"is-searchable":"",query:n.query,onQueryChange:t[0]||(t[0]=d=>p("query-change",d))},null,8,["code","query"])],64))]),_:1},8,["src"])])}}});const j=C($,[["__scopeId","data-v-457f3ca2"]]);export{j as E};