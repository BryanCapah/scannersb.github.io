(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[38],{1210:function(e,t,n){"use strict";n.r(t);var a=n(659),o=n(1),i=n.n(o),l=n(19),r=n(56),c=n(667),s=n(675),u=n(663),d=n(669),m=n(671),v=n(673),p=n.n(v),f=(n(729),n(754)),b=n(662),g=n(665),h=n(720),y=n(168);t.default=Object(l.i)((function(e){var t=Object(r.d)((function(e){return e.thereAreRequest})),n=Object(r.c)(),v=(Object(l.g)(),Object(r.d)((function(e){return e.stockMovementFirstLoad})),Object(r.d)((function(e){return e.user.warehouseUuid}))),E=Object(r.d)((function(e){return e.status})),w=Object(r.d)((function(e){return e.isLoading})),x=Object(r.d)((function(e){return e.stockMovementEntryData})),j=Object(r.d)((function(e){return e.stockMovementTargetRepack})),k=Object(b.r)({moduleEntry:x}),N=Object(r.d)((function(e){return e.warehouseArea})),O=Object(r.d)((function(e){return e.areaId})),S=Object(r.d)((function(e){return e.stockMovementAddSku})),A=Object(o.useState)(null),I=Object(a.a)(A,2),U=I[0],C=I[1],D=Object(o.useState)(0),M=Object(a.a)(D,2),P=(M[0],M[1]),B=Object(o.useState)(!1),L=Object(a.a)(B,2),W=L[0],T=(L[1],Object(o.useState)(null)),R=Object(a.a)(T,2),K=R[0],H=R[1],V=Object(o.useState)(!0),q=Object(a.a)(V,2),F=q[0],z=q[1],G=Object(o.useState)([]),J=Object(a.a)(G,2),Q=J[0],Y=J[1],X=Object(o.useState)(),Z=Object(a.a)(X,2),_=Z[0],$=Z[1],ee=Object(o.useState)(),te=Object(a.a)(ee,2),ne=te[0],ae=te[1];if(Object(o.useEffect)((function(){Object(d.c)({dispatch:n}),Object(d.e)({dispatch:n,warehouseUuid:v}),P(k)}),[]),x&&void 0!==x||e.history.push("/inventory-entry/movement"),!0===F&&void 0!==x){var oe,ie;H(x.jobPost.list.map((function(e,t){return e.skuNumber})));var le={};le.value=null===x||void 0===x||null===(oe=x.jobPost)||void 0===oe?void 0:oe.areaSource,le.label=null===x||void 0===x||null===(ie=x.jobPost)||void 0===ie?void 0:ie.areaName,Object(b.s)({selected:le,dispatch:n}),z(!1)}var re=Object(o.useState)(),ce=Object(a.a)(re,2),se=ce[0],ue=ce[1],de=null===U||void 0===U?void 0:U.map((function(e){if(null===e||void 0===e?void 0:e.checked)return!0})),me=!1;(null===de||void 0===de?void 0:de.length)&&ne&&(me=!0),0===t&&(null===Q||void 0===Q?void 0:Q.length)>0&&!ne&&(me=!0);var ve=document.documentElement.clientHeight,pe=ve-360,fe=ve-290;return!1===S&&(null===x||void 0===x?void 0:x.jobPost.list.length)>0&&W&&e.history.push("/inventory-entry/weight-entry"),i.a.createElement("div",{className:"w-100  stock-take-summary"},i.a.createElement(g.a,{status:E}),i.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},i.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},i.a.createElement(c.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:N,onChangeDropdown:function(e){return Object(b.s)({selected:e,dispatch:n})},selectedValue:O,showTitle:!0}))),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",i.a.createElement("span",{className:"green"},"(".concat(Q.length," Selected SKU").concat(Q.length>1?"s":"",")"))))),i.a.createElement(s.a,{category:se,setCategory:ue,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:se,moduleName:"stockMovement",stockMovementTargetRepack:j,dispatch:n,desc:e,warehouseUuid:v,areaId:O,setModule:C,selectedSkusNumber:K},$(e))}}),i.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===U||void 0===U?void 0:U.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:pe,maxHeight:pe}},(null===U||void 0===U?void 0:U.length)?null===U||void 0===U?void 0:U.map((function(e,t){return i.a.createElement(m.a,{selectAll:ne,key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return ne?Object(b.A)({summary:U,setSummary:C,idx:t,checked:e}):Object(f.b)({idx:t,checked:e,dispatch:n,moduleSummary:U,moduleEntry:Q,moduleName:"stockMovement",warehouseUuid:v,areaId:O,preAddHandler:Y})},check:null===e||void 0===e?void 0:e.checked})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:fe,maxHeight:fe}},Object(b.q)({isLoading:w,summary:U})?O&&0===(null===U||void 0===U?void 0:U.length)?i.a.createElement("div",null,"Sorry, we couldn't find any matches for '",i.a.createElement("span",{className:"LatoBold"},_),"' in ",null===O||void 0===O?void 0:O.label," area.",i.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":i.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),i.a.createElement(h.a,{setSelectAll:function(){return ae(!ne)},selectAll:ne}),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/movement/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),i.a.createElement(y.b,{to:"/inventory-entry/movement/weight-entry",onClick:function(e){return!!me||e.preventDefault()}},i.a.createElement("button",{onClick:function(){var e,t,a,o;return me?Object(b.g)({localEntryData:Q,moduleEntry:x,moduleName:"stockMovement",summary:U,dispatch:n,warehouseUuid:v,areaId:{value:null===x||void 0===x||null===(e=x.jobPost)||void 0===e?void 0:e.areaSource,label:null===x||void 0===x||null===(t=x.jobPost)||void 0===t?void 0:t.areaName},areaIdDesposition:{value:null===x||void 0===x||null===(a=x.jobPost)||void 0===a?void 0:a.areaDestination,label:null===x||void 0===x||null===(o=x.jobPost)||void 0===o?void 0:o.areaDestinationName},setLocalEntryData:function(e){return Y(e)}}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(me?"bg-green":"bg-lineGrey")},0===(null===Q||void 0===Q?void 0:Q.length)||me?"Update":"Processing...")))))}))},664:function(e,t,n){},665:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(660),r=(n(664),n(56)),c=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,b=e.actionButtonTitle,g=void 0===b?"Submit":b,h=e.cancelButtonClass,y=void 0===h?"bg-background":h,E=e.actionButtonClass,w=void 0===E?"bg-background":E,x=e.actionButtonEvent,j=void 0===x?null:x,k=e.colorText,N=void 0===k?"red":k,O=e.msg1,S=void 0===O?null:O,A=e.msg2,I=void 0===A?null:A,U=e.onCloseFunction,C=void 0===U?null:U,D=e.refreshOnCancel,M=void 0===D||D,P=e.setIsSuccess,B=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,M=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,M=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,M=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,M=!1);var L=Object(o.useState)(d),W=Object(a.a)(L,2),T=W[0],R=W[1];return Object(o.useEffect)((function(){R(d)}),[d]),Object(o.useEffect)((function(){}),[T]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},i.a.createElement(l.B,{className:"".concat(T?null:"d-none")},i.a.createElement(l.f,null,i.a.createElement(l.s,{show:T,closeOnBackdrop:!1,onClose:function(){R(!1),"function"===typeof P&&P({success:null,name:null}),B({type:c.k,status:null}),C&&C()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),"function"===typeof P&&P({success:null,name:null}),B({type:c.k,status:null}),C&&C()}})),i.a.createElement(l.v,{className:"px-5 pt-5 border-none"},i.a.createElement(l.w,{className:"text LatoBold ".concat(N)},v," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(l.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},I)),i.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?i.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){M?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:R,parentOncCloseFunction:C}),B({type:c.k,status:null})}},f):null,g?i.a.createElement(l.d,{className:"".concat(w," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){j?(j(),R(!1)):R(!1)}},g):null," "))))}},667:function(e,t,n){"use strict";var a=n(666),o=n(4),i=n(659),l=n(1),r=n.n(l),c=n(685);t.a=function(e){var t,n,s=e.isEmpty,u=e.title,d=e.placeholder,m=e.options,v=e.selectedValue,p=e.showTitle,f=e.width,b=e.className,g=e.entryListIdx,h=e.onChangeDropdown,y=e.show,E=e.poListIdx,w=e.isDisabled,x=e.style,j=e.noMarginBottom,k=e.resetName,N=e.isMulti,O=e.hideResetOpt,S=Object(l.useState)(),A=Object(i.a)(S,2),I=A[0],U=A[1];Object(l.useEffect)((function(){"empty"===v&&U(!0)}),[v,s]);var C=!!s&&function(e,t){t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},D=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(E)),M=null===D||void 0===D?void 0:D.getBoundingClientRect();Object(l.useEffect)((function(){M=null===D||void 0===D?void 0:D.getBoundingClientRect()}),[I]);var P=document.documentElement.clientWidth,B=[{label:"-".concat(k||u,"-"),value:null}];m&&(B=[].concat(Object(a.a)(B),Object(a.a)(m))),O&&(B=B.filter((function(e){return null===e||void 0===e?void 0:e.value})));var L,W=(null===(n=M)||void 0===n?void 0:n.bottom)>600?"top":"bottom";P<=500&&(W=(null===(L=M)||void 0===L?void 0:L.bottom)>400?"top":"bottom","Categories"===u&&(W="top"));return r.a.createElement("div",{style:x,className:"mr-0 ".concat(x?null:"mr-lg-3"," ").concat(j?null:"mb-3"," ").concat(f," ").concat(b," ").concat(y?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(p?null:"d-none")},u),r.a.createElement(c.a,{inputId:"".concat(u,"_").concat(E,"_").concat(g),isMulti:N,isSearchable:!(P<500),isDisabled:w||!1,id:"dropdown".concat(g).concat(E),value:((null===v||void 0===v?void 0:v.value)||!!(null===v||void 0===v?void 0:v.length))&&v,menuIsOpen:I,menuPortal:!0,placeholder:k||d,options:B,onMenuOpen:function(){return U(!0)},onMenuClose:function(){return U(!1)},onChange:function(e){h(e),U(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(W),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:C,option:function(e,t){var n=t.isFocused,a=t.isSelected;t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},671:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(680),r=n.n(l),c=n(116),s=n(660);t.a=function(e){var t,n,l,u,d=e.skuUuId,m=void 0===d?123:d,v=e.selectAll,p=e.img,f=void 0===p?r.a:p,b=e.skuDescription,g=void 0===b?"SKU Description":b,h=e.skuNumber,y=void 0===h?"1001":h,E=e.uomLabel,w=void 0===E?"weight":E,x=e.uomValue,j=void 0===x?100.3:x,k=e.uom,N=void 0===k?"KG":k,O=e.isCheckedHandler,S=void 0===O?null:O,A=e.check,I=void 0!==A&&A,U=e.idx,C=void 0===U?0:U,D=e.singleView,M=e.setCreatePo,P=e.target,B=e.targetMovementProgress,L=e.targetRepackProgress,W=e.moduleName,T=e.setFromBarcode,R=e.setSingleViewSku,K=document.documentElement.clientWidth<=500,H=i.a.useState(I),V=Object(a.a)(H,2),q=V[0],F=V[1],z=function(){F(!0),"function"===typeof R&&R(m),"function"!==typeof R&&S(!0),"function"===typeof M&&M({show:!0,skuNumber:y}),"function"===typeof T&&T(!1)},G=!!P||"d-none",J=0,Q=0;(null===L||void 0===L?void 0:L.length)&&"repack"===W&&(J=null===(t=L[0])||void 0===t?void 0:t.totalPack,Q=null===(n=L[0])||void 0===n?void 0:n.totalUom);(null===B||void 0===B?void 0:B.length)&&"repack"!==W&&(J=null===(l=B[0])||void 0===l?void 0:l.totalMove,Q=null===(u=B[0])||void 0===u?void 0:u.totalUos);return Object(o.useEffect)((function(e){v&&(F(!0),S(!0)),!1===v&&F(!1)}),[v]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&z()},tabindex:"0",key:C,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(K?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(q?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(K?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){F(!q),S&&S(!q)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(q?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:f,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},g),i.a.createElement("div",{className:"text fontSizeTitle"},y))),i.a.createElement("hr",{className:"".concat(K?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(K?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(K?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(G," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"repack"===W?"Repack Percentage":"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(J,"/").concat(Q),i.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(J/Q*100),"%)"))),i.a.createElement(s.A,{value:J,max:Q,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(G)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(K?"d-none":null)},"Total ".concat("KG"===N.toUpperCase()?w.toUpperCase():N.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(j)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},N)),i.a.createElement("div",{onClick:z,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(D?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},673:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},675:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(56),r=n(667),c=n(676),s=n.n(c);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,c=(e.textSearch,e.searchHandler),u=void 0===c?null:c,d=e.barcodeScanner,m=e.filter,v=void 0===m?"":m,p=(e.width,e.className,e.filterDropdown),f=void 0===p?null:p,b=(e.value,e.showScanner),g=e.areaId,h=e.setAreaId,y=e.areaDestination,E=e.setAreaDestination,w=e.moduleName,x=e.setSearch,j=e.category,k=e.setCategory,N=Object(o.useState)(),O=Object(a.a)(N,2),S=O[0],A=void 0!==S&&S,I=O[1],U="",C="";A?(U="Show Filter",C=""):(U="Hide Filter",C=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var D=Object(o.useState)(""),M=Object(a.a)(D,2),P=M[0],B=M[1],L=Object(l.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){B(e.target.value),"function"===typeof x&&x(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u(P)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"},i.a.createElement(r.a,{isMulti:!0,noMarginBottom:!0,onChangeDropdown:function(e){"function"===typeof k&&k(e)},selectedValue:j,options:L,className:"w-30",placeholder:"Select Category",title:"Categories",show:!0})),i.a.createElement("div",{className:"mr-0 mr-md-3"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,l=e.moduleName;if("stockMovement"!==l)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===l){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:g,areaDestination:y,setAreaId:h,setAreaDestination:E,barcodeScanner:d,moduleName:w})},className:"pointer ".concat(b?null:"d-none"),src:s.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},v?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:A,setFilterShow:I})}},i.a.createElement("div",{className:"filter-text"},U)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),C)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return u(P)}},"Search"))),i.a.createElement("div",null,A?null:i.a.createElement("div",{className:"w-100"}," ",f," ")))}},676:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},720:function(e,t,n){"use strict";var a=n(1),o=n.n(a);n(116),n(721);t.a=function(e){var t=e.setSelectAll,n=e.selectAll;return o.a.createElement("div",{className:"d-flex flex-column flex-lg-row w-100 border border-soft-green rounded flex-row align-items-center justify-content-start mb-3 p-3 pl-4 bg-white"},o.a.createElement("div",{className:"w-100 d-flex align-items-center"},o.a.createElement("div",{onClick:function(){return t(!0)},style:{cursor:"pointer",minHeight:"23px",minWidth:"23px",maxHeight:"23px",maxWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(n?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),"Select All"))}},721:function(e,t,n){},729:function(e,t,n){},754:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return h}));var a=n(4),o=n(65),i=n.n(o),l=n(71),r=n(666),c=n(91),s=n(22),u=n.n(s),d=n(21),m=n(663),v=n(669),p=(n(116),n(662)),f=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,s,f,b,g,h,y,E,w,x,j,k,N,O,S,A,I,U,C;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,s=t.dispatch,f=t.setLocalEntryData,b=t.moduleName,g=t.moduleSummary,h=t.moduleEntry,y=t.warehouseUuid,E=t.areaId,w=t.areaIdDesposition,(x=Object(r.a)(g))[a].checked=o,s(Object(l.a)({type:d.c},"".concat(b,"summaryData"),x)),j=null===x||void 0===x?void 0:x.filter((function(e){if(e.checked)return e})),k=[],h&&h.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&k.push(t.skuUuid)})),N=[],O=[],S=j.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:y,dispatch:s,areaId:E.value,moduleName:b});case 8:(o=e.sent)&&(O=null===o||void 0===o?void 0:o.targetMovements,l=null===o||void 0===o?void 0:o.poItems.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():0,a=e.inboundDate?u()(e.inboundDate).valueOf():0;return e.targetMovements=null===o||void 0===o?void 0:o.targetMovements,e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=l,N.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=12,Promise.all(S);case 12:e.sent,A=[],h&&(A=h.jobPost.list.concat(N)),h||(A=N),(I=x[a]).checked||(A=A.filter((function(e){return e.skuUuid!==I.skuUuid}))),U=null===h||void 0===h||null===(n=h.jobPost)||void 0===n?void 0:n.id,C={jobPost:{id:U||0,warehouseSource:y,warehouseDestination:y,areaSource:parseInt(null===E||void 0===E?void 0:E.value),areaName:null===E||void 0===E?void 0:E.label,areaDestination:parseInt(null===w||void 0===w?void 0:w.value),areaDestinationName:null===w||void 0===w?void 0:w.label,list:A.sort((function(e,t){return Object(p.f)(e,t)})).sort((function(e,t){return Object(p.f)(e,t)}))}},0===A.length&&s(Object(l.a)({type:d.b},"".concat(b,"EntryData"),null)),A.length>0&&s({type:d.b,targetMovements:O}),f(C);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,l,s,d,p,f,b,g,h,y,E,w,x,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,o=t.dispatch,l=t.moduleName,s=t.moduleSummary,d=t.moduleEntry,p=t.warehouseUuid,f=t.areaId,b=t.preAddHandler,(g=Object(r.a)(s))[n].checked=a,h=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),y=[],d&&d.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&y.push(t.skuUuid)})),E=[],[],w=h.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:p,dispatch:o,areaId:f.value,moduleName:l});case 8:(r=e.sent)&&(null===r||void 0===r?void 0:r.targetMovements,c=null===r||void 0===r?void 0:r.poItems.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():0,a=e.inboundDate?u()(e.inboundDate).valueOf():0;return e.targetMovements=null===r||void 0===r?void 0:r.targetMovements,e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=c,t.isNewItem=!0,E.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(w);case 11:e.sent,x=[],d&&(x=d.concat(E)),d||(x=E),(j=g[n]).checked||(x=x.filter((function(e){return e.skuUuid!==j.skuUuid}))),b(x);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.setActiveSKU,n=e.moduleEntry,o=e.moduleName,i=e.setConfirmation,r=e.dispatch,c=e.setIsRequired,s=e.areaMovement,u=[],m=Object(a.a)({},n),v=n.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(p.w)({moduleList:e.itemList});return e.itemList.map((function(n){var a,o,i=n.qty,l=n.grade,r=(n.ripeness,n.note),c=n.reason;0!=i&&!isNaN(i)||null!==(null===l||void 0===l?void 0:l.value)?("Waste"===(null===n||void 0===n||null===(a=n.grade)||void 0===a?void 0:a.label)&&8!==(null===s||void 0===s?void 0:s.value)&&(null===l||void 0===l||l.value,n.gradeIsEmpty=!1,null===l||void 0===l||l.value,n.reasonIsEmpty=!1,"Waste"!==(null===l||void 0===l?void 0:l.label)||r?n.noteIsEmpty=!1:n.noteIsEmpty=!0,"Waste"!==(null===l||void 0===l?void 0:l.label)||(null===c||void 0===c?void 0:c.value)?n.reasonIsEmpty=!1:n.reasonIsEmpty=!0),8===(null===s||void 0===s?void 0:s.value)?((null===l||void 0===l?void 0:l.value)?n.gradeIsEmpty=!1:n.gradeIsEmpty=!0,"Waste"===(null===n||void 0===n||null===(o=n.grade)||void 0===o?void 0:o.label)&&("Waste"!==(null===l||void 0===l?void 0:l.label)||r?n.noteIsEmpty=!1:n.noteIsEmpty=!0,"Waste"!==(null===l||void 0===l?void 0:l.label)||(null===c||void 0===c?void 0:c.value)?n.reasonIsEmpty=!1:n.reasonIsEmpty=!0)):(n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1)):(n.qtyIsEmpty=!1,n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1,n.noteIsEmpty=!1,n.reasonIsEmpty=!1);return isNaN(i)||0==i||""===i||null===i?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,n.qtyIsEmpty||(Number(t)>Number(e.initialWeight)?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.gradeIsEmpty)||(null===n||void 0===n?void 0:n.ripenessIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)||(null===n||void 0===n?void 0:n.reasonIsEmpty)?u.push(!1):u.push(!0),n})),e})),e})),f=!1;v.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(f=!0)}))}))})),m.jobPost.list=v,r(Object(l.a)({type:d.b},"".concat(o,"EntryData"),m)),!u.includes(!1)&&f?i({show:!0,name:"submit"}):(i({show:!1,name:null}),c(!0)),Object(p.b)({setActiveSKU:t,moduleEntry:n,moduleName:o})},h=function(e){var t=e.localEntryData,n=e.setLocalEntryData;if(t){var a,o,i=Object.assign({},JSON.parse(JSON.stringify(t))),l=null===i||void 0===i||null===(a=i.jobPost)||void 0===a||null===(o=a.list)||void 0===o?void 0:o.map((function(e){return e.poList.map((function(e){return e.itemList=[{qty:e.initialWeight,expiryDate:e.expiryDate}],e})),e}));i.jobPost.list=l,n(i)}}}}]);
//# sourceMappingURL=38.364ee0d2.chunk.js.map