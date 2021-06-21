(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[65],{1215:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(56),s=a(20),u=a(675);a(729);t.default=Object(s.i)((function(e){var t=Object(r.d)((function(e){return e.csvFileName})),a=Object(r.d)((function(e){return e.csvDataResult})),s=Object(r.d)((function(e){return e.csvFieldResult}));return Object(n.useEffect)((function(){}),[a]),void 0===a||null===a?(e.history.push("/inventory-entry/stock-take/CSV-upload"),0):o.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},o.a.createElement(u.b,{columns:s,tableClass:"reviewTable",data:a}),o.a.createElement("div",{className:"row pt-3"},o.a.createElement("div",{className:"col-4"},o.a.createElement("button",{type:"button",className:"btn px-3 mr-3 text no-shadow",style:{backgroundColor:"#fff"},onClick:function(){return e.history.push("/inventory-entry/stock-take/CSV-upload")}},"Upload Another File")),o.a.createElement("div",{className:"col-4",style:{lineHeight:"40px"}},"Review your imported file: ",t," (",a.length||0," Lines)")))}))},675:function(e,t,a){"use strict";a.d(t,"b",(function(){return y})),a.d(t,"a",(function(){return w}));var n=a(65),o=a.n(n),r=a(91),s=a(169),u=a(170),i=a(172),l=a(171),d=a(1),c=a.n(d),p=a(660),m=a(706),b=a.n(m),f=(a(676),a(707),a(47)),v=a.n(f),h=a(708),N=a.n(h),w=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeWarehouseUuid=function(e,t,a,s,u,i,l){var d=n.props,c=d.setCsvDataTmp,p=d.globalData,m=p.findIndex((function(e){return e.id==s})),b=u.indexOf(e);p[m][t]=i[b],p[m][a]=l[b],setTimeout(Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(p);case 1:case"end":return e.stop()}}),e)}))),400)},n.validatePOSKU=function(){var e=Object(r.a)(o.a.mark((function e(t,a,s){var u,i,l,d,c,p,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=n.props,i=u.setCsvDataTmp,l=u.globalData,d=u.setIsValidate,"additional_inbound"!=u.transaction){e.next=3;break}return e.abrupt("return");case 3:c=l,e.prev=4,d(!1),"/stocktake/rowValidationUpload",p=null,m=null,setTimeout(Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=document.getElementById("".concat(s)),m=document.getElementById("".concat(s,"span")),null!==p&&void 0!==p){e.next=4;break}return e.abrupt("return",0);case 4:return m.innerHTML="Validating",e.next=7,v()({method:"post",url:"/stocktake/rowValidationUpload",data:{data:[t]}}).then((function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data,o=c.findIndex((function(e){return e.id==a}));n[0]&&!0===n[0].isExist?(c[o].wmsPoSkuCode=n[0].wmsPoSkuCode,c[o].wmsPoSkuCodeStatus=!0,c[o].wmsPoSkuCodeReason="PO SKU Code Not Found",c[o].expiryDate=n[0].expiryDate,c[o].inboundDate=n[0].inboundDate,c[o].supplierName=n[0].supplierName,c[o].supplierUuid=n[0].supplierUuid,c[o].uom=n[0].uom,c[o].photos=n[0].photos,p.classList.remove("red"),p.classList.add("hiddenTooltip")):(c[o].wmsPoSkuCodeStatus=!1,c[o].wmsPoSkuCodeReason="PO SKU Code Not Found",c[o].expiryDate="",c[o].inboundDate="",c[o].supplierName="",c[o].supplierUuid="",p.classList.add("red"),p.classList.remove("hiddenTooltip"),m.innerHTML="PO SKU Code Not Found"),i(c)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(4),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,a,n){return e.apply(this,arguments)}}(),n.validateOutbountReason=function(e,t,a){var o=n.props.globalData,r=o.findIndex((function(e){return e.id==t})),s=o[r];""==e&&"LAINNYA"==s.outboundType.toUpperCase()&&setTimeout((function(){var e=document.getElementById("row".concat(t,"-outboundReason"));e.classList.add("red","tooltip-custom"),e.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"}),300)},n.validateOutbountType=function(e,t,a){var o=n.props,r=o.globalData,s=o.setIsValidate,u=r;if(s(!1),"LAINNYA"!==e.toUpperCase())return s(!0),0;var i=u.findIndex((function(e){return e.id==t}));""==u[i].outboundReason&&setTimeout((function(){var e=document.getElementById("row".concat(t,"-outboundReason"));e.classList.add("red","tooltip-custom"),e.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"}),300)},n.validateSKUNumber=function(){var e=Object(r.a)(o.a.mark((function e(t,a,s,u){var i,l,d,c,p,m,b,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.props,l=i.globalData,d=i.setCsvDataTmp,c=i.setIsValidate,p=i.transaction,m=l,e.prev=2,c(!1),"/oss/skuByNumbers",b=null,f=null,setTimeout(Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b=document.getElementById("".concat(s)),f=document.getElementById("".concat(s,"span")),null!==b&&void 0!==b){e.next=4;break}return e.abrupt("return",0);case 4:return f.innerHTML="Validating",e.next=7,v()({method:"post",url:"/oss/skuByNumbers",data:{skuList:[t]}}).then((function(e){var n,o=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data,r=e.data.isSuccess,s=m.findIndex((function(e){return e.id==a}));!0===r&&o.length>0?(m[s][u]=o[0].skuNumber,m[s][u+"Reason"]=o[0].skuDescription,m[s][u+"Status"]=!0,m[s][u+"Uuid"]=o[0].id,b.classList.remove("red"),b.classList.add("hiddenTooltip"),"skuNumber"==u&&(m[s].skuUuid=o[0].id,m[s].photo=o[0].imageMd),"newGrade"==u&&(m[s].newGradeUom=o[0].uom),"additional_inbound"==p&&(m[s].uom=o[0].uom)):(m[s][u]=t,m[s][u+"Reason"]="SKU Number Not Found",m[s][u+"Status"]=!1,m[s][u+"Uuid"]=null,b.classList.add("red"),b.classList.remove("hiddenTooltip"),f.innerHTML="SKU Number Not Found","skuNumber"==u&&(m[s].skuUuid="",m[s].photo=""),"newGrade"==u&&(m[s].newGradeUom=null),"additional_inbound"==p&&(m[s].uom="")),d(m)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a,n,o){return e.apply(this,arguments)}}(),n.state={validateStatus:!1,validateResult:"Please Wait...",rowCount:0,keyy:0},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.columns,n=t.hiddenRows,o=t.tableClass,r=t.warehouseArea,s=t.outboundType,u=t.setCheckingCsv,i=t.globalData,l=t.editable,d=void 0===l||l,m=t.warehousesData,f=void 0===m?[]:m,v=this.state,h=(v.validateStatus,v.keyy),w=[],y=[],k=[];if(f){var U;null===f||void 0===f||null===(U=f.data)||void 0===U||U.map((function(e){w.push(e.code),y.push(e.id),k.push(e.name)}))}var S=r.map((function(e){return e.label.toUpperCase()}))||[],C=r.map((function(e){return e.value}))||[],E=s?s.map((function(e){return e.label.toUpperCase()})):[],O=s?s.map((function(e){return e.value})):[],x=a.map((function(t,a){return t.validator=function(a,n,o,r){var s=t.dataField,i=s+"Status",l=s+"Reason",d=null,c=null,p="row"+n.id+"-"+s;"wmsPoSkuCode"==s&&(e.validatePOSKU(a,n.id,p,s),d=!0),"skuNumber"==s&&(e.validateSKUNumber(a,n.id,p,s),d=!0);var m=["WASTE","SEMI WASTE"];if("newGrade"==s&&"waste"==e.props.transaction?m.includes(a.toUpperCase())?(n.newGradeUuid=a,n.newGradeUom=null):(c="Waste Type not found",v=!1,d=!1):"newGrade"==s&&(m.includes(a.toUpperCase())?(n.newGradeUuid=a,n.newGradeUom=null):parseInt(a)?(d=!0,e.validateSKUNumber(a,n.id,p,s)):""==a?(n.newGradeUuid=null,n.newGradeUom=null,d=!0):(c="Grade Undefined",v=!1,d=!1)),"outboundType"==s&&O.length>0)if(E.includes(a.toUpperCase())){var b=E.indexOf(a.toUpperCase());n.outboundTypeCode=O[b],d=!0,e.validateOutbountType(a,n.id,p)}else d=!1,c="Outbound Type Not Found";if("outboundReason"==s&&e.validateOutbountReason(a,n.id,p),"warehouse"==s&&(w.includes(a)?e.changeWarehouseUuid(a,"warehouseUuid","warehouseName",n.id,w,y,k):(d=!1,c="Warehouse Not Found")),"warehouseDestination"==s&&(w.includes(a)?e.changeWarehouseUuid(a,"warehouseDestinationUuid","warehouseDestinationName",n.id,w,y,k):(d=!1,c="Warehouse Not Found")),"areaName"==s||"areaNameDestination"==s)if(S.includes(a.toUpperCase())){var f=S.indexOf(a.toUpperCase());"areaNameDestination"==s?n.areaDestination=C[f]:n.areaSource=C[f],d=!0}else d=!1,c="Warehouse Area Not Found";"newPack"==s&&(!isNaN(a)?d=!0:(d=!1,c="Pack Should be a number"));var v=null;!1===(v="number"!=t.type||!isNaN(a))&&(c="".concat(t.text," Should be a ").concat(t.type));if(["grade","outboundReason","ripenessLevel","newRipeness","reason","expiryDate"].includes(s)&&""===a?(c="",v=!0,d=!0):"grade"==s&&(m.includes(a.toUpperCase())||(c="Waste Type Not Found",v=!1,d=!1)),"ripenessLevel"==s||"newRipeness"==s){[0,1,2,3].includes(parseInt(a))||""==a?(v=!0,d=!0,c="",""==a&&(a="")):(v=!1,d=!1,c="Undefined Ripeness Level")}if("date_indo"==t.type){a.match(/(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d/)||""==a?(v=!0,d=!0):(c="Date format must be 'dd-mm-yyyy'",v=!1,d=!1)}if(n[l]=c,d&&v){["wmsPoSkuCode","skuNumber"].includes(s)||(n[i]=!0,u())}return{valid:!(!d||!v),message:c}},t.formatter=function(e,a,n){var o=t.dataField,r=o+"Status",s=o+"Reason",u="row"+a.id+"-"+o,i=a[s];return!1===a[r]?(!1,!1,c.a.createElement("div",{id:u,className:"tooltip-custom red"},e,c.a.createElement("span",{id:u+"span",className:"tooltiptext"},i))):c.a.createElement("div",{id:u,className:"tooltip-custom hiddenTooltip"},e,c.a.createElement("span",{id:u+"span",className:"tooltiptext"},i))},t})),g={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?c.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?c.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:c.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return console.clear(),console.log(i),c.a.createElement(p.e,{className:"table-responsive"},c.a.createElement(b.a,{keyField:"id",data:i,columns:x,sort:g,classes:o||null,cellEdit:!0===d?N()({mode:"click",blurToSave:!0,nonEditableRows:function(){return e.props.dataDoubleRow||[]}}):null,bordered:!1,hiddenRows:n,key:h}))}}]),a}(c.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.columns,a=e.tableClass,n=e.data,o=t.map((function(e,t){return e.formatter=function(t,a,n){var o=e.dataField;return"uploadStatus"==o&&"Failed"===a.uploadStatus?c.a.createElement("div",{className:"tooltip-custom red"},t,c.a.createElement("span",{className:"tooltiptext"},a.uploadStatusReason)):"uploadStatus"==o&&"Success"===a.uploadStatus?c.a.createElement("div",{className:"green"},t,c.a.createElement("span",null)):c.a.createElement("div",null,t,c.a.createElement("span",null))},e})),r={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?c.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?c.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:c.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return c.a.createElement(p.e,{className:"table-responsive"},c.a.createElement(b.a,{keyField:"id",data:n,columns:o,sort:r,classes:a||null,bordered:!1}))}}]),a}(c.a.Component)},676:function(e,t,a){},729:function(e,t,a){}}]);
//# sourceMappingURL=65.eea847a3.chunk.js.map