(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[46],{1249:function(e,t,a){"use strict";a.r(t);var n=a(659),s=a(1),o=a.n(s),l=a(56),r=a(20),u=(a(693),a(675)),i=a(677),c=(a(698),a(65)),d=a.n(c),m=a(91),p=a(19),v=a(663),b=a(22),f=a.n(b),h=function(e){var t=e.csvData,a=e.csvField,n=e.isShowErrorOnly,s=e.setIsShowErrorOnly,o=e.setIsHiddenRows,l=e.setCheckingCsv,r=[],u=[];t.map((function(e,t){var n=!0,s=t+1;a.map((function(t,a){var s=t.dataField+"Status";!1===e[s]&&(n=!1)})),!1===n?r.includes(s)||r.push(s):u.includes(s)||u.push(s)}));var i=[];if(!0===n){if((i=u.filter((function(e){return!r.includes(e)}))).length==t.length)return 0}else i=[];o(i),s(!n),l(!0)},y=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n,s,o,l,r,u,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.csvData,n=t.dispatch,s=t.setIsSubmitText,o=t.setSubmitStatus,l=t.setMsg1,r=t.setIsShowModal,console.log(a),s("Loading..."),u=null===a||void 0===a?void 0:a.map((function(e,t){return{warehouse:e.warehouseUuid,skuUuid:e.skuUuid,skuName:e.skuDescription,targetDate:f()(e.deliveryDate,"DD-MM-YYYY").format("YYYY-MM-DD"),targetUos:parseFloat(e.uos),targetUom:parseInt(e.uom),slot:parseInt(e.slot)}})),e.next=6,Object(v.t)({data:u,setSubmitStatus:o,dispatch:n});case 6:i=e.sent,r(!1),s("Submit"),(null===i||void 0===i?void 0:i.isSuccess)&&l(null===i||void 0===i?void 0:i.message);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a(667);t.default=Object(r.i)((function(e){var t=Object(l.c)(),a=Object(l.d)((function(e){return e.csvFileName})),r=Object(l.d)((function(e){return e.csvData})),c=Object(l.d)((function(e){return e.csvField})),d=Object(l.d)((function(e){return e.warehouseAreaCsv})),m=Object(l.d)((function(e){return e.status})),v=Object(l.d)((function(e){return e.warehouseData})),b=o.a.useState(!1),f=Object(n.a)(b,2),g=f[0],E=f[1],k=o.a.useState(null),N=Object(n.a)(k,2),S=N[0],x=N[1],C=o.a.useState(!0),O=Object(n.a)(C,2),D=O[0],I=O[1],T=o.a.useState(!1),U=Object(n.a)(T,2),j=U[0],F=U[1],R=o.a.useState(!1),B=Object(n.a)(R,2),L=B[0],W=B[1],A=o.a.useState(!0),P=Object(n.a)(A,2),M=P[0],q=P[1],G=o.a.useState(!1),K=Object(n.a)(G,2),V=K[0],H=K[1],Y=o.a.useState(null),J=Object(n.a)(Y,2),Q=J[0],X=J[1],Z=o.a.useState(null),_=Object(n.a)(Z,2),z=_[0],$=_[1],ee=o.a.useState(null),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],se=o.a.useState(null),oe=Object(n.a)(se,2),le=oe[0],re=oe[1],ue=o.a.useState(null),ie=Object(n.a)(ue,2),ce=ie[0],de=ie[1],me=o.a.useState("Submit"),pe=Object(n.a)(me,2),ve=pe[0],be=pe[1],fe=o.a.useState(null),he=Object(n.a)(fe,2),ye=he[0],we=(he[1],o.a.useState(null)),ge=Object(n.a)(we,2),Ee=ge[0],ke=ge[1],Ne=o.a.useState(null),Se=Object(n.a)(Ne,2),xe=Se[0],Ce=Se[1],Oe=o.a.useState([]),De=Object(n.a)(Oe,2),Ie=De[0],Te=De[1],Ue=o.a.useState([]),je=Object(n.a)(Ue,2),Fe=je[0],Re=je[1];if(console.log("rowwsss",Fe),Object(s.useEffect)((function(){q(!1),function(e){var t=e.csvData,a=e.csvField,n=e.setIsValidate,s=e.setCheckingCsv;if(void 0===t)return 0;var o=!0;t.map((function(e,t){a.map((function(t,a){var n=e[t.dataField+"Status"];"outboundType"==t.dataField&&("LAINNYA"==e[t.dataField].toUpperCase()&&""==e.outboundReason&&(n=!1));!1===n&&(o=!1)}))})),n(!1!==o),s(!1)}({csvData:r,csvField:c,setIsValidate:F,setCheckingCsv:q})}),[M]),Object(s.useEffect)((function(){!function(e){var t=e.selectorCsvData,a=e.setNewCsvData,n=e.setRowDouble,s=(e.dispatch,[]),o={},l=[],r=[];null===t||void 0===t||t.map((function(e,t){s.includes(e.skuNumber)||s.push(e.skuNumber);var a="sku_"+e.skuNumber;if(o[a]){var n=o[a],u=!0;if(n.map((function(t,a){t.deliveryDate==e.deliveryDate&&t.skuNumber==e.skuNumber&&t.slot==e.slot&&t.warehouse==e.warehouse&&(u=!1,r.push(e.id),e.warehouseStatus=!1,e.deliveryDateStatus=!1,e.slotStatus=!1,e.skuNumberStatus=!1,e.warehouseReason="Data Duplicated",e.deliveryDateReason="Data Duplicated",e.slotReason="Data Duplicated",e.skuNumberReason="Data Duplicated")})),u){var i={warehouse:e.warehouse,deliveryDate:e.deliveryDate,skuNumber:e.skuNumber,slot:e.slot};o[a].push(i)}}else{var c={warehouse:e.warehouse,deliveryDate:e.deliveryDate,skuNumber:e.skuNumber,slot:e.slot};o[a]=[c]}console.log("data",e),l.push(e)}));console.log(l),a(l),n(r)}({selectorCsvData:r,dispatch:t,setNewCsvData:Te,setRowDouble:Re})}),[r]),Object(s.useEffect)((function(){"success"==V?(X("Success!"),ne("Would you import another file?"),re("Cancel"),de("Import new file"),ke("bg-green background"),Ce("green"),W(!0)):"failed"==V&&(Ce("red"),X("Failed!"),ke("bg-red background"),$(a+" failed to upload"),ne("Do you want to retry?"),re("Cancel"),de("Retry"),W(!0))}),[V]),void 0===r||null===r)return e.history.push("/inventory-entry/repacking/upload-target-repack"),0;var Be=function(e){!function(e){var t=e.param,a=e.dispatch,n=e.setCheckingCsv;a({type:p.l,csvData:t}),n(!0)}({param:e,dispatch:t,setCheckingCsv:q}),h({csvData:r,csvField:c,isShowErrorOnly:!1,setIsShowErrorOnly:I,setIsHiddenRows:x,setCheckingCsv:q})};return o.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},o.a.createElement(u.a,{globalData:Ie,columns:c,tableClass:"reviewTable",hiddenRows:S,warehouseArea:d,setCsvDataTmp:function(e){return Be(e)},setIsValidate:function(e){return F(e)},dispatch:t,setCheckingCsv:q,warehousesData:v,dataDoubleRow:Fe}),o.a.createElement("div",{className:"row pt-3"},o.a.createElement("div",{className:"col-4"},o.a.createElement("button",{type:"button",className:"btn px-3 mr-3 text no-shadow",style:{backgroundColor:"#fff"},onClick:function(){return h({csvData:Ie,csvField:c,isShowErrorOnly:D,setIsShowErrorOnly:I,setIsHiddenRows:x,setCheckingCsv:q})}},"Show ",D?"Errors Only":"All"),o.a.createElement("button",{type:"button",className:"btn px-3 mr-3  text no-shadow",style:{backgroundColor:"#fff"},onClick:function(){return function(e){var t=e.csvData,a=e.csvField,n=e.dispatch,s=e.setCheckingCsv,o=[];t.map((function(e,t){var n=!0;a.map((function(t,a){var s=t.dataField+"Status";!1===e[s]&&(n=!1)})),!0===n&&o.push(e)})),n({type:p.l,csvData:o}),s(!0)}({csvData:r,csvField:c,dispatch:t,setCheckingCsv:q})}},"Delete Errors Field")),o.a.createElement("div",{className:"col-4",style:{lineHeight:"40px"}},"Review your imported file: ",a," (",r.length||0," Lines)"),o.a.createElement("div",{className:"col-4"},o.a.createElement("button",{type:"button",className:"btn px-5 bg-red text-white no-shadow float-right",onClick:function(){return e.history.goBack()}},"Discard"),o.a.createElement("button",{type:"button",class:"btn px-5 mr-3 text-white no-shadow float-right "+(!0===j&&(null===r||void 0===r?void 0:r.length)>0?"bg-green":"bg-primaryGrey disabled"),onClick:function(){return E(!g)}},"Submit"))),o.a.createElement(w.a,{status:m,onCloseFunction:function(){W(!1),H(!1),e.history.push("/inventory-entry/repacking")},statusDisplay:L,title:Q,cancelButtonTitle:le,actionButtonTitle:ce,colorText:xe,refreshOnCancel:!1,msg1:z,msg2:ae,cancelButtonClass:ye,actionButtonClass:Ee+" ml-0",actionButtonEvent:function(){return e.history.push("/inventory-entry/repacking/upload-target-repack")}}),o.a.createElement(i.a,{submit:function(){return y({dispatch:t,csvData:r,setIsShowModal:E,setIsSubmitText:be,setSubmitStatus:H,setMsg1:$})},submitText:ve,show:g,setIsShowModal:E}))}))},669:function(e,t,a){},675:function(e,t,a){"use strict";a.d(t,"b",(function(){return g})),a.d(t,"a",(function(){return w}));var n=a(65),s=a.n(n),o=a(91),l=a(169),r=a(170),u=a(172),i=a(171),c=a(1),d=a.n(c),m=a(661),p=a(689),v=a.n(p),b=(a(676),a(691),a(47)),f=a.n(b),h=a(692),y=a.n(h),w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeWarehouseUuid=function(e,t,a,l,r,u,i){var c=n.props,d=c.setCsvDataTmp,m=c.globalData,p=m.findIndex((function(e){return e.id==l})),v=r.indexOf(e);m[p][t]=u[v],m[p][a]=i[v],setTimeout(Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(m);case 1:case"end":return e.stop()}}),e)}))),400)},n.validatePOSKU=function(){var e=Object(o.a)(s.a.mark((function e(t,a,l){var r,u,i,c,d,m,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.props,u=r.setCsvDataTmp,i=r.globalData,c=r.setIsValidate,d=i,e.prev=2,c(!1),"/stocktake/rowValidationUpload",m=null,p=null,setTimeout(Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m=document.getElementById("".concat(l)),p=document.getElementById("".concat(l,"span")),null!==m&&void 0!==m){e.next=4;break}return e.abrupt("return",0);case 4:return p.innerHTML="Validating",e.next=7,f()({method:"post",url:"/stocktake/rowValidationUpload",data:{data:[t]}}).then((function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data,s=d.findIndex((function(e){return e.id==a}));n[0]&&!0===n[0].isExist?(d[s].wmsPoSkuCode=n[0].wmsPoSkuCode,d[s].wmsPoSkuCodeStatus=!0,d[s].wmsPoSkuCodeReason="PO SKU Code Not Found",d[s].expiryDate=n[0].expiryDate,d[s].inboundDate=n[0].inboundDate,d[s].supplierName=n[0].supplierName,d[s].supplierUuid=n[0].supplierUuid,d[s].uom=n[0].uom,d[s].photos=n[0].photos,m.classList.remove("red"),m.classList.add("hiddenTooltip")):(d[s].wmsPoSkuCodeStatus=!1,d[s].wmsPoSkuCodeReason="PO SKU Code Not Found",d[s].expiryDate="",d[s].inboundDate="",d[s].supplierName="",d[s].supplierUuid="",m.classList.add("red"),m.classList.remove("hiddenTooltip"),p.innerHTML="PO SKU Code Not Found"),u(d)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a,n){return e.apply(this,arguments)}}(),n.validateOutbountReason=function(e,t,a){var s=n.props.globalData,o=s.findIndex((function(e){return e.id==t})),l=s[o];""==e&&"LAINNYA"==l.outboundType.toUpperCase()&&setTimeout((function(){var e=document.getElementById("row".concat(t,"-outboundReason"));e.classList.add("red","tooltip-custom"),e.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"}),300)},n.validateOutbountType=function(e,t,a){var s=n.props,o=s.globalData,l=s.setIsValidate,r=o;if(l(!1),"LAINNYA"!==e.toUpperCase())return l(!0),0;var u=r.findIndex((function(e){return e.id==t}));""==r[u].outboundReason&&setTimeout((function(){var e=document.getElementById("row".concat(t,"-outboundReason"));e.classList.add("red","tooltip-custom"),e.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"}),300)},n.validateSKUNumber=function(){var e=Object(o.a)(s.a.mark((function e(t,a,l,r){var u,i,c,d,m,p,v;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=n.props,i=u.globalData,c=u.setCsvDataTmp,d=u.setIsValidate,m=i,e.prev=2,d(!1),"/oss/skuByNumbers",p=null,v=null,setTimeout(Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=document.getElementById("".concat(l)),v=document.getElementById("".concat(l,"span")),null!==p&&void 0!==p){e.next=4;break}return e.abrupt("return",0);case 4:return v.innerHTML="Validating",e.next=7,f()({method:"post",url:"/oss/skuByNumbers",data:{skuList:[t]}}).then((function(e){var n,s=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data,o=e.data.isSuccess,l=m.findIndex((function(e){return e.id==a}));!0===o&&s.length>0?(m[l][r]=s[0].skuNumber,m[l][r+"Reason"]=s[0].skuDescription,m[l][r+"Status"]=!0,m[l][r+"Uuid"]=s[0].id,p.classList.remove("red"),p.classList.add("hiddenTooltip"),"skuNumber"==r&&(m[l].skuUuid=s[0].id,m[l].photo=s[0].imageMd),"newGrade"==r&&(m[l].newGradeUom=s[0].uom)):(m[l][r]=t,m[l][r+"Reason"]="SKU Number Not Found",m[l][r+"Status"]=!1,m[l][r+"Uuid"]=null,p.classList.add("red"),p.classList.remove("hiddenTooltip"),v.innerHTML="SKU Number Not Found","skuNumber"==r&&(m[l].skuUuid="",m[l].photo=""),"newGrade"==r&&(m[l].newGradeUom=null)),c(m)}));case 7:case"end":return e.stop()}}),e)}))),400),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a,n,s){return e.apply(this,arguments)}}(),n.state={validateStatus:!1,validateResult:"Please Wait...",rowCount:0,keyy:0},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.columns,n=t.hiddenRows,s=t.tableClass,o=t.warehouseArea,l=t.outboundType,r=t.setCheckingCsv,u=t.globalData,i=t.editable,c=void 0===i||i,p=t.warehousesData,b=void 0===p?[]:p,f=this.state,h=(f.validateStatus,f.keyy),w=[],g=[],E=[];if(b){var k;null===b||void 0===b||null===(k=b.data)||void 0===k||k.map((function(e){w.push(e.code),g.push(e.id),E.push(e.name)}))}var N=o.map((function(e){return e.label.toUpperCase()}))||[],S=o.map((function(e){return e.value}))||[],x=l?l.map((function(e){return e.label.toUpperCase()})):[],C=l?l.map((function(e){return e.value})):[],O=a.map((function(t,a){return t.validator=function(a,n,s,o){var l=t.dataField,u=l+"Status",i=l+"Reason",c=!0,d=null,m="row"+n.id+"-"+l;"wmsPoSkuCode"==l&&(e.validatePOSKU(a,n.id,m,l),c=!0),"skuNumber"==l&&(e.validateSKUNumber(a,n.id,m,l),c=!0);var p=["WASTE","SEMI WASTE"];if("newGrade"==l&&"waste"==e.props.transaction?p.includes(a.toUpperCase())?(n.newGradeUuid=a,n.newGradeUom=null):(d="Waste Type not found",f=!1,c=!1):"newGrade"==l&&(p.includes(a.toUpperCase())?(n.newGradeUuid=a,n.newGradeUom=null):parseInt(a)?(c=!0,e.validateSKUNumber(a,n.id,m,l)):""==a?(n.newGradeUuid=null,n.newGradeUom=null,c=!0):(d="Grade Undefined",f=!1,c=!1)),"outboundType"==l&&C.length>0)if(x.includes(a.toUpperCase())){var v=x.indexOf(a.toUpperCase());n.outboundTypeCode=C[v],c=!0,e.validateOutbountType(a,n.id,m)}else c=!1,d="Outbound Type Not Found";if("outboundReason"==l&&e.validateOutbountReason(a,n.id,m),"warehouse"==l&&(w.includes(a)?e.changeWarehouseUuid(a,"warehouseUuid","warehouseName",n.id,w,g,E):(c=!1,d="Warehouse Not Found")),"warehouseDestination"==l&&(w.includes(a)?e.changeWarehouseUuid(a,"warehouseDestinationUuid","warehouseDestinationName",n.id,w,g,E):(c=!1,d="Warehouse Not Found")),"areaName"==l||"areaNameDestination"==l)if(N.includes(a.toUpperCase())){var b=N.indexOf(a.toUpperCase());"areaNameDestination"==l?n.areaDestination=S[b]:n.areaSource=S[b],c=!0}else c=!1,d="Warehouse Area Not Found";"newPack"==l&&(!isNaN(a)?c=!0:(c=!1,d="Pack Should be a number"));var f=null;!1===(f="number"!=t.type||!isNaN(a))&&(d="".concat(t.text," Should be a ").concat(t.type));if(["grade","outboundReason","ripenessLevel","newRipeness","reason","expiryDate"].includes(l)&&""===a)d="",f=!0,c=!0;else if("grade"==l){["WASTE","SEMI WASTE"].includes(a.toUpperCase())||(d="Waste Type Not Found",f=!1,c=!1)}if("ripenessLevel"==l||"newRipeness"==l){[0,1,2,3].includes(parseInt(a))||""==a?(f=!0,c=!0,d="",""==a&&(a="")):(f=!1,c=!1,d="Undefined Ripeness Level")}if("date_indo"==t.type){a.match(/(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d/)||""==a?(f=!0,c=!0):(d="Date format must be 'dd-mm-yyyy'",f=!1,c=!1)}if(n[i]=d,c&&f){["wmsPoSkuCode","skuNumber"].includes(l)||(n[u]=!0,r())}return{valid:!(!c||!f),message:d}},t.formatter=function(e,a,n){var s=t.dataField,o=s+"Status",l=s+"Reason",r="row"+a.id+"-"+s,u=a[l];return!1===a[o]?(!1,!1,d.a.createElement("div",{id:r,className:"tooltip-custom red"},e,d.a.createElement("span",{id:r+"span",className:"tooltiptext"},u))):d.a.createElement("div",{id:r,className:"tooltip-custom hiddenTooltip"},e,d.a.createElement("span",{id:r+"span",className:"tooltiptext"},u))},t})),D={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?d.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?d.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:d.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return console.clear(),console.log(u),d.a.createElement(m.e,{className:"table-responsive"},d.a.createElement(v.a,{keyField:"id",data:u,columns:O,sort:D,classes:s||null,cellEdit:!0===c?y()({mode:"click",blurToSave:!0,nonEditableRows:function(){return e.props.dataDoubleRow||[]}}):null,bordered:!1,hiddenRows:n,key:h}))}}]),a}(d.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.columns,a=e.tableClass,n=e.data,s=t.map((function(e,t){return e.formatter=function(t,a,n){var s=e.dataField;return"uploadStatus"==s&&"Failed"===a.uploadStatus?d.a.createElement("div",{className:"tooltip-custom red"},t,d.a.createElement("span",{className:"tooltiptext"},a.uploadStatusReason)):"uploadStatus"==s&&"Success"===a.uploadStatus?d.a.createElement("div",{className:"green"},t,d.a.createElement("span",null)):d.a.createElement("div",null,t,d.a.createElement("span",null))},e})),o={sortFunc:this.sortFunc,sortCaret:function(e,t){return e?"asc"===e?d.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?d.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:d.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})}};return d.a.createElement(m.e,{className:"table-responsive"},d.a.createElement(v.a,{keyField:"id",data:n,columns:s,sort:o,classes:a||null,bordered:!1}))}}]),a}(d.a.Component)},676:function(e,t,a){},677:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return p}));var n=a(659),s=a(1),o=a.n(s),l=a(661),r=(a(669),a(56)),u=a(664),i=a(701),c=function(e){var t=e.e,a=e.state,n=e.isCaptcha,s=e.setIsValidated,o=e.setIsType,l=e.isType,r=t.key,i=Object(u.a)(l);if(["ArrowUp","ArrowDown","Tab"].includes(r))return 0;if("Backspace"===r){var c=Object(u.a)(l);""==c[a]&&1!==a&&(document.getElementById("t"+(parseInt(a)-1)).focus(),document.getElementById("t"+(parseInt(a)-1)).value="",c[a-1]="",i[a-1]=""),console.log(c)}else if("ArrowLeft"===r){if(1!==a)return document.getElementById("t"+(parseInt(a)-1)).focus(),document.getElementById("t"+(parseInt(a)-1)).setSelectionRange(-1,-1),0}else if("ArrowRight"===r){if(3!==a)return document.getElementById("t"+(parseInt(a)+1)).focus(),document.getElementById("t"+(parseInt(a)+1)).setSelectionRange(-1,-1),0}else 3!==a&&document.getElementById("t"+(parseInt(a)+1)).focus();i[a]="Backspace"===r?"":r.toUpperCase();if(!"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890".split("").includes(r.toUpperCase())&&""!=i[a])return 0;document.getElementById("t"+parseInt(a)).value=i[a],o(i);var d=!0;n.map((function(e,t){0!=t&&i[t+1]!=n[t]&&(d=!1)})),s(d)},d=a(662),m=function(e){var t,a,n,r=e.moduleEntry,u=e.confirmation,c=e.setConfirmation,m=e.save,p=e.submit,v=e.isSuccess,b=e.isLoading,f=e.moveAll,h=e.setAction,y=e.moduleName,w=e.noSkuChecking,g=e.singleViewData,E=document.documentElement.clientHeight-300,k="Submit";"save"===u.name&&(k="Save"),Object(s.useEffect)((function(){v&&c({show:!1,name:null})}),[v]),window.onkeydown=function(e){return 27===e.keyCode?c({show:!1,name:null}):null},Object(s.useEffect)((function(){h(u.name)}),[u]);var N=g&&!f?g:r,S=null===N||void 0===N||null===(t=N.jobPost)||void 0===t?void 0:t.areaDestinationName,x=null===N||void 0===N||null===(a=N.jobPost)||void 0===a?void 0:a.warehouseDestinationName,C=null===N||void 0===N||null===(n=N.jobPost)||void 0===n?void 0:n.areaName,O=function(e,t,a){if(null===e||void 0===e?void 0:e.length){var n=[];e.map((function(e){e.poList.map((function(s){s.itemList.map((function(s){var o,l,r,u,c,d,m=s.qty,p=s.grade,v=Object(i.a)(m)?parseInt(m):m?parseFloat(m):0,b=t?e.skuName:"waste"===a?(null===(o=s.wasteType)||void 0===o?void 0:o.label)?null===(l=s.wasteType)||void 0===l?void 0:l.label:e.skuName:null===p||void 0===p?void 0:p.label,f="waste"===a?"Semi Waste"===(null===(r=s.wasteType)||void 0===r?void 0:r.label)||"Waste"===(null===(u=s.wasteType)||void 0===u?void 0:u.label):"Waste"===(null===p||void 0===p?void 0:p.label)||"Semi Waste"===(null===p||void 0===p?void 0:p.label),h=t?e.unitOfMeassures:"gram"===(null===p||void 0===p?void 0:p.uom)?"kg":null===p||void 0===p?void 0:p.uom,y={sku:b,qty:v,uom:h,wqty:0,swqty:0};f&&(y.qty=0,y.sku=e.skuName),("waste"===a?"Waste"===(null===(c=s.wasteType)||void 0===c?void 0:c.label):"Waste"===(null===p||void 0===p?void 0:p.label))&&(y.wqty=v),("waste"===a?"Semi Waste"===(null===(d=s.wasteType)||void 0===d?void 0:d.label):"Semi Waste"===(null===p||void 0===p?void 0:p.label))&&(y.swqty=v);var w,g,E=n.findIndex((function(t){return(null===t||void 0===t?void 0:t.sku)===(f?e.skuName:b)}));("waste"!==a&&(-1===E&&n.push(y),-1!==E&&(f||(n[E].qty+=v),"Semi Waste"===(null===p||void 0===p?void 0:p.label)&&(n[E].swqty+=v),"Waste"===(null===p||void 0===p?void 0:p.label)&&(n[E].wqty+=v))),"waste"===a)&&(-1===E&&n.push(y),-1!==E&&(f||(n[E].qty+=v),"Semi Waste"===(null===(w=s.wasteType)||void 0===w?void 0:w.label)&&(n[E].swqty+=v),"Waste"===(null===(g=s.wasteType)||void 0===g?void 0:g.label)&&(n[E].wqty+=v)))}))}))}));var s=e.length?e[0].skuName:"No SKU",o=n.findIndex((function(e){return e.sku===s}));return n.forEach((function(e){-1!==o&&("Waste"===e.sku&&(n[o].wqty=e.qty),"Semi Waste"===e.sku&&(n[o].swqty=e.qty))})),n}}(null===N||void 0===N?void 0:N.jobPost.list,w,y);return o.a.createElement(l.B,{className:u.show?null:"d-none"},o.a.createElement(l.f,null,o.a.createElement(l.s,{show:u.show,closeOnBackdrop:!1},o.a.createElement(l.v,{className:"px-4 pt-5 border-none"},o.a.createElement(l.w,{className:"text LatoBold"},"Confirmation ",o.a.createElement("span",null,o.a.createElement("i",{className:"em em-pray"}))),o.a.createElement("label",{tabIndex:"0",onKeyDown:function(e){return 13===e.keyCode&&c({show:!1,name:null})},onClick:function(){return c({show:!1,name:null})},className:"sku-item iconU-modalClose"})),o.a.createElement(l.t,{className:"px-4 py-0",style:{minHeight:E}},o.a.createElement("p",{className:"text mb-2"},o.a.createElement("span",null,"Are you sure want to ".concat("Waste"==C?"update":"send"," this Item ")),o.a.createElement("span",{className:" ".concat(S?null:"d-none")}," from"),o.a.createElement("span",{className:"green ".concat(S?null:"d-none")}," ".concat(C," ")),o.a.createElement("span",null,"outbound"==y?"from":"repack"===y?"":"to"," "),o.a.createElement("span",{className:"green ".concat("repack"!==y?null:"d-none")}," ".concat("stockTransfer"===y?x:S||C," "))),o.a.createElement("p",{className:"text"},"Please double check this list, this record will store to database."),o.a.createElement("div",{style:{minHeight:E,maxHeight:E,overflow:"auto",border:"1px solid var(--lineGrey)"}},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",{style:{borderBottom:"1px solid var(--lineGrey)"}},o.a.createElement("th",{style:{color:"var(--emptyTextField)"}},"SKU List"),o.a.createElement("th",{style:{textAlign:"right",color:"var(--emptyTextField)"}},"Weight"),o.a.createElement("th",{style:{textAlign:"right",color:"var(--emptyTextField)"}},"Semi Waste"),o.a.createElement("th",{style:{textAlign:"right",color:"var(--emptyTextField)"}},"Waste"))),o.a.createElement("tbody",null,null===O||void 0===O?void 0:O.map((function(e){return o.a.createElement("tr",{style:{borderBottom:"1px solid var(--lineGrey)"}},o.a.createElement("td",{style:{maxWidth:"160px"}},e.sku),o.a.createElement("td",{className:"text-right py-3",style:{textAlign:"right"}},"".concat(Object(d.y)(null===e||void 0===e?void 0:e.qty))),o.a.createElement("td",{className:"text-right text-nowrap",style:{textAlign:"right"}},o.a.createElement("span",{className:"text-nowrap"},"".concat(Object(d.y)(null===e||void 0===e?void 0:e.swqty)," "))),o.a.createElement("td",{className:"text-right",style:{textAlign:"right"}},"".concat(Object(d.y)(null===e||void 0===e?void 0:e.wqty))))}))))),o.a.createElement("div",{className:"px-0 pb-5 pt-0 justify-content-start border-none"},o.a.createElement(l.d,{tabIndex:"0",onKeyDown:function(e){return 13===e.keyCode&&c({show:!1,name:null})},className:"bg-background sku-item text no-shadow px-5 mt-4 mb-0 mx-0",onClick:function(){return c({show:!1,name:null})}},"Cancel"),o.a.createElement(l.d,{tabIndex:"0",onKeyDown:function(e){return 13===e.keyCode&&(b?null:"save"===u.name?m():p())},className:"".concat(b?"bg-softGreen text":"bg-green text-white"," no-shadow px-5 mt-4 sku-item mb-0 ml-3 mr-0"),onClick:function(){return b?null:"save"===u.name?m():p()}},b?"Processing...":k)," ")))))},p=function(e){for(var t=e.show,a=void 0!==t&&t,u=e.setIsShowModal,i=e.submit,d=e.submitText,m=void 0===d?"Submit":d,p="",v="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",b=v.length,f=[],h=0;h<3;h++){var y=v.charAt(Math.floor(Math.random()*b));p+=y,f.push(y)}Object(r.c)();var w=Object(r.d)((function(e){return e.csvFileName})),g=o.a.useState(f),E=Object(n.a)(g,2),k=E[0],N=(E[1],o.a.useState(p)),S=Object(n.a)(N,2),x=S[0],C=(S[1],o.a.useState(!1)),O=Object(n.a)(C,2),D=O[0],I=O[1],T=o.a.useState("Submit"),U=Object(n.a)(T,2),j=(U[0],U[1],o.a.useState([])),F=Object(n.a)(j,2),R=F[0],B=F[1];return Object(s.useEffect)((function(){!0===a&&(document.getElementById("t1").value="",document.getElementById("t2").value="",document.getElementById("t3").value="")}),[a]),o.a.createElement(l.B,{className:a?null:"d-none"},o.a.createElement(l.f,null,o.a.createElement(l.s,{show:a,onClose:function(){u(!1)},size:"lg",style:{height:"400px"}},o.a.createElement(l.v,{className:"px-5 pt-5 border-none"},o.a.createElement(l.w,{className:"text LatoBold"},"Confirmation")),o.a.createElement(l.t,{className:"px-5 py-0"},o.a.createElement("p",{className:"text mb-2"},"Are you sure want to upload ",o.a.createElement("span",{className:"green"},"Edited")," ",w,"?"),o.a.createElement("p",{className:"text"},"Once uploaded this record will store to databases."),o.a.createElement("p",{className:"text mb-2"},"Please type \u2018",x,"\u2019 on the Box to confirm upload file."),o.a.createElement("div",{className:"captcha-box"},o.a.createElement("input",{autocomplete:"off",onKeyUp:function(e){c({e:e,state:1,isCaptcha:k,setIsValidated:I,setIsType:B,isType:R})},id:"t1",type:"text",style:{textTransform:"uppercase"},className:"captcha-input",maxLength:"1",placeholder:k[0]}),o.a.createElement("input",{autocomplete:"off",onKeyUp:function(e){c({e:e,state:2,isCaptcha:k,setIsValidated:I,setIsType:B,isType:R})},id:"t2",type:"text",style:{textTransform:"uppercase"},className:"captcha-input ml-0 mr-0",maxLength:"1",placeholder:k[1]}),o.a.createElement("input",{autocomplete:"off",onKeyUp:function(e){c({e:e,state:3,isCaptcha:k,setIsValidated:I,setIsType:B,isType:R})},id:"t3",type:"text",style:{textTransform:"uppercase"},className:"captcha-input",maxLength:"1",placeholder:k[2]}))),o.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},o.a.createElement(l.d,{className:"bg-background text no-shadow px-5 mt-4 mb-0 mx-0",onClick:function(){u(!1)}},"Cancel"),o.a.createElement(l.d,{className:(D?"bg-green":"bg-emptyTextField disabled")+" no-shadow px-5 mt-4 mb-0 ml-3 mr-0",onClick:function(){i(),I(!1)}},m)," "))))}},698:function(e,t,a){}}]);
//# sourceMappingURL=46.5cf2af83.chunk.js.map