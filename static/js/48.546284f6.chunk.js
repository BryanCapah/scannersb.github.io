(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[48],{1158:function(e,t,n){},1159:function(e,t,n){},1213:function(e,t,n){"use strict";n.r(t);var a=n(653),i=n(1),o=n.n(i),s=n(19),l=n(56),r=n(166),c=n(21),d=(n(1158),n(656)),u=n(114),m=function(e){var t=e.isNewItem,n=e.img,a=e.skuDescription,i=e.skuNumber,s=e.activeSku,l=e.uomValue,r=e.idx,c=e.uom,m=e.onClick,p=e.data,v=Object(d.i)({data:p}),f=Object(d.b)(p);return o.a.createElement("div",{className:"w-100 sku-item softGreen pl-2 pr-2 pt-2 mb-3 cursor-pointer rounded ".concat(v?"soft-green":null," ").concat(s===r?"border-green":f?"border-red":"border")},o.a.createElement("div",{className:" w-100 d-flex justify-content-end"},o.a.createElement("div",{className:t?"green-dot":"dot"})),o.a.createElement("div",{onKeyDown:function(e){return Object(u.g)({e:e,idx:r,onClick:m})},onClick:function(){return m()},className:"w-100 softGreen d-flex justify-content-between pl-2 pr-2 mb-3 cursor-pointer ".concat(v?"soft-green":null)},o.a.createElement("div",{className:"d-flex align-items-center w-100"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("img",{src:n,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"})),o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{className:"mr-3 w-100 d-flex"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},a)),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"text"},i),s,o.a.createElement("div",{className:"green LatoBold"},l," ",o.a.createElement("span",null,"".concat(c?c.toUpperCase():"").concat(l>1?"s":""))))))))},p=n(678),v=function(e){var t,n,s=e.hideSKUList,c=e.setActiveSKU,d=e.activeSku,u=e.moduleEntry,v=(e.moduleName,u.jobPost.list.length),f=document.documentElement.clientWidth,b=document.documentElement.clientHeight;b-=212;var y=Object(i.useState)(!1),g=Object(a.a)(y,2),E=g[0],h=g[1];Object(l.c)(),Object(p.e)({setActiveSKU:c,moduleEntry:u,selectedSku:v}).sorted;return o.a.createElement("div",{className:"".concat(s?"w-0":"w-30","  mt-md-0 rounded-bottom rounded-top")},o.a.createElement("div",{style:{padding:17},className:"w-100 bg-white border-top border-left border-right rounded-top border-soft-green text d-flex align-items-center justify-content-between",onClick:function(){return f<=500?h(!E):null}},o.a.createElement("div",{className:"LatoBold"}," Selected SKU ",o.a.createElement("span",{className:"font-green"},"(".concat(v," SKU").concat(v>1?"s":"",")"))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},o.a.createElement(r.b,{tabIndex:"0",className:"sku-item",to:"/inventory-entry/stock-transfer/weight-entry/remove-sku"},o.a.createElement("div",{className:"fontSizeTitle px-3 emptyTextField iconU-remove"})),o.a.createElement(r.b,{tabIndex:"0",className:"sku-item",to:"/inventory-entry/stock-transfer/weight-entry/add-sku"},o.a.createElement("div",{className:"fontSizeTitle emptyTextField text-bold iconU-entryAdd"})))),o.a.createElement("div",{style:{height:!(f<=500)&&b,maxHeight:b},className:" overflow-y w-100 bg-white mr-0 border rounded-bottom border-soft-green pl-3 pr-0 pt-3 ".concat(E?"d-none":null)},null===u||void 0===u||null===(t=u.jobPost)||void 0===t||null===(n=t.list)||void 0===n?void 0:n.map((function(e,t){return o.a.createElement(m,{isNewItem:null===e||void 0===e?void 0:e.isNewItem,data:e,idx:t,activeSku:d,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:null===e||void 0===e?void 0:e.unitOfMeassures,uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,img:null===e||void 0===e?void 0:e.photo,onClick:function(){return c(t)}})}))))},f=n(70),b=n(681),y=n.n(b),g=n(680),E=n(682),h=function(e){var t=e.entryListIdx,n=e.wmsPoSkuInfoId,a=e.gradeList,s=e.ripeness,r=e.inputWidth,c=e.showTitle,d=e.item,u=e.onChange,m=e.uom,p=e.poListIdx,v=e.category,f=Object(l.d)((function(e){return e.ripenessLevel})),b=Object(l.d)((function(e){return e.areaMovement}));return Object(i.useEffect)((function(){var e=f.findIndex((function(e){return"waste"===e.value})),t=f.findIndex((function(e){return"semi_waste"===e.value}));-1===e&&3===(null===b||void 0===b?void 0:b.value)&&f.push({label:"Waste",value:"waste"}),-1===t&&3===(null===b||void 0===b?void 0:b.value)&&f.push({label:"Semi Waste",value:"semi_waste"})}),[]),"Fruits"!==v&&f.filter((function(e){return"waste"===(null===e||void 0===e?void 0:e.value)||"semi_waste"===(null===e||void 0===e?void 0:e.value)})),"Fruits"===v&&f,8===(null===b||void 0===b?void 0:b.value)&&(null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===e.label||"Semi Waste"===e.label}))),o.a.createElement("div",{className:"d-flex w-100 we-m"},o.a.createElement(g.a,{isEmpty:d.qtyIsEmpty,poListIdx:p,entryListIdx:t,wmsPoSkuInfoId:n,uom:m,ripeness:s,inputWidth:r,values:null===d||void 0===d?void 0:d.qty,title:"Input Weight",showTitle:c,onChange:function(e){return u(e)}}),o.a.createElement(E.a,{isEmpty:d.qtyIsEmpty,poListIdx:p,entryListIdx:t,wmsPoSkuInfoId:n,uom:m,ripeness:s,inputWidth:r,values:null===d||void 0===d?void 0:d.qty,title:"Input Quantity",showTitle:c,onChange:function(e){return u(e)}}))},N=(n(1159),n(4)),x=function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,i=e.activeSku,o=e.poListIdx,s=Object(N.a)({},n);s.jobPost.list[i].poList[o].itemList.push({qty:"",expiryDate:s.jobPost.list[i].poList[o].expiryDate}),t(Object(f.a)({type:c.b},"".concat(a,"EntryData"),s))},j=function(e){var t,n=e.inputWidth,a=e.activeSku,i=e.poListIdx,s=e.poItem,r=e.moduleEntry,m=e.moduleName,p=e.gradeList,v=Object(l.c)(),b=s.expiryDate,g=s.inboundDate,E=s.initialWeight,j=s.inboundQty,k=s.initialWeightUpdate,L=s.initialWeightScreenUpdate,w=(s.poUuid,s.skuUuid,s.supplierId,s.supplierName),I=s.uom,O=s.ripeness,S=(s.ripenessLevel,s.edited),U=s.wmsPoSkuCode,P=s.category,C=s.codeGrade,q=s.isHidden,D=(isNaN(k),isNaN(L)?E:L),W="kg"===I||"gram"===I?"Weight":"Quantity",T=r.jobPost.list[a].gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===C})),B=r.jobPost.areaName;return o.a.createElement("div",{onKeyDown:function(e){return e.keyCode,!1},id:"sku_item_".concat(a,"_").concat(i),tabIndex:"0",className:"".concat(q?"d-none":null," z-0 d-flex flex-column sku-item justify-content-between w-100 mb-3 align-items-center border rounded border-soft-green ").concat(S?"soft-green":null)},o.a.createElement("div",{className:"w-100 border-soft-green mt-3 d-flex align-items-start px-3"},o.a.createElement("div",{className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex justify-content-between align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Date",o.a.createElement("span",{className:"ml-2 font-green"},g?Object(u.b)({date:g}):"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3"},"Initial ".concat(W),o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(E," ").concat(null===I||void 0===I?void 0:I.toUpperCase()).concat(E>1?"s":""))))),o.a.createElement("div",{className:"w-100 border-soft-green d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"PO Code",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(U||"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Supplier Name",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(w)))))),o.a.createElement("div",{className:"w-100 border-bottom border-soft-green mb-3 d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Expiry Date",o.a.createElement("span",{className:"ml-2 font-green"},b?Object(u.b)({date:b,noTime:!0}):"-")),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-3 ".concat("Waste"===B||"Semi Waste"===B?null:"d-none")},"Grade",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(T.length?T[0].label:"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Quantity",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(j||"-")))))),o.a.createElement("div",{className:"d-flex flex-column justify-content-between w-100 align-items-center px-3 z-0"},null===(t=s.itemList)||void 0===t?void 0:t.map((function(e,t){return o.a.createElement("div",{className:"d-flex w-100 align-items-center justify-content-between"},o.a.createElement("div",{className:"w-100 d-flex"},o.a.createElement("div",{style:{width:"10px"},className:"input-height d-flex align-items-center mb-3 mr-3 pt-4 mt-2"},"".concat(t+1,".")),o.a.createElement("div",{className:"w-100"},o.a.createElement(h,{category:P,entryListIdx:t,wmsPoSkuInfoId:e.wmsPoSkuInfoId,showTitle:!0,gradeList:p,onChange:function(e){return function(e){var t,n,a=e.dispatch,i=e.moduleEntry,o=e.moduleName,s=e.activeSku,l=e.poListIdx,r=e.entryListIdx,u=e.e,m=null===u||void 0===u||null===(t=u.target)||void 0===t?void 0:t.name,p=null===u||void 0===u||null===(n=u.target)||void 0===n?void 0:n.value,v=Object(N.a)({},i);if(v.jobPost.list[s].isNewItem=!1,"weight"===m||"weightToCompare"===m){if(console.clear(),!0===/^[0-9\.\x0]+$/.test(p)&&""!==p){var b=0,y=null===p||void 0===p?void 0:p.split("."),g=y[0];g>=0&&(g=parseInt(g));var E=y[1];if(null!==E&&void 0!==E)if(E.length>2){var h=E.slice(0,2);b="".concat(g,".").concat(h)}else b="".concat(g,".").concat(E);else b=parseInt(g);"weight"===m&&(v.jobPost.list[s].poList[l].itemList[r].qty=b,v.jobPost.list[s].poList[l].itemList[r].qtyIsEmpty=!1),"weightToCompare"===m&&(v.jobPost.list[s].poList[l].itemList[r].qtyToCompare=b,v.jobPost.list[s].poList[l].itemList[r].qtyToCompareIsEmpty=!1)}else"weight"===m&&(v.jobPost.list[s].poList[l].itemList[r].qty=""),"weightToCompare"===m&&(v.jobPost.list[s].poList[l].itemList[r].qtyToCompare="")}else if("qty"===m){if(!1===/^[0-9.]+$/.test(p)&&""!==p)return;v.jobPost.list[s].poList[l].itemList[r].qty=p?parseInt(p):p,v.jobPost.list[s].poList[l].itemList[r].qtyIsEmpty=!1}else"note"===m&&(v.jobPost.list[s].poList[l].itemList[r].note=p,v.jobPost.list[s].poList[l].itemList[r].noteIsEmpty=!1);var x=v.jobPost.list[s].poList[l].inboundQty,j=x;v.jobPost.list[s].poList[l].edited=!1,v.jobPost.list[s].poList[l].minus=!1,v.jobPost.list[s].poList[l].itemList.map((function(e){e.qty&&(v.jobPost.list[s].poList[l].edited=!0),j-=isNaN(e.qty)?0:e.qty,v.jobPost.list[s].poList[l].initialWeightUpdate=j,j<0?(v.jobPost.list[s].poList[l].minus=!1,v.jobPost.list[s].poList[l].initialWeightUpdate=0):v.jobPost.list[s].poList[l].itemList.filter((function(e){return e.qtyIsEmpty=!1}))}));var k=v.jobPost.list[s].poList[l].initialWeight;v.jobPost.list[s].poList[l].itemList.map((function(e){k-=isNaN(e.qty)?0:e.qty,v.jobPost.list[s].poList[l].initialWeightScreenUpdate=k}));var L=Object(d.v)({moduleList:v.jobPost.list[s].poList[l].itemList});v.jobPost.list[s].poList[l].initialWeightOver=L>x?L:0,a(Object(f.a)({type:c.b},"".concat(o,"EntryData"),v))}({dispatch:v,moduleEntry:r,moduleName:m,activeSku:a,poListIdx:i,entryListIdx:t,e:e})},uom:I,ripeness:O,inputWidth:n,item:e,className:O?null:"d-none",poListIdx:i}))),o.a.createElement("div",{className:"d-flex w-25 align-items-center justify-content-end input-height mb-0 p-0"},o.a.createElement("img",{src:y.a,alt:"delete icon",className:"w-1 cursor-pointer",onClick:function(e){return Object(d.d)({dispatch:v,moduleEntry:r,moduleName:m,activeSku:a,poListIdx:i,entryListIdx:t,e:e,countQty:d.c})}})))}))),o.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&x({dispatch:v,moduleEntry:r,moduleName:m,activeSku:a,poListIdx:i})},className:"w-100 ml-5 pl-4 font-green mb-3 LatoBold cursor-pointer ",onClick:function(){return x({dispatch:v,moduleEntry:r,moduleName:m,activeSku:a,poListIdx:i})}},o.a.createElement("i",{className:"green iconU-entryAdd pr-2"}),"Add ".concat(W," (").concat(Object(u.e)(D)?Object(u.e)(D):D," ").concat(I?I.toUpperCase():"").concat(D>1?"s":""," left)")))},k=n(657),L=n(764),w=n(668),I=n(688),O=n(695),S=n(675),U=n(706),P=function(e){var t,n,a,i=e.hideSKUList,s=e.setHideSKUList,r=e.activeSku,c=e.moduleEntry,d=e.moduleName,u=Object(l.c)(),m=Object(p.d)(),v=m.height,b=m.heightAdj,y=m.dimention,g=Object(p.n)({moduleEntry:c,activeSku:r}),E=g.setIsSuccess,h=g.status,N=g.confirmation,x=g.setConfirmation,P=g.discard,C=g.setDiscard,q=g.isSaved,D=g.setIsSaved,W=g.action,T=g.setAction,B=g.isRequired,K=g.setIsRequired,A=g.hideContent,H=g.setHideContent,_=g.isLoading,M=g.skuName,z=g.skuNumber,R=g.poList,Q=g.gradeList,G=g.unitOfMeassures,F=g.totalWeight,J=g.edited,V=g.postInfo,$=g.areaMovement,X=y<=500,Y=A?"d-none":null,Z=F>1?"s":"",ee=J?"bg-green":"bg-lineGrey";return o.a.createElement("div",{style:{paddingLeft:X?0:10},className:"w-100 h-100 mt-3 mt-md-0"},o.a.createElement(S.a,{discard:P,module:"Inventory Entry - Stock Movement",moduleEntry:c,close:function(){return C(!1)},discardEntry:function(e){return Object(k.m)({id:e,moduleName:d,dispatch:u})}}),o.a.createElement(I.a,{status:h,moduleEntry:c,submit:function(){var e;return u((e={type:"CREATE_JOB_SHEET"},Object(f.a)(e,"".concat(d,"EntryData"),null),Object(f.a)(e,"".concat(d,"SummaryData"),null),e))},confirmation:N,setConfirmation:x,isSaved:q,action:W,setIsSaved:D,moduleName:d,totalSku:null===c||void 0===c||null===(t=c.jobPost)||void 0===t?void 0:t.list.length}),o.a.createElement(O.a,{isRequired:B,module:c,setIsRequired:K,moduleName:d,totalSku:null===c||void 0===c||null===(n=c.jobPost)||void 0===n?void 0:n.list.length}),o.a.createElement(w.b,{moduleName:d,noSkuChecking:!0,isLoading:_,moduleEntry:c,confirmation:N,setConfirmation:x,isSuccess:V,setAction:T,action:W,save:function(){return Object(k.o)({name:"save",moduleEntry:c,moduleName:d,dispatch:u,setIsSuccess:E})},submit:function(){return Object(k.o)({name:"submit",moduleEntry:c,moduleName:d,dispatch:u,setIsSuccess:E})}}),o.a.createElement("div",{className:"mb-3 bg-white rounded-bottom rounded-top"},o.a.createElement("div",(a={style:{height:v}},Object(f.a)(a,"style",{padding:10}),Object(f.a)(a,"className","w-100 mr-0 d-flex align-items-center border-top border-left border-right border-bottom rounded-top border-soft-green"),a),o.a.createElement("div",{className:"d-flex w-100 m-0 p-0",onClick:function(){return X?H(!A):null}},o.a.createElement("div",{className:"".concat(i?"iconU-sideBarHideRight":"iconU-sideBarHideLeft"," emptyTextField fontSizeTitle mr-3"),onClick:function(){return s(!i)}}),o.a.createElement("div",{className:"mr-3 pr-1 d-flex align-items-center m-0 p-0 LatoBold"},"Weight Entry"),o.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center"}),o.a.createElement("div",{className:"mr-3 d-flex align-items-center font-green LatoBold"},"".concat(M," (").concat(z,")"))),o.a.createElement(U.a,{moduleEntry:c,moduleName:d,activeSku:r,dispatch:u})),o.a.createElement("div",{style:{height:X?v:b,minHeight:X?v:b},className:"w-100 overflow-y mr-0 border-left border-right border-soft-green pl-3 pr-2 pt-3 ".concat(Y)},null===R||void 0===R?void 0:R.map((function(e,t){var n;return o.a.createElement(j,(n={activeSku:r,gradeList:Q,inputWidth:"input-w-100"},Object(f.a)(n,"activeSku",r),Object(f.a)(n,"poListIdx",t),Object(f.a)(n,"poItem",e),Object(f.a)(n,"moduleEntry",c),Object(f.a)(n,"moduleName",d),n))}))),o.a.createElement("div",{className:"w-100 d-flex align-items-center p-3 border-left border-right border-bottom rounded-bottom LatoBold"},o.a.createElement("button",{tabIndex:"0",type:"button",className:"btn sku-item ".concat(ee,"  text-white px-5 mr-3 LatoBold"),onClick:function(){return J?x({show:!0,name:"save"}):null}},"Save"),o.a.createElement("div",null,"Total Weight ",o.a.createElement("span",{className:"font-green"},"".concat(F," ").concat(null===G||void 0===G?void 0:G.toUpperCase()).concat(Z))))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-end"},o.a.createElement("div",{tabIndex:"0",onClick:function(){return C(!0)},className:"red pr-3 sku-item fontSizeButton cursor-pointer"},o.a.createElement("i",{className:"iconU-entryTrash"})," Discard"),o.a.createElement("button",{tabIndex:"0",onClick:function(){return J?Object(L.c)({moduleEntry:c,moduleName:d,dispatch:u,setConfirmation:x,setIsRequired:K,areaMovement:$}):null},className:"btn sku-item px-5 py-2 text-white ".concat(ee," LatoBold no-shadow"),style:{height:"fit-content !important"}},"Submit")))};t.default=function(){var e=Object(l.d)((function(e){return e.stockTransferEntryData})),t=Object(i.useState)(!1),n=Object(a.a)(t,2),r=n[0],c=n[1],d=Object(i.useState)(0),u=Object(a.a)(d,2),m=u[0],p=u[1],f=document.documentElement.clientHeight,b=document.documentElement.clientWidth,y=f-150;return e&&0!==(null===e||void 0===e?void 0:e.jobPost.list.length)?o.a.createElement("div",{style:{height:b<=500?f:y},className:"w-100 d-md-flex justify-content-between scroll-y z-0"},o.a.createElement(v,{hideSKUList:r,activeSku:m,setActiveSKU:p,moduleName:"stockTransfer",moduleEntry:e}),o.a.createElement(P,{setHideSKUList:c,hideSKUList:r,moduleName:"stockTransfer",moduleEntry:e,activeSku:m})):o.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},o.a.createElement(s.a,{to:"/inventory-entry/stock-transfer"},"Please Select At Least 1 SKU"))}},682:function(e,t,n){"use strict";var a=n(1),i=n.n(a);t.a=function(e){var t=e.isEmpty,n=e.entryListIdx,a=e.poListIdx,o=(e.wmsPoSkuInfoId,e.uom),s=e.inputWidth,l=e.values,r=e.onChange,c=e.showTitle,d=(e.grade,e.title),u=e.name,m="gram"!==o&&"kg"!==o;return i.a.createElement("div",{className:" ".concat(s," mb-3 mr-3 ").concat(m?null:"d-none")},i.a.createElement("div",{className:" pb-1 LatoBold ".concat(c?null:"d-none")},d),i.a.createElement("div",{className:"".concat(t?"border-red":"border"," rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},i.a.createElement("input",{id:"qty_".concat(a,"_").concat(n),maxLength:"10",autoComplete:"off",type:"text",className:"w-100 plain-input",value:l,name:u||"qty",onChange:function(e){return r(e)}}),i.a.createElement("div",{className:"font-soft-grey"},o?o.toUpperCase():"")))}},764:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return g}));var a=n(4),i=n(65),o=n.n(i),s=n(70),l=n(659),r=n(89),c=n(22),d=n.n(c),u=n(21),m=n(657),p=n(663),v=n(114),f=n(656),b=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,a,i,c,b,y,g,E,h,N,x,j,k,L,w,I,O,S,U,P,C;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,i=t.checked,c=t.dispatch,b=t.setLocalEntryData,y=t.moduleName,g=t.moduleSummary,E=t.moduleEntry,h=t.warehouseUuid,N=t.warehouseIdDestination,x=t.areaId,j=t.areaIdDesposition,(k=Object(l.a)(g))[a].checked=i,c(Object(s.a)({type:u.c},"".concat(y,"summaryData"),k)),L=null===k||void 0===k?void 0:k.filter((function(e){if(e.checked)return e})),w=[],E&&E.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&w.push(t.skuUuid)})),I=[],O=L.map(function(){var e=Object(r.a)(o.a.mark((function e(t,n){var a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:h,dispatch:c,areaId:x.value,moduleName:y});case 8:(i=e.sent)&&(s=i.map((function(e){e.itemList=[];var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(v.e)(e.initialWeight)?Object(v.e)(e.initialWeight):e.initialWeight,e})),t.poList=s,I.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(O);case 11:e.sent,S=[],E&&(S=E.jobPost.list.concat(I)),E||(S=I),(U=k[a]).checked||(S=S.filter((function(e){return e.skuUuid!==U.skuUuid}))),P=null===E||void 0===E||null===(n=E.jobPost)||void 0===n?void 0:n.id,C={jobPost:{id:P||0,warehouseSource:h,warehouseDestination:null===N||void 0===N?void 0:N.value,warehouseDestinationName:null===N||void 0===N?void 0:N.label,areaSource:parseInt(null===x||void 0===x?void 0:x.value),areaName:null===x||void 0===x?void 0:x.label,areaDestination:parseInt(null===j||void 0===j?void 0:j.value),areaDestinationName:null===j||void 0===j?void 0:j.label,list:S.sort((function(e,t){return Object(f.e)(e,t)}))}},0===S.length&&c(Object(s.a)({type:u.b},"".concat(y,"EntryData"),null)),b(C);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,a,i,s,c,u,f,b,y,g,E,h,N,x,j,k;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,i=t.dispatch,s=t.moduleName,c=t.moduleSummary,u=t.moduleEntry,f=t.warehouseUuid,b=t.areaId,y=t.preAddHandler,(g=Object(l.a)(c))[n].checked=a,E=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),h=[],u&&u.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&h.push(t.skuUuid)})),N=[],x=E.map(function(){var e=Object(r.a)(o.a.mark((function e(t,n){var a,l,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:f,dispatch:i,areaId:b.value,moduleName:s});case 8:(l=e.sent)&&(r=l.map((function(e){e.itemList=[];var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(v.e)(e.initialWeight)?Object(v.e)(e.initialWeight):e.initialWeight,e})),t.poList=r,t.isNewItem=!0,N.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(x);case 10:e.sent,j=[],u&&(j=u.concat(N)),u||(j=N),(k=g[n]).checked||(j=j.filter((function(e){return e.skuUuid!==k.skuUuid}))),y(j);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.moduleEntry,n=e.moduleName,i=e.setConfirmation,o=e.dispatch,l=e.setIsRequired,r=[],c=Object(a.a)({},t),d=t.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(f.v)({moduleList:e.itemList});return e.itemList.map((function(n){var a,i,o=n.qty,s=n.grade,l=n.ripeness;n.note;"kg"===e.uom?0!=o&&!isNaN(o)||null!==(null===s||void 0===s?void 0:s.value)?"Waste"===(null===n||void 0===n||null===(a=n.grade)||void 0===a?void 0:a.label)||"Semi Waste"===(null===n||void 0===n||null===(i=n.grade)||void 0===i?void 0:i.label)?(isNaN(o)||0==o||""===o||null===o?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,null===s||void 0===s||s.value,n.gradeIsEmpty=!1,null===s||void 0===s||s.label,n.noteIsEmpty=!1):(isNaN(o)||0==o||""===o||null===o?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,null===s||void 0===s||s.value,n.gradeIsEmpty=!1,null===l||void 0===l||l.value,n.ripenessIsEmpty=!1,null===s||void 0===s||s.label,n.noteIsEmpty=!1):(n.qtyIsEmpty=!1,n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1,n.noteIsEmpty=!1):isNaN(o)||0==o||""===o||null===o?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1;return n.qtyIsEmpty||(t>e.initialWeight?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.gradeIsEmpty)||(null===n||void 0===n?void 0:n.ripenessIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?r.push(!1):r.push(!0),n})),e})),e})),m=!1;d.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(m=!0)}))}))})),c.jobPost.list=d,o(Object(s.a)({type:u.b},"".concat(n,"EntryData"),c)),!r.includes(!1)&&m?i({show:!0,name:"submit"}):(i({show:!1,name:null}),l(!0))}}}]);
//# sourceMappingURL=48.546284f6.chunk.js.map