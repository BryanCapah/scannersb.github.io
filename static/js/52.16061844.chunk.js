(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[52],{1354:function(e,t,n){"use strict";n.r(t);var a=n(661),o=n(1),i=n.n(o),r=n(19),c=n(168),l=n(56),s=n(674),u=(n(850),n(664)),d=n(667);t.default=Object(r.i)((function(e){var t=Object(l.c)(),n=Object(l.d)((function(e){return e.status})),m=Object(l.d)((function(e){return e.inboundEntryData})),p=Object(u.k)({moduleEntry:m,moduleName:"inbound"}),f=Object(o.useState)(p),b=Object(a.a)(f,2),v=b[0],y=b[1];Object(o.useEffect)((function(){var e=Object(u.k)({moduleEntry:m,moduleName:"inbound"});y(e)}),[]);var g=document.documentElement.clientHeight,h=g-210,E=g-210;if(!m)return i.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},i.a.createElement(r.a,{to:"/stockentry/stock-take"},"Please Select At Least 1 SKU"));var N=(null===m||void 0===m?void 0:m.jobPost).list;return i.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},i.a.createElement(d.a,{status:n}),i.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white border-all radius-all mb-3"},i.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},i.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},i.a.createElement("div",null,"Check SKU".concat(N.length>1?"s":""," that you want to remove from entries"),i.a.createElement("span",{className:"green"},"".concat(v-p>0?" (".concat(v-p," Removed Sku").concat(v-p>1?"s":"",")"):""))),i.a.createElement("div",{className:"icon-unfinishEn"},i.a.createElement("i",{className:"iconU-sideBarInventoryEntry emptyTextField"})))),i.a.createElement("div",{className:"mb-1 mt-3 d-flex align-items-center scroll-sku ".concat((null===N||void 0===N?void 0:N.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:h,maxHeight:h}},(null===N||void 0===N?void 0:N.length)?null===N||void 0===N?void 0:N.map((function(e,n){return i.a.createElement(s.a,{key:n,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:function(e){return Object(u.g)({idx:n,checked:!e,dispatch:t,moduleEntry:m,moduleName:"inbound"})},check:!(null===e||void 0===e?void 0:e.checked)})})):i.a.createElement("div",{className:"w-100 text-center emptyTextField",style:{minHeight:E}},'"No Data"'))),i.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},i.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},i.a.createElement(c.b,{to:"/inventory-entry/additional-inbound/weight-entry"},i.a.createElement("button",{onClick:function(){return Object(u.i)({dispatch:t,moduleSummary:m,moduleName:"inbound"})},type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel")),i.a.createElement(c.b,{to:"/inventory-entry/additional-inbound/weight-entry",onClick:function(e){return p!==v||e.preventDefault()}},i.a.createElement("button",{onClick:function(){return p!==v?Object(u.h)({dispatch:t,moduleEntry:m,moduleName:"inbound"}):null},type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(p!==v?"bg-green":"bg-lineGrey")},"Remove")))))}))},664:function(e,t,n){"use strict";n.d(t,"k",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"q",(function(){return p})),n.d(t,"o",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"p",(function(){return v})),n.d(t,"b",(function(){return y})),n.d(t,"j",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"n",(function(){return E})),n.d(t,"h",(function(){return N})),n.d(t,"i",(function(){return x})),n.d(t,"l",(function(){return k})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return w})),n.d(t,"m",(function(){return O}));var a=n(65),o=n.n(a),i=n(71),r=n(5),c=n(91),l=n(21),s=n(663),u=function(e){var t=e.moduleEntry,n=0;return t&&t.jobPost.list.map((function(e){e.checked&&(n+=1)})),n},d=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,c,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.dispatch,a=t.moduleEntry,c=t.moduleSummary,s=t.moduleName,u=Object(r.a)({},c),a.map((function(e){u.jobPost.list.push(e)})),n(Object(i.a)({type:l.b},"".concat(s,"EntryData"),u.jobPost.list.length>0?u:null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t,n=e.data,a=!1;null===n||void 0===n||null===(t=n.poList)||void 0===t||t.map((function(e){e.edited&&(a=!0)}));return a},p=function(e){var t=e.moduleEntry,n=e.activeSku,a=0;return t&&t.jobPost.list[n].poList.map((function(e){e.itemList.map((function(e){var t=Number.isInteger(e.qty)?parseInt(e.qty):Number.parseFloat(e.qty?e.qty:0);a+=t}))})),a=Number.isInteger(a)?a:Number.parseFloat(a).toFixed(2)},f=function(e){var t=e.moduleEntry,n=e.activeSku,a=0;return t&&t.jobPost.list[n].poList.map((function(e){e.itemList.map((function(e){var t=Number.isInteger(e.pack)?parseInt(e.pack):Number.parseFloat(e.pack?e.pack:0);a+=t}))})),a=Number.isInteger(a)?a:Number.parseFloat(a).toFixed(2)},b=function(e){var t,n,a=e.moduleEntry,o=!1;null===a||void 0===a||null===(t=a.jobPost)||void 0===t||null===(n=t.list)||void 0===n||n.map((function(e){m({data:e})&&(o=!0)}));return o},v=function(e){return e?Number.isInteger(e)?e:Number.parseFloat(e).toFixed(2):0},y=function(e){var t=!1;return e.poList.map((function(e){e.itemList.map((function(e){(e.qtyIsEmpty||e.noteIsEmpty||e.outboundTypeIsEmpty||e.ripenessIsEmpty||e.gradeIsEmpty||e.packIsEmpty)&&(t=!0)}))})),t},g=function(e){var t=e.isLoading,n=e.summaryData;return!(void 0===n?null:n)&&!t||!t},h=function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,o=e.idx,c=e.checked,s=Object(r.a)({},n);s.jobPost.list[o].checked=c,t(Object(i.a)({type:l.b},"".concat(a,"EntryData"),s))},E=function(e){var t=e.moduleList,n=0;return t&&t.map((function(e){var t=Number.isInteger(e.qty)?parseInt(e.qty):Number.parseFloat(e.qty?e.qty:0);n+=t})),n=Number.isInteger(n)?n:Number.parseFloat(n).toFixed(2)},N=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,c,u,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.dispatch,a=t.moduleEntry,c=t.moduleName,u=Object(r.a)({},a),d=a.jobPost.list.filter((function(e){if(e.checked)return e})),u.jobPost.list=d,n(Object(i.a)({type:l.b},"".concat(c,"EntryData"),u)),0===d.length&&Object(s.h)({id:u.jobPost.id,moduleName:c,dispatch:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.dispatch,n=e.moduleSummary,a=e.moduleName,o=Object(r.a)({},n);o.jobPost.list.map((function(e){e.checked=!0})),t(Object(i.a)({type:l.b},"".concat(a,"EntryData"),o))},k=function(e){var t=e.dispatch,n=e.selected;n&&t({type:l.j,areaId:n})},j=function(e){var t=e.activeSku,n=e.moduleEntry,a=e.poListIdx,o=e.entryListIdx,i=parseInt(0);return n.jobPost.list[t].poList[a].itemList.map((function(e,t){t!==o&&(i+=Number.isInteger(null===e||void 0===e?void 0:e.qty)?null===e||void 0===e?void 0:e.qty:parseFloat(null===e||void 0===e?void 0:e.qty))})),i},w=function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,o=e.activeSku,c=e.poListIdx,s=e.entryListIdx,u=(e.e,e.countQty),d=Object(r.a)({},n),m=u({moduleEntry:n,activeSku:o,poListIdx:c,entryListIdx:s}),p=d.jobPost.list[o].poList[c].initialWeight;d.jobPost.list[o].poList[c].initialWeightScreenUpdate=p-m,d.jobPost.list[o].poList[c].itemList.splice(s,1),0===d.jobPost.list[o].poList[c].itemList.length&&(d.jobPost.list[o].poList[c].edited=!1),t(Object(i.a)({type:l.b},"".concat(a,"EntryData"),d))},O=function(e){var t,n=e.search,a=e.updateList,o=e.dispatch,i=e.zeroQuantity;(0,(t={dispatch:o,zeroQuantity:i}).dispatch)({type:"SET_ZERO_QUANTITY",data:!t.zeroQuantity}),n&&a(!i)}},666:function(e,t,n){},667:function(e,t,n){"use strict";var a=n(661),o=n(1),i=n.n(o),r=n(665),c=(n(666),n(56)),l=n(21),s=n(680);t.a=function(e){var t=e.refresh,n=e.status,u=e.icon,d=e.statusDisplay,m=void 0!==d&&d,p=e.title,f=void 0===p?"":p,b=e.cancelButtonTitle,v=void 0===b?"Cancel":b,y=e.actionButtonTitle,g=void 0===y?"Submit":y,h=e.cancelButtonClass,E=void 0===h?"bg-background":h,N=e.actionButtonClass,x=void 0===N?"bg-background":N,k=e.actionButtonEvent,j=void 0===k?null:k,w=e.colorText,O=void 0===w?"red":w,S=e.msg1,C=void 0===S?null:S,L=e.msg2,I=void 0===L?null:L,P=e.onCloseFunction,F=void 0===P?null:P,T=e.refreshOnCancel,B=void 0===T||T,q=e.setIsSuccess,D=Object(c.c)();500===(null===n||void 0===n?void 0:n.code)&&0==m&&(u="em-pensive",f="Server Error",v="Try Again",g="Contact Administration",O="red",C=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",E="bg-green",m=!0,B=!0),408===(null===n||void 0===n?void 0:n.code)&&0==m&&(u="em-alarm_clock",f="Request Timeout",v="Try Again",g="Contact Administration",O="red",C=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",E="bg-green",m=!0,B=!0),400===(null===n||void 0===n?void 0:n.code)&&0==m&&(u="em-alarm_clock",f="Server Error",v="Try Again",g="Contact Administration",O="red",C=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",E="bg-green",m=!0,B=!1),404===(null===n||void 0===n?void 0:n.code)&&(f="Something wrong with the application",v="Try Again",g="Contact Administration",O="red",C=null===n||void 0===n?void 0:n.message,I="Please try again or contact Sayurbox administration for further information.",E="bg-green",m=!0,B=!1);var U=Object(o.useState)(m),z=Object(a.a)(U,2),A=z[0],H=z[1];return Object(o.useEffect)((function(){H(m)}),[m]),Object(o.useEffect)((function(){}),[A]),window.onkeydown=function(e){return 27===e.keyCode?H(!1):null},i.a.createElement(r.B,{className:"".concat(A?null:"d-none")},i.a.createElement(r.f,null,i.a.createElement(r.s,{show:A,closeOnBackdrop:!1,onClose:function(){H(!1),Object(s.isFunction)(q)&&q({success:null,name:null}),D({type:l.k,status:null}),F&&F()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},i.a.createElement("div",{className:"d-flex flex-row-reverse"},i.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){H(!1),Object(s.isFunction)(q)&&q({success:null,name:null}),D({type:l.k,status:null}),F&&F()}})),i.a.createElement(r.v,{className:"px-5 pt-5 border-none"},i.a.createElement(r.w,{className:"text LatoBold ".concat(O)},f," ",i.a.createElement("span",null,i.a.createElement("i",{className:"em ".concat(u)})))),i.a.createElement(r.t,{className:"px-5 py-0"},i.a.createElement("p",{className:"text mb-2"},C),i.a.createElement("p",{className:"text"},I)),i.a.createElement(r.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},v?i.a.createElement(r.d,{className:"".concat(E," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){B?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),console.log(n),n&&n()}({setShow:H,parentOncCloseFunction:F}),D({type:l.k,status:null})}},v):null,g?i.a.createElement(r.d,{className:"".concat(x," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){j?(j(),H(!1)):H(!1)}},g):null," "))))}},674:function(e,t,n){"use strict";var a=n(661),o=n(1),i=n.n(o),r=n(696),c=n.n(r),l=n(116);n(708);t.a=function(e){var t=e.img,n=void 0===t?c.a:t,o=e.skuDescription,r=void 0===o?"SKU Description":o,s=e.skuNumber,u=void 0===s?"1001":s,d=e.uomLabel,m=void 0===d?"weight":d,p=e.uomValue,f=void 0===p?100.3:p,b=e.uom,v=void 0===b?"KG":b,y=e.isCheckedHandler,g=void 0===y?null:y,h=e.check,E=void 0!==h&&h,N=e.idx,x=void 0===N?0:N,k=e.singleView,j=e.setCreatePo,w=document.documentElement.clientWidth<=500,O=i.a.useState(E),S=Object(a.a)(O,2),C=S[0],L=S[1],I=function(){L(!0),g(!0),"function"===typeof j&&j({show:!0,skuNumber:u})};return i.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&I()},tabindex:"0",key:x,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(w?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(C?"bg-softGreen":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(w?"pl-2 pr-3":"pl-0 pr-0"),onClick:function(){L(!C),g&&g(!C)}},i.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(C?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),i.a.createElement("img",{src:n,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),i.a.createElement("div",{className:"text-left"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},r),i.a.createElement("div",{className:"text fontSizeTitle"},u))),i.a.createElement("hr",{className:"".concat(w?null:"d-none")}),i.a.createElement("div",{className:"d-flex w-100 ".concat(w?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},i.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(w?"justify-content-end":null)},i.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(w?"d-none":null)},"Total ".concat("KG"===v.toUpperCase()?m.toUpperCase():v.toUpperCase())),i.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(l.e)(f)),i.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},v)),i.a.createElement("div",{onClick:I,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(k?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},850:function(e,t,n){}}]);
//# sourceMappingURL=52.16061844.chunk.js.map