(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[12],{665:function(e,t,n){},666:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),r=n(661),c=(n(665),n(56)),l=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,p=void 0===m?"":m,v=e.cancelButtonTitle,f=void 0===v?"Cancel":v,b=e.actionButtonTitle,h=void 0===b?"Submit":b,g=e.cancelButtonClass,w=void 0===g?"bg-background":g,x=e.actionButtonClass,E=void 0===x?"bg-background":x,y=e.actionButtonEvent,k=void 0===y?null:y,N=e.colorText,A=void 0===N?"red":N,j=e.msg1,O=void 0===j?null:j,S=e.msg2,U=void 0===S?null:S,C=e.onCloseFunction,B=void 0===C?null:C,D=e.refreshOnCancel,I=void 0===D||D,T=e.setIsSuccess,P=Object(c.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",p="Server Error",f="Try Again",h="Contact Administration",A="red",O=null===n||void 0===n?void 0:n.message,U="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,I=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",p="Request Timeout",f="Try Again",h="Contact Administration",A="red",O=null===n||void 0===n?void 0:n.message,U="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,I=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",p="Server Error",f="Try Again",h="Contact Administration",A="red",O=null===n||void 0===n?void 0:n.message,U="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,I=!1),404===(null===n||void 0===n?void 0:n.code)&&(p="Something wrong with the application",f="Try Again",h="Contact Administration",A="red",O=null===n||void 0===n?void 0:n.message,U="Please try again or contact Sayurbox administration for further information.",w="bg-green",d=!0,I=!1);var W=Object(o.useState)(d),L=Object(a.a)(W,2),M=L[0],R=L[1];return Object(o.useEffect)((function(){R(d)}),[d]),Object(o.useEffect)((function(){}),[M]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},i.a.createElement(r.B,{className:"".concat(M?null:"d-none")},i.a.createElement(r.f,null,i.a.createElement(r.s,{show:M,closeOnBackdrop:!1,onClose:function(){R(!1),"function"===typeof T&&T({success:null,name:null}),P({type:l.k,status:null}),B&&B()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),"function"===typeof T&&T({success:null,name:null}),P({type:l.k,status:null}),B&&B()}})),i.a.createElement(r.v,{className:"px-5 pt-5 border-none"},i.a.createElement(r.w,{className:"text LatoBold ".concat(A)},p," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(r.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},O),i.a.createElement("p",{className:"text"},U)),i.a.createElement(r.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?i.a.createElement(r.d,{className:"".concat(w," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){I?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:R,parentOncCloseFunction:B}),P({type:l.k,status:null})}},f):null,h?i.a.createElement(r.d,{className:"".concat(E," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){k?(k(),R(!1)):R(!1)}},h):null," "))))}},667:function(e,t,n){"use strict";var a=n(664),o=n(4),i=n(659),r=n(1),c=n.n(r),l=n(683);t.a=function(e){var t,n,s,u=e.isEmpty,d=e.title,m=e.placeholder,p=e.options,v=e.selectedValue,f=e.showTitle,b=e.width,h=e.className,g=e.entryListIdx,w=e.onChangeDropdown,x=e.show,E=e.poListIdx,y=e.isDisabled,k=e.style,N=e.noMarginBottom,A=e.resetName,j=e.isMulti,O=e.hideResetOpt,S=Object(r.useState)(),U=Object(i.a)(S,2),C=U[0],B=U[1];Object(r.useEffect)((function(){"empty"===v&&B(!0)}),[v,u]);var D=!!u&&function(e,t){t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},I=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(E)),T=null===I||void 0===I?void 0:I.getBoundingClientRect();Object(r.useEffect)((function(){T=null===I||void 0===I?void 0:I.getBoundingClientRect()}),[C]);var P=document.documentElement.clientWidth,W=[{label:"-".concat(A||d,"-"),value:null}];p&&(W=[].concat(Object(a.a)(W),Object(a.a)(p))),O&&(W=W.filter((function(e){return null===e||void 0===e?void 0:e.value})));var L=(null===(n=T)||void 0===n?void 0:n.bottom)>600?"top":"bottom";return P<=500&&(L=(null===(s=T)||void 0===s?void 0:s.bottom)>400?"top":"bottom"),c.a.createElement("div",{style:k,className:"mr-0 ".concat(k?null:"mr-lg-3"," ").concat(N?null:"mb-3"," ").concat(b," ").concat(h," ").concat(x?null:"d-none")},c.a.createElement("div",{className:" pb-1 LatoBold ".concat(f?null:"d-none")},d),c.a.createElement(l.a,{isMulti:j,isSearchable:!(P<500),isDisabled:y||!1,id:"dropdown".concat(g).concat(E),value:((null===v||void 0===v?void 0:v.value)||!!(null===v||void 0===v?void 0:v.length))&&v,menuIsOpen:C,menuPortal:!0,placeholder:A||m,options:W,onMenuOpen:function(){return B(!0)},onMenuClose:function(){return B(!1)},onChange:function(e){w(e),B(!1)},menuPortalTarget:document.body,maxMenuHeight:200,menuPlacement:"".concat(L),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:D,option:function(e,t){var n=t.isFocused,a=t.isSelected;t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},671:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),r=n(681),c=n.n(r),l=n(116),s=n(661);t.a=function(e){var t=e.img,n=void 0===t?c.a:t,o=e.skuDescription,r=void 0===o?"SKU Description":o,u=e.skuNumber,d=void 0===u?"1001":u,m=e.uomLabel,p=void 0===m?"weight":m,v=e.uomValue,f=void 0===v?100.3:v,b=e.uom,h=void 0===b?"KG":b,g=e.isCheckedHandler,w=void 0===g?null:g,x=e.check,E=void 0!==x&&x,y=e.idx,k=void 0===y?0:y,N=e.singleView,A=e.setCreatePo,j=e.target,O=e.targetMovementProgress,S=document.documentElement.clientWidth<=500,U=i.a.useState(E),C=Object(a.a)(U,2),B=C[0],D=C[1],I=function(){D(!0),w(!0),"function"===typeof A&&A({show:!0,skuNumber:d})},T=!!j||"d-none",P=(null===O||void 0===O?void 0:O.length)?O[0].totalMove:0,W=(null===O||void 0===O?void 0:O.length)?O[0].totalUos:0;return i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&I()},tabindex:"0",key:k,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(S?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(B?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(S?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){D(!B),w&&w(!B)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(B?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:n,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},r),i.a.createElement("div",{className:"text fontSizeTitle"},d))),i.a.createElement("hr",{className:"".concat(S?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(S?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(S?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(T," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(P,"/").concat(W),i.a.createElement("span",{className:"font-green"}," (".concat(P/W*100,"%)"))),i.a.createElement(s.A,{value:P,max:W,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(T)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(S?"d-none":null)},"Total ".concat("KG"===h.toUpperCase()?p.toUpperCase():h.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(l.e)(f)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},h)),i.a.createElement("div",{onClick:I,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(N?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},674:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),r=n(676),c=n.n(r);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,r=(e.textSearch,e.searchHandler),l=void 0===r?null:r,s=e.barcodeScanner,u=e.filter,d=void 0===u?"":u,m=(e.width,e.className,e.filterDropdown),p=void 0===m?null:m,v=(e.value,e.showScanner),f=e.areaId,b=e.setAreaId,h=Object(o.useState)(),g=Object(a.a)(h,2),w=g[0],x=void 0!==w&&w,E=g[1],y="",k="";x?(y="Show Filter",k=""):(y="Hide Filter",k=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var N=Object(o.useState)(null),A=Object(a.a)(N,2),j=A[0],O=A[1];return i.a.createElement("div",{className:"search-bar"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){O(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&l(j)}(e)}}),i.a.createElement("img",{onClick:function(){return(null===f||void 0===f?void 0:f.value)?s(!0):"function"===typeof b?b("empty"):null},className:"pointer ".concat(v?null:"d-none"),src:c.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},d?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:x,setFilterShow:E})}},i.a.createElement("div",{className:"filter-text"},y)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),k)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return l(j)}},"Search"))),i.a.createElement("div",null,x?null:i.a.createElement("div",{className:"w-100"}," ",p," ")))}},675:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},676:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},734:function(e,t,n){},924:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return f}));n(4);var a=n(65),o=n.n(a),i=n(71),r=n(664),c=n(91),l=n(22),s=n.n(l),u=n(21),d=n(662),m=n(670),p=n(116),v=(n(663),function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,l,v,f,b,h,g,w,x,E,y,k,N,A,j,O,S,U,C,B;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,l=t.checked,v=t.dispatch,f=t.setLocalEntryData,b=t.moduleName,h=t.moduleSummary,g=t.moduleEntry,w=t.warehouseUuid,x=t.warehouseIdDestination,E=t.areaId,y=t.areaIdDesposition,(k=Object(r.a)(h))[a].checked=l,v(Object(i.a)({type:u.c},"".concat(b,"summaryData"),k)),N=null===k||void 0===k?void 0:k.filter((function(e){if(e.checked)return e})),A=[],g&&g.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&A.push(t.skuUuid)})),j=[],O=N.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(m.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(d.d)({skuId:t.skuUuid,warehouseUuid:w,dispatch:v,areaId:E.value,moduleName:b});case 8:(i=e.sent)&&(r=i.map((function(e){e.itemList=[];var n=e.expiryDate?s()(e.expiryDate).valueOf():null,a=e.inboundDate?s()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=r,j.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(O);case 11:e.sent,S=[],g&&(S=g.jobPost.list.concat(j)),g||(S=j),(U=k[a]).checked||(S=S.filter((function(e){return e.skuUuid!==U.skuUuid}))),C=null===g||void 0===g||null===(n=g.jobPost)||void 0===n?void 0:n.id,B={jobPost:{id:C||0,warehouseSource:w,warehouseDestination:null===x||void 0===x?void 0:x.value,warehouseDestinationName:null===x||void 0===x?void 0:x.label,areaSource:parseInt(null===E||void 0===E?void 0:E.value),areaName:null===E||void 0===E?void 0:E.label,areaDestination:parseInt(null===y||void 0===y?void 0:y.value),areaDestinationName:null===y||void 0===y?void 0:y.label,list:S}},0===S.length&&v(Object(i.a)({type:u.b},"".concat(b,"EntryData"),null)),f(B);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,i,l,u,v,f,b,h,g,w,x,E,y,k,N;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,i=t.dispatch,l=t.moduleName,u=t.moduleSummary,v=t.moduleEntry,f=t.warehouseUuid,b=t.areaId,h=t.preAddHandler,(g=Object(r.a)(u))[n].checked=a,w=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),x=[],v&&v.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&x.push(t.skuUuid)})),E=[],y=w.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(m.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(d.d)({skuId:t.skuUuid,warehouseUuid:f,dispatch:i,areaId:b.value,moduleName:l});case 8:(r=e.sent)&&(c=r.map((function(e){e.itemList=[];var n=e.expiryDate?s()(e.expiryDate).valueOf():null,a=e.inboundDate?s()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=c,E.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(y);case 10:e.sent,k=[],v&&(k=v.concat(E)),v||(k=E),(N=g[n]).checked||(k=k.filter((function(e){return e.skuUuid!==N.skuUuid}))),h(k);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=12.a5a94e04.chunk.js.map