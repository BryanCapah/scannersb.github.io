(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[50],{1199:function(e,t,n){"use strict";n.r(t);var a=n(659),o=n(1),l=n.n(o),c=n(19),i=n(168),r=n(56),s=n(671),d=(n(728),n(664)),m=n(666);t.default=Object(c.i)((function(e){var t=Object(r.c)(),n=Object(r.d)((function(e){return e.status})),u=Object(r.d)((function(e){return e.outboundEntryData})),v=Object(d.m)({moduleEntry:u,moduleName:"outbound"}),f=Object(o.useState)(v),p=Object(a.a)(f,2),b=p[0],g=p[1];Object(o.useEffect)((function(){var e=Object(d.m)({moduleEntry:u,moduleName:"outbound"});g(e)}),[]);var E=document.documentElement.clientHeight,y=E-210,h=E-210;if(!u)return l.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},l.a.createElement(c.a,{to:"/inventory-entry/additional-outbound"},"Please Select At Least 1 SKU"));var x=(null===u||void 0===u?void 0:u.jobPost).list;return l.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},l.a.createElement(m.a,{status:n}),l.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white border-all radius-all mb-3"},l.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},l.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},l.a.createElement("div",null,"Check SKU".concat(x.length>1?"s":""," that you want to remove from entries"),l.a.createElement("span",{className:"green"},"".concat(b-v>0?" (".concat(b-v," Removed Sku").concat(b-v>1?"s":"",")"):""))),l.a.createElement("div",{className:"icon-unfinishEn"},l.a.createElement("i",{className:"iconU-sideBarInventoryEntry emptyTextField"})))),l.a.createElement("div",{className:"mb-1 mt-3 d-flex align-items-center scroll-sku ".concat((null===x||void 0===x?void 0:x.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:y,maxHeight:y}},(null===x||void 0===x?void 0:x.length)?null===x||void 0===x?void 0:x.map((function(e,n){return l.a.createElement(s.a,{key:n,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(d.i)({idx:n,checked:!e,dispatch:t,moduleEntry:u,moduleName:"outbound"})},check:!(null===e||void 0===e?void 0:e.checked)})})):l.a.createElement("div",{className:"w-100 text-center emptyTextField",style:{minHeight:h}},'"No Data"'))),l.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},l.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},l.a.createElement(i.b,{to:"/inventory-entry/additional-outbound/weight-entry"},l.a.createElement("button",{onClick:function(){return Object(d.k)({dispatch:t,moduleSummary:u,moduleName:"outbound"})},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel")),l.a.createElement(i.b,{to:"/inventory-entry/additional-outbound/weight-entry",onClick:function(e){return v!==b||e.preventDefault()}},l.a.createElement("button",{onClick:function(){return v!==b?Object(d.j)({dispatch:t,moduleEntry:u,moduleName:"outbound"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(v!==b?"bg-green":"bg-lineGrey")},"Update")))))}))},663:function(e,t,n){},666:function(e,t,n){"use strict";var a=n(659),o=n(1),l=n.n(o),c=n(660),i=(n(663),n(56)),r=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,d=e.statusDisplay,m=void 0!==d&&d,u=e.title,v=void 0===u?"":u,f=e.cancelButtonTitle,p=void 0===f?"Cancel":f,b=e.actionButtonTitle,g=void 0===b?"Submit":b,E=e.cancelButtonClass,y=void 0===E?"bg-background":E,h=e.actionButtonClass,x=void 0===h?"bg-background":h,N=e.actionButtonEvent,k=void 0===N?null:N,w=e.colorText,C=void 0===w?"red":w,j=e.msg1,O=void 0===j?null:j,S=e.msg2,B=void 0===S?null:S,T=e.onCloseFunction,U=void 0===T?null:T,A=e.refreshOnCancel,P=void 0===A||A,D=e.setIsSuccess,H=Object(i.c)();500===(null===n||void 0===n?void 0:n.code)&&0==m&&(s="em-pensive",v="Server Error",p="Try Again",g="Contact Administration",C="red",O=null===n||void 0===n?void 0:n.message,B="Please try again or contact Sayurbox administration for further information.",y="bg-green",m=!0,P=!0),408===(null===n||void 0===n?void 0:n.code)&&0==m&&(s="em-alarm_clock",v="Request Timeout",p="Try Again",g="Contact Administration",C="red",O=null===n||void 0===n?void 0:n.message,B="Please try again or contact Sayurbox administration for further information.",y="bg-green",m=!0,P=!0),400===(null===n||void 0===n?void 0:n.code)&&0==m&&(s="em-alarm_clock",v="Server Error",p="Try Again",g="Contact Administration",C="red",O=null===n||void 0===n?void 0:n.message,B="Please try again or contact Sayurbox administration for further information.",y="bg-green",m=!0,P=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",p="Try Again",g="Contact Administration",C="red",O=null===n||void 0===n?void 0:n.message,B="Please try again or contact Sayurbox administration for further information.",y="bg-green",m=!0,P=!1);var z=Object(o.useState)(m),L=Object(a.a)(z,2),F=L[0],K=L[1];return Object(o.useEffect)((function(){K(m)}),[m]),Object(o.useEffect)((function(){}),[F]),window.onkeydown=function(e){return 27===e.keyCode?K(!1):null},l.a.createElement(c.B,{className:"".concat(F?null:"d-none")},l.a.createElement(c.f,null,l.a.createElement(c.s,{show:F,closeOnBackdrop:!1,onClose:function(){K(!1),"function"===typeof D&&D({success:null,name:null}),H({type:r.k,status:null}),U&&U()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},l.a.createElement("div",{className:"d-flex flex-row-reverse"},l.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){K(!1),"function"===typeof D&&D({success:null,name:null}),H({type:r.k,status:null}),U&&U()}})),l.a.createElement(c.v,{className:"px-5 pt-5 border-none"},l.a.createElement(c.w,{className:"text LatoBold ".concat(C)},v," ",l.a.createElement("span",null,l.a.createElement("i",{className:"em ".concat(s)})))),l.a.createElement(c.t,{className:"px-5 py-0"},l.a.createElement("p",{className:"text mb-2"},O),l.a.createElement("p",{className:"text"},B)),l.a.createElement(c.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},p?l.a.createElement(c.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){P?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:K,parentOncCloseFunction:U}),H({type:r.k,status:null})}},p):null,g?l.a.createElement(c.d,{className:"".concat(x," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){k?(k(),K(!1)):K(!1)}},g):null," "))))}},671:function(e,t,n){"use strict";var a=n(659),o=n(1),l=n.n(o),c=n(680),i=n.n(c),r=n(116),s=n(660);t.a=function(e){var t,n,c,d,m=e.selectAll,u=e.img,v=void 0===u?i.a:u,f=e.skuDescription,p=void 0===f?"SKU Description":f,b=e.skuNumber,g=void 0===b?"1001":b,E=e.uomLabel,y=void 0===E?"weight":E,h=e.uomValue,x=void 0===h?100.3:h,N=e.uom,k=void 0===N?"KG":N,w=e.isCheckedHandler,C=void 0===w?null:w,j=e.check,O=void 0!==j&&j,S=e.idx,B=void 0===S?0:S,T=e.singleView,U=e.setCreatePo,A=e.target,P=e.targetMovementProgress,D=e.targetRepackProgress,H=e.moduleName,z=e.setFromBarcode,L=document.documentElement.clientWidth<=500,F=l.a.useState(O),K=Object(a.a)(F,2),G=K[0],R=K[1],W=function(){R(!0),C(!0),"function"===typeof U&&U({show:!0,skuNumber:g}),"function"===typeof z&&z(!1)},M=!!A||"d-none",V=0,I=0;(null===D||void 0===D?void 0:D.length)&&"repack"===H&&(V=null===(t=D[0])||void 0===t?void 0:t.totalPack,I=null===(n=D[0])||void 0===n?void 0:n.totalUom);(null===P||void 0===P?void 0:P.length)&&"repack"!==H&&(V=null===(c=P[0])||void 0===c?void 0:c.totalMove,I=null===(d=P[0])||void 0===d?void 0:d.totalUos);return Object(o.useEffect)((function(e){m&&(R(!0),C(!0))}),[m]),l.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&W()},tabindex:"0",key:B,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(L?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(G?"bg-softGreen":null)},l.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(L?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){R(!G),C&&C(!G)}},l.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(G?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),l.a.createElement("img",{src:v,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),l.a.createElement("div",{className:"text-left"},l.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},p),l.a.createElement("div",{className:"text fontSizeTitle"},g))),l.a.createElement("hr",{className:"".concat(L?null:"d-none")}),l.a.createElement("div",{className:"d-flex w-100 ".concat(L?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},l.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(L?"justify-content-end":null)},l.a.createElement("div",{className:"w-25 mr-4 ".concat(M," tooltips")},l.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},l.a.createElement("span",{className:"pl-1 pr-1"},"Movement Percentage")),l.a.createElement("div",{className:"latoBold"},"".concat(V,"/").concat(I),l.a.createElement("span",{className:"font-green"}," (".concat(Object(r.e)(V/I*100),"%)"))),l.a.createElement(s.A,{value:V,max:I,className:"mb-3"})),l.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(M)}),l.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(L?"d-none":null)},"Total ".concat("KG"===k.toUpperCase()?y.toUpperCase():k.toUpperCase())),l.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(r.e)(x)),l.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},k)),l.a.createElement("div",{onClick:W,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(T?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},728:function(e,t,n){}}]);
//# sourceMappingURL=50.2d4972b0.chunk.js.map