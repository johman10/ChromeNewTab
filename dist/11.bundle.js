webpackJsonp([11],{167:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(191),i=t.n(a),o=t(192),r=t(0),u=r(i.a,o.a,null,null,null);n.default=u.exports},177:function(e,n,t){"use strict";function a(e){t(178)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(180),o=t.n(i),r=t(181),u=t(0),l=a,s=u(o.a,r.a,l,null,null);n.default=s.exports},178:function(e,n,t){var a=t(179);"string"==typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;t(2)(a,i);a.locals&&(e.exports=a.locals)},179:function(e,n,t){n=e.exports=t(1)(void 0),n.push([e.i,"\n.input {\n  margin: 30px 0 5px;\n  position: relative;\n}\n.input--field {\n    border: 0;\n    border-bottom: 1px solid #757575;\n    display: block;\n    font-size: 14px;\n    padding-bottom: 8px;\n    width: 300px;\n}\n.input--field::-webkit-input-placeholder {\n      opacity: 0;\n}\n.input--field:focus {\n      outline: none;\n}\n.input--field:focus ~ .input--bottom-bar::before,\n      .input--field:focus ~ .input--bottom-bar::after {\n        width: 50%;\n}\n.input--field:focus ~ .input--label {\n        color: #4059a9;\n        font-size: 12px;\n        top: -22px;\n}\n.input--field:focus ~ .input--label,\n    .input--field:not(:placeholder-shown) ~ .input--label {\n      font-size: 12px;\n      top: -22px;\n}\n.input--field:invalid {\n      color: #F44336;\n}\n.input--field:invalid .input--bottom-bar::before,\n      .input--field:invalid .input--bottom-bar::after {\n        background: #F44336;\n        width: 50%;\n}\n.input--field:invalid .input--label {\n        color: #F44336;\n        font-size: 12px;\n        top: -22px;\n}\n.input--label {\n    color: #aaaaaa;\n    font-size: 13px;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    transition: .2s ease all;\n}\n.input--bottom-bar {\n    display: block;\n    position: relative;\n    width: 300px;\n}\n.input--bottom-bar::before, .input--bottom-bar::after {\n      background: #4059a9;\n      bottom: 0;\n      content: '';\n      height: 2px;\n      position: absolute;\n      transition: .2s ease all;\n      width: 0;\n}\n.input--bottom-bar::before {\n      left: 50%;\n}\n.input--bottom-bar::after {\n      right: 50%;\n}\n.input--description {\n    color: #4059a9;\n    font-size: 12px;\n}\n.input--description a {\n      color: inherit;\n}\n",""])},180:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{name:String,type:String,label:String,value:[String,Number]},data:function(){return{changeValue:this.value}},methods:{onInput:function(){this.$emit("input",this.name,this.changeValue)},onChange:function(){this.$emit("change",this.name,this.changeValue)}}}},181:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"input"},["text"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.changeValue,expression:"changeValue"}],staticClass:"input--field",attrs:{placeholder:".",type:"text",name:e.name,id:e.name},domProps:{value:e.changeValue,value:e.changeValue},on:{input:[function(n){n.target.composing||(e.changeValue=n.target.value)},e.onInput],change:e.onChange}}):"number"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.changeValue,expression:"changeValue"}],staticClass:"input--field",attrs:{placeholder:".",type:"number",name:e.name,id:e.name},domProps:{value:e.changeValue,value:e.changeValue},on:{input:[function(n){n.target.composing||(e.changeValue=n.target.value)},e.onInput],change:e.onChange,blur:function(n){e.$forceUpdate()}}}):"password"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.changeValue,expression:"changeValue"}],staticClass:"input--field",attrs:{placeholder:".",type:"password",name:e.name,id:e.name},domProps:{value:e.changeValue,value:e.changeValue},on:{input:[function(n){n.target.composing||(e.changeValue=n.target.value)},e.onInput],change:e.onChange}}):e._e(),e._v(" "),t("span",{staticClass:"input--bottom-bar"}),e._v(" "),t("label",{staticClass:"input--label"},[e._v(e._s(e.label))])])},i=[];n.a={render:a,staticRenderFns:i}},191:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=t(4),o=t(177),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default={components:{vInput:r.default},computed:a({},(0,i.mapState)({services:"services",service:function(e){return e.services.find(function(e){return 3===e.id})}})),methods:{onChange:function(e,n){this.saveData(this.service.id,e,n)}}}},192:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.service?t("div",{staticClass:"options-couch-potato"},[t("v-input",{attrs:{type:"text",value:e.service.address,name:"couchPotatoAddress",label:"Server address"},on:{change:e.onChange}}),e._v(" "),t("v-input",{attrs:{type:"number",value:e.service.port,name:"couchPotatoPort",label:"Server port"},on:{change:e.onChange}}),e._v(" "),t("v-input",{attrs:{type:"text",value:e.service.key,name:"couchPotatoKey",label:"API Key"},on:{change:e.onChange}}),e._v(" "),t("v-input",{attrs:{type:"number",value:e.service.panelWidth,name:"couchPotatoWidth",label:"Panel width in px"},on:{change:e.onChange}}),e._v(" "),t("v-input",{attrs:{type:"number",value:e.service.refresh,name:"couchPotatoRefresh",label:"Refresh rate (in minutes)"},on:{change:e.onChange}})],1):e._e()},i=[];n.a={render:a,staticRenderFns:i}}});