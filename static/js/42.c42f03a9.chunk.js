(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[42],{1192:function(e,t,n){"use strict";n.r(t);var a=n(653),o=n(1),i=n.n(o),l=n(56),r=n(20),c=n(660),s=n(669),u=n(657),d=n(667),m=n(664),v=n(666),p=n.n(v),f=(n(715),n(763)),b=n(656),h=n(662),g=n(166);t.default=Object(r.i)((function(e){var t=Object(l.d)((function(e){return e.thereAreRequest})),n=Object(l.c)(),r=Object(l.d)((function(e){return e.user.warehouseUuid})),v=Object(l.d)((function(e){return e.status})),y=Object(l.d)((function(e){return e.isLoading})),w=Object(l.d)((function(e){return e.wasteEntryData})),E=Object(b.r)({moduleEntry:w,moduleName:"waste"}),k=Object(l.d)((function(e){return e.warehouseArea})),x=Object(l.d)((function(e){return e.areaId})),N=Object(l.d)((function(e){return e.wasteAddSku})),j=Object(o.useState)(null),O=Object(a.a)(j,2),S=O[0],A=O[1],U=Object(o.useState)(0),C=Object(a.a)(U,2),I=(C[0],C[1]),D=Object(o.useState)(null),B=Object(a.a)(D,2),P=B[0],T=B[1],L=Object(o.useState)(!0),W=Object(a.a)(L,2),M=W[0],K=W[1],R=Object(o.useState)([]),V=Object(a.a)(R,2),H=V[0],q=V[1],z=Object(o.useState)(),F=Object(a.a)(z,2),G=F[0],Q=F[1];if(Object(o.useEffect)((function(){Object(d.d)({dispatch:n}),Object(d.f)({dispatch:n,warehouseUuid:r}),I(E)}),[]),w&&void 0!==w||e.history.push("/stockentry/stock-take"),!0===M&&void 0!==w){var Y,J;T(w.jobPost.list.map((function(e,t){return e.skuNumber})));var X={};X.value=null===w||void 0===w||null===(Y=w.jobPost)||void 0===Y?void 0:Y.areaSource,X.label=null===w||void 0===w||null===(J=w.jobPost)||void 0===J?void 0:J.areaName,Object(b.s)({selected:X,dispatch:n}),K(!1)}var Z=Object(o.useState)(),_=Object(a.a)(Z,2),$=_[0],ee=_[1],te=document.documentElement.clientHeight,ne=te-290,ae=te-290;return!1===N&&(null===w||void 0===w?void 0:w.jobPost.list.length)>0&&e.history.push("/inventory-entry/weight-entry"),i.a.createElement("div",{className:"w-100  stock-take-summary"},i.a.createElement(h.a,{status:v}),i.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},i.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},i.a.createElement(c.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:k,onChangeDropdown:function(e){return Object(b.s)({selected:e,dispatch:n})},selectedValue:x,showTitle:!0}))),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all mb-3"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",i.a.createElement("span",{className:"green"},"(".concat(H.length," Selected SKU").concat(H.length>1?"s":"",")"))))),i.a.createElement(s.a,{category:$,setCategory:ee,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:$,dispatch:n,desc:e,warehouseUuid:r,areaId:x,setModule:A,selectedSkusNumber:P,transaction:"waste"},Q(e))}}),i.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===S||void 0===S?void 0:S.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:ne,maxHeight:ne}},(null===S||void 0===S?void 0:S.length)?null===S||void 0===S?void 0:S.map((function(e,t){return i.a.createElement(m.a,{key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(f.a)({idx:t,checked:e,dispatch:n,moduleSummary:S,moduleEntry:H,moduleName:"waste",warehouseUuid:r,areaId:x,preAddHandler:q})},check:null===e||void 0===e?void 0:e.checked})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:ae,maxHeight:ae}},Object(b.q)({isLoading:y,summary:S})?x&&0===(null===S||void 0===S?void 0:S.length)?i.a.createElement("div",null,"Sorry, we couldn't find any matches for '",i.a.createElement("span",{className:"LatoBold"},G),"' in ",null===x||void 0===x?void 0:x.label," area.",i.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":i.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/waste/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),i.a.createElement(g.b,{to:"/inventory-entry/waste/weight-entry",onClick:function(e){return 0===t&&(null===H||void 0===H?void 0:H.length)>0||e.preventDefault()}},i.a.createElement("button",{onClick:function(){return 0===t&&(null===H||void 0===H?void 0:H.length)>0?Object(b.a)({dispatch:n,moduleEntry:H,moduleSummary:w,moduleName:"waste"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(0===t&&(null===H||void 0===H?void 0:H.length)>0?"bg-green":"bg-lineGrey")},0===(null===H||void 0===H?void 0:H.length)||0===t&&(null===H||void 0===H?void 0:H.length)>0?"Update":"Processing...")))))}))},658:function(e,t,n){},660:function(e,t,n){"use strict";var a=n(659),o=n(4),i=n(653),l=n(1),r=n.n(l),c=n(677);t.a=function(e){var t,n,s=e.isEmpty,u=e.title,d=e.placeholder,m=e.options,v=e.selectedValue,p=e.showTitle,f=e.width,b=e.className,h=e.entryListIdx,g=e.onChangeDropdown,y=e.show,w=e.poListIdx,E=e.isDisabled,k=e.style,x=e.noMarginBottom,N=e.resetName,j=e.isMulti,O=e.hideResetOpt,S=Object(l.useState)(),A=Object(i.a)(S,2),U=A[0],C=A[1];Object(l.useEffect)((function(){"empty"===v&&C(!0)}),[v,s]);var I=!!s&&function(e){return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},D=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(h).concat(w)),B=null===D||void 0===D?void 0:D.getBoundingClientRect();Object(l.useEffect)((function(){B=null===D||void 0===D?void 0:D.getBoundingClientRect()}),[U]);var P=document.documentElement.clientWidth,T=[{label:"-".concat(N||u,"-"),value:null}];m&&(T=[].concat(Object(a.a)(T),Object(a.a)(m))),O&&(T=T.filter((function(e){return null===e||void 0===e?void 0:e.value})));var L,W=(null===(n=B)||void 0===n?void 0:n.bottom)>600?"top":"bottom";P<=500&&(W=(null===(L=B)||void 0===L?void 0:L.bottom)>400?"top":"bottom","Categories"===u&&(W="top"));return r.a.createElement("div",{style:k,className:"mr-0 ".concat(k?null:"mr-lg-3"," ").concat(x?null:"mb-3"," ").concat(f," ").concat(b," ").concat(y?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(p?null:"d-none")},u),r.a.createElement(c.a,{inputId:"".concat(u,"_").concat(w,"_").concat(h),isMulti:j,isSearchable:!(P<500),isDisabled:E||!1,id:"dropdown".concat(h).concat(w),value:((null===v||void 0===v?void 0:v.value)||!!(null===v||void 0===v?void 0:v.length))&&v,menuIsOpen:U,menuPortal:!0,placeholder:N||d,options:T,onMenuOpen:function(){return C(!0)},onMenuClose:function(){return C(!1)},onChange:function(e){g(e),C(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(W),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:I,option:function(e,t){var n=t.isFocused,a=t.isSelected;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},662:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),l=n(654),r=(n(658),n(56)),c=n(19);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,b=e.actionButtonTitle,h=void 0===b?"Submit":b,g=e.cancelButtonClass,y=void 0===g?"bg-background":g,w=e.actionButtonClass,E=void 0===w?"bg-background":w,k=e.actionButtonEvent,x=void 0===k?null:k,N=e.colorText,j=void 0===N?"red":N,O=e.msg1,S=void 0===O?null:O,A=e.msg2,U=void 0===A?null:A,C=e.onCloseFunction,I=void 0===C?null:C,D=e.refreshOnCancel,B=void 0===D||D,P=e.setIsSuccess,T=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",h="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,U="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",h="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,U="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",h="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,U="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",h="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,U="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1);var L=Object(o.useState)(d),W=Object(a.a)(L,2),M=W[0],K=W[1];return Object(o.useEffect)((function(){K(d)}),[d]),Object(o.useEffect)((function(){}),[M]),window.onkeydown=function(e){return 27===e.keyCode?K(!1):null},i.a.createElement(l.B,{className:"".concat(M?null:"d-none")},i.a.createElement(l.f,null,i.a.createElement(l.s,{show:M,closeOnBackdrop:!1,onClose:function(){K(!1),"function"===typeof P&&P({success:null,name:null}),T({type:c.k,status:null}),I&&I()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){K(!1),"function"===typeof P&&P({success:null,name:null}),T({type:c.k,status:null}),I&&I()}})),i.a.createElement(l.v,{className:"px-5 pt-5 border-none"},i.a.createElement(l.w,{className:"text LatoBold ".concat(j)},v," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(l.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},U)),i.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?i.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){B?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:K,parentOncCloseFunction:I}),T({type:c.k,status:null})}},f):null,h?i.a.createElement(l.d,{className:"".concat(E," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){x?(x(),K(!1)):K(!1)}},h):null," "))))}},664:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),l=n(675),r=n.n(l),c=n(114),s=n(654);t.a=function(e){var t,n,l,u,d=e.skuUuId,m=void 0===d?123:d,v=e.selectAll,p=e.img,f=void 0===p?r.a:p,b=e.skuDescription,h=void 0===b?"SKU Description":b,g=e.skuNumber,y=void 0===g?"1001":g,w=e.uomLabel,E=void 0===w?"weight":w,k=e.uomValue,x=void 0===k?100.3:k,N=e.uom,j=void 0===N?"KG":N,O=e.isCheckedHandler,S=void 0===O?null:O,A=e.check,U=void 0!==A&&A,C=e.idx,I=void 0===C?0:C,D=e.singleView,B=e.setCreatePo,P=e.target,T=e.targetMovementProgress,L=e.targetRepackProgress,W=e.moduleName,M=e.setFromBarcode,K=e.setSingleViewSku,R=document.documentElement.clientWidth<=500,V=i.a.useState(U),H=Object(a.a)(V,2),q=H[0],z=H[1],F=function(){z(!0),"function"===typeof K&&K(m),"function"!==typeof K&&S(!0),"function"===typeof B&&B({show:!0,skuNumber:y}),"function"===typeof M&&M(!1)},G=!!P||"d-none",Q=0,Y=0;(null===L||void 0===L?void 0:L.length)&&"repack"===W&&(Q=null===(t=L[0])||void 0===t?void 0:t.totalPack,Y=null===(n=L[0])||void 0===n?void 0:n.totalUom);(null===T||void 0===T?void 0:T.length)&&"repack"!==W&&(Q=null===(l=T[0])||void 0===l?void 0:l.totalMove,Y=null===(u=T[0])||void 0===u?void 0:u.totalUos);return Object(o.useEffect)((function(e){v&&(z(!0),S(!0)),!1===v&&z(!1)}),[v]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&F()},tabindex:"0",key:I,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(R?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(q?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(R?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){z(!q),S&&S(!q)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(q?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:f,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},h),i.a.createElement("div",{className:"text fontSizeTitle"},y))),i.a.createElement("hr",{className:"".concat(R?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(R?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(R?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(G," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"repack"===W?"Repack Percentage":"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(Q,"/").concat(Y),i.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(Q/Y*100),"%)"))),i.a.createElement(s.A,{value:Q,max:Y,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(G)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(R?"d-none":null)},"Total ".concat("KG"===j.toUpperCase()?E.toUpperCase():j.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(x)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},j)),i.a.createElement("div",{onClick:F,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(D?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},666:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},669:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),l=n(56),r=n(660),c=n(670),s=n.n(c);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,c=(e.textSearch,e.searchHandler),u=void 0===c?null:c,d=e.barcodeScanner,m=e.filter,v=void 0===m?"":m,p=(e.width,e.className,e.filterDropdown),f=void 0===p?null:p,b=(e.value,e.showScanner),h=e.areaId,g=e.setAreaId,y=e.areaDestination,w=e.setAreaDestination,E=e.moduleName,k=e.setSearch,x=e.category,N=e.setCategory,j=Object(o.useState)(),O=Object(a.a)(j,2),S=O[0],A=void 0!==S&&S,U=O[1],C="",I="";A?(C="Show Filter",I=""):(C="Hide Filter",I=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var D=Object(o.useState)(""),B=Object(a.a)(D,2),P=B[0],T=B[1],L=Object(l.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){T(e.target.value),"function"===typeof k&&k(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u(P)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"},i.a.createElement(r.a,{isMulti:!0,noMarginBottom:!0,onChangeDropdown:function(e){"function"===typeof N&&N(e)},selectedValue:x,options:L,className:"w-30",placeholder:"Select Category",title:"Categories",show:!0})),i.a.createElement("div",{className:"mr-0 mr-md-3"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,l=e.moduleName;if("stockMovement"!==l)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===l){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:h,areaDestination:y,setAreaId:g,setAreaDestination:w,barcodeScanner:d,moduleName:E})},className:"pointer ".concat(b?null:"d-none"),src:s.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},v?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:A,setFilterShow:U})}},i.a.createElement("div",{className:"filter-text"},C)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),I)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return u(P)}},"Search"))),i.a.createElement("div",null,A?null:i.a.createElement("div",{className:"w-100"}," ",f," ")))}},670:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},715:function(e,t,n){},763:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g}));var a=n(4),o=n(65),i=n.n(o),l=n(70),r=n(659),c=n(89),s=n(22),u=n.n(s),d=n(19),m=n(657),v=n(667),p=n(114),f=n(656),b=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,s,p,b,h,g,y,w,E,k,x,N,j,O,S,A,U;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,s=t.dispatch,p=t.setLocalEntryData,b=t.moduleName,h=t.moduleSummary,g=t.moduleEntry,y=t.warehouseUuid,w=t.areaId,(E=Object(r.a)(h))[a].checked=o,s(Object(l.a)({type:d.c},"".concat(b,"summaryData"),E)),k=null===E||void 0===E?void 0:E.filter((function(e){if(e.checked)return e})),x=[],g&&g.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&x.push(t.skuUuid)})),N=[],j=k.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===(null===e||void 0===e?void 0:e.label)||"Semi Waste"===(null===e||void 0===e?void 0:e.label)})),e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:y,dispatch:s,areaId:w.value,moduleName:b});case 8:(o=e.sent)&&(l=o.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=l,N.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(j);case 11:e.sent,O=[],g&&(O=g.jobPost.list.concat(N)),g||(O=N),(S=E[a]).checked||(O=O.filter((function(e){return e.skuUuid!==S.skuUuid}))),A=null===g||void 0===g||null===(n=g.jobPost)||void 0===n?void 0:n.id,U={jobPost:{id:A||0,warehouseSource:y,warehouseDestination:y,areaSource:parseInt(null===w||void 0===w?void 0:w.value),areaName:null===w||void 0===w?void 0:w.label,areaDestination:parseInt(null===w||void 0===w?void 0:w.value),list:O.sort((function(e,t){return Object(f.f)(e,t)}))}},0===O.length&&s(Object(l.a)({type:d.b},"".concat(b,"EntryData"),null)),p(U);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,l,s,d,f,b,h,g,y,w,E,k,x,N;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,o=t.dispatch,l=t.moduleName,s=t.moduleSummary,d=t.moduleEntry,f=t.warehouseUuid,b=t.areaId,h=t.preAddHandler,(g=Object(r.a)(s))[n].checked=a,y=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),w=[],d&&d.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&w.push(t.skuUuid)})),E=[],k=y.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===(null===e||void 0===e?void 0:e.label)||"Semi Waste"===(null===e||void 0===e?void 0:e.label)})),e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:f,dispatch:o,areaId:b.value,moduleName:l});case 8:(r=e.sent)&&(c=r.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=c,t.isNewItem=!0,E.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(k);case 10:e.sent,x=[],d&&(x=d.concat(E)),d||(x=E),(N=g[n]).checked||(x=x.filter((function(e){return e.skuUuid!==N.skuUuid}))),h(x);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.setActiveSKU,n=e.moduleEntry,o=e.moduleName,i=e.setConfirmation,r=e.dispatch,c=e.setIsRequired,s=[],u=Object(a.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(f.w)({moduleList:e.itemList});return e.itemList.map((function(n){var a=n.qty,o=n.wasteType,i=n.note;return 0!=a&&!isNaN(a)||null!==(null===o||void 0===o?void 0:o.value)?(isNaN(a)||0==a||""===a||null===a?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?n.wasteTypeIsEmpty=!1:n.wasteTypeIsEmpty=!0,n.noteIsEmpty=!i):(n.qtyIsEmpty=!1,n.wasteTypeIsEmpty=!1,n.uploadPhotoIsEmpty=!1,n.noteIsEmpty=!1),n.qtyIsEmpty||(Number(t)>Number(e.initialWeight)?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.wasteTypeIsEmpty)||(null===n||void 0===n?void 0:n.uploadPhotoIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?s.push(!1):s.push(!0),n})),e})),e})),v=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(v=!0)}))}))})),u.jobPost.list=m,r(Object(l.a)({type:d.b},"".concat(o,"EntryData"),u)),!s.includes(!1)&&v?"function"===typeof i&&i({show:!0,name:"submit"}):("function"===typeof i&&i({show:!1,name:null}),"function"===typeof c&&c(!0)),Object(f.b)({setActiveSKU:t,moduleEntry:n,moduleName:o})}}}]);
//# sourceMappingURL=42.c42f03a9.chunk.js.map