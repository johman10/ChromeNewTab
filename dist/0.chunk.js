webpackJsonp([0,1,21,22],{130:function(n,e,t){var i=t(131);"string"==typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(10)(i,o);i.locals&&(n.exports=i.locals)},131:function(n,e,t){e=n.exports=t(9)(void 0),e.push([n.i,"\n.switch {\n  user-select: none;\n}\n.switch .switch--label {\n    cursor: pointer;\n}\n.switch .switch--checkbox {\n    display: block;\n    height: 0;\n    margin: 0;\n    opacity: 0;\n    width: 0;\n}\n.switch .switch--checkbox:checked + .switch--lever {\n      background-color: #80cdae;\n}\n.switch .switch--checkbox:checked + .switch--lever::after {\n      background-color: #009d5f;\n      left: 16px;\n}\n.switch .switch--checkbox:checked:not(:disabled) ~ .switch--lever:active::after {\n      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 128, 128, 0.1);\n}\n.switch .switch--checkbox:not(:disabled) ~ .switch--lever:active::after {\n      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08);\n}\n.switch .switch--checkbox[disabled] + .switch--lever {\n      cursor: default;\n}\n.switch .switch--checkbox[disabled] + .switch--lever::after,\n    .switch .switch--checkbox[disabled]:checked + .switch--lever::after {\n      background-color: #bdbdbd;\n}\n.switch .switch--lever {\n    background-color: #bcbcbc;\n    border-radius: 14px;\n    content: '';\n    display: inline-block;\n    height: 14px;\n    position: relative;\n    transition: background .3s ease;\n    vertical-align: middle;\n    width: 36px;\n}\n.switch .switch--lever::after {\n      background-color: #f1f1f1;\n      border-radius: 20px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.4);\n      content: '';\n      display: inline-block;\n      height: 20px;\n      left: 0;\n      position: absolute;\n      top: -3px;\n      transition: left linear .08s, background linear .08s, box-shadow .1s ease;\n      width: 20px;\n}\n",""])},132:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{name:String,value:Boolean},methods:{toggleService:function(){this.$emit("input",this.name,!this.value)}}}},133:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"switch ripple--no"},[t("label",{staticClass:"switch--label",on:{click:n.toggleService}},[t("input",{staticClass:"switch--checkbox",attrs:{type:"checkbox",name:n.name},domProps:{checked:n.value}}),n._v(" "),t("span",{staticClass:"switch--lever"})])])},o=[],r={render:i,staticRenderFns:o};e.a=r},134:function(n,e,t){var i=t(135);"string"==typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(10)(i,o);i.locals&&(n.exports=i.locals)},135:function(n,e,t){e=n.exports=t(9)(void 0),e.push([n.i,"\n.options-menu {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  float: left;\n  height: calc(100vh - 64px);\n  overflow: scroll;\n  padding: 8px 0 48px;\n  position: relative;\n  transition: width 400ms;\n  width: 256px;\n  z-index: 100;\n}\n.options-menu--link {\n    color: rgba(0, 0, 0, 0.87);\n    display: block;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 16px 0 8px;\n    position: relative;\n    text-decoration: none;\n    transition: background-color 150ms;\n}\n.options-menu--link:hover, .options-menu--link.router-link-active {\n      background-color: #ebebeb;\n}\n.options-menu--switch {\n    float: right;\n}\n.options-menu--drag-handle {\n    background-image: url("+t(136)+");\n    background-position: 50%;\n    background-repeat: no-repeat;\n    cursor: ns-resize;\n    float: left;\n    height: 100%;\n    margin-right: 8px;\n    width: 20px;\n}\n.options-menu--support {\n    background-color: #fff;\n    border-top: solid 1px #ececec;\n    bottom: 0;\n    position: fixed;\n    width: 256px;\n    z-index: 10;\n    z-index: 10;\n}\n@media screen and (max-width: 580px) {\n.options-menu {\n    background-color: #fff;\n    left: 0;\n    position: absolute;\n    top: 64px;\n    width: 0;\n}\n.options-menu.options-menu__show {\n      width: 265px;\n}\n}\n",""])},136:function(n,e){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQgMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiM3NTc1NzUiIGQ9Ik0zLDE1aDE4di0ySDNWMTV6IE0zLDE5aDE4di0ySDNWMTl6IE0zLDExaDE4VjlIM1YxMXogTTMsNXYyaDE4VjVIM3oiLz4NCjwvc3ZnPg0K"},137:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},r=t(1),a=t(138),c=i(a),u=t(15),s=i(u);e.default={props:{showMenu:Boolean},components:{vSwitch:s.default},computed:o({},(0,r.mapGetters)(["sortedServices"])),methods:{onInput:function(n,e,t){this.saveData(n.id,e,!n.active)}},mounted:function(){(0,c.default)([this.$el],{moves:function(n,e,t){return t.className.includes("options-menu--drag-handle")},direction:"vertical"}).on("dragend",function(n){var e=[],t=document.querySelectorAll(".options-menu--link"),i=!0,o=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var n=a.value,u=n.getAttribute("data-id");u&&e.push(u)}}catch(n){o=!0,r=n}finally{try{!i&&c.return&&c.return()}finally{if(o)throw r}}localStorage.setItem("serviceOrder",e),chrome.runtime.sendMessage({name:"loadServices"})})}}},138:function(n,e,t){"use strict";(function(e){function i(n,e){function t(n){return-1!==ln.containers.indexOf(n)||sn.isContainer(n)}function i(n){var e=n?"remove":"add";o(S,e,"mousedown",C),o(S,e,"mouseup",j)}function c(n){o(S,n?"remove":"add","mousemove",M)}function h(n){var e=n?"remove":"add";w[e](S,"selectstart",I),w[e](S,"click",I)}function g(){i(!0),j({})}function I(n){cn&&n.preventDefault()}function C(n){if(nn=n.clientX,en=n.clientY,!(1!==r(n)||n.metaKey||n.ctrlKey)){var e=n.target,t=E(e);t&&(cn=t,c(),"mousedown"===n.type&&(v(e)?e.focus():n.preventDefault()))}}function M(n){if(cn){if(0===r(n))return void j({});if(void 0===n.clientX||n.clientX!==nn||void 0===n.clientY||n.clientY!==en){if(sn.ignoreInputTextSelection){var e=b("clientX",n),t=b("clientY",n);if(v(k.elementFromPoint(e,t)))return}var i=cn;c(!0),h(),L(),T(i);var o=a(U);K=b("pageX",n)-o.left,q=b("pageY",n)-o.top,y.add(rn||U,"gu-transit"),G(),A(n)}}}function E(n){if(!(ln.dragging&&$||t(n))){for(var e=n;f(n)&&!1===t(f(n));){if(sn.invalid(n,e))return;if(!(n=f(n)))return}var i=f(n);if(i&&!sn.invalid(n,e)){if(sn.moves(n,i,e,m(n)))return{item:n,source:i}}}}function _(n){return!!E(n)}function N(n){var e=E(n);e&&T(e)}function T(n){J(n.item,n.source)&&(rn=n.item.cloneNode(!0),ln.emit("cloned",rn,n.item,"copy")),Q=n.source,U=n.item,tn=on=m(n.item),ln.dragging=!0,ln.emit("drag",U,Q)}function O(){return!1}function L(){if(ln.dragging){var n=rn||U;z(n,f(n))}}function P(){cn=!1,c(!0),h(!0)}function j(n){if(P(),ln.dragging){var e=rn||U,t=b("clientX",n),i=b("clientY",n),o=u($,t,i),r=X(o,t,i);r&&(rn&&sn.copySortSource||!rn||r!==Q)?z(e,r):sn.removeOnSpill?R():B()}}function z(n,e){var t=f(n);rn&&sn.copySortSource&&e===Q&&t.removeChild(U),Z(e)?ln.emit("cancel",n,Q,Q):ln.emit("drop",n,e,Q,on),D()}function R(){if(ln.dragging){var n=rn||U,e=f(n);e&&e.removeChild(n),ln.emit(rn?"cancel":"remove",n,e,Q),D()}}function B(n){if(ln.dragging){var e=arguments.length>0?n:sn.revertOnSpill,t=rn||U,i=f(t),o=Z(i);!1===o&&e&&(rn?i&&i.removeChild(rn):Q.insertBefore(t,tn)),o||e?ln.emit("cancel",t,Q,Q):ln.emit("drop",t,i,Q,on),D()}}function D(){var n=rn||U;P(),H(),n&&y.rm(n,"gu-transit"),an&&clearTimeout(an),ln.dragging=!1,un&&ln.emit("out",n,un,Q),ln.emit("dragend",n),Q=U=rn=tn=on=an=un=null}function Z(n,e){var t;return t=void 0!==e?e:$?on:m(rn||U),n===Q&&t===tn}function X(n,e,i){for(var o=n;o&&!function(){if(!1===t(o))return!1;var r=V(o,n),a=F(o,r,e,i);return!!Z(o,a)||sn.accepts(U,o,Q,a)}();)o=f(o);return o}function A(n){function e(n){ln.emit(n,a,un,Q)}if($){n.preventDefault();var t=b("clientX",n),i=b("clientY",n),o=t-K,r=i-q;$.style.left=o+"px",$.style.top=r+"px";var a=rn||U,c=u($,t,i),s=X(c,t,i),l=null!==s&&s!==un;(l||null===s)&&(function(){un&&e("out")}(),un=s,function(){l&&e("over")}());var d=f(a);if(s===Q&&rn&&!sn.copySortSource)return void(d&&d.removeChild(a));var p,v=V(s,c);if(null!==v)p=F(s,v,t,i);else{if(!0!==sn.revertOnSpill||rn)return void(rn&&d&&d.removeChild(a));p=tn,s=Q}(null===p&&l||p!==a&&p!==m(a))&&(on=p,s.insertBefore(a,p),ln.emit("shadow",a,s,Q))}}function Y(n){y.rm(n,"gu-hide")}function W(n){ln.dragging&&y.add(n,"gu-hide")}function G(){if(!$){var n=U.getBoundingClientRect();$=U.cloneNode(!0),$.style.width=d(n)+"px",$.style.height=p(n)+"px",y.rm($,"gu-transit"),y.add($,"gu-mirror"),sn.mirrorContainer.appendChild($),o(S,"add","mousemove",A),y.add(sn.mirrorContainer,"gu-unselectable"),ln.emit("cloned",$,U,"mirror")}}function H(){$&&(y.rm(sn.mirrorContainer,"gu-unselectable"),o(S,"remove","mousemove",A),f($).removeChild($),$=null)}function V(n,e){for(var t=e;t!==n&&f(t)!==n;)t=f(t);return t===S?null:t}function F(n,e,t,i){function o(n){return n?m(e):e}var r="horizontal"===sn.direction;return e!==n?function(){var n=e.getBoundingClientRect();return o(r?t>n.left+d(n)/2:i>n.top+p(n)/2)}():function(){var e,o,a,c=n.children.length;for(e=0;e<c;e++){if(o=n.children[e],a=o.getBoundingClientRect(),r&&a.left+a.width/2>t)return o;if(!r&&a.top+a.height/2>i)return o}return null}()}function J(n,e){return"boolean"==typeof sn.copy?sn.copy:sn.copy(n,e)}1===arguments.length&&!1===Array.isArray(n)&&(e=n,n=[]);var $,Q,U,K,q,nn,en,tn,on,rn,an,cn,un=null,sn=e||{};void 0===sn.moves&&(sn.moves=l),void 0===sn.accepts&&(sn.accepts=l),void 0===sn.invalid&&(sn.invalid=O),void 0===sn.containers&&(sn.containers=n||[]),void 0===sn.isContainer&&(sn.isContainer=s),void 0===sn.copy&&(sn.copy=!1),void 0===sn.copySortSource&&(sn.copySortSource=!1),void 0===sn.revertOnSpill&&(sn.revertOnSpill=!1),void 0===sn.removeOnSpill&&(sn.removeOnSpill=!1),void 0===sn.direction&&(sn.direction="vertical"),void 0===sn.ignoreInputTextSelection&&(sn.ignoreInputTextSelection=!0),void 0===sn.mirrorContainer&&(sn.mirrorContainer=k.body);var ln=x({containers:sn.containers,start:N,end:L,cancel:B,remove:R,destroy:g,canMove:_,dragging:!1});return!0===sn.removeOnSpill&&ln.on("over",Y).on("out",W),i(),ln}function o(n,t,i,o){var r={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},a={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},c={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};e.navigator.pointerEnabled?w[t](n,a[i],o):e.navigator.msPointerEnabled?w[t](n,c[i],o):(w[t](n,r[i],o),w[t](n,i,o))}function r(n){if(void 0!==n.touches)return n.touches.length;if(void 0!==n.which&&0!==n.which)return n.which;if(void 0!==n.buttons)return n.buttons;var e=n.button;return void 0!==e?1&e?1:2&e?3:4&e?2:0:void 0}function a(n){var e=n.getBoundingClientRect();return{left:e.left+c("scrollLeft","pageXOffset"),top:e.top+c("scrollTop","pageYOffset")}}function c(n,t){return void 0!==e[t]?e[t]:S.clientHeight?S[n]:k.body[n]}function u(n,e,t){var i,o=n||{},r=o.className;return o.className+=" gu-hide",i=k.elementFromPoint(e,t),o.className=r,i}function s(){return!1}function l(){return!0}function d(n){return n.width||n.right-n.left}function p(n){return n.height||n.bottom-n.top}function f(n){return n.parentNode===k?null:n.parentNode}function v(n){return"INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName||h(n)}function h(n){return!!n&&("false"!==n.contentEditable&&("true"===n.contentEditable||h(f(n))))}function m(n){return n.nextElementSibling||function(){var e=n;do{e=e.nextSibling}while(e&&1!==e.nodeType);return e}()}function g(n){return n.targetTouches&&n.targetTouches.length?n.targetTouches[0]:n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n}function b(n,e){var t=g(e),i={pageX:"clientX",pageY:"clientY"};return n in i&&!(n in t)&&i[n]in t&&(n=i[n]),t[n]}var x=t(139),w=t(143),y=t(146),k=document,S=k.documentElement;n.exports=i}).call(e,t(44))},139:function(n,e,t){"use strict";var i=t(140),o=t(141);n.exports=function(n,e){var t=e||{},r={};return void 0===n&&(n={}),n.on=function(e,t){return r[e]?r[e].push(t):r[e]=[t],n},n.once=function(e,t){return t._once=!0,n.on(e,t),n},n.off=function(e,t){var i=arguments.length;if(1===i)delete r[e];else if(0===i)r={};else{var o=r[e];if(!o)return n;o.splice(o.indexOf(t),1)}return n},n.emit=function(){var e=i(arguments);return n.emitterSnapshot(e.shift()).apply(this,e)},n.emitterSnapshot=function(e){var a=(r[e]||[]).slice(0);return function(){var r=i(arguments),c=this||n;if("error"===e&&!1!==t.throws&&!a.length)throw 1===r.length?r[0]:r;return a.forEach(function(i){t.async?o(i,r,c):i.apply(c,r),i._once&&n.off(e,i)}),n}},n}},140:function(n,e){n.exports=function(n,e){return Array.prototype.slice.call(n,e)}},141:function(n,e,t){"use strict";var i=t(142);n.exports=function(n,e,t){n&&i(function(){n.apply(t||null,e||[])})}},142:function(n,e,t){(function(e){var t,i="function"==typeof e;t=i?function(n){e(n)}:function(n){setTimeout(n,0)},n.exports=t}).call(e,t(64).setImmediate)},143:function(n,e,t){"use strict";(function(e){function i(n,e,t,i){return n.addEventListener(e,t,i)}function o(n,e,t){return n.attachEvent("on"+e,s(n,e,t))}function r(n,e,t,i){return n.removeEventListener(e,t,i)}function a(n,e,t){var i=l(n,e,t);if(i)return n.detachEvent("on"+e,i)}function c(n,e,t){var i=-1===f.indexOf(e)?function(){return new p(e,{detail:t})}():function(){var n;return v.createEvent?(n=v.createEvent("Event"),n.initEvent(e,!0,!0)):v.createEventObject&&(n=v.createEventObject()),n}();n.dispatchEvent?n.dispatchEvent(i):n.fireEvent("on"+e,i)}function u(n,t,i){return function(t){var o=t||e.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,i.call(n,o)}}function s(n,e,t){var i=l(n,e,t)||u(n,e,t);return g.push({wrapper:i,element:n,type:e,fn:t}),i}function l(n,e,t){var i=d(n,e,t);if(i){var o=g[i].wrapper;return g.splice(i,1),o}}function d(n,e,t){var i,o;for(i=0;i<g.length;i++)if(o=g[i],o.element===n&&o.type===e&&o.fn===t)return i}var p=t(144),f=t(145),v=e.document,h=i,m=r,g=[];e.addEventListener||(h=o,m=a),n.exports={add:h,remove:m,fabricate:c}}).call(e,t(44))},144:function(n,e,t){(function(e){var t=e.CustomEvent;n.exports=function(){try{var n=new t("cat",{detail:{foo:"bar"}});return"cat"===n.type&&"bar"===n.detail.foo}catch(n){}return!1}()?t:"function"==typeof document.createEvent?function(n,e){var t=document.createEvent("CustomEvent");return e?t.initCustomEvent(n,e.bubbles,e.cancelable,e.detail):t.initCustomEvent(n,!1,!1,void 0),t}:function(n,e){var t=document.createEventObject();return t.type=n,e?(t.bubbles=Boolean(e.bubbles),t.cancelable=Boolean(e.cancelable),t.detail=e.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(e,t(44))},145:function(n,e,t){"use strict";(function(e){var t=[],i="",o=/^on/;for(i in e)o.test(i)&&t.push(i.slice(2));n.exports=t}).call(e,t(44))},146:function(n,e,t){"use strict";function i(n){var e=a[n];return e?e.lastIndex=0:a[n]=e=new RegExp(c+n+u,"g"),e}function o(n,e){var t=n.className;t.length?i(e).test(t)||(n.className+=" "+e):n.className=e}function r(n,e){n.className=n.className.replace(i(e)," ").trim()}var a={},c="(?:^|\\s)",u="(?:\\s|$)";n.exports={add:o,rm:r}},147:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("nav",{class:["options-menu",{"options-menu__show":n.showMenu}]},[n._l(n.sortedServices,function(e){return t("router-link",{key:e.id,staticClass:"options-menu--link ripple",attrs:{to:e.optionsPath,"data-id":e.id},nativeOn:{mousedown:function(e){n._showRipple(e)}}},[t("span",{staticClass:"options-menu--drag-handle"}),n._v("\n    "+n._s(e.name)+"\n    "),t("v-switch",{staticClass:"options-menu--switch",attrs:{value:e.active,"service-id":e.id,name:e.functionName+"Active"},on:{input:function(t){n.onInput(e,t)}}})],1)}),n._v(" "),t("router-link",{staticClass:"options-menu--link options-menu--support",attrs:{to:"/support"}},[n._v("\n    Support\n  ")])],2)},o=[],r={render:i,staticRenderFns:o};e.a=r},15:function(n,e,t){"use strict";function i(n){t(130)}Object.defineProperty(e,"__esModule",{value:!0});var o=t(132),r=t.n(o),a=t(133),c=t(8),u=i,s=c(r.a,a.a,!1,u,null,null);e.default=s.exports},152:function(n,e,t){var i=t(153);"string"==typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(10)(i,o);i.locals&&(n.exports=i.locals)},153:function(n,e,t){e=n.exports=t(9)(void 0),e.push([n.i,"\n.page-header {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  background-color: #4285f4;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 500;\n  height: 64px;\n  line-height: 64px;\n  padding-left: 272px;\n  transition: padding 400ms, background .3s;\n  width: 100vw;\n}\n.page-header--menu-icon {\n    cursor: pointer;\n    display: none;\n    margin-right: 8px;\n    vertical-align: middle;\n}\n.page-header--title {\n    display: inline;\n}\n@media screen and (max-width: 580px) {\n.page-header {\n    padding-left: 8px;\n}\n.page-header--menu-icon {\n      display: inline;\n}\n}\n",""])},154:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,color:String},methods:{onMenuClick:function(){this.$emit("toggle")}}}},155:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"page-header",style:{"background-color":n.color}},[i("img",{staticClass:"page-header--menu-icon",attrs:{src:t(156),alt:"Toggle menu"},on:{click:n.onMenuClick}}),n._v(" "),i("div",{staticClass:"page-header--title"},[n._v("\n    "+n._s(n.title)+"\n  ")])])},o=[],r={render:i,staticRenderFns:o};e.a=r},156:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6Ii8+PC9zdmc+"},16:function(n,e,t){"use strict";function i(n){t(134)}Object.defineProperty(e,"__esModule",{value:!0});var o=t(137),r=t.n(o),a=t(147),c=t(8),u=i,s=c(r.a,a.a,!1,u,null,null);e.default=s.exports},18:function(n,e,t){"use strict";function i(n){t(152)}Object.defineProperty(e,"__esModule",{value:!0});var o=t(154),r=t.n(o),a=t(155),c=t(8),u=i,s=c(r.a,a.a,!1,u,null,null);e.default=s.exports},192:function(n,e,t){var i=t(193);"string"==typeof i&&(i=[[n.i,i,""]]);var o={};o.transform=void 0;t(10)(i,o);i.locals&&(n.exports=i.locals)},193:function(n,e,t){e=n.exports=t(9)(void 0),e.push([n.i,"\n.ripple {\n  cursor: pointer;\n  display: block;\n  overflow: hidden;\n  position: relative;\n  user-select: none;\n  will-change: opacity, transform;\n}\n.ripple__element {\n    background-color: rgba(0, 0, 0, 0.25);\n    border-radius: 50%;\n    height: 10px;\n    margin: -10px 0 0 -10px;\n    pointer-events: none;\n    position: absolute;\n    transition-duration: 400ms;\n    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    width: 10px;\n    z-index: -10;\n}\n* {\n  box-sizing: border-box;\n}\nhtml,\nhtml a {\n  -webkit-font-smoothing: antialiased;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\nbody {\n  font-family: 'Roboto', 'Helvetica Neue', 'Lucida Grande', sans-serif;\n  margin: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 0;\n  width: 0;\n}\n.options--label {\n  color: #aaaaaa;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 5px;\n  pointer-events: none;\n}\n.options--view {\n  height: calc(100vh - 64px);\n  overflow: scroll;\n  padding: 8px 16px;\n  position: relative;\n  width: calc(100vw - 256px);\n}\n@media screen and (max-width: 580px) {\n.options--view {\n    width: 100vw;\n}\n}\n",""])},194:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},r=t(16),a=i(r),c=t(18),u=i(c),s=t(1);e.default={components:{vOptionsMenu:a.default,vPageHeader:u.default},data:function(){return{showMenu:!1}},computed:o({},(0,s.mapState)({services:"services",service:function(n){var e=this;return n.services.find(function(n){return n.optionsPath===e.$route.path})}}),{headerColor:function(){return this.service?this.service.color:"/support"===this.$route.path?"#03a9f4":"white"},pageTitle:function(){return this.service?this.service.name:"/support"===this.$route.path?"Support":void 0}}),methods:{toggleMenu:function(){this.showMenu=!this.showMenu}}}},195:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-page-header",{attrs:{title:n.pageTitle,color:n.headerColor},on:{toggle:n.toggleMenu}}),n._v(" "),t("v-options-menu",{attrs:{"show-menu":n.showMenu}}),n._v(" "),t("div",{staticClass:"options--view"},[t("router-view")],1)],1)},o=[],r={render:i,staticRenderFns:o};e.a=r},33:function(n,e,t){"use strict";function i(n){t(192)}Object.defineProperty(e,"__esModule",{value:!0});var o=t(194),r=t.n(o),a=t(195),c=t(8),u=i,s=c(r.a,a.a,!1,u,null,null);e.default=s.exports}});