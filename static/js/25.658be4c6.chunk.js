(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[25],{1237:function(e,t,n){"use strict";n.r(t);var a=n(659),o=n(1),i=n.n(o),r=n(20),c=n(56),l=n(665),s=n(678),u=n(663),d=n(672),m=n(670),v=n(680),f=n.n(v),p=(n(731),n(780)),b=n(662),g=n(666),h=n(168);t.default=Object(r.i)((function(e){var t=Object(c.d)((function(e){return e.thereAreRequest})),n=Object(c.c)(),v=(Object(r.g)(),Object(c.d)((function(e){return e.stockTransferFirstLoad})),Object(c.d)((function(e){return e.user.warehouseUuid}))),y=Object(c.d)((function(e){return e.status})),E=Object(c.d)((function(e){return e.isLoading})),w=Object(c.d)((function(e){return e.stockTransferEntryData})),x=Object(b.s)({moduleEntry:w,moduleName:"stockTransfer"}),j=Object(c.d)((function(e){return e.warehouseArea})),k=Object(c.d)((function(e){return e.areaId})),N=Object(c.d)((function(e){return e.stockTransferAddSku})),O=Object(o.useState)(null),S=Object(a.a)(O,2),A=S[0],C=S[1],U=Object(o.useState)(0),I=Object(a.a)(U,2),D=(I[0],I[1]),B=Object(o.useState)(!1),L=Object(a.a)(B,2),T=L[0],P=(L[1],Object(o.useState)(null)),R=Object(a.a)(P,2),M=R[0],W=R[1],K=Object(o.useState)(!0),H=Object(a.a)(K,2),V=H[0],q=H[1],z=Object(o.useState)([]),F=Object(a.a)(z,2),Q=F[0],G=F[1],J=Object(o.useState)(),Y=Object(a.a)(J,2),X=Y[0],Z=Y[1];if(Object(o.useEffect)((function(){Object(d.d)({dispatch:n}),Object(d.f)({dispatch:n,warehouseUuid:v}),D(x)}),[]),w&&void 0!==w||e.history.push("/inventory-entry/stock-transfer"),!0===V&&void 0!==w){var _,$;W(w.jobPost.list.map((function(e,t){return e.skuNumber})));var ee={};ee.value=null===w||void 0===w||null===(_=w.jobPost)||void 0===_?void 0:_.areaSource,ee.label=null===w||void 0===w||null===($=w.jobPost)||void 0===$?void 0:$.areaName,Object(b.t)({selected:ee,dispatch:n}),q(!1)}var te=Object(o.useState)(),ne=Object(a.a)(te,2),ae=ne[0],oe=ne[1],ie=document.documentElement.clientHeight,re=ie-290,ce=ie-290;return!1===N&&(null===w||void 0===w?void 0:w.jobPost.list.length)>0&&T&&e.history.push("/inventory-entry/weight-entry"),i.a.createElement("div",{className:"w-100  stock-take-summary"},i.a.createElement(g.a,{status:y}),i.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},i.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},i.a.createElement(l.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:j,onChangeDropdown:function(e){return Object(b.t)({selected:e,dispatch:n})},selectedValue:k,showTitle:!0}))),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all mb-3"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",i.a.createElement("span",{className:"green"},"(".concat(Q.length," Selected SKU").concat(Q.length>1?"s":"",")"))))),i.a.createElement(s.a,{category:ae,setCategory:oe,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:ae,dispatch:n,desc:e,warehouseUuid:v,areaId:k,setModule:C,selectedSkusNumber:M},Z(e))}}),i.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===A||void 0===A?void 0:A.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:re,maxHeight:re}},(null===A||void 0===A?void 0:A.length)?null===A||void 0===A?void 0:A.map((function(e,t){return i.a.createElement(m.a,{key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(p.a)({idx:t,checked:e,dispatch:n,moduleSummary:A,moduleEntry:Q,moduleName:"stockTransfer",warehouseUuid:v,areaId:k,preAddHandler:G})},check:null===e||void 0===e?void 0:e.checked})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:ce,maxHeight:ce}},Object(b.r)({isLoading:E,summary:A})?k&&0===(null===A||void 0===A?void 0:A.length)?i.a.createElement("div",null,"Sorry, we couldn't find any matches for '",i.a.createElement("span",{className:"LatoBold"},X),"' in ",null===k||void 0===k?void 0:k.label," area.",i.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":i.a.createElement("img",{className:"loading",src:f.a,alt:"loading"})))),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/stock-transfer/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),i.a.createElement(h.b,{to:"/inventory-entry/stock-transfer/weight-entry",onClick:function(e){return 0===t&&(null===Q||void 0===Q?void 0:Q.length)>0||e.preventDefault()}},i.a.createElement("button",{onClick:function(){return 0===t&&(null===Q||void 0===Q?void 0:Q.length)>0?Object(b.a)({dispatch:n,moduleEntry:Q,moduleSummary:w,moduleName:"stockTransfer"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(0===t&&(null===Q||void 0===Q?void 0:Q.length)>0?"bg-green":"bg-lineGrey")},0===(null===Q||void 0===Q?void 0:Q.length)||0===t&&(null===Q||void 0===Q?void 0:Q.length)>0?"Update":"Processing...")))))}))},665:function(e,t,n){"use strict";var a=n(664),o=n(4),i=n(659),r=n(1),c=n.n(r),l=n(694);t.a=function(e){var t,n,s=e.isEmpty,u=e.title,d=e.placeholder,m=e.options,v=e.selectedValue,f=e.showTitle,p=e.width,b=e.className,g=e.entryListIdx,h=e.onChangeDropdown,y=e.show,E=e.poListIdx,w=e.isDisabled,x=e.style,j=e.noMarginBottom,k=e.resetName,N=e.isMulti,O=e.hideResetOpt,S=Object(r.useState)(),A=Object(i.a)(S,2),C=A[0],U=A[1];Object(r.useEffect)((function(){"empty"===v&&U(!0)}),[v,s]);var I=!!s&&function(e){return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},D=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(E)),B=null===D||void 0===D?void 0:D.getBoundingClientRect();Object(r.useEffect)((function(){B=null===D||void 0===D?void 0:D.getBoundingClientRect()}),[C]);var L=document.documentElement.clientWidth,T=[{label:"-".concat(k||u,"-"),value:null}];m&&(T=[].concat(Object(a.a)(T),Object(a.a)(m))),O&&(T=T.filter((function(e){return null===e||void 0===e?void 0:e.value})));var P,R=(null===(n=B)||void 0===n?void 0:n.bottom)>600?"top":"bottom";L<=500&&(R=(null===(P=B)||void 0===P?void 0:P.bottom)>400?"top":"bottom","Categories"===u&&(R="top"));return c.a.createElement("div",{style:x,className:"mr-0 ".concat(x?null:"mr-lg-3"," ").concat(j?null:"mb-3"," ").concat(p," ").concat(b," ").concat(y?null:"d-none")},c.a.createElement("div",{className:" pb-1 LatoBold ".concat(f?null:"d-none")},u),c.a.createElement(l.a,{inputId:"".concat(u,"_").concat(E,"_").concat(g),isMulti:N,isSearchable:!(L<500),isDisabled:w||!1,id:"dropdown".concat(g).concat(E),value:((null===v||void 0===v?void 0:v.value)||!!(null===v||void 0===v?void 0:v.length))&&v,menuIsOpen:C,menuPortal:!0,placeholder:k||d,options:T,onMenuOpen:function(){return U(!0)},onMenuClose:function(){return U(!1)},onChange:function(e){h(e),U(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(R),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:I,option:function(e,t){var n=t.isFocused,a=t.isSelected;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},666:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),r=n(661),c=(n(667),n(56)),l=n(19);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,f=e.cancelButtonTitle,p=void 0===f?"Cancel":f,b=e.actionButtonTitle,g=void 0===b?"Submit":b,h=e.cancelButtonClass,y=void 0===h?"bg-background":h,E=e.actionButtonClass,w=void 0===E?"bg-background":E,x=e.actionButtonEvent,j=void 0===x?null:x,k=e.colorText,N=void 0===k?"red":k,O=e.msg1,S=void 0===O?null:O,A=e.msg2,C=void 0===A?null:A,U=e.onCloseFunction,I=void 0===U?null:U,D=e.refreshOnCancel,B=void 0===D||D,L=e.setIsSuccess,T=Object(c.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",p="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",p="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",p="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",p="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1);var P=Object(o.useState)(d),R=Object(a.a)(P,2),M=R[0],W=R[1];return Object(o.useEffect)((function(){W(d)}),[d]),Object(o.useEffect)((function(){}),[M]),window.onkeydown=function(e){return 27===e.keyCode?W(!1):null},i.a.createElement(r.B,{className:"".concat(M?null:"d-none")},i.a.createElement(r.f,null,i.a.createElement(r.s,{show:M,closeOnBackdrop:!1,onClose:function(){W(!1),"function"===typeof L&&L({success:null,name:null}),T({type:l.k,status:null}),I&&I()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){W(!1),"function"===typeof L&&L({success:null,name:null}),T({type:l.k,status:null}),I&&I()}})),i.a.createElement(r.v,{className:"px-5 pt-5 border-none"},i.a.createElement(r.w,{className:"text LatoBold ".concat(N)},v," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(r.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},C)),i.a.createElement(r.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},p?i.a.createElement(r.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){B?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:W,parentOncCloseFunction:I}),T({type:l.k,status:null})}},p):null,g?i.a.createElement(r.d,{className:"".concat(w," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){j?(j(),W(!1)):W(!1)}},g):null," "))))}},667:function(e,t,n){},670:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),r=n(691),c=n.n(r),l=n(116),s=n(661);t.a=function(e){var t,n,r,u,d=e.skuUuId,m=void 0===d?123:d,v=e.selectAll,f=e.img,p=void 0===f?c.a:f,b=e.skuDescription,g=void 0===b?"SKU Description":b,h=e.skuNumber,y=void 0===h?"1001":h,E=e.uomLabel,w=void 0===E?"weight":E,x=e.uomValue,j=void 0===x?100.3:x,k=e.uom,N=void 0===k?"KG":k,O=e.isCheckedHandler,S=void 0===O?null:O,A=e.check,C=void 0!==A&&A,U=e.idx,I=void 0===U?0:U,D=e.singleView,B=e.setCreatePo,L=e.target,T=e.targetMovementProgress,P=e.targetRepackProgress,R=e.moduleName,M=e.setFromBarcode,W=e.setSingleViewSku,K=document.documentElement.clientWidth<=500,H=i.a.useState(C),V=Object(a.a)(H,2),q=V[0],z=V[1],F=function(){z(!0),"function"===typeof W&&W(m),"function"!==typeof W&&S(!0),"function"===typeof B&&B({show:!0,skuNumber:y}),"function"===typeof M&&M(!1)},Q=!!L||"d-none",G=0,J=0;(null===P||void 0===P?void 0:P.length)&&"repack"===R&&(G=null===(t=P[0])||void 0===t?void 0:t.totalPack,J=null===(n=P[0])||void 0===n?void 0:n.totalUom);(null===T||void 0===T?void 0:T.length)&&"repack"!==R&&(G=null===(r=T[0])||void 0===r?void 0:r.totalMove,J=null===(u=T[0])||void 0===u?void 0:u.totalUos);return Object(o.useEffect)((function(e){v&&(z(!0),S(!0)),!1===v&&z(!1)}),[v]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&F()},tabindex:"0",key:I,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(K?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(q?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(K?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){z(!q),S&&S(!q)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(q?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:p,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},g),i.a.createElement("div",{className:"text fontSizeTitle"},y))),i.a.createElement("hr",{className:"".concat(K?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(K?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(K?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(Q," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"repack"===R?"Repack Percentage":"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(G,"/").concat(J),i.a.createElement("span",{className:"font-green"}," (".concat(Object(l.e)(G/J*100),"%)"))),i.a.createElement(s.A,{value:G,max:J,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(Q)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(K?"d-none":null)},"Total ".concat("KG"===N.toUpperCase()?w.toUpperCase():N.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(l.e)(j)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},N)),i.a.createElement("div",{onClick:F,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(D?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},678:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),r=n(56),c=(n(665),n(681)),l=n.n(c),s=(n(682),n(683),n(684)),u=n.n(s),d=n(685),m=n.n(d),v=n(686),f=n.n(v),p=n(687),b=n.n(p),g=n(688),h=n.n(g),y=n(689),E=n.n(y),w=n(676),x=(n(690),function(e){var t,n,r=e.isMulti,c=(e.selectedValue,e.options),l=e.onChange,s=Object(o.useState)(!1),d=Object(a.a)(s,2),v=d[0],p=d[1],g=Object(w.d)().dimention,y=g<=500,x=Object(o.useRef)(null),j=null===(t=document)||void 0===t?void 0:t.getElementById("c-filter"),k=null===j||void 0===j?void 0:j.getBoundingClientRect();Object(o.useEffect)((function(){k=null===j||void 0===j?void 0:j.getBoundingClientRect()}),[v]);var N=(null===(n=k)||void 0===n?void 0:n.top)+(y?-70:function(){switch(g){case 1024:return-250;default:return-220}}());!function(e){var t=e.wrapperRef,n=e.setShow,a=e.show;Object(o.useEffect)((function(){function e(e){a&&t.current&&!t.current.contains(e.target)&&n(!a)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,a])}({wrapperRef:x,setShow:p,show:v});var O=v?280:0,S=v?1:0,A=y?"1rem":function(){switch(g){case 1366:return-50;case 1920:case 1536:return!1;case 1440:return-35;case 1280:return!1;case 1600:return-35;case 1280:return!1;case 1024:return-165}}(),C=!!y&&"1rem",U=y?"fixed":"absolute",I=y?"100% !important":250,D=Object(o.useState)(""),B=Object(a.a)(D,2),L=B[0],T=B[1],P=Object(o.useState)(r?[]:{}),R=Object(a.a)(P,2),M=R[0],W=R[1],K=Object(o.useState)(!1),H=Object(a.a)(K,2),V=H[0],q=H[1],z=function(e){var t=e.options,n=e.item,a=e.setSelected,o=e.reset,i=null===t||void 0===t?void 0:t.map((function(e){return e}));a(i=(i=i.map((function(e){return n===e.value&&(e.selected=!e.selected),o&&(e.selected=!1),e}))).filter((function(e){return e.selected}))),"function"===typeof l&&l(i)};return i.a.createElement("div",{className:"position-sticky"},i.a.createElement("div",null,i.a.createElement("img",{className:"cursor-pointer",id:"c-filter",src:(null===M||void 0===M?void 0:M.length)?u.a:m.a,onClick:function(){return p(!0)}})),i.a.createElement("div",{ref:x,className:"text mt-3 rounded shadow py-2",style:{transition:"max-height ease-in",transitionProperty:"all",transitionDuration:"0.15s",maxHeight:O,opacity:S,minWidth:I,backgroundColor:"white",top:N,position:U,left:A,right:C,overflow:"hidden"}},i.a.createElement("div",{className:"px-2"},i.a.createElement("div",{className:"border rounded w-100 d-flex justify-content-between align-items-center pl-3 pr-2",style:{height:40}},i.a.createElement("input",{id:"filter-input",value:L,placeholder:"Search Category",onChange:function(e){return T(e.target.value)},type:"text",className:"plain-input m-0 p-0",style:{color:"rgba(168, 177, 190, 1)",fontSize:"1rem"}}),i.a.createElement("div",{className:"green"},i.a.createElement("img",{src:(null===M||void 0===M?void 0:M.length)?f.a:b.a,alt:"delete icon",className:"cursor-pointer",onClick:function(e){return z({options:c,setSelected:W,reset:!0})}})))),i.a.createElement("div",{style:{maxHeight:230,overflow:"scroll"},className:"hide-scrollbar"},null===c||void 0===c?void 0:c.filter((function(e){return(null===L||void 0===L?void 0:L.length)?e.label.toLowerCase().includes(L.toLowerCase())?e:void 0:e})).sort((function(e,t){return function(e,t){return e.selected&&!t.selected?-1:!e.selected&&t.selected?1:0}(e,t)})).map((function(e,t){var n,a=!!(null===(n=M.filter((function(t){return(null===t||void 0===t?void 0:t.value)===(null===e||void 0===e?void 0:e.value)})))||void 0===n?void 0:n.length),o=a?1:0,l=r?a?V===t?"green":"text":"emptyTextField":M?"text":"emptyTextField";return i.a.createElement("div",{onMouseEnter:function(){return q(t)},onMouseLeave:function(){return q(null)},onClick:function(){return z({options:c,item:e.value,setSelected:W})},style:{minHeight:40,backgroundColor:"white"},className:"filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center ".concat(l)},i.a.createElement("table",{width:100,style:{tableLayout:"fixed"}},i.a.createElement("tr",{width:100},i.a.createElement("td",{width:10},i.a.createElement("img",{style:{opacity:o},className:"mr-3",src:V===t&&a?h.a:E.a})),i.a.createElement("td",{width:90},e.label))))})))))});t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,c=(e.textSearch,e.searchHandler),s=void 0===c?null:c,u=e.barcodeScanner,d=e.filter,m=void 0===d?"":d,v=(e.width,e.className,e.filterDropdown),f=void 0===v?null:v,p=(e.value,e.showScanner),b=e.areaId,g=e.setAreaId,h=e.areaDestination,y=e.setAreaDestination,E=e.moduleName,w=e.setSearch,j=e.category,k=e.setCategory,N=Object(o.useState)(),O=Object(a.a)(N,2),S=O[0],A=void 0!==S&&S,C=O[1],U="",I="";A?(U="Show Filter",I=""):(U="Hide Filter",I=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var D=Object(o.useState)(""),B=Object(a.a)(D,2),L=B[0],T=B[1],P=Object(r.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){T(e.target.value),"function"===typeof w&&w(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&s(L)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"}),i.a.createElement("div",{className:"mr-3"},i.a.createElement(x,{isMulti:!0,selectedValue:j,options:P,onChange:function(e){return k(e)}})),i.a.createElement("div",{className:"mr-0 mr-md-3"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,r=e.moduleName;if("stockMovement"!==r)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===r){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:b,areaDestination:h,setAreaId:g,setAreaDestination:y,barcodeScanner:u,moduleName:E})},className:"pointer ".concat(p?null:"d-none"),src:l.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},m?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:A,setFilterShow:C})}},i.a.createElement("div",{className:"filter-text"},U)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),I)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return s(L)}},"Search"))),i.a.createElement("div",null,A?null:i.a.createElement("div",{className:"w-100"}," ",f," ")))}},681:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},682:function(e,t,n){e.exports=n.p+"static/media/Ascending_greenicon.03f85b0a.svg"},683:function(e,t,n){e.exports=n.p+"static/media/Ascending_greyicon.87e6b936.svg"},684:function(e,t,n){e.exports=n.p+"static/media/categoryOn.411202ae.svg"},685:function(e,t,n){e.exports=n.p+"static/media/categoryOff.c7cec5ff.svg"},686:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOn.20944738.svg"},687:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOff.9c91a61a.svg"},688:function(e,t,n){e.exports=n.p+"static/media/checkHover.43b44f0f.svg"},689:function(e,t,n){e.exports=n.p+"static/media/checkNotHover.9ab9e4e5.svg"},690:function(e,t,n){},731:function(e,t,n){},780:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return h}));var a=n(4),o=n(65),i=n.n(o),r=n(71),c=n(664),l=n(91),s=n(22),u=n.n(s),d=n(19),m=n(663),v=n(672),f=n(116),p=n(662),b=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,o,s,b,g,h,y,E,w,x,j,k,N,O,S,A,C,U,I,D;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,s=t.dispatch,b=t.setLocalEntryData,g=t.moduleName,h=t.moduleSummary,y=t.moduleEntry,E=t.warehouseUuid,w=t.warehouseIdDestination,x=t.areaId,j=t.areaIdDesposition,(k=Object(c.a)(h))[a].checked=o,s(Object(r.a)({type:d.c},"".concat(g,"summaryData"),k)),N=null===k||void 0===k?void 0:k.filter((function(e){if(e.checked)return e})),O=[],y&&y.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&O.push(t.skuUuid)})),S=[],A=N.map(function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:E,dispatch:s,areaId:x.value,moduleName:g});case 8:(o=e.sent)&&(r=o.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(f.e)(e.initialWeight)?Object(f.e)(e.initialWeight):e.initialWeight,e})),t.poList=r,S.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(A);case 11:e.sent,C=[],y&&(C=y.jobPost.list.concat(S)),y||(C=S),(U=k[a]).checked||(C=C.filter((function(e){return e.skuUuid!==U.skuUuid}))),I=null===y||void 0===y||null===(n=y.jobPost)||void 0===n?void 0:n.id,D={jobPost:{id:I||0,warehouseSource:E,warehouseDestination:null===w||void 0===w?void 0:w.value,warehouseDestinationName:null===w||void 0===w?void 0:w.label,areaSource:parseInt(null===x||void 0===x?void 0:x.value),areaName:null===x||void 0===x?void 0:x.label,areaDestination:parseInt(null===j||void 0===j?void 0:j.value),areaDestinationName:null===j||void 0===j?void 0:j.label,list:C.sort((function(e,t){return Object(p.f)(e,t)}))}},0===C.length&&s(Object(r.a)({type:d.b},"".concat(g,"EntryData"),null)),b(D);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,o,r,s,d,p,b,g,h,y,E,w,x,j,k;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,o=t.dispatch,r=t.moduleName,s=t.moduleSummary,d=t.moduleEntry,p=t.warehouseUuid,b=t.areaId,g=t.preAddHandler,(h=Object(c.a)(s))[n].checked=a,y=null===h||void 0===h?void 0:h.filter((function(e){if(e.checked)return e})),E=[],d&&d.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&E.push(t.skuUuid)})),w=[],x=y.map(function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:p,dispatch:o,areaId:b.value,moduleName:r});case 8:(c=e.sent)&&(l=c.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(f.e)(e.initialWeight)?Object(f.e)(e.initialWeight):e.initialWeight,e})),t.poList=l,t.isNewItem=!0,w.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(x);case 10:e.sent,j=[],d&&(j=d.concat(w)),d||(j=w),(k=h[n]).checked||(j=j.filter((function(e){return e.skuUuid!==k.skuUuid}))),g(j);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.setActiveSKU,n=e.moduleEntry,o=e.moduleName,i=e.setConfirmation,c=e.dispatch,l=e.setIsRequired,s=[],u=Object(a.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(p.x)({moduleList:e.itemList});return e.itemList.map((function(n){var a=n.qty,o=n.grade;n.ripeness,n.note;return"kg"===e.uom?0!=a&&!isNaN(a)||null!==(null===o||void 0===o?void 0:o.value)?isNaN(a)||0==a||""===a||null===a?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1:(n.qtyIsEmpty=!1,n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1,n.noteIsEmpty=!1):isNaN(a)||0==a||""===a||null===a?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,n.qtyIsEmpty||(Number(t)>Number(e.initialWeight)?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.gradeIsEmpty)||(null===n||void 0===n?void 0:n.ripenessIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?s.push(!1):s.push(!0),n})),e})),e})),v=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(v=!0)}))}))})),u.jobPost.list=m,c(Object(r.a)({type:d.b},"".concat(o,"EntryData"),u)),!s.includes(!1)&&v?"function"===typeof i&&i({show:!0,name:"submit"}):("function"===typeof i&&i({show:!1,name:null}),"function"===typeof l&&l(!0)),Object(p.b)({setActiveSKU:t,moduleEntry:n,moduleName:o})}}}]);
//# sourceMappingURL=25.658be4c6.chunk.js.map