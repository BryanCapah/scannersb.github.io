(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[46],{1177:function(e,t,n){},1178:function(e,t,n){},1230:function(e,t,n){"use strict";n.r(t);var a=n(659),i=n(1),o=n.n(i),s=n(19),r=n(56),l=n(168),c=n(21),d=(n(1177),n(663)),u=n(116),m=function(e){var t=e.img,n=e.skuDescription,a=e.skuNumber,i=e.activeSku,s=e.uomValue,r=e.idx,l=e.uom,c=e.onClick,m=e.data,p=Object(d.f)({data:m}),v=Object(d.b)(m);return o.a.createElement("div",{tabIndex:"0",onKeyDown:function(e){return Object(u.g)({e:e,idx:r,onClick:c})},onClick:function(){return c()},className:"w-100 sku-item softGreen d-flex justify-content-between pl-2 pr-3 py-2 mb-3 cursor-pointer rounded ".concat(p?"soft-green":null," ").concat(i===r?"border-green":v?"border-red":"border")},o.a.createElement("div",{className:"d-flex align-items-center w-100"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("img",{src:t,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"})),o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{className:"mr-3"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},n)),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"text"},a),i,o.a.createElement("div",{className:"green LatoBold"},s," ",o.a.createElement("span",null,"".concat(l?l.toUpperCase():"").concat(s>1?"s":"")))))))},p=function(e){var t=e.hideSKUList,n=e.setActiveSKU,s=e.activeSku,c=e.moduleEntry,d=(e.moduleName,c.jobPost.list.length),u=document.documentElement.clientWidth,p=document.documentElement.clientHeight;p-=212;var v=Object(i.useState)(!1),f=Object(a.a)(v,2),b=f[0],y=f[1];Object(r.c)();return o.a.createElement("div",{className:"".concat(t?"w-0":"w-30","  mt-md-0 rounded-bottom rounded-top")},o.a.createElement("div",{style:{padding:17},className:"w-100 bg-white border-top border-left border-right rounded-top border-soft-green text d-flex align-items-center justify-content-between",onClick:function(){return u<=500?y(!b):null}},o.a.createElement("div",{className:"LatoBold"}," Selected SKU ",o.a.createElement("span",{className:"font-green"},"(".concat(d," SKU").concat(d>1?"s":"",")"))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},o.a.createElement(l.b,{tabIndex:"0",className:"sku-item",to:"/inventory-entry/stock-transfer/weight-entry/remove-sku"},o.a.createElement("div",{className:"fontSizeTitle px-3 emptyTextField iconU-remove"})),o.a.createElement(l.b,{tabIndex:"0",className:"sku-item",to:"/inventory-entry/stock-transfer/weight-entry/add-sku"},o.a.createElement("div",{className:"fontSizeTitle emptyTextField text-bold iconU-entryAdd"})))),o.a.createElement("div",{style:{height:!(u<=500)&&p,maxHeight:p},className:" overflow-y w-100 bg-white mr-0 border rounded-bottom border-soft-green pl-3 pr-0 pt-3 ".concat(b?"d-none":null)},null===c||void 0===c?void 0:c.jobPost.list.map((function(e,t){return o.a.createElement(m,{data:e,idx:t,activeSku:s,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:null===e||void 0===e?void 0:e.unitOfMeassures,uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,img:null===e||void 0===e?void 0:e.photo,onClick:function(){return n(t)}})}))))},v=n(71),f=n(690),b=n.n(f),y=n(689),g=n(693),E=function(e){var t=e.entryListIdx,n=e.wmsPoSkuInfoId,a=e.gradeList,s=e.ripeness,l=e.inputWidth,c=e.showTitle,d=e.item,u=e.onChange,m=e.uom,p=e.poListIdx,v=e.category,f=Object(r.d)((function(e){return e.ripenessLevel})),b=Object(r.d)((function(e){return e.areaMovement}));return Object(i.useEffect)((function(){var e=f.findIndex((function(e){return"waste"===e.value})),t=f.findIndex((function(e){return"semi_waste"===e.value}));-1===e&&3===(null===b||void 0===b?void 0:b.value)&&f.push({label:"Waste",value:"waste"}),-1===t&&3===(null===b||void 0===b?void 0:b.value)&&f.push({label:"Semi Waste",value:"semi_waste"})}),[]),"Fruits"!==v&&f.filter((function(e){return"waste"===(null===e||void 0===e?void 0:e.value)||"semi_waste"===(null===e||void 0===e?void 0:e.value)})),"Fruits"===v&&f,8===(null===b||void 0===b?void 0:b.value)&&(null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===e.label||"Semi Waste"===e.label}))),o.a.createElement("div",{className:"d-flex w-100 we-m"},o.a.createElement(y.a,{isEmpty:d.qtyIsEmpty,poListIdx:p,entryListIdx:t,wmsPoSkuInfoId:n,uom:m,ripeness:s,inputWidth:l,values:null===d||void 0===d?void 0:d.qty,title:"Input Weight",showTitle:c,onChange:function(e){return u(e)}}),o.a.createElement(g.a,{isEmpty:d.qtyIsEmpty,poListIdx:p,entryListIdx:t,wmsPoSkuInfoId:n,uom:m,ripeness:s,inputWidth:l,values:null===d||void 0===d?void 0:d.qty,title:"Input Quantity",showTitle:c,onChange:function(e){return u(e)}}))},h=(n(1178),n(4)),N=function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,i=e.activeSku,o=e.poListIdx,s=Object(h.a)({},n);s.jobPost.list[i].poList[o].itemList.push({qty:"",expiryDate:s.jobPost.list[i].poList[o].expiryDate}),t(Object(v.a)({type:c.b},"".concat(a,"EntryData"),s))},x=function(e){var t,n=e.inputWidth,a=e.activeSku,i=e.poListIdx,s=e.poItem,l=e.moduleEntry,m=e.moduleName,p=e.gradeList,f=Object(r.c)(),y=s.expiryDate,g=s.inboundDate,x=s.initialWeight,j=s.inboundQty,k=s.initialWeightUpdate,L=s.initialWeightScreenUpdate,I=(s.poUuid,s.skuUuid,s.supplierId,s.supplierName),w=s.uom,O=s.ripeness,S=(s.ripenessLevel,s.edited),U=s.wmsPoSkuCode,P=s.category,C=s.codeGrade,q=s.isHidden,D=(isNaN(k),isNaN(L)?x:L),W="kg"===w||"gram"===w?"Weight":"Quantity",T=l.jobPost.list[a].gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===C})),B=l.jobPost.areaName;return o.a.createElement("div",{onKeyDown:function(e){return e.keyCode,!1},id:"sku_item_".concat(a,"_").concat(i),tabIndex:"0",className:"".concat(q?"d-none":null," z-0 d-flex flex-column sku-item justify-content-between w-100 mb-3 align-items-center border rounded border-soft-green ").concat(S?"soft-green":null)},o.a.createElement("div",{className:"w-100 border-soft-green mt-3 d-flex align-items-start px-3"},o.a.createElement("div",{className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex justify-content-between align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Date",o.a.createElement("span",{className:"ml-2 font-green"},g?Object(u.b)({date:g}):"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3"},"Initial ".concat(W),o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(x," ").concat(null===w||void 0===w?void 0:w.toUpperCase()).concat(x>1?"s":""))))),o.a.createElement("div",{className:"w-100 border-soft-green d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"PO Code",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(U||"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Supplier Name",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(I)))))),o.a.createElement("div",{className:"w-100 border-bottom border-soft-green mb-3 d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Expiry Date",o.a.createElement("span",{className:"ml-2 font-green"},y?Object(u.b)({date:y,noTime:!0}):"-")),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-3 ".concat("Waste"===B||"Semi Waste"===B?null:"d-none")},"Grade",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(T.length?T[0].label:"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Quantity",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(j||"-")))))),o.a.createElement("div",{className:"d-flex flex-column justify-content-between w-100 align-items-center px-3 z-0"},null===(t=s.itemList)||void 0===t?void 0:t.map((function(e,t){return o.a.createElement("div",{className:"d-flex w-100 align-items-center justify-content-between"},o.a.createElement("div",{className:"w-100 d-flex"},o.a.createElement("div",{style:{width:"10px"},className:"input-height d-flex align-items-center mb-3 mr-3 pt-4 mt-2"},"".concat(t+1,".")),o.a.createElement("div",{className:"w-100"},o.a.createElement(E,{category:P,entryListIdx:t,wmsPoSkuInfoId:e.wmsPoSkuInfoId,showTitle:!0,gradeList:p,onChange:function(e){return function(e){var t,n,a=e.dispatch,i=e.moduleEntry,o=e.moduleName,s=e.activeSku,r=e.poListIdx,l=e.entryListIdx,u=e.e,m=null===u||void 0===u||null===(t=u.target)||void 0===t?void 0:t.name,p=null===u||void 0===u||null===(n=u.target)||void 0===n?void 0:n.value,f=Object(h.a)({},i);if("weight"===m||"weightToCompare"===m){if(console.clear(),!0===/^[0-9\.\x0]+$/.test(p)&&""!==p){var b=0,y=null===p||void 0===p?void 0:p.split("."),g=y[0];g>=0&&(g=parseInt(g));var E=y[1];if(null!==E&&void 0!==E)if(E.length>2){var N=E.slice(0,2);b="".concat(g,".").concat(N)}else b="".concat(g,".").concat(E);else b=parseInt(g);"weight"===m&&(f.jobPost.list[s].poList[r].itemList[l].qty=b,f.jobPost.list[s].poList[r].itemList[l].qtyIsEmpty=!1),"weightToCompare"===m&&(f.jobPost.list[s].poList[r].itemList[l].qtyToCompare=b,f.jobPost.list[s].poList[r].itemList[l].qtyToCompareIsEmpty=!1)}else"weight"===m&&(f.jobPost.list[s].poList[r].itemList[l].qty=""),"weightToCompare"===m&&(f.jobPost.list[s].poList[r].itemList[l].qtyToCompare="")}else if("qty"===m){if(!1===/^[0-9.]+$/.test(p)&&""!==p)return;f.jobPost.list[s].poList[r].itemList[l].qty=p?parseInt(p):p,f.jobPost.list[s].poList[r].itemList[l].qtyIsEmpty=!1}else"note"===m&&(f.jobPost.list[s].poList[r].itemList[l].note=p,f.jobPost.list[s].poList[r].itemList[l].noteIsEmpty=!1);var x=f.jobPost.list[s].poList[r].inboundQty,j=x;f.jobPost.list[s].poList[r].edited=!1,f.jobPost.list[s].poList[r].minus=!1,f.jobPost.list[s].poList[r].itemList.map((function(e){e.qty&&(f.jobPost.list[s].poList[r].edited=!0),j-=isNaN(e.qty)?0:e.qty,f.jobPost.list[s].poList[r].initialWeightUpdate=j,j<0?(f.jobPost.list[s].poList[r].minus=!1,f.jobPost.list[s].poList[r].initialWeightUpdate=0):f.jobPost.list[s].poList[r].itemList.filter((function(e){return e.qtyIsEmpty=!1}))}));var k=f.jobPost.list[s].poList[r].initialWeight;f.jobPost.list[s].poList[r].itemList.map((function(e){k-=isNaN(e.qty)?0:e.qty,f.jobPost.list[s].poList[r].initialWeightScreenUpdate=k}));var L=Object(d.p)({moduleList:f.jobPost.list[s].poList[r].itemList});f.jobPost.list[s].poList[r].initialWeightOver=L>x?L:0,a(Object(v.a)({type:c.b},"".concat(o,"EntryData"),f))}({dispatch:f,moduleEntry:l,moduleName:m,activeSku:a,poListIdx:i,entryListIdx:t,e:e})},uom:w,ripeness:O,inputWidth:n,item:e,className:O?null:"d-none",poListIdx:i}))),o.a.createElement("div",{className:"d-flex w-25 align-items-center justify-content-end input-height mb-0 p-0"},o.a.createElement("img",{src:b.a,alt:"delete icon",className:"w-1 cursor-pointer",onClick:function(e){return Object(d.d)({dispatch:f,moduleEntry:l,moduleName:m,activeSku:a,poListIdx:i,entryListIdx:t,e:e,countQty:d.c})}})))}))),o.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&N({dispatch:f,moduleEntry:l,moduleName:m,activeSku:a,poListIdx:i})},className:"w-100 ml-5 pl-4 font-green mb-3 LatoBold cursor-pointer ",onClick:function(){return N({dispatch:f,moduleEntry:l,moduleName:m,activeSku:a,poListIdx:i})}},o.a.createElement("i",{className:"green iconU-entryAdd pr-2"}),"Add ".concat(W," (").concat(Object(u.e)(D)?Object(u.e)(D):D," ").concat(w?w.toUpperCase():"").concat(D>1?"s":""," left)")))},j=n(662),k=n(761),L=n(673),I=n(692),w=n(703),O=n(685),S=n(715),U=n(699),P=function(e){var t,n,a,i=e.hideSKUList,s=e.setHideSKUList,l=e.activeSku,c=e.moduleEntry,d=e.moduleName,u=Object(r.c)(),m=Object(U.d)(),p=m.height,f=m.heightAdj,b=m.dimention,y=Object(U.m)({moduleEntry:c,activeSku:l}),g=y.setIsSuccess,E=y.status,h=y.confirmation,N=y.setConfirmation,P=y.discard,C=y.setDiscard,q=y.isSaved,D=y.setIsSaved,W=y.action,T=y.setAction,B=y.isRequired,A=y.setIsRequired,K=y.hideContent,H=y.setHideContent,_=y.isLoading,M=y.skuName,z=y.skuNumber,R=y.poList,Q=y.gradeList,F=y.unitOfMeassures,G=y.totalWeight,J=y.edited,V=y.postInfo,$=y.areaMovement,X=b<=500,Y=K?"d-none":null,Z=G>1?"s":"",ee=J?"bg-green":"bg-lineGrey";return o.a.createElement("div",{style:{paddingLeft:X?0:10},className:"w-100 h-100 mt-3 mt-md-0"},o.a.createElement(O.a,{discard:P,module:"Inventory Entry - Stock Movement",moduleEntry:c,close:function(){return C(!1)},discardEntry:function(e){return Object(j.k)({id:e,moduleName:d,dispatch:u})}}),o.a.createElement(I.a,{status:E,moduleEntry:c,submit:function(){var e;return u((e={type:"CREATE_JOB_SHEET"},Object(v.a)(e,"".concat(d,"EntryData"),null),Object(v.a)(e,"".concat(d,"SummaryData"),null),e))},confirmation:h,setConfirmation:N,isSaved:q,action:W,setIsSaved:D,moduleName:d,totalSku:null===c||void 0===c||null===(t=c.jobPost)||void 0===t?void 0:t.list.length}),o.a.createElement(w.a,{isRequired:B,module:c,setIsRequired:A,moduleName:d,totalSku:null===c||void 0===c||null===(n=c.jobPost)||void 0===n?void 0:n.list.length}),o.a.createElement(L.b,{moduleName:d,noSkuChecking:!0,isLoading:_,moduleEntry:c,confirmation:h,setConfirmation:N,isSuccess:V,setAction:T,action:W,save:function(){return Object(j.m)({name:"save",moduleEntry:c,moduleName:d,dispatch:u,setIsSuccess:g})},submit:function(){return Object(j.m)({name:"submit",moduleEntry:c,moduleName:d,dispatch:u,setIsSuccess:g})}}),o.a.createElement("div",{className:"mb-3 bg-white rounded-bottom rounded-top"},o.a.createElement("div",(a={style:{height:p}},Object(v.a)(a,"style",{padding:10}),Object(v.a)(a,"className","w-100 mr-0 d-flex align-items-center border-top border-left border-right border-bottom rounded-top border-soft-green"),a),o.a.createElement("div",{className:"d-flex w-100 m-0 p-0",onClick:function(){return X?H(!K):null}},o.a.createElement("div",{className:"".concat(i?"iconU-sideBarHideRight":"iconU-sideBarHideLeft"," emptyTextField fontSizeTitle mr-3"),onClick:function(){return s(!i)}}),o.a.createElement("div",{className:"mr-3 pr-1 d-flex align-items-center m-0 p-0 LatoBold"},"Weight Entry"),o.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center"}),o.a.createElement("div",{className:"mr-3 d-flex align-items-center font-green LatoBold"},"".concat(M," (").concat(z,")"))),o.a.createElement(S.a,{moduleEntry:c,moduleName:d,activeSku:l,dispatch:u})),o.a.createElement("div",{style:{height:X?p:f,minHeight:X?p:f},className:"w-100 overflow-y mr-0 border-left border-right border-soft-green pl-3 pr-2 pt-3 ".concat(Y)},null===R||void 0===R?void 0:R.map((function(e,t){var n;return o.a.createElement(x,(n={activeSku:l,gradeList:Q,inputWidth:"input-w-100"},Object(v.a)(n,"activeSku",l),Object(v.a)(n,"poListIdx",t),Object(v.a)(n,"poItem",e),Object(v.a)(n,"moduleEntry",c),Object(v.a)(n,"moduleName",d),n))}))),o.a.createElement("div",{className:"w-100 d-flex align-items-center p-3 border-left border-right border-bottom rounded-bottom LatoBold"},o.a.createElement("button",{tabIndex:"0",type:"button",className:"btn sku-item ".concat(ee,"  text-white px-5 mr-3 LatoBold"),onClick:function(){return J?N({show:!0,name:"save"}):null}},"Save"),o.a.createElement("div",null,"Total Weight ",o.a.createElement("span",{className:"font-green"},"".concat(G," ").concat(null===F||void 0===F?void 0:F.toUpperCase()).concat(Z))))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-end"},o.a.createElement("div",{tabIndex:"0",onClick:function(){return C(!0)},className:"red pr-3 sku-item fontSizeButton cursor-pointer"},o.a.createElement("i",{className:"iconU-entryTrash"})," Discard"),o.a.createElement("button",{tabIndex:"0",onClick:function(){return J?Object(k.c)({moduleEntry:c,moduleName:d,dispatch:u,setConfirmation:N,setIsRequired:A,areaMovement:$}):null},className:"btn sku-item px-5 py-2 text-white ".concat(ee," LatoBold no-shadow"),style:{height:"fit-content !important"}},"Submit")))};t.default=function(){var e=Object(r.d)((function(e){return e.stockTransferEntryData})),t=Object(i.useState)(!1),n=Object(a.a)(t,2),l=n[0],c=n[1],d=Object(i.useState)(0),u=Object(a.a)(d,2),m=u[0],v=u[1],f=document.documentElement.clientHeight,b=document.documentElement.clientWidth,y=f-150;return e&&0!==(null===e||void 0===e?void 0:e.jobPost.list.length)?o.a.createElement("div",{style:{height:b<=500?f:y},className:"w-100 d-md-flex justify-content-between scroll-y z-0"},o.a.createElement(p,{hideSKUList:l,activeSku:m,setActiveSKU:v,moduleName:"stockTransfer",moduleEntry:e}),o.a.createElement(P,{setHideSKUList:c,hideSKUList:l,moduleName:"stockTransfer",moduleEntry:e,activeSku:m})):o.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},o.a.createElement(s.a,{to:"/inventory-entry/stock-transfer"},"Please Select At Least 1 SKU"))}},664:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(696);var i=n(695);function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},693:function(e,t,n){"use strict";var a=n(1),i=n.n(a);t.a=function(e){var t=e.isEmpty,n=e.entryListIdx,a=e.poListIdx,o=(e.wmsPoSkuInfoId,e.uom),s=e.inputWidth,r=e.values,l=e.onChange,c=e.showTitle,d=(e.grade,e.title),u=e.name,m="gram"!==o&&"kg"!==o;return i.a.createElement("div",{className:" ".concat(s," mb-3 mr-3 ").concat(m?null:"d-none")},i.a.createElement("div",{className:" pb-1 LatoBold ".concat(c?null:"d-none")},d),i.a.createElement("div",{className:"".concat(t?"border-red":"border"," rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},i.a.createElement("input",{id:"qty_".concat(a,"_").concat(n),maxLength:"10",autoComplete:"off",type:"text",className:"w-100 plain-input",value:r,name:u||"qty",onChange:function(e){return l(e)}}),i.a.createElement("div",{className:"font-soft-grey"},o?o.toUpperCase():"")))}},761:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return g}));var a=n(4),i=n(65),o=n.n(i),s=n(71),r=n(664),l=n(91),c=n(22),d=n.n(c),u=n(21),m=n(662),p=n(669),v=n(116),f=n(663),b=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,i,c,f,b,y,g,E,h,N,x,j,k,L,I,w,O,S,U,P;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,i=t.checked,c=t.dispatch,f=t.setLocalEntryData,b=t.moduleName,y=t.moduleSummary,g=t.moduleEntry,E=t.warehouseUuid,h=t.warehouseIdDestination,N=t.areaId,x=t.areaIdDesposition,(j=Object(r.a)(y))[a].checked=i,c(Object(s.a)({type:u.c},"".concat(b,"summaryData"),j)),k=null===j||void 0===j?void 0:j.filter((function(e){if(e.checked)return e})),L=[],g&&g.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&L.push(t.skuUuid)})),I=[],w=k.map(function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.d)({skuId:t.skuUuid,warehouseUuid:E,dispatch:c,areaId:N.value,moduleName:b});case 8:(i=e.sent)&&(s=i.map((function(e){e.itemList=[];var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(v.e)(e.initialWeight)?Object(v.e)(e.initialWeight):e.initialWeight,e})),t.poList=s,I.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(w);case 11:e.sent,O=[],g&&(O=g.jobPost.list.concat(I)),g||(O=I),(S=j[a]).checked||(O=O.filter((function(e){return e.skuUuid!==S.skuUuid}))),U=null===g||void 0===g||null===(n=g.jobPost)||void 0===n?void 0:n.id,P={jobPost:{id:U||0,warehouseSource:E,warehouseDestination:null===h||void 0===h?void 0:h.value,warehouseDestinationName:null===h||void 0===h?void 0:h.label,areaSource:parseInt(null===N||void 0===N?void 0:N.value),areaName:null===N||void 0===N?void 0:N.label,areaDestination:parseInt(null===x||void 0===x?void 0:x.value),areaDestinationName:null===x||void 0===x?void 0:x.label,list:O}},0===O.length&&c(Object(s.a)({type:u.b},"".concat(b,"EntryData"),null)),f(P);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,i,s,c,u,f,b,y,g,E,h,N,x,j,k;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,i=t.dispatch,s=t.moduleName,c=t.moduleSummary,u=t.moduleEntry,f=t.warehouseUuid,b=t.areaId,y=t.preAddHandler,(g=Object(r.a)(c))[n].checked=a,E=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),h=[],u&&u.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&h.push(t.skuUuid)})),N=[],x=E.map(function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.d)({skuId:t.skuUuid,warehouseUuid:f,dispatch:i,areaId:b.value,moduleName:s});case 8:(r=e.sent)&&(l=r.map((function(e){e.itemList=[];var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(v.e)(e.initialWeight)?Object(v.e)(e.initialWeight):e.initialWeight,e})),t.poList=l,N.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(x);case 10:e.sent,j=[],u&&(j=u.concat(N)),u||(j=N),(k=g[n]).checked||(j=j.filter((function(e){return e.skuUuid!==k.skuUuid}))),y(j);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.moduleEntry,n=e.moduleName,i=e.setConfirmation,o=e.dispatch,r=e.setIsRequired,l=[],c=Object(a.a)({},t),d=t.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(f.p)({moduleList:e.itemList});return e.itemList.map((function(n){var a,i,o=n.qty,s=n.grade,r=n.ripeness;n.note;"kg"===e.uom?0!=o&&!isNaN(o)||null!==(null===s||void 0===s?void 0:s.value)?"Waste"===(null===n||void 0===n||null===(a=n.grade)||void 0===a?void 0:a.label)||"Semi Waste"===(null===n||void 0===n||null===(i=n.grade)||void 0===i?void 0:i.label)?(isNaN(o)||0==o||""===o||null===o?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,null===s||void 0===s||s.value,n.gradeIsEmpty=!1,null===s||void 0===s||s.label,n.noteIsEmpty=!1):(isNaN(o)||0==o||""===o||null===o?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,null===s||void 0===s||s.value,n.gradeIsEmpty=!1,null===r||void 0===r||r.value,n.ripenessIsEmpty=!1,null===s||void 0===s||s.label,n.noteIsEmpty=!1):(n.qtyIsEmpty=!1,n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1,n.noteIsEmpty=!1):isNaN(o)||0==o||""===o||null===o?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1;return n.qtyIsEmpty||(t>e.initialWeight?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.gradeIsEmpty)||(null===n||void 0===n?void 0:n.ripenessIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?l.push(!1):l.push(!0),n})),e})),e})),m=!1;d.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(m=!0)}))}))})),c.jobPost.list=d,o(Object(s.a)({type:u.b},"".concat(n,"EntryData"),c)),!l.includes(!1)&&m?i({show:!0,name:"submit"}):(i({show:!1,name:null}),r(!0))}}}]);
//# sourceMappingURL=46.5dc306dd.chunk.js.map