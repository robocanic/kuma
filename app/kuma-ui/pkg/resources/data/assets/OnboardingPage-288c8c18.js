import{d as p,Q as v,o as s,c as r,p as o,r as i,f as t,q as d,s as l,_ as u,b,w as _,P as c,e as f,t as h,n as m,y,z as S}from"./index-b3fcbd86.js";const x={class:"onboarding-heading"},k={class:"onboarding-title","data-testid":"onboarding-header"},$={key:0,class:"onboarding-description"},w=p({__name:"OnboardingHeading",setup(a){const e=v();return(n,g)=>(s(),r("div",x,[o("h1",k,[i(n.$slots,"title",{},void 0,!0)]),t(),d(e).description?(s(),r("div",$,[i(n.$slots,"description",{},void 0,!0)])):l("",!0)]))}});const A=u(w,[["__scopeId","data-v-505a1a6e"]]),N={class:"onboarding-actions"},O={class:"button-list"},B=p({__name:"OnboardingNavigation",props:{shouldAllowNext:{type:Boolean,required:!1,default:!0},showSkip:{type:Boolean,required:!1,default:!0},nextStep:{type:String,required:!0},previousStep:{type:String,required:!1,default:""},nextStepTitle:{type:String,required:!1,default:"Next"},lastStep:{type:Boolean,required:!1,default:!1}},setup(a){const e=a;return(n,g)=>(s(),r("div",N,[e.previousStep?(s(),b(d(c),{key:0,appearance:"secondary",to:{name:e.previousStep},"data-testid":"onboarding-previous-button"},{default:_(()=>[t(`
      Back
    `)]),_:1},8,["to"])):l("",!0),t(),o("div",O,[e.showSkip?(s(),b(d(c),{key:0,appearance:"tertiary","data-testid":"onboarding-skip-button",to:{name:"home"}},{default:_(()=>[t(`
        Skip setup
      `)]),_:1})):l("",!0),t(),f(d(c),{disabled:!e.shouldAllowNext,appearance:"primary",to:{name:e.lastStep?"home":e.nextStep},"data-testid":"onboarding-next-button"},{default:_(()=>[t(h(e.nextStepTitle),1)]),_:1},8,["disabled","to"])])]))}});const D=u(B,[["__scopeId","data-v-4695c7f4"]]),q=a=>(y("data-v-41beef0f"),a=a(),S(),a),I={class:"onboarding-container"},P={class:"onboarding-container__header"},C={class:"onboarding-container__inner-content"},V={class:"mt-4"},H=q(()=>o("div",{class:"background-image"},null,-1)),T=p({__name:"OnboardingPage",props:{withImage:{type:Boolean,required:!1,default:!1}},setup(a){const e=a;return(n,g)=>(s(),r("div",null,[o("div",I,[o("div",P,[i(n.$slots,"header",{},void 0,!0)]),t(),o("div",{class:m(["onboarding-container__content",{"onboarding-container__content--with-image":e.withImage}])},[o("div",C,[i(n.$slots,"content",{},void 0,!0)])],2),t(),o("div",V,[i(n.$slots,"navigation",{},void 0,!0)])]),t(),H]))}});const E=u(T,[["__scopeId","data-v-41beef0f"]]);export{E as O,A as a,D as b};
