(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[53],{1194:function(e,t,n){"use strict";n.r(t);var a=n(653),o=n(1),c=n.n(o),l=n(19),i=n(166),r=n(56),s=n(665),m=(n(692),n(656)),d=n(659);t.default=Object(l.i)((function(e){var t=Object(r.c)(),n=Object(r.d)((function(e){return e.status})),u=Object(r.d)((function(e){return e.repackEntryData})),v=Object(m.r)({moduleEntry:u,moduleName:"repack"}),p=Object(o.useState)(v),f=Object(a.a)(p,2),g=f[0],b=f[1];Object(o.useEffect)((function(){var e=Object(m.r)({moduleEntry:u,moduleName:"repack"});b(e)}),[]);var y=document.documentElement.clientHeight,E=y-210,h=y-210;if(!u)return c.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},c.a.createElement(l.a,{to:"/inventory-entry/repacking"},"Please Select At Least 1 SKU"));var x=(null===u||void 0===u?void 0:u.jobPost).list;return c.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},c.a.createElement(d.a,{status:n}),c.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white border-all radius-all mb-3"},c.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},c.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},c.a.createElement("div",null,"Check SKU".concat(x.length>1?"s":""," that you want to remove from entries"),c.a.createElement("span",{className:"green"},"".concat(g-v>0?" (".concat(g-v," Removed Sku").concat(g-v>1?"s":"",")"):""))),c.a.createElement("div",{className:"icon-unfinishEn"},c.a.createElement("i",{className:"iconU-sideBarInventoryEntry emptyTextField"})))),c.a.createElement("div",{className:"mb-1 mt-3 d-flex align-items-center scroll-sku ".concat((null===x||void 0===x?void 0:x.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:E,maxHeight:E}},(null===x||void 0===x?void 0:x.length)?null===x||void 0===x?void 0:x.map((function(e,n){return c.a.createElement(s.a,{key:n,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(m.n)({idx:n,checked:!e,dispatch:t,moduleEntry:u,moduleName:"repack"})},check:!(null===e||void 0===e?void 0:e.checked)})})):c.a.createElement("div",{className:"w-100 text-center emptyTextField",style:{minHeight:h}},'"No Data"'))),c.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},c.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},c.a.createElement(i.b,{to:"/inventory-entry/repacking/weight-entry"},c.a.createElement("button",{onClick:function(){return Object(m.p)({dispatch:t,moduleSummary:u,moduleName:"repack"})},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel")),c.a.createElement(i.b,{to:"/inventory-entry/repacking/weight-entry",onClick:function(e){return v!==g||e.preventDefault()}},c.a.createElement("button",{onClick:function(){return v!==g?Object(m.o)({dispatch:t,moduleEntry:u,moduleName:"repack"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(v!==g?"bg-green":"bg-lineGrey")},"Remove")))))}))},658:function(e,t,n){},659:function(e,t,n){"use strict";var a=n(653),o=n(1),c=n.n(o),l=n(654),i=(n(658),n(56)),r=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,m=e.statusDisplay,d=void 0!==m&&m,u=e.title,v=void 0===u?"":u,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,g=e.actionButtonTitle,b=void 0===g?"Submit":g,y=e.cancelButtonClass,E=void 0===y?"bg-background":y,h=e.actionButtonClass,x=void 0===h?"bg-background":h,k=e.actionButtonEvent,N=void 0===k?null:k,w=e.colorText,C=void 0===w?"red":w,j=e.msg1,S=void 0===j?null:j,O=e.msg2,B=void 0===O?null:O,T=e.onCloseFunction,U=void 0===T?null:T,P=e.refreshOnCancel,A=void 0===P||P,D=e.setIsSuccess,H=Object(i.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",b="Contact Administration",C="red",S=null===n||void 0===n?void 0:n.message,B="Please try again or contact Sayurbox administration for further information.",E="bg-green",d=!0,A=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",b="Contact Administration",C="red",S=null===n||void 0===n?void 0:n.message,B="Please try again or contact Sayurbox administration for further information.",E="bg-green",d=!0,A=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",b="Contact Administration",C="red",S=null===n||void 0===n?void 0:n.message,B="Please try again or contact Sayurbox administration for further information.",E="bg-green",d=!0,A=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",b="Contact Administration",C="red",S=null===n||void 0===n?void 0:n.message,B="Please try again or contact Sayurbox administration for further information.",E="bg-green",d=!0,A=!1);var z=Object(o.useState)(d),L=Object(a.a)(z,2),R=L[0],F=L[1];return Object(o.useEffect)((function(){F(d)}),[d]),Object(o.useEffect)((function(){}),[R]),window.onkeydown=function(e){return 27===e.keyCode?F(!1):null},c.a.createElement(l.B,{className:"".concat(R?null:"d-none")},c.a.createElement(l.f,null,c.a.createElement(l.s,{show:R,closeOnBackdrop:!1,onClose:function(){F(!1),"function"===typeof D&&D({success:null,name:null}),H({type:r.k,status:null}),U&&U()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},c.a.createElement("div",{className:"d-flex flex-row-reverse"},c.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){F(!1),"function"===typeof D&&D({success:null,name:null}),H({type:r.k,status:null}),U&&U()}})),c.a.createElement(l.v,{className:"px-5 pt-5 border-none"},c.a.createElement(l.w,{className:"text LatoBold ".concat(C)},v," ",c.a.createElement("span",null,c.a.createElement("i",{className:"em ".concat(s)})))),c.a.createElement(l.t,{className:"px-5 py-0"},c.a.createElement("p",{className:"text mb-2"},S),c.a.createElement("p",{className:"text"},B)),c.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?c.a.createElement(l.d,{className:"".concat(E," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){A?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:F,parentOncCloseFunction:U}),H({type:r.k,status:null})}},f):null,b?c.a.createElement(l.d,{className:"".concat(x," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){N?(N(),F(!1)):F(!1)}},b):null," "))))}},665:function(e,t,n){"use strict";var a=n(653),o=n(1),c=n.n(o),l=n(674),i=n.n(l),r=n(114),s=n(654);t.a=function(e){var t,n,l,m,d=e.skuUuId,u=void 0===d?123:d,v=e.selectAll,p=e.img,f=void 0===p?i.a:p,g=e.skuDescription,b=void 0===g?"SKU Description":g,y=e.skuNumber,E=void 0===y?"1001":y,h=e.uomLabel,x=void 0===h?"weight":h,k=e.uomValue,N=void 0===k?100.3:k,w=e.uom,C=void 0===w?"KG":w,j=e.isCheckedHandler,S=void 0===j?null:j,O=e.check,B=void 0!==O&&O,T=e.idx,U=void 0===T?0:T,P=e.singleView,A=e.setCreatePo,D=e.target,H=e.targetMovementProgress,z=e.targetRepackProgress,L=e.moduleName,R=e.setFromBarcode,F=e.setSingleViewSku,K=document.documentElement.clientWidth<=500,G=c.a.useState(B),W=Object(a.a)(G,2),M=W[0],V=W[1],I=function(){V(!0),"function"===typeof F&&F(u),"function"!==typeof F&&S(!0),"function"===typeof A&&A({show:!0,skuNumber:E}),"function"===typeof R&&R(!1)},J=!!D||"d-none",_=0,q=0;(null===z||void 0===z?void 0:z.length)&&"repack"===L&&(_=null===(t=z[0])||void 0===t?void 0:t.totalPack,q=null===(n=z[0])||void 0===n?void 0:n.totalUom);(null===H||void 0===H?void 0:H.length)&&"repack"!==L&&(_=null===(l=H[0])||void 0===l?void 0:l.totalMove,q=null===(m=H[0])||void 0===m?void 0:m.totalUos);return Object(o.useEffect)((function(e){v&&(V(!0),S(!0)),!1===v&&V(!1)}),[v]),c.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&I()},tabindex:"0",key:U,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(K?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(M?"bg-softGreen":null)},c.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(K?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){V(!M),S&&S(!M)}},c.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(M?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),c.a.createElement("img",{src:f,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),c.a.createElement("div",{className:"text-left"},c.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},b),c.a.createElement("div",{className:"text fontSizeTitle"},E))),c.a.createElement("hr",{className:"".concat(K?null:"d-none")}),c.a.createElement("div",{className:"d-flex w-100 ".concat(K?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},c.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(K?"justify-content-end":null)},c.a.createElement("div",{className:"w-25 mr-4 ".concat(J," tooltips")},c.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},c.a.createElement("span",{className:"pl-1 pr-1"},"repack"===L?"Repack Percentage":"Movement Percentage")),c.a.createElement("div",{className:"latoBold"},"".concat(_,"/").concat(q),c.a.createElement("span",{className:"font-green"}," (".concat(Object(r.e)(_/q*100),"%)"))),c.a.createElement(s.A,{value:_,max:q,className:"mb-3"})),c.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(J)}),c.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(K?"d-none":null)},"Total ".concat("KG"===C.toUpperCase()?x.toUpperCase():C.toUpperCase())),c.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(r.e)(N)),c.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},C)),c.a.createElement("div",{onClick:I,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(P?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},692:function(e,t,n){}}]);
//# sourceMappingURL=53.fd7eec3e.chunk.js.map