(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[39],{1219:function(e,t,n){"use strict";n.r(t);var a=n(659),o=n(1),i=n.n(o),l=n(19),r=n(56),c=n(667),s=n(675),u=n(663),d=n(669),m=n(671),v=n(673),p=n.n(v),f=(n(699),n(770)),b=n(662),g=n(666),h=n(168),y=n(720);t.default=Object(l.i)((function(e){var t=Object(r.d)((function(e){return e.thereAreRequest})),n=Object(r.c)(),v=(Object(l.g)(),Object(r.d)((function(e){return e.repackFirstLoad})),Object(r.d)((function(e){return e.user.warehouseUuid}))),E=Object(r.d)((function(e){return e.status})),k=Object(r.d)((function(e){return e.isLoading})),w=Object(r.d)((function(e){return e.repackEntryData})),x=Object(b.r)({moduleEntry:w,moduleName:"repack"}),j=Object(r.d)((function(e){return e.warehouseArea})),N=Object(r.d)((function(e){return e.areaId})),O=Object(r.d)((function(e){return e.repackAddSku})),S=Object(o.useState)(null),A=Object(a.a)(S,2),I=A[0],U=A[1],C=Object(o.useState)(0),B=Object(a.a)(C,2),D=(B[0],B[1]),P=Object(o.useState)(!1),L=Object(a.a)(P,2),T=L[0],M=(L[1],Object(o.useState)(null)),W=Object(a.a)(M,2),R=W[0],K=W[1],H=Object(o.useState)(!0),V=Object(a.a)(H,2),q=V[0],z=V[1],F=Object(o.useState)([]),G=Object(a.a)(F,2),Q=G[0],Y=G[1],J=Object(o.useState)(!1),X=Object(a.a)(J,2),Z=X[0],_=X[1];if(Object(o.useEffect)((function(){Object(d.c)({dispatch:n}),Object(d.e)({dispatch:n,warehouseUuid:v}),D(x)}),[]),w&&void 0!==w||e.history.push("/inventory-entry/repacking"),!0===q&&void 0!==w){var $,ee;K(w.jobPost.list.map((function(e,t){return e.skuNumber})));var te=[];te.value=null===w||void 0===w||null===($=w.jobPost)||void 0===$?void 0:$.areaSource,te.label=null===w||void 0===w||null===(ee=w.jobPost)||void 0===ee?void 0:ee.areaName,Object(b.s)({selected:te,dispatch:n}),z(!1)}var ne=Object(o.useState)(),ae=Object(a.a)(ne,2),oe=ae[0],ie=ae[1],le=null===I||void 0===I?void 0:I.map((function(e){if(null===e||void 0===e?void 0:e.checked)return!0})),re=!1;(null===le||void 0===le?void 0:le.length)&&Z&&(re=!0),0===t&&(null===Q||void 0===Q?void 0:Q.length)>0&&!Z&&(re=!0);var ce=document.documentElement.clientHeight,se=ce-360,ue=ce-290;return!1===O&&(null===w||void 0===w?void 0:w.jobPost.list.length)>0&&T&&e.history.push("/inventory-entry/repacking/weight-entry"),i.a.createElement("div",{className:"w-100  stock-take-summary"},i.a.createElement(g.a,{status:E}),i.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},i.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},i.a.createElement(c.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:j,onChangeDropdown:function(e){return Object(b.s)({selected:e,dispatch:n})},selectedValue:N,showTitle:!0}))),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",i.a.createElement("span",{className:"green"},"(".concat(Q.length," Selected SKU").concat(Q.length>1?"s":"",")"))))),i.a.createElement(s.a,{category:oe,setCategory:ie,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(u.h)({category:oe,dispatch:n,desc:e,warehouseUuid:v,areaId:N,setModule:U,selectedSkusNumber:R})}}),i.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===I||void 0===I?void 0:I.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:se,maxHeight:se}},(null===I||void 0===I?void 0:I.length)?null===I||void 0===I?void 0:I.map((function(e,t){return i.a.createElement(m.a,{selectAll:Z,key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Z?Object(b.A)({summary:I,setSummary:U,idx:t,checked:e}):Object(f.a)({idx:t,checked:e,dispatch:n,moduleSummary:I,moduleEntry:Q,moduleName:"repack",warehouseUuid:v,areaId:N,preAddHandler:Y})},check:null===e||void 0===e?void 0:e.checked})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:ue,maxHeight:se}},Object(b.q)({isLoading:k,summary:I})?"No Data":i.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),i.a.createElement(y.a,{setSelectAll:function(){return _(!Z)},selectAll:Z}),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/repacking/weight-entry")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),i.a.createElement(h.b,{to:"/inventory-entry/repacking/weight-entry",onClick:function(e){return!!re||e.preventDefault()}},i.a.createElement("button",{onClick:function(){var e,t,a,o;return re?Object(b.g)({localEntryData:Q,moduleEntry:w,moduleName:"repack",summary:I,dispatch:n,warehouseUuid:v,areaId:{value:null===w||void 0===w||null===(e=w.jobPost)||void 0===e?void 0:e.areaSource,label:null===w||void 0===w||null===(t=w.jobPost)||void 0===t?void 0:t.areaName},areaIdDesposition:{value:null===w||void 0===w||null===(a=w.jobPost)||void 0===a?void 0:a.areaDestination,label:null===w||void 0===w||null===(o=w.jobPost)||void 0===o?void 0:o.areaDestinationName},setLocalEntryData:function(e){return Y(e)}}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(re?"bg-green":"bg-lineGrey")},0===(null===Q||void 0===Q?void 0:Q.length)||re?"Update":"Processing...")))))}))},664:function(e,t,n){},666:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(660),r=(n(664),n(56)),c=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,b=e.actionButtonTitle,g=void 0===b?"Submit":b,h=e.cancelButtonClass,y=void 0===h?"bg-background":h,E=e.actionButtonClass,k=void 0===E?"bg-background":E,w=e.actionButtonEvent,x=void 0===w?null:w,j=e.colorText,N=void 0===j?"red":j,O=e.msg1,S=void 0===O?null:O,A=e.msg2,I=void 0===A?null:A,U=e.onCloseFunction,C=void 0===U?null:U,B=e.refreshOnCancel,D=void 0===B||B,P=e.setIsSuccess,L=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",g="Contact Administration",N="red",S=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,D=!1);var T=Object(o.useState)(d),M=Object(a.a)(T,2),W=M[0],R=M[1];return Object(o.useEffect)((function(){R(d)}),[d]),Object(o.useEffect)((function(){}),[W]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},i.a.createElement(l.B,{className:"".concat(W?null:"d-none")},i.a.createElement(l.f,null,i.a.createElement(l.s,{show:W,closeOnBackdrop:!1,onClose:function(){R(!1),"function"===typeof P&&P({success:null,name:null}),L({type:c.k,status:null}),C&&C()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),"function"===typeof P&&P({success:null,name:null}),L({type:c.k,status:null}),C&&C()}})),i.a.createElement(l.v,{className:"px-5 pt-5 border-none"},i.a.createElement(l.w,{className:"text LatoBold ".concat(N)},v," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(l.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},I)),i.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?i.a.createElement(l.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){D?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:R,parentOncCloseFunction:C}),L({type:c.k,status:null})}},f):null,g?i.a.createElement(l.d,{className:"".concat(k," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){x?(x(),R(!1)):R(!1)}},g):null," "))))}},667:function(e,t,n){"use strict";var a=n(665),o=n(4),i=n(659),l=n(1),r=n.n(l),c=n(685);t.a=function(e){var t,n,s,u=e.isEmpty,d=e.title,m=e.placeholder,v=e.options,p=e.selectedValue,f=e.showTitle,b=e.width,g=e.className,h=e.entryListIdx,y=e.onChangeDropdown,E=e.show,k=e.poListIdx,w=e.isDisabled,x=e.style,j=e.noMarginBottom,N=e.resetName,O=e.isMulti,S=e.hideResetOpt,A=Object(l.useState)(),I=Object(i.a)(A,2),U=I[0],C=I[1];Object(l.useEffect)((function(){"empty"===p&&C(!0)}),[p,u]);var B=!!u&&function(e,t){t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},D=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(h).concat(k)),P=null===D||void 0===D?void 0:D.getBoundingClientRect();Object(l.useEffect)((function(){P=null===D||void 0===D?void 0:D.getBoundingClientRect()}),[U]);var L=document.documentElement.clientWidth,T=[{label:"-".concat(N||d,"-"),value:null}];v&&(T=[].concat(Object(a.a)(T),Object(a.a)(v))),S&&(T=T.filter((function(e){return null===e||void 0===e?void 0:e.value})));var M=(null===(n=P)||void 0===n?void 0:n.bottom)>600?"top":"bottom";return L<=500&&(M=(null===(s=P)||void 0===s?void 0:s.bottom)>400?"top":"bottom"),r.a.createElement("div",{style:x,className:"mr-0 ".concat(x?null:"mr-lg-3"," ").concat(j?null:"mb-3"," ").concat(b," ").concat(g," ").concat(E?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(f?null:"d-none")},d),r.a.createElement(c.a,{inputId:"".concat(d,"_").concat(k,"_").concat(h),isMulti:O,isSearchable:!(L<500),isDisabled:w||!1,id:"dropdown".concat(h).concat(k),value:((null===p||void 0===p?void 0:p.value)||!!(null===p||void 0===p?void 0:p.length))&&p,menuIsOpen:U,menuPortal:!0,placeholder:N||m,options:T,onMenuOpen:function(){return C(!0)},onMenuClose:function(){return C(!1)},onChange:function(e){y(e),C(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(M),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:B,option:function(e,t){var n=t.isFocused,a=t.isSelected;t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},671:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(680),r=n.n(l),c=n(116),s=n(660);t.a=function(e){var t,n,l,u,d=e.skuUuId,m=void 0===d?123:d,v=e.selectAll,p=e.img,f=void 0===p?r.a:p,b=e.skuDescription,g=void 0===b?"SKU Description":b,h=e.skuNumber,y=void 0===h?"1001":h,E=e.uomLabel,k=void 0===E?"weight":E,w=e.uomValue,x=void 0===w?100.3:w,j=e.uom,N=void 0===j?"KG":j,O=e.isCheckedHandler,S=void 0===O?null:O,A=e.check,I=void 0!==A&&A,U=e.idx,C=void 0===U?0:U,B=e.singleView,D=e.setCreatePo,P=e.target,L=e.targetMovementProgress,T=e.targetRepackProgress,M=e.moduleName,W=e.setFromBarcode,R=e.setSingleViewSku,K=document.documentElement.clientWidth<=500,H=i.a.useState(I),V=Object(a.a)(H,2),q=V[0],z=V[1],F=function(){z(!0),"function"===typeof R&&R(m),"function"!==typeof R&&S(!0),"function"===typeof D&&D({show:!0,skuNumber:y}),"function"===typeof W&&W(!1)},G=!!P||"d-none",Q=0,Y=0;(null===T||void 0===T?void 0:T.length)&&"repack"===M&&(Q=null===(t=T[0])||void 0===t?void 0:t.totalPack,Y=null===(n=T[0])||void 0===n?void 0:n.totalUom);(null===L||void 0===L?void 0:L.length)&&"repack"!==M&&(Q=null===(l=L[0])||void 0===l?void 0:l.totalMove,Y=null===(u=L[0])||void 0===u?void 0:u.totalUos);return Object(o.useEffect)((function(e){v&&(z(!0),S(!0)),!1===v&&z(!1)}),[v]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&F()},tabindex:"0",key:C,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(K?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(q?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(K?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){z(!q),S&&S(!q)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(q?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:f,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},g),i.a.createElement("div",{className:"text fontSizeTitle"},y))),i.a.createElement("hr",{className:"".concat(K?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(K?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(K?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(G," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"repack"===M?"Repack Percentage":"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(Q,"/").concat(Y),i.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(Q/Y*100),"%)"))),i.a.createElement(s.A,{value:Q,max:Y,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(G)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(K?"d-none":null)},"Total ".concat("KG"===N.toUpperCase()?k.toUpperCase():N.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(x)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},N)),i.a.createElement("div",{onClick:F,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(B?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},673:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},675:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),l=n(56),r=n(667),c=n(676),s=n.n(c);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,c=(e.textSearch,e.searchHandler),u=void 0===c?null:c,d=e.barcodeScanner,m=e.filter,v=void 0===m?"":m,p=(e.width,e.className,e.filterDropdown),f=void 0===p?null:p,b=(e.value,e.showScanner),g=e.areaId,h=e.setAreaId,y=e.areaDestination,E=e.setAreaDestination,k=e.moduleName,w=e.setSearch,x=e.category,j=e.setCategory,N=Object(o.useState)(),O=Object(a.a)(N,2),S=O[0],A=void 0!==S&&S,I=O[1],U="",C="";A?(U="Show Filter",C=""):(U="Hide Filter",C=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var B=Object(o.useState)(""),D=Object(a.a)(B,2),P=D[0],L=D[1],T=Object(l.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){L(e.target.value),"function"===typeof w&&w(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u(P)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"},i.a.createElement(r.a,{isMulti:!0,noMarginBottom:!0,onChangeDropdown:function(e){"function"===typeof j&&j(e)},selectedValue:x,options:T,className:"w-30",placeholder:"Select Category",title:"Categories",show:!0})),i.a.createElement("div",{className:"mr-0 mr-md-3"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,l=e.moduleName;if("stockMovement"!==l)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===l){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:g,areaDestination:y,setAreaId:h,setAreaDestination:E,barcodeScanner:d,moduleName:k})},className:"pointer ".concat(b?null:"d-none"),src:s.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},v?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:A,setFilterShow:I})}},i.a.createElement("div",{className:"filter-text"},U)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),C)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return u(P)}},"Search"))),i.a.createElement("div",null,A?null:i.a.createElement("div",{className:"w-100"}," ",f," ")))}},676:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},699:function(e,t,n){},720:function(e,t,n){"use strict";var a=n(1),o=n.n(a);n(116),n(721);t.a=function(e){var t=e.setSelectAll,n=e.selectAll;return o.a.createElement("div",{className:"d-flex flex-column flex-lg-row w-100 border border-soft-green rounded flex-row align-items-center justify-content-start mb-3 p-3 pl-4 bg-white"},o.a.createElement("div",{className:"w-100 d-flex align-items-center"},o.a.createElement("div",{onClick:function(){return t(!0)},style:{cursor:"pointer",minHeight:"23px",minWidth:"23px",maxHeight:"23px",maxWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(n?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),"Select All"))}},721:function(e,t,n){},770:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b}));var a=n(4),o=n(65),i=n.n(o),l=n(71),r=n(665),c=n(91),s=n(21),u=n(663),d=n(669),m=n(116),v=n(662),p=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,m,p,f,b,g,h,y,E,k,w,x,j,N,O,S,A,I;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,m=t.dispatch,p=t.setLocalEntryData,f=t.moduleName,b=t.moduleSummary,g=t.moduleEntry,h=t.warehouseUuid,y=t.areaId,E=t.areaDestinationId,k=Object(r.a)(b),[],k[a].checked=o,m(Object(l.a)({type:s.c},"".concat(f,"summaryData"),k)),w=null===k||void 0===k?void 0:k.filter((function(e){if(e.checked)return e})),x=[],g&&g.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&x.push(t.skuUuid)})),j=[],N=w.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(d.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(u.d)({skuId:t.skuUuid,warehouseId:h,uom:t.unitOfMeassures});case 8:(o=e.sent)&&(l=[{itemList:[],expiryMs:null,inBoundyMs:null,expiryDate:null,inboundDate:null,skuUuid:t.skuUuid,uom:t.unitOfMeassures,packSize:t.packSize,category:t.category,initialWeight:Number.isInteger(null===o||void 0===o?void 0:o.data.totalWeight)?parseInt(null===o||void 0===o?void 0:o.data.totalWeight):parseFloat(null===o||void 0===o?void 0:o.data.totalWeight),targetRepacks:null===o||void 0===o?void 0:o.data.targetRepacks}],t.poList=l,j.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=12,Promise.all(N);case 12:e.sent,O=[],g&&(O=g.jobPost.list.concat(j)),g||(O=j),(S=k[a]).checked||(O=O.filter((function(e){return e.skuUuid!==S.skuUuid}))),A=null===g||void 0===g||null===(n=g.jobPost)||void 0===n?void 0:n.id,I={jobPost:{id:A||0,warehouseSource:h,warehouseDestination:h,areaSource:parseInt(null===y||void 0===y?void 0:y.value),areaName:null===y||void 0===y?void 0:y.label,areaDestination:parseInt(null===E||void 0===E?void 0:E.value),areaDestinationName:null===E||void 0===E?void 0:E.label,list:O.sort((function(e,t){return Object(v.f)(e,t)}))}},0===O.length&&m(Object(l.a)({type:s.b},"".concat(f,"EntryData"),null)),p(I);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,o,l,s,v,p,f,b,g,h,y,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,t.dispatch,t.moduleName,o=t.moduleSummary,l=t.moduleEntry,s=t.warehouseUuid,t.areaId,v=t.preAddHandler,(p=Object(r.a)(o))[n].checked=a,f=null===p||void 0===p?void 0:p.filter((function(e){if(e.checked)return e})),b=[],l&&l.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&b.push(t.skuUuid)})),g=[],h=f.map(function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(d.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(u.d)({skuId:t.skuUuid,warehouseId:s,uom:t.unitOfMeassures});case 8:(o=e.sent)&&(l=[{itemList:[],expiryMs:null,inBoundyMs:null,expiryDate:null,inboundDate:null,skuUuid:t.skuUuid,uom:t.unitOfMeassures,packSize:t.packSize,category:t.category,initialWeight:Object(m.e)(null===o||void 0===o?void 0:o.data.totalWeight)?Object(m.e)(null===o||void 0===o?void 0:o.data.totalWeight):null===o||void 0===o?void 0:o.data.totalWeight,targetRepacks:null===o||void 0===o?void 0:o.data.targetRepacks}],t.poList=l,t.isNewItem=!0,g.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(h);case 10:e.sent,y=[],l&&(y=l.concat(g)),l||(y=g),(E=p[n]).checked||(y=y.filter((function(e){return e.skuUuid!==E.skuUuid}))),v(y);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.setActiveSKU,n=e.moduleEntry,o=e.moduleName,i=e.setConfirmation,r=e.dispatch,c=e.setIsRequired,u=e.setInvalidThreshold,d=[],p=Object(a.a)({},n),f=[],b=n.jobPost.list.map((function(e){var t=e.originalUom;return e.poList.map((function(n){var a=Object(v.w)({moduleList:n.itemList}),o=n.packSize,i=n.targetRepacks,l=!!(null===i||void 0===i?void 0:i.length);return n.itemList.map((function(i){var r,c,s=i.qty,u=i.grade,v=i.pack,p=i.note,b=i.slot;if(0!=s&&!isNaN(s)||null!==(null===u||void 0===u?void 0:u.value))if("Waste"===(null===i||void 0===i||null===(r=i.grade)||void 0===r?void 0:r.label)||"Semi Waste"===(null===i||void 0===i||null===(c=i.grade)||void 0===c?void 0:c.label))isNaN(s)||0==s||""===s||null===s?i.qtyIsEmpty=!0:i.qtyIsEmpty=!1,(null===u||void 0===u?void 0:u.value)?i.gradeIsEmpty=!1:i.gradeIsEmpty=!0,"Waste"!==(null===u||void 0===u?void 0:u.label)||p?i.noteIsEmpty=!1:i.noteIsEmpty=!0;else{var g,h=e.gradeList.filter((function(e){return e.value===u.value}))[0].multiplier,y="gram"==(null===t||void 0===t?void 0:t.toLowerCase())?o/1e3:o,E=s/v;if(E-=y/h,E/=y/h,(E*=100)>=51||E<=-20?(i.packThresholdIsEmpty=!0,f.push(!0)):(i.packThresholdIsEmpty=!1,f.push(!1)),i.packThreshold=Object(m.e)(E),isNaN(s)||0==s||""===s||null===s?i.qtyIsEmpty=!0:i.qtyIsEmpty=!1,isNaN(v)||0==v||""===v||null===v?i.packIsEmpty=!0:i.packIsEmpty=!1,(null===u||void 0===u?void 0:u.value)?i.gradeIsEmpty=!1:i.gradeIsEmpty=!0,"Waste"!==(null===u||void 0===u?void 0:u.label)||p?i.noteIsEmpty=!1:i.noteIsEmpty=!0,l)(null===b||void 0===b?void 0:b.value)||"0"===(null===b||void 0===b||null===(g=b.value)||void 0===g?void 0:g.toString())?i.slotIsEmpty=!1:i.slotIsEmpty=!0}else i.qtyIsEmpty=!1,i.gradeIsEmpty=!1,i.noteIsEmpty=!1,i.packIsEmpty=!1,i.packThresholdIsEmpty=!1;return i.qtyIsEmpty||(Number(a)>Number(n.initialWeight)?i.qtyIsEmpty=!0:i.qtyIsEmpty=!1),(null===i||void 0===i?void 0:i.qtyIsEmpty)||(null===i||void 0===i?void 0:i.gradeIsEmpty)||i.packIsEmpty||(null===i||void 0===i?void 0:i.noteIsEmpty)||(null===i||void 0===i?void 0:i.qtyToCompareIsEmpty)||(null===i||void 0===i?void 0:i.slotIsEmpty)?d.push(!1):d.push(!0),i})),n})),e})),g=!1;b.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(g=!0)}))}))})),p.jobPost.list=b,r(Object(l.a)({type:s.b},"".concat(o,"EntryData"),p)),!d.includes(!1)&&g?c(!1):c(!0),f.includes(!0)?u(!0):u(!1),d.includes(!1)||!g||f.includes(!0)?i({show:!1,name:null}):i({show:!0,name:"submit"}),Object(v.b)({setActiveSKU:t,moduleEntry:n,moduleName:o})}}}]);
//# sourceMappingURL=39.2f1d59d5.chunk.js.map