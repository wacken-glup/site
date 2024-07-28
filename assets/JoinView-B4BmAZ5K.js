import{k as b,H as $,L as j,P,_ as C,c as r,a as o,s as c,t as n,m as u,b as g,y as p,z as f,B,I as A,F as m,u as _,o as a,r as y}from"./index-CzCvuj_L.js";var v=(e=>(e.amber="Amber",e.blue="Blau",e["blue-grey"]="Blau-Grau",e.brown="Braun",e.cyan="Cyan",e["deep-orange"]="Deep-Orange",e["deep-purple"]="Deep-Purple",e.green="Grün",e.grey="Grau",e.indigo="Indigo",e["light-blue"]="Hellblau",e["light-green"]="Hellgrün",e.lime="Lime",e.orange="Orange",e.pink="Pink",e.purple="Purple",e.red="Rot",e.teal="Teal",e.yellow="Gelb",e))(v||{});const L={data(){return{name:void 0,host:void 0,space:void 0,key:void 0,page:0,secondaryPage:0,form:{name:void 0,color:void 0,error:void 0},loaded:!1,errorCode:void 0}},mounted(){var e,t,i,h,s;this.$ctx.dontAutoCreateSpace=!0,this.name=(e=this.$route.query.name)==null?void 0:e.toString(),this.host=(t=this.$route.query.host)==null?void 0:t.toString(),this.space=(i=this.$route.query.space)==null?void 0:i.toString(),this.key=(h=this.$route.query.key)==null?void 0:h.toString(),this.$route.query.page=="1"&&(this.page=1),this.form.name=((s=this.$ctx.currentUser.value)==null?void 0:s.displayName)||"",(async()=>{var d;for(;((d=this.$client.space)==null?void 0:d.loaded)!=!0;)await b(50);this.loaded=!0})()},methods:{async join(){try{this.$ctx.currentUser.value==null&&(this.$ctx.dontAutoCreateSpace=!0,this.$ctx.currentUser.value=(await $(this.$ctx.auth)).user),await this.$client.registerUser(this.space,this.key),window.location.href=window.location.href+"&page=1"}catch(e){e.code?this.errorCode=e.code:this.errorCode=e+"",console.error(e)}},async complete(){var e,t;try{if(this.space===void 0||this.key===void 0)throw"Der Einladungslink ist fehlerhaft.";if(this.form.name===void 0)throw"Bitte gebe deinen Namen an.";if(this.form.color===void 0)throw"Bitte wähle eine Farbe aus.";if(this.form.name.length<2)throw"Der Name muss aus mindestens zwei Zeichen bestehen.";if(this.form.name.length>48)throw"Bitte gebe eine kürzere Version deines Namens an.";if(this.form.color.length<2)throw"Bitte gebe eine gültige Farbe an.";this.form.error=void 0;try{let i=await((e=this.$client.space)==null?void 0:e.createMember(this.form.name,this.form.color));if(i==null)throw"CREATION_OF_MEMBER_FAILED";await((t=this.$client.space)==null?void 0:t.setMemberId(this.$ctx.currentUser.value.uid,i)),window.location.href="/"}catch(i){i.code?this.errorCode=i.code:this.errorCode=i+"",console.error(i)}}catch(i){this.form.error=i+""}},async chooseMember(e){var t;try{await((t=this.$client.space)==null?void 0:t.setMemberId(this.$ctx.currentUser.value.uid,e.id)),window.location.href="/"}catch(i){i.code?this.errorCode=i.code:this.errorCode=i+"",console.error(i)}},getAvailableColors(){var i;let e=[];(i=this.$client.space)==null||i.members.forEach(h=>{e.push(h.color)});let t=Object.keys(v).filter(h=>!e.includes(h));return t.length<3&&(t=Object.keys(v)),t},getColorLabel(e){return v[e]}},components:{LoginButtons:j,PrivacyPolicyLink:P}},U={class:"responsive max"},D={class:"middle-align",style:{height:"100%"}},N={class:"center middle-align center-align",style:{"padding-left":"24px","padding-right":"24px"}},E=o("i",{class:"extra"},"groups",-1),I={class:"center-align"},S={key:0},V={key:1},O=o("div",{class:"space"},null,-1),F={key:2,class:"center-align"},q=o("i",null,"join",-1),z={key:3,class:"center-align"},G=o("i",null,"join",-1),T=o("div",{class:"space"},null,-1),H=o("div",{class:"divider"},null,-1),R=o("div",{class:"space"},null,-1),Y=o("i",{class:"extra"},"label",-1),x={class:"center-align"},J=o("br",null,null,-1),W=o("div",{class:"space"},null,-1),Z=o("div",{class:"space"},null,-1),K={class:"tabbed"},Q=o("i",null,"add",-1),X=o("i",null,"check_circle",-1),M=o("div",{class:"space"},null,-1),ee=o("div",{class:"space"},null,-1),oe={id:"join-form",onsubmit:"event.preventDefault()"},te={class:"field label prefix border"},se=o("i",null,"label",-1),ne={class:"field label prefix suffix border"},ie=["value"],le=o("i",null,"arrow_drop_down",-1),re={key:0,class:"error"},ae={class:"right-align"},ce=o("i",null,"check",-1),de={style:{"max-height":"50vh",overflow:"scroll"}},ue=["onClick"],he=o("i",{style:{color:"black"}},"person",-1),me=[he],ve={class:"max"},ge={class:"small"},pe={class:"link"},fe={class:"right-align no-space"};function _e(e,t,i,h,s,d){const k=y("LoginButtons"),w=y("PrivacyPolicyLink");return a(),r(m,null,[o("main",U,[o("div",D,[o("article",N,[o("div",null,[o("div",{class:c(["page",{active:s.page==0}])},[E,o("h5",I,n(e.$t("join.title")),1),s.name!=null?(a(),r("p",S,n(e.$t("join.message.specific",{n:s.host||e.$t("common.someone"),s:s.name})),1)):u("",!0),s.name==null?(a(),r("p",V,n(e.$t("join.message.generic",{n:s.host||e.$t("common.someone")})),1)):u("",!0),O,e.$ctx.currentUser.value!==void 0?(a(),r("nav",F,[o("button",{class:"large",onClick:t[0]||(t[0]=l=>d.join())},[q,o("span",null,n(e.$t("common.join")),1)])])):u("",!0),e.$ctx.currentUser.value==null?(a(),r("div",z,[o("button",{class:"responsive",onClick:t[1]||(t[1]=l=>d.join())},[G,o("span",null,n(e.$t("join.button.joinWithoutAccount")),1)]),T,H,R,g(k,{"hide-anon":!0,reload:!0})])):u("",!0)],2),s.loaded?(a(),r("div",{key:0,class:c(["page",{active:s.page==1}])},[Y,o("h5",x,n(e.$t("join.whoAreYou.title")),1),o("p",null,[p(n(e.$t("join.whoAreYou.message[0]")),1),J,p(n(e.$t("join.whoAreYou.message[1]")),1)]),W,Z,o("nav",K,[o("a",{class:c({active:s.secondaryPage==0}),onClick:t[2]||(t[2]=l=>s.secondaryPage=0)},[Q,o("span",null,n(e.$t("common.add")),1)],2),o("a",{class:c({active:s.secondaryPage==1}),onClick:t[3]||(t[3]=l=>s.secondaryPage=1)},[X,o("span",null,n(e.$t("common.select")),1)],2)]),M,ee,o("div",{class:c(["page left center-align",{active:s.secondaryPage==0}])},[o("form",oe,[o("div",te,[se,f(o("input",{type:"name","onUpdate:modelValue":t[4]||(t[4]=l=>s.form.name=l)},null,512),[[B,s.form.name]]),o("label",null,n(e.$t("common.name")),1)]),o("div",ne,[o("i",{class:c([`${s.form.color}-text`])},"palette",2),f(o("select",{"onUpdate:modelValue":t[5]||(t[5]=l=>s.form.color=l)},[(a(!0),r(m,null,_(d.getAvailableColors(),l=>(a(),r("option",{value:l},n(d.getColorLabel(l)),9,ie))),256))],512),[[A,s.form.color]]),o("label",null,n(e.$t("common.color")),1),le])]),s.form.error!=null?(a(),r("p",re,n(s.form.error),1)):u("",!0),o("nav",ae,[o("button",{form:"join-form",onClick:t[6]||(t[6]=l=>d.complete())},[ce,o("span",null,n(e.$t("common.finish")),1)])])],2),e.$client.space!=null?(a(),r("div",{key:0,class:c(["page right center-align",{active:s.secondaryPage==1}])},[o("article",de,[(a(!0),r(m,null,_(e.$client.space.members,l=>(a(),r(m,null,[l.isOwner()?u("",!0):(a(),r("a",{key:0,class:"row wave padding",onClick:ye=>d.chooseMember(l)},[o("button",{class:c(["circle",[`${l.color}5`]])},me,2),o("div",ve,[o("h6",ge,n(l.name),1),o("div",null,[o("span",pe,n(e.$tc("common.likes",l.likes.length))+" "+n(e.$t("common.and"))+" "+n(e.$tc("common.recommendations",l.suggestions.length)),1)])])],8,ue))],64))),256))])],2)):u("",!0)],2)):u("",!0)])])])]),g(w),o("div",{class:c(["overlay",{active:s.errorCode}]),onClick:t[7]||(t[7]=l=>s.errorCode=void 0)},null,2),o("dialog",{class:c(["error",{active:s.errorCode}])},[o("h5",null,n(e.$t("join.dialog.error.title")),1),o("div",null,n(e.$t("join.dialog.error.message"))+" "+n(s.errorCode),1),o("nav",fe,[o("button",{class:"error-container no-elevate",onClick:t[8]||(t[8]=l=>s.errorCode=void 0)},n(e.$t("common.ok")),1)])],2)],64)}const we=C(L,[["render",_e]]);export{we as default};
