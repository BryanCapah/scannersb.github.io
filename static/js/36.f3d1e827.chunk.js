(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[36],{1224:function(e,t,n){"use strict";n.r(t);var a=n(65),o=n.n(a),l=n(91),i=n(659),r=n(1),c=n.n(r),s=n(19),u=n(56),d=n(21),m=n(667),v=n(675),p=n(662),f=n(670),b=n(671),h=n(673),g=n.n(h),y=(n(731),n(771)),E=n(664),w=n(666),x=n(697),N=n(681);t.default=Object(s.i)((function(e){var t,n,a,h,k,j,O=Object(u.c)(),S=Object(s.g)(),A=Object(u.d)((function(e){return e.thereAreRequest})),C=Object(u.d)((function(e){return e.stockTransferFirstLoad})),U=Object(u.d)((function(e){return e.user.warehouseUuid})),D=Object(u.d)((function(e){return e.status})),I=Object(u.d)((function(e){return e.isLoading})),B=Object(u.d)((function(e){return e.stockTransferEntryData})),L=Object(r.useState)(null),P=Object(i.a)(L,2),T=P[0],W=P[1],M=Object(r.useState)(),K=Object(i.a)(M,2),R=K[0],V=K[1],q=Object(E.m)({moduleEntry:R,moduleName:"stockTransfer"}),z=Object(r.useState)(0),F=Object(i.a)(z,2),H=F[0],Y=F[1],G=H!==q&&q>0,Q=Object(r.useState)(),J=Object(i.a)(Q,2),X=J[0],Z=J[1],_=Object(r.useState)(),$=Object(i.a)(_,2),ee=$[0],te=$[1],ne=Object(r.useState)(),ae=Object(i.a)(ne,2),oe=ae[0],le=ae[1],ie=Object(r.useState)(),re=Object(i.a)(ie,2),ce=re[0],se=re[1],ue=Object(r.useState)(),de=Object(i.a)(ue,2),me=de[0],ve=de[1],pe=Object(r.useState)(),fe=Object(i.a)(pe,2),be=fe[0],he=fe[1],ge=Object(r.useState)(),ye=Object(i.a)(ge,2),Ee=ye[0],we=ye[1],xe=Object(r.useState)(),Ne=Object(i.a)(xe,2),ke=Ne[0],je=Ne[1],Oe=Object(r.useState)(),Se=Object(i.a)(Oe,2),Ae=Se[0],Ce=Se[1];Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,a,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)({});case 2:return t=e.sent,e.next=5,Object(f.c)({dispatch:O});case 5:return n=e.sent,e.next=8,Object(f.e)({dispatch:O,warehouseUuid:U});case 8:return a=e.sent,e.next=11,Object(p.i)({dispatch:O,moduleName:"stockTransfer",isExist:!!B,ripeness:n});case 11:e.sent,l=t.filter((function(e){return e.value===U})),ve(l[0]),le(a),te(t),Y(q);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(e){Ce(!!(Ee&&me&&be&&me!==be))}),[Ee,ke,G,me,be]),Object(r.useEffect)((function(){V(),W()}),[Ee,ke,me,be]);var Ue=Object(r.useState)(),De=Object(i.a)(Ue,2),Ie=De[0],Be=De[1],Le=document.documentElement.clientHeight,Pe=Le-400,Te=Le-400;return c.a.createElement("div",{className:"w-100  stock-take-summary"},c.a.createElement(N.a,{discard:ce,module:"Inventory Entry - Stock Transfer",moduleEntry:B,close:function(){return se(!1)},discardEntry:function(e){return Object(p.m)({id:e,moduleName:"stockTransfer",dispatch:O,setDiscard:se})}}),c.a.createElement(x.a,{discard:ce,moduleFirstLoad:C,moduleEntry:B,redirect:function(){return e.history.push("/inventory-entry/stock-transfer/weight-entry")},previousPage:function(){return S.goBack()},setDiscard:function(){return se(!0)}}),c.a.createElement(w.a,{status:D}),c.a.createElement("div",{className:"px-3 pt-3 bg-white border-all radius-all d-md-flex dd-group"},c.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},c.a.createElement(m.a,{show:!0,isDisabled:!0,title:"Warehouse Source",placeholder:"Select Warehouse Source",options:ee,onChangeDropdown:function(e){return ve(e)},selectedValue:me,showTitle:!0})),c.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},c.a.createElement(m.a,{show:!0,title:"Area Source",placeholder:"Select Area Source",options:oe,onChangeDropdown:function(e){return we(e)},selectedValue:Ee,showTitle:!0})),c.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},c.a.createElement(m.a,{show:!0,title:"Warehouse Destination",placeholder:"Select Warehouse Destination",options:null===ee||void 0===ee?void 0:ee.filter((function(e){return(null===e||void 0===e?void 0:e.label)!==(null===me||void 0===me?void 0:me.label)})),onChangeDropdown:function(e){return he(e)},selectedValue:be,showTitle:!0}))),c.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white mt-3 border-all radius-all mb-3"},c.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},c.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},c.a.createElement("div",null,"Enter SKU or Description"," ",c.a.createElement("span",{className:"green"},"(".concat(q," Selected SKU").concat(q>1?"s":"",")"))))),c.a.createElement(v.a,{category:Ie,setCategory:Be,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return(null===Ee||void 0===Ee?void 0:Ee.value)&&(null===me||void 0===me?void 0:me.value)&&(null===be||void 0===be?void 0:be.value)&&(null===me||void 0===me?void 0:me.value)!==(null===be||void 0===be?void 0:be.value)?Object(p.g)({category:Ie,dispatch:O,desc:e,warehouseUuid:U,areaId:Ee,areaIdDesposition:ke,setModule:W,module:R},Z(e)):(null===Ee||void 0===Ee?void 0:Ee.value)?(null===Ee||void 0===Ee?void 0:Ee.value)===(null===ke||void 0===ke?void 0:ke.value)?je("empty"):(null===me||void 0===me?void 0:me.value)?(null===be||void 0===be?void 0:be.value)?(null===be||void 0===be?void 0:be.value)===(null===me||void 0===me?void 0:me.value)?he("empty"):null:he("empty"):ve("empty"):we("empty")}}),c.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===T||void 0===T?void 0:T.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:Pe,maxHeight:Pe}},(null===T||void 0===T?void 0:T.length)?null===T||void 0===T?void 0:T.map((function(e,t){return c.a.createElement(b.a,{key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(y.b)({idx:t,checked:e,dispatch:O,setLocalEntryData:V,moduleSummary:T,moduleEntry:R,moduleName:"stockTransfer",warehouseUuid:U,warehouseIdDestination:be,areaId:Ee,areaIdDesposition:ke})},check:null===e||void 0===e?void 0:e.checked})})):c.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:Te,maxHeight:Te}},Object(E.l)({isLoading:I,summary:T})?Ee&&ke&&0===(null===T||void 0===T?void 0:T.length)?c.a.createElement("div",null,"Sorry, we couldn't find any matches for '",c.a.createElement("span",{className:"LatoBold"},X),"' in ",Ee&&(null===ke||void 0===ke?void 0:ke.label)," area.",c.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":c.a.createElement("img",{className:"loading",src:g.a,alt:"loading"})))),c.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},c.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.history.push("/inventory-entry/stock-transfer/CSV-upload")},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Upload File")),c.a.createElement("button",{onClick:function(){var t,n;0===A&&R&&(null===R||void 0===R||null===(t=R.jobPost)||void 0===t||null===(n=t.list)||void 0===n?void 0:n.length)>0&&!0===Ae&&(O({type:d.b,stockTransferEntryData:R}),e.history.push("/inventory-entry/stock-transfer/weight-entry"))},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(0===A&&R&&(null===R||void 0===R||null===(t=R.jobPost)||void 0===t||null===(n=t.list)||void 0===n?void 0:n.length)>0&&!0===Ae?"bg-green":"bg-lineGrey")},R&&0!==(null===R||void 0===R||null===(a=R.jobPost)||void 0===a||null===(h=a.list)||void 0===h?void 0:h.length)||0!==A?0===A&&R&&(null===R||void 0===R||null===(k=R.jobPost)||void 0===k||null===(j=k.list)||void 0===j?void 0:j.length)>0?"Next":"Processing...":"Next"))))}))},663:function(e,t,n){},666:function(e,t,n){"use strict";var a=n(659),o=n(1),l=n.n(o),i=n(660),r=(n(663),n(56)),c=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,v=void 0===m?"":m,p=e.cancelButtonTitle,f=void 0===p?"Cancel":p,b=e.actionButtonTitle,h=void 0===b?"Submit":b,g=e.cancelButtonClass,y=void 0===g?"bg-background":g,E=e.actionButtonClass,w=void 0===E?"bg-background":E,x=e.actionButtonEvent,N=void 0===x?null:x,k=e.colorText,j=void 0===k?"red":k,O=e.msg1,S=void 0===O?null:O,A=e.msg2,C=void 0===A?null:A,U=e.onCloseFunction,D=void 0===U?null:U,I=e.refreshOnCancel,B=void 0===I||I,L=e.setIsSuccess,P=Object(r.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",v="Server Error",f="Try Again",h="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Request Timeout",f="Try Again",h="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",v="Server Error",f="Try Again",h="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1),404===(null===n||void 0===n?void 0:n.code)&&(v="Something wrong with the application",f="Try Again",h="Contact Administration",j="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",y="bg-green",d=!0,B=!1);var T=Object(o.useState)(d),W=Object(a.a)(T,2),M=W[0],K=W[1];return Object(o.useEffect)((function(){K(d)}),[d]),Object(o.useEffect)((function(){}),[M]),window.onkeydown=function(e){return 27===e.keyCode?K(!1):null},l.a.createElement(i.B,{className:"".concat(M?null:"d-none")},l.a.createElement(i.f,null,l.a.createElement(i.s,{show:M,closeOnBackdrop:!1,onClose:function(){K(!1),"function"===typeof L&&L({success:null,name:null}),P({type:c.k,status:null}),D&&D()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},l.a.createElement("div",{className:"d-flex flex-row-reverse"},l.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){K(!1),"function"===typeof L&&L({success:null,name:null}),P({type:c.k,status:null}),D&&D()}})),l.a.createElement(i.v,{className:"px-5 pt-5 border-none"},l.a.createElement(i.w,{className:"text LatoBold ".concat(j)},v," ",l.a.createElement("span",null,l.a.createElement("i",{className:"em ".concat(s)})))),l.a.createElement(i.t,{className:"px-5 py-0"},l.a.createElement("p",{className:"text mb-2"},S),l.a.createElement("p",{className:"text"},C)),l.a.createElement(i.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?l.a.createElement(i.d,{className:"".concat(y," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){B?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:K,parentOncCloseFunction:D}),P({type:c.k,status:null})}},f):null,h?l.a.createElement(i.d,{className:"".concat(w," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){N?(N(),K(!1)):K(!1)}},h):null," "))))}},667:function(e,t,n){"use strict";var a=n(665),o=n(4),l=n(659),i=n(1),r=n.n(i),c=n(685);t.a=function(e){var t,n,s,u=e.isEmpty,d=e.title,m=e.placeholder,v=e.options,p=e.selectedValue,f=e.showTitle,b=e.width,h=e.className,g=e.entryListIdx,y=e.onChangeDropdown,E=e.show,w=e.poListIdx,x=e.isDisabled,N=e.style,k=e.noMarginBottom,j=e.resetName,O=e.isMulti,S=e.hideResetOpt,A=Object(i.useState)(),C=Object(l.a)(A,2),U=C[0],D=C[1];Object(i.useEffect)((function(){"empty"===p&&D(!0)}),[p,u]);var I=!!u&&function(e,t){t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},B=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(w)),L=null===B||void 0===B?void 0:B.getBoundingClientRect();Object(i.useEffect)((function(){L=null===B||void 0===B?void 0:B.getBoundingClientRect()}),[U]);var P=document.documentElement.clientWidth,T=[{label:"-".concat(j||d,"-"),value:null}];v&&(T=[].concat(Object(a.a)(T),Object(a.a)(v))),S&&(T=T.filter((function(e){return null===e||void 0===e?void 0:e.value})));var W=(null===(n=L)||void 0===n?void 0:n.bottom)>600?"top":"bottom";return P<=500&&(W=(null===(s=L)||void 0===s?void 0:s.bottom)>400?"top":"bottom"),r.a.createElement("div",{style:N,className:"mr-0 ".concat(N?null:"mr-lg-3"," ").concat(k?null:"mb-3"," ").concat(b," ").concat(h," ").concat(E?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(f?null:"d-none")},d),r.a.createElement(c.a,{isMulti:O,isSearchable:!(P<500),isDisabled:x||!1,id:"dropdown".concat(g).concat(w),value:((null===p||void 0===p?void 0:p.value)||!!(null===p||void 0===p?void 0:p.length))&&p,menuIsOpen:U,menuPortal:!0,placeholder:j||m,options:T,onMenuOpen:function(){return D(!0)},onMenuClose:function(){return D(!1)},onChange:function(e){y(e),D(!1)},menuPortalTarget:document.body,maxMenuHeight:200,menuPlacement:"".concat(W),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:I,option:function(e,t){var n=t.isFocused,a=t.isSelected;t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},668:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(659),o=n(1),l=n.n(o),i=n(680),r=n.n(i),c=n(116),s=n(660);t.a=function(e){var t,n,i,u,d=e.selectAll,m=e.img,v=void 0===m?r.a:m,p=e.skuDescription,f=void 0===p?"SKU Description":p,b=e.skuNumber,h=void 0===b?"1001":b,g=e.uomLabel,y=void 0===g?"weight":g,E=e.uomValue,w=void 0===E?100.3:E,x=e.uom,N=void 0===x?"KG":x,k=e.isCheckedHandler,j=void 0===k?null:k,O=e.check,S=void 0!==O&&O,A=e.idx,C=void 0===A?0:A,U=e.singleView,D=e.setCreatePo,I=e.target,B=e.targetMovementProgress,L=e.targetRepackProgress,P=e.moduleName,T=e.setFromBarcode,W=document.documentElement.clientWidth<=500,M=l.a.useState(S),K=Object(a.a)(M,2),R=K[0],V=K[1],q=function(){V(!0),j(!0),"function"===typeof D&&D({show:!0,skuNumber:h}),"function"===typeof T&&T(!1)},z=!!I||"d-none",F=0,H=0;(null===L||void 0===L?void 0:L.length)&&"repack"===P&&(F=null===(t=L[0])||void 0===t?void 0:t.totalPack,H=null===(n=L[0])||void 0===n?void 0:n.totalUom);(null===B||void 0===B?void 0:B.length)&&"repack"!==P&&(F=null===(i=B[0])||void 0===i?void 0:i.totalMove,H=null===(u=B[0])||void 0===u?void 0:u.totalUos);return console.log(F/H*100),Object(o.useEffect)((function(e){d&&(V(!0),j(!0))}),[d]),l.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&q()},tabindex:"0",key:C,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(W?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(R?"bg-softGreen":null)},l.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(W?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){V(!R),j&&j(!R)}},l.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(R?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),l.a.createElement("img",{src:v,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),l.a.createElement("div",{className:"text-left"},l.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},f),l.a.createElement("div",{className:"text fontSizeTitle"},h))),l.a.createElement("hr",{className:"".concat(W?null:"d-none")}),l.a.createElement("div",{className:"d-flex w-100 ".concat(W?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},l.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(W?"justify-content-end":null)},l.a.createElement("div",{className:"w-25 mr-4 ".concat(z," tooltips")},l.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},l.a.createElement("span",{className:"pl-1 pr-1"},"Movement Percentage")),l.a.createElement("div",{className:"latoBold"},"".concat(F,"/").concat(H),l.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(F/H*100),"%)"))),l.a.createElement(s.A,{value:F,max:H,className:"mb-3"})),l.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(z)}),l.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(W?"d-none":null)},"Total ".concat("KG"===N.toUpperCase()?y.toUpperCase():N.toUpperCase())),l.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(w)),l.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},N)),l.a.createElement("div",{onClick:q,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(U?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},673:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},675:function(e,t,n){"use strict";var a=n(659),o=n(1),l=n.n(o),i=n(56),r=n(667),c=n(676),s=n.n(c);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,c=(e.textSearch,e.searchHandler),u=void 0===c?null:c,d=e.barcodeScanner,m=e.filter,v=void 0===m?"":m,p=(e.width,e.className,e.filterDropdown),f=void 0===p?null:p,b=(e.value,e.showScanner),h=e.areaId,g=e.setAreaId,y=e.areaDestination,E=e.setAreaDestination,w=e.moduleName,x=e.setSearch,N=e.category,k=e.setCategory,j=Object(o.useState)(),O=Object(a.a)(j,2),S=O[0],A=void 0!==S&&S,C=O[1],U="",D="";A?(U="Show Filter",D=""):(U="Hide Filter",D=l.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var I=Object(o.useState)(""),B=Object(a.a)(I,2),L=B[0],P=B[1],T=Object(i.d)((function(e){return e.categoryList}));return l.a.createElement("div",{className:"search-bar"},l.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},l.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},l.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),l.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},l.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){P(e.target.value),"function"===typeof x&&x(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u(L)}(e)}}),l.a.createElement("div",{className:"mr-3 w-100 d-flex justify-content-end"},l.a.createElement(r.a,{noMarginBottom:!0,onChangeDropdown:function(e){"function"===typeof k&&k(e)},selectedValue:N,options:T,style:{},placeholder:"Select Category",title:"Categories",show:!0})),l.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,l=e.barcodeScanner,i=e.moduleName;if("stockMovement"!==i)return(null===t||void 0===t?void 0:t.value)?void l(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===i){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof l&&l(!0)}}({areaId:h,areaDestination:y,setAreaId:g,setAreaDestination:E,barcodeScanner:d,moduleName:w})},className:"pointer ".concat(b?null:"d-none"),src:s.a}))),l.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},v?l.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:A,setFilterShow:C})}},l.a.createElement("div",{className:"filter-text"},U)," ",l.a.createElement("span",{className:"px-3"},l.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),D)):null,l.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return u(L)}},"Search"))),l.a.createElement("div",null,A?null:l.a.createElement("div",{className:"w-100"}," ",f," ")))}},676:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},681:function(e,t,n){"use strict";var a=n(1),o=n.n(a),l=n(660);n(668);t.a=function(e){var t=e.discard,n=e.moduleEntry,a=e.close,i=e.discardEntry,r=e.module;document.documentElement.clientHeight;return o.a.createElement(l.B,{className:t?null:"d-none"},o.a.createElement(l.f,null,o.a.createElement(l.s,{show:t,size:"lg",closeOnBackdrop:!1},o.a.createElement("div",{className:"d-flex flex-row-reverse pr-3 pt-3 mt-1"},o.a.createElement("i",{onClick:function(){return a()},className:"iconU-modalClose"})),o.a.createElement(l.v,{className:"px-5 pb-4 mb-2 pt-4 mt-2 border-none"},o.a.createElement(l.w,{className:"red LatoBold"},"Discard? ",o.a.createElement("span",null,o.a.createElement("i",{className:"em em-astonished"})))),o.a.createElement(l.t,{className:"px-5 pb-5 mb-4 py-0"},o.a.createElement("p",{className:"text mb-3 h5 respon-txt"},"Are you sure you want to discard ",o.a.createElement("span",{className:"green"}," ".concat(null===n||void 0===n?void 0:n.jobPost.list.length," selected SKU ").concat((null===n||void 0===n?void 0:n.jobPost.list.length)>1?"(s)":"")),"from this",o.a.createElement("div",{className:"green h5 pt-2 respon-txt"},r)),o.a.createElement("br",null),o.a.createElement(l.d,{onClick:function(){return i(null===n||void 0===n?void 0:n.jobPost.id)},className:"bg-background text no-shadow pl-5 pr-5 mr-3 LatoBlack"},"Discard"),o.a.createElement(l.d,{onClick:function(){return a()},className:"bg-green no-shadow pl-4 pr-4 LatoBlack"},"Don't Discard")," "))))}},697:function(e,t,n){"use strict";var a=n(1),o=n.n(a),l=n(22),i=n.n(l),r=n(660);n(668);t.a=function(e){var t,n,a,l,c=e.moduleEntry,s=e.redirect,u=e.previousPage,d=e.discard,m=e.setDiscard,v=e.moduleFirstLoad,p=document.documentElement.clientHeight-900,f=!(d||!c);return v?o.a.createElement(r.B,{className:f?null:"d-none"},o.a.createElement(r.f,null,o.a.createElement(r.s,{show:f,size:"lg",closeOnBackdrop:!1},o.a.createElement("div",{className:"d-flex flex-row-reverse pr-3 pt-3 mt-1"},o.a.createElement("i",{onClick:function(){return u()},className:"iconU-modalClose"})),o.a.createElement(r.v,{className:"px-5 pt-3 border-none"},o.a.createElement(r.w,{className:"green LatoBold respon-txt"},"Unfinished Entry Left! ",o.a.createElement("span",null,o.a.createElement("i",{className:"em em-speak_no_evil"})))),o.a.createElement(r.t,{className:"px-5 py-0",style:{minHeight:p}},o.a.createElement("p",{className:"text mb-3 fontSizeWeightNumber"},"You must complete the Entry that you worked on :"),o.a.createElement("div",{style:{backgroundColor:"#F5F7FA"},className:"w-100  rounded p-3 d-flex justify-content-between align-items-center"},o.a.createElement("div",null,o.a.createElement("div",{className:"respon-txt"},i()(null===c||void 0===c||null===(t=c.jobPost)||void 0===t?void 0:t.createdAt).format("dddd, MMMM DD YYYY, h:mm:ss a")),o.a.createElement("div",{className:"green respon-txt"},"".concat(null===c||void 0===c||null===(n=c.jobPost)||void 0===n?void 0:n.areaName," - ").concat(null===c||void 0===c||null===(a=c.jobPost)||void 0===a?void 0:a.list.length," SKU").concat((null===c||void 0===c||null===(l=c.jobPost)||void 0===l?void 0:l.list.length)>1?"(s)":""))),o.a.createElement("div",{onClick:function(){return m()},className:"iconU-entryTrash emptyTextField",style:{opacity:.5,fontSize:"1.2rem"}})),o.a.createElement("p",{className:"text mt-3 fontSizeWeightNumber"},"Do you want to continue this Entries ?"),o.a.createElement("br",null)),o.a.createElement(r.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},o.a.createElement(r.d,{onClick:function(){return u()},className:"bg-background text no-shadow px-5 mb-0 mx-0"},"Later"),o.a.createElement(r.d,{onClick:function(){return s()},className:"bg-green no-shadow px-5 mb-0 ml-3 mr-0"},"Continue")," ")))):o.a.createElement(r.s,{show:!0,size:"lg",closeOnBackdrop:!1},o.a.createElement("div",{className:"green h4 w-100 text-center p-4"},"Checking Unfinished Entry"))}},731:function(e,t,n){},771:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g}));var a=n(4),o=n(65),l=n.n(o),i=n(71),r=n(665),c=n(91),s=n(22),u=n.n(s),d=n(21),m=n(662),v=n(670),p=n(116),f=n(664),b=function(){var e=Object(c.a)(l.a.mark((function e(t){var n,a,o,s,f,b,h,g,y,E,w,x,N,k,j,O,S,A,C,U,D;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,s=t.dispatch,f=t.setLocalEntryData,b=t.moduleName,h=t.moduleSummary,g=t.moduleEntry,y=t.warehouseUuid,E=t.warehouseIdDestination,w=t.areaId,x=t.areaIdDesposition,(N=Object(r.a)(h))[a].checked=o,s(Object(i.a)({type:d.c},"".concat(b,"summaryData"),N)),k=null===N||void 0===N?void 0:N.filter((function(e){if(e.checked)return e})),j=[],g&&g.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&j.push(t.skuUuid)})),O=[],S=k.map(function(){var e=Object(c.a)(l.a.mark((function e(t,n){var a,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:y,dispatch:s,areaId:w.value,moduleName:b});case 8:(o=e.sent)&&(i=o.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=i,O.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(S);case 11:e.sent,A=[],g&&(A=g.jobPost.list.concat(O)),g||(A=O),(C=N[a]).checked||(A=A.filter((function(e){return e.skuUuid!==C.skuUuid}))),U=null===g||void 0===g||null===(n=g.jobPost)||void 0===n?void 0:n.id,D={jobPost:{id:U||0,warehouseSource:y,warehouseDestination:null===E||void 0===E?void 0:E.value,warehouseDestinationName:null===E||void 0===E?void 0:E.label,areaSource:parseInt(null===w||void 0===w?void 0:w.value),areaName:null===w||void 0===w?void 0:w.label,areaDestination:parseInt(null===x||void 0===x?void 0:x.value),areaDestinationName:null===x||void 0===x?void 0:x.label,list:A}},0===A.length&&s(Object(i.a)({type:d.b},"".concat(b,"EntryData"),null)),f(D);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(l.a.mark((function e(t){var n,a,o,i,s,d,f,b,h,g,y,E,w,x,N,k;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,o=t.dispatch,i=t.moduleName,s=t.moduleSummary,d=t.moduleEntry,f=t.warehouseUuid,b=t.areaId,h=t.preAddHandler,(g=Object(r.a)(s))[n].checked=a,y=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),E=[],d&&d.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&E.push(t.skuUuid)})),w=[],x=y.map(function(){var e=Object(c.a)(l.a.mark((function e(t,n){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(v.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:f,dispatch:o,areaId:b.value,moduleName:i});case 8:(r=e.sent)&&(c=r.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=c,t.isNewItem=!0,w.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(x);case 10:e.sent,N=[],d&&(N=d.concat(w)),d||(N=w),(k=g[n]).checked||(N=N.filter((function(e){return e.skuUuid!==k.skuUuid}))),h(N);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.moduleEntry,n=e.moduleName,o=e.setConfirmation,l=e.dispatch,r=e.setIsRequired,c=[],s=Object(a.a)({},t),u=t.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(f.q)({moduleList:e.itemList});return e.itemList.map((function(n){var a,o,l=n.qty,i=n.grade,r=n.ripeness;n.note;"kg"===e.uom?0!=l&&!isNaN(l)||null!==(null===i||void 0===i?void 0:i.value)?"Waste"===(null===n||void 0===n||null===(a=n.grade)||void 0===a?void 0:a.label)||"Semi Waste"===(null===n||void 0===n||null===(o=n.grade)||void 0===o?void 0:o.label)?(isNaN(l)||0==l||""===l||null===l?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,null===i||void 0===i||i.value,n.gradeIsEmpty=!1,null===i||void 0===i||i.label,n.noteIsEmpty=!1):(isNaN(l)||0==l||""===l||null===l?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,null===i||void 0===i||i.value,n.gradeIsEmpty=!1,null===r||void 0===r||r.value,n.ripenessIsEmpty=!1,null===i||void 0===i||i.label,n.noteIsEmpty=!1):(n.qtyIsEmpty=!1,n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1,n.noteIsEmpty=!1):isNaN(l)||0==l||""===l||null===l?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1;return n.qtyIsEmpty||(t>e.initialWeight?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.gradeIsEmpty)||(null===n||void 0===n?void 0:n.ripenessIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?c.push(!1):c.push(!0),n})),e})),e})),m=!1;u.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(m=!0)}))}))})),s.jobPost.list=u,l(Object(i.a)({type:d.b},"".concat(n,"EntryData"),s)),!c.includes(!1)&&m?o({show:!0,name:"submit"}):(o({show:!1,name:null}),r(!0))}}}]);
//# sourceMappingURL=36.f3d1e827.chunk.js.map