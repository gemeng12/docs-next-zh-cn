(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{435:function(e,t,n){},491:function(e,t,n){"use strict";var r=n(2),a=n(41).every;r({target:"Array",proto:!0,forced:!n(43)("every")},{every:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},492:function(e,t,n){"use strict";n(435)},527:function(e,t,n){"use strict";n.r(t);n(491),n(215),n(122),n(216);var r={new:"新增",breaking:"非兼容",removed:"移除",updated:"更新"},a={props:{badges:{type:Array,default:function(){return[]},validator:function(e){return e.every((function(e){return Object.keys(r).includes(e)}))}}},data:function(){return{validBadges:r}}},i=(n(492),n(55)),s=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"migration-badge-wrapper"},e._l(e.badges,(function(t){return n("span",{key:"badge-type-"+t,class:"migration-badge is-"+t},[e._v("\n    "+e._s(e.validBadges[t])+"\n  ")])})),0)}),[],!1,null,"afc06dd4",null);t.default=s.exports}}]);