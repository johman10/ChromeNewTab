webpackJsonp([30,31,32,33],[,,,function(e,n,t){"use strict";function r(e){t(49)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(51),o=t.n(i),a=t(52),s=t(8),l=r,c=s(o.a,a.a,!1,l,null,null);n.default=c.exports},function(e,n,t){"use strict";function r(e){t(54)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(57),o=t.n(i),a=t(58),s=t(8),l=r,c=s(o.a,a.a,!1,l,null,null);n.default=c.exports},function(e,n,t){"use strict";function r(e){t(59)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(61),o=t.n(i),a=t(62),s=t(8),l=r,c=s(o.a,a.a,!1,l,null,null);n.default=c.exports},,function(e,n,t){"use strict";function r(e){t(67)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(69),o=t.n(i),a=t(70),s=t(8),l=r,c=s(o.a,a.a,!1,l,null,null);n.default=c.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){var r=t(50);"string"==typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(10)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.refresh-button {\n  border-radius: 100%;\n  height: 45px;\n  margin: 12px 2px;\n  padding: 8px;\n  width: 45px;\n}\n.panel-header {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  height: 128px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.panel-header .panel-header--background {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.panel-header .panel-header--background1, .panel-header .panel-header--background2 {\n      background-repeat: no-repeat;\n      height: 100%;\n      position: absolute;\n      width: 100%;\n}\n.panel-header .panel-header--background2 {\n      background-position: right -20px center;\n      background-size: auto 60px;\n}\n.panel-header .panel-header--foreground {\n    color: #fff;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n}\n.panel-header .panel-header--foreground-top,\n  .panel-header .panel-header--foreground-bottom {\n    float: left;\n    height: 64px;\n    width: 100%;\n}\n.panel-header .panel-header--foreground-bottom {\n    padding: 0 16px;\n}\n.panel-header .panel-header--url {\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 64px;\n    text-decoration: none;\n}\n",""])},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),i=function(e){return e&&e.__esModule?e:{default:e}}(r);n.default={components:{vSpinner:(0,i.default)("v-spinner")},props:{scrollTop:Number,service:Object,loading:Boolean},data:function(){return{panelHeaderStyling:{height:"128px"},background2ScrollStyling:{opacity:1,display:"block"},foregroundTopStyling:{height:"64px",opacity:1,display:"block"}}},watch:{scrollTop:function(e){var n=1-e*(1/64);e<64?(this.panelHeaderStyling.height=128-e+"px",this.foregroundTopStyling.height=64-e+"px",this.foregroundTopStyling.opacity=n,this.background2ScrollStyling.opacity=n,this.foregroundTopStyling.display="block",this.background2ScrollStyling.display="block"):(this.panelHeaderStyling.height="64px",this.foregroundTopStyling.height="0px",this.foregroundTopStyling.display="none",this.background2ScrollStyling.display="none")}},computed:{background1Styling:function(){return{"background-color":this.service.color}},background2Styling:function(){return Object.assign({"background-color":this.service.color,"background-image":"url("+this.service.logo+")"},this.background2ScrollStyling)}},methods:{triggerRefresh:function(){this.$emit("refresh")}}}},function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"panel-header",style:e.panelHeaderStyling},[r("div",{staticClass:"panel-header--background"},[r("div",{staticClass:"panel-header--background1",style:e.background1Styling}),e._v(" "),r("div",{staticClass:"panel-header--background2",style:e.background2Styling})]),e._v(" "),r("div",{staticClass:"panel-header--foreground"},[r("div",{staticClass:"panel-header--foreground-top",style:e.foregroundTopStyling},[r("div",{staticClass:"refresh-button ripple",on:{click:e.triggerRefresh}},[r("transition",{attrs:{name:"loader",mode:"out-in"}},[e.loading?r("v-spinner",{attrs:{border:5,width:25}}):r("img",{attrs:{src:t(53),alt:"Refresh "+e.service.name}})],1)],1)]),e._v(" "),r("div",{staticClass:"panel-header--foreground-bottom"},[r("a",{staticClass:"panel-header--url",attrs:{href:e.service.url}},[e._v(e._s(e.service.name))])])])])},i=[],o={render:r,staticRenderFns:i};n.a=o},function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB2aWV3Qm94PSItMjkzIDM4NSAyNCAyNCI+PHN0eWxlPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGQ9Ik0tMjc1LjQgMzkxLjRjLTEuNC0xLjUtMy40LTIuNC01LjYtMi40LTQuNCAwLTggMy42LTggOHMzLjYgOCA4IDhjMy43IDAgNi44LTIuNSA3LjctNmgtMmMtMSAyLjMtMyA0LTUuNyA0LTMuMyAwLTYtMi43LTYtNnMyLjctNiA2LTZjMS43IDAgMyAuNyA0LjIgMS44bC0zLjIgMy4yaDd2LTdsLTIuNCAyLjR6IiBjbGFzcz0ic3QwIi8+PC9zdmc+"},function(e,n,t){var r=t(55);"string"==typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(10)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.fab {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  background-color: #e0e0e0;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-image: url("+t(56)+");\n  border-radius: 100%;\n  bottom: 0;\n  height: 56px;\n  margin: 16px;\n  padding: 16px;\n  position: fixed !important;\n  right: 0;\n  width: 56px;\n  z-index: 1;\n}\n",""])},function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE5LjQgMTN2LTEtMWwyLTEuNmMuMy0uMi40LS41LjMtLjdsLTItMy40Yy0uMi0uMy0uNC0uMy0uNi0uM2wtMi40IDFMMTUgNWwtLjUtMi42YzAtLjItLjMtLjQtLjUtLjRoLTRjLS4zIDAtLjUuMi0uNS40TDkgNSA3LjUgNiA1IDVjLS4zIDAtLjUgMC0uNy4zbC0yIDMuNGMwIC4zIDAgLjUuMi43bDIgMS42djJsLTIgMS42Yy0uMi4yLS4zLjUtLjIuN2wyIDMuNGMuMi4zLjQuMy42LjNsMi40LTFMOSAxOWwuNSAyLjZjMCAuMi4yLjQuNS40aDRjLjMgMCAuNS0uMi41LS40TDE1IDE5bDEuNi0xIDIuNSAxYy4zIDAgLjUgMCAuNy0uM2wyLTMuNGMwLS4yIDAtLjUtLjItLjdsLTItMS42ek0xMiAxNS41Yy0yIDAtMy41LTEuNi0zLjUtMy41UzEwIDguNSAxMiA4LjVzMy41IDEuNiAzLjUgMy41LTEuNiAzLjUtMy41IDMuNXoiLz48L3N2Zz4="},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{url:String,icon:String},computed:{iconClass:function(){return this.icon+"-icon"}}}},function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("a",{staticClass:"fab ripple",attrs:{href:e.url},on:{mousedown:e._showRipple}},[t("div",{class:e.iconClass})])},i=[],o={render:r,staticRenderFns:i};n.a=o},function(e,n,t){var r=t(60);"string"==typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(10)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.loader-enter-active,\n.loader-leave-active {\n  transition: opacity 300ms ease;\n}\n.loader-enter,\n.loader-leave-to {\n  opacity: 0;\n}\n.panel {\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n  white-space: normal;\n}\n.panel--content {\n    height: 100vh;\n    overflow-y: scroll;\n    padding-top: 128px;\n}\n",""])},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=t(1),a=t(2),s=r(a),l=t(3),c=r(l);n.default={components:{vPanelHeader:c.default,vPanelSubheader:(0,s.default)("v-panel-subheader"),vPanelError:(0,s.default)("v-panel-error"),vPanelItem:(0,s.default)("v-panel-item"),vPanelImage:(0,s.default)("v-panel-image"),vServiceActions:(0,s.default)("v-service-actions")},props:{serviceId:Number},data:function(){return{loading:!1,scrollTop:0}},computed:i({panelStyling:function(){return{width:this.service.panelWidth+"px"}},panelContentStyling:function(){return{"padding-bottom":this.service.actions.length>0?"50px":0}},components:function(){return this.service.components?JSON.parse(this.service.components):{}},service:function(e){var n=this;return this.activeServices.find(function(e){return e.id===n.serviceId})}},(0,o.mapGetters)(["activeServices"])),mounted:function(){var e=this;chrome.runtime.onMessage.addListener(function(n){"finishRefresh"===n.name&&(e.loading=!1)})},methods:{onScroll:function(e){this.scrollTop=e.target.scrollTop},onRefresh:function(){this.loading=!0,chrome.runtime.sendMessage({name:"startRefresh",serviceId:this.serviceId})}}}},function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.service?t("div",{staticClass:"panel",style:e.panelStyling},[t("v-panel-header",{attrs:{loading:e.loading,scrollTop:e.scrollTop,service:e.service},on:{refresh:e.onRefresh}}),e._v(" "),t("div",{staticClass:"panel--content",style:e.panelContentStyling,on:{scroll:e.onScroll}},[t("transition",{attrs:{name:"slide"}},["true"===e.service.error?t("v-panel-error",{attrs:{serviceId:e.serviceId,serviceName:e.service.name},on:{refresh:e.onRefresh}}):e._e()],1),e._v(" "),e._l(e.components,function(e,n){return t(e.name,{key:n,tag:"component",attrs:{props:e.props}})})],2),e._v(" "),t("v-service-actions",{attrs:{service:e.service}})],1):e._e()},i=[],o={render:r,staticRenderFns:i};n.a=o},,,,,function(e,n,t){var r=t(68);"string"==typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(10)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.ripple {\n  cursor: pointer;\n  display: block;\n  overflow: hidden;\n  position: relative;\n  user-select: none;\n  will-change: opacity, transform;\n}\n.ripple__element {\n    background-color: rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n    height: 10px;\n    margin: -10px 0 0 -10px;\n    pointer-events: none;\n    position: absolute;\n    transition-duration: 400ms;\n    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    width: 10px;\n    z-index: -10;\n}\n.panel-container {\n  white-space: nowrap;\n}\n* {\n  box-sizing: border-box;\n}\nhtml,\nhtml a {\n  -webkit-font-smoothing: antialiased;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\nbody {\n  font-family: 'Roboto', 'Helvetica Neue', 'Lucida Grande', sans-serif;\n  margin: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 0;\n  width: 0;\n}\n.cleardiv {\n  clear: both;\n}\n.float-right {\n  float: right;\n}\n.float-left {\n  float: left;\n}\n",""])},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=t(1),a=t(2),s=(r(a),t(5)),l=r(s),c=t(4),u=r(c);n.default={name:"v-tab",components:{vPanel:l.default,vFab:u.default},computed:i({},(0,o.mapState)(["services"]),(0,o.mapGetters)(["activeServices"]))}},function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"panel-container"},[t("v-fab",{attrs:{url:"/options.html",icon:"settings"}}),e._v(" "),e._l(e.activeServices,function(e,n){return t("v-panel",{key:e.id,attrs:{"service-id":e.id}})})],2)},i=[],o={render:r,staticRenderFns:i};n.a=o}]);