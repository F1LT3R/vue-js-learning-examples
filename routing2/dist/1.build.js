webpackJsonp([1],{23:function(t,e,n){"use strict";e.default={data:function(){return{link:{name:"userEdit",params:{id:this.$route.params.id},query:{locale:"en",q:100},hash:"#data"}}},beforeRouteEnter:function(t,e,n){n(function(t){console.log(t.link)})}}},25:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Some User Details")]),t._v(" "),n("p",[t._v("User loaded as ID: "+t._s(t.$route.params.id))]),t._v(" "),n("router-link",{staticClass:"btn btn-primary",attrs:{tag:"button",to:t.link}},[t._v("Edit User")])],1)},staticRenderFns:[]}},7:function(t,e,n){var r,a;r=n(23);var o=n(25);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=r}});