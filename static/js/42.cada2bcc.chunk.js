(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[42],{1226:function(e,t,n){"use strict";n.r(t);var a=n(659),o=n(1),i=n.n(o),l=n(19),r=n(56),c=n(667),s=n(675),u=n(662),d=n(670),m=n(671),v=n(673),p=n.n(v),f=(n(731),n(771)),b=n(664),h=n(666),g=n(168);t.default=Object(l.i)((function(e){var t=Object(r.d)((function(e){return e.thereAreRequest})),n=Object(r.c)(),v=(Object(l.g)(),Object(r.d)((function(e){return e.stockTransferFirstLoad})),Object(r.d)((function(e){return e.user.warehouseUuid}))),y=Object(r.d)((function(e){return e.status})),E=Object(r.d)((function(e){return e.isLoading})),w=Object(r.d)((function(e){return e.stockTransferEntryData})),k=Object(b.m)({moduleEntry:w,moduleName:"stockTransfer"}),j=Object(r.d)((function(e){return e.warehouseArea})),x=Object(r.d)((function(e){return e.areaId})),N=Object(r.d)((function(e){return e.stockTransferAddSku})),O=Object(o.useState)(null),S=Object(a.a)(O,2),A=S[0],I=S[1],U=Object(o.useState)(0),C=Object(a.a)(U,2),D=(C[0],C[1]),B=Object(o.useState)(!1),T=Object(a.a)(B,2),L=T[0],P=(T[1],Object(o.useState)(null)),W=Object(a.a)(P,2),M=W[0],R=W[1],K=Object(o.useState)(!0),q=Object(a.a)(K,2),V=q[0],H=q[1],z=Object(o.useState)([]),F=Object(a.a)(z,2),G=F[0],Q=F[1],Y=Object(o.useState)(),J=Object(a.a)(Y,2),X=J[0],Z=J[1];if(Object(o.useEffect)((function(){Object(d.c)({dispatch:n}),Object(d.e)({dispatch:n,warehouseUuid:v}),D(k)}),[]),w&&void 0!==w||e.history.push("/inventory-entry/stock-transfer"),!0===V&&void 0!==w){var _,$;R(w.jobPost.list.map((function(e,t){return e.skuNumber})));var ee={};ee.value=null===w||void 0===w||null===(_=w.jobPost)||void 0===_?void 0:_.areaSource,ee.label=null===w||void 0===w||null===($=w.jobPost)||void 0===$?void 0:$.areaName,Object(b.n)({selected:ee,dispatch:n}),H(!1)}var te=Object(o.useState)(),ne=Object(a.a)(te,2),ae=ne[0],oe=ne[1],ie=document.documentElement.clientHeight,le=ie-290,re=ie-290;return!1===N&&(null===w||void 0===w?void 0:w.jobPost.list.length)>0&&L&&e.history.push("/inventory-entry/weight-entry"),i.a.createElement("div",{className:"w-100  stock-take-summary"},i.a.createElement(h.a,{status:y}),i.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},i.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},i.a.createElement(c.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:j,onChangeDropdown:function(e){return Object(b.n)({selected:e,dispatch:n})},selectedValue:x,showTitle:!0}))),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all mb-3"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",i.a.createElement("span",{className:"green"},"(".concat(G.length," Selected SKU").concat(G.length>1?"s":"",")"))))),i.a.createElement(s.a,{category:ae,setCategory:oe,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:ae,dispatch:n,desc:e,warehouseUuid:v,areaId:x,setModule:I,selectedSkusNumber:M},Z(e))}}),i.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===A||void 0===A?void 0:A.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:le,maxHeight:le}},(null===A||void 0===A?void 0:A.length)?null===A||void 0===A?void 0:A.map((function(e,t){return i.a.createElement(m.a,{key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(f.a)({idx:t,checked:e,dispatch:n,moduleSummary:A,moduleEntry:G,moduleName:"stockTransfer",warehouseUuid:v,areaId:x,preAddHandler:Q})},check:null===e||void 0===e?void 0:e.checked})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:re,maxHeight:re}},Object(b.l)({isLoading:E,summary:A})?x&&0===(null===A||void 0===A?void 0:A.length)?i.a.createElement("div",null,"Sorry, we couldn't find any matches for '",i.a.createElement("span",{className:"LatoBold"},X),"' in ",null===x||void 0===x?void 0:x.label," area.",i.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":i.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/stock-transfer/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),i.a.createElement(g.b,{to:"/inventory-entry/stock-transfer/weight-entry",onClick:function(e){return 0===t&&(null===G||void 0===G?void 0:G.length)>0||e.preventDefault()}},i.a.createElement("button",{onClick:function(){return 0===t&&(null===G||void 0===G?void 0:G.length)>0?Object(b.a)({dispatch:n,moduleEntry:G,moduleSummary:w,moduleName:"stockTransfer"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(0===t&&(null===G||void 0===G?void 0:G.length)>0?"bg-green":"bg-lineGrey")},0===(null===G||void 0===G?void 0:G.length)||0===t&&(null===G||void 0===G?void 0:G.length)>0?"Update":"Processing...")))))}))},663:function(e,t,n){},666:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(660),r=(n(663),n(56)),c=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,b=e.actionButtonTitle,h=void 0===b?"Submit":b,g=e.cancelButtonClass,y=void 0===g?"bg-background":g,E=e.actionButtonClass,w=void 0===E?"bg-background":E,k=e.actionButtonEvent,j=void 0===k?null:k,x=e.colorText,N=void 0===x?"red":x,O=e.msg1,S=void 0===O?null:O,A=e.msg2,I=void 0===A?null:A,U=e.onCloseFunction,C=void 0===U?null:U,D=e.refreshOnCancel,B=void 0===D||D,T=e.setIsSuccess,L=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",h="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",h="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",h="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",h="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1);var P=Object(o.useState)(d),W=Object(a.a)(P,2),M=W[0],R=W[1];return Object(o.useEffect)((function(){R(d)}),[d]),Object(o.useEffect)((function(){}),[M]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},i.a.createElement(l.B,{className:"".concat(M?null:"d-none")},i.a.createElement(l.f,null,i.a.createElement(l.s,{show:M,closeOnBackdrop:!1,onClose:function(){R(!1),"function"===typeof T&&T({success:null,name:null}),L({type:c.k,status:null}),C&&C()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),"function"===typeof T&&T({success:null,name:null}),L({type:c.k,status:null}),C&&C()}})),i.a.createElement(l.v,{className:"px-5 pt-5 border-none"},i.a.createElement(l.w,{className:"text LatoBold ".concat(N)},v," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(l.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},I)),i.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?i.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){B?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:R,parentOncCloseFunction:C}),L({type:c.k,status:null})}},f):null,h?i.a.createElement(l.d,{className:"".concat(w," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){j?(j(),R(!1)):R(!1)}},h):null," "))))}},667:function(e,t,n){"use strict";var a=n(665),o=n(4),i=n(659),l=n(1),r=n.n(l),c=n(685);t.a=function(e){var t,n,s,u=e.isEmpty,d=e.title,m=e.placeholder,v=e.options,p=e.selectedValue,f=e.showTitle,b=e.width,h=e.className,g=e.entryListIdx,y=e.onChangeDropdown,E=e.show,w=e.poListIdx,k=e.isDisabled,j=e.style,x=e.noMarginBottom,N=e.resetName,O=e.isMulti,S=e.hideResetOpt,A=Object(l.useState)(),I=Object(i.a)(A,2),U=I[0],C=I[1];Object(l.useEffect)((function(){"empty"===p&&C(!0)}),[p,u]);var D=!!u&&function(e,t){t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},B=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(w)),T=null===B||void 0===B?void 0:B.getBoundingClientRect();Object(l.useEffect)((function(){T=null===B||void 0===B?void 0:B.getBoundingClientRect()}),[U]);var L=document.documentElement.clientWidth,P=[{label:"-".concat(N||d,"-"),value:null}];v&&(P=[].concat(Object(a.a)(P),Object(a.a)(v))),S&&(P=P.filter((function(e){return null===e||void 0===e?void 0:e.value})));var W=(null===(n=T)||void 0===n?void 0:n.bottom)>600?"top":"bottom";return L<=500&&(W=(null===(s=T)||void 0===s?void 0:s.bottom)>400?"top":"bottom"),r.a.createElement("div",{style:j,className:"mr-0 ".concat(j?null:"mr-lg-3"," ").concat(x?null:"mb-3"," ").concat(b," ").concat(h," ").concat(E?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(f?null:"d-none")},d),r.a.createElement(c.a,{isMulti:O,isSearchable:!(L<500),isDisabled:k||!1,id:"dropdown".concat(g).concat(w),value:((null===p||void 0===p?void 0:p.value)||!!(null===p||void 0===p?void 0:p.length))&&p,menuIsOpen:U,menuPortal:!0,placeholder:N||m,options:P,onMenuOpen:function(){return C(!0)},onMenuClose:function(){return C(!1)},onChange:function(e){y(e),C(!1)},menuPortalTarget:document.body,maxMenuHeight:200,menuPlacement:"".concat(W),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:D,option:function(e,t){var n=t.isFocused,a=t.isSelected;t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},671:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(680),r=n.n(l),c=n(116),s=n(660);t.a=function(e){var t,n,l,u,d=e.selectAll,m=e.img,v=void 0===m?r.a:m,p=e.skuDescription,f=void 0===p?"SKU Description":p,b=e.skuNumber,h=void 0===b?"1001":b,g=e.uomLabel,y=void 0===g?"weight":g,E=e.uomValue,w=void 0===E?100.3:E,k=e.uom,j=void 0===k?"KG":k,x=e.isCheckedHandler,N=void 0===x?null:x,O=e.check,S=void 0!==O&&O,A=e.idx,I=void 0===A?0:A,U=e.singleView,C=e.setCreatePo,D=e.target,B=e.targetMovementProgress,T=e.targetRepackProgress,L=e.moduleName,P=e.setFromBarcode,W=document.documentElement.clientWidth<=500,M=i.a.useState(S),R=Object(a.a)(M,2),K=R[0],q=R[1],V=function(){q(!0),N(!0),"function"===typeof C&&C({show:!0,skuNumber:h}),"function"===typeof P&&P(!1)},H=!!D||"d-none",z=0,F=0;(null===T||void 0===T?void 0:T.length)&&"repack"===L&&(z=null===(t=T[0])||void 0===t?void 0:t.totalPack,F=null===(n=T[0])||void 0===n?void 0:n.totalUom);(null===B||void 0===B?void 0:B.length)&&"repack"!==L&&(z=null===(l=B[0])||void 0===l?void 0:l.totalMove,F=null===(u=B[0])||void 0===u?void 0:u.totalUos);return console.log(z/F*100),Object(o.useEffect)((function(e){d&&(q(!0),N(!0))}),[d]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&V()},tabindex:"0",key:I,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(W?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(K?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(W?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){q(!K),N&&N(!K)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(K?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:v,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},f),i.a.createElement("div",{className:"text fontSizeTitle"},h))),i.a.createElement("hr",{className:"".concat(W?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(W?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(W?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(H," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(z,"/").concat(F),i.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(z/F*100),"%)"))),i.a.createElement(s.A,{value:z,max:F,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(H)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(W?"d-none":null)},"Total ".concat("KG"===j.toUpperCase()?y.toUpperCase():j.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(w)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},j)),i.a.createElement("div",{onClick:V,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(U?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},673:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},675:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(56),r=n(667),c=n(676),s=n.n(c);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,c=(e.textSearch,e.searchHandler),u=void 0===c?null:c,d=e.barcodeScanner,m=e.filter,v=void 0===m?"":m,p=(e.width,e.className,e.filterDropdown),f=void 0===p?null:p,b=(e.value,e.showScanner),h=e.areaId,g=e.setAreaId,y=e.areaDestination,E=e.setAreaDestination,w=e.moduleName,k=e.setSearch,j=e.category,x=e.setCategory,N=Object(o.useState)(),O=Object(a.a)(N,2),S=O[0],A=void 0!==S&&S,I=O[1],U="",C="";A?(U="Show Filter",C=""):(U="Hide Filter",C=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var D=Object(o.useState)(""),B=Object(a.a)(D,2),T=B[0],L=B[1],P=Object(l.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){L(e.target.value),"function"===typeof k&&k(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u(T)}(e)}}),i.a.createElement("div",{className:"mr-3 w-100 d-flex justify-content-end"},i.a.createElement(r.a,{noMarginBottom:!0,onChangeDropdown:function(e){"function"===typeof x&&x(e)},selectedValue:j,options:P,style:{},placeholder:"Select Category",title:"Categories",show:!0})),i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,l=e.moduleName;if("stockMovement"!==l)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===l){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:h,areaDestination:y,setAreaId:g,setAreaDestination:E,barcodeScanner:d,moduleName:w})},className:"pointer ".concat(b?null:"d-none"),src:s.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},v?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:A,setFilterShow:I})}},i.a.createElement("div",{className:"filter-text"},U)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),C)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return u(T)}},"Search"))),i.a.createElement("div",null,A?null:i.a.createElement("div",{className:"w-100"}," ",f," ")))}},676:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},731:function(e,t,n){},771:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g}));var a=n(4),o=n(65),i=n.n(o),l=n(71),r=n(665),c=n(91),s=n(22),u=n.n(s),d=n(21),m=n(662),v=n(670),p=n(116),f=n(664),b=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,s,f,b,h,g,y,E,w,k,j,x,N,O,S,A,I,U,C;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,s=t.dispatch,f=t.setLocalEntryData,b=t.moduleName,h=t.moduleSummary,g=t.moduleEntry,y=t.warehouseUuid,E=t.warehouseIdDestination,w=t.areaId,k=t.areaIdDesposition,(j=Object(r.a)(h))[a].checked=o,s(Object(l.a)({type:d.c},"".concat(b,"summaryData"),j)),x=null===j||void 0===j?void 0:j.filter((function(e){if(e.checked)return e})),N=[],g&&g.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&N.push(t.skuUuid)})),O=[],S=x.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:y,dispatch:s,areaId:w.value,moduleName:b});case 8:(o=e.sent)&&(l=o.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=l,O.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(S);case 11:e.sent,A=[],g&&(A=g.jobPost.list.concat(O)),g||(A=O),(I=j[a]).checked||(A=A.filter((function(e){return e.skuUuid!==I.skuUuid}))),U=null===g||void 0===g||null===(n=g.jobPost)||void 0===n?void 0:n.id,C={jobPost:{id:U||0,warehouseSource:y,warehouseDestination:null===E||void 0===E?void 0:E.value,warehouseDestinationName:null===E||void 0===E?void 0:E.label,areaSource:parseInt(null===w||void 0===w?void 0:w.value),areaName:null===w||void 0===w?void 0:w.label,areaDestination:parseInt(null===k||void 0===k?void 0:k.value),areaDestinationName:null===k||void 0===k?void 0:k.label,list:A}},0===A.length&&s(Object(l.a)({type:d.b},"".concat(b,"EntryData"),null)),f(C);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,l,s,d,f,b,h,g,y,E,w,k,j,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,o=t.dispatch,l=t.moduleName,s=t.moduleSummary,d=t.moduleEntry,f=t.warehouseUuid,b=t.areaId,h=t.preAddHandler,(g=Object(r.a)(s))[n].checked=a,y=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),E=[],d&&d.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&E.push(t.skuUuid)})),w=[],k=y.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:f,dispatch:o,areaId:b.value,moduleName:l});case 8:(r=e.sent)&&(c=r.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=c,t.isNewItem=!0,w.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(k);case 10:e.sent,j=[],d&&(j=d.concat(w)),d||(j=w),(x=g[n]).checked||(j=j.filter((function(e){return e.skuUuid!==x.skuUuid}))),h(j);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.moduleEntry,n=e.moduleName,o=e.setConfirmation,i=e.dispatch,r=e.setIsRequired,c=[],s=Object(a.a)({},t),u=t.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(f.q)({moduleList:e.itemList});return e.itemList.map((function(n){var a,o,i=n.qty,l=n.grade,r=n.ripeness;n.note;"kg"===e.uom?0!=i&&!isNaN(i)||null!==(null===l||void 0===l?void 0:l.value)?"Waste"===(null===n||void 0===n||null===(a=n.grade)||void 0===a?void 0:a.label)||"Semi Waste"===(null===n||void 0===n||null===(o=n.grade)||void 0===o?void 0:o.label)?(isNaN(i)||0==i||""===i||null===i?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,null===l||void 0===l||l.value,n.gradeIsEmpty=!1,null===l||void 0===l||l.label,n.noteIsEmpty=!1):(isNaN(i)||0==i||""===i||null===i?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,null===l||void 0===l||l.value,n.gradeIsEmpty=!1,null===r||void 0===r||r.value,n.ripenessIsEmpty=!1,null===l||void 0===l||l.label,n.noteIsEmpty=!1):(n.qtyIsEmpty=!1,n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1,n.noteIsEmpty=!1):isNaN(i)||0==i||""===i||null===i?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1;return n.qtyIsEmpty||(t>e.initialWeight?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.gradeIsEmpty)||(null===n||void 0===n?void 0:n.ripenessIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?c.push(!1):c.push(!0),n})),e})),e})),m=!1;u.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(m=!0)}))}))})),s.jobPost.list=u,i(Object(l.a)({type:d.b},"".concat(n,"EntryData"),s)),!c.includes(!1)&&m?o({show:!0,name:"submit"}):(o({show:!1,name:null}),r(!0))}}}]);
//# sourceMappingURL=42.cada2bcc.chunk.js.map