(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[8],{1037:function(e,t){},1039:function(e,t){},1067:function(e,t){},1069:function(e,t){},1070:function(e,t){},1075:function(e,t){},1077:function(e,t){},1096:function(e,t){},1108:function(e,t){},1111:function(e,t){},663:function(e,t,a){},666:function(e,t,a){"use strict";var n=a(659),r=a(1),i=a.n(r),o=a(661),s=(a(663),a(56)),u=a(21);t.a=function(e){var t=e.refresh,a=e.status,l=e.icon,c=e.statusDisplay,d=void 0!==c&&c,p=e.title,f=void 0===p?"":p,m=e.cancelButtonTitle,b=void 0===m?"Cancel":m,v=e.actionButtonTitle,h=void 0===v?"Submit":v,g=e.cancelButtonClass,w=void 0===g?"bg-background":g,S=e.actionButtonClass,y=void 0===S?"bg-background":S,x=e.actionButtonEvent,F=void 0===x?null:x,O=e.colorText,E=void 0===O?"red":O,N=e.msg1,C=void 0===N?null:N,j=e.msg2,k=void 0===j?null:j,U=e.onCloseFunction,D=void 0===U?null:U,T=e.refreshOnCancel,P=void 0===T||T,I=e.setIsSuccess,R=Object(s.c)();500===(null===a||void 0===a?void 0:a.code)&&0==d&&(l="em-pensive",f="Server Error",b="Try Again",h="Contact Administration",E="red",C=null===a||void 0===a?void 0:a.message,k="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,P=!0),408===(null===a||void 0===a?void 0:a.code)&&0==d&&(l="em-alarm_clock",f="Request Timeout",b="Try Again",h="Contact Administration",E="red",C=null===a||void 0===a?void 0:a.message,k="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,P=!0),400===(null===a||void 0===a?void 0:a.code)&&0==d&&(l="em-alarm_clock",f="Server Error",b="Try Again",h="Contact Administration",E="red",C=null===a||void 0===a?void 0:a.message,k="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,P=!1),404===(null===a||void 0===a?void 0:a.code)&&(f="Something wrong with the application",b="Try Again",h="Contact Administration",E="red",C=null===a||void 0===a?void 0:a.message,k="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,P=!1);var A=Object(r.useState)(d),B=Object(n.a)(A,2),G=B[0],V=B[1];return Object(r.useEffect)((function(){V(d)}),[d]),Object(r.useEffect)((function(){}),[G]),window.onkeydown=function(e){return 27===e.keyCode?V(!1):null},i.a.createElement(o.B,{className:"".concat(G?null:"d-none")},i.a.createElement(o.f,null,i.a.createElement(o.s,{show:G,closeOnBackdrop:!1,onClose:function(){V(!1),"function"===typeof I&&I({success:null,name:null}),R({type:u.k,status:null}),D&&D()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){V(!1),"function"===typeof I&&I({success:null,name:null}),R({type:u.k,status:null}),D&&D()}})),i.a.createElement(o.v,{className:"px-5 pt-5 border-none"},i.a.createElement(o.w,{className:"text LatoBold ".concat(E)},f," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(l)})))),i.a.createElement(o.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},C),i.a.createElement("p",{className:"text"},k)),i.a.createElement(o.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},b?i.a.createElement(o.d,{className:"".concat(w," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){P?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,a=e.parentOncCloseFunction;t(!1),a&&a()}({setShow:V,parentOncCloseFunction:D}),R({type:u.k,status:null})}},b):null,h?i.a.createElement(o.d,{className:"".concat(y," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){F?(F(),V(!1)):V(!1)}},h):null," "))))}},677:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"g",(function(){return f})),a.d(t,"c",(function(){return m})),a.d(t,"f",(function(){return b})),a.d(t,"a",(function(){return v})),a.d(t,"d",(function(){return h}));var n=a(4),r=a(65),i=a.n(r),o=a(91),s=a(707),u=a.n(s),l=a(710),c=a(21),d=function(){document.getElementById("download-template-xls").click()},p=function(e,t,a){return new Promise((function(n,r){var i=0,o=[],s=new FileReader;s.onload=function(){u.a.parse(s.result,(function(e,r){r.length>2001&&(a(0),n(!1)),r.map((function(e,n){if(0===n)return i++,!1;var s={};s.id=n,r[i].toString().split(";").map((function(e,a){s[t[a+1]]=e})),i++,o.push(s);var u=25*(n+1)/r.length;a(Math.ceil(u))}))}))},setTimeout((function(){n(o)}),200),s.readAsBinaryString(e[0])}))},f=function(){var e=Object(o.a)(i.a.mark((function e(t,a,n,r,s){var c,d,p,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=0,d=[],p=new FileReader,f=null,!1,e.abrupt("return",new Promise((function(e,r){new FileReader;p.onload=function(){var t=Object(o.a)(i.a.mark((function t(r){var o,s,p,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.target.result,s=l.read(o,{type:"binary"}),p=s.SheetNames[0],m=s.Sheets[p],f=l.utils.sheet_to_csv(m,{header:1}),t.next=7,u.a.parse(f,(function(t,r){r.length>2001&&(n(0),e(!1)),r.map((function(e,t){var i={};i.id=t,r[c].toString().split(",").map((function(e,t){i[a[t+1]]=e})),c++,d.push(i);var o=25*(t+1)/r.length;n(Math.ceil(o))}))}));case 7:setTimeout((function(){e(d)}),200);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p.readAsBinaryString(t[0])})));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r,i){return e.apply(this,arguments)}}(),m=function(e){var t=e.dispatch,a=e.jsonArray;t({type:c.l,csvField:a})},b=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,r,o,s,u,l,d,p,f,m,b,v,h,g,w,S,y,x,F,O,E,N,C;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.field,n=t.jsonArray,r=t.setIsProgressPercent,o=t.fileName,s=t.dispatch,u=t.warehouseArea,l=t.warehouseUuid,d=t.outboundType,p=t.setIsCheckingSchema,f=t.warehousesData,m=[],b=[],v=[],f&&f.data.map((function(e){m.push(e.code),b.push(e.id),v.push(e.name)})),h=u?u.map((function(e){return e.label.toUpperCase()})):[],g=u?u.map((function(e){return e.value})):[],w=d?d.map((function(e){return e.label.toUpperCase()})):[],S=d?d.map((function(e){return e.value})):[],y=a?a.map((function(e){return e.text.toUpperCase().replace(/\s/g,"")})):[],x=[],F=[],!0,O=0,E=n[0],e.t0=i.a.keys(E);case 16:if((e.t1=e.t0()).done){e.next=32;break}if("id"!=(N=e.t1.value)){e.next=20;break}return e.abrupt("continue",16);case 20:if(C=E[N].toUpperCase().replace(/\s/g,""),"undefined"===N||y[O+1]===C&&y.includes(C)){e.next=29;break}return console.clear(),console.log("--Schema Not Same--"),console.log("Schema \t\t: ",y[O+1]),console.log("File SChema : ",C),!1,p(!1),e.abrupt("return",0);case 29:O++,e.next=16;break;case 32:return n.shift(),e.next=35,n.map((function(e,t){var i=!0;a.map((function(a,o){if(void 0!==a&&null!==a&&("id"===a.dataField||""!=e[a.dataField])){if("id"==a.dataField||(i=!1),e.warehouseSource=l,m&&"warehouse"==a.dataField){if(!m.includes(e[a.dataField]))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Not Found",e.warehouseUuid="",void(e.warehouseName="");var s=m.indexOf(e[a.dataField]);e.warehouseUuid=b[s],e.warehouseName=v[s]}if(m&&"warehouseDestination"==a.dataField){if(!m.includes(e[a.dataField]))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Not Found",e.warehouseDestinationUuid="",void(e.warehouseDestinationName="");var u=m.indexOf(e[a.dataField]);e.warehouseDestinationUuid=b[u],e.warehouseDestinationName=v[u]}if("areaName"==a.dataField){if(!h.includes(e[a.dataField].toUpperCase()))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Area Not Found",void(e.areaSource=null);var c=h.indexOf(e[a.dataField].toUpperCase());e.areaSource=g[c]}if("areaNameDestination"==a.dataField){if(!h.includes(e[a.dataField].toUpperCase()))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Area Not Found",void(e.areaDestination=null);var d=h.indexOf(e[a.dataField].toUpperCase());e.areaDestination=g[d]}if(S.length>0&&"outboundType"==a.dataField){if(!w.includes(e[a.dataField].toUpperCase()))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Outbound Type Not Found",void(e.outboundTypeCode=null);var p=w.indexOf(e[a.dataField].toUpperCase());e.outboundTypeCode=S[p]}if("newGrade"==a.dataField){e[a.dataField]&&!["WASTE","SEMI WASTE",""].includes(e[a.dataField].toUpperCase())?parseInt(e[a.dataField])?(F.includes(e[a.dataField])||F.push(e[a.dataField]),e[a.dataField+"Status"]=!0):""==e[a.dataField]?e[a.dataField+"Status"]=!0:(e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Grade Undefined"):e.newGradeUuid=e[a.dataField]}if(("ripenessLevel"==a.dataField||"newRipeness"==a.dataField)&&void 0!==e[a.dataField])e[a.dataField].split(" ")[1];var f=e[a.dataField],y=null;if("number"==a.type)isNaN(f)?y=!1:(y=!0,"wmsPoSkuCode"==a.dataField&&(x.includes(f)||x.push(f)),"skuNumber"==a.dataField&&(F.includes(f)||""===f||F.push(f)));else if("date_indo"==a.type){if(!f.match(/(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d/))return e[a.dataField+"Status"]=!1,void(e[a.dataField+"Reason"]="Date format must be 'dd-mm-yyyy'");y=!0}else y=!0;if(["grade","outboundReason","ripenessLevel","newRipeness","newGrade"].includes(a.dataField)&&""==f&&(y=!0),"newGrade"==a.dataField){["WASTE","SEMI WASTE",""].includes(f.toUpperCase())||parseInt(f)&&(y=!0,F.includes(f)||""===f||F.push(f))}e[a.dataField+"Status"]=y,e[a.dataField+"Reason"]=y?"":"Invalid ".concat(a.text," \nShould be a ").concat(a.type);var O=50*(t+1+parseInt(n.length))/(2*parseInt(n.length));r(Math.ceil(O))}})),e.emptyRow=i}));case 35:s({type:c.l,csvData:n}),s({type:c.l,csvFileName:o}),s({type:c.l,csvDistinctPOSKUInfoId:x}),s({type:c.l,csvDistinctSKUNumber:F});case 39:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,r,o,s,u,l,d,p,f,m,b,v,h,g,w;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.poSkuInfoValidated,r=t.poSkuNumberValidated,o=t.csvData,s=t.setIsProgressPercent,u=t.dispatch,l=t.status,d=t.transaction,t.setIsProgressStatus,p=t.nextPage,!1!==l&&null!==l){e.next=3;break}return e.abrupt("return",0);case 3:if(void 0!==o&&null!==o&&null!==a&&void 0!==a&&null!==r&&void 0!==r){e.next=6;break}return console.clear(),e.abrupt("return",0);case 6:f=[],m=[],a.map((function(e){f.push(e.wmsPoSkuCode),m.push(e.uom)})),b=[],v=[],h=[],g=[],r.map((function(e){b.push(e.skuNumber),v.push(e.id),h.push(e.imageMd),g.push(e.uom)})),w=[],o.map((function(e,t){if(!0===e.emptyRow)return 0;e.areaSource=parseInt(e.areaSource),e.areaDestination=parseInt(e.areaDestination),"stock_take"!=d&&"repacking"!=d&&"outbound"!=d||(e.areaDestination=parseInt(e.areaSource),e.warehouseDestination=parseInt(e.warehouseSource));var r=f.indexOf(e.wmsPoSkuCode),i=a[r];i&&void 0!==i.isExist&&!1!==i.isExist&&null!==i.isExist?(e.inboundDate=i.inboundDate,e.uom=m[r]):(e.wmsPoSkuCodeStatus=!1,e.wmsPoSkuCodeReason="PO SKU Code Not Found");var o=e.newGrade,s=["WASTE","SEMI WASTE",""];if(void 0!==o&&!s.includes(o.toUpperCase()))if(b.includes(o)){var u=b.indexOf(o);e.newGradeStatus=!0,e.newGradeUuid=v[u]}else""==o?(e.newGradeUuid="",e.newGradeStatus=!0):(e.newGradeReason="Grade Undefined",e.newGradeStatus=!1);var l=e.skuNumber;if(b.includes(l)){var c=b.indexOf(l);e.skuUuid=v[c],e.photo=h[c]}else e.skuNumberStatus=!1,e.skuNumberReason="SKU Number Not Found",e.skuUuid="";var p=e.newGrade;if(console.log("tmp_new_grade",p),p&&s.includes(p.toUpperCase())||""==p)e.newGradeReason="",e.newGradeStatus=!0,e.newGradeUuid=null,e.newGradeUom=null;else if(b.includes(p)){var S=b.indexOf(p);e.newGradeReason="",e.newGradeStatus=!0,e.newGradeUuid=v[S],e.newGradeUom=g[S]}else e.newGradeReason="SKU Number Not Found",e.newGradeStatus=!1,e.newGradeUuid=null,e.newGradeUom=null;w.push(Object(n.a)(Object(n.a)({},e),i))})),u({type:c.l,csvData:w}),s(Math.ceil(100)),setTimeout((function(){p()}),200);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.dispatch,t.resetStatus,n=t.setIsResetCsvPersist,a({type:c.l,csvData:null}),a({type:c.l,csvFileName:null}),a({type:c.l,csvDistinctPOSKUInfoId:null}),a({type:c.n,skuCodeValidated:null}),a({type:c.n,skuCodeValidated:null}),a({type:c.k,status:null}),n(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},682:function(e,t,a){"use strict";var n=a(4),r=a(65),i=a.n(r),o=a(91),s=a(659),u=a(1),l=a.n(u),c=a(56),d=a(729),p=(a(686),a(677)),f=(a(687),function(e){var t=e.status,a=e.progressPercent,n=e.fileName,r=e.display,i=void 0!==r&&r,o=(e.cancelButton,e.cancelHandler);return Object(u.useEffect)((function(){}),[a,t]),l.a.createElement("div",{className:"w-100 d-flex flex-column progressBar "+(i?null:"hiddenProgress")},l.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white border-all radius-all mb-3 mt-0"},l.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},l.a.createElement("div",{className:"uploadStatus w-100"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("i",{className:"iconU-sideBarInventoryEntry green"})," File",n),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("p",{className:"float-right",style:{lineHeight:"30px",cursor:"pointer"},onClick:function(){o()}},"Cancel"))),l.a.createElement("div",{class:"progress"},l.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:a+"%"},"aria-valuemin":"0","aria-valuemax":"100"})),l.a.createElement("div",{className:"mt-2"},l.a.createElement("div",{className:"emptyTextField inline"},t),l.a.createElement("div",{className:"text inline font-weight-bold"},"  ",a,"%"))))))}),m=a(666),b=a(662),v=a(670),h={flex:1,display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"20px",paddingRight:"20px",outline:"none",transition:"border .24s ease-in-out",height:"400px"},g={paddingTop:"20px",paddingBottom:"10px",paddingLeft:"20px",paddingRight:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fff",outline:"none",transition:"border .24s ease-in-out",height:"600px"},w={borderColor:"#2196f3"},S={borderColor:"#00e676"},y={borderColor:"#ff1744"};t.a=function(e){var t=e.field,a=e.transaction,r=e.nextPage,x=void 0===r?null:r,F=e.type,O=void 0===F?null:F,E=l.a.useState(!1),N=Object(s.a)(E,2),C=N[0],j=N[1],k=l.a.useState(),U=Object(s.a)(k,2),D=U[0],T=U[1],P=l.a.useState(0),I=Object(s.a)(P,2),R=I[0],A=I[1],B=l.a.useState(null),G=Object(s.a)(B,2),V=G[0],W=G[1],K=l.a.useState(null),L=Object(s.a)(K,2),M=L[0],_=L[1],H=l.a.useState(null),X=Object(s.a)(H,2),z=X[0],J=X[1],q=l.a.useState(null),Y=Object(s.a)(q,2),Q=(Y[0],Y[1]),Z=l.a.useState(null),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=l.a.useState(null),ne=Object(s.a)(ae,2),re=ne[0],ie=ne[1],oe=l.a.useState(!1),se=Object(s.a)(oe,2),ue=se[0],le=se[1],ce=l.a.useState(0),de=Object(s.a)(ce,2),pe=(de[0],de[1],l.a.useState(!1)),fe=Object(s.a)(pe,2),me=fe[0],be=fe[1],ve=l.a.useState(!1),he=Object(s.a)(ve,2),ge=he[0],we=he[1],Se=Object(c.c)(),ye=Object(c.d)((function(e){return e.warehouseAreaCsv})),xe=Object(c.d)((function(e){return e.outboundTypeCsv})),Fe=Object(c.d)((function(e){return e.status})),Oe=(Object(c.d)((function(e){return e.uploadStatus})),Object(c.d)((function(e){return e.csvDistinctPOSKUInfoId}))),Ee=Object(c.d)((function(e){return e.csvDistinctSKUNumber})),Ne=Object(c.d)((function(e){return e.skuCodeValidated})),Ce=Object(c.d)((function(e){return e.skuNumberValidated})),je=Object(c.d)((function(e){return e.csvData})),ke=Object(c.d)((function(e){return e.warehouseData}));!0!==ue&&Object(p.d)({dispatch:Se,resetStatus:ue,setIsResetCsvPersist:le});var Ue=Object(c.d)((function(e){return e.user.warehouseUuid}));null===M&&(Object(v.e)({warehouseUuid:Ue,dispatch:Se,type:"csvValidator"}),_(1)),null===z&&"additionalOutbound"==O&&(Object(v.b)({dispatch:Se,type:"csvValidator"}),J(1));var De=function(){var e=Object(o.a)(i.a.mark((function e(a){var n,r,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(0),te(!0),n=a[0].name,r=n.split("."),o=r[1],s=t.map((function(e){return e.dataField})),Object(p.c)({dispatch:Se,jsonArray:t}),u=null,[],e.next=11,T("Reading...");case 11:return e.next=13,W(n);case 13:return e.next=15,j(!0);case 15:if("csv"!=o){e.next=21;break}return e.next=18,Object(p.b)(a,s,A,T);case 18:u=e.sent,e.next=24;break;case 21:return e.next=23,Object(p.g)(a,s,A,T,Q,Se);case 23:u=e.sent;case 24:if(console.log(u),!1!==u){e.next=28;break}return be(!0),e.abrupt("return",0);case 28:return e.next=30,T("Validating Column Type...");case 30:return e.next=32,Object(p.f)({field:t,jsonArray:u,setIsProgressPercent:A,fileName:n,dispatch:Se,warehouseArea:ye,warehouseUuid:Ue,outboundType:xe,setIsCheckingSchema:ie,warehousesData:ke});case 32:return e.next=34,T("Validating PO SKU Code. . .");case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Te=Object(d.a)({noClick:!0,onDropAccepted:De,accept:"text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),Pe=Te.getRootProps,Ie=Te.getInputProps,Re=Te.isDragActive,Ae=Te.isDragAccept,Be=Te.isDragReject,Ge=(Te.acceptedFiles,Te.open),Ve=Object(u.useMemo)((function(){return Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},h),Re?w:{}),Ae?S:{}),Be?y:{})}),[Re,Be,Ae]);return Object(u.useEffect)((function(){Object(b.r)({dispatch:Se,skuData:Oe,status:ee})}),[Oe]),Object(u.useEffect)((function(){A(70),T("Validating SKU Numbers"),Object(b.s)({dispatch:Se,skuNumberData:Ee,bulk:!0,status:ee})}),[Ne]),Object(u.useEffect)((function(){A(90),T("rearrange data. . ."),Object(p.a)({poSkuInfoValidated:Ne,poSkuNumberValidated:Ce,csvData:je,transaction:a,setIsProgressPercent:A,dispatch:Se,status:ee,setIsProgressStatus:T,nextPage:x})}),[Ce]),Object(u.useEffect)((function(){!1===re&&(console.log(re),we(!0),ie(null))}),[re]),l.a.createElement("div",null,l.a.createElement(m.a,{status:Fe,onCloseFunction:function(){be(!1),A(0),j(!1)},statusDisplay:me,title:"Upload File Failed",cancelButtonTitle:"Try Another File",actionButtonTitle:null,colorText:"red",refreshOnCancel:!1,msg1:l.a.createElement("div",null,l.a.createElement("div",null,"Upload failed because your file has more than 2000 lines."," "),l.a.createElement("div",null," Please make it less than 2000 lines. ")),msg2:"Do you want to try another file?",cancelButtonClass:"bg-red background",actionButtonClass:" "}),l.a.createElement(m.a,{status:200,onCloseFunction:function(){we(!1),A(0),j(!1)},actionButtonEvent:function(){return Object(p.e)()},statusDisplay:ge,title:"Different File Template",cancelButtonTitle:"Cancel",actionButtonTitle:"Download latest template",colorText:"red",refreshOnCancel:!1,msg1:l.a.createElement("div",null,l.a.createElement("div",null," Your uploaded file has a different template.")),msg2:"Do you want to download the latest file template ?",actionButtonClass:"bg-green background",cancelButtonClass:""}),l.a.createElement("div",{className:"w-100 d-flex flex-column p-3 mb-3 bg-white"},l.a.createElement("div",{className:"d-flex flex-column justify-content-between",style:g},l.a.createElement("div",{className:"FileUploader"},l.a.createElement("div",Object.assign({className:"d-flex flex-column justify-content-end"},Pe({style:Ve})),l.a.createElement("input",Ie()),l.a.createElement("i",{style:{fontSize:"90px"},className:"lineGrey iconU-upload"}),l.a.createElement("b",{className:"mt-2"},"Drag and Drop files here"),l.a.createElement("p",{className:"mt-2 mb-2 emptyTextField"}," Or "),l.a.createElement("button",{type:"button",onClick:Ge,className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow"},"Browse File"),l.a.createElement("div",{className:"emptyTextField LatoBold mt-3 "},"Support only CSV, XLS, XLSX file"))),l.a.createElement("div",{className:"downloadTemplate w-100 align-right"},l.a.createElement("span",{onClick:function(){return Object(p.e)()},className:"float-right"},"Download the File Template")))),l.a.createElement(f,{status:D,progressPercent:R,fileName:V,display:C,cancelHandler:function(){window.location.reload()}}))}},686:function(e,t,a){},687:function(e,t,a){},705:function(e,t){},708:function(e,t){},709:function(e,t){},711:function(e,t){},712:function(e,t){}}]);
//# sourceMappingURL=8.cb92b0c4.chunk.js.map