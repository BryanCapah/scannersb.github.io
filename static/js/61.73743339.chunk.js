(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[61],{1222:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),s=a(56),r=a(20),u=a(676);a(734);t.default=Object(r.i)((function(e){var t=Object(s.d)((function(e){return e.csvFileName})),a=Object(s.d)((function(e){return e.csvDataResult})),r=Object(s.d)((function(e){return e.csvFieldResult}));return console.log("selectorCsvDataResult",a),console.log("csvFieldResult",r),Object(n.useEffect)((function(){}),[a]),void 0===a||null===a?(e.history.push("/inventory-entry/additional-outbound/CSV-upload"),0):o.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},o.a.createElement(u.b,{columns:r,tableClass:"reviewTable",data:a}),o.a.createElement("div",{className:"row pt-3"},o.a.createElement("div",{className:"col-4"},o.a.createElement("button",{type:"button",className:"btn px-3 mr-3 text no-shadow",style:{backgroundColor:"#fff"},onClick:function(){return e.history.push("/inventory-entry/additional-outbound/CSV-upload")}},"Upload Another File")),o.a.createElement("div",{className:"col-4",style:{lineHeight:"40px"}},"Review your imported file: ",t," (",a.length||0," Lines)")))}))},676:function(e,t,a){"use strict";a.d(t,"b",(function(){return y})),a.d(t,"a",(function(){return w}));var n=a(65),o=a.n(n),s=a(91),r=a(169),u=a(170),i=a(172),l=a(171),d=a(1),c=a.n(d),p=a(660),m=a(707),b=a.n(m),v=(a(677),a(708),a(47)),f=a.n(v),h=a(709),N=a.n(h),w=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).changeOutboundReason=function(e){setTimeout((function(){var t=document.getElementById("row".concat(e,"-outboundReason"));t.classList.add("red","tooltip-custom"),t.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"}),300)},n.changeWarehouseUuid=function(e,t,a,r,u,i,l){var d=n.props,c=d.setCsvDataTmp,p=d.globalData,m=p.findIndex((function(e){return e.id==r})),b=u.indexOf(e);p[m][t]=i[b],p[m][a]=l[b],console.clear(),console.log(e,u),console.log(p),setTimeout(Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(p);case 1:case"end":return e.stop()}}),e)}))),400)},n.validatePOSKU=function(){var e=Object(s.a)(o.a.mark((function e(t,a,r){var u,i,l,d,c,p,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=n.props,i=u.setCsvDataTmp,l=u.globalData,d=u.setIsValidate,"additional_inbound"!=u.transaction){e.next=3;break}return e.abrupt("return");case 3:c=l,e.prev=4,d(!1),"/stocktake/rowValidationUpload",p=null,m=null,setTimeout(Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=document.getElementById("".concat(r)),m=document.getElementById("".concat(r,"span")),null!==p&&void 0!==p){e.next=4;break}return e.abrupt("return",0);case 4:return m.innerHTML="Validating",e.next=7,f()({method:"post",url:"/stocktake/rowValidationUpload",data:{data:[t]}}).then((function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data,o=c.findIndex((function(e){return e.id==a}));n[0]&&!0===n[0].isExist?(c[o].wmsPoSkuCode=n[0].wmsPoSkuCode,c[o].wmsPoSkuCodeStatus=!0,c[o].wmsPoSkuCodeReason="PO SKU Code Not Found",c[o].expiryDate=n[0].expiryDate,c[o].inboundDate=n[0].inboundDate,c[o].supplierName=n[0].supplierName,c[o].supplierUuid=n[0].supplierUuid,c[o].uom=n[0].uom,c[o].photos=n[0].photos,p.classList.remove("red"),p.classList.add("hiddenTooltip")):(c[o].wmsPoSkuCodeStatus=!1,c[o].wmsPoSkuCodeReason="PO SKU Code Not Found",c[o].expiryDate="",c[o].inboundDate="",c[o].supplierName="",c[o].supplierUuid="",p.classList.add("red"),p.classList.remove("hiddenTooltip"),m.innerHTML="PO SKU Code Not Found"),i(c)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(4),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,a,n){return e.apply(this,arguments)}}(),n.validateOutbountReason=function(e,t,a){var o=n.props.globalData,s=o.findIndex((function(e){return e.id==t})),r=o[s];""==e&&"LAINNYA"==r.outboundType.toUpperCase()&&n.changeOutboundReason(t)},n.validateOutbountType=function(e,t,a){var o=n.props,s=o.globalData,r=o.setIsValidate,u=s;if(r(!1),"LAINNYA"!==e.toUpperCase())return r(!0),0;var i=u.findIndex((function(e){return e.id==t}));""==u[i].outboundReason&&n.changeOutboundReason(t)},n.validateSKUNumber=function(){var e=Object(s.a)(o.a.mark((function e(t,a,r,u){var i,l,d,c,p,m,b,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.props,l=i.globalData,d=i.setCsvDataTmp,c=i.setIsValidate,p=i.transaction,m=l,e.prev=2,c(!1),"/oss/skuByNumbers",b=null,v=null,setTimeout(Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b=document.getElementById("".concat(r)),v=document.getElementById("".concat(r,"span")),null!==b&&void 0!==b){e.next=4;break}return e.abrupt("return",0);case 4:return v.innerHTML="Validating",e.next=7,f()({method:"post",url:"/oss/skuByNumbers",data:{skuList:[t]}}).then((function(e){var n,o=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data,s=e.data.isSuccess,r=m.findIndex((function(e){return e.id==a}));!0===s&&o.length>0?(m[r][u]=o[0].skuNumber,m[r][u+"Reason"]=o[0].skuDescription,m[r][u+"Status"]=!0,m[r][u+"Uuid"]=o[0].id,b.classList.remove("red"),b.classList.add("hiddenTooltip"),"skuNumber"==u&&(m[r].skuUuid=o[0].id,m[r].photo=o[0].imageMd),"newGrade"==u&&(m[r].newGradeUom=o[0].uom),"additional_inbound"==p&&(m[r].uom=o[0].uom)):(m[r][u]=t,m[r][u+"Reason"]="SKU Number Not Found",m[r][u+"Status"]=!1,m[r][u+"Uuid"]=null,b.classList.add("red"),b.classList.remove("hiddenTooltip"),v.innerHTML="SKU Number Not Found","skuNumber"==u&&(m[r].skuUuid="",m[r].photo=""),"newGrade"==u&&(m[r].newGradeUom=null),"additional_inbound"==p&&(m[r].uom="")),d(m)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a,n,o){return e.apply(this,arguments)}}(),n.state={validateStatus:!1,validateResult:"Please Wait...",rowCount:0,keyy:0},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.columns,n=t.hiddenRows,o=t.tableClass,s=t.warehouseArea,r=t.outboundType,u=t.setCheckingCsv,i=t.globalData,l=t.editable,d=void 0===l||l,m=t.warehousesData,v=void 0===m?[]:m,f=this.state,h=(f.validateStatus,f.keyy),w=[],y=[],U=[];if(v){var k;null===v||void 0===v||null===(k=v.data)||void 0===k||k.map((function(e){w.push(e.code),y.push(e.id),U.push(e.name)}))}var S=s.map((function(e){return e.label.toUpperCase()}))||[],g=s.map((function(e){return e.value}))||[],C=r?r.map((function(e){return e.label.toUpperCase()})):[],E=r?r.map((function(e){return e.value})):[],O=a.map((function(t,a){return t.validator=function(a,n,o,s){var r=t.dataField,i=r+"Status",l=r+"Reason",d=!0,c=null,p="row"+n.id+"-"+r;"wmsPoSkuCode"==r&&(e.validatePOSKU(a,n.id,p,r),d=!0),"skuNumber"==r&&(e.validateSKUNumber(a,n.id,p,r),d=!0);var m=["WASTE","SEMI WASTE"];if("newGrade"==r&&"waste"==e.props.transaction?m.includes(a.toUpperCase())?(n.newGradeUuid=a,n.newGradeUom=null):(c="Waste Type not found",f=!1,d=!1):"newGrade"==r&&(m.includes(a.toUpperCase())?(n.newGradeUuid=a,n.newGradeUom=null):parseInt(a)?(d=!0,e.validateSKUNumber(a,n.id,p,r)):""==a?(n.newGradeUuid=null,n.newGradeUom=null,d=!0):(c="Grade Undefined",f=!1,d=!1)),"outboundType"==r&&E.length>0)if(C.includes(a.toUpperCase())){var b=C.indexOf(a.toUpperCase());n.outboundTypeCode=E[b],d=!0,e.validateOutbountType(a,n.id,p)}else d=!1,c="Outbound Type Not Found";if("outboundReason"==r&&e.validateOutbountReason(a,n.id,p),"warehouse"==r&&(w.includes(a)?(d=!0,e.changeWarehouseUuid(a,"warehouseUuid","warehouseName",n.id,w,y,U)):(d=!1,c="Warehouse Not Found")),"warehouseDestination"==r&&(w.includes(a)?(d=!0,e.changeWarehouseUuid(a,"warehouseDestinationUuid","warehouseDestinationName",n.id,w,y,U)):(d=!1,c="Warehouse Not Found"),console.log(d)),"areaName"==r||"areaNameDestination"==r)if(S.includes(a.toUpperCase())){var v=S.indexOf(a.toUpperCase());"areaNameDestination"==r?n.areaDestination=g[v]:n.areaSource=g[v],d=!0}else d=!1,c="Warehouse Area Not Found";"newPack"==r&&(!isNaN(a)?d=!0:(d=!1,c="Pack Should be a number"));var f=null;!1===(f="number"!=t.type||!isNaN(a))&&(c="".concat(t.text," Should be a ").concat(t.type));if(["grade","outboundReason","ripenessLevel","newRipeness","reason","expiryDate"].includes(r)&&""===a?(c="",f=!0,d=!0):"grade"==r&&(m.includes(a.toUpperCase())||(c="Waste Type Not Found",f=!1,d=!1)),"ripenessLevel"==r||"newRipeness"==r){[0,1,2,3].includes(parseInt(a))||""==a?(f=!0,d=!0,c="",""==a&&(a="")):(f=!1,d=!1,c="Undefined Ripeness Level")}if("date_indo"==t.type){a.match(/(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d/)||""==a?(f=!0,d=!0):(c="Date format must be 'dd-mm-yyyy'",f=!1,d=!1)}if(n[l]=c,d&&f){["wmsPoSkuCode","skuNumber"].includes(r)||(n[i]=!0,u())}return console.clear(),console.log(d,f),console.log("reason",c),{valid:!(!d||!f),message:c}},t.formatter=function(e,a,n){var o=t.dataField,s=o+"Status",r=o+"Reason",u="row"+a.id+"-"+o,i=a[r];return!1===a[s]?(!1,!1,c.a.createElement("div",{id:u,className:"tooltip-custom red"},e,c.a.createElement("span",{id:u+"span",className:"tooltiptext"},i))):c.a.createElement("div",{id:u,className:"tooltip-custom hiddenTooltip"},e,c.a.createElement("span",{id:u+"span",className:"tooltiptext"},i))},t})),x={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?c.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?c.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:c.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return console.log(i),c.a.createElement(p.e,{className:"table-responsive"},c.a.createElement(b.a,{keyField:"id",data:i,columns:O,sort:x,classes:o||null,cellEdit:!0===d?N()({mode:"click",blurToSave:!0,nonEditableRows:function(){return e.props.dataDoubleRow||[]}}):null,bordered:!1,hiddenRows:n,key:h}))}}]),a}(c.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.columns,a=e.tableClass,n=e.data,o=t.map((function(e,t){return e.formatter=function(t,a,n){var o=e.dataField;return"uploadStatus"==o&&"Failed"===a.uploadStatus?c.a.createElement("div",{className:"tooltip-custom red"},t,c.a.createElement("span",{className:"tooltiptext"},a.uploadStatusReason)):"uploadStatus"==o&&"Success"===a.uploadStatus?c.a.createElement("div",{className:"green"},t,c.a.createElement("span",null)):c.a.createElement("div",null,t,c.a.createElement("span",null))},e})),s={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?c.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?c.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:c.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return c.a.createElement(p.e,{className:"table-responsive"},c.a.createElement(b.a,{keyField:"id",data:n,columns:o,sort:s,classes:a||null,bordered:!1}))}}]),a}(c.a.Component)},677:function(e,t,a){},734:function(e,t,a){}}]);
//# sourceMappingURL=61.73743339.chunk.js.map