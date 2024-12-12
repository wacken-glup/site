import{D as h,E as v,G as _,P as S,_ as b,c as r,a as s,F as u,z as p,t as o,m as a,s as c,B as m,C as d,b as w,o as t,r as y}from"./index-DB05Yfy2.js";const U={data(){return{activePage:0,formSignIn:{name:"",mail:"",password:"",error:null,loading:!1},formSignUp:{name:"",mail:"",password:"",error:null,loading:!1}}},methods:{forward(){console.info("callback",this.$route.query.callback+""),this.$route.query.callback==null?window.location.href="/":window.location.href=this.$route.query.callback+""},async signIn(){this.formSignIn.loading=!0;try{await h(this.$ctx.auth,this.formSignIn.mail,this.formSignIn.password),this.forward()}catch(e){this.formSignIn.error=e.code}this.formSignIn.loading=!1},async signUp(){this.formSignUp.loading=!0;try{let e=await v(this.$ctx.auth,this.formSignUp.mail,this.formSignUp.password);await _(e.user,{displayName:this.formSignUp.name}),this.forward()}catch(e){this.formSignUp.error=e.code}this.formSignUp.loading=!1}},components:{PrivacyPolicyLink:S}},k={class:"responsive max"},I={key:1,class:"middle-align",style:{height:"100%"}},P={class:"large-padding center middle-align center-align"},V={class:"large-padding"},C=s("i",{class:"extra"},"mail",-1),D={class:"center-align"},N=s("br",null,null,-1),$=s("div",{class:"space"},null,-1),q={class:"tabbed"},A=s("i",null,"login",-1),B=s("i",null,"draw",-1),E=s("div",{class:"space"},null,-1),L=s("div",{class:"space"},null,-1),x={id:"mail-signin-form",onsubmit:"event.preventDefault()"},z={class:"field label prefix border"},F=s("i",null,"mail",-1),M={class:"field label prefix border"},T=s("i",null,"password",-1),W={key:0,class:"error"},G={class:"right-align"},j={key:0,class:"max"},H={id:"mail-signup-form",onsubmit:"event.preventDefault()"},J={class:"field label prefix border"},K=s("i",null,"label",-1),O={class:"field label prefix border"},Q=s("i",null,"mail",-1),R={class:"field label prefix border"},X=s("i",null,"password",-1),Y={key:0,class:"error"},Z={class:"right-align"},ss={key:0,class:"max"};function es(e,n,is,ns,i,g){const f=y("PrivacyPolicyLink");return t(),r(u,null,[s("main",k,[e.$ctx.currentUser.value!=null&&e.$route.query.callback===void 0?(t(),r(u,{key:0},[p(o(e.$router.push("/login")),1)],64)):a("",!0),e.$ctx.currentUser.value==null?(t(),r("div",I,[s("article",P,[s("div",V,[C,s("h5",D,o(e.$t("login.mail.title")),1),s("p",null,[p(o(e.$t("login.mail.message[0]")),1),N,p(o(e.$t("login.mail.message[1]")),1)]),$,s("nav",q,[s("a",{class:c({active:i.activePage==0}),onClick:n[0]||(n[0]=l=>i.activePage=0)},[A,s("span",null,o(e.$t("common.signIn")),1)],2),s("a",{class:c({active:i.activePage==1}),onClick:n[1]||(n[1]=l=>i.activePage=1)},[B,s("span",null,o(e.$t("common.signUp")),1)],2)]),E,L,s("div",{class:c(["page left center-align",{active:i.activePage==0}])},[s("form",x,[s("div",z,[F,m(s("input",{type:"mail","onUpdate:modelValue":n[2]||(n[2]=l=>i.formSignIn.mail=l)},null,512),[[d,i.formSignIn.mail]]),s("label",null,o(e.$t("common.mailAddress")),1)]),s("div",M,[T,m(s("input",{type:"password","onUpdate:modelValue":n[3]||(n[3]=l=>i.formSignIn.password=l)},null,512),[[d,i.formSignIn.password]]),s("label",null,o(e.$t("common.password")),1)])]),i.formSignIn.error!=null?(t(),r("p",W,o(i.formSignIn.error),1)):a("",!0),s("nav",G,[s("button",{form:"mail-signin-form",onClick:n[4]||(n[4]=l=>g.signIn())},[s("span",null,o(e.$t("common.signIn")),1),i.formSignIn.loading?(t(),r("progress",j)):a("",!0)])])],2),s("div",{class:c(["page right center-align",{active:i.activePage==1}])},[s("form",H,[s("div",J,[K,m(s("input",{type:"name","onUpdate:modelValue":n[5]||(n[5]=l=>i.formSignUp.name=l)},null,512),[[d,i.formSignUp.name]]),s("label",null,o(e.$t("common.name")),1)]),s("div",O,[Q,m(s("input",{type:"mail","onUpdate:modelValue":n[6]||(n[6]=l=>i.formSignUp.mail=l)},null,512),[[d,i.formSignUp.mail]]),s("label",null,o(e.$t("common.mailAddress")),1)]),s("div",R,[X,m(s("input",{type:"password","onUpdate:modelValue":n[7]||(n[7]=l=>i.formSignUp.password=l)},null,512),[[d,i.formSignUp.password]]),s("label",null,o(e.$t("common.password")),1)])]),i.formSignUp.error!=null?(t(),r("p",Y,o(i.formSignUp.error),1)):a("",!0),s("nav",Z,[s("button",{form:"mail-signup-form",onClick:n[8]||(n[8]=l=>g.signUp())},[s("span",null,o(e.$t("common.signUp")),1),i.formSignUp.loading?(t(),r("progress",ss)):a("",!0)])])],2)])])])):a("",!0)]),w(f)],64)}const ls=b(U,[["render",es]]);export{ls as default};
