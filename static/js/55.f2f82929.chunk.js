(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[55],{1183:function(e,t,n){},1184:function(e,t,n){},1240:function(e,t,n){"use strict";n.r(t);var a=n(659),i=n(1),o=n.n(i),s=n(20),r=n(56),l=n(168),c=(n(1183),n(662)),d=n(116),u=function(e){var t=e.isNewItem,n=e.img,a=e.skuDescription,i=e.skuNumber,s=e.activeSku,r=e.uomValue,l=e.idx,u=e.uom,m=e.onClick,p=e.data,v=Object(c.j)({data:p}),f=Object(c.c)(p);return o.a.createElement("div",{className:"w-100 sku-item softGreen pl-2 pr-2 pt-2 mb-3 cursor-pointer rounded ".concat(v?"soft-green":null," ").concat(s===l?"border-green":f?"border-red":"border")},o.a.createElement("div",{className:" w-100 d-flex justify-content-end"},o.a.createElement("div",{className:t?"green-dot":"dot"})),o.a.createElement("div",{onKeyDown:function(e){return Object(d.g)({e:e,idx:l,onClick:m})},onClick:function(){return m()},className:"w-100 softGreen d-flex justify-content-between pl-2 pr-2 mb-3 cursor-pointer ".concat(v?"soft-green":null)},o.a.createElement("div",{className:"d-flex align-items-center w-100"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("img",{src:n,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"})),o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{className:"mr-3 w-100 d-flex"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},a)),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"text"},i),s,o.a.createElement("div",{className:"green LatoBold"},r," ",o.a.createElement("span",null,"".concat(u?u.toUpperCase():"").concat(r>1?"s":""))))))))},m=n(706),p=n.n(m),v=n(663),f=function(e){var t,n,s=e.hideSKUList,c=e.setActiveSKU,d=e.activeSku,m=e.moduleEntry,f=e.moduleName,b=e.setUpdateEntry,y=m.jobPost.list.length,E=document.documentElement.clientWidth,g=document.documentElement.clientHeight;g-=212;var h=Object(i.useState)(!1),N=Object(a.a)(h,2),x=N[0],j=N[1],L=Object(r.c)(),k=Object(r.d)((function(e){return e.thereAreRequest}));return o.a.createElement("div",{className:"".concat(s?"w-0":"w-30","  mt-md-0 rounded-bottom rounded-top")},o.a.createElement("div",{style:{padding:17},className:"w-100 bg-white border-top border-left border-right rounded-top border-soft-green text d-flex align-items-center justify-content-between",onClick:function(){return E<=500?j(!x):null}},o.a.createElement("div",{className:"LatoBold"}," Selected SKU ",o.a.createElement("span",{className:"font-green"},"(".concat(y," SKU").concat(y>1?"s":"",")"))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},o.a.createElement("img",{className:"".concat(k>0&&"fa-spin-hover"," mt-1 pointer"),src:p.a,onClick:function(){return Object(v.v)({moduleEntry:m,moduleName:f,dispatch:L,setUpdateEntry:b})}}),o.a.createElement(l.b,{tabIndex:"0",className:"sku-item",to:"/inventory-entry/stock-transfer/weight-entry/remove-sku"},o.a.createElement("div",{className:"fontSizeTitle px-3 emptyTextField iconU-remove"})),o.a.createElement(l.b,{tabIndex:"0",className:"sku-item",to:"/inventory-entry/stock-transfer/weight-entry/add-sku"},o.a.createElement("div",{className:"fontSizeTitle emptyTextField text-bold iconU-entryAdd"})))),o.a.createElement("div",{style:{height:!(E<=500)&&g,maxHeight:g},className:" overflow-y w-100 bg-white mr-0 border rounded-bottom border-soft-green pl-3 pr-0 pt-3 ".concat(x?"d-none":null)},null===m||void 0===m||null===(t=m.jobPost)||void 0===t||null===(n=t.list)||void 0===n?void 0:n.map((function(e,t){return o.a.createElement(u,{isNewItem:null===e||void 0===e?void 0:e.isNewItem,data:e,idx:t,activeSku:d,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:null===e||void 0===e?void 0:e.unitOfMeassures,uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,img:null===e||void 0===e?void 0:e.photo,onClick:function(){return c(t)}})}))))},b=n(71),y=n(685),E=n.n(y),g=n(684),h=n(687),N=function(e){var t=e.entryListIdx,n=e.wmsPoSkuInfoId,a=e.gradeList,s=e.ripeness,l=e.inputWidth,c=e.showTitle,d=e.item,u=e.onChange,m=e.uom,p=e.poListIdx,v=e.category,f=Object(r.d)((function(e){return e.ripenessLevel})),b=Object(r.d)((function(e){return e.areaMovement}));return Object(i.useEffect)((function(){var e=f.findIndex((function(e){return"waste"===e.value})),t=f.findIndex((function(e){return"semi_waste"===e.value}));-1===e&&3===(null===b||void 0===b?void 0:b.value)&&f.push({label:"Waste",value:"waste"}),-1===t&&3===(null===b||void 0===b?void 0:b.value)&&f.push({label:"Semi Waste",value:"semi_waste"})}),[]),"Fruits"!==v&&f.filter((function(e){return"waste"===(null===e||void 0===e?void 0:e.value)||"semi_waste"===(null===e||void 0===e?void 0:e.value)})),"Fruits"===v&&f,8===(null===b||void 0===b?void 0:b.value)&&(null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===e.label||"Semi Waste"===e.label}))),o.a.createElement("div",{className:"d-flex w-100 we-m"},o.a.createElement(g.a,{isEmpty:d.qtyIsEmpty,poListIdx:p,entryListIdx:t,wmsPoSkuInfoId:n,uom:m,ripeness:s,inputWidth:l,values:null===d||void 0===d?void 0:d.qty,title:"Input Weight",showTitle:c,onChange:function(e){return u(e)}}),o.a.createElement(h.a,{isEmpty:d.qtyIsEmpty,poListIdx:p,entryListIdx:t,wmsPoSkuInfoId:n,uom:m,ripeness:s,inputWidth:l,values:null===d||void 0===d?void 0:d.qty,title:"Input Quantity",showTitle:c,onChange:function(e){return u(e)}}))},x=(n(1184),n(4)),j=n(19),L=function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,i=e.activeSku,o=e.poListIdx,s=Object(x.a)({},n);s.jobPost.list[i].poList[o].itemList.push({qty:"",expiryDate:s.jobPost.list[i].poList[o].expiryDate}),t(Object(b.a)({type:j.b},"".concat(a,"EntryData"),s))},k=function(e){var t,n=e.inputWidth,a=e.activeSku,i=e.poListIdx,s=e.poItem,l=e.moduleEntry,u=e.moduleName,m=e.gradeList,p=Object(r.c)(),v=s.expiryDate,f=s.inboundDate,y=s.initialWeight,g=s.inboundQty,h=s.initialWeightUpdate,k=s.initialWeightScreenUpdate,w=(s.poUuid,s.skuUuid,s.supplierId,s.supplierName),I=s.uom,O=s.ripeness,S=(s.ripenessLevel,s.edited),U=s.wmsPoSkuCode,P=s.category,C=s.codeGrade,q=s.isHidden,D=(isNaN(h),isNaN(k)?y:k),W="kg"===I||"gram"===I?"Weight":"Quantity",T=l.jobPost.list[a].gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===C})),B=l.jobPost.areaName;return o.a.createElement("div",{id:"sku_item_".concat(a,"_").concat(i),tabIndex:"0",className:"".concat(q?"d-none":null," z-0 d-flex flex-column sku-item justify-content-between w-100 mb-3 align-items-center border rounded border-soft-green ").concat(S?"soft-green":null)},o.a.createElement("div",{className:"w-100 border-soft-green mt-3 d-flex align-items-start px-3"},o.a.createElement("div",{className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex justify-content-between align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Date",o.a.createElement("span",{className:"ml-2 font-green"},f?Object(d.b)({date:f}):"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3"},"Initial ".concat(W),o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(y," ").concat(null===I||void 0===I?void 0:I.toUpperCase()).concat(y>1?"s":""))))),o.a.createElement("div",{className:"w-100 border-soft-green d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"PO Code",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(U||"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Supplier Name",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(w)))))),o.a.createElement("div",{className:"w-100 border-bottom border-soft-green mb-3 d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Expiry Date",o.a.createElement("span",{className:"ml-2 font-green"},v?Object(d.b)({date:v,noTime:!0}):"-")),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-3 ".concat("Waste"===B||"Semi Waste"===B?null:"d-none")},"Grade",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(T.length?T[0].label:"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Quantity",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(g||"-")))))),o.a.createElement("div",{className:"d-flex flex-column justify-content-between w-100 align-items-center px-3 z-0"},null===(t=s.itemList)||void 0===t?void 0:t.map((function(e,t){return o.a.createElement("div",{className:"d-flex w-100 align-items-center justify-content-between"},o.a.createElement("div",{className:"w-100 d-flex"},o.a.createElement("div",{style:{width:"10px"},className:"input-height d-flex align-items-center mb-3 mr-3 pt-4 mt-2"},"".concat(t+1,".")),o.a.createElement("div",{className:"w-100"},o.a.createElement(N,{category:P,entryListIdx:t,wmsPoSkuInfoId:e.wmsPoSkuInfoId,showTitle:!0,gradeList:m,onChange:function(e){return function(e){var t,n,a=e.dispatch,i=e.moduleEntry,o=e.moduleName,s=e.activeSku,r=e.poListIdx,l=e.entryListIdx,d=e.e,u=null===d||void 0===d||null===(t=d.target)||void 0===t?void 0:t.name,m=null===d||void 0===d||null===(n=d.target)||void 0===n?void 0:n.value,p=Object(x.a)({},i);if(p.jobPost.list[s].isNewItem=!1,"weight"===u||"weightToCompare"===u){if(console.clear(),!0===/^[0-9\.\x0]+$/.test(m)&&""!==m){var v=0,f=null===m||void 0===m?void 0:m.split("."),y=f[0];y>=0&&(y=parseInt(y));var E=f[1];if(null!==E&&void 0!==E)if(E.length>2){var g=E.slice(0,2);v="".concat(y,".").concat(g)}else v="".concat(y,".").concat(E);else v=parseInt(y);"weight"===u&&(p.jobPost.list[s].poList[r].itemList[l].qty=v,p.jobPost.list[s].poList[r].itemList[l].qtyIsEmpty=!1),"weightToCompare"===u&&(p.jobPost.list[s].poList[r].itemList[l].qtyToCompare=v,p.jobPost.list[s].poList[r].itemList[l].qtyToCompareIsEmpty=!1)}else"weight"===u&&(p.jobPost.list[s].poList[r].itemList[l].qty=""),"weightToCompare"===u&&(p.jobPost.list[s].poList[r].itemList[l].qtyToCompare="")}else if("qty"===u){if(!1===/^[0-9.]+$/.test(m)&&""!==m)return;p.jobPost.list[s].poList[r].itemList[l].qty=m?parseInt(m):m,p.jobPost.list[s].poList[r].itemList[l].qtyIsEmpty=!1}else"note"===u&&(p.jobPost.list[s].poList[r].itemList[l].note=m,p.jobPost.list[s].poList[r].itemList[l].noteIsEmpty=!1);var h=p.jobPost.list[s].poList[r].inboundQty,N=h;p.jobPost.list[s].poList[r].edited=!1,p.jobPost.list[s].poList[r].minus=!1,p.jobPost.list[s].poList[r].itemList.map((function(e){e.qty&&(p.jobPost.list[s].poList[r].edited=!0),N-=isNaN(e.qty)?0:e.qty,p.jobPost.list[s].poList[r].initialWeightUpdate=N,N<0?(p.jobPost.list[s].poList[r].minus=!1,p.jobPost.list[s].poList[r].initialWeightUpdate=0):p.jobPost.list[s].poList[r].itemList.filter((function(e){return e.qtyIsEmpty=!1}))}));var L=p.jobPost.list[s].poList[r].initialWeight;p.jobPost.list[s].poList[r].itemList.map((function(e){L-=isNaN(e.qty)?0:e.qty,p.jobPost.list[s].poList[r].initialWeightScreenUpdate=L}));var k=Object(c.w)({moduleList:p.jobPost.list[s].poList[r].itemList});p.jobPost.list[s].poList[r].initialWeightOver=k>h?k:0,a(Object(b.a)({type:j.b},"".concat(o,"EntryData"),p))}({dispatch:p,moduleEntry:l,moduleName:u,activeSku:a,poListIdx:i,entryListIdx:t,e:e})},uom:I,ripeness:O,inputWidth:n,item:e,className:O?null:"d-none",poListIdx:i}))),o.a.createElement("div",{className:"d-flex w-25 align-items-center justify-content-end input-height mb-0 p-0"},o.a.createElement("img",{src:E.a,alt:"delete icon",className:"w-1 cursor-pointer",onClick:function(e){return Object(c.e)({dispatch:p,moduleEntry:l,moduleName:u,activeSku:a,poListIdx:i,entryListIdx:t,e:e,countQty:c.d})}})))}))),o.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&L({dispatch:p,moduleEntry:l,moduleName:u,activeSku:a,poListIdx:i})},className:"w-100 ml-5 pl-4 font-green mb-3 LatoBold cursor-pointer ",onClick:function(){return L({dispatch:p,moduleEntry:l,moduleName:u,activeSku:a,poListIdx:i})}},o.a.createElement("i",{className:"green iconU-entryAdd pr-2"}),"Add ".concat(W," (").concat(Object(d.e)(D)?Object(d.e)(D):D," ").concat(I?I.toUpperCase():"").concat(D>1?"s":""," left)")))},w=n(771),I=n(674),O=n(691),S=n(703),U=n(682),P=n(710),C=n(688),q=function(e){var t,n,a,i=e.setActiveSKU,s=e.hideSKUList,l=e.setHideSKUList,c=e.activeSku,d=e.moduleEntry,u=e.moduleName,m=e.updateEntry,p=e.setUpdateEntry,f=Object(r.c)(),y=Object(C.d)(),E=y.height,g=y.heightAdj,h=y.dimention,N=Object(C.m)({moduleEntry:d,activeSku:c}),x=N.setIsSuccess,j=N.status,L=N.confirmation,q=N.setConfirmation,D=N.discard,W=N.setDiscard,T=N.isSaved,B=N.setIsSaved,K=N.action,A=N.setAction,H=N.isRequired,_=N.setIsRequired,M=N.hideContent,R=N.setHideContent,z=N.isLoading,Q=N.skuName,G=N.skuNumber,F=N.poList,J=N.gradeList,V=N.unitOfMeassures,$=N.totalWeight,X=N.edited,Y=N.postInfo,Z=N.areaMovement,ee=h<=500,te=M?"d-none":null,ne=$>1?"s":"",ae=X?"bg-green":"bg-lineGrey";return o.a.createElement("div",{style:{paddingLeft:ee?0:10},className:"w-100 h-100 mt-3 mt-md-0"},o.a.createElement(U.a,{discard:D,module:"Inventory Entry - Stock Movement",moduleEntry:d,close:function(){return W(!1)},discardEntry:function(e){return Object(v.o)({id:e,moduleName:u,dispatch:f})}}),o.a.createElement(O.a,{updateEntry:m,setUpdateEntry:p,status:j,moduleEntry:d,submit:function(){var e;return f((e={type:"CREATE_JOB_SHEET"},Object(b.a)(e,"".concat(u,"EntryData"),null),Object(b.a)(e,"".concat(u,"SummaryData"),null),e))},confirmation:L,setConfirmation:q,isSaved:T,action:K,setIsSaved:B,moduleName:u,totalSku:null===d||void 0===d||null===(t=d.jobPost)||void 0===t?void 0:t.list.length}),o.a.createElement(S.a,{isRequired:H,module:d,setIsRequired:_,moduleName:u,totalSku:null===d||void 0===d||null===(n=d.jobPost)||void 0===n?void 0:n.list.length}),o.a.createElement(I.b,{moduleName:u,noSkuChecking:!0,isLoading:z,moduleEntry:d,confirmation:L,setConfirmation:q,isSuccess:Y,setAction:A,action:K,save:function(){return Object(v.q)({name:"save",moduleEntry:d,moduleName:u,dispatch:f,setIsSuccess:x})},submit:function(){return Object(v.q)({name:"submit",moduleEntry:d,moduleName:u,dispatch:f,setIsSuccess:x,submitValidation:w.c,setActiveSKU:i})}}),o.a.createElement("div",{className:"mb-3 bg-white rounded-bottom rounded-top"},o.a.createElement("div",(a={style:{height:E}},Object(b.a)(a,"style",{padding:10}),Object(b.a)(a,"className","w-100 mr-0 d-flex align-items-center border-top border-left border-right border-bottom rounded-top border-soft-green"),a),o.a.createElement("div",{className:"d-flex w-100 m-0 p-0",onClick:function(){return ee?R(!M):null}},o.a.createElement("div",{className:"".concat(s?"iconU-sideBarHideRight":"iconU-sideBarHideLeft"," emptyTextField fontSizeTitle mr-3"),onClick:function(){return l(!s)}}),o.a.createElement("div",{className:"mr-3 pr-1 d-flex align-items-center m-0 p-0 LatoBold"},"Weight Entry"),o.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center"}),o.a.createElement("div",{className:"mr-3 d-flex align-items-center font-green LatoBold"},"".concat(Q," (").concat(G,")"))),o.a.createElement(P.a,{moduleEntry:d,moduleName:u,activeSku:c,dispatch:f})),o.a.createElement("div",{style:{height:ee?E:g,minHeight:ee?E:g},className:"w-100 overflow-y mr-0 border-left border-right border-soft-green pl-3 pr-2 pt-3 ".concat(te)},null===F||void 0===F?void 0:F.map((function(e,t){var n;return o.a.createElement(k,(n={activeSku:c,gradeList:J,inputWidth:"input-w-100"},Object(b.a)(n,"activeSku",c),Object(b.a)(n,"poListIdx",t),Object(b.a)(n,"poItem",e),Object(b.a)(n,"moduleEntry",d),Object(b.a)(n,"moduleName",u),n))}))),o.a.createElement("div",{className:"w-100 d-flex align-items-center p-3 border-left border-right border-bottom rounded-bottom LatoBold"},o.a.createElement("button",{tabIndex:"0",type:"button",className:"btn sku-item ".concat(ae,"  text-white px-5 mr-3 LatoBold"),onClick:function(){return X?q({show:!0,name:"save"}):null}},"Save"),o.a.createElement("div",null,"Total Weight ",o.a.createElement("span",{className:"font-green"},"".concat($," ").concat(null===V||void 0===V?void 0:V.toUpperCase()).concat(ne))))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-end"},o.a.createElement("div",{tabIndex:"0",onClick:function(){return W(!0)},className:"red pr-3 sku-item fontSizeButton cursor-pointer"},o.a.createElement("i",{className:"iconU-entryTrash"})," Discard"),o.a.createElement("button",{tabIndex:"0",onClick:function(){return X?Object(w.c)({setActiveSKU:i,moduleEntry:d,moduleName:u,dispatch:f,setConfirmation:q,setIsRequired:_,areaMovement:Z}):null},className:"btn sku-item px-5 py-2 text-white ".concat(ae," LatoBold no-shadow"),style:{height:"fit-content !important"}},"Submit")))};t.default=function(){var e=Object(r.d)((function(e){return e.stockTransferEntryData})),t=Object(i.useState)(!1),n=Object(a.a)(t,2),l=n[0],c=n[1],d=Object(i.useState)(0),u=Object(a.a)(d,2),m=u[0],p=u[1],v=Object(i.useState)(),b=Object(a.a)(v,2),y=b[0],E=b[1],g=document.documentElement.clientHeight,h=document.documentElement.clientWidth,N=g-150;return e&&0!==(null===e||void 0===e?void 0:e.jobPost.list.length)?o.a.createElement("div",{style:{height:h<=500?g:N},className:"w-100 d-md-flex justify-content-between scroll-y z-0"},o.a.createElement(f,{hideSKUList:l,activeSku:m,setActiveSKU:p,moduleName:"stockTransfer",moduleEntry:e,setUpdateEntry:E}),o.a.createElement(q,{setActiveSKU:p,setHideSKUList:c,hideSKUList:l,moduleName:"stockTransfer",moduleEntry:e,activeSku:m,setUpdateEntry:E,updateEntry:y})):o.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},o.a.createElement(s.a,{to:"/inventory-entry/stock-transfer"},"Please Select At Least 1 SKU"))}},687:function(e,t,n){"use strict";var a=n(1),i=n.n(a);t.a=function(e){var t=e.isEmpty,n=e.entryListIdx,a=e.poListIdx,o=(e.wmsPoSkuInfoId,e.uom),s=e.inputWidth,r=e.values,l=e.onChange,c=e.showTitle,d=(e.grade,e.title),u=e.name,m="gram"!==o&&"kg"!==o;return i.a.createElement("div",{className:" ".concat(s," mb-3 mr-3 ").concat(m?null:"d-none")},i.a.createElement("div",{className:" pb-1 LatoBold ".concat(c?null:"d-none")},d),i.a.createElement("div",{className:"".concat(t?"border-red":"border"," rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},i.a.createElement("input",{id:"qty_".concat(a,"_").concat(n),maxLength:"10",autoComplete:"off",type:"text",className:"w-100 plain-input",value:r,name:u||"qty",onChange:function(e){return l(e)}}),i.a.createElement("div",{className:"font-soft-grey"},o?o.toUpperCase():"")))}},706:function(e,t,n){e.exports=n.p+"static/media/refreshIcon.de5bc1ae.svg"},771:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return E}));var a=n(4),i=n(65),o=n.n(i),s=n(71),r=n(665),l=n(91),c=n(22),d=n.n(c),u=n(19),m=n(663),p=n(673),v=n(116),f=n(662),b=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,i,c,b,y,E,g,h,N,x,j,L,k,w,I,O,S,U,P,C;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,i=t.checked,c=t.dispatch,b=t.setLocalEntryData,y=t.moduleName,E=t.moduleSummary,g=t.moduleEntry,h=t.warehouseUuid,N=t.warehouseIdDestination,x=t.areaId,j=t.areaIdDesposition,(L=Object(r.a)(E))[a].checked=i,c(Object(s.a)({type:u.c},"".concat(y,"summaryData"),L)),k=null===L||void 0===L?void 0:L.filter((function(e){if(e.checked)return e})),w=[],g&&g.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&w.push(t.skuUuid)})),I=[],O=k.map(function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:h,dispatch:c,areaId:x.value,moduleName:y});case 8:(i=e.sent)&&(s=i.map((function(e){e.itemList=[];var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(v.e)(e.initialWeight)?Object(v.e)(e.initialWeight):e.initialWeight,e})),t.poList=s,I.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(O);case 11:e.sent,S=[],g&&(S=g.jobPost.list.concat(I)),g||(S=I),(U=L[a]).checked||(S=S.filter((function(e){return e.skuUuid!==U.skuUuid}))),P=null===g||void 0===g||null===(n=g.jobPost)||void 0===n?void 0:n.id,C={jobPost:{id:P||0,warehouseSource:h,warehouseDestination:null===N||void 0===N?void 0:N.value,warehouseDestinationName:null===N||void 0===N?void 0:N.label,areaSource:parseInt(null===x||void 0===x?void 0:x.value),areaName:null===x||void 0===x?void 0:x.label,areaDestination:parseInt(null===j||void 0===j?void 0:j.value),areaDestinationName:null===j||void 0===j?void 0:j.label,list:S.sort((function(e,t){return Object(f.f)(e,t)}))}},0===S.length&&c(Object(s.a)({type:u.b},"".concat(y,"EntryData"),null)),b(C);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,i,s,c,u,f,b,y,E,g,h,N,x,j,L;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,i=t.dispatch,s=t.moduleName,c=t.moduleSummary,u=t.moduleEntry,f=t.warehouseUuid,b=t.areaId,y=t.preAddHandler,(E=Object(r.a)(c))[n].checked=a,g=null===E||void 0===E?void 0:E.filter((function(e){if(e.checked)return e})),h=[],u&&u.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&h.push(t.skuUuid)})),N=[],x=g.map(function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:f,dispatch:i,areaId:b.value,moduleName:s});case 8:(r=e.sent)&&(l=r.map((function(e){e.itemList=[];var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.initialWeight=Object(v.e)(e.initialWeight)?Object(v.e)(e.initialWeight):e.initialWeight,e})),t.poList=l,t.isNewItem=!0,N.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(x);case 10:e.sent,j=[],u&&(j=u.concat(N)),u||(j=N),(L=E[n]).checked||(j=j.filter((function(e){return e.skuUuid!==L.skuUuid}))),y(j);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.setActiveSKU,n=e.moduleEntry,i=e.moduleName,o=e.setConfirmation,r=e.dispatch,l=e.setIsRequired,c=[],d=Object(a.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(f.w)({moduleList:e.itemList});return e.itemList.map((function(n){var a=n.qty,i=n.grade;n.ripeness,n.note;return"kg"===e.uom?0!=a&&!isNaN(a)||null!==(null===i||void 0===i?void 0:i.value)?isNaN(a)||0==a||""===a||null===a?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1:(n.qtyIsEmpty=!1,n.gradeIsEmpty=!1,n.ripenessIsEmpty=!1,n.noteIsEmpty=!1):isNaN(a)||0==a||""===a||null===a?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,n.qtyIsEmpty||(Number(t)>Number(e.initialWeight)?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.gradeIsEmpty)||(null===n||void 0===n?void 0:n.ripenessIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?c.push(!1):c.push(!0),n})),e})),e})),p=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(p=!0)}))}))})),d.jobPost.list=m,r(Object(s.a)({type:u.b},"".concat(i,"EntryData"),d)),!c.includes(!1)&&p?"function"===typeof o&&o({show:!0,name:"submit"}):("function"===typeof o&&o({show:!1,name:null}),"function"===typeof l&&l(!0)),Object(f.b)({setActiveSKU:t,moduleEntry:n,moduleName:i})}}}]);
//# sourceMappingURL=55.f2f82929.chunk.js.map