(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[27],{1226:function(e,t,n){"use strict";n.r(t);var a=n(659),o=n(1),i=n.n(o),l=n(56),r=n(20),c=n(666),s=n(679),u=n(663),d=n(672),m=n(670),v=n(680),f=n.n(v),p=(n(731),n(778)),b=n(662),g=n(665),h=n(168);t.default=Object(r.i)((function(e){var t,n=Object(l.d)((function(e){return e.thereAreRequest})),r=Object(l.c)(),v=Object(l.d)((function(e){return e.user.warehouseUuid})),y=Object(l.d)((function(e){return e.status})),w=Object(l.d)((function(e){return e.isLoading})),E=Object(l.d)((function(e){return e.wasteEntryData})),x=Object(b.u)({moduleEntry:E,moduleName:"waste"}),N=Object(l.d)((function(e){return e.warehouseArea})),j=Object(l.d)((function(e){return e.areaId})),k=Object(l.d)((function(e){return e.wasteAddSku})),O=Object(o.useState)(null),S=Object(a.a)(O,2),A=S[0],C=S[1],U=Object(o.useState)(0),I=Object(a.a)(U,2),B=(I[0],I[1]),D=Object(o.useState)(null),L=Object(a.a)(D,2),T=L[0],P=L[1],M=Object(o.useState)(!0),W=Object(a.a)(M,2),R=W[0],K=W[1],H=Object(o.useState)([]),V=Object(a.a)(H,2),z=V[0],F=V[1],q=Object(o.useState)(),Q=Object(a.a)(q,2),G=Q[0],J=Q[1];if(Object(o.useEffect)((function(){Object(d.d)({dispatch:r}),Object(d.f)({dispatch:r,warehouseUuid:v}),B(x)}),[]),E&&void 0!==E||e.history.push("/stockentry/stock-take"),!0===R&&void 0!==E){var Y,X;P(E.jobPost.list.map((function(e,t){return e.skuNumber})));var Z={};Z.value=null===E||void 0===E||null===(Y=E.jobPost)||void 0===Y?void 0:Y.areaSource,Z.label=null===E||void 0===E||null===(X=E.jobPost)||void 0===X?void 0:X.areaName,Object(b.v)({selected:Z,dispatch:r}),K(!1)}var _=Object(o.useState)(),$=Object(a.a)(_,2),ee=$[0],te=$[1],ne=Object(o.useState)(),ae=Object(a.a)(ne,2),oe=ae[0],ie=ae[1],le=document.documentElement.clientHeight,re=le-290,ce=le-290;return!1===k&&(null===E||void 0===E?void 0:E.jobPost.list.length)>0&&e.history.push("/inventory-entry/weight-entry"),i.a.createElement("div",{className:"w-100  stock-take-summary"},i.a.createElement(g.a,{status:y}),i.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},i.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},i.a.createElement(c.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:N,onChangeDropdown:function(e){return Object(b.v)({selected:e,dispatch:r})},selectedValue:j,showTitle:!0}))),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all mb-3"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",i.a.createElement("span",{className:"green"},"(".concat(z.length," Selected SKU").concat(z.length>1?"s":"",")"))))),i.a.createElement(s.a,{moduleName:"ADD_SKU",setSortBy:ie,category:ee,setCategory:te,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:ee,dispatch:r,desc:e,warehouseUuid:v,areaId:j,setModule:C,selectedSkusNumber:T,transaction:"waste"},J(e))}}),i.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===A||void 0===A?void 0:A.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:re,maxHeight:re}},(null===A||void 0===A?void 0:A.length)?null===A||void 0===A||null===(t=A.sort((function(e,t){return Object(b.g)(e,t,null===oe||void 0===oe?void 0:oe.value)})))||void 0===t?void 0:t.map((function(e,t){return i.a.createElement(m.a,{key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(p.a)({idx:t,checked:e,dispatch:r,moduleSummary:A,moduleEntry:z,moduleName:"waste",warehouseUuid:v,areaId:j,preAddHandler:F})},check:null===e||void 0===e?void 0:e.checked})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:ce,maxHeight:ce}},Object(b.t)({isLoading:w,summary:A})?j&&0===(null===A||void 0===A?void 0:A.length)?i.a.createElement("div",null,"Sorry, we couldn't find any matches for '",i.a.createElement("span",{className:"LatoBold"},G),"' in ",null===j||void 0===j?void 0:j.label," area.",i.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":i.a.createElement("img",{className:"loading",src:f.a,alt:"loading"})))),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/waste/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),i.a.createElement(h.b,{to:"/inventory-entry/waste/weight-entry",onClick:function(e){return 0===n&&(null===z||void 0===z?void 0:z.length)>0||e.preventDefault()}},i.a.createElement("button",{onClick:function(){return 0===n&&(null===z||void 0===z?void 0:z.length)>0?Object(b.a)({dispatch:r,moduleEntry:z,moduleSummary:E,moduleName:"waste"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(0===n&&(null===z||void 0===z?void 0:z.length)>0?"bg-green":"bg-lineGrey")},0===(null===z||void 0===z?void 0:z.length)||0===n&&(null===z||void 0===z?void 0:z.length)>0?"Update":"Processing...")))))}))},665:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(661),r=(n(667),n(56)),c=n(19);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,f=e.cancelButtonTitle,p=void 0===f?"Cancel":f,b=e.actionButtonTitle,g=void 0===b?"Submit":b,h=e.cancelButtonClass,y=void 0===h?"bg-background":h,w=e.actionButtonClass,E=void 0===w?"bg-background":w,x=e.actionButtonEvent,N=void 0===x?null:x,j=e.colorText,k=void 0===j?"red":j,O=e.msg1,S=void 0===O?null:O,A=e.msg2,C=void 0===A?null:A,U=e.onCloseFunction,I=void 0===U?null:U,B=e.refreshOnCancel,D=void 0===B||B,L=e.setIsSuccess,T=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",p="Try Again",g="Contact Administration",k="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",p="Try Again",g="Contact Administration",k="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",p="Try Again",g="Contact Administration",k="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",p="Try Again",g="Contact Administration",k="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!1);var P=Object(o.useState)(d),M=Object(a.a)(P,2),W=M[0],R=M[1];return Object(o.useEffect)((function(){R(d)}),[d]),Object(o.useEffect)((function(){}),[W]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},i.a.createElement(l.B,{className:"".concat(W?null:"d-none")},i.a.createElement(l.f,null,i.a.createElement(l.s,{show:W,closeOnBackdrop:!1,onClose:function(){R(!1),"function"===typeof L&&L({success:null,name:null}),T({type:c.k,status:null}),I&&I()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),"function"===typeof L&&L({success:null,name:null}),T({type:c.k,status:null}),I&&I()}})),i.a.createElement(l.v,{className:"px-5 pt-5 border-none"},i.a.createElement(l.w,{className:"text LatoBold ".concat(k)},v," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(l.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},C)),i.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},p?i.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){D?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:R,parentOncCloseFunction:I}),T({type:c.k,status:null})}},p):null,g?i.a.createElement(l.d,{className:"".concat(E," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){N?(N(),R(!1)):R(!1)}},g):null," "))))}},666:function(e,t,n){"use strict";var a=n(664),o=n(4),i=n(659),l=n(1),r=n.n(l),c=n(706);t.a=function(e){var t,n,s=e.isEmpty,u=e.title,d=e.placeholder,m=e.options,v=e.selectedValue,f=e.showTitle,p=e.width,b=e.className,g=e.entryListIdx,h=e.onChangeDropdown,y=e.show,w=e.poListIdx,E=e.isDisabled,x=e.style,N=e.noMarginBottom,j=e.resetName,k=e.isMulti,O=e.hideResetOpt,S=e.zInfinity,A=Object(l.useState)(),C=Object(i.a)(A,2),U=C[0],I=C[1];Object(l.useEffect)((function(){"empty"===v&&I(!0)}),[v,s]);var B=!!s&&function(e){return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},D=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(w)),L=null===D||void 0===D?void 0:D.getBoundingClientRect();Object(l.useEffect)((function(){L=null===D||void 0===D?void 0:D.getBoundingClientRect()}),[U]);var T=document.documentElement.clientWidth,P=[{label:"-".concat(j||u,"-"),value:null}];m&&(P=[].concat(Object(a.a)(P),Object(a.a)(m))),O&&(P=P.filter((function(e){return null===e||void 0===e?void 0:e.value})));var M,W=(null===(n=L)||void 0===n?void 0:n.bottom)>600?"top":"bottom";T<=500&&(W=(null===(M=L)||void 0===M?void 0:M.bottom)>400?"top":"bottom","Categories"===u&&(W="top"));return r.a.createElement("div",{style:x,className:"mr-0 ".concat(x?null:"mr-lg-3"," ").concat(N?null:"mb-3"," ").concat(p," ").concat(b," ").concat(y?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(f?null:"d-none")},u),r.a.createElement(c.a,{inputId:"".concat(u,"_").concat(w,"_").concat(g),isMulti:k,isSearchable:!(T<500),isDisabled:E||!1,id:"dropdown".concat(g).concat(w),value:((null===v||void 0===v?void 0:v.value)||!!(null===v||void 0===v?void 0:v.length))&&v,menuIsOpen:U,menuPortal:!0,placeholder:j||d,options:P,onMenuOpen:function(){return I(!0)},onMenuClose:function(){return I(!1)},onChange:function(e){h(e),I(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(W),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:S?1e16:9999})},control:B,option:function(e,t){var n=t.isFocused,a=t.isSelected;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#969696",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},667:function(e,t,n){},670:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(681),r=n.n(l),c=n(116),s=n(661);t.a=function(e){var t,n,l=e.skuUuId,u=void 0===l?123:l,d=e.selectAll,m=e.img,v=void 0===m?r.a:m,f=e.skuDescription,p=void 0===f?"SKU Description":f,b=e.skuNumber,g=void 0===b?"1001":b,h=e.uomLabel,y=void 0===h?"weight":h,w=e.uomValue,E=void 0===w?100.3:w,x=e.uom,N=void 0===x?"KG":x,j=e.isCheckedHandler,k=void 0===j?null:j,O=e.check,S=void 0!==O&&O,A=e.idx,C=void 0===A?0:A,U=e.singleView,I=e.setCreatePo,B=e.target,D=e.targetMovementProgress,L=e.targetRepackProgress,T=e.moduleName,P=e.setFromBarcode,M=e.setSingleViewSku,W=document.documentElement.clientWidth<=500,R=i.a.useState(S),K=Object(a.a)(R,2),H=K[0],V=K[1],z=function(){V(!0),"function"===typeof M&&M(u),"function"!==typeof M&&k(!0),"function"===typeof I&&I({show:!0,skuNumber:g}),"function"===typeof P&&P(!1)},F=!!B||"d-none",q=0,Q=0;((null===L||void 0===L?void 0:L.length)&&"repack"===T&&L.forEach((function(e){q+=Number(e.totalPack),Q+=Number(e.totalUom)})),(null===D||void 0===D?void 0:D.length)&&"repack"!==T)&&(q=null===(t=D[0])||void 0===t?void 0:t.totalMove,Q=null===(n=D[0])||void 0===n?void 0:n.totalUos);return Object(o.useEffect)((function(e){d&&(V(!0),k(!0)),!1===d&&V(!1)}),[d]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&z()},tabindex:"0",key:C,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(W?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(H?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(W?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){V(!H),k&&k(!H)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(H?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:v,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},p),i.a.createElement("div",{className:"text fontSizeTitle"},g))),i.a.createElement("hr",{className:"".concat(W?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(W?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(W?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(F," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"repack"===T?"Repack Percentage":"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(q,"/").concat(Q),i.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(q/Q*100),"%)"))),i.a.createElement(s.A,{value:q,max:Q,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(F)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(W?"d-none":null)},"Total ".concat("KG"===N.toUpperCase()?y.toUpperCase():N.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(E)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},N)),i.a.createElement("div",{onClick:z,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(U?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},679:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(56),r=(n(666),n(682)),c=n.n(r),s=n(683),u=n.n(s),d=n(684),m=n.n(d),v=n(685),f=n.n(v),p=n(686),b=n.n(p),g=n(687),h=n.n(g),y=n(688),w=n.n(y),E=n(689),x=n.n(E),N=n(690),j=n.n(N),k=n(677),O=(n(691),function(e){var t,n,r=e.isMulti,c=e.options,s=e.onChange,d=e.moduleName,v=Object(o.useState)(!1),p=Object(a.a)(v,2),g=p[0],y=p[1],E=Object(k.d)().dimention,N=E<=500,O=Object(o.useRef)(null),S=null===(t=document)||void 0===t?void 0:t.getElementById("c-filter"),A=null===S||void 0===S?void 0:S.getBoundingClientRect();Object(o.useEffect)((function(){A=null===S||void 0===S?void 0:S.getBoundingClientRect()}),[g]);var C=(null===(n=A)||void 0===n?void 0:n.top)+(N?-70:function(e,t,n){switch(E){case 1024:return-250;default:return"waste"===e||"ADD_SKU"===e?-100:-220}}(d));!function(e){var t=e.wrapperRef,n=e.setShow,a=e.show;Object(o.useEffect)((function(){function e(e){a&&t.current&&!t.current.contains(e.target)&&n(!a)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,a])}({wrapperRef:O,setShow:y,show:g});var U=g?280:0,I=g?1:0,B=N?"1rem":E>=1024&&E<1280?-180:E>=1280&&E<1366?-80:E>=1366&&E<1396?-50:E>=1396&&E<1440?-90:E>=1440&&E<1536?-70:E>=1536&&E<1600?-50:E>=1600&&E<1920?-70:E>=1920&&E<1930?-50:void 0,D=!!N&&"1rem",L=N?"fixed":"absolute",T=N?"100% !important":250,P=Object(o.useState)(""),M=Object(a.a)(P,2),W=M[0],R=M[1],K=Object(o.useState)(r?[]:{}),H=Object(a.a)(K,2),V=H[0],z=H[1],F=Object(o.useState)(!1),q=Object(a.a)(F,2),Q=q[0],G=q[1],J=function(e){var t=e.options,n=e.item,a=e.setSelected,o=e.reset,i=null===t||void 0===t?void 0:t.map((function(e){return e}));a(i=(i=i.map((function(e){return n===e.value&&(e.selected=!e.selected),o&&(e.selected=!1),e}))).filter((function(e){return e.selected}))),"function"===typeof s&&s(i)},Y=Object(l.d)((function(e){return e.targetRepack})),X=Object(l.d)((function(e){return e.stockMovementTargetRepack})),Z=!!(Y&&"repack"===d||X&&"stockMovement"===d),_=[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"},{target:!0,value:"tasc",label:"Most Completion Target"},{target:!0,value:"tdesc",label:"Least Completion Target"}];return i.a.createElement("div",{className:"position-sticky"},i.a.createElement("div",null,i.a.createElement("img",{className:"cursor-pointer",id:"c-filter",src:r?(null===V||void 0===V?void 0:V.length)?f.a:b.a:(null===V||void 0===V?void 0:V.label)?u.a:m.a,onClick:function(){return y(!0)}})),i.a.createElement("div",{ref:O,className:"text mt-3 rounded shadow py-2",style:{zIndex:1040,transition:"max-height ease-in",transitionProperty:"all",transitionDuration:"0.15s",maxHeight:U,opacity:I,minWidth:T,backgroundColor:"white",top:C,position:L,left:B,right:D,overflow:"hidden"}},i.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar ".concat(r?"d-none":null)},!r&&(null===_||void 0===_?void 0:_.map((function(e){var t=e.label===Q,n=t?Q===e.label?"green":"text":"emptyTextField";return i.a.createElement("div",{onMouseEnter:function(){return G(e.label)},onMouseLeave:function(){return G(null)},onClick:function(){return function(e){z(e),"function"===typeof s&&s(e),y(!1)}(e)},style:{minHeight:40,backgroundColor:"white"},className:"".concat(e.target?Z?null:"d-none":null," filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center px-3 ").concat((null===e||void 0===e?void 0:e.label)===(null===V||void 0===V?void 0:V.label)&&"LatoBold text"," ").concat(n)},e.label)})))),i.a.createElement("div",{className:"px-2 ".concat(r?null:"d-none")},i.a.createElement("div",{className:"border rounded w-100 d-flex justify-content-between align-items-center pl-3 pr-2",style:{height:40}},i.a.createElement("input",{id:"filter-input",value:W,placeholder:"Search Category",onChange:function(e){return R(e.target.value)},type:"text",className:"plain-input m-0 p-0",style:{color:"#969696",fontSize:"1rem"}}),i.a.createElement("div",{className:"green"},i.a.createElement("img",{src:(null===V||void 0===V?void 0:V.length)?h.a:w.a,alt:"delete icon",className:"cursor-pointer",onClick:function(e){return J({options:c,setSelected:z,reset:!0})}})))),i.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar"},r&&(null===c||void 0===c?void 0:c.filter((function(e){return(null===W||void 0===W?void 0:W.length)?e.label.toLowerCase().includes(W.toLowerCase())?e:void 0:e})).sort((function(e,t){return function(e,t){return e.selected&&!t.selected?-1:!e.selected&&t.selected?1:0}(e,t)})).map((function(e,t){var n,a=!!(null===(n=V.filter((function(t){return(null===t||void 0===t?void 0:t.value)===(null===e||void 0===e?void 0:e.value)})))||void 0===n?void 0:n.length),o=a?1:0,l=r?a?Q===t?"green":"text":"emptyTextField":V?"text":"emptyTextField";return i.a.createElement("div",{onMouseEnter:function(){return G(t)},onMouseLeave:function(){return G(null)},onClick:function(){return J({options:c,item:e.value,setSelected:z})},style:{minHeight:40,backgroundColor:"white"},className:"filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center ".concat(l)},i.a.createElement("table",{width:100,style:{tableLayout:"fixed"}},i.a.createElement("tr",{width:100},i.a.createElement("td",{width:10},i.a.createElement("img",{style:{opacity:o},className:"mr-3",src:Q===t&&a?x.a:j.a})),i.a.createElement("td",{width:90},e.label))))}))))))});t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,r=(e.textSearch,e.searchHandler),s=void 0===r?null:r,u=e.barcodeScanner,d=e.filter,m=void 0===d?"":d,v=(e.width,e.className,e.filterDropdown),f=void 0===v?null:v,p=(e.value,e.showScanner),b=e.areaId,g=e.setAreaId,h=e.areaDestination,y=e.setAreaDestination,w=e.moduleName,E=e.setSearch,x=e.category,N=e.setCategory,j=e.setSortBy,k=Object(o.useState)(),S=Object(a.a)(k,2),A=S[0],C=void 0!==A&&A,U=S[1],I="",B="";C?(I="Show Filter",B=""):(I="Hide Filter",B=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var D=Object(o.useState)(""),L=Object(a.a)(D,2),T=L[0],P=L[1],M=Object(l.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){P(e.target.value),"function"===typeof E&&E(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&s(T)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"}),i.a.createElement("div",{className:"mr-md-2"},i.a.createElement(O,{moduleName:w,selectedValue:x,options:M,onChange:function(e){return j(e)}})),i.a.createElement("div",{className:""},i.a.createElement(O,{moduleName:w,isMulti:!0,selectedValue:x,options:M,onChange:function(e){return N(e)}})),i.a.createElement("div",{className:"mr-0 mr-md-2"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,l=e.moduleName;if("stockMovement"!==l)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===l){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:b,areaDestination:h,setAreaId:g,setAreaDestination:y,barcodeScanner:u,moduleName:w})},className:"ml-2 pointer ".concat(p?null:"d-none"),src:c.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},m?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:C,setFilterShow:U})}},i.a.createElement("div",{className:"filter-text"},I)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),B)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return s(T)}},"Search"))),i.a.createElement("div",null,C?null:i.a.createElement("div",{className:"w-100"}," ",f," ")))}},682:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},683:function(e,t,n){e.exports=n.p+"static/media/ascOn.cccbb7d5.svg"},684:function(e,t,n){e.exports=n.p+"static/media/ascOff.d8a8c79c.svg"},685:function(e,t,n){e.exports=n.p+"static/media/categoryOn.5bc834d8.svg"},686:function(e,t,n){e.exports=n.p+"static/media/categoryOff.ffb704a2.svg"},687:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOn.fc3f380e.svg"},688:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOff.fc0332a7.svg"},689:function(e,t,n){e.exports=n.p+"static/media/checkHover.4cfe8e6d.svg"},690:function(e,t,n){e.exports=n.p+"static/media/checkNotHover.a429f43c.svg"},691:function(e,t,n){},731:function(e,t,n){},778:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return h}));var a=n(4),o=n(65),i=n.n(o),l=n(71),r=n(664),c=n(91),s=n(22),u=n.n(s),d=n(19),m=n(663),v=n(672),f=n(116),p=n(662),b=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,s,f,b,g,h,y,w,E,x,N,j,k,O,S,A,C;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,s=t.dispatch,f=t.setLocalEntryData,b=t.moduleName,g=t.moduleSummary,h=t.moduleEntry,y=t.warehouseUuid,w=t.areaId,(E=Object(r.a)(g))[a].checked=o,s(Object(l.a)({type:d.c},"".concat(b,"summaryData"),E)),x=null===E||void 0===E?void 0:E.filter((function(e){if(e.checked)return e})),N=[],h&&h.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&N.push(t.skuUuid)})),j=[],k=x.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===(null===e||void 0===e?void 0:e.label)||"Semi Waste"===(null===e||void 0===e?void 0:e.label)})),e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:y,dispatch:s,areaId:w.value,moduleName:b});case 8:(o=e.sent)&&(l=o.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=l,j.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(k);case 11:e.sent,O=[],h&&(O=h.jobPost.list.concat(j)),h||(O=j),(S=E[a]).checked||(O=O.filter((function(e){return e.skuUuid!==S.skuUuid}))),A=null===h||void 0===h||null===(n=h.jobPost)||void 0===n?void 0:n.id,C={jobPost:{id:A||0,warehouseSource:y,warehouseDestination:y,areaSource:parseInt(null===w||void 0===w?void 0:w.value),areaName:null===w||void 0===w?void 0:w.label,areaDestination:parseInt(null===w||void 0===w?void 0:w.value),list:O.sort((function(e,t){return Object(p.g)(e,t)}))}},0===O.length&&s(Object(l.a)({type:d.b},"".concat(b,"EntryData"),null)),f(C);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,l,s,d,p,b,g,h,y,w,E,x,N,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,o=t.dispatch,l=t.moduleName,s=t.moduleSummary,d=t.moduleEntry,p=t.warehouseUuid,b=t.areaId,g=t.preAddHandler,(h=Object(r.a)(s))[n].checked=a,y=null===h||void 0===h?void 0:h.filter((function(e){if(e.checked)return e})),w=[],d&&d.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&w.push(t.skuUuid)})),E=[],x=y.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===(null===e||void 0===e?void 0:e.label)||"Semi Waste"===(null===e||void 0===e?void 0:e.label)})),e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:p,dispatch:o,areaId:b.value,moduleName:l});case 8:(r=e.sent)&&(c=r.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(f.e)(e.initialWeight)?Object(f.e)(e.initialWeight):e.initialWeight,e})),t.poList=c,t.isNewItem=!0,E.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(x);case 10:e.sent,N=[],d&&(N=d.concat(E)),d||(N=E),(j=h[n]).checked||(N=N.filter((function(e){return e.skuUuid!==j.skuUuid}))),g(N);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.setActiveSKU,n=e.moduleEntry,o=e.moduleName,i=e.setConfirmation,r=e.dispatch,c=e.setIsRequired,s=[],u=Object(a.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(p.z)({moduleList:e.itemList});return e.itemList.map((function(n){var a=n.qty,o=n.wasteType,i=n.note;return 0!=a&&!isNaN(a)||null!==(null===o||void 0===o?void 0:o.value)?(isNaN(a)||0==a||""===a||null===a?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?n.wasteTypeIsEmpty=!1:n.wasteTypeIsEmpty=!0,n.noteIsEmpty=!i):(n.qtyIsEmpty=!1,n.wasteTypeIsEmpty=!1,n.uploadPhotoIsEmpty=!1,n.noteIsEmpty=!1),n.qtyIsEmpty||(Number(t)>Number(e.initialWeight)?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.wasteTypeIsEmpty)||(null===n||void 0===n?void 0:n.uploadPhotoIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?s.push(!1):s.push(!0),n})),e})),e})),v=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(v=!0)}))}))})),u.jobPost.list=m,r(Object(l.a)({type:d.b},"".concat(o,"EntryData"),u)),!s.includes(!1)&&v?"function"===typeof i&&i({show:!0,name:"submit"}):("function"===typeof i&&i({show:!1,name:null}),"function"===typeof c&&c(!0)),Object(p.b)({setActiveSKU:t,moduleEntry:n,moduleName:o})}}}]);
//# sourceMappingURL=27.8e6d1d7a.chunk.js.map