(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[41],{1170:function(e,t,n){"use strict";n.r(t);var a=n(653),i=n(1),o=n.n(i),l=n(56),r=n(19),c=n(661),s=n(669),u=n(657),d=n(663),m=n(665),v=n(667),p=n.n(v),f=(n(709),n(731)),b=n(656),g=n(660),h=n(166);t.default=Object(r.i)((function(e){var t=Object(l.d)((function(e){return e.zeroQuantity})),n=Object(l.d)((function(e){return e.thereAreRequest})),r=Object(l.c)(),v=Object(l.d)((function(e){return e.user.warehouseUuid})),y=Object(l.d)((function(e){return e.status})),E=Object(l.d)((function(e){return e.isLoading})),k=Object(l.d)((function(e){return e.stockTakeEntryData})),w=Object(b.q)({moduleEntry:k,moduleName:"stockTake"}),x=Object(l.d)((function(e){return e.warehouseArea})),N=Object(l.d)((function(e){return e.areaId})),j=Object(l.d)((function(e){return e.stockTakeAddSku})),O=Object(i.useState)(null),S=Object(a.a)(O,2),A=S[0],I=S[1],U=Object(i.useState)(0),C=Object(a.a)(U,2),D=(C[0],C[1]),B=Object(i.useState)(!1),T=Object(a.a)(B,2),W=T[0],P=(T[1],Object(i.useState)(null)),L=Object(a.a)(P,2),M=L[0],R=L[1],K=Object(i.useState)(!0),q=Object(a.a)(K,2),z=q[0],Q=q[1],V=Object(i.useState)([]),H=Object(a.a)(V,2),F=H[0],G=H[1],Y=Object(i.useState)(),J=Object(a.a)(Y,2),X=J[0],Z=J[1];if(Object(i.useEffect)((function(){Object(d.c)({dispatch:r}),Object(d.e)({dispatch:r,warehouseUuid:v}),D(w)}),[]),k&&void 0!==k||e.history.push("/inventory-entry/stock-take"),!0===z&&void 0!==k){var _,$;R(k.jobPost.list.map((function(e,t){return e.skuNumber})));var ee={};ee.value=null===k||void 0===k||null===(_=k.jobPost)||void 0===_?void 0:_.areaSource,ee.label=null===k||void 0===k||null===($=k.jobPost)||void 0===$?void 0:$.areaName,Object(b.r)({selected:ee,dispatch:r}),Q(!1)}var te=document.documentElement.clientHeight,ne=te-290,ae=te-290,ie=Object(i.useState)(),oe=Object(a.a)(ie,2),le=oe[0],re=oe[1];return!1===j&&(null===k||void 0===k?void 0:k.jobPost.list.length)>0&&W&&e.history.push("/inventory-entry/weight-entry"),o.a.createElement("div",{className:"w-100  stock-take-summary"},o.a.createElement(g.a,{status:y}),o.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},o.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},o.a.createElement(c.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:x,onChangeDropdown:function(e){return Object(b.r)({selected:e,dispatch:r})},selectedValue:N,showTitle:!0}))),o.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all mb-3"},o.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},o.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},o.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",o.a.createElement("span",{className:"green"},"(".concat(F.length," Selected SKU").concat(F.length>1?"s":"",")"))))),o.a.createElement(s.a,{category:le,setCategory:re,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:le,zeroQuantity:t,moduleName:"stockTake",dispatch:r,desc:e,warehouseUuid:v,areaId:N,setModule:I,selectedSkusNumber:M},Z(e))}}),o.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===A||void 0===A?void 0:A.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:ne,maxHeight:ne}},(null===A||void 0===A?void 0:A.length)?null===A||void 0===A?void 0:A.map((function(e,n){return o.a.createElement(m.a,{key:n,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(f.a)({zeroQuantity:t,idx:n,checked:e,dispatch:r,moduleSummary:A,moduleEntry:F,moduleName:"stockTake",warehouseUuid:v,areaId:N,preAddHandler:G})},check:null===e||void 0===e?void 0:e.checked})})):o.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:ae,maxHeight:ae}},Object(b.p)({isLoading:E,summary:A})?N&&0===(null===A||void 0===A?void 0:A.length)?o.a.createElement("div",null,"Sorry, we couldn't find any matches for '",o.a.createElement("span",{className:"LatoBold"},X),"' in ",null===N||void 0===N?void 0:N.label," area.",o.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":o.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),o.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},o.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},o.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/stock-take/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),o.a.createElement(h.b,{to:"/inventory-entry/stock-take/weight-entry",onClick:function(e){return 0===n&&(null===F||void 0===F?void 0:F.length)>0||e.preventDefault()}},o.a.createElement("button",{onClick:function(){return 0===n&&(null===F||void 0===F?void 0:F.length)>0?Object(b.a)({dispatch:r,moduleEntry:F,moduleSummary:k,moduleName:"stockTake"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(0===n&&(null===F||void 0===F?void 0:F.length)>0?"bg-green":"bg-lineGrey")},0===(null===F||void 0===F?void 0:F.length)||0===n&&(null===F||void 0===F?void 0:F.length)>0?"Update":"Processing...")))))}))},658:function(e,t,n){},660:function(e,t,n){"use strict";var a=n(653),i=n(1),o=n.n(i),l=n(654),r=(n(658),n(56)),c=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,b=e.actionButtonTitle,g=void 0===b?"Submit":b,h=e.cancelButtonClass,y=void 0===h?"bg-background":h,E=e.actionButtonClass,k=void 0===E?"bg-background":E,w=e.actionButtonEvent,x=void 0===w?null:w,N=e.colorText,j=void 0===N?"red":N,O=e.msg1,S=void 0===O?null:O,A=e.msg2,I=void 0===A?null:A,U=e.onCloseFunction,C=void 0===U?null:U,D=e.refreshOnCancel,B=void 0===D||D,T=e.setIsSuccess,W=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",g="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",g="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",g="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",g="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1);var P=Object(i.useState)(d),L=Object(a.a)(P,2),M=L[0],R=L[1];return Object(i.useEffect)((function(){R(d)}),[d]),Object(i.useEffect)((function(){}),[M]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},o.a.createElement(l.B,{className:"".concat(M?null:"d-none")},o.a.createElement(l.f,null,o.a.createElement(l.s,{show:M,closeOnBackdrop:!1,onClose:function(){R(!1),"function"===typeof T&&T({success:null,name:null}),W({type:c.k,status:null}),C&&C()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},o.a.createElement("div",{className:"d-flex flex-row-reverse"},o.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),"function"===typeof T&&T({success:null,name:null}),W({type:c.k,status:null}),C&&C()}})),o.a.createElement(l.v,{className:"px-5 pt-5 border-none"},o.a.createElement(l.w,{className:"text LatoBold ".concat(j)},v," ",o.a.createElement("span",null,o.a.createElement("i",{className:"em ".concat(s)})))),o.a.createElement(l.t,{className:"px-5 py-0"},o.a.createElement("p",{className:"text mb-2"},S),o.a.createElement("p",{className:"text"},I)),o.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?o.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){B?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:R,parentOncCloseFunction:C}),W({type:c.k,status:null})}},f):null,g?o.a.createElement(l.d,{className:"".concat(k," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){x?(x(),R(!1)):R(!1)}},g):null," "))))}},661:function(e,t,n){"use strict";var a=n(659),i=n(4),o=n(653),l=n(1),r=n.n(l),c=n(679);t.a=function(e){var t,n,s,u=e.isEmpty,d=e.title,m=e.placeholder,v=e.options,p=e.selectedValue,f=e.showTitle,b=e.width,g=e.className,h=e.entryListIdx,y=e.onChangeDropdown,E=e.show,k=e.poListIdx,w=e.isDisabled,x=e.style,N=e.noMarginBottom,j=e.resetName,O=e.isMulti,S=e.hideResetOpt,A=Object(l.useState)(),I=Object(o.a)(A,2),U=I[0],C=I[1];Object(l.useEffect)((function(){"empty"===p&&C(!0)}),[p,u]);var D=!!u&&function(e,t){t.isOpen;return Object(i.a)(Object(i.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},B=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(h).concat(k)),T=null===B||void 0===B?void 0:B.getBoundingClientRect();Object(l.useEffect)((function(){T=null===B||void 0===B?void 0:B.getBoundingClientRect()}),[U]);var W=document.documentElement.clientWidth,P=[{label:"-".concat(j||d,"-"),value:null}];v&&(P=[].concat(Object(a.a)(P),Object(a.a)(v))),S&&(P=P.filter((function(e){return null===e||void 0===e?void 0:e.value})));var L=(null===(n=T)||void 0===n?void 0:n.bottom)>600?"top":"bottom";return W<=500&&(L=(null===(s=T)||void 0===s?void 0:s.bottom)>400?"top":"bottom"),r.a.createElement("div",{style:x,className:"mr-0 ".concat(x?null:"mr-lg-3"," ").concat(N?null:"mb-3"," ").concat(b," ").concat(g," ").concat(E?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(f?null:"d-none")},d),r.a.createElement(c.a,{isMulti:O,isSearchable:!(W<500),isDisabled:w||!1,id:"dropdown".concat(h).concat(k),value:((null===p||void 0===p?void 0:p.value)||!!(null===p||void 0===p?void 0:p.length))&&p,menuIsOpen:U,menuPortal:!0,placeholder:j||m,options:P,onMenuOpen:function(){return C(!0)},onMenuClose:function(){return C(!1)},onChange:function(e){y(e),C(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(L),styles:{menuPortal:function(e){return Object(i.a)(Object(i.a)({},e),{},{zIndex:9999})},control:D,option:function(e,t){var n=t.isFocused,a=t.isSelected;t.isOpen;return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:4})}}))}},665:function(e,t,n){"use strict";var a=n(653),i=n(1),o=n.n(i),l=n(674),r=n.n(l),c=n(114),s=n(654);t.a=function(e){var t,n,l,u,d=e.skuUuId,m=void 0===d?123:d,v=e.selectAll,p=e.img,f=void 0===p?r.a:p,b=e.skuDescription,g=void 0===b?"SKU Description":b,h=e.skuNumber,y=void 0===h?"1001":h,E=e.uomLabel,k=void 0===E?"weight":E,w=e.uomValue,x=void 0===w?100.3:w,N=e.uom,j=void 0===N?"KG":N,O=e.isCheckedHandler,S=void 0===O?null:O,A=e.check,I=void 0!==A&&A,U=e.idx,C=void 0===U?0:U,D=e.singleView,B=e.setCreatePo,T=e.target,W=e.targetMovementProgress,P=e.targetRepackProgress,L=e.moduleName,M=e.setFromBarcode,R=e.setSingleViewSku,K=document.documentElement.clientWidth<=500,q=o.a.useState(I),z=Object(a.a)(q,2),Q=z[0],V=z[1],H=function(){V(!0),"function"===typeof R&&R(m),"function"!==typeof R&&S(!0),"function"===typeof B&&B({show:!0,skuNumber:y}),"function"===typeof M&&M(!1)},F=!!T||"d-none",G=0,Y=0;(null===P||void 0===P?void 0:P.length)&&"repack"===L&&(G=null===(t=P[0])||void 0===t?void 0:t.totalPack,Y=null===(n=P[0])||void 0===n?void 0:n.totalUom);(null===W||void 0===W?void 0:W.length)&&"repack"!==L&&(G=null===(l=W[0])||void 0===l?void 0:l.totalMove,Y=null===(u=W[0])||void 0===u?void 0:u.totalUos);return Object(i.useEffect)((function(e){v&&(V(!0),S(!0)),!1===v&&V(!1)}),[v]),o.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&H()},tabindex:"0",key:C,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(K?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(Q?"bg-softGreen":null)},o.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(K?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){V(!Q),S&&S(!Q)}},o.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(Q?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),o.a.createElement("img",{src:f,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),o.a.createElement("div",{className:"text-left"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},g),o.a.createElement("div",{className:"text fontSizeTitle"},y))),o.a.createElement("hr",{className:"".concat(K?null:"d-none")}),o.a.createElement("div",{className:"d-flex w-100 ".concat(K?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},o.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(K?"justify-content-end":null)},o.a.createElement("div",{className:"w-25 mr-4 ".concat(F," tooltips")},o.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},o.a.createElement("span",{className:"pl-1 pr-1"},"repack"===L?"Repack Percentage":"Movement Percentage")),o.a.createElement("div",{className:"latoBold"},"".concat(G,"/").concat(Y),o.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(G/Y*100),"%)"))),o.a.createElement(s.A,{value:G,max:Y,className:"mb-3"})),o.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(F)}),o.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(K?"d-none":null)},"Total ".concat("KG"===j.toUpperCase()?k.toUpperCase():j.toUpperCase())),o.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(x)),o.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},j)),o.a.createElement("div",{onClick:H,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(D?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},667:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},669:function(e,t,n){"use strict";var a=n(653),i=n(1),o=n.n(i),l=n(56),r=n(661),c=n(670),s=n.n(c);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,c=(e.textSearch,e.searchHandler),u=void 0===c?null:c,d=e.barcodeScanner,m=e.filter,v=void 0===m?"":m,p=(e.width,e.className,e.filterDropdown),f=void 0===p?null:p,b=(e.value,e.showScanner),g=e.areaId,h=e.setAreaId,y=e.areaDestination,E=e.setAreaDestination,k=e.moduleName,w=e.setSearch,x=e.category,N=e.setCategory,j=Object(i.useState)(),O=Object(a.a)(j,2),S=O[0],A=void 0!==S&&S,I=O[1],U="",C="";A?(U="Show Filter",C=""):(U="Hide Filter",C=o.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var D=Object(i.useState)(""),B=Object(a.a)(D,2),T=B[0],W=B[1],P=Object(l.d)((function(e){return e.categoryList}));return o.a.createElement("div",{className:"search-bar w-100"},o.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},o.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},o.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),o.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},o.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){W(e.target.value),"function"===typeof w&&w(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u(T)}(e)}}))),o.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},o.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"},o.a.createElement(r.a,{noMarginBottom:!0,onChangeDropdown:function(e){"function"===typeof N&&N(e)},selectedValue:x,options:P,className:"w-30",placeholder:"Select Category",title:"Categories",show:!0})),o.a.createElement("div",{className:"mr-0 mr-md-3"},o.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,i=e.setAreaDestination,o=e.barcodeScanner,l=e.moduleName;if("stockMovement"!==l)return(null===t||void 0===t?void 0:t.value)?void o(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===l){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void i("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void i("empty");"function"===typeof o&&o(!0)}}({areaId:g,areaDestination:y,setAreaId:h,setAreaDestination:E,barcodeScanner:d,moduleName:k})},className:"pointer ".concat(b?null:"d-none"),src:s.a}))),o.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},v?o.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:A,setFilterShow:I})}},o.a.createElement("div",{className:"filter-text"},U)," ",o.a.createElement("span",{className:"px-3"},o.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),C)):null,o.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return u(T)}},"Search"))),o.a.createElement("div",null,A?null:o.a.createElement("div",{className:"w-100"}," ",f," ")))}},670:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},709:function(e,t,n){},731:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return h}));var a=n(4),i=n(65),o=n.n(i),l=n(70),r=n(659),c=n(89),s=n(22),u=n.n(s),d=n(21),m=n(657),v=n(663),p=n(114),f=n(656),b=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,i,s,b,g,h,y,E,k,w,x,N,j,O,S,A,I,U,C,D;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.idx,s=t.checked,b=t.dispatch,g=t.setLocalEntryData,h=t.moduleName,y=t.moduleSummary,E=t.moduleEntry,k=t.warehouseUuid,w=t.areaId,x=t.zeroQuantity,(N=Object(r.a)(y))[i].checked=s,b((n={type:d.c},Object(l.a)(n,"".concat(h,"summaryData"),N),Object(l.a)(n,"finish",!1),n)),j=null===N||void 0===N?void 0:N.filter((function(e){if(e.checked)return e})),O=[],E&&E.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&O.push(t.skuUuid)})),S=[],A=j.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,i,l,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:k,dispatch:b,areaId:w.value,moduleName:h,zeroQuantity:x});case 8:(i=e.sent)&&(l=t.gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===t.skuUuid})),r=i.map((function(e){e.itemList=[{qty:e.initialWeight,grade:l[0],expiryDate:null===e||void 0===e?void 0:e.expiryDate,expiryDateText:Object(p.a)({date:null===e||void 0===e?void 0:e.expiryDate})}],e.initialWeightUpdate=e.inboundQty-e.initialWeight,e.initialWeightScreenUpdate=parseInt(0);var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=r,S.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(A);case 11:e.sent,b({type:d.g,finish:!0}),I=[],E&&(I=E.jobPost.list.concat(S)),E||(I=S),(U=N[i]).checked||(I=I.filter((function(e){return e.skuUuid!==U.skuUuid}))),C=null===E||void 0===E||null===(a=E.jobPost)||void 0===a?void 0:a.id,D={jobPost:{id:C||0,warehouseSource:k,warehouseDestination:k,areaSource:parseInt(null===w||void 0===w?void 0:w.value),areaName:null===w||void 0===w?void 0:w.label,areaDestination:parseInt(null===w||void 0===w?void 0:w.value),list:I.sort((function(e,t){return Object(f.e)(e,t)}))}},0===I.length&&b(Object(l.a)({type:d.b},"".concat(h,"EntryData"),null)),g(D);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,i,l,s,d,f,b,g,h,y,E,k,w,x,N,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.zeroQuantity,a=t.idx,i=t.checked,l=t.dispatch,s=t.moduleName,d=t.moduleSummary,f=t.moduleEntry,b=t.warehouseUuid,g=t.areaId,h=t.preAddHandler,(y=Object(r.a)(d))[a].checked=i,E=null===y||void 0===y?void 0:y.filter((function(e){if(e.checked)return e})),k=[],f&&f.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&k.push(t.skuUuid)})),w=[],x=E.map(function(){var e=Object(c.a)(o.a.mark((function e(t,a){var i,r,c,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return i=e.sent,t.gradeList=i,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:b,dispatch:l,areaId:g.value,moduleName:s,zeroQuantity:n});case 8:(r=e.sent)&&(c=t.gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===t.skuUuid})),d=r.map((function(e){e.itemList=[{qty:e.initialWeight,grade:c[0],expiryDate:null===e||void 0===e?void 0:e.expiryDate,expiryDateText:Object(p.a)({date:null===e||void 0===e?void 0:e.expiryDate})}],e.initialWeightScreenUpdate=parseInt(0),e.initialWeightUpdate=e.inboundQty-e.initialWeight;var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=d,t.isNewItem=!0,w.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(x);case 10:e.sent,N=[],f&&(N=f.concat(w)),f||(N=w),(j=y[a]).checked||(N=N.filter((function(e){return e.skuUuid!==j.skuUuid}))),h(N);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.moduleEntry,n=e.moduleName,i=e.setConfirmation,o=e.dispatch,r=e.setIsRequired,c=[],s=Object(a.a)({},t),u=t.jobPost.list.map((function(e){return e.poList.map((function(e){return e.itemList.map((function(t){var n,a,i=t.qty,o=t.grade,l=t.ripeness,r=t.note;"Fruits"===e.category?0!=i&&!isNaN(i)||null!==(null===o||void 0===o?void 0:o.value)?"Waste"===(null===t||void 0===t||null===(n=t.grade)||void 0===n?void 0:n.label)||"Semi Waste"===(null===t||void 0===t||null===(a=t.grade)||void 0===a?void 0:a.label)?(isNaN(i)||""===i||null===i?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,"Waste"!==(null===o||void 0===o?void 0:o.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(isNaN(i)||""===i||null===i?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,(null===l||void 0===l?void 0:l.value)?t.ripenessIsEmpty=!1:t.ripenessIsEmpty=!0,"Waste"!==(null===o||void 0===o?void 0:o.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(t.qtyIsEmpty=!1,t.gradeIsEmpty=!1,t.ripenessIsEmpty=!1,t.noteIsEmpty=!1):0!=i&&!isNaN(i)||null!==(null===o||void 0===o?void 0:o.value)?(isNaN(i)||""===i||null===i?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,"Waste"!==(null===o||void 0===o?void 0:o.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(t.qtyIsEmpty=!1,t.gradeIsEmpty=!1,t.ripenessIsEmpty=!1,t.noteIsEmpty=!1);return(null===t||void 0===t?void 0:t.qtyIsEmpty)||(null===t||void 0===t?void 0:t.gradeIsEmpty)||(null===t||void 0===t?void 0:t.ripenessIsEmpty)||(null===t||void 0===t?void 0:t.noteIsEmpty)||(null===t||void 0===t?void 0:t.qtyToCompareIsEmpty)?c.push(!1):c.push(!0),t})),e})),e})),m=!1;u.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){(null===e||void 0===e?void 0:e.qty)>=0&&(m=!0)}))}))})),s.jobPost.list=u,o(Object(l.a)({type:d.b},"".concat(n,"EntryData"),s)),!c.includes(!1)&&m?i({show:!0,name:"submit"}):(i({show:!1,name:null}),r(!0))}}}]);
//# sourceMappingURL=41.7294b915.chunk.js.map