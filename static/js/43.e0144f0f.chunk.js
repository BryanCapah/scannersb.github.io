(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[43],{1255:function(e,t,a){"use strict";a.r(t);var n=a(659),o=a(1),s=a.n(o),u=a(56),r=a(20),i=(a(701),a(673)),l=a(675),c=(a(729),a(65)),d=a.n(c),m=a(91),p=a(19),v=a(663),b=a(22),f=a.n(b),h=function(e){var t=e.csvData,a=e.csvField,n=e.isShowErrorOnly,o=e.setIsShowErrorOnly,s=e.setIsHiddenRows,u=e.setCheckingCsv,r=[],i=[];t.map((function(e,t){var n=!0,o=t+1;a.map((function(t,a){var o=t.dataField+"Status";!1===e[o]&&(n=!1)})),!1===n?r.includes(o)||r.push(o):i.includes(o)||i.push(o)}));var l=[];if(!0===n){if((l=i.filter((function(e){return!r.includes(e)}))).length==t.length)return 0}else l=[];s(l),o(!n),u(!0)},y=function(e){var t=(new Date).getTime(),a=new Date(t).getMilliseconds(),n=[],o=[],s=e[0].warehouseSource||"";return e.map((function(e,t){n.includes(e.areaSource)||(o.push({id:t,warehouseSource:s,warehouseDestination:s,areaSource:e.areaSource,areaDestination:e.areaSource,list:[],createdAt:a}),n.push(e.areaSource))})),o},w=function(e){var t=[],a=e[0].warehouseSource||"";return e.map((function(e,n){var o=!1;t.forEach((function(t,a){t&&t.skuUuid==e.skuUuid&&t.warehouseSource==e.warehouseSource&&t.areaSource==e.areaSource&&(o=!0)})),o||t.push({warehouseSource:a,areaSource:e.areaSource,skuUuid:e.skuUuid,skuNumber:e.skuNumber,unitOfMeassures:e.uom,photo:e.photos,poList:[]})})),t},S=function(e,t){var a=[],n=e[0].warehouseSource||"";return e.map((function(e,t){var o=!1,s="";a.forEach((function(t,a){t&&t.areaSource==e.areaSource&&t.warehouseSource==e.warehouseSource&&t.skuUuid==e.skuUuid&&t.wmsPoSkuCode==e.wmsPoSkuCode&&t.ripenessLevel==e.ripenessLevel&&t.expiryDateCol==e.expiryDateCol&&(o=!0,s=a)})),o||(a.push({skuUuid:e.skuUuid||"",areaSource:e.areaSource||"",warehouseSource:n||"",expiryDateCol:e.expiryDateCol||"",expiryDate:f()(e.expiryDateCol,"DD-MM-YYYY").toDate().getTime()||"",inboundDate:e.inboundDate||"",supplierId:e.supplierUuid||"",supplierName:e.supplierName||"",wmsPoSkuCode:e.wmsPoSkuCode||"",codeGrade:e.skuUuid||"",ripenessLevel:e.ripenessLevel||0,itemList:[]}),s=a.length-1),a[s].itemList.push({qty:e.qty||0,pack:e.newPack||"",areaSource:e.areaSource,expiryDate:f()(e.expiryDateCol,"DD-MM-YYYY").toDate().getTime()||"",expiryDateText:e.expiryDateCol,skuNumber:e.skuNumber,wmsPoSkuCode:e.wmsPoSkuCode,ripeness:{label:e.ripenessLevel||"",value:e.ripenessLevel||0},codeOutbound:{label:e.outboundType||"",value:e.outboundTypeCode||""},note:e.outboundReason||"",areaName:e.areaName||""})})),a},k=function(e,t,a){return t.map((function(e,n){a.map((function(a,o){a&&a.areaSource==e.areaSource&&a.warehouseSource==e.warehouseSource&&a.skuUuid==e.skuUuid&&t[n].poList.push(a)}))})),e.map((function(n,o){t.map((function(t,s){a&&n.areaSource==t.areaSource&&n.warehouseSource==t.warehouseSource&&e[o].list.push(t)}))})),e},x=function(e){var t=[],a=1;return e.list.map((function(e,n){e.poList.map((function(e,n){e.wmsPoSkuCode,e.ripenessLevel;e.itemList.map((function(n,o){var s="Failed";n.isSuccess&&(s="Success"),t.push({id:a,uploadStatus:s||"",uploadStatusReason:n.message,wmsPoSkuCode:e.wmsPoSkuCode||"",skuNumber:n.skuNumber||"",expiryDateCol:n.expiryDateText||"",ripenessLevel:n.ripeness.label||"",qty:n.qty||0,outboundType:n.codeOutbound.label||"",outboundReason:n.note||"",areaName:n.areaName||"",newPack:n.pack||""}),a++}))}))})),t},E=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n,o,s,u,r,i,l,c,m,b,f,h;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.csvData,n=t.csvField,o=t.dispatch,t.selectorStatus,s=t.setIsShowModal,u=t.setIsSubmitText,r=t.setSubmitStatus,u("Loading..."),console.clear(),e.next=5,y(a);case 5:return i=e.sent,e.next=8,w(a);case 8:return l=e.sent,e.next=11,S(a);case 11:return c=e.sent,e.next=14,k(i,l,c);case 14:return m=e.sent,e.next=17,Object(v.r)({dataCsv:m,setSubmitStatus:r,dispatch:o,transaction:"additionalOutbound"});case 17:if("error"!=(b=e.sent)){e.next=20;break}return e.abrupt("return",0);case 20:return e.next=22,x(null===b||void 0===b?void 0:b.data);case 22:return f=e.sent,e.next=25,o({type:p.l,csvDataResult:f});case 25:return(h=[]).push({dataField:"uploadStatus",text:"Upload Status",type:"string",sort:!0}),n.map((function(e,t){h.push(e)})),e.next=30,o({type:p.l,csvFieldResult:h});case 30:s(!1),u("Submit"),r(!0);case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=a(665);t.default=Object(r.i)((function(e){var t=Object(u.c)(),a=Object(u.d)((function(e){return e.csvFileName})),r=Object(u.d)((function(e){return e.csvData})),c=Object(u.d)((function(e){return e.csvField})),d=Object(u.d)((function(e){return e.warehouseAreaCsv})),m=Object(u.d)((function(e){return e.outboundTypeCsv})),v=Object(u.d)((function(e){return e.status})),b=s.a.useState(!1),f=Object(n.a)(b,2),y=f[0],w=f[1],S=s.a.useState(null),k=Object(n.a)(S,2),x=k[0],N=k[1],C=s.a.useState(!0),O=Object(n.a)(C,2),T=O[0],D=O[1],U=s.a.useState(!1),I=Object(n.a)(U,2),j=I[0],L=I[1],F=s.a.useState(!1),B=Object(n.a)(F,2),R=B[0],P=B[1],W=s.a.useState(!0),A=Object(n.a)(W,2),q=A[0],M=A[1],V=s.a.useState(!1),G=Object(n.a)(V,2),K=G[0],H=G[1],Y=s.a.useState(null),J=Object(n.a)(Y,2),Q=J[0],X=(J[1],s.a.useState(null)),Z=Object(n.a)(X,2),z=Z[0],_=(Z[1],s.a.useState(null)),$=Object(n.a)(_,2),ee=$[0],te=($[1],s.a.useState(null)),ae=Object(n.a)(te,2),ne=ae[0],oe=(ae[1],s.a.useState(null)),se=Object(n.a)(oe,2),ue=se[0],re=(se[1],s.a.useState("Submit")),ie=Object(n.a)(re,2),le=ie[0],ce=ie[1],de=s.a.useState(null),me=Object(n.a)(de,2),pe=me[0],ve=(me[1],s.a.useState(null)),be=Object(n.a)(ve,2),fe=be[0],he=(be[1],s.a.useState(null)),ye=Object(n.a)(he,2),we=ye[0];ye[1];if(Object(o.useEffect)((function(){!function(e){var t=e.csvData,a=e.csvField,n=e.setIsValidate,o=e.setCheckingCsv;if(void 0===t)return 0;var s=!0;t.map((function(e,t){a.map((function(t,a){var n=e[t.dataField+"Status"];"codeOutbound"==t.dataField&&("LAINNYA"==e[t.dataField].toUpperCase()&&""==e.outboundReason&&(n=!1));!1===n&&(s=!1)}))})),n(!1!==s),o(!1)}({csvData:r,csvField:c,setIsValidate:L,setCheckingCsv:M})}),[q]),Object(o.useEffect)((function(){!0===K&&e.history.push("/inventory-entry/additional-outbound/CSV-upload/result")}),[K]),void 0===r||null===r)return e.history.push("/inventory-entry/additional-outbound/CSV-upload"),0;var Se=function(e){!function(e){var t=e.param,a=e.dispatch,n=e.setCheckingCsv;a({type:p.l,csvData:t}),n(!0)}({param:e,dispatch:t,setCheckingCsv:M}),h({csvData:r,csvField:c,isShowErrorOnly:!1,setIsShowErrorOnly:D,setIsHiddenRows:N,setCheckingCsv:M})};return s.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},s.a.createElement(i.a,{globalData:r,columns:c,tableClass:"reviewTable",hiddenRows:x,warehouseArea:d,outboundType:m,setCsvDataTmp:function(e){return Se(e)},setIsValidate:function(e){return L(e)},dispatch:t,setCheckingCsv:M}),s.a.createElement("div",{className:"row pt-3"},s.a.createElement("div",{className:"col-4"},s.a.createElement("button",{type:"button",className:"btn px-3 mr-3 text no-shadow",style:{backgroundColor:"#fff"},onClick:function(){return h({csvData:r,csvField:c,isShowErrorOnly:T,setIsShowErrorOnly:D,setIsHiddenRows:N,setCheckingCsv:M})}},"Show ",T?"Errors Only":"All"),s.a.createElement("button",{type:"button",className:"btn px-3 mr-3  text no-shadow",style:{backgroundColor:"#fff"},onClick:function(){return function(e){var t=e.csvData,a=e.csvField,n=e.dispatch,o=e.setCheckingCsv,s=[];t.map((function(e,t){var n=!0;a.map((function(t,a){var o=t.dataField+"Status";!1===e[o]&&(n=!1)})),!0===n&&s.push(e)})),n({type:p.l,csvData:s}),o(!0)}({csvData:r,csvField:c,dispatch:t,setCheckingCsv:M})}},"Delete Errors Field")),s.a.createElement("div",{className:"col-4",style:{lineHeight:"40px"}},"Review your imported file: ",a," (",r.length||0," Lines)"),s.a.createElement("div",{className:"col-4"},s.a.createElement("button",{type:"button",className:"btn px-5 bg-red text-white no-shadow float-right",onClick:function(){return e.history.goBack()}},"Discard"),s.a.createElement("button",{type:"button",class:"btn px-5 mr-3 text-white no-shadow float-right "+(!0===j&&(null===r||void 0===r?void 0:r.length)>0?"bg-green":"bg-primaryGrey disabled"),onClick:function(){return w(!y)}},"Submit"))),s.a.createElement(g.a,{status:v,onCloseFunction:function(){P(!1),H(!1)},statusDisplay:R,title:Q,cancelButtonTitle:ne,actionButtonTitle:ue,colorText:we,refreshOnCancel:!1,msg1:z,msg2:ee,cancelButtonClass:pe,actionButtonClass:fe+" ml-0",actionButtonEvent:function(){return e.history.push("/inventory-entry/additional-outbound/CSV-upload")}}),s.a.createElement(l.a,{submit:function(){return E({dispatch:t,csvData:r,setIsShowModal:w,setIsSubmitText:ce,setSubmitStatus:H,csvField:c})},submitText:le,show:y,setIsShowModal:w}))}))},671:function(e,t,a){},673:function(e,t,a){"use strict";a.d(t,"b",(function(){return S})),a.d(t,"a",(function(){return w}));var n=a(65),o=a.n(n),s=a(91),u=a(169),r=a(170),i=a(172),l=a(171),c=a(1),d=a.n(c),m=a(661),p=a(697),v=a.n(p),b=(a(674),a(699),a(47)),f=a.n(b),h=a(700),y=a.n(h),w=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).changeWarehouseUuid=function(e,t,a,u,r,i,l){var c=n.props,d=c.setCsvDataTmp,m=c.globalData,p=m.findIndex((function(e){return e.id==u})),v=r.indexOf(e);m[p][t]=i[v],m[p][a]=l[v],setTimeout(Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(m);case 1:case"end":return e.stop()}}),e)}))),400)},n.validatePOSKU=function(){var e=Object(s.a)(o.a.mark((function e(t,a,u){var r,i,l,c,d,m,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.props,i=r.setCsvDataTmp,l=r.globalData,c=r.setIsValidate,d=l,e.prev=2,c(!1),"/stocktake/rowValidationUpload",m=null,p=null,setTimeout(Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m=document.getElementById("".concat(u)),p=document.getElementById("".concat(u,"span")),null!==m&&void 0!==m){e.next=4;break}return e.abrupt("return",0);case 4:return p.innerHTML="Validating",e.next=7,f()({method:"post",url:"/stocktake/rowValidationUpload",data:{data:[t]}}).then((function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data,o=d.findIndex((function(e){return e.id==a}));n[0]&&!0===n[0].isExist?(d[o].wmsPoSkuCode=n[0].wmsPoSkuCode,d[o].wmsPoSkuCodeStatus=!0,d[o].wmsPoSkuCodeReason="PO SKU Code Not Found",d[o].expiryDate=n[0].expiryDate,d[o].inboundDate=n[0].inboundDate,d[o].supplierName=n[0].supplierName,d[o].supplierUuid=n[0].supplierUuid,d[o].uom=n[0].uom,d[o].photos=n[0].photos,m.classList.remove("red"),m.classList.add("hiddenTooltip")):(d[o].wmsPoSkuCodeStatus=!1,d[o].wmsPoSkuCodeReason="PO SKU Code Not Found",d[o].expiryDate="",d[o].inboundDate="",d[o].supplierName="",d[o].supplierUuid="",m.classList.add("red"),m.classList.remove("hiddenTooltip"),p.innerHTML="PO SKU Code Not Found"),i(d)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a,n){return e.apply(this,arguments)}}(),n.validateOutbountReason=function(e,t,a){var o=n.props.globalData,s=o.findIndex((function(e){return e.id==t})),u=o[s];""==e&&"LAINNYA"==u.outboundType.toUpperCase()&&setTimeout((function(){var e=document.getElementById("row".concat(t,"-outboundReason"));e.classList.add("red","tooltip-custom"),e.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"}),300)},n.validateOutbountType=function(e,t,a){var o=n.props,s=o.globalData,u=o.setIsValidate,r=s;if(u(!1),"LAINNYA"!==e.toUpperCase())return u(!0),0;var i=r.findIndex((function(e){return e.id==t}));""==r[i].outboundReason&&setTimeout((function(){var e=document.getElementById("row".concat(t,"-outboundReason"));e.classList.add("red","tooltip-custom"),e.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"}),300)},n.validateSKUNumber=function(){var e=Object(s.a)(o.a.mark((function e(t,a,u,r){var i,l,c,d,m,p,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.props,l=i.globalData,c=i.setCsvDataTmp,d=i.setIsValidate,m=l,e.prev=2,d(!1),"/oss/skuByNumbers",p=null,v=null,setTimeout(Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=document.getElementById("".concat(u)),v=document.getElementById("".concat(u,"span")),null!==p&&void 0!==p){e.next=4;break}return e.abrupt("return",0);case 4:return v.innerHTML="Validating",e.next=7,f()({method:"post",url:"/oss/skuByNumbers",data:{skuList:[t]}}).then((function(e){var n,o=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data,s=e.data.isSuccess,u=m.findIndex((function(e){return e.id==a}));!0===s&&o.length>0?(m[u][r]=o[0].skuNumber,m[u][r+"Reason"]=o[0].skuDescription,m[u][r+"Status"]=!0,m[u][r+"Uuid"]=o[0].id,p.classList.remove("red"),p.classList.add("hiddenTooltip"),"skuNumber"==r&&(m[u].skuUuid=o[0].id,m[u].photo=o[0].imageMd),"newGrade"==r&&(m[u].newGradeUom=o[0].uom)):(m[u][r]=t,m[u][r+"Reason"]="SKU Number Not Found",m[u][r+"Status"]=!1,m[u][r+"Uuid"]=null,p.classList.add("red"),p.classList.remove("hiddenTooltip"),v.innerHTML="SKU Number Not Found","skuNumber"==r&&(m[u].skuUuid="",m[u].photo=""),"newGrade"==r&&(m[u].newGradeUom=null)),c(m)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a,n,o){return e.apply(this,arguments)}}(),n.state={validateStatus:!1,validateResult:"Please Wait...",rowCount:0,keyy:0},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.columns,n=t.hiddenRows,o=t.tableClass,s=t.warehouseArea,u=t.outboundType,r=t.setCheckingCsv,i=t.globalData,l=t.editable,c=void 0===l||l,p=t.warehousesData,b=void 0===p?[]:p,f=this.state,h=(f.validateStatus,f.keyy),w=[],S=[],k=[];if(b){var x;null===b||void 0===b||null===(x=b.data)||void 0===x||x.map((function(e){w.push(e.code),S.push(e.id),k.push(e.name)}))}var E=s.map((function(e){return e.label.toUpperCase()}))||[],g=s.map((function(e){return e.value}))||[],N=u?u.map((function(e){return e.label.toUpperCase()})):[],C=u?u.map((function(e){return e.value})):[],O=a.map((function(t,a){return t.validator=function(a,n,o,s){var u=t.dataField,i=u+"Status",l=u+"Reason",c=!0,d=null,m="row"+n.id+"-"+u;"wmsPoSkuCode"==u&&(e.validatePOSKU(a,n.id,m,u),c=!0),"skuNumber"==u&&(e.validateSKUNumber(a,n.id,m,u),c=!0);var p=["WASTE","SEMI WASTE"];if("newGrade"==u&&"waste"==e.props.transaction?p.includes(a.toUpperCase())?(n.newGradeUuid=a,n.newGradeUom=null):(d="Waste Type not found",f=!1,c=!1):"newGrade"==u&&(p.includes(a.toUpperCase())?(n.newGradeUuid=a,n.newGradeUom=null):parseInt(a)?(c=!0,e.validateSKUNumber(a,n.id,m,u)):""==a?(n.newGradeUuid=null,n.newGradeUom=null,c=!0):(d="Grade Undefined",f=!1,c=!1)),"outboundType"==u&&C.length>0)if(N.includes(a.toUpperCase())){var v=N.indexOf(a.toUpperCase());n.outboundTypeCode=C[v],c=!0,e.validateOutbountType(a,n.id,m)}else c=!1,d="Outbound Type Not Found";if("outboundReason"==u&&e.validateOutbountReason(a,n.id,m),"warehouse"==u&&(w.includes(a)?e.changeWarehouseUuid(a,"warehouseUuid","warehouseName",n.id,w,S,k):(c=!1,d="Warehouse Not Found")),"warehouseDestination"==u&&(w.includes(a)?e.changeWarehouseUuid(a,"warehouseDestinationUuid","warehouseDestinationName",n.id,w,S,k):(c=!1,d="Warehouse Not Found")),"areaName"==u||"areaNameDestination"==u)if(E.includes(a.toUpperCase())){var b=E.indexOf(a.toUpperCase());"areaNameDestination"==u?n.areaDestination=g[b]:n.areaSource=g[b],c=!0}else c=!1,d="Warehouse Area Not Found";"newPack"==u&&(!isNaN(a)?c=!0:(c=!1,d="Pack Should be a number"));var f=null;!1===(f="number"!=t.type||!isNaN(a))&&(d="".concat(t.text," Should be a ").concat(t.type));if(["grade","outboundReason","ripenessLevel","newRipeness","reason","expiryDate"].includes(u)&&""===a)d="",f=!0,c=!0;else if("grade"==u){["WASTE","SEMI WASTE"].includes(a.toUpperCase())||(d="Waste Type Not Found",f=!1,c=!1)}if("ripenessLevel"==u||"newRipeness"==u){[0,1,2,3].includes(parseInt(a))||""==a?(f=!0,c=!0,d="",""==a&&(a="")):(f=!1,c=!1,d="Undefined Ripeness Level")}if("date_indo"==t.type){a.match(/(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d/)||""==a?(f=!0,c=!0):(d="Date format must be 'dd-mm-yyyy'",f=!1,c=!1)}if(n[l]=d,c&&f){["wmsPoSkuCode","skuNumber"].includes(u)||(n[i]=!0,r())}return{valid:!(!c||!f),message:d}},t.formatter=function(e,a,n){var o=t.dataField,s=o+"Status",u=o+"Reason",r="row"+a.id+"-"+o,i=a[u];return!1===a[s]?(!1,!1,d.a.createElement("div",{id:r,className:"tooltip-custom red"},e,d.a.createElement("span",{id:r+"span",className:"tooltiptext"},i))):d.a.createElement("div",{id:r,className:"tooltip-custom hiddenTooltip"},e,d.a.createElement("span",{id:r+"span",className:"tooltiptext"},i))},t})),T={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?d.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?d.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:d.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return console.clear(),console.log(i),d.a.createElement(m.e,{className:"table-responsive"},d.a.createElement(v.a,{keyField:"id",data:i,columns:O,sort:T,classes:o||null,cellEdit:!0===c?y()({mode:"click",blurToSave:!0,nonEditableRows:function(){return e.props.dataDoubleRow||[]}}):null,bordered:!1,hiddenRows:n,key:h}))}}]),a}(d.a.Component),S=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.columns,a=e.tableClass,n=e.data,o=t.map((function(e,t){return e.formatter=function(t,a,n){var o=e.dataField;return"uploadStatus"==o&&"Failed"===a.uploadStatus?d.a.createElement("div",{className:"tooltip-custom red"},t,d.a.createElement("span",{className:"tooltiptext"},a.uploadStatusReason)):"uploadStatus"==o&&"Success"===a.uploadStatus?d.a.createElement("div",{className:"green"},t,d.a.createElement("span",null)):d.a.createElement("div",null,t,d.a.createElement("span",null))},e})),s={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?d.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?d.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:d.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return d.a.createElement(m.e,{className:"table-responsive"},d.a.createElement(v.a,{keyField:"id",data:n,columns:o,sort:s,classes:a||null,bordered:!1}))}}]),a}(d.a.Component)},674:function(e,t,a){},675:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return p}));var n=a(659),o=a(1),s=a.n(o),u=a(661),r=(a(671),a(56)),i=a(664),l=a(709),c=function(e){var t=e.e,a=e.state,n=e.isCaptcha,o=e.setIsValidated,s=e.setIsType,u=e.isType,r=e.isValidated,l=e.submit,c=t.key,d=Object(i.a)(u);if("Enter"===c){if(!r)return;l()}if(["ArrowUp","ArrowDown","Tab","Delete"].includes(c))return 0;if("Backspace"===c){var m=Object(i.a)(u);""==m[a]&&1!==a&&(document.getElementById("t"+(parseInt(a)-1)).focus(),document.getElementById("t"+(parseInt(a)-1)).value="",m[a-1]="",d[a-1]=""),console.log(m)}else if("ArrowLeft"===c){if(1!==a)return document.getElementById("t"+(parseInt(a)-1)).focus(),document.getElementById("t"+(parseInt(a)-1)).setSelectionRange(-1,-1),0}else if("ArrowRight"===c){if(3!==a)return document.getElementById("t"+(parseInt(a)+1)).focus(),document.getElementById("t"+(parseInt(a)+1)).setSelectionRange(-1,-1),0}else 3!==a&&document.getElementById("t"+(parseInt(a)+1)).focus();d[a]="Backspace"===c?"":c.toUpperCase();if(!"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890".split("").includes(c.toUpperCase())&&""!=d[a])return 0;document.getElementById("t"+parseInt(a)).value=d[a],s(d);var p=!0;n.map((function(e,t){d[t+1]!=n[t]&&(p=!1),console.log(d[t+1],n[t],p)})),o(p)},d=a(662),m=function(e){var t,a,n,r=e.moduleEntry,i=e.confirmation,c=e.setConfirmation,m=e.save,p=e.submit,v=e.isSuccess,b=e.isLoading,f=e.moveAll,h=e.setAction,y=e.moduleName,w=e.noSkuChecking,S=e.singleViewData,k=document.documentElement.clientHeight-300,x="Submit";"save"===i.name&&(x="Save"),Object(o.useEffect)((function(){v&&c({show:!1,name:null})}),[v]),window.onkeydown=function(e){return 27===e.keyCode?c({show:!1,name:null}):null},Object(o.useEffect)((function(){h(i.name)}),[i]);var E=S&&!f?S:r,g=null===E||void 0===E||null===(t=E.jobPost)||void 0===t?void 0:t.areaDestinationName,N=null===E||void 0===E||null===(a=E.jobPost)||void 0===a?void 0:a.warehouseDestinationName,C=null===E||void 0===E||null===(n=E.jobPost)||void 0===n?void 0:n.areaName,O=function(e,t,a){if(null===e||void 0===e?void 0:e.length){var n=[];e.map((function(e){e.poList.map((function(o){o.itemList.map((function(o){var s,u,r,i,c,d,m=o.qty,p=o.grade,v=Object(l.a)(m)?parseInt(m):m?parseFloat(m):0,b=t?e.skuName:"waste"===a?(null===(s=o.wasteType)||void 0===s?void 0:s.label)?null===(u=o.wasteType)||void 0===u?void 0:u.label:e.skuName:null===p||void 0===p?void 0:p.label,f="waste"===a?"Semi Waste"===(null===(r=o.wasteType)||void 0===r?void 0:r.label)||"Waste"===(null===(i=o.wasteType)||void 0===i?void 0:i.label):"Waste"===(null===p||void 0===p?void 0:p.label)||"Semi Waste"===(null===p||void 0===p?void 0:p.label),h=t?e.unitOfMeassures:"gram"===(null===p||void 0===p?void 0:p.uom)?"kg":null===p||void 0===p?void 0:p.uom,y={sku:b,qty:v,uom:h,wqty:0,swqty:0};f&&(y.qty=0,y.sku=e.skuName),("waste"===a?"Waste"===(null===(c=o.wasteType)||void 0===c?void 0:c.label):"Waste"===(null===p||void 0===p?void 0:p.label))&&(y.wqty=v),("waste"===a?"Semi Waste"===(null===(d=o.wasteType)||void 0===d?void 0:d.label):"Semi Waste"===(null===p||void 0===p?void 0:p.label))&&(y.swqty=v);var w,S,k=n.findIndex((function(t){return(null===t||void 0===t?void 0:t.sku)===(f?e.skuName:b)}));("waste"!==a&&(-1===k&&n.push(y),-1!==k&&(f||(n[k].qty+=v),"Semi Waste"===(null===p||void 0===p?void 0:p.label)&&(n[k].swqty+=v),"Waste"===(null===p||void 0===p?void 0:p.label)&&(n[k].wqty+=v))),"waste"===a)&&(-1===k&&n.push(y),-1!==k&&(f||(n[k].qty+=v),"Semi Waste"===(null===(w=o.wasteType)||void 0===w?void 0:w.label)&&(n[k].swqty+=v),"Waste"===(null===(S=o.wasteType)||void 0===S?void 0:S.label)&&(n[k].wqty+=v)))}))}))}));var o=e.length?e[0].skuName:"No SKU",s=n.findIndex((function(e){return e.sku===o}));return n.forEach((function(e){-1!==s&&("Waste"===e.sku&&(n[s].wqty=e.qty),"Semi Waste"===e.sku&&(n[s].swqty=e.qty))})),n}}(null===E||void 0===E?void 0:E.jobPost.list,w,y);return s.a.createElement(u.B,{className:i.show?null:"d-none"},s.a.createElement(u.f,null,s.a.createElement(u.s,{show:i.show,closeOnBackdrop:!1},s.a.createElement(u.v,{className:"px-4 pt-5 border-none"},s.a.createElement(u.w,{className:"text LatoBold"},"Confirmation ",s.a.createElement("span",null,s.a.createElement("i",{className:"em em-pray"}))),s.a.createElement("label",{tabIndex:"0",onKeyDown:function(e){return 13===e.keyCode&&c({show:!1,name:null})},onClick:function(){return c({show:!1,name:null})},className:"sku-item iconU-modalClose"})),s.a.createElement(u.t,{className:"px-4 py-0",style:{minHeight:k}},s.a.createElement("p",{className:"text mb-2"},s.a.createElement("span",null,"Are you sure want to ".concat("Waste"==C?"update":"send"," this Item ")),s.a.createElement("span",{className:" ".concat(g?null:"d-none")}," from"),s.a.createElement("span",{className:"green ".concat(g?null:"d-none")}," ".concat(C," ")),s.a.createElement("span",null,"outbound"==y?"from":"repack"===y?"":"to"," "),s.a.createElement("span",{className:"green ".concat("repack"!==y?null:"d-none")}," ".concat("stockTransfer"===y?N:g||C," "))),s.a.createElement("p",{className:"text"},"Please double check this list, this record will store to database."),s.a.createElement("div",{style:{minHeight:k,maxHeight:k,overflow:"auto",border:"1px solid var(--lineGrey)"}},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",{style:{borderBottom:"1px solid var(--lineGrey)"}},s.a.createElement("th",{style:{color:"var(--emptyTextField)"}},"SKU List"),s.a.createElement("th",{style:{textAlign:"right",color:"var(--emptyTextField)"}},"Weight"),s.a.createElement("th",{style:{textAlign:"right",color:"var(--emptyTextField)"}},"Semi Waste"),s.a.createElement("th",{style:{textAlign:"right",color:"var(--emptyTextField)"}},"Waste"))),s.a.createElement("tbody",null,null===O||void 0===O?void 0:O.map((function(e){return s.a.createElement("tr",{style:{borderBottom:"1px solid var(--lineGrey)"}},s.a.createElement("td",{style:{maxWidth:"160px"}},e.sku),s.a.createElement("td",{className:"text-right py-3",style:{textAlign:"right"}},"".concat(Object(d.B)(null===e||void 0===e?void 0:e.qty))),s.a.createElement("td",{className:"text-right text-nowrap",style:{textAlign:"right"}},s.a.createElement("span",{className:"text-nowrap"},"".concat(Object(d.B)(null===e||void 0===e?void 0:e.swqty)," "))),s.a.createElement("td",{className:"text-right",style:{textAlign:"right"}},"".concat(Object(d.B)(null===e||void 0===e?void 0:e.wqty))))}))))),s.a.createElement("div",{className:"px-0 pb-5 pt-0 justify-content-start border-none"},s.a.createElement(u.d,{tabIndex:"0",onKeyDown:function(e){return 13===e.keyCode&&c({show:!1,name:null})},className:"bg-background sku-item text no-shadow px-5 mt-4 mb-0 mx-0",onClick:function(){return c({show:!1,name:null})}},"Cancel"),s.a.createElement(u.d,{tabIndex:"0",onKeyDown:function(e){return 13===e.keyCode&&(b?null:"save"===i.name?m():p())},className:"".concat(b?"bg-softGreen text":"bg-green text-white"," no-shadow px-5 mt-4 sku-item mb-0 ml-3 mr-0"),onClick:function(){return b?null:"save"===i.name?m():p()}},b?"Processing...":x)," ")))))},p=function(e){for(var t=e.show,a=void 0!==t&&t,i=e.setIsShowModal,l=e.submit,d=e.submitText,m=void 0===d?"Submit":d,p="",v="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",b=v.length,f=[],h=0;h<3;h++){var y=v.charAt(Math.floor(Math.random()*b));p+=y,f.push(y)}Object(r.c)();var w=Object(r.d)((function(e){return e.csvFileName})),S=s.a.useState(f),k=Object(n.a)(S,2),x=k[0],E=(k[1],s.a.useState(p)),g=Object(n.a)(E,2),N=g[0],C=(g[1],s.a.useState(!1)),O=Object(n.a)(C,2),T=O[0],D=O[1],U=s.a.useState("Submit"),I=Object(n.a)(U,2),j=(I[0],I[1],s.a.useState([])),L=Object(n.a)(j,2),F=L[0],B=L[1];return Object(o.useEffect)((function(){!0===a&&(document.getElementById("t1").value="",document.getElementById("t2").value="",document.getElementById("t3").value="")}),[a]),s.a.createElement(u.B,{className:a?null:"d-none"},s.a.createElement(u.f,null,s.a.createElement(u.s,{show:a,onClose:function(){i(!1)},size:"lg",style:{height:"400px"}},s.a.createElement(u.v,{className:"px-5 pt-5 border-none"},s.a.createElement(u.w,{className:"text LatoBold"},"Confirmation")),s.a.createElement(u.t,{className:"px-5 py-0"},s.a.createElement("p",{className:"text mb-2"},"Are you sure want to upload ",s.a.createElement("span",{className:"green"},"Edited")," ",w,"?"),s.a.createElement("p",{className:"text"},"Once uploaded this record will store to databases."),s.a.createElement("p",{className:"text mb-2"},"Please type \u2018",N,"\u2019 on the Box to confirm upload file."),s.a.createElement("div",{className:"captcha-box"},s.a.createElement("input",{autocomplete:"off",onKeyUp:function(e){c({e:e,state:1,isCaptcha:x,setIsValidated:D,setIsType:B,isType:F,isValidated:T,submit:l})},id:"t1",type:"text",style:{textTransform:"uppercase"},className:"captcha-input",maxLength:"1",placeholder:x[0]}),s.a.createElement("input",{autocomplete:"off",onKeyUp:function(e){c({e:e,state:2,isCaptcha:x,setIsValidated:D,setIsType:B,isType:F,isValidated:T,submit:l})},id:"t2",type:"text",style:{textTransform:"uppercase"},className:"captcha-input ml-0 mr-0",maxLength:"1",placeholder:x[1]}),s.a.createElement("input",{autocomplete:"off",onKeyUp:function(e){c({e:e,state:3,isCaptcha:x,setIsValidated:D,setIsType:B,isType:F,isValidated:T,submit:l})},id:"t3",type:"text",style:{textTransform:"uppercase"},className:"captcha-input",maxLength:"1",placeholder:x[2]}))),s.a.createElement(u.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},s.a.createElement(u.d,{className:"bg-background text no-shadow px-5 mt-4 mb-0 mx-0",onClick:function(){i(!1)}},"Cancel"),s.a.createElement(u.d,{className:(T?"bg-green":"bg-emptyTextField disabled")+" no-shadow px-5 mt-4 mb-0 ml-3 mr-0",onClick:function(){l(),D(!1)}},m)," "))))}},729:function(e,t,a){}}]);
//# sourceMappingURL=43.e0144f0f.chunk.js.map