(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[25],{1182:function(e,t,n){"use strict";n.r(t);var a=n(653),o=n(1),i=n.n(o),l=n(56),r=n(20),c=n(659),s=n(673),u=n(657),d=n(666),m=n(664),v=n(674),p=n.n(v),f=(n(716),n(743)),b=n(656),g=n(660),h=n(166);t.default=Object(r.i)((function(e){var t,n=Object(l.d)((function(e){return e.zeroQuantity})),r=Object(l.d)((function(e){return e.thereAreRequest})),v=Object(l.c)(),y=Object(l.d)((function(e){return e.user.warehouseUuid})),E=Object(l.d)((function(e){return e.status})),x=Object(l.d)((function(e){return e.isLoading})),w=Object(l.d)((function(e){return e.stockTakeEntryData})),k=Object(b.t)({moduleEntry:w,moduleName:"stockTake"}),N=Object(l.d)((function(e){return e.warehouseArea})),j=Object(l.d)((function(e){return e.areaId})),O=Object(l.d)((function(e){return e.stockTakeAddSku})),S=Object(o.useState)(null),A=Object(a.a)(S,2),I=A[0],C=A[1],U=Object(o.useState)(0),D=Object(a.a)(U,2),B=(D[0],D[1]),T=Object(o.useState)(!1),L=Object(a.a)(T,2),W=L[0],P=(L[1],Object(o.useState)(null)),M=Object(a.a)(P,2),R=M[0],K=M[1],z=Object(o.useState)(!0),H=Object(a.a)(z,2),V=H[0],q=H[1],Q=Object(o.useState)([]),F=Object(a.a)(Q,2),G=F[0],J=F[1],Y=Object(o.useState)(),X=Object(a.a)(Y,2),Z=X[0],_=X[1];if(Object(o.useEffect)((function(){Object(d.d)({dispatch:v}),Object(d.f)({dispatch:v,warehouseUuid:y}),B(k)}),[]),w&&void 0!==w||e.history.push("/inventory-entry/stock-take"),!0===V&&void 0!==w){var $,ee;K(w.jobPost.list.map((function(e,t){return e.skuNumber})));var te={};te.value=null===w||void 0===w||null===($=w.jobPost)||void 0===$?void 0:$.areaSource,te.label=null===w||void 0===w||null===(ee=w.jobPost)||void 0===ee?void 0:ee.areaName,Object(b.u)({selected:te,dispatch:v}),q(!1)}var ne=document.documentElement.clientHeight,ae=ne-290,oe=ne-290,ie=Object(o.useState)(),le=Object(a.a)(ie,2),re=le[0],ce=le[1],se=Object(o.useState)(),ue=Object(a.a)(se,2),de=ue[0],me=ue[1];return!1===O&&(null===w||void 0===w?void 0:w.jobPost.list.length)>0&&W&&e.history.push("/inventory-entry/weight-entry"),i.a.createElement("div",{className:"w-100  stock-take-summary"},i.a.createElement(g.a,{status:E}),i.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},i.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},i.a.createElement(c.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:N,onChangeDropdown:function(e){return Object(b.u)({selected:e,dispatch:v})},selectedValue:j,showTitle:!0}))),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all mb-3"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",i.a.createElement("span",{className:"green"},"(".concat(G.length," Selected SKU").concat(G.length>1?"s":"",")"))))),i.a.createElement(s.a,{moduleName:"ADD_SKU",setSortBy:me,category:re,setCategory:ce,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:re,zeroQuantity:n,moduleName:"stockTake",dispatch:v,desc:e,warehouseUuid:y,areaId:j,setModule:C,selectedSkusNumber:R},_(e))}}),i.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===I||void 0===I?void 0:I.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:ae,maxHeight:ae}},(null===I||void 0===I?void 0:I.length)?null===I||void 0===I||null===(t=I.sort((function(e,t){return Object(b.g)(e,t,null===de||void 0===de?void 0:de.value)})))||void 0===t?void 0:t.map((function(e,t){return i.a.createElement(m.a,{key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(f.a)({zeroQuantity:n,idx:t,checked:e,dispatch:v,moduleSummary:I,moduleEntry:G,moduleName:"stockTake",warehouseUuid:y,areaId:j,preAddHandler:J})},check:null===e||void 0===e?void 0:e.checked})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:oe,maxHeight:oe}},Object(b.s)({isLoading:x,summary:I})?j&&0===(null===I||void 0===I?void 0:I.length)?i.a.createElement("div",null,"Sorry, we couldn't find any matches for '",i.a.createElement("span",{className:"LatoBold"},Z),"' in ",null===j||void 0===j?void 0:j.label," area.",i.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":i.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/stock-take/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),i.a.createElement(h.b,{to:"/inventory-entry/stock-take/weight-entry",onClick:function(e){return 0===r&&(null===G||void 0===G?void 0:G.length)>0||e.preventDefault()}},i.a.createElement("button",{onClick:function(){return 0===r&&(null===G||void 0===G?void 0:G.length)>0?Object(b.a)({dispatch:v,moduleEntry:G,moduleSummary:w,moduleName:"stockTake"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(0===r&&(null===G||void 0===G?void 0:G.length)>0?"bg-green":"bg-lineGrey")},0===(null===G||void 0===G?void 0:G.length)||0===r&&(null===G||void 0===G?void 0:G.length)>0?"Update":"Processing...")))))}))},659:function(e,t,n){"use strict";var a=n(658),o=n(4),i=n(653),l=n(1),r=n.n(l),c=n(689);t.a=function(e){var t,n,s=e.isEmpty,u=e.title,d=e.placeholder,m=e.options,v=e.selectedValue,p=e.showTitle,f=e.width,b=e.className,g=e.entryListIdx,h=e.onChangeDropdown,y=e.show,E=e.poListIdx,x=e.isDisabled,w=e.style,k=e.noMarginBottom,N=e.resetName,j=e.isMulti,O=e.hideResetOpt,S=Object(l.useState)(),A=Object(i.a)(S,2),I=A[0],C=A[1];Object(l.useEffect)((function(){"empty"===v&&C(!0)}),[v,s]);var U=!!s&&function(e){return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},D=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(E)),B=null===D||void 0===D?void 0:D.getBoundingClientRect();Object(l.useEffect)((function(){B=null===D||void 0===D?void 0:D.getBoundingClientRect()}),[I]);var T=document.documentElement.clientWidth,L=[{label:"-".concat(N||u,"-"),value:null}];m&&(L=[].concat(Object(a.a)(L),Object(a.a)(m))),O&&(L=L.filter((function(e){return null===e||void 0===e?void 0:e.value})));var W,P=(null===(n=B)||void 0===n?void 0:n.bottom)>600?"top":"bottom";T<=500&&(P=(null===(W=B)||void 0===W?void 0:W.bottom)>400?"top":"bottom","Categories"===u&&(P="top"));return r.a.createElement("div",{style:w,className:"mr-0 ".concat(w?null:"mr-lg-3"," ").concat(k?null:"mb-3"," ").concat(f," ").concat(b," ").concat(y?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(p?null:"d-none")},u),r.a.createElement(c.a,{inputId:"".concat(u,"_").concat(E,"_").concat(g),isMulti:j,isSearchable:!(T<500),isDisabled:x||!1,id:"dropdown".concat(g).concat(E),value:((null===v||void 0===v?void 0:v.value)||!!(null===v||void 0===v?void 0:v.length))&&v,menuIsOpen:I,menuPortal:!0,placeholder:N||d,options:L,onMenuOpen:function(){return C(!0)},onMenuClose:function(){return C(!1)},onChange:function(e){h(e),C(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(P),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:U,option:function(e,t){var n=t.isFocused,a=t.isSelected;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},660:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),l=n(655),r=(n(661),n(56)),c=n(19);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,b=e.actionButtonTitle,g=void 0===b?"Submit":b,h=e.cancelButtonClass,y=void 0===h?"bg-background":h,E=e.actionButtonClass,x=void 0===E?"bg-background":E,w=e.actionButtonEvent,k=void 0===w?null:w,N=e.colorText,j=void 0===N?"red":N,O=e.msg1,S=void 0===O?null:O,A=e.msg2,I=void 0===A?null:A,C=e.onCloseFunction,U=void 0===C?null:C,D=e.refreshOnCancel,B=void 0===D||D,T=e.setIsSuccess,L=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",g="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",g="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",g="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",g="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1);var W=Object(o.useState)(d),P=Object(a.a)(W,2),M=P[0],R=P[1];return Object(o.useEffect)((function(){R(d)}),[d]),Object(o.useEffect)((function(){}),[M]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},i.a.createElement(l.B,{className:"".concat(M?null:"d-none")},i.a.createElement(l.f,null,i.a.createElement(l.s,{show:M,closeOnBackdrop:!1,onClose:function(){R(!1),"function"===typeof T&&T({success:null,name:null}),L({type:c.k,status:null}),U&&U()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),"function"===typeof T&&T({success:null,name:null}),L({type:c.k,status:null}),U&&U()}})),i.a.createElement(l.v,{className:"px-5 pt-5 border-none"},i.a.createElement(l.w,{className:"text LatoBold ".concat(j)},v," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(l.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},I)),i.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?i.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){B?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:R,parentOncCloseFunction:U}),L({type:c.k,status:null})}},f):null,g?i.a.createElement(l.d,{className:"".concat(x," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){k?(k(),R(!1)):R(!1)}},g):null," "))))}},661:function(e,t,n){},664:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),l=n(675),r=n.n(l),c=n(114),s=n(655);t.a=function(e){var t,n,l=e.skuUuId,u=void 0===l?123:l,d=e.selectAll,m=e.img,v=void 0===m?r.a:m,p=e.skuDescription,f=void 0===p?"SKU Description":p,b=e.skuNumber,g=void 0===b?"1001":b,h=e.uomLabel,y=void 0===h?"weight":h,E=e.uomValue,x=void 0===E?100.3:E,w=e.uom,k=void 0===w?"KG":w,N=e.isCheckedHandler,j=void 0===N?null:N,O=e.check,S=void 0!==O&&O,A=e.idx,I=void 0===A?0:A,C=e.singleView,U=e.setCreatePo,D=e.target,B=e.targetMovementProgress,T=e.targetRepackProgress,L=e.moduleName,W=e.setFromBarcode,P=e.setSingleViewSku,M=document.documentElement.clientWidth<=500,R=i.a.useState(S),K=Object(a.a)(R,2),z=K[0],H=K[1],V=function(){H(!0),"function"===typeof P&&P(u),"function"!==typeof P&&j(!0),"function"===typeof U&&U({show:!0,skuNumber:g}),"function"===typeof W&&W(!1)},q=!!D||"d-none",Q=0,F=0;((null===T||void 0===T?void 0:T.length)&&"repack"===L&&T.forEach((function(e){Q+=Number(e.totalPack),F+=Number(e.totalUom)})),(null===B||void 0===B?void 0:B.length)&&"repack"!==L)&&(Q=null===(t=B[0])||void 0===t?void 0:t.totalMove,F=null===(n=B[0])||void 0===n?void 0:n.totalUos);return Object(o.useEffect)((function(e){d&&(H(!0),j(!0)),!1===d&&H(!1)}),[d]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&V()},tabindex:"0",key:I,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(M?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(z?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(M?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){H(!z),j&&j(!z)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(z?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:v,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},f),i.a.createElement("div",{className:"text fontSizeTitle"},g))),i.a.createElement("hr",{className:"".concat(M?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(M?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(M?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(q," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"repack"===L?"Repack Percentage":"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(Q,"/").concat(F),i.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(Q/F*100),"%)"))),i.a.createElement(s.A,{value:Q,max:F,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(q)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(M?"d-none":null)},"Total ".concat("KG"===k.toUpperCase()?y.toUpperCase():k.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(x)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},k)),i.a.createElement("div",{onClick:V,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(C?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},673:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),l=n(56),r=(n(659),n(676)),c=n.n(r),s=n(677),u=n.n(s),d=n(678),m=n.n(d),v=n(679),p=n.n(v),f=n(680),b=n.n(f),g=n(681),h=n.n(g),y=n(682),E=n.n(y),x=n(683),w=n.n(x),k=n(684),N=n.n(k),j=n(671),O=(n(685),function(e){var t,n,r=e.isMulti,c=e.options,s=e.onChange,d=e.moduleName,v=Object(o.useState)(!1),f=Object(a.a)(v,2),g=f[0],y=f[1],x=Object(j.d)().dimention,k=x<=500,O=Object(o.useRef)(null);console.log(d);var S=null===(t=document)||void 0===t?void 0:t.getElementById("c-filter"),A=null===S||void 0===S?void 0:S.getBoundingClientRect();Object(o.useEffect)((function(){A=null===S||void 0===S?void 0:S.getBoundingClientRect()}),[g]);var I=(null===(n=A)||void 0===n?void 0:n.top)+(k?-70:function(e){switch(x){case 1024:return-250;default:return"waste"===e||"ADD_SKU"===e?-100:-220}}(d));!function(e){var t=e.wrapperRef,n=e.setShow,a=e.show;Object(o.useEffect)((function(){function e(e){a&&t.current&&!t.current.contains(e.target)&&n(!a)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,a])}({wrapperRef:O,setShow:y,show:g});var C=g?280:0,U=g?1:0,D=k?"1rem":x>=1024&&x<1280?-180:x>=1280&&x<1366?-80:x>=1366&&x<1396?-50:x>=1396&&x<1440?-90:x>=1440&&x<1536?-70:x>=1536&&x<1600?-50:x>=1600&&x<1920?-70:x>=1920&&x<1930?-50:void 0,B=!!k&&"1rem",T=k?"fixed":"absolute",L=k?"100% !important":250,W=Object(o.useState)(""),P=Object(a.a)(W,2),M=P[0],R=P[1],K=Object(o.useState)(r?[]:{}),z=Object(a.a)(K,2),H=z[0],V=z[1],q=Object(o.useState)(!1),Q=Object(a.a)(q,2),F=Q[0],G=Q[1],J=function(e){var t=e.options,n=e.item,a=e.setSelected,o=e.reset,i=null===t||void 0===t?void 0:t.map((function(e){return e}));a(i=(i=i.map((function(e){return n===e.value&&(e.selected=!e.selected),o&&(e.selected=!1),e}))).filter((function(e){return e.selected}))),"function"===typeof s&&s(i)},Y=Object(l.d)((function(e){return e.targetRepack})),X=Object(l.d)((function(e){return e.stockMovementTargetRepack})),Z=!!(Y&&"repack"===d||X&&"stockMovement"===d),_=[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"},{target:!0,value:"tasc",label:"Most Completion Target"},{target:!0,value:"tdesc",label:"Least Completion Target"}];return i.a.createElement("div",{className:"position-sticky"},i.a.createElement("div",null,i.a.createElement("img",{className:"cursor-pointer",id:"c-filter",src:r?(null===H||void 0===H?void 0:H.length)?p.a:b.a:(null===H||void 0===H?void 0:H.label)?u.a:m.a,onClick:function(){return y(!0)}})),i.a.createElement("div",{ref:O,className:"text mt-3 rounded shadow py-2",style:{zIndex:1040,transition:"max-height ease-in",transitionProperty:"all",transitionDuration:"0.15s",maxHeight:C,opacity:U,minWidth:L,backgroundColor:"white",top:I,position:T,left:D,right:B,overflow:"hidden"}},i.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar ".concat(r?"d-none":null)},!r&&(null===_||void 0===_?void 0:_.map((function(e){var t=e.label===F,n=t?F===e.label?"green":"text":"emptyTextField";return i.a.createElement("div",{onMouseEnter:function(){return G(e.label)},onMouseLeave:function(){return G(null)},onClick:function(){return function(e){V(e),"function"===typeof s&&s(e),y(!1)}(e)},style:{minHeight:40,backgroundColor:"white"},className:"".concat(e.target?Z?null:"d-none":null," filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center px-3 ").concat((null===e||void 0===e?void 0:e.label)===(null===H||void 0===H?void 0:H.label)&&"LatoBold text"," ").concat(n)},e.label)})))),i.a.createElement("div",{className:"px-2 ".concat(r?null:"d-none")},i.a.createElement("div",{className:"border rounded w-100 d-flex justify-content-between align-items-center pl-3 pr-2",style:{height:40}},i.a.createElement("input",{id:"filter-input",value:M,placeholder:"Search Category",onChange:function(e){return R(e.target.value)},type:"text",className:"plain-input m-0 p-0",style:{color:"rgba(168, 177, 190, 1)",fontSize:"1rem"}}),i.a.createElement("div",{className:"green"},i.a.createElement("img",{src:(null===H||void 0===H?void 0:H.length)?h.a:E.a,alt:"delete icon",className:"cursor-pointer",onClick:function(e){return J({options:c,setSelected:V,reset:!0})}})))),i.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar"},r&&(null===c||void 0===c?void 0:c.filter((function(e){return(null===M||void 0===M?void 0:M.length)?e.label.toLowerCase().includes(M.toLowerCase())?e:void 0:e})).sort((function(e,t){return function(e,t){return e.selected&&!t.selected?-1:!e.selected&&t.selected?1:0}(e,t)})).map((function(e,t){var n,a=!!(null===(n=H.filter((function(t){return(null===t||void 0===t?void 0:t.value)===(null===e||void 0===e?void 0:e.value)})))||void 0===n?void 0:n.length),o=a?1:0,l=r?a?F===t?"green":"text":"emptyTextField":H?"text":"emptyTextField";return i.a.createElement("div",{onMouseEnter:function(){return G(t)},onMouseLeave:function(){return G(null)},onClick:function(){return J({options:c,item:e.value,setSelected:V})},style:{minHeight:40,backgroundColor:"white"},className:"filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center ".concat(l)},i.a.createElement("table",{width:100,style:{tableLayout:"fixed"}},i.a.createElement("tr",{width:100},i.a.createElement("td",{width:10},i.a.createElement("img",{style:{opacity:o},className:"mr-3",src:F===t&&a?w.a:N.a})),i.a.createElement("td",{width:90},e.label))))}))))))});t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,r=(e.textSearch,e.searchHandler),s=void 0===r?null:r,u=e.barcodeScanner,d=e.filter,m=void 0===d?"":d,v=(e.width,e.className,e.filterDropdown),p=void 0===v?null:v,f=(e.value,e.showScanner),b=e.areaId,g=e.setAreaId,h=e.areaDestination,y=e.setAreaDestination,E=e.moduleName,x=e.setSearch,w=e.category,k=e.setCategory,N=e.setSortBy,j=Object(o.useState)(),S=Object(a.a)(j,2),A=S[0],I=void 0!==A&&A,C=S[1],U="",D="";I?(U="Show Filter",D=""):(U="Hide Filter",D=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var B=Object(o.useState)(""),T=Object(a.a)(B,2),L=T[0],W=T[1],P=Object(l.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){W(e.target.value),"function"===typeof x&&x(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&s(L)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"}),i.a.createElement("div",{className:"mr-md-2"},i.a.createElement(O,{moduleName:E,selectedValue:w,options:P,onChange:function(e){return N(e)}})),i.a.createElement("div",{className:""},i.a.createElement(O,{moduleName:E,isMulti:!0,selectedValue:w,options:P,onChange:function(e){return k(e)}})),i.a.createElement("div",{className:"mr-0 mr-md-2"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,l=e.moduleName;if("stockMovement"!==l)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===l){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:b,areaDestination:h,setAreaId:g,setAreaDestination:y,barcodeScanner:u,moduleName:E})},className:"ml-2 pointer ".concat(f?null:"d-none"),src:c.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},m?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:I,setFilterShow:C})}},i.a.createElement("div",{className:"filter-text"},U)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),D)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return s(L)}},"Search"))),i.a.createElement("div",null,I?null:i.a.createElement("div",{className:"w-100"}," ",p," ")))}},676:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},677:function(e,t,n){e.exports=n.p+"static/media/ascOn.cccbb7d5.svg"},678:function(e,t,n){e.exports=n.p+"static/media/ascOff.d8a8c79c.svg"},679:function(e,t,n){e.exports=n.p+"static/media/categoryOn.5bc834d8.svg"},680:function(e,t,n){e.exports=n.p+"static/media/categoryOff.ffb704a2.svg"},681:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOn.fc3f380e.svg"},682:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOff.fc0332a7.svg"},683:function(e,t,n){e.exports=n.p+"static/media/checkHover.4cfe8e6d.svg"},684:function(e,t,n){e.exports=n.p+"static/media/checkNotHover.a429f43c.svg"},685:function(e,t,n){},716:function(e,t,n){},743:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return h}));var a=n(4),o=n(65),i=n.n(o),l=n(70),r=n(658),c=n(89),s=n(22),u=n.n(s),d=n(19),m=n(657),v=n(666),p=n(114),f=n(656),b=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,s,b,g,h,y,E,x,w,k,N,j,O,S,A,I,C,U,D;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.idx,s=t.checked,b=t.dispatch,g=t.setLocalEntryData,h=t.moduleName,y=t.moduleSummary,E=t.moduleEntry,x=t.warehouseUuid,w=t.areaId,k=t.zeroQuantity,(N=Object(r.a)(y))[o].checked=s,b((n={type:d.c},Object(l.a)(n,"".concat(h,"summaryData"),N),Object(l.a)(n,"finish",!1),n)),j=null===N||void 0===N?void 0:N.filter((function(e){if(e.checked)return e})),O=[],E&&E.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&O.push(t.skuUuid)})),S=[],A=j.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:x,dispatch:b,areaId:w.value,moduleName:h,zeroQuantity:k});case 8:(o=e.sent)&&(l=t.gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===t.skuUuid})),r=o.map((function(e){e.itemList=[{qty:e.initialWeight,grade:l[0],expiryDate:null===e||void 0===e?void 0:e.expiryDate,expiryDateText:Object(p.a)({date:null===e||void 0===e?void 0:e.expiryDate})}],e.initialWeightUpdate=e.inboundQty-e.initialWeight,e.initialWeightScreenUpdate=parseInt(0);var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=r,S.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(A);case 11:e.sent,b({type:d.g,finish:!0}),I=[],E&&(I=E.jobPost.list.concat(S)),E||(I=S),(C=N[o]).checked||(I=I.filter((function(e){return e.skuUuid!==C.skuUuid}))),U=null===E||void 0===E||null===(a=E.jobPost)||void 0===a?void 0:a.id,D={jobPost:{id:U||0,warehouseSource:x,warehouseDestination:x,areaSource:parseInt(null===w||void 0===w?void 0:w.value),areaName:null===w||void 0===w?void 0:w.label,areaDestination:parseInt(null===w||void 0===w?void 0:w.value),list:I.sort((function(e,t){return Object(f.g)(e,t)}))}},0===I.length&&b(Object(l.a)({type:d.b},"".concat(h,"EntryData"),null)),g(D);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,l,s,d,f,b,g,h,y,E,x,w,k,N,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.zeroQuantity,a=t.idx,o=t.checked,l=t.dispatch,s=t.moduleName,d=t.moduleSummary,f=t.moduleEntry,b=t.warehouseUuid,g=t.areaId,h=t.preAddHandler,(y=Object(r.a)(d))[a].checked=o,E=null===y||void 0===y?void 0:y.filter((function(e){if(e.checked)return e})),x=[],f&&f.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&x.push(t.skuUuid)})),w=[],k=E.map(function(){var e=Object(c.a)(i.a.mark((function e(t,a){var o,r,c,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return o=e.sent,t.gradeList=o,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:b,dispatch:l,areaId:g.value,moduleName:s,zeroQuantity:n});case 8:(r=e.sent)&&(c=t.gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===t.skuUuid})),d=r.map((function(e){e.itemList=[{qty:e.initialWeight,grade:c[0],expiryDate:null===e||void 0===e?void 0:e.expiryDate,expiryDateText:Object(p.a)({date:null===e||void 0===e?void 0:e.expiryDate})}],e.initialWeightScreenUpdate=parseInt(0),e.initialWeightUpdate=e.inboundQty-e.initialWeight;var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=d,t.isNewItem=!0,w.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(k);case 10:e.sent,N=[],f&&(N=f.concat(w)),f||(N=w),(j=y[a]).checked||(N=N.filter((function(e){return e.skuUuid!==j.skuUuid}))),h(N);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.setActiveSKU,n=e.moduleEntry,o=e.moduleName,i=e.setConfirmation,r=e.dispatch,c=e.setIsRequired,s=[],u=Object(a.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(e){return e.itemList.map((function(t){var n,a,o=t.qty,i=t.grade,l=t.ripeness,r=t.note;"Fruits"===e.category?0!=o&&!isNaN(o)||null!==(null===i||void 0===i?void 0:i.value)?"Waste"===(null===t||void 0===t||null===(n=t.grade)||void 0===n?void 0:n.label)||"Semi Waste"===(null===t||void 0===t||null===(a=t.grade)||void 0===a?void 0:a.label)?(isNaN(o)||""===o||null===o?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===i||void 0===i?void 0:i.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,"Waste"!==(null===i||void 0===i?void 0:i.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(isNaN(o)||""===o||null===o?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===i||void 0===i?void 0:i.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,(null===l||void 0===l?void 0:l.value)?t.ripenessIsEmpty=!1:t.ripenessIsEmpty=!0,"Waste"!==(null===i||void 0===i?void 0:i.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(t.qtyIsEmpty=!1,t.gradeIsEmpty=!1,t.ripenessIsEmpty=!1,t.noteIsEmpty=!1):0!=o&&!isNaN(o)||null!==(null===i||void 0===i?void 0:i.value)?(isNaN(o)||""===o||null===o?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===i||void 0===i?void 0:i.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,"Waste"!==(null===i||void 0===i?void 0:i.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(t.qtyIsEmpty=!1,t.gradeIsEmpty=!1,t.ripenessIsEmpty=!1,t.noteIsEmpty=!1);return(null===t||void 0===t?void 0:t.qtyIsEmpty)||(null===t||void 0===t?void 0:t.gradeIsEmpty)||(null===t||void 0===t?void 0:t.ripenessIsEmpty)||(null===t||void 0===t?void 0:t.noteIsEmpty)||(null===t||void 0===t?void 0:t.qtyToCompareIsEmpty)?s.push(!1):s.push(!0),t})),e})),e})),v=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){(null===e||void 0===e?void 0:e.qty)>=0&&(v=!0)}))}))})),u.jobPost.list=m,r(Object(l.a)({type:d.b},"".concat(o,"EntryData"),u)),!s.includes(!1)&&v?"function"===typeof i&&i({show:!0,name:"submit"}):("function"===typeof i&&i({show:!1,name:null}),"function"===typeof c&&c(!0)),Object(f.b)({setActiveSKU:t,moduleEntry:n,moduleName:o})}}}]);
//# sourceMappingURL=25.eef02e4b.chunk.js.map