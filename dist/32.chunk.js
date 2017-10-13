webpackJsonp([32],{3:function(e,n,t){"use strict";function i(e){t(49)}Object.defineProperty(n,"__esModule",{value:!0});var r=t(51),a=t.n(r),o=t(52),l=t(8),d=i,s=l(a.a,o.a,!1,d,null,null);n.default=s.exports},49:function(e,n,t){var i=t(50);"string"==typeof i&&(i=[[e.i,i,""]]);var r={};r.transform=void 0;t(10)(i,r);i.locals&&(e.exports=i.locals)},50:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.refresh-button {\n  border-radius: 100%;\n  height: 45px;\n  margin: 12px 2px;\n  padding: 8px;\n  width: 45px;\n}\n.panel-header {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  height: 128px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.panel-header .panel-header--background {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.panel-header .panel-header--background1, .panel-header .panel-header--background2 {\n      background-repeat: no-repeat;\n      height: 100%;\n      position: absolute;\n      width: 100%;\n}\n.panel-header .panel-header--background2 {\n      background-position: right -20px center;\n      background-size: auto 60px;\n}\n.panel-header .panel-header--foreground {\n    color: #fff;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n}\n.panel-header .panel-header--foreground-top,\n  .panel-header .panel-header--foreground-bottom {\n    float: left;\n    height: 64px;\n    width: 100%;\n}\n.panel-header .panel-header--foreground-bottom {\n    padding: 0 16px;\n}\n.panel-header .panel-header--url {\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 64px;\n    text-decoration: none;\n}\n",""])},51:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),r=function(e){return e&&e.__esModule?e:{default:e}}(i);n.default={components:{vSpinner:(0,r.default)("v-spinner")},props:{scrollTop:Number,service:Object,loading:Boolean},data:function(){return{panelHeaderStyling:{height:"128px"},background2ScrollStyling:{opacity:1,display:"block"},foregroundTopStyling:{height:"64px",opacity:1,display:"block"}}},watch:{scrollTop:function(e){var n=1-e*(1/64);e<64?(this.panelHeaderStyling.height=128-e+"px",this.foregroundTopStyling.height=64-e+"px",this.foregroundTopStyling.opacity=n,this.background2ScrollStyling.opacity=n,this.foregroundTopStyling.display="block",this.background2ScrollStyling.display="block"):(this.panelHeaderStyling.height="64px",this.foregroundTopStyling.height="0px",this.foregroundTopStyling.display="none",this.background2ScrollStyling.display="none")}},computed:{background1Styling:function(){return{"background-color":this.service.color}},background2Styling:function(){return Object.assign({"background-color":this.service.color,"background-image":"url("+this.service.logo+")"},this.background2ScrollStyling)}},methods:{triggerRefresh:function(){this.$emit("refresh")}}}},52:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"panel-header",style:e.panelHeaderStyling},[i("div",{staticClass:"panel-header--background"},[i("div",{staticClass:"panel-header--background1",style:e.background1Styling}),e._v(" "),i("div",{staticClass:"panel-header--background2",style:e.background2Styling})]),e._v(" "),i("div",{staticClass:"panel-header--foreground"},[i("div",{staticClass:"panel-header--foreground-top",style:e.foregroundTopStyling},[i("div",{staticClass:"refresh-button ripple",on:{click:e.triggerRefresh}},[i("transition",{attrs:{name:"loader",mode:"out-in"}},[e.loading?i("v-spinner",{attrs:{border:5,width:25}}):i("img",{attrs:{src:t(53),alt:"Refresh "+e.service.name}})],1)],1)]),e._v(" "),i("div",{staticClass:"panel-header--foreground-bottom"},[i("a",{staticClass:"panel-header--url",attrs:{href:e.service.url}},[e._v(e._s(e.service.name))])])])])},r=[],a={render:i,staticRenderFns:r};n.a=a},53:function(e,n){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yOTMgMzg1IDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yOTMgMzg1IDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTI3NS40LDM5MS40Yy0xLjQtMS41LTMuNC0yLjQtNS42LTIuNGMtNC40LDAtOCwzLjYtOCw4czMuNiw4LDgsOGMzLjcsMCw2LjgtMi41LDcuNy02aC0yLjENCgljLTAuOCwyLjMtMyw0LTUuNiw0Yy0zLjMsMC02LTIuNy02LTZzMi43LTYsNi02YzEuNywwLDMuMSwwLjcsNC4yLDEuOGwtMy4yLDMuMmg3di03TC0yNzUuNCwzOTEuNHoiLz4NCjwvc3ZnPg0K"}});