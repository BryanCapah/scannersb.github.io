(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[58],{1204:function(e,t,n){"use strict";n.r(t);var r=n(653),a=n(1),o=n.n(a),i=n(56),s=n(20),u=n(667);n(724);t.default=Object(s.i)((function(e){Object(i.c)();var t=Object(i.d)((function(e){return e.csvFileName})),n=Object(i.d)((function(e){return e.csvDataResult})),s=Object(i.d)((function(e){return e.csvFieldResult})),l=o.a.useState(null),c=Object(r.a)(l,2),d=(c[0],c[1],o.a.useState(!0)),p=Object(r.a)(d,2);p[0],p[1];return Object(a.useEffect)((function(){}),[n]),void 0===n||null===n?(e.history.push("/inventory-entry/waste/CSV-upload"),0):o.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},o.a.createElement(u.b,{columns:s,tableClass:"reviewTable",data:n}),o.a.createElement("div",{className:"row pt-3"},o.a.createElement("div",{className:"col-4"},o.a.createElement("button",{type:"button",className:"btn px-3 mr-3 text no-shadow",style:{backgroundColor:"#fff"},onClick:function(){return e.history.push("/inventory-entry/waste/CSV-upload")}},"Upload Another File")),o.a.createElement("div",{className:"col-4",style:{lineHeight:"40px"}},"Review your imported file: ",t," (",n.length||0," Lines)")))}))},667:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return w}));var r=n(65),a=n.n(r),o=n(89),i=n(167),s=n(168),u=n(170),l=n(169),c=n(1),d=n.n(c),p=n(655),m=n(691),f=n.n(m),v=(n(668),n(693),n(48)),h=n.n(v),b=n(694),y=n.n(b),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).changeWarehouseUuid=function(e,t,n,i,s,u,l){var c=r.props,d=c.setCsvDataTmp,p=c.globalData,m=p.findIndex((function(e){return e.id==i})),f=s.indexOf(e);p[m][t]=u[f],p[m][n]=l[f],setTimeout(Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(p);case 1:case"end":return e.stop()}}),e)}))),400)},r.validatePOSKU=function(){var e=Object(o.a)(a.a.mark((function e(t,n,i){var s,u,l,c,d,p,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=r.props,u=s.setCsvDataTmp,l=s.globalData,c=s.setIsValidate,d=l,e.prev=2,c(!1),"/stocktake/rowValidationUpload",p=null,m=null,setTimeout(Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=document.getElementById("".concat(i)),m=document.getElementById("".concat(i,"span")),null!==p&&void 0!==p){e.next=4;break}return e.abrupt("return",0);case 4:return m.innerHTML="Validating",e.next=7,h()({method:"post",url:"/stocktake/rowValidationUpload",data:{data:[t]}}).then((function(e){var t,r=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data,a=d.findIndex((function(e){return e.id==n}));r[0]&&!0===r[0].isExist?(d[a].wmsPoSkuCode=r[0].wmsPoSkuCode,d[a].wmsPoSkuCodeStatus=!0,d[a].wmsPoSkuCodeReason="PO SKU Code Not Found",d[a].expiryDate=r[0].expiryDate,d[a].inboundDate=r[0].inboundDate,d[a].supplierName=r[0].supplierName,d[a].supplierUuid=r[0].supplierUuid,d[a].uom=r[0].uom,d[a].photos=r[0].photos,p.classList.remove("red"),p.classList.add("hiddenTooltip")):(d[a].wmsPoSkuCodeStatus=!1,d[a].wmsPoSkuCodeReason="PO SKU Code Not Found",d[a].expiryDate="",d[a].inboundDate="",d[a].supplierName="",d[a].supplierUuid="",p.classList.add("red"),p.classList.remove("hiddenTooltip"),m.innerHTML="PO SKU Code Not Found"),u(d)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n,r){return e.apply(this,arguments)}}(),r.validateOutbountReason=function(e,t,n){var a=r.props.globalData,o=a.findIndex((function(e){return e.id==t})),i=a[o];""==e&&"LAINNYA"==i.outboundType.toUpperCase()&&setTimeout((function(){var e=document.getElementById("row".concat(t,"-outboundReason"));e.classList.add("red","tooltip-custom"),e.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"}),300)},r.validateOutbountType=function(e,t,n){var a=r.props,o=a.globalData,i=a.setIsValidate,s=o;if(i(!1),"LAINNYA"!==e.toUpperCase())return i(!0),0;var u=s.findIndex((function(e){return e.id==t}));""==s[u].outboundReason&&setTimeout((function(){var e=document.getElementById("row".concat(t,"-outboundReason"));e.classList.add("red","tooltip-custom"),e.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"}),300)},r.validateSKUNumber=function(){var e=Object(o.a)(a.a.mark((function e(t,n,i,s){var u,l,c,d,p,m,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=r.props,l=u.globalData,c=u.setCsvDataTmp,d=u.setIsValidate,p=l,e.prev=2,d(!1),"/oss/skuByNumbers",m=null,f=null,setTimeout(Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m=document.getElementById("".concat(i)),f=document.getElementById("".concat(i,"span")),null!==m&&void 0!==m){e.next=4;break}return e.abrupt("return",0);case 4:return f.innerHTML="Validating",e.next=7,h()({method:"post",url:"/oss/skuByNumbers",data:{skuList:[t]}}).then((function(e){var r,a=null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.data,o=e.data.isSuccess,i=p.findIndex((function(e){return e.id==n}));!0===o&&a.length>0?(p[i][s]=a[0].skuNumber,p[i][s+"Reason"]=a[0].skuDescription,p[i][s+"Status"]=!0,p[i][s+"Uuid"]=a[0].id,m.classList.remove("red"),m.classList.add("hiddenTooltip"),"skuNumber"==s&&(p[i].skuUuid=a[0].id,p[i].photo=a[0].imageMd),"newGrade"==s&&(p[i].newGradeUom=a[0].uom)):(p[i][s]=t,p[i][s+"Reason"]="SKU Number Not Found",p[i][s+"Status"]=!1,p[i][s+"Uuid"]=null,m.classList.add("red"),m.classList.remove("hiddenTooltip"),f.innerHTML="SKU Number Not Found","skuNumber"==s&&(p[i].skuUuid="",p[i].photo=""),"newGrade"==s&&(p[i].newGradeUom=null)),c(p)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),r.state={validateStatus:!1,validateResult:"Please Wait...",rowCount:0,keyy:0},r}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.columns,r=t.hiddenRows,a=t.tableClass,o=t.warehouseArea,i=t.outboundType,s=t.setCheckingCsv,u=t.globalData,l=t.editable,c=void 0===l||l,m=t.warehousesData,v=void 0===m?[]:m,h=this.state,b=(h.validateStatus,h.keyy),w=[],g=[],N=[];if(v){var L;null===v||void 0===v||null===(L=v.data)||void 0===L||L.map((function(e){w.push(e.code),g.push(e.id),N.push(e.name)}))}var O=o.map((function(e){return e.label.toUpperCase()}))||[],C=o.map((function(e){return e.value}))||[],S=i?i.map((function(e){return e.label.toUpperCase()})):[],U=i?i.map((function(e){return e.value})):[],E=n.map((function(t,n){return t.validator=function(n,r,a,o){var i=t.dataField,u=i+"Status",l=i+"Reason",c=!0,d=null,p="row"+r.id+"-"+i;"wmsPoSkuCode"==i&&(e.validatePOSKU(n,r.id,p,i),c=!0),"skuNumber"==i&&(e.validateSKUNumber(n,r.id,p,i),c=!0);var m=["WASTE","SEMI WASTE"];if("newGrade"==i&&"waste"==e.props.transaction?m.includes(n.toUpperCase())?(r.newGradeUuid=n,r.newGradeUom=null):(d="Waste Type not found",h=!1,c=!1):"newGrade"==i&&(m.includes(n.toUpperCase())?(r.newGradeUuid=n,r.newGradeUom=null):parseInt(n)?(c=!0,e.validateSKUNumber(n,r.id,p,i)):""==n?(r.newGradeUuid=null,r.newGradeUom=null,c=!0):(d="Grade Undefined",h=!1,c=!1)),"outboundType"==i&&U.length>0)if(S.includes(n.toUpperCase())){var f=S.indexOf(n.toUpperCase());r.outboundTypeCode=U[f],c=!0,e.validateOutbountType(n,r.id,p)}else c=!1,d="Outbound Type Not Found";if("outboundReason"==i&&e.validateOutbountReason(n,r.id,p),"warehouse"==i&&(w.includes(n)?e.changeWarehouseUuid(n,"warehouseUuid","warehouseName",r.id,w,g,N):(c=!1,d="Warehouse Not Found")),"warehouseDestination"==i&&(w.includes(n)?e.changeWarehouseUuid(n,"warehouseDestinationUuid","warehouseDestinationName",r.id,w,g,N):(c=!1,d="Warehouse Not Found")),"areaName"==i||"areaNameDestination"==i)if(O.includes(n.toUpperCase())){var v=O.indexOf(n.toUpperCase());"areaNameDestination"==i?r.areaDestination=C[v]:r.areaSource=C[v],c=!0}else c=!1,d="Warehouse Area Not Found";"newPack"==i&&(!isNaN(n)?c=!0:(c=!1,d="Pack Should be a number"));var h=null;!1===(h="number"!=t.type||!isNaN(n))&&(d="".concat(t.text," Should be a ").concat(t.type));if(["grade","outboundReason","ripenessLevel","newRipeness","reason","expiryDate"].includes(i)&&""===n)d="",h=!0,c=!0;else if("grade"==i){["WASTE","SEMI WASTE"].includes(n.toUpperCase())||(d="Waste Type Not Found",h=!1,c=!1)}if("ripenessLevel"==i||"newRipeness"==i){[0,1,2,3].includes(parseInt(n))||""==n?(h=!0,c=!0,d="",""==n&&(n="")):(h=!1,c=!1,d="Undefined Ripeness Level")}if("date_indo"==t.type){n.match(/(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d/)||""==n?(h=!0,c=!0):(d="Date format must be 'dd-mm-yyyy'",h=!1,c=!1)}if(r[l]=d,c&&h){["wmsPoSkuCode","skuNumber"].includes(i)||(r[u]=!0,s())}return{valid:!(!c||!h),message:d}},t.formatter=function(e,n,r){var a=t.dataField,o=a+"Status",i=a+"Reason",s="row"+n.id+"-"+a,u=n[i];return!1===n[o]?(!1,!1,d.a.createElement("div",{id:s,className:"tooltip-custom red"},e,d.a.createElement("span",{id:s+"span",className:"tooltiptext"},u))):d.a.createElement("div",{id:s,className:"tooltip-custom hiddenTooltip"},e,d.a.createElement("span",{id:s+"span",className:"tooltiptext"},u))},t})),k={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?d.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?d.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:d.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return console.clear(),console.log(u),d.a.createElement(p.e,{className:"table-responsive"},d.a.createElement(f.a,{keyField:"id",data:u,columns:E,sort:k,classes:a||null,cellEdit:!0===c?y()({mode:"click",blurToSave:!0,nonEditableRows:function(){return e.props.dataDoubleRow||[]}}):null,bordered:!1,hiddenRows:r,key:b}))}}]),n}(d.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.columns,n=e.tableClass,r=e.data,a=t.map((function(e,t){return e.formatter=function(t,n,r){var a=e.dataField;return"uploadStatus"==a&&"Failed"===n.uploadStatus?d.a.createElement("div",{className:"tooltip-custom red"},t,d.a.createElement("span",{className:"tooltiptext"},n.uploadStatusReason)):"uploadStatus"==a&&"Success"===n.uploadStatus?d.a.createElement("div",{className:"green"},t,d.a.createElement("span",null)):d.a.createElement("div",null,t,d.a.createElement("span",null))},e})),o={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?d.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?d.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:d.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return d.a.createElement(p.e,{className:"table-responsive"},d.a.createElement(f.a,{keyField:"id",data:r,columns:a,sort:o,classes:n||null,bordered:!1}))}}]),n}(d.a.Component)},668:function(e,t,n){},690:function(e,t,n){"use strict";var r,a="object"===typeof Reflect?Reflect:null,o=a&&"function"===typeof a.apply?a.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=a&&"function"===typeof a.ownKeys?a.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!==e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise((function(n,r){function a(){void 0!==o&&e.removeListener("error",o),n([].slice.call(arguments))}var o;"error"!==t&&(o=function(n){e.removeListener(t,a),r(n)},e.once("error",o)),e.once(t,a)}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var u=10;function l(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function d(e,t,n,r){var a,o,i,s;if(l(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),i=o[t]),void 0===i)i=o[t]=n,++e._eventsCount;else if("function"===typeof i?i=o[t]=r?[n,i]:[i,n]:r?i.unshift(n):i.push(n),(a=c(e))>0&&i.length>a&&!i.warned){i.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=i.length,s=u,console&&console.warn&&console.warn(s)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function m(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},a=p.bind(r);return a.listener=n,r.wrapFn=a,a}function f(e,t,n){var r=e._events;if(void 0===r)return[];var a=r[t];return void 0===a?[]:"function"===typeof a?n?[a.listener||a]:[a]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(a):h(a,a.length)}function v(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,a=this._events;if(void 0!==a)r=r&&void 0===a.error;else if(!r)return!1;if(r){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var u=a[e];if(void 0===u)return!1;if("function"===typeof u)o(u,this,t);else{var l=u.length,c=h(u,l);for(n=0;n<l;++n)o(c[n],this,t)}return!0},s.prototype.addListener=function(e,t){return d(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return d(this,e,t,!0)},s.prototype.once=function(e,t){return l(t),this.on(e,m(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,m(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,a,o,i;if(l(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(a=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){i=n[o].listener,a=o;break}if(a<0)return this;0===a?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,a),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,i||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var a,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(a=o[r])&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},s.prototype.listeners=function(e){return f(this,e,!0)},s.prototype.rawListeners=function(e){return f(this,e,!1)},s.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},s.prototype.listenerCount=v,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},724:function(e,t,n){}}]);
//# sourceMappingURL=58.1ea11863.chunk.js.map