(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[70],{1200:function(e,t,n){"use strict";n.r(t);var a=n(653),i=n(1),r=n.n(i),o=n(20),u=n(56),s=n(19),l=n(673),c=n(657),d=n(664),m=n(674),p=n.n(m),v=(n(724),n(772)),y=n(656),f=n(660),h=n(717),b=n(686),E=n(671);t.default=Object(o.i)((function(e){var t,n,m,k,g,w=Object(u.c)(),x=Object(o.g)(),j=Object(E.c)(290),N=j.height,O=j.emptyItem,U=Object(E.p)({dispatch:w}),I=U.moduleName,D=U.thereAreRequest,L=U.moduleFirstLoad,S=U.warehouseUuid,P=U.status,W=U.isLoading,q=U.wasteEntryData,B=U.areaId,C=U.summary,H=U.setSummary,T=U.localEntryData,K=U.setLocalEntryData,A=U.search,F=U.setSearch,M=U.discard,z=U.setDiscard,J=U.isCheckedTotal,R=Object(i.useState)(),V=Object(a.a)(R,2),G=V[0],Q=V[1],X=Object(i.useState)(),Y=Object(a.a)(X,2),Z=Y[0],$=Y[1],_=J>1?"s":"",ee=(null===C||void 0===C?void 0:C.length)?"flex-column":"flex-row",te=0===D&&T&&(null===T||void 0===T||null===(t=T.jobPost)||void 0===t||null===(n=t.list)||void 0===n?void 0:n.length)>0;return r.a.createElement("div",{className:"w-100  stock-take-summary"},r.a.createElement(b.a,{discard:M,module:"Inventory Entry - Waste",moduleEntry:q,close:function(){return z(!1)},discardEntry:function(e){return Object(c.o)({id:e,moduleName:I,dispatch:w,setDiscard:z})}}),r.a.createElement(h.a,{discard:M,moduleFirstLoad:L,moduleEntry:q,redirect:function(){return e.history.push("/inventory-entry/waste/weight-entry")},previousPage:function(){return x.goBack()},setDiscard:function(){return z(!0)}}),r.a.createElement(f.a,{status:P}),r.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white border-all radius-all mb-3"},r.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},r.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},r.a.createElement("div",null,"Enter SKU or Description"," ",r.a.createElement("span",{className:"green"},"(".concat(J," Selected SKU").concat(_,")"))))),r.a.createElement(l.a,{setSortBy:$,moduleName:I,category:G,setCategory:Q,placeholder:"Enter SKU",filter:!1,searchHandler:function(e){return Object(c.g)({category:G,dispatch:w,desc:e,warehouseUuid:S,areaId:B,setModule:H,transaction:"waste",module:T},F(e))}}),r.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat(ee," w-100 text-center"),style:{minHeight:N,maxHeight:N}},(null===C||void 0===C?void 0:C.length)?null===C||void 0===C||null===(m=C.sort((function(e,t){return Object(y.g)(e,t,null===Z||void 0===Z?void 0:Z.value)})))||void 0===m?void 0:m.map((function(e,t){return r.a.createElement(d.a,{key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(v.b)({idx:t,checked:e,dispatch:w,setLocalEntryData:K,moduleSummary:C,moduleEntry:T,moduleName:I,warehouseUuid:S,areaId:B})},check:null===e||void 0===e?void 0:e.checked})})):r.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:O,maxHeight:O}},Object(y.s)({isLoading:W,summary:C})?B&&0===(null===C||void 0===C?void 0:C.length)?r.a.createElement("div",null,"Sorry, we couldn't find any matches for '",r.a.createElement("span",{className:"LatoBold"},A),"' in ",null===B||void 0===B?void 0:B.label," area.",r.a.createElement("br",null),"Please Try search with another term."):"Enter SKU":r.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),r.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},r.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},r.a.createElement("button",{tabIndex:"0",onClick:function(){return e.history.push("/inventory-entry/waste/CSV-upload")},type:"button",className:"btn sku-item px-4 no-shadow border-all bg-white fontSizeButton"},"Upload File"),r.a.createElement("button",{tabIndex:"0",onClick:function(){te&&(w({type:s.b,wasteEntryData:T}),e.history.push("/inventory-entry/waste/weight-entry"))},type:"button",className:"btn sku-item px-5 fontSizeButton no-shadow text-white ".concat(te?"bg-green":"bg-lineGrey")},T&&0!==(null===T||void 0===T||null===(k=T.jobPost)||void 0===k||null===(g=k.list)||void 0===g?void 0:g.length)||0!==D?te?"Next":"Processing...":"Next"))))}))},686:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(655);n(665);t.a=function(e){var t=e.discard,n=e.moduleEntry,a=e.close,o=e.discardEntry,u=e.module;document.documentElement.clientHeight;return i.a.createElement(r.B,{className:t?null:"d-none"},i.a.createElement(r.f,null,i.a.createElement(r.s,{show:t,size:"lg",closeOnBackdrop:!1},i.a.createElement("div",{className:"d-flex flex-row-reverse pr-3 pt-3 mt-1"},i.a.createElement("i",{onClick:function(){return a()},className:"iconU-modalClose"})),i.a.createElement(r.v,{className:"px-5 pb-4 mb-2 pt-4 mt-2 border-none"},i.a.createElement(r.w,{className:"red LatoBold"},"Discard? ",i.a.createElement("span",null,i.a.createElement("i",{className:"em em-astonished"})))),i.a.createElement(r.t,{className:"px-5 pb-5 mb-4 py-0"},i.a.createElement("p",{className:"text mb-3 h5 respon-txt"},"Are you sure you want to discard ",i.a.createElement("span",{className:"green"}," ".concat(null===n||void 0===n?void 0:n.jobPost.list.length," selected SKU ").concat((null===n||void 0===n?void 0:n.jobPost.list.length)>1?"(s)":"")),"from this",i.a.createElement("div",{className:"green h5 pt-2 respon-txt"},u)),i.a.createElement("br",null),i.a.createElement(r.d,{onClick:function(){return o(null===n||void 0===n?void 0:n.jobPost.id)},className:"bg-background text no-shadow pl-5 pr-5 mr-3 LatoBlack"},"Discard"),i.a.createElement(r.d,{onClick:function(){return a()},className:"bg-green no-shadow pl-4 pr-4 LatoBlack"},"Don't Discard")," "))))}},724:function(e,t,n){},772:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return b}));var a=n(4),i=n(65),r=n.n(i),o=n(70),u=n(658),s=n(89),l=n(22),c=n.n(l),d=n(19),m=n(657),p=n(666),v=n(114),y=n(656),f=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,i,l,v,f,h,b,E,k,g,w,x,j,N,O,U,I,D;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,i=t.checked,l=t.dispatch,v=t.setLocalEntryData,f=t.moduleName,h=t.moduleSummary,b=t.moduleEntry,E=t.warehouseUuid,k=t.areaId,(g=Object(u.a)(h))[a].checked=i,l(Object(o.a)({type:d.c},"".concat(f,"summaryData"),g)),w=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),x=[],b&&b.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&x.push(t.skuUuid)})),j=[],N=w.map(function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===(null===e||void 0===e?void 0:e.label)||"Semi Waste"===(null===e||void 0===e?void 0:e.label)})),e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:E,dispatch:l,areaId:k.value,moduleName:f});case 8:(i=e.sent)&&(o=i.map((function(e){e.itemList=[];var n=e.expiryDate?c()(e.expiryDate).valueOf():null,a=e.inboundDate?c()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=o,j.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(N);case 11:e.sent,O=[],b&&(O=b.jobPost.list.concat(j)),b||(O=j),(U=g[a]).checked||(O=O.filter((function(e){return e.skuUuid!==U.skuUuid}))),I=null===b||void 0===b||null===(n=b.jobPost)||void 0===n?void 0:n.id,D={jobPost:{id:I||0,warehouseSource:E,warehouseDestination:E,areaSource:parseInt(null===k||void 0===k?void 0:k.value),areaName:null===k||void 0===k?void 0:k.label,areaDestination:parseInt(null===k||void 0===k?void 0:k.value),list:O.sort((function(e,t){return Object(y.g)(e,t)}))}},0===O.length&&l(Object(o.a)({type:d.b},"".concat(f,"EntryData"),null)),v(D);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,i,o,l,d,y,f,h,b,E,k,g,w,x,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,i=t.dispatch,o=t.moduleName,l=t.moduleSummary,d=t.moduleEntry,y=t.warehouseUuid,f=t.areaId,h=t.preAddHandler,(b=Object(u.a)(l))[n].checked=a,E=null===b||void 0===b?void 0:b.filter((function(e){if(e.checked)return e})),k=[],d&&d.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&k.push(t.skuUuid)})),g=[],w=E.map(function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,u,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===(null===e||void 0===e?void 0:e.label)||"Semi Waste"===(null===e||void 0===e?void 0:e.label)})),e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:y,dispatch:i,areaId:f.value,moduleName:o});case 8:(u=e.sent)&&(s=u.map((function(e){e.itemList=[];var n=e.expiryDate?c()(e.expiryDate).valueOf():null,a=e.inboundDate?c()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(v.e)(e.initialWeight)?Object(v.e)(e.initialWeight):e.initialWeight,e})),t.poList=s,t.isNewItem=!0,g.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(w);case 10:e.sent,x=[],d&&(x=d.concat(g)),d||(x=g),(j=b[n]).checked||(x=x.filter((function(e){return e.skuUuid!==j.skuUuid}))),h(x);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.setActiveSKU,n=e.moduleEntry,i=e.moduleName,r=e.setConfirmation,u=e.dispatch,s=e.setIsRequired,l=[],c=Object(a.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(y.y)({moduleList:e.itemList});return e.itemList.map((function(n){var a=n.qty,i=n.wasteType,r=n.note;return 0!=a&&!isNaN(a)||null!==(null===i||void 0===i?void 0:i.value)?(isNaN(a)||0==a||""===a||null===a?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,(null===i||void 0===i?void 0:i.value)?n.wasteTypeIsEmpty=!1:n.wasteTypeIsEmpty=!0,n.noteIsEmpty=!r):(n.qtyIsEmpty=!1,n.wasteTypeIsEmpty=!1,n.uploadPhotoIsEmpty=!1,n.noteIsEmpty=!1),n.qtyIsEmpty||(Number(t)>Number(e.initialWeight)?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.wasteTypeIsEmpty)||(null===n||void 0===n?void 0:n.uploadPhotoIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?l.push(!1):l.push(!0),n})),e})),e})),p=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(p=!0)}))}))})),c.jobPost.list=m,u(Object(o.a)({type:d.b},"".concat(i,"EntryData"),c)),!l.includes(!1)&&p?"function"===typeof r&&r({show:!0,name:"submit"}):("function"===typeof r&&r({show:!1,name:null}),"function"===typeof s&&s(!0)),Object(y.b)({setActiveSKU:t,moduleEntry:n,moduleName:i})}}}]);
//# sourceMappingURL=70.ec3e7dbb.chunk.js.map