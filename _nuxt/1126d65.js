(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{345:function(t,e,n){var content=n(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("40d63340",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n.r(e);var r={props:{article:{type:Object,default:function(){}}}},l=(n(369),n(77)),c=n(107),o=n.n(c),m=n(387),v=n(346),f=n(349),h=n(340),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[n("v-list-item",{attrs:{href:t.article.url,target:"_blank","three-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline mb-1"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(t.article.content))])],1),t._v(" "),n("v-list-item-avatar"),t._v(" "),t.article.urlToImage?n("img",{staticClass:"news-item__img",attrs:{src:t.article.urlToImage,alt:"news-img"}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VCard:m.a,VListItem:v.a,VListItemAvatar:f.a,VListItemContent:h.a,VListItemSubtitle:h.b,VListItemTitle:h.c})},369:function(t,e,n){"use strict";var r=n(345);n.n(r).a},370:function(t,e,n){(e=n(22)(!1)).push([t.i,".news-item__img{width:128px}",""]),t.exports=e},390:function(t,e,n){"use strict";n.r(e);var r={components:{NewsItem:n(350).default},fetch:function(){this.$store.dispatch("news/fetchNews")},computed:{articles:function(){return this.$store.getters["news/getNews"]}}},l=n(77),c=n(107),o=n.n(c),m=n(384),v=n(393),f=n(386),h=n(59),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8"}},[e("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"10",sm:"10",md:"10"}},this._l(this.articles.slice(0,10),(function(article,i){return e("NewsItem",{key:i,attrs:{article:article}})})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{NewsItem:n(350).default}),o()(component,{VCol:m.a,VContainer:v.a,VRow:f.a,VSheet:h.a})}}]);