(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{127:function(t,e,r){var content=r(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("7388ab72",content,!0,{sourceMap:!1})},219:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,links:[{title:"Home",to:"/"},{title:"Login",to:"/login"},{title:"Profile",to:"/profile"},{title:"News",to:"/news"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=r(77),c=r(107),f=r.n(c),l=r(333),h=r(338),d=r(325),v=r(334),m=r(335),w=r(336),A=r(337),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[r("v-avatar",{attrs:{color:t.$vuetify.breakpoint.smAndDown?"grey darken-1":"transparent",size:"32"}}),t._v(" "),r("v-tabs",{staticClass:"ml-n9",attrs:{centered:"",color:"grey darken-1"}},t._l(t.links,(function(link){return r("v-tab",{key:link.title,attrs:{router:"",to:link.to,exact:""}},[t._v("\n        "+t._s(link.title)+"\n      ")])})),1),t._v(" "),r("v-avatar",{staticClass:"hidden-sm-and-down",attrs:{color:"grey darken-1 shrink",size:"32"}})],1),t._v(" "),r("v-main",{staticClass:"grey lighten-3"},[r("nuxt")],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VApp:l.a,VAppBar:h.a,VAvatar:d.a,VFooter:v.a,VMain:m.a,VTab:w.a,VTabs:A.a})},230:function(t,e,r){r(231),t.exports=r(232)},248:function(t,e,r){"use strict";r.r(e);r(24);e.default=function(t){var e=t.store,r=t.route,n=t.redirect;if(e.dispatch("auth/checkLogin"),"login"!==r.name&&!e.getters["auth/isAuth"])return n("/login")}},255:function(t,e,r){"use strict";var n=r(127);r.n(n).a},256:function(t,e,r){(e=r(22)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},306:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"actions",(function(){return c})),r.d(e,"getters",(function(){return f}));var n=function(){return{userName:"Admin",password:"12345",isAuth:!1,isAuthError:!1}},o={setAuth:function(t,data){t.isAuth=data},setAuthError:function(t){t.isAuthError=!0}},c={login:function(t,e){var r=t.commit,n=t.state;e.userName===n.userName&&e.password===n.password?(this.$cookies.set("auth","true",{path:"/",maxAge:604800}),this.$router.push("profile"),r("setAuth",!0)):r("setAuthError")},logout:function(t){var e=t.commit;this.$cookies.set("auth","",{path:"/",maxAge:604800}),e("setAuth",!1)},checkLogin:function(t){var e=t.commit;this.$cookies.get("auth")&&e("setAuth",!0)}},f={isAuth:function(t){return t.isAuth},isAuthError:function(t){return t.isAuthError}}},307:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return f})),r.d(e,"getters",(function(){return l}));r(82);var n=r(21),o=function(){return{articles:[]}},c={setNews:function(t,data){t.articles=data}},f={fetchNews:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,"http://newsapi.org/v2/top-headlines?country=us&apiKey=ba1c568fee4c44fc821c8d95b984c3ad",r.next=4,e.$axios.$get("http://newsapi.org/v2/top-headlines?country=us&apiKey=ba1c568fee4c44fc821c8d95b984c3ad");case 4:o=r.sent,c=o.articles,n("setNews",c);case 7:case"end":return r.stop()}}),r)})))()}},l={getNews:function(t){return t.articles}}},71:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(255),r(77)),c=r(107),f=r.n(c),l=r(333),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;f()(component,{VApp:l.a})}},[[230,7,2,8]]]);