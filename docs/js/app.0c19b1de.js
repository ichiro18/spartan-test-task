(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1656:function(e,t,a){},2181:function(e,t,a){"use strict";a("64b1")},"29ff":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.layout,{tag:"component"})},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container layout layout--main"},[a("div",{staticClass:"sidebar"},[a("profile"),a("main-menu",{staticClass:"main-menu"})],1),a("main",{staticClass:"content"},[a("router-view")],1)])},i=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profile"},[a("img",{staticClass:"profile__avatar",attrs:{src:"/Avatar.png",alt:"avatar"}}),a("span",{staticClass:"profile__name"},[e._v("Someone Verylongname")])])}],u={name:"profile"},p=u,f=(a("8375"),a("2877")),d=Object(f["a"])(p,l,c,!1,null,"6f316cd4",null),_=d.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"menu"},[a("li",{staticClass:"menu__item"},[a("router-link",{staticClass:"menu__link",attrs:{to:"/",exact:""}},[e._v(" Home ")])],1),a("li",{staticClass:"menu__item"},[a("router-link",{staticClass:"menu__link",attrs:{to:"/events"}},[e._v(" Events ")])],1),a("li",{staticClass:"menu__item"},[a("router-link",{staticClass:"menu__link",attrs:{to:"/results"}},[e._v(" Results ")])],1),a("li",{staticClass:"menu__item"},[a("router-link",{staticClass:"menu__link",attrs:{to:"/tropaion"}},[e._v(" Tropaion ")])],1)])},h=[],v={name:"MainMenu"},g=v,b=(a("b27d"),Object(f["a"])(g,m,h,!1,null,"330c5712",null)),y=b.exports,C={name:"MainLayout",components:{Profile:_,MainMenu:y}},O=C,E=(a("bcba"),Object(f["a"])(O,o,i,!1,null,"21b6a7e6",null)),S=E.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout layout--system"},[a("main",{staticClass:"content"},[a("router-view")],1)])},P=[],T={name:"SystemLayout"},k=T,B=Object(f["a"])(k,j,P,!1,null,null,null),$=B.exports,x="main",L={name:"App",data:function(){return{layouts:{main:S,system:$}}},computed:{layout:function(){return this.layouts[this.$route.meta.layout||x]}}},Y=L,w=Object(f["a"])(Y,s,r,!1,null,null,null),A=w.exports,U=a("8c4f"),V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page page--home"},[a("h1",{staticClass:"page__title"},[e._v("Your home")])])}],R={name:"HomePage"},q=R,D=(a("dd21"),Object(f["a"])(q,V,M,!1,null,"1a1588fa",null)),N=D.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?e._e():a("div",{staticClass:"page page--tropaion"},[e._m(0),a("div",{staticClass:"page__controls"},[a("div",{staticClass:"control__status"},[a("span",{staticClass:"status__title"},[e._v("Your Trophies")]),a("span",{staticClass:"status__counter"},[a("span",{staticClass:"counter__current"},[e._v(e._s(e.counters.earned))]),a("span",{staticClass:"counter__total"},[e._v("/"+e._s(e.counters.total))])])]),a("div",{staticClass:"control__filter"},[a("v-select",{attrs:{value:e.selectedYear,options:e.years,searchable:!1},on:{input:e.onChangeYear}})],1)]),a("main",{staticClass:"page__content"},[e.isEmpty(e.currentTrophies)?a("div",{staticClass:"alert"},[e._v("Not found badges")]):e._l(e.currentTrophies,(function(t,n){return a("section",{key:n,staticClass:"category"},[a("h3",{staticClass:"category__title"},[e._v(e._s(n))]),a("div",{staticClass:"category__badges"},e._l(t,(function(t,s){return a("div",{key:n+"-"+s,class:["badge",{"is-earned":t.earned}]},[a("img",{staticClass:"badge__image",attrs:{src:t.badge_icon_url,alt:t.badge_name},on:{error:e.replaceByDefault}}),a("span",{staticClass:"badge__name"},[e._v(e._s(t.badge_name))])])})),0)])}))],2)])},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"page__title"},[e._v("Your "),a("br",{staticClass:"visible-xs"}),e._v(" tropaion")])}],G=a("5530"),H=(a("4de4"),a("caad"),a("2532"),a("d3b7"),a("2ef0")),J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field field-select"},[e.inputLabel||e.label?a("span",{staticClass:"label"},[e._v(e._s(e.inputLabel||e.label)),e.required?a("span",{staticClass:"required"},[e._v("*")]):e._e()]):e._e(),a("div",{staticClass:"control"},[a("div",{staticClass:"custom-select",class:e.rootClasses},[a("multiselect",{ref:"multiselect",attrs:{name:e.name,required:e.required,options:e.options,disabled:e.disabled,taggable:e.taggable,searchable:e.searchable,"track-by":e.trackBy,value:e.model,"close-on-select":e.closeOnSelect,label:e.label,multiple:e.multiple,status:e.status,placeholder:e.placeholder,loading:e.loading,"clear-on-select":e.clearOnSelect,internalSearch:e.internalSearch,"group-select":e.groupSelect,"group-values":e.groupValues,"group-label":e.groupLabel,"preserve-search":e.preserveSearch,"max-height":320},on:{tag:e.onTag,select:e.onChange,close:e.onClose,remove:e.onRemove,open:e.onOpen},scopedSlots:e._u([{key:"option",fn:function(t){return[e.multiple?a("div",{staticClass:"option__desc"},[t.option.$isLabel?e._e():a("input",{staticClass:"input__checkbox",attrs:{type:"checkbox"},domProps:{checked:e.model.indexOf(t.option)>=0}}),e._v(" "+e._s(t.option[e.label]||t.option.$groupLabel||t.option)+" ")]):a("div",{staticClass:"option-desc"},[e.iconLeft?a("div",{staticClass:"select-icon select-left"},[a("i",{class:e.iconLeft})]):e._e(),e._v(" "+e._s(t.option[e.label]||t.option.$groupLabel||t.option)+" ")])]}},{key:"caret",fn:function(e){var t=e.toggle;return[a("div",{staticClass:"multiselect__select",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t(e)}}},[a("img",{attrs:{src:"/caret.svg",alt:"-"}})])]}}])},[a("template",{slot:"noOptions"},[e._v("Список пуст")]),a("template",{slot:"noResult"},[e._v("Не найдено")]),a("template",{slot:"singleLabel"},[a("span",{domProps:{innerHTML:e._s(e.value)}})])],2)],1)])])},z=[],K=(a("a434"),a("8e5f")),Q=a.n(K),W=(a("a9e3"),{props:{value:{type:[Number,String,Object,Array,Boolean],default:""}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{change:function(e){this.model=e.target&&void 0!==e.target.value?e.target.value:e}}}),X={name:"VSelect",components:{Multiselect:Q.a},mixins:[W],props:{name:{type:String,default:""},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},message:{type:String,default:""},inputLabel:{type:String,default:""},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:""},required:{type:Boolean,default:!1},taggable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},internalSearch:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},trackBy:{type:String,default:""},groupLabel:{type:String,default:""},groupValues:{type:String,default:""},placeholder:{type:String,default:""},groupSelect:{type:Boolean,default:!1},iconLeft:{type:String,default:""},preserveSearch:{type:Boolean,default:!1},status:{type:String,default:"default",validator:function(e){return["error","success","info","warning","danger","primary","default"].indexOf(e)>=0}}},methods:{onTag:function(e){this.$emit("tag",e)},onChange:function(e){this.multiple?(this.model.push(e),this.$emit("input",this.model)):this.change(e)},onClose:function(e){this.$emit("close",e)},onRemove:function(e){if(this.multiple){var t=this.model.indexOf(e);this.model.splice(t,1)}},onOpen:function(){this.$emit("open",this.$refs.multiselect)}},computed:{rootClasses:function(){var e="select",t=[e];return this.status&&t.push("is-".concat(this.status)),t}}},Z=X,ee=(a("2181"),Object(f["a"])(Z,J,z,!1,null,null,null)),te=ee.exports,ae=a("2f62"),ne={name:"TropaionPage",components:{VSelect:te},data:function(){return{selectedYear:null,loading:!1,isEmpty:H["isEmpty"]}},computed:Object(G["a"])(Object(G["a"])({},Object(ae["c"])({trophies:"tropaions/fullFeaturedTrophies",byYear:"tropaions/trophiesByYear",years:"tropaions/years"})),{},{counters:function(){var e={total:0,earned:0};return this.byYear[this.selectedYear]&&(e.total=this.byYear[this.selectedYear].length,e.earned=this.byYear[this.selectedYear].filter((function(e){return e.earned})).length),e},currentTrophies:function(){return this.trophies[this.selectedYear]||null}}),methods:Object(G["a"])(Object(G["a"])({},Object(ae["b"])({loadTrophies:"tropaions/loadTrophies"})),{},{onChangeYear:function(e){this.years.includes(+e)&&this.selectedYear!==+e&&this.$router.push({query:{year:e}}).catch((function(){}))},replaceByDefault:function(e){e.target.src="/Badge-Sprint.svg"}}),watch:{$route:{immediate:!0,deep:!0,handler:function(e){var t=e.query.year;this.selectedYear=t?+t:(new Date).getFullYear()}}},created:function(){var e=this;this.loading=!0,this.loadTrophies().finally((function(){e.loading=!1}))}},se=ne,re=(a("5b11"),Object(f["a"])(se,I,F,!1,null,"4d65e4c6",null)),oe=re.exports,ie=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},le=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page page--events"},[a("h1",{staticClass:"page__title"},[e._v("Your events")])])}],ce={name:"EventsPage"},ue=ce,pe=(a("e0c5"),Object(f["a"])(ue,ie,le,!1,null,"20f1ea83",null)),fe=pe.exports,de=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_e=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page page--results"},[a("h1",{staticClass:"page__title"},[e._v("Your results")])])}],me={name:"ResultsPage"},he=me,ve=(a("efeb"),Object(f["a"])(he,de,_e,!1,null,"6373775b",null)),ge=ve.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page page--404"},[a("h1",{staticClass:"page__title"},[e._v("404")]),a("h3",[e._v("Not found")]),a("router-link",{attrs:{to:"/",exact:""}},[e._v("Back to home")])],1)},ye=[],Ce={name:"EventsPage"},Oe=Ce,Ee=(a("f9be"),Object(f["a"])(Oe,be,ye,!1,null,"564fcdec",null)),Se=Ee.exports,je=[{path:"/",name:"Home",component:N},{path:"/events",name:"Events",component:fe},{path:"/results",name:"results",component:ge},{path:"/tropaion",name:"Tropaion",component:oe},{path:"*",name:"NotFound",component:Se,meta:{layout:"system"}}],Pe=je,Te=Object({VUE_APP_BASE_URL:"/spartan-test-task/",NODE_ENV:"production",VUE_APP_API_URL:"//my-json-server.typicode.com",VUE_APP_VERSION:"0.1.0",VUE_APP_TITLE:"Spartan Trophies | Test task",BASE_URL:"/"}).VUE_APP_DEBUG||!1,ke="/spartan-test-task/",Be="//my-json-server.typicode.com",$e="Spartan Trophies | Test task",xe={DEBUG:Te,BASE_URL:ke,API_URL:Be,APP_TITLE:$e};n["a"].use(U["a"]);var Le=new U["a"]({mode:"history",base:ke,linkExactActiveClass:"is-active",linkActiveClass:"is-active",routes:Pe}),Ye=Le,we=a("bc3a"),Ae=a.n(we),Ue={loadTrophies:function(e){var t=e.commit;return Ae()({method:"GET",url:"".concat(Be,"/zahod/membership/trophies")}).then((function(e){200===e.status&&t("fillTrophies",e.data)})).catch((function(e){console.error(e)}))}},Ve=a("3835"),Me=a("2909"),Re=(a("6062"),a("3ca3"),a("ddb0"),a("d81d"),a("4fad"),{years:function(e){return Object(Me["a"])(new Set(e.trophies.map((function(e){return e.badge_year}))))},fullFeaturedTrophies:function(e){var t={};return e.trophies.length&&Object.entries(Object(H["groupBy"])(e.trophies,"badge_year")).map((function(e){var a=Object(Ve["a"])(e,2),n=a[0],s=a[1];t[n]=Object(H["groupBy"])(s,"badge_category")})),t},trophiesByYear:function(e){var t={};return e.trophies.length&&(t=Object(H["groupBy"])(e.trophies,"badge_year")),t}}),qe={trophies:[]},De=(a("a630"),{fillTrophies:function(e,t){e.trophies=Array.from(t)}}),Ne={namespaced:!0,actions:Ue,getters:Re,mutations:De,state:qe};n["a"].use(ae["a"]);var Ie=new ae["a"].Store({strict:xe.DEBUG,state:Object(G["a"])({},xe),mutations:{},actions:{},modules:{tropaions:Ne}}),Fe=Ie;a("e1ea");n["a"].config.productionTip=!1,new n["a"]({router:Ye,store:Fe,render:function(e){return e(A)}}).$mount("#app")},"5b11":function(e,t,a){"use strict";a("6a5a")},"5bac":function(e,t,a){},"64b1":function(e,t,a){},"6a5a":function(e,t,a){},"766e":function(e,t,a){},8375:function(e,t,a){"use strict";a("1656")},a05c:function(e,t,a){},a9e2:function(e,t,a){},acc5:function(e,t,a){},b27d:function(e,t,a){"use strict";a("766e")},bcba:function(e,t,a){"use strict";a("5bac")},dd21:function(e,t,a){"use strict";a("a05c")},e0c5:function(e,t,a){"use strict";a("a9e2")},e1ea:function(e,t,a){},efeb:function(e,t,a){"use strict";a("29ff")},f9be:function(e,t,a){"use strict";a("acc5")}});