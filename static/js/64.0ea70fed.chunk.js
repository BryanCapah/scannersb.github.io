(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[64],{1237:function(e,t,n){"use strict";n.r(t);var a=n(659),o=n(1),c=n.n(o),l=n(20),r=n(168),i=n(56),s=n(670),m=(n(732),n(662)),d=n(665);t.default=Object(l.i)((function(e){var t=Object(i.c)(),n=Object(i.d)((function(e){return e.status})),u=Object(i.d)((function(e){return e.stockTransferEntryData})),f=Object(m.u)({moduleEntry:u,moduleName:"stockTransfer"}),v=Object(o.useState)(f),p=Object(a.a)(v,2),g=p[0],b=p[1];Object(o.useEffect)((function(){var e=Object(m.u)({moduleEntry:u,moduleName:"stockTransfer"});b(e)}),[]);var E=document.documentElement.clientHeight,y=E-210,h=E-210;if(!u)return c.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},c.a.createElement(l.a,{to:"/stockentry/stock-take"},"Please Select At Least 1 SKU"));var k=(null===u||void 0===u?void 0:u.jobPost).list;return c.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},c.a.createElement(d.a,{status:n}),c.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white border-all radius-all mb-3"},c.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},c.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},c.a.createElement("div",null,"Check SKU".concat(k.length>1?"s":""," that you want to remove from entries"),c.a.createElement("span",{className:"green"},"".concat(g-f>0?" (".concat(g-f," Removed Sku").concat(g-f>1?"s":"",")"):""))),c.a.createElement("div",{className:"icon-unfinishEn"},c.a.createElement("i",{className:"iconU-sideBarInventoryEntry emptyTextField"})))),c.a.createElement("div",{className:"mb-1 mt-3 d-flex align-items-center scroll-sku ".concat((null===k||void 0===k?void 0:k.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:y,maxHeight:y}},(null===k||void 0===k?void 0:k.length)?null===k||void 0===k?void 0:k.map((function(e,n){return c.a.createElement(s.a,{key:n,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(m.p)({idx:n,checked:!e,dispatch:t,moduleEntry:u,moduleName:"stockTransfer"})},check:!(null===e||void 0===e?void 0:e.checked)})})):c.a.createElement("div",{className:"w-100 text-center emptyTextField",style:{minHeight:h}},'"No Data"'))),c.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},c.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},c.a.createElement(r.b,{to:"/inventory-entry/stock-transfer/weight-entry"},c.a.createElement("button",{onClick:function(){return Object(m.s)({dispatch:t,moduleSummary:u,moduleName:"stockTransfer"})},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel")),c.a.createElement(r.b,{to:"/inventory-entry/stock-transfer/weight-entry",onClick:function(e){return f!==g||e.preventDefault()}},c.a.createElement("button",{onClick:function(){return f!==g?Object(m.q)({dispatch:t,moduleEntry:u,moduleName:"stockTransfer"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(f!==g?"bg-green":"bg-lineGrey")},"Remove")))))}))},665:function(e,t,n){"use strict";var a=n(659),o=n(1),c=n.n(o),l=n(661),r=(n(667),n(56)),i=n(19);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,m=e.statusDisplay,d=void 0!==m&&m,u=e.title,f=void 0===u?"":u,v=e.cancelButtonTitle,p=void 0===v?"Cancel":v,g=e.actionButtonTitle,b=void 0===g?"Submit":g,E=e.cancelButtonClass,y=void 0===E?"bg-background":E,h=e.actionButtonClass,k=void 0===h?"bg-background":h,x=e.actionButtonEvent,N=void 0===x?null:x,w=e.colorText,C=void 0===w?"red":w,j=e.msg1,S=void 0===j?null:j,O=e.msg2,T=void 0===O?null:O,B=e.onCloseFunction,U=void 0===B?null:B,P=e.refreshOnCancel,A=void 0===P||P,D=e.setIsSuccess,H=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",f="Server Error",p="Try Again",b="Contact Administration",C="red",S=null===n||void 0===n?void 0:n.message,T="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,A=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",f="Request Timeout",p="Try Again",b="Contact Administration",C="red",S=null===n||void 0===n?void 0:n.message,T="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,A=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",f="Server Error",p="Try Again",b="Contact Administration",C="red",S=null===n||void 0===n?void 0:n.message,T="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,A=!1),404===(null===n||void 0===n?void 0:n.code)&&(f="Something wrong with the application",p="Try Again",b="Contact Administration",C="red",S=null===n||void 0===n?void 0:n.message,T="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,A=!1);var z=Object(o.useState)(d),L=Object(a.a)(z,2),R=L[0],F=L[1];return Object(o.useEffect)((function(){F(d)}),[d]),Object(o.useEffect)((function(){}),[R]),window.onkeydown=function(e){return 27===e.keyCode?F(!1):null},c.a.createElement(l.B,{className:"".concat(R?null:"d-none")},c.a.createElement(l.f,null,c.a.createElement(l.s,{show:R,closeOnBackdrop:!1,onClose:function(){F(!1),"function"===typeof D&&D({success:null,name:null}),H({type:i.k,status:null}),U&&U()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},c.a.createElement("div",{className:"d-flex flex-row-reverse"},c.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){F(!1),"function"===typeof D&&D({success:null,name:null}),H({type:i.k,status:null}),U&&U()}})),c.a.createElement(l.v,{className:"px-5 pt-5 border-none"},c.a.createElement(l.w,{className:"text LatoBold ".concat(C)},f," ",c.a.createElement("span",null,c.a.createElement("i",{className:"em ".concat(s)})))),c.a.createElement(l.t,{className:"px-5 py-0"},c.a.createElement("p",{className:"text mb-2"},S),c.a.createElement("p",{className:"text"},T)),c.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},p?c.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){A?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:F,parentOncCloseFunction:U}),H({type:i.k,status:null})}},p):null,b?c.a.createElement(l.d,{className:"".concat(k," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){N?(N(),F(!1)):F(!1)}},b):null," "))))}},667:function(e,t,n){},670:function(e,t,n){"use strict";var a=n(659),o=n(1),c=n.n(o),l=n(681),r=n.n(l),i=n(116),s=n(661);t.a=function(e){var t,n,l=e.skuUuId,m=void 0===l?123:l,d=e.selectAll,u=e.img,f=void 0===u?r.a:u,v=e.skuDescription,p=void 0===v?"SKU Description":v,g=e.skuNumber,b=void 0===g?"1001":g,E=e.uomLabel,y=void 0===E?"weight":E,h=e.uomValue,k=void 0===h?100.3:h,x=e.uom,N=void 0===x?"KG":x,w=e.isCheckedHandler,C=void 0===w?null:w,j=e.check,S=void 0!==j&&j,O=e.idx,T=void 0===O?0:O,B=e.singleView,U=e.setCreatePo,P=e.target,A=e.targetMovementProgress,D=e.targetRepackProgress,H=e.moduleName,z=e.setFromBarcode,L=e.setSingleViewSku,R=document.documentElement.clientWidth<=500,F=c.a.useState(S),K=Object(a.a)(F,2),G=K[0],W=K[1],M=function(){W(!0),"function"===typeof L&&L(m),"function"!==typeof L&&C(!0),"function"===typeof U&&U({show:!0,skuNumber:b}),"function"===typeof z&&z(!1)},V=!!P||"d-none",I=0,q=0;((null===D||void 0===D?void 0:D.length)&&"repack"===H&&D.forEach((function(e){I+=Number(e.totalPack),q+=Number(e.totalUom)})),(null===A||void 0===A?void 0:A.length)&&"repack"!==H)&&(I=null===(t=A[0])||void 0===t?void 0:t.totalMove,q=null===(n=A[0])||void 0===n?void 0:n.totalUos);return Object(o.useEffect)((function(e){d&&(W(!0),C(!0)),!1===d&&W(!1)}),[d]),c.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&M()},tabindex:"0",key:T,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(R?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(G?"bg-softGreen":null)},c.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(R?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){W(!G),C&&C(!G)}},c.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(G?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),c.a.createElement("img",{src:f,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),c.a.createElement("div",{className:"text-left"},c.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},p),c.a.createElement("div",{className:"text fontSizeTitle"},b))),c.a.createElement("hr",{className:"".concat(R?null:"d-none")}),c.a.createElement("div",{className:"d-flex w-100 ".concat(R?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},c.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(R?"justify-content-end":null)},c.a.createElement("div",{className:"w-25 mr-4 ".concat(V," tooltips")},c.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},c.a.createElement("span",{className:"pl-1 pr-1"},"repack"===H?"Repack Percentage":"Movement Percentage")),c.a.createElement("div",{className:"latoBold"},"".concat(I,"/").concat(q),c.a.createElement("span",{className:"font-green"}," (".concat(Object(i.e)(I/q*100),"%)"))),c.a.createElement(s.A,{value:I,max:q,className:"mb-3"})),c.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(V)}),c.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(R?"d-none":null)},"Total ".concat("KG"===N.toUpperCase()?y.toUpperCase():N.toUpperCase())),c.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(i.e)(k)),c.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},N)),c.a.createElement("div",{onClick:M,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(B?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},732:function(e,t,n){}}]);
//# sourceMappingURL=64.0ea70fed.chunk.js.map