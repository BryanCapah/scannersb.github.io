(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[39],{1195:function(e,t,n){"use strict";n.r(t);var a=n(653),o=n(1),i=n.n(o),l=n(19),r=n(56),c=n(661),s=n(669),u=n(656),d=n(664),m=n(665),v=n(667),p=n.n(v),f=(n(692),n(763)),b=n(658),g=n(660),h=n(166),y=n(713);t.default=Object(l.i)((function(e){var t=Object(r.d)((function(e){return e.thereAreRequest})),n=Object(r.c)(),v=(Object(l.g)(),Object(r.d)((function(e){return e.repackFirstLoad})),Object(r.d)((function(e){return e.user.warehouseUuid}))),E=Object(r.d)((function(e){return e.status})),k=Object(r.d)((function(e){return e.isLoading})),w=Object(r.d)((function(e){return e.repackEntryData})),x=Object(b.m)({moduleEntry:w,moduleName:"repack"}),j=Object(r.d)((function(e){return e.warehouseArea})),N=Object(r.d)((function(e){return e.areaId})),O=Object(r.d)((function(e){return e.repackAddSku})),S=Object(o.useState)(null),A=Object(a.a)(S,2),I=A[0],C=A[1],U=Object(o.useState)(0),B=Object(a.a)(U,2),D=(B[0],B[1]),L=Object(o.useState)(!1),T=Object(a.a)(L,2),P=T[0],W=(T[1],Object(o.useState)(null)),M=Object(a.a)(W,2),R=M[0],H=M[1],K=Object(o.useState)(!0),q=Object(a.a)(K,2),z=q[0],V=q[1],F=Object(o.useState)([]),G=Object(a.a)(F,2),Q=G[0],Y=G[1],J=Object(o.useState)(!1),X=Object(a.a)(J,2),Z=X[0],_=X[1];if(Object(o.useEffect)((function(){Object(d.c)({dispatch:n}),Object(d.e)({dispatch:n,warehouseUuid:v}),D(x)}),[]),w&&void 0!==w||e.history.push("/inventory-entry/repacking"),!0===z&&void 0!==w){var $,ee;H(w.jobPost.list.map((function(e,t){return e.skuNumber})));var te=[];te.value=null===w||void 0===w||null===($=w.jobPost)||void 0===$?void 0:$.areaSource,te.label=null===w||void 0===w||null===(ee=w.jobPost)||void 0===ee?void 0:ee.areaName,Object(b.n)({selected:te,dispatch:n}),V(!1)}var ne=Object(o.useState)(),ae=Object(a.a)(ne,2),oe=ae[0],ie=ae[1],le=document.documentElement.clientHeight,re=le-360,ce=le-290;return!1===O&&(null===w||void 0===w?void 0:w.jobPost.list.length)>0&&P&&e.history.push("/inventory-entry/repacking/weight-entry"),i.a.createElement("div",{className:"w-100  stock-take-summary"},i.a.createElement(g.a,{status:E}),i.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},i.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},i.a.createElement(c.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:j,onChangeDropdown:function(e){return Object(b.n)({selected:e,dispatch:n})},selectedValue:N,showTitle:!0}))),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",i.a.createElement("span",{className:"green"},"(".concat(Q.length," Selected SKU").concat(Q.length>1?"s":"",")"))))),i.a.createElement(s.a,{category:oe,setCategory:ie,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:oe,dispatch:n,desc:e,warehouseUuid:v,areaId:N,setModule:C,selectedSkusNumber:R})}}),i.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===I||void 0===I?void 0:I.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:re,maxHeight:re}},(null===I||void 0===I?void 0:I.length)?null===I||void 0===I?void 0:I.map((function(e,t){return i.a.createElement(m.a,{selectAll:Z,key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(f.a)({idx:t,checked:e,dispatch:n,moduleSummary:I,moduleEntry:Q,moduleName:"repack",warehouseUuid:v,areaId:N,preAddHandler:Y})},check:null===e||void 0===e?void 0:e.checked})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:ce,maxHeight:re}},Object(b.l)({isLoading:k,summary:I})?"No Data":i.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),i.a.createElement(y.a,{setSelectAll:function(){return _(!Z)},selectAll:Z}),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/repacking/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),i.a.createElement(h.b,{to:"/inventory-entry/repacking/weight-entry",onClick:function(e){return 0===t&&(null===Q||void 0===Q?void 0:Q.length)>0||e.preventDefault()}},i.a.createElement("button",{onClick:function(){return 0===t&&(null===Q||void 0===Q?void 0:Q.length)>0?Object(b.a)({dispatch:n,moduleEntry:Q,moduleSummary:w,moduleName:"repack"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(0===t&&(null===Q||void 0===Q?void 0:Q.length)>0?"bg-green":"bg-lineGrey")},0===(null===Q||void 0===Q?void 0:Q.length)||0===t&&(null===Q||void 0===Q?void 0:Q.length)>0?"Update":"Processing...")))))}))},657:function(e,t,n){},660:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),l=n(654),r=(n(657),n(56)),c=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,b=e.actionButtonTitle,g=void 0===b?"Submit":b,h=e.cancelButtonClass,y=void 0===h?"bg-background":h,E=e.actionButtonClass,k=void 0===E?"bg-background":E,w=e.actionButtonEvent,x=void 0===w?null:w,j=e.colorText,N=void 0===j?"red":j,O=e.msg1,S=void 0===O?null:O,A=e.msg2,I=void 0===A?null:A,C=e.onCloseFunction,U=void 0===C?null:C,B=e.refreshOnCancel,D=void 0===B||B,L=e.setIsSuccess,T=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!1);var P=Object(o.useState)(d),W=Object(a.a)(P,2),M=W[0],R=W[1];return Object(o.useEffect)((function(){R(d)}),[d]),Object(o.useEffect)((function(){}),[M]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},i.a.createElement(l.B,{className:"".concat(M?null:"d-none")},i.a.createElement(l.f,null,i.a.createElement(l.s,{show:M,closeOnBackdrop:!1,onClose:function(){R(!1),"function"===typeof L&&L({success:null,name:null}),T({type:c.k,status:null}),U&&U()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),"function"===typeof L&&L({success:null,name:null}),T({type:c.k,status:null}),U&&U()}})),i.a.createElement(l.v,{className:"px-5 pt-5 border-none"},i.a.createElement(l.w,{className:"text LatoBold ".concat(N)},v," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(l.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},I)),i.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?i.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){D?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:R,parentOncCloseFunction:U}),T({type:c.k,status:null})}},f):null,g?i.a.createElement(l.d,{className:"".concat(k," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){x?(x(),R(!1)):R(!1)}},g):null," "))))}},661:function(e,t,n){"use strict";var a=n(659),o=n(4),i=n(653),l=n(1),r=n.n(l),c=n(679);t.a=function(e){var t,n,s,u=e.isEmpty,d=e.title,m=e.placeholder,v=e.options,p=e.selectedValue,f=e.showTitle,b=e.width,g=e.className,h=e.entryListIdx,y=e.onChangeDropdown,E=e.show,k=e.poListIdx,w=e.isDisabled,x=e.style,j=e.noMarginBottom,N=e.resetName,O=e.isMulti,S=e.hideResetOpt,A=Object(l.useState)(),I=Object(i.a)(A,2),C=I[0],U=I[1];Object(l.useEffect)((function(){"empty"===p&&U(!0)}),[p,u]);var B=!!u&&function(e,t){t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},D=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(h).concat(k)),L=null===D||void 0===D?void 0:D.getBoundingClientRect();Object(l.useEffect)((function(){L=null===D||void 0===D?void 0:D.getBoundingClientRect()}),[C]);var T=document.documentElement.clientWidth,P=[{label:"-".concat(N||d,"-"),value:null}];v&&(P=[].concat(Object(a.a)(P),Object(a.a)(v))),S&&(P=P.filter((function(e){return null===e||void 0===e?void 0:e.value})));var W=(null===(n=L)||void 0===n?void 0:n.bottom)>600?"top":"bottom";return T<=500&&(W=(null===(s=L)||void 0===s?void 0:s.bottom)>400?"top":"bottom"),r.a.createElement("div",{style:x,className:"mr-0 ".concat(x?null:"mr-lg-3"," ").concat(j?null:"mb-3"," ").concat(b," ").concat(g," ").concat(E?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(f?null:"d-none")},d),r.a.createElement(c.a,{isMulti:O,isSearchable:!(T<500),isDisabled:w||!1,id:"dropdown".concat(h).concat(k),value:((null===p||void 0===p?void 0:p.value)||!!(null===p||void 0===p?void 0:p.length))&&p,menuIsOpen:C,menuPortal:!0,placeholder:N||m,options:P,onMenuOpen:function(){return U(!0)},onMenuClose:function(){return U(!1)},onChange:function(e){y(e),U(!1)},menuPortalTarget:document.body,maxMenuHeight:200,menuPlacement:"".concat(W),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:B,option:function(e,t){var n=t.isFocused,a=t.isSelected;t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},665:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),l=n(674),r=n.n(l),c=n(114),s=n(654);t.a=function(e){var t,n,l,u,d=e.selectAll,m=e.img,v=void 0===m?r.a:m,p=e.skuDescription,f=void 0===p?"SKU Description":p,b=e.skuNumber,g=void 0===b?"1001":b,h=e.uomLabel,y=void 0===h?"weight":h,E=e.uomValue,k=void 0===E?100.3:E,w=e.uom,x=void 0===w?"KG":w,j=e.isCheckedHandler,N=void 0===j?null:j,O=e.check,S=void 0!==O&&O,A=e.idx,I=void 0===A?0:A,C=e.singleView,U=e.setCreatePo,B=e.target,D=e.targetMovementProgress,L=e.targetRepackProgress,T=e.moduleName,P=e.setFromBarcode,W=document.documentElement.clientWidth<=500,M=i.a.useState(S),R=Object(a.a)(M,2),H=R[0],K=R[1],q=function(){K(!0),N(!0),"function"===typeof U&&U({show:!0,skuNumber:g}),"function"===typeof P&&P(!1)},z=!!B||"d-none",V=0,F=0;(null===L||void 0===L?void 0:L.length)&&"repack"===T&&(V=null===(t=L[0])||void 0===t?void 0:t.totalPack,F=null===(n=L[0])||void 0===n?void 0:n.totalUom);(null===D||void 0===D?void 0:D.length)&&"repack"!==T&&(V=null===(l=D[0])||void 0===l?void 0:l.totalMove,F=null===(u=D[0])||void 0===u?void 0:u.totalUos);return Object(o.useEffect)((function(e){d&&(K(!0),N(!0))}),[d]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&q()},tabindex:"0",key:I,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(W?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(H?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(W?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){K(!H),N&&N(!H)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(H?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:v,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},f),i.a.createElement("div",{className:"text fontSizeTitle"},g))),i.a.createElement("hr",{className:"".concat(W?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(W?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(W?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(z," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(V,"/").concat(F),i.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(V/F*100),"%)"))),i.a.createElement(s.A,{value:V,max:F,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(z)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(W?"d-none":null)},"Total ".concat("KG"===x.toUpperCase()?y.toUpperCase():x.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(k)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},x)),i.a.createElement("div",{onClick:q,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(C?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},667:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},669:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),l=n(56),r=n(661),c=n(670),s=n.n(c);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,c=(e.textSearch,e.searchHandler),u=void 0===c?null:c,d=e.barcodeScanner,m=e.filter,v=void 0===m?"":m,p=(e.width,e.className,e.filterDropdown),f=void 0===p?null:p,b=(e.value,e.showScanner),g=e.areaId,h=e.setAreaId,y=e.areaDestination,E=e.setAreaDestination,k=e.moduleName,w=e.setSearch,x=e.category,j=e.setCategory,N=Object(o.useState)(),O=Object(a.a)(N,2),S=O[0],A=void 0!==S&&S,I=O[1],C="",U="";A?(C="Show Filter",U=""):(C="Hide Filter",U=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var B=Object(o.useState)(""),D=Object(a.a)(B,2),L=D[0],T=D[1],P=Object(l.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){T(e.target.value),"function"===typeof w&&w(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u(L)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"},i.a.createElement(r.a,{noMarginBottom:!0,onChangeDropdown:function(e){"function"===typeof j&&j(e)},selectedValue:x,options:P,className:"w-30",placeholder:"Select Category",title:"Categories",show:!0})),i.a.createElement("div",{className:"mr-0 mr-md-3"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,l=e.moduleName;if("stockMovement"!==l)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===l){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:g,areaDestination:y,setAreaId:h,setAreaDestination:E,barcodeScanner:d,moduleName:k})},className:"pointer ".concat(b?null:"d-none"),src:s.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},v?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:A,setFilterShow:I})}},i.a.createElement("div",{className:"filter-text"},C)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),U)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return u(L)}},"Search"))),i.a.createElement("div",null,A?null:i.a.createElement("div",{className:"w-100"}," ",f," ")))}},670:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},692:function(e,t,n){},713:function(e,t,n){"use strict";var a=n(1),o=n.n(a);n(114),n(714);t.a=function(e){var t=e.setSelectAll,n=e.selectAll;return o.a.createElement("div",{className:"d-flex flex-column flex-lg-row w-100 border border-soft-green rounded flex-row align-items-center justify-content-start mb-3 p-3 pl-4 bg-white"},o.a.createElement("div",{className:"w-100 d-flex align-items-center"},o.a.createElement("div",{onClick:function(){return t(!0)},style:{cursor:"pointer",minHeight:"23px",minWidth:"23px",maxHeight:"23px",maxWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(n?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),"Select All"))}},714:function(e,t,n){},763:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b}));var a=n(4),o=n(65),i=n.n(o),l=n(70),r=n(659),c=n(89),s=n(21),u=n(656),d=n(664),m=n(114),v=n(658),p=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,m,v,p,f,b,g,h,y,E,k,w,x,j,N,O,S,A;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,m=t.dispatch,v=t.setLocalEntryData,p=t.moduleName,f=t.moduleSummary,b=t.moduleEntry,g=t.warehouseUuid,h=t.areaId,y=t.areaDestinationId,E=Object(r.a)(f),[],E[a].checked=o,m(Object(l.a)({type:s.c},"".concat(p,"summaryData"),E)),k=null===E||void 0===E?void 0:E.filter((function(e){if(e.checked)return e})),w=[],b&&b.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&w.push(t.skuUuid)})),x=[],j=k.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(d.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(u.d)({skuId:t.skuUuid,warehouseId:g,uom:t.unitOfMeassures});case 8:(o=e.sent)&&(l=[{itemList:[],expiryMs:null,inBoundyMs:null,expiryDate:null,inboundDate:null,skuUuid:t.skuUuid,uom:t.unitOfMeassures,packSize:t.packSize,category:t.category,initialWeight:Number.isInteger(null===o||void 0===o?void 0:o.data.totalWeight)?parseInt(null===o||void 0===o?void 0:o.data.totalWeight):parseFloat(null===o||void 0===o?void 0:o.data.totalWeight),targetRepacks:null===o||void 0===o?void 0:o.data.targetRepacks}],t.poList=l,x.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=12,Promise.all(j);case 12:e.sent,N=[],b&&(N=b.jobPost.list.concat(x)),b||(N=x),(O=E[a]).checked||(N=N.filter((function(e){return e.skuUuid!==O.skuUuid}))),S=null===b||void 0===b||null===(n=b.jobPost)||void 0===n?void 0:n.id,A={jobPost:{id:S||0,warehouseSource:g,warehouseDestination:g,areaSource:parseInt(null===h||void 0===h?void 0:h.value),areaName:null===h||void 0===h?void 0:h.label,areaDestination:parseInt(null===y||void 0===y?void 0:y.value),areaDestinationName:null===y||void 0===y?void 0:y.label,list:N}},0===N.length&&m(Object(l.a)({type:s.b},"".concat(p,"EntryData"),null)),v(A);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,l,s,v,p,f,b,g,h,y,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,t.dispatch,t.moduleName,o=t.moduleSummary,l=t.moduleEntry,s=t.warehouseUuid,t.areaId,v=t.preAddHandler,(p=Object(r.a)(o))[n].checked=a,f=null===p||void 0===p?void 0:p.filter((function(e){if(e.checked)return e})),b=[],l&&l.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&b.push(t.skuUuid)})),g=[],h=f.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(d.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(u.d)({skuId:t.skuUuid,warehouseId:s,uom:t.unitOfMeassures});case 8:(o=e.sent)&&(l=[{itemList:[],expiryMs:null,inBoundyMs:null,expiryDate:null,inboundDate:null,skuUuid:t.skuUuid,uom:t.unitOfMeassures,packSize:t.packSize,category:t.category,initialWeight:Object(m.e)(null===o||void 0===o?void 0:o.data.totalWeight)?Object(m.e)(null===o||void 0===o?void 0:o.data.totalWeight):null===o||void 0===o?void 0:o.data.totalWeight,targetRepacks:null===o||void 0===o?void 0:o.data.targetRepacks}],t.poList=l,t.isNewItem=!0,g.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(h);case 10:e.sent,y=[],l&&(y=l.concat(g)),l||(y=g),(E=p[n]).checked||(y=y.filter((function(e){return e.skuUuid!==E.skuUuid}))),v(y);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.moduleEntry,n=e.moduleName,o=e.setConfirmation,i=e.dispatch,r=e.setIsRequired,c=e.setInvalidThreshold,u=[],d=Object(a.a)({},t),p=[],f=t.jobPost.list.map((function(e){var t=e.originalUom;return e.poList.map((function(n){var a=Object(v.q)({moduleList:n.itemList}),o=n.packSize,i=n.targetRepacks,l=!!(null===i||void 0===i?void 0:i.length);return n.itemList.map((function(i){var r,c,s=i.qty,d=i.grade,v=i.pack,f=i.note,b=i.slot;if(0!=s&&!isNaN(s)||null!==(null===d||void 0===d?void 0:d.value))if("Waste"===(null===i||void 0===i||null===(r=i.grade)||void 0===r?void 0:r.label)||"Semi Waste"===(null===i||void 0===i||null===(c=i.grade)||void 0===c?void 0:c.label))isNaN(s)||0==s||""===s||null===s?i.qtyIsEmpty=!0:i.qtyIsEmpty=!1,(null===d||void 0===d?void 0:d.value)?i.gradeIsEmpty=!1:i.gradeIsEmpty=!0,"Waste"!==(null===d||void 0===d?void 0:d.label)||f?i.noteIsEmpty=!1:i.noteIsEmpty=!0;else{var g,h=e.gradeList.filter((function(e){return e.value===d.value}))[0].multiplier,y="gram"==(null===t||void 0===t?void 0:t.toLowerCase())?o/1e3:o,E=s/v;if(E-=y/h,E/=y/h,(E*=100)>=51||E<=-20?(i.packThresholdIsEmpty=!0,p.push(!0)):(i.packThresholdIsEmpty=!1,p.push(!1)),i.packThreshold=Object(m.e)(E),isNaN(s)||0==s||""===s||null===s?i.qtyIsEmpty=!0:i.qtyIsEmpty=!1,isNaN(v)||0==v||""===v||null===v?i.packIsEmpty=!0:i.packIsEmpty=!1,(null===d||void 0===d?void 0:d.value)?i.gradeIsEmpty=!1:i.gradeIsEmpty=!0,"Waste"!==(null===d||void 0===d?void 0:d.label)||f?i.noteIsEmpty=!1:i.noteIsEmpty=!0,l)(null===b||void 0===b?void 0:b.value)||"0"===(null===b||void 0===b||null===(g=b.value)||void 0===g?void 0:g.toString())?i.slotIsEmpty=!1:i.slotIsEmpty=!0}else i.qtyIsEmpty=!1,i.gradeIsEmpty=!1,i.noteIsEmpty=!1,i.packIsEmpty=!1,i.packThresholdIsEmpty=!1;return i.qtyIsEmpty||(a>n.initialWeight?i.qtyIsEmpty=!0:i.qtyIsEmpty=!1),(null===i||void 0===i?void 0:i.qtyIsEmpty)||(null===i||void 0===i?void 0:i.gradeIsEmpty)||i.packIsEmpty||(null===i||void 0===i?void 0:i.noteIsEmpty)||(null===i||void 0===i?void 0:i.qtyToCompareIsEmpty)||(null===i||void 0===i?void 0:i.slotIsEmpty)?u.push(!1):u.push(!0),i})),n})),e})),b=!1;f.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(b=!0)}))}))})),d.jobPost.list=f,i(Object(l.a)({type:s.b},"".concat(n,"EntryData"),d)),!u.includes(!1)&&b?r(!1):r(!0),p.includes(!0)?c(!0):c(!1),u.includes(!1)||!b||p.includes(!0)?o({show:!1,name:null}):o({show:!0,name:"submit"})}}}]);
//# sourceMappingURL=39.4dd79f01.chunk.js.map