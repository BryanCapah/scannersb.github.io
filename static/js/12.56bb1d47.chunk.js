(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[12],{1079:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return b}));n(5);var a=n(65),o=n.n(a),i=n(71),r=n(668),c=n(91),l=n(23),u=n.n(l),s=n(21),d=n(663),m=n(670),p=n(116),f=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,l,f,b,v,h,g,y,E,x,k,N,j,w,O,A,S,U;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,l=t.checked,f=t.dispatch,b=t.setLocalEntryData,v=t.moduleName,h=t.moduleSummary,g=t.moduleEntry,y=t.warehouseUuid,E=t.areaId,(x=Object(r.a)(h))[a].checked=l,f(Object(i.a)({type:s.c},"".concat(v,"summaryData"),x)),k=null===x||void 0===x?void 0:x.filter((function(e){if(e.checked)return e})),N=[],g&&g.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&N.push(t.skuUuid)})),j=[],w=k.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(m.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(d.b)({skuId:t.skuUuid,warehouseUuid:y,dispatch:f,areaId:E.value,moduleName:v});case 8:(i=e.sent)&&(r=i.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=r,j.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(w);case 11:e.sent,O=[],g&&(O=g.jobPost.list.concat(j)),g||(O=j),(A=x[a]).checked||(O=O.filter((function(e){return e.skuUuid!==A.skuUuid}))),S=null===g||void 0===g||null===(n=g.jobPost)||void 0===n?void 0:n.id,U={jobPost:{id:S||0,warehouseSource:y,warehouseDestination:y,areaSource:parseInt(null===E||void 0===E?void 0:E.value),areaName:null===E||void 0===E?void 0:E.label,areaDestination:parseInt(null===E||void 0===E?void 0:E.value),list:O}},0===O.length&&f(Object(i.a)({type:s.b},"".concat(v,"EntryData"),null)),b(U);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,i,l,s,f,b,v,h,g,y,E,x,k,N,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,i=t.dispatch,l=t.moduleName,s=t.moduleSummary,f=t.moduleEntry,b=t.warehouseUuid,v=t.areaId,h=t.preAddHandler,(g=Object(r.a)(s))[n].checked=a,y=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),E=[],f&&f.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&E.push(t.skuUuid)})),x=[],k=y.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(m.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(d.b)({skuId:t.skuUuid,warehouseUuid:b,dispatch:i,areaId:v.value,moduleName:l});case 8:(r=e.sent)&&(c=r.map((function(e){e.itemList=[];var n=e.expiryDate?u()(e.expiryDate).valueOf():null,a=e.inboundDate?u()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(p.e)(e.initialWeight)?Object(p.e)(e.initialWeight):e.initialWeight,e})),t.poList=c,x.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(k);case 10:e.sent,N=[],f&&(N=f.concat(x)),f||(N=x),(j=g[n]).checked||(N=N.filter((function(e){return e.skuUuid!==j.skuUuid}))),h(N);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},664:function(e,t,n){"use strict";n.d(t,"k",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"q",(function(){return p})),n.d(t,"o",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"p",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"j",(function(){return g})),n.d(t,"g",(function(){return y})),n.d(t,"n",(function(){return E})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return k})),n.d(t,"l",(function(){return N})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return w})),n.d(t,"m",(function(){return O}));var a=n(65),o=n.n(a),i=n(71),r=n(5),c=n(91),l=n(21),u=n(663),s=function(e){var t=e.moduleEntry,n=0;return t&&t.jobPost.list.map((function(e){e.checked&&(n+=1)})),n},d=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,c,u,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.dispatch,a=t.moduleEntry,c=t.moduleSummary,u=t.moduleName,s=Object(r.a)({},c),a.map((function(e){s.jobPost.list.push(e)})),n(Object(i.a)({type:l.b},"".concat(u,"EntryData"),s.jobPost.list.length>0?s:null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t,n=e.data,a=!1;null===n||void 0===n||null===(t=n.poList)||void 0===t||t.map((function(e){e.edited&&(a=!0)}));return a},p=function(e){var t=e.moduleEntry,n=e.activeSku,a=0;return t&&t.jobPost.list[n].poList.map((function(e){e.itemList.map((function(e){var t=Number.isInteger(e.qty)?parseInt(e.qty):Number.parseFloat(e.qty?e.qty:0);a+=t}))})),a=Number.isInteger(a)?a:Number.parseFloat(a).toFixed(2)},f=function(e){var t=e.moduleEntry,n=e.activeSku,a=0;return t&&t.jobPost.list[n].poList.map((function(e){e.itemList.map((function(e){var t=Number.isInteger(e.pack)?parseInt(e.pack):Number.parseFloat(e.pack?e.pack:0);a+=t}))})),a=Number.isInteger(a)?a:Number.parseFloat(a).toFixed(2)},b=function(e){var t,n,a=e.moduleEntry,o=!1;null===a||void 0===a||null===(t=a.jobPost)||void 0===t||null===(n=t.list)||void 0===n||n.map((function(e){m({data:e})&&(o=!0)}));return o},v=function(e){return e?Number.isInteger(e)?e:Number.parseFloat(e).toFixed(2):0},h=function(e){var t=!1;return e.poList.map((function(e){e.itemList.map((function(e){(e.qtyIsEmpty||e.noteIsEmpty||e.outboundTypeIsEmpty||e.ripenessIsEmpty||e.gradeIsEmpty||e.packIsEmpty)&&(t=!0)}))})),t},g=function(e){var t=e.isLoading,n=e.summaryData;return!(void 0===n?null:n)&&!t||!t},y=function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,o=e.idx,c=e.checked,u=Object(r.a)({},n);u.jobPost.list[o].checked=c,t(Object(i.a)({type:l.b},"".concat(a,"EntryData"),u))},E=function(e){var t=e.moduleList,n=0;return t&&t.map((function(e){var t=Number.isInteger(e.qty)?parseInt(e.qty):Number.parseFloat(e.qty?e.qty:0);n+=t})),n=Number.isInteger(n)?n:Number.parseFloat(n).toFixed(2)},x=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,c,s,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.dispatch,a=t.moduleEntry,c=t.moduleName,s=Object(r.a)({},a),d=a.jobPost.list.filter((function(e){if(e.checked)return e})),s.jobPost.list=d,n(Object(i.a)({type:l.b},"".concat(c,"EntryData"),s)),0===d.length&&Object(u.h)({id:s.jobPost.id,moduleName:c,dispatch:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.dispatch,n=e.moduleSummary,a=e.moduleName,o=Object(r.a)({},n);o.jobPost.list.map((function(e){e.checked=!0})),t(Object(i.a)({type:l.b},"".concat(a,"EntryData"),o))},N=function(e){var t=e.dispatch,n=e.selected;n&&t({type:l.j,areaId:n})},j=function(e){var t=e.activeSku,n=e.moduleEntry,a=e.poListIdx,o=e.entryListIdx,i=parseInt(0);return n.jobPost.list[t].poList[a].itemList.map((function(e,t){t!==o&&(i+=Number.isInteger(null===e||void 0===e?void 0:e.qty)?null===e||void 0===e?void 0:e.qty:parseFloat(null===e||void 0===e?void 0:e.qty))})),i},w=function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,o=e.activeSku,c=e.poListIdx,u=e.entryListIdx,s=(e.e,e.countQty),d=Object(r.a)({},n),m=s({moduleEntry:n,activeSku:o,poListIdx:c,entryListIdx:u}),p=d.jobPost.list[o].poList[c].initialWeight;d.jobPost.list[o].poList[c].initialWeightScreenUpdate=p-m,d.jobPost.list[o].poList[c].itemList.splice(u,1),0===d.jobPost.list[o].poList[c].itemList.length&&(d.jobPost.list[o].poList[c].edited=!1),t(Object(i.a)({type:l.b},"".concat(a,"EntryData"),d))},O=function(e){var t,n=e.search,a=e.updateList,o=e.dispatch,i=e.zeroQuantity;(0,(t={dispatch:o,zeroQuantity:i}).dispatch)({type:"SET_ZERO_QUANTITY",data:!t.zeroQuantity}),n&&a(!i)}},666:function(e,t,n){},667:function(e,t,n){"use strict";var a=n(661),o=n(1),i=n.n(o),r=n(665),c=(n(666),n(56)),l=n(21),u=n(680);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,d=e.statusDisplay,m=void 0!==d&&d,p=e.title,f=void 0===p?"":p,b=e.cancelButtonTitle,v=void 0===b?"Cancel":b,h=e.actionButtonTitle,g=void 0===h?"Submit":h,y=e.cancelButtonClass,E=void 0===y?"bg-background":y,x=e.actionButtonClass,k=void 0===x?"bg-background":x,N=e.actionButtonEvent,j=void 0===N?null:N,w=e.colorText,O=void 0===w?"red":w,A=e.msg1,S=void 0===A?null:A,U=e.msg2,C=void 0===U?null:U,I=e.onCloseFunction,L=void 0===I?null:I,P=e.refreshOnCancel,D=void 0===P||P,B=e.setIsSuccess,T=Object(c.c)();500===(null===n||void 0===n?void 0:n.code)&&0==m&&(s="em-pensive",f="Server Error",v="Try Again",g="Contact Administration",O="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",E="bg-green",m=!0,D=!0),408===(null===n||void 0===n?void 0:n.code)&&0==m&&(s="em-alarm_clock",f="Request Timeout",v="Try Again",g="Contact Administration",O="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",E="bg-green",m=!0,D=!0),400===(null===n||void 0===n?void 0:n.code)&&0==m&&(s="em-alarm_clock",f="Server Error",v="Try Again",g="Contact Administration",O="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",E="bg-green",m=!0,D=!1),404===(null===n||void 0===n?void 0:n.code)&&(f="Something wrong with the application",v="Try Again",g="Contact Administration",O="red",S=null===n||void 0===n?void 0:n.message,C="Please try again or contact Sayurbox administration for further information.",E="bg-green",m=!0,D=!1);var F=Object(o.useState)(m),W=Object(a.a)(F,2),z=W[0],R=W[1];return Object(o.useEffect)((function(){R(m)}),[m]),Object(o.useEffect)((function(){}),[z]),window.onkeydown=function(e){return 27===e.keyCode?R(!1):null},i.a.createElement(r.B,{className:"".concat(z?null:"d-none")},i.a.createElement(r.f,null,i.a.createElement(r.s,{show:z,closeOnBackdrop:!1,onClose:function(){R(!1),Object(u.isFunction)(B)&&B({success:null,name:null}),T({type:l.k,status:null}),L&&L()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){R(!1),Object(u.isFunction)(B)&&B({success:null,name:null}),T({type:l.k,status:null}),L&&L()}})),i.a.createElement(r.v,{className:"px-5 pt-5 border-none"},i.a.createElement(r.w,{className:"text LatoBold ".concat(O)},f," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(s)})))),i.a.createElement(r.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},S),i.a.createElement("p",{className:"text"},C)),i.a.createElement(r.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},v?i.a.createElement(r.d,{className:"".concat(E," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){D?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),console.log(n),n&&n()}({setShow:R,parentOncCloseFunction:L}),T({type:l.k,status:null})}},v):null,g?i.a.createElement(r.d,{className:"".concat(k," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){j?(j(),R(!1)):R(!1)}},g):null," "))))}},671:function(e,t,n){"use strict";var a=n(668),o=n(5),i=n(661),r=n(1),c=n.n(r),l=n(707);t.a=function(e){var t,n,u,s=e.isEmpty,d=e.title,m=e.placeholder,p=e.options,f=e.selectedValue,b=e.showTitle,v=e.width,h=e.className,g=e.entryListIdx,y=e.onChangeDropdown,E=e.show,x=e.poListIdx,k=e.isDisabled,N=e.style,j=e.noMarginBottom,w=Object(r.useState)(),O=Object(i.a)(w,2),A=O[0],S=O[1];Object(r.useEffect)((function(){"empty"===f&&S(!0)}),[f,s]);var U=!!s&&function(e,t){t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},C=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(x)),I=null===C||void 0===C?void 0:C.getBoundingClientRect();Object(r.useEffect)((function(){I=null===C||void 0===C?void 0:C.getBoundingClientRect()}),[A]);var L=document.documentElement.clientWidth,P=[{label:"-".concat(d,"-"),value:null}];p&&(P=[].concat(Object(a.a)(P),Object(a.a)(p)));var D=(null===(n=I)||void 0===n?void 0:n.bottom)>600?"top":"bottom";return L<=500&&(D=(null===(u=I)||void 0===u?void 0:u.bottom)>400?"top":"bottom"),c.a.createElement("div",{style:N,className:"mr-0 ".concat(N?null:"mr-lg-3"," ").concat(j?null:"mb-3"," ").concat(v," ").concat(h," ").concat(E?null:"d-none")},c.a.createElement("div",{className:" pb-1 LatoBold ".concat(b?null:"d-none")},d),c.a.createElement(l.a,{isSearchable:!(L<500),isDisabled:k||!1,id:"dropdown".concat(g).concat(x),value:!!(null===f||void 0===f?void 0:f.value)&&f,menuIsOpen:A,menuPortal:!0,placeholder:m,options:P,onMenuOpen:function(){return S(!0)},onMenuClose:function(){return S(!1)},onChange:function(e){y(e),S(!1)},menuPortalTarget:document.body,maxMenuHeight:200,menuPlacement:"".concat(D),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:U,option:function(e,t){var n=t.isFocused,a=t.isSelected;t.isOpen;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},673:function(e,t,n){},674:function(e,t,n){"use strict";var a=n(661),o=n(1),i=n.n(o),r=n(696),c=n.n(r),l=n(116);n(708);t.a=function(e){var t=e.img,n=void 0===t?c.a:t,o=e.skuDescription,r=void 0===o?"SKU Description":o,u=e.skuNumber,s=void 0===u?"1001":u,d=e.uomLabel,m=void 0===d?"weight":d,p=e.uomValue,f=void 0===p?100.3:p,b=e.uom,v=void 0===b?"KG":b,h=e.isCheckedHandler,g=void 0===h?null:h,y=e.check,E=void 0!==y&&y,x=e.idx,k=void 0===x?0:x,N=e.singleView,j=e.setCreatePo,w=document.documentElement.clientWidth<=500,O=i.a.useState(E),A=Object(a.a)(O,2),S=A[0],U=A[1],C=function(){U(!0),g(!0),"function"===typeof j&&j({show:!0,skuNumber:s})};return i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&C()},tabindex:"0",key:k,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(w?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(S?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(w?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){U(!S),g&&g(!S)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(S?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:n,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},r),i.a.createElement("div",{className:"text fontSizeTitle"},s))),i.a.createElement("hr",{className:"".concat(w?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(w?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(w?"justify-content-end":null)},i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(w?"d-none":null)},"Total ".concat("KG"===v.toUpperCase()?m.toUpperCase():v.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(l.e)(f)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},v)),i.a.createElement("div",{onClick:C,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(N?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},688:function(e,t,n){"use strict";var a=n(661),o=n(1),i=n.n(o),r=n(690),c=n.n(r);t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,r=(e.textSearch,e.searchHandler),l=void 0===r?null:r,u=e.barcodeScanner,s=e.filter,d=void 0===s?"":s,m=(e.width,e.className,e.filterDropdown),p=void 0===m?null:m,f=(e.value,Object(o.useState)()),b=Object(a.a)(f,2),v=b[0],h=void 0!==v&&v,g=b[1],y="",E="";h?(y="Show Filter",E=""):(y="Hide Filter",E=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var x=Object(o.useState)(null),k=Object(a.a)(x,2),N=k[0],j=k[1];return i.a.createElement("div",{className:"search-bar"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){j(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&l(N)}(e)}}),i.a.createElement("img",{onClick:function(){return u(!0)},className:"pointer",src:c.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},d?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:h,setFilterShow:g})}},i.a.createElement("div",{className:"filter-text"},y)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),E)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return l(N)}},"Search"))),i.a.createElement("div",null,h?null:i.a.createElement("div",{className:"w-100"}," ",p," ")))}},690:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},691:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},783:function(e,t,n){"use strict";var a=n(1),o=n.n(a),i=n(23),r=n.n(i),c=n(665);n(673);t.a=function(e){var t,n,a,i,l=e.moduleEntry,u=e.redirect,s=e.previousPage,d=e.discard,m=e.setDiscard,p=e.moduleFirstLoad,f=document.documentElement.clientHeight-900,b=!(d||!l);return p?o.a.createElement(c.B,{className:b?null:"d-none"},o.a.createElement(c.f,null,o.a.createElement(c.s,{show:b,size:"lg",closeOnBackdrop:!1},o.a.createElement("div",{className:"d-flex flex-row-reverse pr-3 pt-3 mt-1"},o.a.createElement("i",{onClick:function(){return s()},className:"iconU-modalClose"})),o.a.createElement(c.v,{className:"px-5 pt-3 border-none"},o.a.createElement(c.w,{className:"green LatoBold respon-txt"},"Unfinished Entry Left! ",o.a.createElement("span",null,o.a.createElement("i",{className:"em em-speak_no_evil"})))),o.a.createElement(c.t,{className:"px-5 py-0",style:{minHeight:f}},o.a.createElement("p",{className:"text mb-3 fontSizeWeightNumber"},"You must complete the Entry that you worked on :"),o.a.createElement("div",{style:{backgroundColor:"#F5F7FA"},className:"w-100  rounded p-3 d-flex justify-content-between align-items-center"},o.a.createElement("div",null,o.a.createElement("div",{className:"respon-txt"},r()(null===l||void 0===l||null===(t=l.jobPost)||void 0===t?void 0:t.createdAt).format("dddd, MMMM DD YYYY, h:mm:ss a")),o.a.createElement("div",{className:"green respon-txt"},"".concat(null===l||void 0===l||null===(n=l.jobPost)||void 0===n?void 0:n.areaName," - ").concat(null===l||void 0===l||null===(a=l.jobPost)||void 0===a?void 0:a.list.length," SKU").concat((null===l||void 0===l||null===(i=l.jobPost)||void 0===i?void 0:i.list.length)>1?"(s)":""))),o.a.createElement("div",{onClick:function(){return m()},className:"iconU-entryTrash emptyTextField",style:{opacity:.5,fontSize:"1.2rem"}})),o.a.createElement("p",{className:"text mt-3 fontSizeWeightNumber"},"Do you want to continue this Entries ?"),o.a.createElement("br",null)),o.a.createElement(c.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},o.a.createElement(c.d,{onClick:function(){return s()},className:"bg-background text no-shadow px-5 mb-0 mx-0"},"Later"),o.a.createElement(c.d,{onClick:function(){return u()},className:"bg-green no-shadow px-5 mb-0 ml-3 mr-0"},"Continue")," ")))):o.a.createElement(c.s,{show:!0,size:"lg",closeOnBackdrop:!1},o.a.createElement("div",{className:"green h4 w-100 text-center p-4"},"Checking Unfinished Entry"))}},850:function(e,t,n){}}]);
//# sourceMappingURL=12.56bb1d47.chunk.js.map