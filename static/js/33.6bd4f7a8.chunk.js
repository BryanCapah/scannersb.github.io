(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[33],{1336:function(e,t,a){},1377:function(e,t,a){"use strict";a.r(t);var n=a(661),r=a(1),i=a.n(r),o=a(56),s=a(19),l=a(695),u=a(833),c=a.n(u),d=(a(1336),c.a.ExcelFile),p=c.a.ExcelFile.ExcelSheet,m=c.a.ExcelFile.ExcelColumn;t.default=Object(s.i)((function(e){Object(o.c)();var t=i.a.useState(!1),a=Object(n.a)(t,2);a[0],a[1];return i.a.createElement("div",null,i.a.createElement(d,{element:i.a.createElement("button",{id:"download-template-xls",style:{display:"none"}},"Download Data"),filename:"Movement_Template"},i.a.createElement(p,{data:[{areaSource:"",areaDestination:"",po:"",skuNumber:"",ripenessLevel:"",inputWeight:""}],name:"template"},i.a.createElement(m,{label:"Area Source",value:"areaSource"}),i.a.createElement(m,{label:"Area Destination",value:"areaDestination"}),i.a.createElement(m,{label:"PO SKU Code",value:"po"}),i.a.createElement(m,{label:"SKU Number",value:"skuNumber"}),i.a.createElement(m,{label:"Expiry Date",value:"skuNumber"}),i.a.createElement(m,{label:"Ripeness Level",value:"skuNumber"}),i.a.createElement(m,{label:"Input Weight",value:"inputWeight"}))),i.a.createElement(l.a,{nextPage:function(){return e.history.push("/inventory-entry/movement/CSV-upload/review")},transaction:"movement",field:[{dataField:"id",text:"ID",editable:!1,sort:!0,hidden:!0,type:"number"},{dataField:"areaName",text:"Area Source",type:"string",sort:!0},{dataField:"areaNameDestination",text:"Area Destination",type:"string",sort:!0},{dataField:"wmsPoSkuCode",text:"PO SKU Code",type:"number",sort:!0},{dataField:"skuNumber",text:"SKU Number",type:"number",sort:!0},{dataField:"expiryDateCol",text:"Expiry Date",type:"date_indo",sort:!0},{dataField:"ripenessLevel",text:"Ripeness",type:"string",sort:!0},{dataField:"qty",text:"QTY",type:"number",sort:!0}],type:"movement"}))}))},666:function(e,t,a){},667:function(e,t,a){"use strict";var n=a(661),r=a(1),i=a.n(r),o=a(665),s=(a(666),a(56)),l=a(21),u=a(680);t.a=function(e){var t=e.refresh,a=e.status,c=e.icon,d=e.statusDisplay,p=void 0!==d&&d,m=e.title,f=void 0===m?"":m,b=e.cancelButtonTitle,v=void 0===b?"Cancel":b,h=e.actionButtonTitle,g=void 0===h?"Submit":h,y=e.cancelButtonClass,x=void 0===y?"bg-background":y,S=e.actionButtonClass,w=void 0===S?"bg-background":S,E=e.actionButtonEvent,O=void 0===E?null:E,F=e.colorText,C=void 0===F?"red":F,N=e.msg1,j=void 0===N?null:N,k=e.msg2,U=void 0===k?null:k,D=e.onCloseFunction,T=void 0===D?null:D,P=e.refreshOnCancel,I=void 0===P||P,A=e.setIsSuccess,R=Object(s.c)();500===(null===a||void 0===a?void 0:a.code)&&0==p&&(c="em-pensive",f="Server Error",v="Try Again",g="Contact Administration",C="red",j=null===a||void 0===a?void 0:a.message,U="Please try again or contact Sayurbox administration for further information.",x="bg-green",p=!0,I=!0),408===(null===a||void 0===a?void 0:a.code)&&0==p&&(c="em-alarm_clock",f="Request Timeout",v="Try Again",g="Contact Administration",C="red",j=null===a||void 0===a?void 0:a.message,U="Please try again or contact Sayurbox administration for further information.",x="bg-green",p=!0,I=!0),400===(null===a||void 0===a?void 0:a.code)&&0==p&&(c="em-alarm_clock",f="Server Error",v="Try Again",g="Contact Administration",C="red",j=null===a||void 0===a?void 0:a.message,U="Please try again or contact Sayurbox administration for further information.",x="bg-green",p=!0,I=!1),404===(null===a||void 0===a?void 0:a.code)&&(f="Something wrong with the application",v="Try Again",g="Contact Administration",C="red",j=null===a||void 0===a?void 0:a.message,U="Please try again or contact Sayurbox administration for further information.",x="bg-green",p=!0,I=!1);var B=Object(r.useState)(p),G=Object(n.a)(B,2),V=G[0],K=G[1];return Object(r.useEffect)((function(){K(p)}),[p]),Object(r.useEffect)((function(){}),[V]),window.onkeydown=function(e){return 27===e.keyCode?K(!1):null},i.a.createElement(o.B,{className:"".concat(V?null:"d-none")},i.a.createElement(o.f,null,i.a.createElement(o.s,{show:V,closeOnBackdrop:!1,onClose:function(){K(!1),Object(u.isFunction)(A)&&A({success:null,name:null}),R({type:l.k,status:null}),T&&T()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){K(!1),Object(u.isFunction)(A)&&A({success:null,name:null}),R({type:l.k,status:null}),T&&T()}})),i.a.createElement(o.v,{className:"px-5 pt-5 border-none"},i.a.createElement(o.w,{className:"text LatoBold ".concat(C)},f," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(c)})))),i.a.createElement(o.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},j),i.a.createElement("p",{className:"text"},U)),i.a.createElement(o.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},v?i.a.createElement(o.d,{className:"".concat(x," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){I?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,a=e.parentOncCloseFunction;t(!1),console.log(a),a&&a()}({setShow:K,parentOncCloseFunction:T}),R({type:l.k,status:null})}},v):null,g?i.a.createElement(o.d,{className:"".concat(w," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){O?(O(),K(!1)):K(!1)}},g):null," "))))}},679:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"g",(function(){return m})),a.d(t,"c",(function(){return f})),a.d(t,"f",(function(){return b})),a.d(t,"a",(function(){return v})),a.d(t,"d",(function(){return h}));var n=a(5),r=a(65),i=a.n(r),o=a(91),s=a(728),l=a.n(s),u=a(731),c=a(21),d=function(){document.getElementById("download-template-xls").click()},p=function(e,t,a){return new Promise((function(n,r){var i=0,o=[],s=new FileReader;s.onload=function(){l.a.parse(s.result,(function(e,r){r.length>2001&&(a(0),n(!1)),r.map((function(e,n){if(0===n)return i++,!1;var s={};s.id=n,r[i].toString().split(";").map((function(e,a){s[t[a+1]]=e})),i++,o.push(s);var l=25*(n+1)/r.length;a(Math.ceil(l))}))}))},setTimeout((function(){n(o)}),200),s.readAsBinaryString(e[0])}))},m=function(){var e=Object(o.a)(i.a.mark((function e(t,a,n,r,s){var c,d,p,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=0,d=[],p=new FileReader,m=null,!1,e.abrupt("return",new Promise((function(e,r){new FileReader;p.onload=function(){var t=Object(o.a)(i.a.mark((function t(r){var o,s,p,f;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.target.result,s=u.read(o,{type:"binary"}),p=s.SheetNames[0],f=s.Sheets[p],m=u.utils.sheet_to_csv(f,{header:1}),t.next=7,l.a.parse(m,(function(t,r){r.length>2001&&(n(0),e(!1)),r.map((function(e,t){var i={};i.id=t,r[c].toString().split(",").map((function(e,t){i[a[t+1]]=e})),c++,d.push(i);var o=25*(t+1)/r.length;n(Math.ceil(o))}))}));case 7:setTimeout((function(){e(d)}),200);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p.readAsBinaryString(t[0])})));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r,i){return e.apply(this,arguments)}}(),f=function(e){var t=e.dispatch,a=e.jsonArray;t({type:c.l,csvField:a})},b=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,r,o,s,l,u,d,p,m,f,b,v,h,g,y,x,S,w,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.field,n=t.jsonArray,r=t.setIsProgressPercent,o=t.fileName,s=t.dispatch,l=t.warehouseArea,u=t.warehouseUuid,d=t.outboundType,p=t.setIsCheckingSchema,m=l?l.map((function(e){return e.label.toUpperCase()})):[],f=l?l.map((function(e){return e.value})):[],b=d?d.map((function(e){return e.label.toUpperCase()})):[],v=d?d.map((function(e){return e.value})):[],h=a?a.map((function(e){return e.text.toUpperCase().replace(/\s/g,"")})):[],g=[],y=[],!0,x=0,S=n[0],e.t0=i.a.keys(S);case 12:if((e.t1=e.t0()).done){e.next=28;break}if("id"!=(w=e.t1.value)){e.next=16;break}return e.abrupt("continue",12);case 16:if(E=S[w].toUpperCase().replace(/\s/g,""),"undefined"===w||h[x+1]===E&&h.includes(E)){e.next=25;break}return console.clear(),console.log("--Schema Not Same--"),console.log("Schema \t\t: ",h[x+1]),console.log("File SChema : ",E),!1,p(!1),e.abrupt("return",0);case 25:x++,e.next=12;break;case 28:return n.shift(),e.next=31,n.map((function(e,t){var i=!0;a.map((function(a,o){if(void 0!==a&&null!==a&&("id"===a.dataField||""!=e[a.dataField])){if("id"==a.dataField||(i=!1),e.warehouseSource=u,"areaName"==a.dataField){if(!m.includes(e[a.dataField].toUpperCase()))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Area Not Found",void(e.areaSource=null);var s=m.indexOf(e[a.dataField].toUpperCase());e.areaSource=f[s]}if("areaNameDestination"==a.dataField){if(!m.includes(e[a.dataField].toUpperCase()))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Warehouse Area Not Found",void(e.areaDestination=null);var l=m.indexOf(e[a.dataField].toUpperCase());e.areaDestination=f[l]}if(v.length>0&&"outboundType"==a.dataField){if(!b.includes(e[a.dataField].toUpperCase()))return e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Outbound Type Not Found",void(e.outboundTypeCode=null);var c=b.indexOf(e[a.dataField].toUpperCase());e.outboundTypeCode=v[c]}if("newGrade"==a.dataField){e[a.dataField]&&!["WASTE","SEMI WASTE",""].includes(e[a.dataField].toUpperCase())?parseInt(e[a.dataField])?(y.includes(e[a.dataField])||y.push(e[a.dataField]),e[a.dataField+"Status"]=!0):""==e[a.dataField]?e[a.dataField+"Status"]=!0:(e[a.dataField+"Status"]=!1,e[a.dataField+"Reason"]="Grade Undefined"):e.newGradeUuid=e[a.dataField]}if(("ripenessLevel"==a.dataField||"newRipeness"==a.dataField)&&void 0!==e[a.dataField])e[a.dataField].split(" ")[1];var d=e[a.dataField],p=null;if("number"==a.type)isNaN(d)?p=!1:(p=!0,"wmsPoSkuCode"==a.dataField&&(g.includes(d)||g.push(d)),"skuNumber"==a.dataField&&(y.includes(d)||""===d||y.push(d)));else if("date_indo"==a.type){if(!d.match(/(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d/))return e[a.dataField+"Status"]=!1,void(e[a.dataField+"Reason"]="Date format must be 'dd-mm-yyyy'");p=!0}else p=!0;if(["grade","outboundReason","ripenessLevel","newRipeness","newGrade"].includes(a.dataField)&&""==d&&(p=!0),"newGrade"==a.dataField){["WASTE","SEMI WASTE",""].includes(d.toUpperCase())||parseInt(d)&&(p=!0,y.includes(d)||""===d||y.push(d))}e[a.dataField+"Status"]=p,e[a.dataField+"Reason"]=p?"":"Invalid ".concat(a.text," \nShould be a ").concat(a.type);var h=50*(t+1+parseInt(n.length))/(2*parseInt(n.length));r(Math.ceil(h))}})),e.emptyRow=i}));case 31:s({type:c.l,csvData:n}),s({type:c.l,csvFileName:o}),s({type:c.l,csvDistinctPOSKUInfoId:g}),s({type:c.l,csvDistinctSKUNumber:y});case 35:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,r,o,s,l,u,d,p,m,f,b,v,h,g,y;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.poSkuInfoValidated,r=t.poSkuNumberValidated,o=t.csvData,s=t.setIsProgressPercent,l=t.dispatch,u=t.status,d=t.transaction,t.setIsProgressStatus,p=t.nextPage,!1!==u&&null!==u){e.next=3;break}return e.abrupt("return",0);case 3:if(void 0!==o&&null!==o&&null!==a&&void 0!==a&&null!==r&&void 0!==r){e.next=6;break}return console.clear(),e.abrupt("return",0);case 6:m=[],f=[],a.map((function(e){m.push(e.wmsPoSkuCode),f.push(e.uom)})),b=[],v=[],h=[],g=[],r.map((function(e){b.push(e.skuNumber),v.push(e.id),h.push(e.imageMd),g.push(e.uom)})),y=[],o.map((function(e,t){if(!0===e.emptyRow)return 0;e.areaSource=parseInt(e.areaSource),e.areaDestination=parseInt(e.areaDestination),"stock_take"!=d&&"repacking"!=d&&"outbound"!=d||(e.areaDestination=parseInt(e.areaSource),e.warehouseDestination=parseInt(e.warehouseSource));var r=m.indexOf(e.wmsPoSkuCode),i=a[r];i&&void 0!==i.isExist&&!1!==i.isExist&&null!==i.isExist?(e.inboundDate=i.inboundDate,e.uom=f[r]):(e.wmsPoSkuCodeStatus=!1,e.wmsPoSkuCodeReason="PO SKU Code Not Found");var o=e.newGrade,s=["WASTE","SEMI WASTE",""];if(void 0!==o&&!s.includes(o.toUpperCase()))if(b.includes(o)){var l=b.indexOf(o);e.newGradeStatus=!0,e.newGradeUuid=v[l]}else""==o?(e.newGradeUuid="",e.newGradeStatus=!0):(e.newGradeReason="Grade Undefined",e.newGradeStatus=!1);var u=e.skuNumber;if(b.includes(u)){var c=b.indexOf(u);e.skuUuid=v[c],e.photo=h[c]}else e.skuNumberStatus=!1,e.skuNumberReason="SKU Number Not Found",e.skuUuid="";var p=e.newGrade;if(console.log("tmp_new_grade",p),p&&s.includes(p.toUpperCase())||""==p)e.newGradeReason="",e.newGradeStatus=!0,e.newGradeUuid=null,e.newGradeUom=null;else if(b.includes(p)){var x=b.indexOf(p);e.newGradeReason="",e.newGradeStatus=!0,e.newGradeUuid=v[x],e.newGradeUom=g[x]}else e.newGradeReason="SKU Number Not Found",e.newGradeStatus=!1,e.newGradeUuid=null,e.newGradeUom=null;y.push(Object(n.a)(Object(n.a)({},e),i))})),l({type:c.l,csvData:y}),s(Math.ceil(100)),setTimeout((function(){p()}),200);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.dispatch,t.resetStatus,n=t.setIsResetCsvPersist,a({type:c.l,csvData:null}),a({type:c.l,csvFileName:null}),a({type:c.l,csvDistinctPOSKUInfoId:null}),a({type:c.n,skuCodeValidated:null}),a({type:c.n,skuCodeValidated:null}),a({type:c.k,status:null}),n(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},692:function(e,t,a){},694:function(e,t,a){},695:function(e,t,a){"use strict";var n=a(5),r=a(65),i=a.n(r),o=a(91),s=a(661),l=a(1),u=a.n(l),c=a(56),d=a(787),p=(a(692),a(679)),m=(a(694),function(e){var t=e.status,a=e.progressPercent,n=e.fileName,r=e.display,i=void 0!==r&&r,o=(e.cancelButton,e.cancelHandler);return Object(l.useEffect)((function(){}),[a,t]),u.a.createElement("div",{className:"w-100 d-flex flex-column progressBar "+(i?null:"hiddenProgress")},u.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white border-all radius-all mb-3 mt-0"},u.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},u.a.createElement("div",{className:"uploadStatus w-100"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-7"},u.a.createElement("i",{className:"iconU-sideBarInventoryEntry green"})," File",n),u.a.createElement("div",{className:"col-md-5"},u.a.createElement("p",{className:"float-right",style:{lineHeight:"30px",cursor:"pointer"},onClick:function(){o()}},"Cancel"))),u.a.createElement("div",{class:"progress"},u.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:a+"%"},"aria-valuemin":"0","aria-valuemax":"100"})),u.a.createElement("div",{className:"mt-2"},u.a.createElement("div",{className:"emptyTextField inline"},t),u.a.createElement("div",{className:"text inline font-weight-bold"},"  ",a,"%"))))))}),f=a(667),b=a(663),v=a(670),h={flex:1,display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"20px",paddingRight:"20px",outline:"none",transition:"border .24s ease-in-out",height:"400px"},g={paddingTop:"20px",paddingBottom:"10px",paddingLeft:"20px",paddingRight:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fff",outline:"none",transition:"border .24s ease-in-out",height:"600px"},y={borderColor:"#2196f3"},x={borderColor:"#00e676"},S={borderColor:"#ff1744"};t.a=function(e){var t=e.field,a=e.transaction,r=e.nextPage,w=void 0===r?null:r,E=e.type,O=void 0===E?null:E,F=u.a.useState(!1),C=Object(s.a)(F,2),N=C[0],j=C[1],k=u.a.useState(),U=Object(s.a)(k,2),D=U[0],T=U[1],P=u.a.useState(0),I=Object(s.a)(P,2),A=I[0],R=I[1],B=u.a.useState(null),G=Object(s.a)(B,2),V=G[0],K=G[1],L=u.a.useState(null),W=Object(s.a)(L,2),M=W[0],_=W[1],H=u.a.useState(null),X=Object(s.a)(H,2),q=X[0],z=X[1],J=u.a.useState(null),Y=Object(s.a)(J,2),Q=(Y[0],Y[1]),Z=u.a.useState(null),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=u.a.useState(null),ne=Object(s.a)(ae,2),re=ne[0],ie=ne[1],oe=u.a.useState(!1),se=Object(s.a)(oe,2),le=se[0],ue=se[1],ce=u.a.useState(0),de=Object(s.a)(ce,2),pe=(de[0],de[1],u.a.useState(!1)),me=Object(s.a)(pe,2),fe=me[0],be=me[1],ve=u.a.useState(!1),he=Object(s.a)(ve,2),ge=he[0],ye=he[1],xe=Object(c.c)(),Se=Object(c.d)((function(e){return e.warehouseAreaCsv})),we=Object(c.d)((function(e){return e.outboundTypeCsv})),Ee=Object(c.d)((function(e){return e.status})),Oe=(Object(c.d)((function(e){return e.uploadStatus})),Object(c.d)((function(e){return e.csvDistinctPOSKUInfoId}))),Fe=Object(c.d)((function(e){return e.csvDistinctSKUNumber})),Ce=Object(c.d)((function(e){return e.skuCodeValidated})),Ne=Object(c.d)((function(e){return e.skuNumberValidated})),je=Object(c.d)((function(e){return e.csvData}));!0!==le&&Object(p.d)({dispatch:xe,resetStatus:le,setIsResetCsvPersist:ue});var ke=Object(c.d)((function(e){return e.user.warehouseUuid}));null===M&&(Object(v.e)({warehouseUuid:ke,dispatch:xe,type:"csvValidator"}),_(1)),null===q&&"additionalOutbound"==O&&(Object(v.b)({dispatch:xe,type:"csvValidator"}),z(1));var Ue=function(){var e=Object(o.a)(i.a.mark((function e(a){var n,r,o,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(0),te(!0),n=a[0].name,r=n.split("."),o=r[1],s=t.map((function(e){return e.dataField})),Object(p.c)({dispatch:xe,jsonArray:t}),l=null,[],e.next=11,T("Reading...");case 11:return e.next=13,K(n);case 13:return e.next=15,j(!0);case 15:if("csv"!=o){e.next=21;break}return e.next=18,Object(p.b)(a,s,R,T);case 18:l=e.sent,e.next=24;break;case 21:return e.next=23,Object(p.g)(a,s,R,T,Q,xe);case 23:l=e.sent;case 24:if(console.log(l),!1!==l){e.next=28;break}return be(!0),e.abrupt("return",0);case 28:return e.next=30,T("Validating Column Type...");case 30:return e.next=32,Object(p.f)({field:t,jsonArray:l,setIsProgressPercent:R,fileName:n,dispatch:xe,warehouseArea:Se,warehouseUuid:ke,outboundType:we,setIsCheckingSchema:ie});case 32:return e.next=34,T("Validating PO SKU Code. . .");case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=Object(d.a)({noClick:!0,onDropAccepted:Ue,accept:"text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),Te=De.getRootProps,Pe=De.getInputProps,Ie=De.isDragActive,Ae=De.isDragAccept,Re=De.isDragReject,Be=(De.acceptedFiles,De.open),Ge=Object(l.useMemo)((function(){return Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},h),Ie?y:{}),Ae?x:{}),Re?S:{})}),[Ie,Re,Ae]);return Object(l.useEffect)((function(){Object(b.m)({dispatch:xe,skuData:Oe,status:ee})}),[Oe]),Object(l.useEffect)((function(){R(70),T("Validating SKU Numbers"),Object(b.n)({dispatch:xe,skuNumberData:Fe,bulk:!0,status:ee})}),[Ce]),Object(l.useEffect)((function(){R(90),T("rearrange data. . ."),Object(p.a)({poSkuInfoValidated:Ce,poSkuNumberValidated:Ne,csvData:je,transaction:a,setIsProgressPercent:R,dispatch:xe,status:ee,setIsProgressStatus:T,nextPage:w})}),[Ne]),Object(l.useEffect)((function(){!1===re&&(console.log(re),ye(!0),ie(null))}),[re]),u.a.createElement("div",null,u.a.createElement(f.a,{status:Ee,onCloseFunction:function(){be(!1),R(0),j(!1)},statusDisplay:fe,title:"Upload File Failed",cancelButtonTitle:"Try Another File",actionButtonTitle:null,colorText:"red",refreshOnCancel:!1,msg1:u.a.createElement("div",null,u.a.createElement("div",null,"Upload failed because your file has more than 2000 lines."," "),u.a.createElement("div",null," Please make it less than 2000 lines. ")),msg2:"Do you want to try another file?",cancelButtonClass:"bg-red background",actionButtonClass:" "}),u.a.createElement(f.a,{status:200,onCloseFunction:function(){ye(!1),R(0),j(!1)},actionButtonEvent:function(){return Object(p.e)()},statusDisplay:ge,title:"Different File Template",cancelButtonTitle:"Cancel",actionButtonTitle:"Download latest template",colorText:"red",refreshOnCancel:!1,msg1:u.a.createElement("div",null,u.a.createElement("div",null," Your uploaded file has a different template.")),msg2:"Do you want to download the latest file template ?",actionButtonClass:"bg-green background",cancelButtonClass:""}),u.a.createElement("div",{className:"w-100 d-flex flex-column p-3 mb-3 bg-white"},u.a.createElement("div",{className:"d-flex flex-column justify-content-between",style:g},u.a.createElement("div",{className:"FileUploader"},u.a.createElement("div",Object.assign({className:"d-flex flex-column justify-content-end"},Te({style:Ge})),u.a.createElement("input",Pe()),u.a.createElement("i",{style:{fontSize:"90px"},className:"lineGrey iconU-upload"}),u.a.createElement("b",{className:"mt-2"},"Drag and Drop files here"),u.a.createElement("p",{className:"mt-2 mb-2 emptyTextField"}," Or "),u.a.createElement("button",{type:"button",onClick:Be,className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow"},"Browse File"),u.a.createElement("div",{className:"emptyTextField LatoBold mt-3 "},"Support only CSV, XLS, XLSX file"))),u.a.createElement("div",{className:"downloadTemplate w-100 align-right"},u.a.createElement("span",{onClick:function(){return Object(p.e)()},className:"float-right"},"Download the File Template")))),u.a.createElement(m,{status:D,progressPercent:A,fileName:V,display:N,cancelHandler:function(){window.location.reload()}}))}},723:function(e,t){},729:function(e,t){},730:function(e,t){},732:function(e,t){},733:function(e,t){},834:function(e,t){},835:function(e,t){},836:function(e,t){},837:function(e,t){},838:function(e,t){},839:function(e,t){},840:function(e,t){},841:function(e,t){},842:function(e,t){},843:function(e,t){}}]);
//# sourceMappingURL=33.6bd4f7a8.chunk.js.map