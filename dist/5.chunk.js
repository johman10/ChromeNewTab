webpackJsonp([5,29,30],{10:function(e,n,t){function r(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],n))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],n));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}function i(e,n){var t=v(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),x.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=x.indexOf(e);n>=0&&x.splice(n,1)}function s(e){var n=document.createElement("style");return e.attrs.type="text/css",l(n,e.attrs),i(e,n),n}function c(e){var n=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(n,e.attrs),i(e,n),n}function l(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function u(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var l=g++;t=m||(m=s(n)),r=p.bind(null,t,l,!1),o=p.bind(null,t,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=c(n),r=d.bind(null,t,n),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(n),r=f.bind(null,t),o=function(){a(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}function p(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function d(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=y(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},b=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var n={};return function(t){return void 0===n[t]&&(n[t]=e.call(this,t)),n[t]}}(function(e){return document.querySelector(e)}),m=null,g=0,x=[],y=t(47);e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=b()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=o(e,n);return r(t,n),function(e){for(var i=[],a=0;a<t.length;a++){var s=t[a],c=h[s.id];c.refs--,i.push(c)}if(e){r(o(e,n),n)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var k=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},112:function(e,n,t){var r=t(113);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(10)(r,o);r.locals&&(e.exports=r.locals)},113:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.input {\n  margin: 30px 0 5px;\n  position: relative;\n}\n.input--field {\n    border: 0;\n    border-bottom: 1px solid #757575;\n    display: block;\n    font-size: 14px;\n    padding-bottom: 8px;\n    width: 300px;\n}\n.input--field::-webkit-input-placeholder {\n      opacity: 0;\n}\n.input--field:focus {\n      outline: none;\n}\n.input--field:focus ~ .input--bottom-bar::before,\n      .input--field:focus ~ .input--bottom-bar::after {\n        width: 50%;\n}\n.input--field:focus ~ .input--label {\n        color: #4059a9;\n        font-size: 12px;\n        top: -22px;\n}\n.input--field:focus ~ .input--label,\n    .input--field:not(:placeholder-shown) ~ .input--label {\n      font-size: 12px;\n      top: -22px;\n}\n.input--field:invalid {\n      color: #F44336;\n}\n.input--field:invalid .input--bottom-bar::before,\n      .input--field:invalid .input--bottom-bar::after {\n        background: #F44336;\n        width: 50%;\n}\n.input--field:invalid .input--label {\n        color: #F44336;\n        font-size: 12px;\n        top: -22px;\n}\n.input--label {\n    color: #aaaaaa;\n    font-size: 13px;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    transition: .2s ease all;\n}\n.input--bottom-bar {\n    display: block;\n    position: relative;\n    width: 300px;\n}\n.input--bottom-bar::before, .input--bottom-bar::after {\n      background: #4059a9;\n      bottom: 0;\n      content: '';\n      height: 2px;\n      position: absolute;\n      transition: .2s ease all;\n      width: 0;\n}\n.input--bottom-bar::before {\n      left: 50%;\n}\n.input--bottom-bar::after {\n      right: 50%;\n}\n.input--description {\n    color: #4059a9;\n    font-size: 12px;\n}\n.input--description a {\n      color: inherit;\n}\n",""])},114:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{name:String,type:String,label:String,value:[String,Number]},data:function(){return{changeValue:this.value}},methods:{onInput:function(){this.$emit("input",this.name,this.changeValue)},onChange:function(){this.$emit("change",this.name,this.changeValue)}}}},115:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"input"},["text"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.changeValue,expression:"changeValue"}],staticClass:"input--field",attrs:{placeholder:".",type:"text",name:e.name,id:e.name},domProps:{value:e.changeValue,value:e.changeValue},on:{input:[function(n){n.target.composing||(e.changeValue=n.target.value)},e.onInput],change:e.onChange}}):"number"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.changeValue,expression:"changeValue"}],staticClass:"input--field",attrs:{placeholder:".",type:"number",name:e.name,id:e.name},domProps:{value:e.changeValue,value:e.changeValue},on:{input:[function(n){n.target.composing||(e.changeValue=n.target.value)},e.onInput],change:e.onChange,blur:function(n){e.$forceUpdate()}}}):"password"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.changeValue,expression:"changeValue"}],staticClass:"input--field",attrs:{placeholder:".",type:"password",name:e.name,id:e.name},domProps:{value:e.changeValue,value:e.changeValue},on:{input:[function(n){n.target.composing||(e.changeValue=n.target.value)},e.onInput],change:e.onChange}}):e._e(),e._v(" "),t("span",{staticClass:"input--bottom-bar"}),e._v(" "),t("label",{staticClass:"input--label"},[e._v(e._s(e.label))])])},o=[];n.a={render:r,staticRenderFns:o}},116:function(e,n,t){var r=t(117);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(10)(r,o);r.locals&&(e.exports=r.locals)},117:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.checkbox--actual {\n  display: block;\n  height: 0;\n  margin: 0;\n  opacity: 0;\n  width: 0;\n}\n.checkbox--actual:checked + .checkbox--label .checkbox--styled {\n    background-color: #009688;\n    border-color: #009688;\n}\n.checkbox--actual:checked + .checkbox--label .checkbox--styled .checkbox--mark {\n      animation: checkmark-expand 140ms ease-out forwards;\n}\n.checkbox--label {\n  cursor: pointer;\n}\n.checkbox--styled {\n  border: solid 2px #5a5a5a;\n  border-radius: 2px;\n  display: inline-block;\n  height: 18px;\n  margin: 5px;\n  position: relative;\n  transition: background-color 140ms, border-color 140ms;\n  vertical-align: middle;\n  width: 18px;\n}\n.checkbox--mark {\n  border-top: 0;\n  border-left: 0;\n  border-right: solid 2px #fff;\n  border-bottom: solid 2px #fff;\n  box-sizing: initial;\n  height: 0;\n  left: 6px;\n  position: absolute;\n  top: 9px;\n  transform: rotate(45deg);\n  width: 0;\n}\n@keyframes checkmark-expand {\n0% {\n    height: 0;\n    left: 6px;\n    top: 9px;\n    width: 0;\n}\n100% {\n    height: 10px;\n    left: 4px;\n    top: -1px;\n    width: 5px;\n}\n}\n",""])},118:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{name:String,value:[String,Boolean],label:String,checked:Boolean},methods:{onChange:function(){this.$emit("change",this.name,this.value)}}}},119:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"checkbox"},[t("input",{staticClass:"checkbox--actual",attrs:{type:"checkbox",id:e.name},domProps:{value:e.value,checked:e.checked},on:{change:e.onChange}}),e._v(" "),t("label",{staticClass:"checkbox--label",attrs:{for:e.name}},[e._m(0),e._v("\n    "+e._s(e.label)+"\n  ")])])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"checkbox--styled"},[t("div",{staticClass:"checkbox--mark"})])}];n.a={render:r,staticRenderFns:o}},12:function(e,n,t){"use strict";function r(e){t(112)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(114),i=t.n(o),a=t(115),s=t(8),c=r,l=s(i.a,a.a,c,null,null);n.default=l.exports},13:function(e,n,t){"use strict";function r(e){t(116)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(118),i=t.n(o),a=t(119),s=t(8),c=r,l=s(i.a,a.a,c,null,null);n.default=l.exports},163:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=t(1),a=t(12),s=r(a),c=t(13),l=r(c);n.default={components:{vInput:s.default,vCheckbox:l.default},computed:o({},(0,i.mapState)({services:"services",service:function(e){return e.services.find(function(e){return 10===e.id})}})),methods:{onChange:function(e,n){this.saveData(this.service.id,e,n)},onCheckboxChange:function(e,n){"dribbbleGifs"===e?this.saveData(this.service.id,e,!this.service.gifs):"dribbbleSmallImages"===e&&this.saveData(this.service.id,!this.service.smallImages)}}}},164:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.service?t("div",{staticClass:"options-dribbble"},[t("v-checkbox",{attrs:{checked:e.service.gifs,name:"dribbbleGifs",label:"Play gifs"},on:{change:e.onCheckboxChange}}),e._v(" "),t("v-checkbox",{attrs:{checked:e.service.smallImages,name:"dribbbleSmallImages",label:"Small images"},on:{change:e.onCheckboxChange}}),e._v(" "),t("v-input",{attrs:{type:"number",value:e.service.panelWidth,name:"dribbbleWidth",label:"Panel width in px"},on:{change:e.onChange}}),e._v(" "),t("v-input",{attrs:{type:"number",value:e.service.refresh,name:"dribbbleRefresh",label:"Refresh rate (in minutes)"},on:{change:e.onChange}})],1):e._e()},o=[];n.a={render:r,staticRenderFns:o}},22:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(163),o=t.n(r),i=t(164),a=t(8),s=a(o.a,i.a,null,null,null);n.default=s.exports},47:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},8:function(e,n){e.exports=function(e,n,t,r,o){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var c="function"==typeof a?a.options:a;n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns),r&&(c._scopeId=r);var l;if(o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):t&&(l=t),l){var u=c.functional,p=u?c.render:c.beforeCreate;u?c.render=function(e,n){return l.call(n),p(e,n)}:c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:i,exports:a,options:c}}},9:function(e,n){function t(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}}});