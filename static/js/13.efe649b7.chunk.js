(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[13],{664:function(e,t,n){},665:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),r=n(660),c=(n(664),n(56)),l=n(21);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,u=e.statusDisplay,d=void 0!==u&&u,m=e.title,p=void 0===m?"":m,v=e.cancelButtonTitle,f=void 0===v?"Cancel":v,b=e.actionButtonTitle,g=void 0===b?"Submit":b,h=e.cancelButtonClass,E=void 0===h?"bg-background":h,x=e.actionButtonClass,y=void 0===x?"bg-background":x,w=e.actionButtonEvent,k=void 0===w?null:w,N=e.colorText,A=void 0===N?"red":N,j=e.msg1,O=void 0===j?null:j,S=e.msg2,C=void 0===S?null:S,U=e.onCloseFunction,B=void 0===U?null:U,D=e.refreshOnCancel,I=void 0===D||D,P=e.setIsSuccess,T=Object(c.c)();500===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-pensive",p="Server Error",f="Try Again",g="Contact Administration",A="red",O=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",E="bg-green",d=!0,I=!0),408===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",p="Request Timeout",f="Try Again",g="Contact Administration",A="red",O=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",E="bg-green",d=!0,I=!0),400===(null===n||void 0===n?void 0:n.code)&&0==d&&(s="em-alarm_clock",p="Server Error",f="Try Again",g="Contact Administration",A="red",O=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",E="bg-green",d=!0,I=!1),404===(null===n||void 0===n?void 0:n.code)&&(p="Something wrong with the application",f="Try Again",g="Contact Administration",A="red",O=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",E="bg-green",d=!0,I=!1);var M=Object(o.useState)(d),L=Object(a.a)(M,2),W=L[0],R=L[1];return Object(o.useEffect)((function(){R(d)}),[d]),Object(o.useEffect)((function(){}),[W]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},i.a.createElement(r.B,{className:"".concat(W?null:"d-none")},i.a.createElement(r.f,null,i.a.createElement(r.s,{show:W,closeOnBackdrop:!1,onClose:function(){R(!1),"function"===typeof P&&P({success:null,name:null}),T({type:l.k,status:null}),B&&B()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),"function"===typeof P&&P({success:null,name:null}),T({type:l.k,status:null}),B&&B()}})),i.a.createElement(r.v,{className:"px-5 pt-5 border-none"},i.a.createElement(r.w,{className:"text LatoBold ".concat(A)},p," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(r.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},O),i.a.createElement("p",{className:"text"},C)),i.a.createElement(r.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},f?i.a.createElement(r.d,{className:"".concat(E," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){I?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:R,parentOncCloseFunction:B}),T({type:l.k,status:null})}},f):null,g?i.a.createElement(r.d,{className:"".concat(y," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){k?(k(),R(!1)):R(!1)}},g):null," "))))}},667:function(e,t,n){"use strict";var a=n(666),o=n(4),i=n(659),r=n(1),c=n.n(r),l=n(685);t.a=function(e){var t,n,s=e.isEmpty,u=e.title,d=e.placeholder,m=e.options,p=e.selectedValue,v=e.showTitle,f=e.width,b=e.className,g=e.entryListIdx,h=e.onChangeDropdown,E=e.show,x=e.poListIdx,y=e.isDisabled,w=e.style,k=e.noMarginBottom,N=e.resetName,A=e.isMulti,j=e.hideResetOpt,O=Object(r.useState)(),S=Object(i.a)(O,2),C=S[0],U=S[1];Object(r.useEffect)((function(){"empty"===p&&U(!0)}),[p,s]);var B=!!s&&function(e,t){t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},D=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(x)),I=null===D||void 0===D?void 0:D.getBoundingClientRect();Object(r.useEffect)((function(){I=null===D||void 0===D?void 0:D.getBoundingClientRect()}),[C]);var P=document.documentElement.clientWidth,T=[{label:"-".concat(N||u,"-"),value:null}];m&&(T=[].concat(Object(a.a)(T),Object(a.a)(m))),j&&(T=T.filter((function(e){return null===e||void 0===e?void 0:e.value})));var M,L=(null===(n=I)||void 0===n?void 0:n.bottom)>600?"top":"bottom";P<=500&&(L=(null===(M=I)||void 0===M?void 0:M.bottom)>400?"top":"bottom","Categories"===u&&(L="top"));return c.a.createElement("div",{style:w,className:"mr-0 ".concat(w?null:"mr-lg-3"," ").concat(k?null:"mb-3"," ").concat(f," ").concat(b," ").concat(E?null:"d-none")},c.a.createElement("div",{className:" pb-1 LatoBold ".concat(v?null:"d-none")},u),c.a.createElement(l.a,{inputId:"".concat(u,"_").concat(x,"_").concat(g),isMulti:A,isSearchable:!(P<500),isDisabled:y||!1,id:"dropdown".concat(g).concat(x),value:((null===p||void 0===p?void 0:p.value)||!!(null===p||void 0===p?void 0:p.length))&&p,menuIsOpen:C,menuPortal:!0,placeholder:N||d,options:T,onMenuOpen:function(){return U(!0)},onMenuClose:function(){return U(!1)},onChange:function(e){h(e),U(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(L),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:B,option:function(e,t){var n=t.isFocused,a=t.isSelected;t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},668:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),r=n(680),c=n.n(r),l=n(116),s=n(660);t.a=function(e){var t,n,r,u,d=e.skuUuId,m=void 0===d?123:d,p=e.selectAll,v=e.img,f=void 0===v?c.a:v,b=e.skuDescription,g=void 0===b?"SKU Description":b,h=e.skuNumber,E=void 0===h?"1001":h,x=e.uomLabel,y=void 0===x?"weight":x,w=e.uomValue,k=void 0===w?100.3:w,N=e.uom,A=void 0===N?"KG":N,j=e.isCheckedHandler,O=void 0===j?null:j,S=e.check,C=void 0!==S&&S,U=e.idx,B=void 0===U?0:U,D=e.singleView,I=e.setCreatePo,P=e.target,T=e.targetMovementProgress,M=e.targetRepackProgress,L=e.moduleName,W=e.setFromBarcode,R=e.setSingleViewSku,K=document.documentElement.clientWidth<=500,V=i.a.useState(C),z=Object(a.a)(V,2),F=z[0],Y=z[1],H=function(){Y(!0),"function"===typeof R&&R(m),"function"!==typeof R&&O(!0),"function"===typeof I&&I({show:!0,skuNumber:E}),"function"===typeof W&&W(!1)},G=!!P||"d-none",J=0,Q=0;(null===M||void 0===M?void 0:M.length)&&"repack"===L&&(J=null===(t=M[0])||void 0===t?void 0:t.totalPack,Q=null===(n=M[0])||void 0===n?void 0:n.totalUom);(null===T||void 0===T?void 0:T.length)&&"repack"!==L&&(J=null===(r=T[0])||void 0===r?void 0:r.totalMove,Q=null===(u=T[0])||void 0===u?void 0:u.totalUos);return Object(o.useEffect)((function(e){p&&(Y(!0),O(!0)),!1===p&&Y(!1)}),[p]),i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&H()},tabindex:"0",key:B,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(K?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(F?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(K?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){Y(!F),O&&O(!F)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(F?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:f,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},g),i.a.createElement("div",{className:"text fontSizeTitle"},E))),i.a.createElement("hr",{className:"".concat(K?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(K?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(K?"justify-content-end":null)},i.a.createElement("div",{className:"w-25 mr-4 ".concat(G," tooltips")},i.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},i.a.createElement("span",{className:"pl-1 pr-1"},"repack"===L?"Repack Percentage":"Movement Percentage")),i.a.createElement("div",{className:"latoBold"},"".concat(J,"/").concat(Q),i.a.createElement("span",{className:"font-green"}," (".concat(Object(l.e)(J/Q*100),"%)"))),i.a.createElement(s.A,{value:J,max:Q,className:"mb-3"})),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(G)}),i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(K?"d-none":null)},"Total ".concat("KG"===A.toUpperCase()?y.toUpperCase():A.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(l.e)(k)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},A)),i.a.createElement("div",{onClick:H,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(D?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},673:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},675:function(e,t,n){"use strict";var a=n(659),o=n(1),i=n.n(o),r=n(56),c=n(667),l=n(676),s=n.n(l);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,l=(e.textSearch,e.searchHandler),u=void 0===l?null:l,d=e.barcodeScanner,m=e.filter,p=void 0===m?"":m,v=(e.width,e.className,e.filterDropdown),f=void 0===v?null:v,b=(e.value,e.showScanner),g=e.areaId,h=e.setAreaId,E=e.areaDestination,x=e.setAreaDestination,y=e.moduleName,w=e.setSearch,k=e.category,N=e.setCategory,A=Object(o.useState)(),j=Object(a.a)(A,2),O=j[0],S=void 0!==O&&O,C=j[1],U="",B="";S?(U="Show Filter",B=""):(U="Hide Filter",B=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var D=Object(o.useState)(""),I=Object(a.a)(D,2),P=I[0],T=I[1],M=Object(r.d)((function(e){return e.categoryList}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){T(e.target.value),"function"===typeof w&&w(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u(P)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3"},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"},i.a.createElement(c.a,{isMulti:!0,noMarginBottom:!0,onChangeDropdown:function(e){"function"===typeof N&&N(e)},selectedValue:k,options:M,className:"w-30",placeholder:"Select Category",title:"Categories",show:!0})),i.a.createElement("div",{className:"mr-0 mr-md-3"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,o=e.setAreaDestination,i=e.barcodeScanner,r=e.moduleName;if("stockMovement"!==r)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===r){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void o("empty");"function"===typeof i&&i(!0)}}({areaId:g,areaDestination:E,setAreaId:h,setAreaDestination:x,barcodeScanner:d,moduleName:y})},className:"pointer ".concat(b?null:"d-none"),src:s.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},p?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:S,setFilterShow:C})}},i.a.createElement("div",{className:"filter-text"},U)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),B)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return u(P)}},"Search"))),i.a.createElement("div",null,S?null:i.a.createElement("div",{className:"w-100"}," ",f," ")))}},676:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},697:function(e,t,n){"use strict";var a=n(1),o=n.n(a),i=n(22),r=n.n(i),c=n(660);n(668);t.a=function(e){var t,n,a,i,l=e.moduleEntry,s=e.redirect,u=e.previousPage,d=e.discard,m=e.setDiscard,p=e.moduleFirstLoad,v=document.documentElement.clientHeight-900,f=!(d||!l);return p?o.a.createElement(c.B,{className:f?null:"d-none"},o.a.createElement(c.f,null,o.a.createElement(c.s,{show:f,size:"lg",closeOnBackdrop:!1},o.a.createElement("div",{className:"d-flex flex-row-reverse pr-3 pt-3 mt-1"},o.a.createElement("i",{onClick:function(){return u()},className:"iconU-modalClose"})),o.a.createElement(c.v,{className:"px-5 pt-3 border-none"},o.a.createElement(c.w,{className:"green LatoBold respon-txt"},"Unfinished Entry Left! ",o.a.createElement("span",null,o.a.createElement("i",{className:"em em-speak_no_evil"})))),o.a.createElement(c.t,{className:"px-5 py-0",style:{minHeight:v}},o.a.createElement("p",{className:"text mb-3 fontSizeWeightNumber"},"You must complete the Entry that you worked on :"),o.a.createElement("div",{style:{backgroundColor:"#F5F7FA"},className:"w-100  rounded p-3 d-flex justify-content-between align-items-center"},o.a.createElement("div",null,o.a.createElement("div",{className:"respon-txt"},r()(null===l||void 0===l||null===(t=l.jobPost)||void 0===t?void 0:t.createdAt).format("dddd, MMMM DD YYYY, h:mm:ss a")),o.a.createElement("div",{className:"green respon-txt"},"".concat(null===l||void 0===l||null===(n=l.jobPost)||void 0===n?void 0:n.areaName," - ").concat(null===l||void 0===l||null===(a=l.jobPost)||void 0===a?void 0:a.list.length," SKU").concat((null===l||void 0===l||null===(i=l.jobPost)||void 0===i?void 0:i.list.length)>1?"(s)":""))),o.a.createElement("div",{onClick:function(){return m()},className:"iconU-entryTrash emptyTextField",style:{opacity:.5,fontSize:"1.2rem"}})),o.a.createElement("p",{className:"text mt-3 fontSizeWeightNumber"},"Do you want to continue this Entries ?"),o.a.createElement("br",null)),o.a.createElement(c.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},o.a.createElement(c.d,{onClick:function(){return u()},className:"bg-background text no-shadow px-5 mb-0 mx-0"},"Later"),o.a.createElement(c.d,{onClick:function(){return s()},className:"bg-green no-shadow px-5 mb-0 ml-3 mr-0"},"Continue")," ")))):o.a.createElement(c.s,{show:!0,size:"lg",closeOnBackdrop:!1},o.a.createElement("div",{className:"green h4 w-100 text-center p-4"},"Checking Unfinished Entry"))}},753:function(e,t,n){},929:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return b}));n(4);var a=n(65),o=n.n(a),i=n(71),r=n(666),c=n(91),l=n(22),s=n.n(l),u=n(21),d=n(663),m=n(669),p=n(116),v=n(662),f=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,l,f,b,g,h,E,x,y,w,k,N,A,j,O,S,C,U;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,l=t.checked,f=t.dispatch,b=t.setLocalEntryData,g=t.moduleName,h=t.moduleSummary,E=t.moduleEntry,x=t.warehouseUuid,y=t.areaId,(w=Object(r.a)(h))[a].checked=l,f(Object(i.a)({type:u.c},"".concat(g,"summaryData"),w)),k=null===w||void 0===w?void 0:w.filter((function(e){if(e.checked)return e})),N=[],E&&E.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&N.push(t.skuUuid)})),A=[],j=k.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(m.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(d.f)({skuId:t.skuUuid,warehouseUuid:x,dispatch:f,areaId:y.value,moduleName:g});case 8:(i=e.sent)&&(r=i.map((function(e){e.itemList=[];var n=e.expiryDate?s()(e.expiryDate).valueOf():null,a=e.inboundDate?s()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=r,A.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(j);case 11:e.sent,O=[],E&&(O=E.jobPost.list.concat(A)),E||(O=A),(S=w[a]).checked||(O=O.filter((function(e){return e.skuUuid!==S.skuUuid}))),C=null===E||void 0===E||null===(n=E.jobPost)||void 0===n?void 0:n.id,U={jobPost:{id:C||0,warehouseSource:x,warehouseDestination:x,areaSource:parseInt(null===y||void 0===y?void 0:y.value),areaName:null===y||void 0===y?void 0:y.label,areaDestination:parseInt(null===y||void 0===y?void 0:y.value),list:O.sort((function(e,t){return Object(v.f)(e,t)}))}},0===O.length&&f(Object(i.a)({type:u.b},"".concat(g,"EntryData"),null)),b(U);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,i,l,u,v,f,b,g,h,E,x,y,w,k,N;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,i=t.dispatch,l=t.moduleName,u=t.moduleSummary,v=t.moduleEntry,f=t.warehouseUuid,b=t.areaId,g=t.preAddHandler,(h=Object(r.a)(u))[n].checked=a,E=null===h||void 0===h?void 0:h.filter((function(e){if(e.checked)return e})),x=[],v&&v.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&x.push(t.skuUuid)})),y=[],w=E.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(m.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(d.f)({skuId:t.skuUuid,warehouseUuid:f,dispatch:i,areaId:b.value,moduleName:l});case 8:(r=e.sent)&&(c=r.map((function(e){e.itemList=[];var n=e.expiryDate?s()(e.expiryDate).valueOf():null,a=e.inboundDate?s()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=c,y.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(w);case 10:e.sent,k=[],v&&(k=v.concat(y)),v||(k=y),(N=h[n]).checked||(k=k.filter((function(e){return e.skuUuid!==N.skuUuid}))),g(k);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=13.efe649b7.chunk.js.map