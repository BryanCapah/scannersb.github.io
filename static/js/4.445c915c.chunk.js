(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[4],{1009:function(e,t){},1010:function(e,t){},1011:function(e,t,a){},660:function(e,t,a){"use strict";var n=a(653),r=a(1),o=a.n(r),i=a(655),s=(a(661),a(56)),l=a(19);t.a=function(e){var t=e.refresh,a=e.status,u=e.icon,c=e.statusDisplay,d=void 0!==c&&c,p=e.title,m=void 0===p?"":p,f=e.cancelButtonTitle,v=void 0===f?"Cancel":f,b=e.actionButtonTitle,h=void 0===b?"Submit":b,g=e.cancelButtonClass,w=void 0===g?"bg-background":g,y=e.actionButtonClass,S=void 0===y?"bg-background":y,x=e.actionButtonEvent,F=void 0===x?null:x,E=e.colorText,O=void 0===E?"red":E,C=e.msg1,N=void 0===C?null:C,k=e.msg2,j=void 0===k?null:k,U=e.onCloseFunction,D=void 0===U?null:U,T=e.refreshOnCancel,P=void 0===T||T,I=e.setIsSuccess,A=Object(s.c)();500===(null===a||void 0===a?void 0:a.code)&&0==d&&(u="em-pensive",m="Server Error",v="Try Again",h="Contact Administration",O="red",N=null===a||void 0===a?void 0:a.message,j="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,P=!0),408===(null===a||void 0===a?void 0:a.code)&&0==d&&(u="em-alarm_clock",m="Request Timeout",v="Try Again",h="Contact Administration",O="red",N=null===a||void 0===a?void 0:a.message,j="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,P=!0),400===(null===a||void 0===a?void 0:a.code)&&0==d&&(u="em-alarm_clock",m="Server Error",v="Try Again",h="Contact Administration",O="red",N=null===a||void 0===a?void 0:a.message,j="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,P=!1),404===(null===a||void 0===a?void 0:a.code)&&(m="Something wrong with the application",v="Try Again",h="Contact Administration",O="red",N=null===a||void 0===a?void 0:a.message,j="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,P=!1);var B=Object(r.useState)(d),R=Object(n.a)(B,2),G=R[0],V=R[1];return Object(r.useEffect)((function(){V(d)}),[d]),Object(r.useEffect)((function(){}),[G]),window.onkeydown=function(e){return 27===e.keyCode?V(!1):null},o.a.createElement(i.B,{className:"".concat(G?null:"d-none")},o.a.createElement(i.f,null,o.a.createElement(i.s,{show:G,closeOnBackdrop:!1,onClose:function(){V(!1),"function"===typeof I&&I({success:null,name:null}),A({type:l.k,status:null}),D&&D()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},o.a.createElement("div",{className:"d-flex flex-row-reverse"},o.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){V(!1),"function"===typeof I&&I({success:null,name:null}),A({type:l.k,status:null}),D&&D()}})),o.a.createElement(i.v,{className:"px-5 pt-5 border-none"},o.a.createElement(i.w,{className:"text LatoBold ".concat(O)},m," ",o.a.createElement("span",null,o.a.createElement("i",{className:"em ".concat(u)})))),o.a.createElement(i.t,{className:"px-5 py-0"},o.a.createElement("p",{className:"text mb-2"},N),o.a.createElement("p",{className:"text"},j)),o.a.createElement(i.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},v?o.a.createElement(i.d,{className:"".concat(w," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){P?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,a=e.parentOncCloseFunction;t(!1),a&&a()}({setShow:V,parentOncCloseFunction:D}),A({type:l.k,status:null})}},v):null,h?o.a.createElement(i.d,{className:"".concat(S," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){F?(F(),V(!1)):V(!1)}},h):null," "))))}},661:function(e,t,a){},695:function(e,t,a){"use strict";var n=a(4),r=a(65),o=a.n(r),i=a(89),s=a(653),l=a(1),u=a.n(l),c=a(56),d=a(1173),p=(a(973),a(974)),m=a.n(p),f=a(1007),v=a(19),b=function(){document.getElementById("download-template-xls").click()},h=function(e,t,a){return new Promise((function(n,r){var o=0,i=[],s=new FileReader;s.onload=function(){m.a.parse(s.result,(function(e,r){r.length>2001&&(a(0),n(!1)),r.map((function(e,n){if(0===n)return o++,!1;var s={};s.id=n,r[o].toString().split(";").map((function(e,a){s[t[a+1]]=e})),o++,i.push(s);var l=25*(n+1)/r.length;a(Math.ceil(l))}))}))},setTimeout((function(){n(i)}),200),s.readAsBinaryString(e[0])}))},g=function(){var e=Object(i.a)(o.a.mark((function e(t,a,n,r,s){var l,u,c,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=0,u=[],c=new FileReader,d=null,e.abrupt("return",new Promise((function(e,r){c.onload=function(){var t=Object(i.a)(o.a.mark((function t(r){var i,s,c,p;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.target.result,s=f.read(i,{type:"binary"}),c=s.SheetNames[0],p=s.Sheets[c],d=f.utils.sheet_to_csv(p,{header:1}),t.next=7,m.a.parse(d,(function(t,r){r.length>2001&&(n(0),e(!1)),r.map((function(e,t){var o={};o.id=t,r[l].toString().split(",").map((function(e,t){o[a[t+1]]=e})),l++,u.push(o);var i=25*(t+1)/r.length;n(Math.ceil(i))}))}));case 7:setTimeout((function(){e(u)}),200);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c.readAsBinaryString(t[0])})));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r,o){return e.apply(this,arguments)}}(),w=function(e){var t=e.dispatch,a=e.jsonArray;t({type:v.l,csvField:a})},y=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,r,i,s,l,u,c,d,p,m,f,b,h,g,w,y,S,x,F,E,O,C,N,k,j,U;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.field,n=t.jsonArray,r=t.setIsProgressPercent,i=t.fileName,s=t.dispatch,l=t.warehouseArea,u=t.warehouseUuid,c=t.outboundType,d=t.setIsCheckingSchema,p=t.setIsCheckingArea,m=t.warehousesData,f=[],b=[],h=[],m&&m.data.map((function(e){f.push(e.code),b.push(e.id),h.push(e.name)})),g=l?l.map((function(e){return e.label.toUpperCase()})):[],w=l?l.map((function(e){return e.value})):[],y=c?c.map((function(e){return e.label.toUpperCase()})):[],S=c?c.map((function(e){return e.value})):[],x=a?a.map((function(e){return e.text.toUpperCase().replace(/\s/g,"")})):[],F=[],E=[],O=[],C=[],!0,N=0,k=n[0],e.t0=o.a.keys(k);case 18:if((e.t1=e.t0()).done){e.next=34;break}if("id"!=(j=e.t1.value)){e.next=22;break}return e.abrupt("continue",18);case 22:if(U=k[j].toUpperCase().replace(/\s/g,""),"undefined"===j||x[N+1]===U&&x.includes(U)){e.next=31;break}return console.clear(),console.log("--Schema Not Same--"),console.log("Schema \t\t: ",x[N+1]),console.log("File SChema : ",U),!1,d(!1),e.abrupt("return",0);case 31:N++,e.next=18;break;case 34:return n.shift(),e.next=37,n.map((function(e,t){var o=!0;a.map((function(a,i){if(void 0!==a&&null!==a&&("id"===a.dataField||""!=e[a.dataField])){if("id"==a.dataField||(o=!1),e.warehouseSource=u,f&&"warehouse"==a.dataField){if(!f.includes(e[a.dataField]))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Not Found",e.warehouseUuid="",void(e.warehouseName="");var s=f.indexOf(e[a.dataField]);e.warehouseUuid=b[s],e.warehouseName=h[s]}if(f&&"warehouseDestination"==a.dataField){if(!f.includes(e[a.dataField]))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Not Found",e.warehouseDestinationUuid="",void(e.warehouseDestinationName="");var l=f.indexOf(e[a.dataField]);e.warehouseDestinationUuid=b[l],e.warehouseDestinationName=h[l]}if("areaName"==a.dataField){if(!g.includes(e[a.dataField].toUpperCase()))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Area Not Found",void(e.areaSource=null);var c=g.indexOf(e[a.dataField].toUpperCase());e.areaSource=w[c],O.includes(w[c])||O.push(w[c])}if("areaNameDestination"==a.dataField){if(!g.includes(e[a.dataField].toUpperCase()))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Area Not Found",void(e.areaDestination=null);var d=g.indexOf(e[a.dataField].toUpperCase());e.areaDestination=w[d],C.includes(w[d])||C.push(w[d])}if(S.length>0&&"outboundType"==a.dataField){if(!y.includes(e[a.dataField].toUpperCase()))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Outbound Type Not Found",void(e.outboundTypeCode=null);var p=y.indexOf(e[a.dataField].toUpperCase());e.outboundTypeCode=S[p]}if("newGrade"==a.dataField){e[a.dataField]&&!["WASTE","SEMI WASTE",""].includes(e[a.dataField].toUpperCase())?parseInt(e[a.dataField])?(E.includes(e[a.dataField])||E.push(e[a.dataField]),e[a.dataField+"Status"]=!0):""==e[a.dataField]?e[a.dataField+"Status"]=!0:(e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Grade Undefined"):e.newGradeUuid=e[a.dataField]}if(("ripenessLevel"==a.dataField||"newRipeness"==a.dataField)&&void 0!==e[a.dataField])e[a.dataField].split(" ")[1];var m=e[a.dataField],v=null;if("number"==a.type)isNaN(m)?v=!1:(v=!0,"wmsPoSkuCode"==a.dataField&&(F.includes(m)||F.push(m)),"skuNumber"==a.dataField&&(E.includes(m)||""===m||E.push(m)));else if("date_indo"==a.type){if(!m.match(/(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d/))return e[a.dataField+"Status"]=!1,void(e[a.dataField+"Reason"]="Date format must be 'dd-mm-yyyy'");v=!0}else v=!0;if(["grade","outboundReason","ripenessLevel","newRipeness","newGrade"].includes(a.dataField)&&""==m&&(v=!0),"newGrade"==a.dataField){["WASTE","SEMI WASTE",""].includes(m.toUpperCase())||parseInt(m)&&(v=!0,E.includes(m)||""===m||E.push(m))}e[a.dataField+"Status"]=v,e[a.dataField+"Reason"]=v?"":"Invalid ".concat(a.text," \nShould be a ").concat(a.type);var x=50*(t+1+parseInt(n.length))/(2*parseInt(n.length));r(Math.ceil(x))}})),e.emptyRow=o}));case 37:if(!(O.length>1||C.length>1)){e.next=42;break}return console.log("area Destination :"+C),console.log("area Source :"+O),p(!1),e.abrupt("return");case 42:s({type:v.l,csvData:n}),s({type:v.l,csvFileName:i}),s({type:v.l,csvDistinctPOSKUInfoId:F}),s({type:v.l,csvDistinctSKUNumber:E});case 46:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r,i,s,l,u,c,d,p,m,f,b,h,g,w;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.poSkuInfoValidated,r=t.poSkuNumberValidated,i=t.csvData,s=t.setIsProgressPercent,l=t.dispatch,u=t.status,c=t.transaction,t.setIsProgressStatus,d=t.nextPage,!1!==u&&null!==u){e.next=3;break}return e.abrupt("return",0);case 3:if(void 0!==i&&null!==i&&null!==a&&void 0!==a&&null!==r&&void 0!==r){e.next=6;break}return console.clear(),e.abrupt("return",0);case 6:p=[],m=[],a.map((function(e){p.push(e.wmsPoSkuCode),m.push(e.uom)})),f=[],b=[],h=[],g=[],r.map((function(e){f.push(e.skuNumber),b.push(e.id),h.push(e.imageMd),g.push(e.uom)})),w=[],i.map((function(e,t){if(!0===e.emptyRow)return 0;e.areaSource=parseInt(e.areaSource),e.areaDestination=parseInt(e.areaDestination),"stock_take"!=c&&"repacking"!=c&&"outbound"!=c||(e.areaDestination=parseInt(e.areaSource),e.warehouseDestination=parseInt(e.warehouseSource));var r=p.indexOf(e.wmsPoSkuCode),o=a[r];o&&void 0!==o.isExist&&!1!==o.isExist&&null!==o.isExist?(e.inboundDate=o.inboundDate,e.uom=m[r]):(e.wmsPoSkuCodeStatus=!1,e.wmsPoSkuCodeReason="PO SKU Code Not Found");var i=e.newGrade,s=["WASTE","SEMI WASTE",""];if(void 0!==i&&!s.includes(i.toUpperCase()))if(f.includes(i)){var l=f.indexOf(i);e.newGradeStatus=!0,e.newGradeUuid=b[l]}else""==i?(e.newGradeUuid="",e.newGradeStatus=!0):(e.newGradeReason="Grade Undefined",e.newGradeStatus=!1);var u=e.skuNumber;if(f.includes(u)){var d=f.indexOf(u);e.skuUuid=b[d],e.photo=h[d]}else e.skuNumberStatus=!1,e.skuNumberReason="SKU Number Not Found",e.skuUuid="";var v=e.newGrade;if(console.log("tmp_new_grade",v),v&&s.includes(v.toUpperCase())||""==v)e.newGradeReason="",e.newGradeStatus=!0,e.newGradeUuid=null,e.newGradeUom=null;else if(f.includes(v)){var y=f.indexOf(v);e.newGradeReason="",e.newGradeStatus=!0,e.newGradeUuid=b[y],e.newGradeUom=g[y]}else e.newGradeReason="SKU Number Not Found",e.newGradeStatus=!1,e.newGradeUuid=null,e.newGradeUom=null;w.push(Object(n.a)(Object(n.a)({},e),o))})),l({type:v.l,csvData:w}),s(Math.ceil(100)),setTimeout((function(){d()}),200);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.dispatch,t.resetStatus,n=t.setIsResetCsvPersist,a({type:v.l,csvData:null}),a({type:v.l,csvFileName:null}),a({type:v.l,csvDistinctPOSKUInfoId:null}),a({type:v.n,skuCodeValidated:null}),a({type:v.n,skuCodeValidated:null}),a({type:v.k,status:null}),n(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=(a(1011),function(e){var t=e.status,a=e.progressPercent,n=e.fileName,r=e.display,o=void 0!==r&&r,i=(e.cancelButton,e.cancelHandler);return Object(l.useEffect)((function(){}),[a,t]),u.a.createElement("div",{className:"w-100 d-flex flex-column progressBar "+(o?null:"hiddenProgress")},u.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white border-all radius-all mb-3 mt-0"},u.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},u.a.createElement("div",{className:"uploadStatus w-100"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-7"},u.a.createElement("i",{className:"iconU-sideBarInventoryEntry green"})," File",n),u.a.createElement("div",{className:"col-md-5"},u.a.createElement("p",{className:"float-right",style:{lineHeight:"30px",cursor:"pointer"},onClick:function(){i()}},"Cancel"))),u.a.createElement("div",{class:"progress"},u.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:a+"%"},"aria-valuemin":"0","aria-valuemax":"100"})),u.a.createElement("div",{className:"mt-2"},u.a.createElement("div",{className:"emptyTextField inline"},t),u.a.createElement("div",{className:"text inline font-weight-bold"},"  ",a,"%"))))))}),E=a(660),O=a(657),C=a(666),N={flex:1,display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"20px",paddingRight:"20px",outline:"none",transition:"border .24s ease-in-out",height:"400px"},k={paddingTop:"20px",paddingBottom:"10px",paddingLeft:"20px",paddingRight:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fff",outline:"none",transition:"border .24s ease-in-out",height:"600px"},j={borderColor:"#2196f3"},U={borderColor:"#00e676"},D={borderColor:"#ff1744"};t.a=function(e){var t=e.field,a=e.transaction,r=e.nextPage,p=void 0===r?null:r,m=e.type,f=void 0===m?null:m,v=u.a.useState(!1),T=Object(s.a)(v,2),P=T[0],I=T[1],A=u.a.useState(),B=Object(s.a)(A,2),R=B[0],G=B[1],V=u.a.useState(0),W=Object(s.a)(V,2),K=W[0],L=W[1],M=u.a.useState(null),_=Object(s.a)(M,2),H=_[0],X=_[1],z=u.a.useState(null),J=Object(s.a)(z,2),q=J[0],Y=J[1],Q=u.a.useState(null),Z=Object(s.a)(Q,2),$=Z[0],ee=Z[1],te=u.a.useState(null),ae=Object(s.a)(te,2),ne=(ae[0],ae[1]),re=u.a.useState(null),oe=Object(s.a)(re,2),ie=oe[0],se=oe[1],le=u.a.useState(null),ue=Object(s.a)(le,2),ce=ue[0],de=ue[1],pe=u.a.useState(null),me=Object(s.a)(pe,2),fe=me[0],ve=me[1],be=u.a.useState(!1),he=Object(s.a)(be,2),ge=he[0],we=he[1],ye=u.a.useState(!1),Se=Object(s.a)(ye,2),xe=Se[0],Fe=Se[1],Ee=u.a.useState(!1),Oe=Object(s.a)(Ee,2),Ce=Oe[0],Ne=Oe[1],ke=u.a.useState(!1),je=Object(s.a)(ke,2),Ue=je[0],De=je[1],Te=Object(c.c)(),Pe=Object(c.d)((function(e){return e.warehouseAreaCsv})),Ie=Object(c.d)((function(e){return e.outboundTypeCsv})),Ae=Object(c.d)((function(e){return e.status})),Be=Object(c.d)((function(e){return e.csvDistinctPOSKUInfoId})),Re=Object(c.d)((function(e){return e.csvDistinctSKUNumber})),Ge=Object(c.d)((function(e){return e.skuCodeValidated})),Ve=Object(c.d)((function(e){return e.skuNumberValidated})),We=Object(c.d)((function(e){return e.csvData})),Ke=Object(c.d)((function(e){return e.warehouseData}));!0!==ge&&x({dispatch:Te,resetStatus:ge,setIsResetCsvPersist:we});var Le=Object(c.d)((function(e){return e.user.warehouseUuid}));null===q&&(Object(C.f)({warehouseUuid:Le,dispatch:Te,type:"csvValidator"}),Y(1)),null===$&&"additionalOutbound"==f&&(Object(C.c)({dispatch:Te,type:"csvValidator"}),ee(1));var Me=function(){var e=Object(i.a)(o.a.mark((function e(a){var n,r,i,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(0),se(!0),n=a[0].name,r=n.split("."),i=r[1],s=t.map((function(e){return e.dataField})),w({dispatch:Te,jsonArray:t}),l=null,e.next=10,G("Reading...");case 10:return e.next=12,X(n);case 12:return e.next=14,I(!0);case 14:if("csv"!=i){e.next=20;break}return e.next=17,h(a,s,L);case 17:l=e.sent,e.next=23;break;case 20:return e.next=22,g(a,s,L,G,ne,Te);case 22:l=e.sent;case 23:if(console.log(l),!1!==l){e.next=27;break}return Fe(!0),e.abrupt("return",0);case 27:return e.next=29,G("Validating Column Type...");case 29:return e.next=31,y({field:t,jsonArray:l,setIsProgressPercent:L,fileName:n,dispatch:Te,warehouseArea:Pe,warehouseUuid:Le,outboundType:Ie,setIsCheckingSchema:de,warehousesData:Ke,setIsCheckingArea:ve});case 31:return e.next=33,G("Validating PO SKU Code. . .");case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=Object(d.a)({noClick:!0,onDropAccepted:Me,accept:"text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),He=_e.getRootProps,Xe=_e.getInputProps,ze=_e.isDragActive,Je=_e.isDragAccept,qe=_e.isDragReject,Ye=_e.open,Qe=Object(l.useMemo)((function(){return Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},N),ze?j:{}),Je?U:{}),qe?D:{})}),[ze,qe,Je]);return Object(l.useEffect)((function(){Object(O.x)({dispatch:Te,skuData:Be,status:ie})}),[Be]),Object(l.useEffect)((function(){L(70),G("Validating SKU Numbers"),Object(O.y)({dispatch:Te,skuNumberData:Re,bulk:!0,status:ie})}),[Ge]),Object(l.useEffect)((function(){L(90),G("rearrange data. . ."),S({poSkuInfoValidated:Ge,poSkuNumberValidated:Ve,csvData:We,transaction:a,setIsProgressPercent:L,dispatch:Te,status:ie,setIsProgressStatus:G,nextPage:p})}),[Ve]),Object(l.useEffect)((function(){!1===ce&&(console.log(ce),Ne(!0),de(null))}),[ce]),Object(l.useEffect)((function(){!1===fe&&(console.log(fe),De(!0),ve(null))}),[fe]),u.a.createElement("div",null,u.a.createElement(E.a,{status:Ae,onCloseFunction:function(){Fe(!1),L(0),I(!1)},statusDisplay:xe,title:"Upload File Failed",cancelButtonTitle:"Try Another File",actionButtonTitle:null,colorText:"red",refreshOnCancel:!1,msg1:u.a.createElement("div",null,u.a.createElement("div",null,"Upload failed because your file has more than 2000 lines."," "),u.a.createElement("div",null," Please make it less than 2000 lines. ")),msg2:"Do you want to try another file?",cancelButtonClass:"bg-red background",actionButtonClass:" "}),u.a.createElement(E.a,{status:200,onCloseFunction:function(){Ne(!1),L(0),I(!1)},actionButtonEvent:function(){return b()},statusDisplay:Ce,title:"Different File Template",cancelButtonTitle:"Cancel",actionButtonTitle:"Download latest template",colorText:"red",refreshOnCancel:!1,msg1:u.a.createElement("div",null,u.a.createElement("div",null," Your uploaded file has a different template.")),msg2:"Do you want to download the latest file template ?",actionButtonClass:"bg-green background",cancelButtonClass:""}),u.a.createElement(E.a,{status:200,onCloseFunction:function(){De(!1),L(0),I(!1)},actionButtonEvent:function(){De(!1),L(0),I(!1)},statusDisplay:Ue,title:"Upload File Failed!",actionButtonTitle:"Try Another File",colorText:"red",refreshOnCancel:!1,msg1:u.a.createElement("div",null,u.a.createElement("div",null," ","We detect that you've uploaded two or more areas at once."),u.a.createElement("div",null," ","Please try again to upload the file with one specific area.")),msg2:"Do you want to try another file ?",actionButtonClass:"bg-red margin-left-0 background",cancelButtonClass:"d-none "}),u.a.createElement("div",{className:"w-100 d-flex flex-column p-3 mb-3 bg-white"},u.a.createElement("div",{className:"d-flex flex-column justify-content-between",style:k},u.a.createElement("div",{className:"FileUploader"},u.a.createElement("div",Object.assign({className:"d-flex flex-column justify-content-end"},He({style:Qe})),u.a.createElement("input",Xe()),u.a.createElement("i",{style:{fontSize:"90px"},className:"lineGrey iconU-upload"}),u.a.createElement("b",{className:"mt-2"},"Drag and Drop files here"),u.a.createElement("p",{className:"mt-2 mb-2 emptyTextField"}," Or "),u.a.createElement("button",{type:"button",onClick:Ye,className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow"},"Browse File"),u.a.createElement("div",{className:"emptyTextField LatoBold mt-3 "},"Support only CSV, XLS, XLSX file"))),u.a.createElement("div",{className:"downloadTemplate w-100 align-right"},u.a.createElement("span",{onClick:function(){return b()},className:"float-right"},"Download the File Template")))),u.a.createElement(F,{status:R,progressPercent:K,fileName:H,display:P,cancelHandler:function(){window.location.reload()}}))}},866:function(e,t){},973:function(e,t,a){},978:function(e,t){},980:function(e,t){}}]);
//# sourceMappingURL=4.445c915c.chunk.js.map