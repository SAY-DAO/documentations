import{_ as u,o as e,c as s,a as t,t as r,b as d,e as c,F as h,f,p,g as m}from"./app-a7d5d4b7.js";const v="/images/construction.png";const g={computed:{issueUrl:function(){return this.$frontmatter&&this.$frontmatter.issueUrl},repo:function(){return this.$site&&this.$site.themeConfig&&this.$site.themeConfig.docsRepo},related:function(){return this.$frontmatter.related}},props:{title:{type:String,default:"به زودی محتوای این صفحه اضافه می‌شود!"}}},i=n=>(p("data-v-7311a02c"),n=n(),m(),n),S={class:"content-status"},y={class:"content-status-all"},k={key:0,class:"content-status-status"},C=["href"],x=i(()=>t("div",{class:"illustration"},[t("img",{src:v})],-1)),$={class:"content-status-info",style:{clear:"both"}},b={key:0,class:"section content-other-resources"},I=i(()=>t("h3",null,"مطالعات آزاد مربوط به بلاک‌چین",-1)),U=["href","alt"];function B(n,N,l,V,F,a){return e(),s("main",S,[t("div",null,[t("h2",null,r(l.title),1),t("div",y,[t("div",null,[a.issueUrl?(e(),s("div",k,[t("p",null,[d(" شما می‌توانید ما را در تکمیل این مستندات یاری کنید. "),t("a",{target:"_blank",href:a.issueUrl},"همراهی در تکمیل این صفحه!",8,C)])])):c("v-if",!0)]),x])]),t("div",$,[a.related?(e(),s("div",b,[I,t("ul",null,[(e(!0),s(h,null,f(a.related,(_,o)=>(e(),s("li",null,[t("a",{href:_,alt:o,target:"_blank"},r(o),9,U)]))),256))])])):c("v-if",!0)])])}const D=u(g,[["render",B],["__scopeId","data-v-7311a02c"],["__file","ContentStatus.vue"]]);export{D as default};