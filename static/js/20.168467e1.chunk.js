(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[20],{1221:function(e,t,n){"use strict";n.r(t);var a=n(659),o=n(1),i=n.n(o),l=n(20),r=n(56),c=n(666),s=n(679),u=n(663),d=n(672),m=n(670),v=n(680),p=n.n(v),f=(n(730),n(761)),b=n(662),g=n(665),h=n(726),y=n(168);t.default=Object(l.i)((function(e){var t,n,v=Object(r.d)((function(e){return e.thereAreRequest})),E=Object(r.c)(),x=(Object(l.g)(),Object(r.d)((function(e){return e.stockMovementFirstLoad})),Object(r.d)((function(e){return e.user.warehouseUuid}))),w=Object(r.d)((function(e){return e.status})),j=Object(r.d)((function(e){return e.isLoading})),k=Object(r.d)((function(e){return e.stockMovementEntryData})),N=Object(r.d)((function(e){return e.stockMovementTargetRepack})),O=Object(b.t)({moduleEntry:k}),S=Object(r.d)((function(e){return e.warehouseArea})),A=Object(r.d)((function(e){return e.areaId})),I=Object(r.d)((function(e){return e.stockMovementAddSku})),C=Object(o.useState)(null),U=Object(a.a)(C,2),D=U[0],M=U[1],B=Object(o.useState)(0),L=Object(a.a)(B,2),P=(L[0],L[1]),T=Object(o.useState)(!1),R=Object(a.a)(T,2),W=R[0],H=(R[1],Object(o.useState)(null)),K=Object(a.a)(H,2),V=K[0],z=K[1],F=Object(o.useState)(!0),q=Object(a.a)(F,2),J=q[0],Q=q[1],G=Object(o.useState)([]),Y=Object(a.a)(G,2),X=Y[0],Z=Y[1],_=Object(o.useState)(),$=Object(a.a)(_,2),ee=$[0],te=$[1],ne=Object(o.useState)(),ae=Object(a.a)(ne,2),oe=ae[0],ie=ae[1];if(Object(o.useEffect)((function(){Object(d.d)({dispatch:E}),Object(d.f)({dispatch:E,warehouseUuid:x}),P(O)}),[]),k&&void 0!==k||e.history.push("/inventory-entry/movement"),!0===J&&void 0!==k){var le,re;z(k.jobPost.list.map((function(e,t){return e.skuNumber})));var ce={};ce.value=null===k||void 0===k||null===(le=k.jobPost)||void 0===le?void 0:le.areaSource,ce.label=null===k||void 0===k||null===(re=k.jobPost)||void 0===re?void 0:re.areaName,Object(b.u)({selected:ce,dispatch:E}),Q(!1)}var se=Object(o.useState)(),ue=Object(a.a)(se,2),de=ue[0],me=ue[1],ve=Object(o.useState)(),pe=Object(a.a)(ve,2),fe=pe[0],be=pe[1],ge=null===D||void 0===D?void 0:D.map((function(e){if(null===e||void 0===e?void 0:e.checked)return!0})),he=!1;(null===ge||void 0===ge?void 0:ge.length)&&oe&&(he=!0),0===v&&(null===X||void 0===X?void 0:X.length)>0&&!oe&&(he=!0);var ye=document.documentElement.clientHeight,Ee=ye-360,xe=ye-290;return!1===I&&(null===k||void 0===k?void 0:k.jobPost.list.length)>0&&W&&e.history.push("/inventory-entry/weight-entry"),i.a.createElement("div",{className:"w-100  stock-take-summary"},i.a.createElement(g.a,{status:w}),i.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},i.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},i.a.createElement(c.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:S,onChangeDropdown:function(e){return Object(b.u)({selected:e,dispatch:E})},selectedValue:A,showTitle:!0}))),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",i.a.createElement("span",{className:"green"},"(".concat(X.length," Selected SKU").concat(X.length>1?"s":"",")"))))),i.a.createElement(s.a,{moduleName:"ADD_SKU",setSortBy:be,category:de,setCategory:me,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:de,moduleName:"stockMovement",stockMovementTargetRepack:N,dispatch:E,desc:e,warehouseUuid:x,areaId:A,setModule:M,selectedSkusNumber:V},te(e))}}),i.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===D||void 0===D?void 0:D.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:Ee,maxHeight:Ee}},(null===D||void 0===D?void 0:D.length)?null===D||void 0===D||null===(t=D.sort((function(e,t){return Object(b.g)(e,t,null===fe||void 0===fe?void 0:fe.value)})))||void 0===t||null===(n=t.sort((function(e,t){return(null===fe||void 0===fe?void 0:fe.target)?Object(b.f)(e,t,null===fe||void 0===fe?void 0:fe.value,"stockMovement"):0})))||void 0===n?void 0:n.map((function(e,t){return i.a.createElement(m.a,{selectAll:oe,key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return oe?Object(b.D)({summary:D,setSummary:M,idx:t,checked:e}):Object(f.b)({idx:t,checked:e,dispatch:E,moduleSummary:D,moduleEntry:X,moduleName:"stockMovement",warehouseUuid:x,areaId:A,preAddHandler:Z})},check:null===e||void 0===e?void 0:e.checked})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:xe,maxHeight:xe}},Object(b.s)({isLoading:j,summary:D})?A&&0===(null===D||void 0===D?void 0:D.length)?i.a.createElement("div",null,"Sorry, we couldn't find any matches for '",i.a.createElement("span",{className:"LatoBold"},ee),"' in ",null===A||void 0===A?void 0:A.label," area.",i.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":i.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),i.a.createElement(h.a,{setSelectAll:function(){return ie(!oe)},selectAll:oe}),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/movement/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),i.a.createElement(y.b,{to:"/inventory-entry/movement/weight-entry",onClick:function(e){return!!he||e.preventDefault()}},i.a.createElement("button",{onClick:function(){var e,t,n,a;return he?Object(b.h)({localEntryData:X,moduleEntry:k,moduleName:"stockMovement",summary:D,dispatch:E,warehouseUuid:x,areaId:{value:null===k||void 0===k||null===(e=k.jobPost)||void 0===e?void 0:e.areaSource,label:null===k||void 0===k||null===(t=k.jobPost)||void 0===t?void 0:t.areaName},areaIdDesposition:{value:null===k||void 0===k||null===(n=k.jobPost)||void 0===n?void 0:n.areaDestination,label:null===k||void 0===k||null===(a=k.jobPost)||void 0===a?void 0:a.areaDestinationName},setLocalEntryData:function(e){return Z(e)}}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(he?"bg-green":"bg-lineGrey")},0===(null===X||void 0===X?void 0:X.length)||he?"Update":"Processing...")))))}))},665:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(661),r=(n(667),n(56)),c=n(19);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,b=e.actionButtonTitle,g=void 0===b?"Submit":b,h=e.cancelButtonClass,y=void 0===h?"bg-background":h,E=e.actionButtonClass,x=void 0===E?"bg-background":E,w=e.actionButtonEvent,j=void 0===w?null:w,k=e.colorText,N=void 0===k?"red":k,O=e.msg1,S=void 0===O?null:O,A=e.msg2,I=void 0===A?null:A,C=e.onCloseFunction,U=void 0===C?null:C,D=e.refreshOnCancel,M=void 0===D||D,B=e.setIsSuccess,L=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,M=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,M=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,M=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,M=!1);var P=Object(o.useState)(d),T=Object(a.a)(P,2),R=T[0],W=T[1];return Object(o.useEffect)((function(){W(d)}),[d]),Object(o.useEffect)((function(){}),[R]),window.onkeydown=function(e){return 27===e.keyCode?W(!1):null},i.a.createElement(l.B,{className:"".concat(R?null:"d-none")},i.a.createElement(l.f,null,i.a.createElement(l.s,{show:R,closeOnBackdrop:!1,onClose:function(){W(!1),"function"===typeof B&&B({success:null,name:null}),L({type:c.k,status:null}),U&&U()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){W(!1),"function"===typeof B&&B({success:null,name:null}),L({type:c.k,status:null}),U&&U()}})),i.a.createElement(l.v,{className:"px-5 pt-5 border-none"},i.a.createElement(l.w,{className:"text LatoBold ".concat(N)},v," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(l.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},I)),i.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?i.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){M?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:W,parentOncCloseFunction:U}),L({type:c.k,status:null})}},f):null,g?i.a.createElement(l.d,{className:"".concat(x," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){j?(j(),W(!1)):W(!1)}},g):null," "))))}},666:function(e,t,n){"use strict";var a=n(664),o=n(4),i=n(659),l=n(1),r=n.n(l),c=n(706);t.a=function(e){var t,n,s=e.isEmpty,u=e.title,d=e.placeholder,m=e.options,v=e.selectedValue,p=e.showTitle,f=e.width,b=e.className,g=e.entryListIdx,h=e.onChangeDropdown,y=e.show,E=e.poListIdx,x=e.isDisabled,w=e.style,j=e.noMarginBottom,k=e.resetName,N=e.isMulti,O=e.hideResetOpt,S=e.zInfinity,A=Object(l.useState)(),I=Object(i.a)(A,2),C=I[0],U=I[1];Object(l.useEffect)((function(){"empty"===v&&U(!0)}),[v,s]);var D=!!s&&function(e){return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},M=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(E)),B=null===M||void 0===M?void 0:M.getBoundingClientRect();Object(l.useEffect)((function(){B=null===M||void 0===M?void 0:M.getBoundingClientRect()}),[C]);var L=document.documentElement.clientWidth,P=[{label:"-".concat(k||u,"-"),value:null}];m&&(P=[].concat(Object(a.a)(P),Object(a.a)(m))),O&&(P=P.filter((function(e){return null===e||void 0===e?void 0:e.value})));var T,R=(null===(n=B)||void 0===n?void 0:n.bottom)>600?"top":"bottom";L<=500&&(R=(null===(T=B)||void 0===T?void 0:T.bottom)>400?"top":"bottom","Categories"===u&&(R="top"));return r.a.createElement("div",{style:w,className:"mr-0 ".concat(w?null:"mr-lg-3"," ").concat(j?null:"mb-3"," ").concat(f," ").concat(b," ").concat(y?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(p?null:"d-none")},u),r.a.createElement(c.a,{inputId:"".concat(u,"_").concat(E,"_").concat(g),isMulti:N,isSearchable:!(L<500),isDisabled:x||!1,id:"dropdown".concat(g).concat(E),value:((null===v||void 0===v?void 0:v.value)||!!(null===v||void 0===v?void 0:v.length))&&v,menuIsOpen:C,menuPortal:!0,placeholder:k||d,options:P,onMenuOpen:function(){return U(!0)},onMenuClose:function(){return U(!1)},onChange:function(e){h(e),U(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(R),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:S?1e16:9999})},control:D,option:function(e,t){var n=t.isFocused,a=t.isSelected;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#969696",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},667:function(e,t,n){},670:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(681),r=n.n(l),c=n(116),s=n(661);t.a=function(e){var t,n,l=e.skuUuId,u=void 0===l?123:l,d=e.selectAll,m=e.img,v=void 0===m?r.a:m,p=e.skuDescription,f=void 0===p?"SKU Description":p,b=e.skuNumber,g=void 0===b?"1001":b,h=e.uomLabel,y=void 0===h?"weight":h,E=e.uomValue,x=void 0===E?100.3:E,w=e.uom,j=void 0===w?"KG":w,k=e.isCheckedHandler,N=void 0===k?null:k,O=e.check,S=void 0!==O&&O,A=e.idx,I=void 0===A?0:A,C=e.singleView,U=e.setCreatePo,D=e.target,M=e.targetMovementProgress,B=e.targetRepackProgress,L=e.moduleName,P=e.setFromBarcode,T=e.setSingleViewSku,R=document.documentElement.clientWidth<=500,W=i.a.useState(S),H=Object(a.a)(W,2),K=H[0],V=H[1],z=function(){V(!0),"function"===typeof T&&T(u),"function"!==typeof T&&N(!0),"function"===typeof U&&U({show:!0,skuNumber:g}),"function"===typeof P&&P(!1)},F=!!D||"d-none",q=0,J=0;((null===B||void 0===B?void 0:B.length)&&"repack"===L&&B.forEach((function(e){q+=Number(e.totalPack),J+=Number(e.totalUom)})),(null===M||void 0===M?void 0:M.length)&&"repack"!==L)&&(q=null===(t=M[0])||void 0===t?void 0:t.totalMove,J=null===(n=M[0])||void 0===n?void 0:n.totalUos);return Object(o.useEffect)((function(e){d&&(V(!0),N(!0)),!1===d&&V(!1)}),[d]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&z()},tabindex:"0",key:I,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(R?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(K?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(R?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){V(!K),N&&N(!K)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(K?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:v,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},f),i.a.createElement("div",{className:"text fontSizeTitle"},g))),i.a.createElement("hr",{className:"".concat(R?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(R?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(R?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(F," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"repack"===L?"Repack Percentage":"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(q,"/").concat(J),i.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(q/J*100),"%)"))),i.a.createElement(s.A,{value:q,max:J,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(F)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(R?"d-none":null)},"Total ".concat("KG"===j.toUpperCase()?y.toUpperCase():j.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(x)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},j)),i.a.createElement("div",{onClick:z,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(C?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},679:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(56),r=(n(666),n(682)),c=n.n(r),s=n(683),u=n.n(s),d=n(684),m=n.n(d),v=n(685),p=n.n(v),f=n(686),b=n.n(f),g=n(687),h=n.n(g),y=n(688),E=n.n(y),x=n(689),w=n.n(x),j=n(690),k=n.n(j),N=n(677),O=(n(691),function(e){var t,n,r=e.isMulti,c=e.options,s=e.onChange,d=e.moduleName,v=Object(o.useState)(!1),f=Object(a.a)(v,2),g=f[0],y=f[1],x=Object(N.d)().dimention,j=x<=500,O=Object(o.useRef)(null),S=null===(t=document)||void 0===t?void 0:t.getElementById("c-filter"),A=null===S||void 0===S?void 0:S.getBoundingClientRect();Object(o.useEffect)((function(){A=null===S||void 0===S?void 0:S.getBoundingClientRect()}),[g]);var I=(null===(n=A)||void 0===n?void 0:n.top)+(j?-70:function(e,t,n){switch(x){case 1024:return-250;default:return"waste"===e||"ADD_SKU"===e?-100:-220}}(d));!function(e){var t=e.wrapperRef,n=e.setShow,a=e.show;Object(o.useEffect)((function(){function e(e){a&&t.current&&!t.current.contains(e.target)&&n(!a)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,a])}({wrapperRef:O,setShow:y,show:g});var C=g?280:0,U=g?1:0,D=j?"1rem":x>=1024&&x<1280?-180:x>=1280&&x<1366?-80:x>=1366&&x<1396?-50:x>=1396&&x<1440?-90:x>=1440&&x<1536?-70:x>=1536&&x<1600?-50:x>=1600&&x<1920?-70:x>=1920&&x<1930?-50:void 0,M=!!j&&"1rem",B=j?"fixed":"absolute",L=j?"100% !important":250,P=Object(o.useState)(""),T=Object(a.a)(P,2),R=T[0],W=T[1],H=Object(o.useState)(r?[]:{}),K=Object(a.a)(H,2),V=K[0],z=K[1],F=Object(o.useState)(!1),q=Object(a.a)(F,2),J=q[0],Q=q[1],G=function(e){var t=e.options,n=e.item,a=e.setSelected,o=e.reset,i=null===t||void 0===t?void 0:t.map((function(e){return e}));a(i=(i=i.map((function(e){return n===e.value&&(e.selected=!e.selected),o&&(e.selected=!1),e}))).filter((function(e){return e.selected}))),"function"===typeof s&&s(i)},Y=Object(l.d)((function(e){return e.targetRepack})),X=Object(l.d)((function(e){return e.stockMovementTargetRepack})),Z=!!(Y&&"repack"===d||X&&"stockMovement"===d),_=[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"},{target:!0,value:"tasc",label:"Most Completion Target"},{target:!0,value:"tdesc",label:"Least Completion Target"}];return i.a.createElement("div",{className:"position-sticky"},i.a.createElement("div",null,i.a.createElement("img",{className:"cursor-pointer",id:"c-filter",src:r?(null===V||void 0===V?void 0:V.length)?p.a:b.a:(null===V||void 0===V?void 0:V.label)?u.a:m.a,onClick:function(){return y(!0)}})),i.a.createElement("div",{ref:O,className:"text mt-3 rounded shadow py-2",style:{zIndex:1040,transition:"max-height ease-in",transitionProperty:"all",transitionDuration:"0.15s",maxHeight:C,opacity:U,minWidth:L,backgroundColor:"white",top:I,position:B,left:D,right:M,overflow:"hidden"}},i.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar ".concat(r?"d-none":null)},!r&&(null===_||void 0===_?void 0:_.map((function(e){var t=e.label===J,n=t?J===e.label?"green":"text":"emptyTextField";return i.a.createElement("div",{onMouseEnter:function(){return Q(e.label)},onMouseLeave:function(){return Q(null)},onClick:function(){return function(e){z(e),"function"===typeof s&&s(e),y(!1)}(e)},style:{minHeight:40,backgroundColor:"white"},className:"".concat(e.target?Z?null:"d-none":null," filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center px-3 ").concat((null===e||void 0===e?void 0:e.label)===(null===V||void 0===V?void 0:V.label)&&"LatoBold text"," ").concat(n)},e.label)})))),i.a.createElement("div",{className:"px-2 ".concat(r?null:"d-none")},i.a.createElement("div",{className:"border rounded w-100 d-flex justify-content-between align-items-center pl-3 pr-2",style:{height:40}},i.a.createElement("input",{id:"filter-input",value:R,placeholder:"Search Category",onChange:function(e){return W(e.target.value)},type:"text",className:"plain-input m-0 p-0",style:{color:"#969696",fontSize:"1rem"}}),i.a.createElement("div",{className:"green"},i.a.createElement("img",{src:(null===V||void 0===V?void 0:V.length)?h.a:E.a,alt:"delete icon",className:"cursor-pointer",onClick:function(e){return G({options:c,setSelected:z,reset:!0})}})))),i.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar"},r&&(null===c||void 0===c?void 0:c.filter((function(e){return(null===R||void 0===R?void 0:R.length)?e.label.toLowerCase().includes(R.toLowerCase())?e:void 0:e})).sort((function(e,t){return function(e,t){return e.selected&&!t.selected?-1:!e.selected&&t.selected?1:0}(e,t)})).map((function(e,t){var n,a=!!(null===(n=V.filter((function(t){return(null===t||void 0===t?void 0:t.value)===(null===e||void 0===e?void 0:e.value)})))||void 0===n?void 0:n.length),o=a?1:0,l=r?a?J===t?"green":"text":"emptyTextField":V?"text":"emptyTextField";return i.a.createElement("div",{onMouseEnter:function(){return Q(t)},onMouseLeave:function(){return Q(null)},onClick:function(){return G({options:c,item:e.value,setSelected:z})},style:{minHeight:40,backgroundColor:"white"},className:"filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center ".concat(l)},i.a.createElement("table",{width:100,style:{tableLayout:"fixed"}},i.a.createElement("tr",{width:100},i.a.createElement("td",{width:10},i.a.createElement("img",{style:{opacity:o},className:"mr-3",src:J===t&&a?w.a:k.a})),i.a.createElement("td",{width:90},e.label))))}))))))});t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,r=(e.textSearch,e.searchHandler),s=void 0===r?null:r,u=e.barcodeScanner,d=e.filter,m=void 0===d?"":d,v=(e.width,e.className,e.filterDropdown),p=void 0===v?null:v,f=(e.value,e.showScanner),b=e.areaId,g=e.setAreaId,h=e.areaDestination,y=e.setAreaDestination,E=e.moduleName,x=e.setSearch,w=e.category,j=e.setCategory,k=e.setSortBy,N=Object(o.useState)(),S=Object(a.a)(N,2),A=S[0],I=void 0!==A&&A,C=S[1],U="",D="";I?(U="Show Filter",D=""):(U="Hide Filter",D=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var M=Object(o.useState)(""),B=Object(a.a)(M,2),L=B[0],P=B[1],T=Object(l.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){P(e.target.value),"function"===typeof x&&x(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&s(L)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"}),i.a.createElement("div",{className:"mr-md-2"},i.a.createElement(O,{moduleName:E,selectedValue:w,options:T,onChange:function(e){return k(e)}})),i.a.createElement("div",{className:""},i.a.createElement(O,{moduleName:E,isMulti:!0,selectedValue:w,options:T,onChange:function(e){return j(e)}})),i.a.createElement("div",{className:"mr-0 mr-md-2"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,l=e.moduleName;if("stockMovement"!==l)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===l){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:b,areaDestination:h,setAreaId:g,setAreaDestination:y,barcodeScanner:u,moduleName:E})},className:"ml-2 pointer ".concat(f?null:"d-none"),src:c.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},m?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:I,setFilterShow:C})}},i.a.createElement("div",{className:"filter-text"},U)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),D)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return s(L)}},"Search"))),i.a.createElement("div",null,I?null:i.a.createElement("div",{className:"w-100"}," ",p," ")))}},682:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},683:function(e,t,n){e.exports=n.p+"static/media/ascOn.cccbb7d5.svg"},684:function(e,t,n){e.exports=n.p+"static/media/ascOff.d8a8c79c.svg"},685:function(e,t,n){e.exports=n.p+"static/media/categoryOn.5bc834d8.svg"},686:function(e,t,n){e.exports=n.p+"static/media/categoryOff.ffb704a2.svg"},687:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOn.fc3f380e.svg"},688:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOff.fc0332a7.svg"},689:function(e,t,n){e.exports=n.p+"static/media/checkHover.4cfe8e6d.svg"},690:function(e,t,n){e.exports=n.p+"static/media/checkNotHover.a429f43c.svg"},691:function(e,t,n){},726:function(e,t,n){"use strict";var a=n(1),o=n.n(a);n(116),n(727);t.a=function(e){var t=e.setSelectAll,n=e.selectAll;return o.a.createElement("div",{className:"d-flex flex-column flex-lg-row w-100 border border-soft-green rounded flex-row align-items-center justify-content-start mb-3 p-3 pl-4 bg-white"},o.a.createElement("div",{className:"w-100 d-flex align-items-center"},o.a.createElement("div",{onClick:function(){return t(!0)},style:{cursor:"pointer",minHeight:"23px",minWidth:"23px",maxHeight:"23px",maxWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(n?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),"Select All"))}},727:function(e,t,n){},730:function(e,t,n){},761:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return h}));var a=n(4),o=n(65),i=n.n(o),l=n(71),r=n(664),c=n(91),s=n(22),u=n.n(s),d=n(19),m=n(663),v=n(672),p=(n(116),n(662)),f=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,s,f,b,g,h,y,E,x,w,j,k,N,O,S,A,I,C,U;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,s=t.dispatch,f=t.setLocalEntryData,b=t.moduleName,g=t.moduleSummary,h=t.moduleEntry,y=t.warehouseUuid,E=t.areaId,x=t.areaIdDesposition,(w=Object(r.a)(g))[a].checked=o,s(Object(l.a)({type:d.c},"".concat(b,"summaryData"),w)),j=null===w||void 0===w?void 0:w.filter((function(e){if(e.checked)return e})),k=[],h&&h.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&k.push(t.skuUuid)})),N=[],O=[],S=j.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:y,dispatch:s,areaId:E.value,moduleName:b});case 8:(o=e.sent)&&(O=null===o||void 0===o?void 0:o.targetMovements,r=null===o||void 0===o||null===(l=o.poItems)||void 0===l?void 0:l.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.targetMovements=null===o||void 0===o?void 0:o.targetMovements,e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=r,N.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=12,Promise.all(S);case 12:e.sent,A=[],h&&(A=h.jobPost.list.concat(N)),h||(A=N),(I=w[a]).checked||(A=A.filter((function(e){return e.skuUuid!==I.skuUuid}))),C=null===h||void 0===h||null===(n=h.jobPost)||void 0===n?void 0:n.id,U={jobPost:{id:C||0,warehouseSource:y,warehouseDestination:y,areaSource:parseInt(null===E||void 0===E?void 0:E.value),areaName:null===E||void 0===E?void 0:E.label,areaDestination:parseInt(null===x||void 0===x?void 0:x.value),areaDestinationName:null===x||void 0===x?void 0:x.label,list:A.sort((function(e,t){return Object(p.g)(e,t)})).sort((function(e,t){return Object(p.g)(e,t)}))}},0===A.length&&s(Object(l.a)({type:d.b},"".concat(b,"EntryData"),null)),A.length>0&&s({type:d.b,targetMovements:O}),f(U);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,l,s,d,p,f,b,g,h,y,E,x,w,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,o=t.dispatch,l=t.moduleName,s=t.moduleSummary,d=t.moduleEntry,p=t.warehouseUuid,f=t.areaId,b=t.preAddHandler,(g=Object(r.a)(s))[n].checked=a,h=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),y=[],d&&d.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&y.push(t.skuUuid)})),E=[],[],x=h.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:p,dispatch:o,areaId:f.value,moduleName:l});case 8:(r=e.sent)&&(null===r||void 0===r?void 0:r.targetMovements,c=null===r||void 0===r?void 0:r.poItems.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.targetMovements=null===r||void 0===r?void 0:r.targetMovements,e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=c,t.isNewItem=!0,E.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(x);case 11:e.sent,w=[],d&&(w=d.concat(E)),d||(w=E),(j=g[n]).checked||(w=w.filter((function(e){return e.skuUuid!==j.skuUuid}))),b(w);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.setActiveSKU,n=e.moduleEntry,o=e.moduleName,i=e.setConfirmation,r=e.dispatch,c=e.setIsRequired,s=e.areaMovement,u=[],m=Object(a.a)({},n),v=n.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(p.y)({moduleList:e.itemList});return e.itemList.map((function(n){var a,o,i=n.qty,l=n.grade,r=(n.ripeness,n.note),c=n.reason;0!=i&&!isNaN(i)||null!==(null===l||void 0===l?void 0:l.value)?("Waste"===(null===n||void 0===n||null===(a=n.grade)||void 0===a?void 0:a.label)&&8!==(null===s||void 0===s?void 0:s.value)&&(n.noteIsEmpty=!r,(null===c||void 0===c?void 0:c.value)?n.reasonIsEmpty=!1:n.reasonIsEmpty=!0),8===(null===s||void 0===s?void 0:s.value)?((null===l||void 0===l?void 0:l.value)?n.gradeIsEmpty=!1:n.gradeIsEmpty=!0,"Waste"===(null===n||void 0===n||null===(o=n.grade)||void 0===o?void 0:o.label)&&(n.noteIsEmpty=!r,(null===c||void 0===c?void 0:c.value)?n.reasonIsEmpty=!1:n.reasonIsEmpty=!0)):(n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1)):(n.qtyIsEmpty=!1,n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1,n.noteIsEmpty=!1,n.reasonIsEmpty=!1);return isNaN(i)||0==i||""===i||null===i?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,n.qtyIsEmpty||(Number(t)>Number(e.initialWeight)?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.gradeIsEmpty)||(null===n||void 0===n?void 0:n.ripenessIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)||(null===n||void 0===n?void 0:n.reasonIsEmpty)?u.push(!1):u.push(!0),n})),e})),e})),f=!1;v.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(f=!0)}))}))})),m.jobPost.list=v,r(Object(l.a)({type:d.b},"".concat(o,"EntryData"),m)),!u.includes(!1)&&f?"function"===typeof i&&i({show:!0,name:"submit"}):("function"===typeof i&&i({show:!1,name:null}),"function"===typeof c&&c(!0)),Object(p.b)({setActiveSKU:t,moduleEntry:n,moduleName:o})},h=function(e){var t=e.localEntryData,n=e.setLocalEntryData;if(t){var a,o,i=Object.assign({},JSON.parse(JSON.stringify(t))),l=null===i||void 0===i||null===(a=i.jobPost)||void 0===a||null===(o=a.list)||void 0===o?void 0:o.map((function(e){return e.poList.map((function(e){return e.itemList=[{qty:e.initialWeight,expiryDate:e.expiryDate}],e})),e}));i.jobPost.list=l,n(i)}}}}]);
//# sourceMappingURL=20.168467e1.chunk.js.map