(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[29],{1e3:function(e,t,n){},1254:function(e,t,n){"use strict";n.r(t);var a=n(660),i=n(1),o=n.n(i),s=n(20),r=n(56),l=n(71),c=n(168),d=n(19),u=(n(999),n(663)),m=n(116),p=function(e){var t=e.isNewItem,n=e.img,a=e.skuDescription,i=e.skuNumber,s=e.activeSku,r=e.uomValue,l=e.idx,c=e.uom,d=e.onClick,p=e.data,v=Object(u.j)({data:p}),f=Object(u.c)(p);return o.a.createElement("div",{className:"w-100 sku-item softGreen pl-2 pr-2 pt-2 mb-3 cursor-pointer rounded ".concat(v?"soft-green":null," ").concat(s===l?"border-green":f?"border-red":"border")},o.a.createElement("div",{className:" w-100 d-flex justify-content-end"},o.a.createElement("div",{className:t?"green-dot":"dot"})),o.a.createElement("div",{onKeyDown:function(e){return Object(m.g)({e:e,idx:l,onClick:d})},onClick:function(){return d()},className:"w-100 softGreen d-flex justify-content-between pl-2 pr-2 mb-3 cursor-pointer ".concat(v?"soft-green":null)},o.a.createElement("div",{className:"d-flex align-items-center w-100"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("img",{src:n,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"})),o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{className:"mr-3 w-100 d-flex"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},a)),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"text"},i),s,o.a.createElement("div",{className:"green LatoBold"},r," ",o.a.createElement("span",null,"".concat(c?c.toUpperCase():"").concat(r>1?"s":""))))))))},v=n(716),f=n.n(v),b=n(664),y=n(662),g=function(e){var t,n,s=e.hideSKUList,u=e.setActiveSKU,m=e.activeSku,v=e.moduleEntry,g=e.moduleName,E=e.setUpdateEntry,h=v.jobPost.list.length,x=document.documentElement.clientWidth,j=document.documentElement.clientHeight;j-=212;var w=Object(i.useState)(!1),N=Object(a.a)(w,2),L=N[0],I=N[1],k=Object(r.c)(),O=Object(r.d)((function(e){return e.thereAreRequest}));return o.a.createElement("div",{className:"".concat(s?"w-0":"w-30","  mt-md-0 rounded-bottom rounded-top")},o.a.createElement("div",{style:{padding:17},className:"w-100 bg-white border-top border-left border-right rounded-top border-soft-green text d-flex align-items-center justify-content-between",onClick:function(){return x<=500?I(!L):null}},o.a.createElement("div",{className:"LatoBold"}," Selected SKU ",o.a.createElement("span",{className:"font-green"},"(".concat(h," SKU").concat(h>1?"s":"",")"))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},o.a.createElement(y.M,{content:"Click to refresh the stock",placement:x<=500?"left":"right"},o.a.createElement("div",null,o.a.createElement("img",{className:"".concat(O>0&&"fa-spin-hover"," mt-1 pointer"),src:f.a,onClick:function(){return Object(b.v)({moduleEntry:v,moduleName:g,dispatch:k,setUpdateEntry:E})}}))),o.a.createElement(c.b,{tabIndex:"0",className:"sku-item",to:"/inventory-entry/stock-take/weight-entry/remove-sku"},o.a.createElement("div",{className:"fontSizeTitle px-3 emptyTextField iconU-remove"})),o.a.createElement(c.b,{tabIndex:"0",className:"sku-item",to:"/inventory-entry/stock-take/weight-entry/add-sku"},o.a.createElement("div",{onClick:function(){return k(Object(l.a)({type:d.a},"".concat(g,"AddSku"),!0))},className:"fontSizeTitle emptyTextField text-bold iconU-entryAdd"})))),o.a.createElement("div",{style:{height:!(x<=500)&&j,maxHeight:j},className:" overflow-y w-100 bg-white mr-0 border rounded-bottom border-soft-green pl-3 pr-0 pt-3 ".concat(L?"d-none":null)},null===v||void 0===v||null===(t=v.jobPost)||void 0===t||null===(n=t.list)||void 0===n?void 0:n.map((function(e,t){return o.a.createElement(p,{isNewItem:null===e||void 0===e?void 0:e.isNewItem,data:e,idx:t,activeSku:m,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:null===e||void 0===e?void 0:e.unitOfMeassures,uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,img:null===e||void 0===e?void 0:e.photo,onClick:function(){return u(t)}})}))))},E=n(705),h=n.n(E),x=n(666),j=n(704),w=n(696),N=n(707),L=n(753),I=function(e){var t,n,a,i,s,c,d,u,m=e.entryListIdx,p=e.wmsPoSkuInfoId,v=e.gradeList,f=e.ripeness,b=e.inputWidth,y=e.showTitle,g=e.item,E=e.onChange,h=e.onChangeDropdown,I=e.uom,k=e.poListIdx,O=e.category,S=Object(r.d)((function(e){return e.ripenessLevel})),D="gram"===(null===g||void 0===g||null===(t=g.grade)||void 0===t||null===(n=t.uom)||void 0===n?void 0:n.toLowerCase())?"kg":(null===g||void 0===g||null===(a=g.grade)||void 0===a?void 0:a.uom)?null===g||void 0===g||null===(i=g.grade)||void 0===i?void 0:i.uom:I,P=null===v||void 0===v?void 0:v.filter((function(e){if("Semi Waste"!==(null===e||void 0===e?void 0:e.label)&&"Waste"!==e.label)return e}));return o.a.createElement("div",{className:"d-flex w-100 we-m "},o.a.createElement(w.a,{isEmpty:g.qtyIsEmpty,poListIdx:k,entryListIdx:m,wmsPoSkuInfoId:p,uom:D,ripeness:f,inputWidth:b,values:null===g||void 0===g?void 0:g.qty,showTitle:y,title:"Input Quantity",onChange:function(e){return E(e)}}),o.a.createElement(j.a,{isEmpty:g.qtyIsEmpty,poListIdx:k,entryListIdx:m,wmsPoSkuInfoId:p,uom:D,ripeness:f,inputWidth:b,values:null===g||void 0===g?void 0:g.qty,title:"Input Weight",showTitle:y,onChange:function(e){return E(e)}}),o.a.createElement(x.a,{isEmpty:g.gradeIsEmpty,selectedValue:null===g||void 0===g?void 0:g.grade,poListIdx:k,entryListIdx:m,wmsPoSkuInfoId:p,uom:I,show:!0,onChangeDropdown:function(e){return h({selected:e,name:"grade"})},title:"Grade",placeholder:"Select Grade",options:P,width:"w-30",showTitle:y}),o.a.createElement(x.a,{isEmpty:g.ripenessIsEmpty,selectedValue:null===g||void 0===g?void 0:g.ripeness,grade:null===(s=g.grade)||void 0===s?void 0:s.label,poListIdx:k,entryListIdx:m,wmsPoSkuInfoId:p,uom:I,show:!0,onChangeDropdown:function(e){return h({selected:e,name:"ripeness"})},title:"Ripeness",placeholder:"Select Ripeness",options:S,width:"w-30",showTitle:y,className:"Waste"===(null===g||void 0===g||null===(c=g.grade)||void 0===c?void 0:c.label)||"Semi Waste"===(null===g||void 0===g||null===(d=g.grade)||void 0===d?void 0:d.label)?"d-none":"Fruits"===O?null:"d-none"}),o.a.createElement(N.a,{isEmpty:g.noteIsEmpty,grade:null===(u=g.grade)||void 0===u?void 0:u.label,poListIdx:k,entryListIdx:m,wmsPoSkuInfoId:p,ripeness:f,inputWidth:"w-30",values:null===g||void 0===g?void 0:g.note,showTitle:y,title:"Note",onChange:function(e){return E(e)}}),o.a.createElement(L.a,Object(l.a)({disabled:!0,onClick:function(e){return h({selected:e,name:"date"})},poListIdx:k,entryListIdx:m,inputWidth:" w-30 ".concat("Fruits"===O||"Vegetables"===O?"d-none":null),text:null===g||void 0===g?void 0:g.expiryDateText,values:null===g||void 0===g?void 0:g.expiryDate,showTitle:!0,title:"Expiry Date"},"disabled",!0)))},k=(n(1e3),n(4)),O=n(22),S=n.n(O),D=function(e){var t,n,a=e.dispatch,i=e.moduleEntry,o=e.moduleName,s=e.activeSku,r=e.poListIdx,c=Object(k.a)({},i),u=null===(t=c.jobPost.list[s].gradeList)||void 0===t?void 0:t.filter((function(e){return(null===e||void 0===e?void 0:e.value)===c.jobPost.list[s].skuUuid})),p=c.jobPost.list[s].poList[r].itemList,v=p[(null===p||void 0===p?void 0:p.length)-1],f=v?v.grade:u[0],b=c.jobPost.list[s].poList[r].expiryDate,y=null;(null===p||void 0===p?void 0:p.length)&&(y=null===(n=p[p.length-1])||void 0===n?void 0:n.ripeness),c.jobPost.list[s].poList[r].itemList.push({qty:"",grade:f,ripeness:y,expiryDate:b,expiryDateText:Object(m.a)({date:b})}),a(Object(l.a)({type:d.b},"".concat(o,"EntryData"),c))},P=function(e){var t,n=e.inputWidth,a=e.activeSku,i=e.poListIdx,s=e.poItem,c=e.moduleEntry,p=e.moduleName,v=e.gradeList,f=Object(r.c)(),b=s.expiryDate,y=s.inboundDate,g=s.initialWeight,E=s.inboundQty,x=s.initialWeightUpdate,j=s.initialWeightScreenUpdate,w=(s.poUuid,s.skuUuid,s.supplierId,s.supplierName),N=s.uom,L=s.ripeness,O=(s.ripenessLevel,s.edited),P=s.wmsPoSkuCode,C=s.category,U=s.codeGrade,W=s.isHidden,q=(isNaN(x),isNaN(j)?g:j),T="kg"===N||"gram"===N?"Weight":"Quantity",B=c.jobPost.list[a].gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===U})),R=c.jobPost.areaName;return o.a.createElement("div",{id:"sku_item_".concat(a,"_").concat(i),tabIndex:"0",className:"".concat(W?"d-none":null," z-0 d-flex flex-column sku-item justify-content-between w-100 mb-3 align-items-center border rounded border-soft-green ").concat(O?"soft-green":null)},o.a.createElement("div",{className:"w-100 border-soft-green mt-3 d-flex align-items-start px-3"},o.a.createElement("div",{className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex justify-content-between align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Date",o.a.createElement("span",{className:"ml-2 font-green"},y?Object(m.b)({date:y}):"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3"},"Initial ".concat(T),o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(g," ").concat(null===N||void 0===N?void 0:N.toUpperCase()).concat(g>1?"s":""))))),o.a.createElement("div",{className:"w-100 border-soft-green d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"PO Code",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(P||"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Supplier Name",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(w)))))),o.a.createElement("div",{className:"w-100 border-bottom border-soft-green mb-3 d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Expiry Date",o.a.createElement("span",{className:"ml-2 font-green"},b?Object(m.b)({date:b,noTime:!0}):"-")),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Quantity",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(E||"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5 ".concat("Waste"===R||"Semi Waste"===R?null:"d-none")},"Grade",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(B.length?B[0].label:"-")))))),o.a.createElement("div",{className:"d-flex flex-column justify-content-between w-100 align-items-center px-3 z-0"},null===(t=s.itemList)||void 0===t?void 0:t.map((function(e,t){return o.a.createElement("div",{className:"d-flex w-100 align-items-center justify-content-between"},o.a.createElement("div",{className:"w-100 d-flex"},o.a.createElement("div",{style:{width:"10px"},className:"input-height d-flex align-items-center mb-3 mr-3 pt-4 mt-2"},"".concat(t+1,".")),o.a.createElement("div",{className:"w-100"},o.a.createElement(I,{category:C,entryListIdx:t,wmsPoSkuInfoId:e.wmsPoSkuInfoId,showTitle:!0,gradeList:v,onChange:function(e){return function(e){var t,n,a=e.dispatch,i=e.moduleEntry,o=e.moduleName,s=e.activeSku,r=e.poListIdx,c=e.entryListIdx,m=e.e,p=null===m||void 0===m||null===(t=m.target)||void 0===t?void 0:t.name,v=null===m||void 0===m||null===(n=m.target)||void 0===n?void 0:n.value,f=Object(k.a)({},i);if(f.jobPost.list[s].isNewItem=!1,"weight"===p||"weightToCompare"===p){if(console.clear(),!0===/^[0-9\.\x0]+$/.test(v)&&""!==v){var b=0,y=null===v||void 0===v?void 0:v.split("."),g=y[0];g>=0&&(g=parseInt(g));var E=y[1];if(null!==E&&void 0!==E)if(E.length>2){var h=E.slice(0,2);b="".concat(g,".").concat(h)}else b="".concat(g,".").concat(E);else b=parseInt(g);"weight"===p&&(f.jobPost.list[s].poList[r].itemList[c].qty=b,f.jobPost.list[s].poList[r].itemList[c].qtyIsEmpty=!1),"weightToCompare"===p&&(f.jobPost.list[s].poList[r].itemList[c].qtyToCompare=b,f.jobPost.list[s].poList[r].itemList[c].qtyToCompareIsEmpty=!1)}else"weight"===p&&(f.jobPost.list[s].poList[r].itemList[c].qty=""),"weightToCompare"===p&&(f.jobPost.list[s].poList[r].itemList[c].qtyToCompare="")}else if("qty"===p){if(!1===/^[0-9.]+$/.test(v)&&""!==v)return;f.jobPost.list[s].poList[r].itemList[c].qty=v?parseInt(v):v,f.jobPost.list[s].poList[r].itemList[c].qtyIsEmpty=!1}"note"===p&&(f.jobPost.list[s].poList[r].itemList[c].note=v,f.jobPost.list[s].poList[r].itemList[c].noteIsEmpty=!1);var x=f.jobPost.list[s].poList[r].inboundQty,j=x;f.jobPost.list[s].poList[r].edited=!1,f.jobPost.list[s].poList[r].minus=!1,f.jobPost.list[s].poList[r].itemList.map((function(e){(e.qty||0===e.qty)&&(f.jobPost.list[s].poList[r].edited=!0),j-=isNaN(e.qty)?0:e.qty,f.jobPost.list[s].poList[r].initialWeightUpdate=j,j<0?(f.jobPost.list[s].poList[r].minus=!1,f.jobPost.list[s].poList[r].initialWeightUpdate=0):f.jobPost.list[s].poList[r].itemList.filter((function(e){return e.qtyIsEmpty=!1}))}));var w=f.jobPost.list[s].poList[r].initialWeight;f.jobPost.list[s].poList[r].itemList.map((function(e){w-=isNaN(e.qty)?0:e.qty,f.jobPost.list[s].poList[r].initialWeightScreenUpdate=w}));var N=Object(u.x)({moduleList:f.jobPost.list[s].poList[r].itemList});f.jobPost.list[s].poList[r].initialWeightOver=N>x?N:0,a(Object(l.a)({type:d.b},"".concat(o,"EntryData"),f))}({dispatch:f,moduleEntry:c,moduleName:p,activeSku:a,poListIdx:i,entryListIdx:t,e:e})},onChangeDropdown:function(e){var n=e.selected,o=e.name;return function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,i=e.activeSku,o=e.poListIdx,s=e.entryListIdx,r=e.selected,c=e.name,u=Object(k.a)({},n);if(u.jobPost.list[i].isNewItem=!1,"grade"===c&&(u.jobPost.list[i].poList[o].itemList[s].grade=r,u.jobPost.list[i].poList[o].edited=!0,u.jobPost.list[i].poList[o].itemList[s].uom="gram"===(null===r||void 0===r?void 0:r.uom)?"kg":null===r||void 0===r?void 0:r.uom,u.jobPost.list[i].poList[o].itemList[s].gradeIsEmpty=!1,u.jobPost.list[i].poList[o].itemList[s].ripeness={label:null,value:null},u.jobPost.list[i].poList[o].itemList[s].ripenessIsEmpty=!1,u.jobPost.list[i].poList[o].itemList[s].note=null,u.jobPost.list[i].poList[o].itemList[s].noteIsEmpty=!1),"ripeness"===c&&(u.jobPost.list[i].poList[o].itemList[s].ripeness=r,u.jobPost.list[i].poList[o].edited=!0,u.jobPost.list[i].poList[o].itemList[s].ripenessIsEmpty=!1,u.jobPost.list[i].poList[o].itemList[s].note=null,u.jobPost.list[i].poList[o].itemList[s].noteIsEmpty=!1),"date"===c){var p=S()(r).valueOf();u.jobPost.list[i].poList[o].itemList[s].expiryDate=p,u.jobPost.list[i].poList[o].itemList[s].expiryDateText=Object(m.a)({date:p}),u.jobPost.list[i].poList[o].edited=!0,u.jobPost.list[i].poList[o].itemList[s].ripenessIsEmpty=!1,u.jobPost.list[i].poList[o].itemList[s].noteIsEmpty=!1}t(Object(l.a)({type:d.b},"".concat(a,"EntryData"),u))}({dispatch:f,moduleEntry:c,moduleName:p,activeSku:a,poListIdx:i,entryListIdx:t,selected:n,name:o})},uom:N,ripeness:L,inputWidth:n,item:e,className:L?null:"d-none",poListIdx:i}))),o.a.createElement("div",{className:"d-flex w-25 align-items-center justify-content-end input-height mb-0 p-0"},o.a.createElement("img",{src:h.a,alt:"delete icon",className:"w-1 cursor-pointer ",onClick:function(e){return Object(u.e)({dispatch:f,moduleEntry:c,moduleName:p,activeSku:a,poListIdx:i,entryListIdx:t,e:e,countQty:u.d})}})))}))),o.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&D({dispatch:f,moduleEntry:c,moduleName:p,activeSku:a,poListIdx:i})},className:"w-100 ml-5 pl-4 font-green mb-3 LatoBold cursor-pointer ",onClick:function(){return D({dispatch:f,moduleEntry:c,moduleName:p,activeSku:a,poListIdx:i})}},o.a.createElement("i",{className:"green iconU-entryAdd pr-2"}),"Add ".concat(T," (").concat(Object(m.e)(q)?Object(m.e)(q):q," ").concat(N?N.toUpperCase():"").concat(q>1?"s":""," left)")))},C=n(752),U=n(676),W=n(713),q=n(751),T=n(692),B=n(720),R=n(677),A=function(e){var t,n,a,i=e.setActiveSKU,s=e.hideSKUList,c=e.setHideSKUList,d=e.activeSku,u=e.moduleEntry,m=e.moduleName,p=e.updateEntry,v=e.setUpdateEntry,f=Object(r.c)(),y=Object(R.d)(),g=y.height,E=y.heightAdj,h=y.dimention,x=Object(R.l)({moduleEntry:u,activeSku:d}),j=x.status,w=x.setIsSuccess,N=x.confirmation,L=x.setConfirmation,I=x.discard,k=x.setDiscard,O=x.isSaved,S=x.setIsSaved,D=x.action,A=x.setAction,K=x.isRequired,z=x.setIsRequired,H=x.hideContent,Q=x.setHideContent,M=x.isLoading,_=x.skuName,F=x.skuNumber,G=x.poList,V=x.gradeList,J=x.unitOfMeassures,$=x.totalWeight,X=x.edited,Y=x.postInfo,Z=h<=500,ee=H?"d-none":null,te=$>1?"s":"",ne=X?"bg-green":"bg-lineGrey";return o.a.createElement("div",{style:{paddingLeft:Z?0:10},className:"w-100 h-100 mt-3 mt-md-0"},o.a.createElement(T.a,{discard:I,module:"Inventory Entry - Stock Take",moduleEntry:u,close:function(){return k(!1)},discardEntry:function(e){return Object(b.o)({id:e,moduleName:m,dispatch:f})}}),o.a.createElement(W.a,{updateEntry:p,setUpdateEntry:v,status:j,moduleEntry:u,submit:function(){var e;return f((e={type:"CREATE_JOB_SHEET"},Object(l.a)(e,"".concat(m,"EntryData"),null),Object(l.a)(e,"".concat(m,"SummaryData"),null),e))},confirmation:N,setConfirmation:L,isSaved:O,action:D,setIsSaved:S,moduleName:m,totalSku:null===u||void 0===u||null===(t=u.jobPost)||void 0===t?void 0:t.list.length}),o.a.createElement(q.a,{isRequired:K,module:u,setIsRequired:z,moduleName:m,totalSku:null===u||void 0===u||null===(n=u.jobPost)||void 0===n?void 0:n.list.length}),o.a.createElement(U.b,{isLoading:M,moduleEntry:u,confirmation:N,setConfirmation:L,isSuccess:Y,setAction:A,action:D,save:function(){return Object(b.q)({name:"save",moduleEntry:u,moduleName:m,dispatch:f,setIsSuccess:w})},submit:function(){return Object(b.q)({name:"submit",moduleEntry:u,moduleName:m,dispatch:f,setIsSuccess:w,submitValidation:C.c,setActiveSKU:i})}}),o.a.createElement("div",{className:"mb-3 bg-white rounded-bottom rounded-top"},o.a.createElement("div",(a={style:{height:g}},Object(l.a)(a,"style",{padding:10}),Object(l.a)(a,"className","w-100 mr-0 d-flex align-items-center border-top border-left border-right border-bottom rounded-top border-soft-green"),a),o.a.createElement("div",{className:"d-flex w-100 m-0 p-0",onClick:function(){return Z?Q(!H):null}},o.a.createElement("div",{className:"".concat(s?"iconU-sideBarHideRight":"iconU-sideBarHideLeft"," emptyTextField fontSizeTitle mr-3 m-0 p-0"),onClick:function(){return c(!s)}}),o.a.createElement("div",{className:"mr-3 pr-1 d-flex align-items-center m-0 p-0 LatoBold"},"Weight Entry"),o.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center m-0 p-0"}),o.a.createElement("div",{className:"mr-3 d-flex align-items-center font-green LatoBold m-0 p-0"},"".concat(_," (").concat(F,")"))),o.a.createElement(B.a,{moduleEntry:u,moduleName:m,activeSku:d,dispatch:f})),o.a.createElement("div",{style:{height:Z?g:E,minHeight:Z?g:E},className:"w-100 overflow-y mr-0 border-left border-right border-soft-green pl-3 pr-2 pt-3 ".concat(ee)},null===G||void 0===G?void 0:G.map((function(e,t){return o.a.createElement(P,{gradeList:V,inputWidth:"input-w-100",activeSku:d,poListIdx:t,poItem:e,moduleEntry:u,moduleName:m})}))),o.a.createElement("div",{className:"w-100 d-flex align-items-center p-3 border-left border-right border-bottom rounded-bottom LatoBold ".concat(ee)},o.a.createElement("button",{tabIndex:"0",type:"button",className:"btn ".concat(ne,"  text-white sku-item px-5 mr-3 LatoBold"),onClick:function(){return X?L({show:!0,name:"save"}):null}},"Save"),o.a.createElement("div",null,"Total Weight ",o.a.createElement("span",{className:"font-green"},"".concat($," ").concat(null===J||void 0===J?void 0:J.toUpperCase()).concat(te))))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-end"},o.a.createElement("div",{tabIndex:"0",onClick:function(){return k(!0)},className:"red pr-3 sku-item fontSizeButton cursor-pointer"},o.a.createElement("i",{className:"iconU-entryTrash"})," Discard"),o.a.createElement("button",{tabIndex:"0",onClick:function(){return X?Object(C.c)({setActiveSKU:i,moduleEntry:u,moduleName:m,dispatch:f,setConfirmation:L,setIsRequired:z}):null},className:"btn sku-item px-5 py-2 text-white ".concat(ne," LatoBold no-shadow"),style:{height:"fit-content !important"}},"Submit")))};t.default=function(){var e=Object(r.d)((function(e){return e.stockTakeEntryData})),t=Object(i.useState)(!1),n=Object(a.a)(t,2),l=n[0],c=n[1],d=Object(i.useState)(0),u=Object(a.a)(d,2),m=u[0],p=u[1],v=Object(i.useState)(),f=Object(a.a)(v,2),b=f[0],y=f[1],E=document.documentElement.clientHeight,h=document.documentElement.clientWidth,x=E-150;return e&&0!==(null===e||void 0===e?void 0:e.jobPost.list.length)?o.a.createElement("div",{style:{height:h<=500?E:x},className:"w-100 d-md-flex justify-content-between scroll-y z-0"},o.a.createElement(g,{hideSKUList:l,activeSku:m,setActiveSKU:p,moduleName:"stockTake",moduleEntry:e,setUpdateEntry:y}),o.a.createElement(A,{setActiveSKU:p,setHideSKUList:c,hideSKUList:l,moduleName:"stockTake",moduleEntry:e,activeSku:m,setUpdateEntry:y,updateEntry:b})):o.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},o.a.createElement(s.a,{to:"/inventory-entry/stock-take"},"Please Select At Least 1 SKU"))}},666:function(e,t,n){"use strict";var a=n(665),i=n(4),o=n(660),s=n(1),r=n.n(s),l=n(694);t.a=function(e){var t,n,c=e.isEmpty,d=e.title,u=e.placeholder,m=e.options,p=e.selectedValue,v=e.showTitle,f=e.width,b=e.className,y=e.entryListIdx,g=e.onChangeDropdown,E=e.show,h=e.poListIdx,x=e.isDisabled,j=e.style,w=e.noMarginBottom,N=e.resetName,L=e.isMulti,I=e.hideResetOpt,k=Object(s.useState)(),O=Object(o.a)(k,2),S=O[0],D=O[1];Object(s.useEffect)((function(){"empty"===p&&D(!0)}),[p,c]);var P=!!c&&function(e){return Object(i.a)(Object(i.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},C=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(y).concat(h)),U=null===C||void 0===C?void 0:C.getBoundingClientRect();Object(s.useEffect)((function(){U=null===C||void 0===C?void 0:C.getBoundingClientRect()}),[S]);var W=document.documentElement.clientWidth,q=[{label:"-".concat(N||d,"-"),value:null}];m&&(q=[].concat(Object(a.a)(q),Object(a.a)(m))),I&&(q=q.filter((function(e){return null===e||void 0===e?void 0:e.value})));var T,B=(null===(n=U)||void 0===n?void 0:n.bottom)>600?"top":"bottom";W<=500&&(B=(null===(T=U)||void 0===T?void 0:T.bottom)>400?"top":"bottom","Categories"===d&&(B="top"));return r.a.createElement("div",{style:j,className:"mr-0 ".concat(j?null:"mr-lg-3"," ").concat(w?null:"mb-3"," ").concat(f," ").concat(b," ").concat(E?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(v?null:"d-none")},d),r.a.createElement(l.a,{inputId:"".concat(d,"_").concat(h,"_").concat(y),isMulti:L,isSearchable:!(W<500),isDisabled:x||!1,id:"dropdown".concat(y).concat(h),value:((null===p||void 0===p?void 0:p.value)||!!(null===p||void 0===p?void 0:p.length))&&p,menuIsOpen:S,menuPortal:!0,placeholder:N||u,options:q,onMenuOpen:function(){return D(!0)},onMenuClose:function(){return D(!1)},onChange:function(e){g(e),D(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(B),styles:{menuPortal:function(e){return Object(i.a)(Object(i.a)({},e),{},{zIndex:9999})},control:P,option:function(e,t){var n=t.isFocused,a=t.isSelected;return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:4})}}))}},693:function(e,t,n){},696:function(e,t,n){"use strict";var a=n(1),i=n.n(a);t.a=function(e){var t=e.isEmpty,n=e.entryListIdx,a=e.poListIdx,o=(e.wmsPoSkuInfoId,e.uom),s=e.inputWidth,r=e.values,l=e.onChange,c=e.showTitle,d=(e.grade,e.title),u=e.name,m="gram"!==o&&"kg"!==o;return i.a.createElement("div",{className:" ".concat(s," mb-3 mr-3 ").concat(m?null:"d-none")},i.a.createElement("div",{className:" pb-1 LatoBold ".concat(c?null:"d-none")},d),i.a.createElement("div",{className:"".concat(t?"border-red":"border"," rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},i.a.createElement("input",{id:"qty_".concat(a,"_").concat(n),maxLength:"10",autoComplete:"off",type:"text",className:"w-100 plain-input",value:r,name:u||"qty",onChange:function(e){return l(e)}}),i.a.createElement("div",{className:"font-soft-grey"},o?o.toUpperCase():"")))}},707:function(e,t,n){"use strict";var a=n(1),i=n.n(a);t.a=function(e){var t=e.isEmpty,n=e.entryListIdx,a=(e.wmsPoSkuInfoId,e.uom),o=e.inputWidth,s=e.values,r=e.onChange,l=e.showTitle,c=e.grade,d=e.title,u=e.isReadOnly,m=e.poListIdx;return i.a.createElement("div",{className:" ".concat(o," mb-3 mr-3 ").concat("Waste"===c?null:"d-none")},i.a.createElement("div",{className:" pb-1 LatoBold ".concat(l?null:"d-none")},d),i.a.createElement("div",{className:"".concat(t?"border-red":"border"," border rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},i.a.createElement("input",{id:"note_".concat(m,"_").concat(n),readOnly:u,autoComplete:"off",className:"w-100 plain-input",value:s,name:"note",onChange:function(e){return r(e)}}),i.a.createElement("div",{className:"font-soft-grey"},a?a.toUpperCase():"")))}},716:function(e,t,n){e.exports=n.p+"static/media/refreshIcon.de5bc1ae.svg"},717:function(e,t,n){e.exports=n.p+"static/media/asc.9b60817e.svg"},718:function(e,t,n){e.exports=n.p+"static/media/desc.bec03077.svg"},720:function(e,t,n){"use strict";var a=n(660),i=n(1),o=n.n(i),s=n(116),r=n(723),l=(n(721),n(722),n(693),n(4));var c=function(e){var t=e.showDate,n=e.selectDate,s=e.setShowDate;document.documentElement.clientWidth;var c=Object(i.useState)({startDate:new Date,endDate:new Date,key:"selection"}),d=Object(a.a)(c,2),u=d[0],m=d[1],p=Object(i.useState)(new Date),v=Object(a.a)(p,2),f=v[0],b=v[1],y=Object(i.useState)(),g=Object(a.a)(y,2),E=g[0],h=g[1],x=E?"text":"bg-green text-white",j=E?"bg-green text-white":"text",w=Object(i.useRef)(null);!function(e){var t=e.wrapperRef,n=e.showDate,a=e.setShowDate,o=e.selectDate;Object(i.useEffect)((function(){function e(e){n&&t.current&&!t.current.contains(e.target)&&(a(!n),o())}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,n])}({wrapperRef:w,showDate:t,setShowDate:s,selectDate:n}),Object(i.useEffect)((function(){m({startDate:new Date,endDate:new Date,key:"selection"}),b(new Date)}),[E]);return o.a.createElement("div",{ref:w,style:{width:"350px"},className:" mt-5 position-fixed bg-white border border-soft-green rounded z-100 d-flex flex-column justify-content-center ".concat(t?null:"d-none")},o.a.createElement("div",{className:"d-flex justify-content-between w-100 cursor-pointer p-3"},o.a.createElement("div",{className:" border border-soft-green d-flex rounded justify-content-between w-100 cursor-pointer"},o.a.createElement("span",{onClick:function(){return h(!E)},className:" ".concat(x," w-50  ").concat(E?"rounded-left":"rounded"," text-center p-2")},"Single Date"),o.a.createElement("span",{onClick:function(){return h(!E)},className:" ".concat(j," w-50 ").concat(E?"rounded":"rounded-right"," text-center p-2")},"Ranged Date"))),o.a.createElement(r.DateRangePicker,{className:E?null:"d-none",ranges:[u],onChange:function(e){return function(e){var t=e.newdate,n=e.dateRange,a=e.setDateRange,i=Object(l.a)({},n);i.startDate=t.selection.startDate,i.endDate=t.selection.endDate,a(i)}({newdate:e,dateRange:u,setDateRange:m})}}),o.a.createElement(r.Calendar,{className:E?"d-none":null,date:f,onChange:function(e){return b(e)}}),o.a.createElement("div",{className:"d-flex justify-content-between w-100 cursor-pointer p-3"},o.a.createElement("span",{onClick:function(){t&&(n(E?u:f),s())},className:" bg-green text-white w-100 border border-soft-green rounded text-center p-2"},"Confirm")))},d=n(717),u=n.n(d),m=n(718),p=n.n(m);t.a=function(e){var t,n,r=e.moduleEntry,l=e.moduleName,d=e.activeSku,m=e.dispatch,v=Object(i.useState)(),f=Object(a.a)(v,2),b=f[0],y=f[1],g=Object(i.useState)(),E=Object(a.a)(g,2),h=E[0],x=E[1],j=Object(i.useState)(),w=Object(a.a)(j,2),N=w[0],L=w[1],I=Object(i.useState)(),k=Object(a.a)(I,2),O=k[0],S=k[1],D=document.documentElement.clientWidth;return(null===(t=n=Object(s.a)({date:h,datePicker:!0}))||void 0===t?void 0:t.startDate)&&(n="".concat(n.startDate," - ").concat(n.endDate)),Object(i.useEffect)((function(){Object(s.h)({moduleEntry:r,moduleName:l,activeSku:d,dispatch:m,sortBy:b})}),[b,d]),Object(i.useEffect)((function(e){N||Object(s.d)({moduleEntry:r,moduleName:l,activeSku:d,dispatch:m,date:h})}),[h,N,d]),Object(i.useEffect)((function(e){y(),x()}),[O,d]),o.a.createElement("div",{className:"w-25 d-flex justify-content-end"},o.a.createElement("div",{style:{height:40},className:"".concat("repack"===l?"d-none":null," border-soft-green border-top border-bottom border-left m-0 rounded-left green h6 d-flex align-items-center justify-content-center px-2 text-nowrap ").concat(D>500&&h?null:"d-none")},n),o.a.createElement("div",{style:{height:40,minWidth:40},className:"".concat(h?"iconU-modalClose red":"iconU-filterDate emptyTextField"," border-soft-green border ").concat(h?"rounded-right":"rounded"," ").concat("repack"===l?"d-none":null," d-flex align-items-center justify-content-center mr-3 cursor-pointer"),onClick:function(){return h?S((function(e){return!e})):L((function(e){return!e}))}}),o.a.createElement(c,{showDate:N,selectDate:function(e){return x(e)},setShowDate:function(e){return L(e)}}),o.a.createElement("img",{style:{height:40,minWidth:40},src:b?p.a:u.a,onClick:function(){return y(!b)},className:"p-2 border rounded border-soft-green cursor-pointer"}))}},752:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return g}));var a=n(4),i=n(65),o=n.n(i),s=n(71),r=n(665),l=n(91),c=n(22),d=n.n(c),u=n(19),m=n(664),p=n(673),v=n(116),f=n(663),b=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,i,c,b,y,g,E,h,x,j,w,N,L,I,k,O,S,D,P,C;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.idx,c=t.checked,b=t.dispatch,y=t.setLocalEntryData,g=t.moduleName,E=t.moduleSummary,h=t.moduleEntry,x=t.warehouseUuid,j=t.areaId,w=t.zeroQuantity,(N=Object(r.a)(E))[i].checked=c,b((n={type:u.c},Object(s.a)(n,"".concat(g,"summaryData"),N),Object(s.a)(n,"finish",!1),n)),L=null===N||void 0===N?void 0:N.filter((function(e){if(e.checked)return e})),I=[],h&&h.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&I.push(t.skuUuid)})),k=[],O=L.map(function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,i,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:x,dispatch:b,areaId:j.value,moduleName:g,zeroQuantity:w});case 8:(i=e.sent)&&(s=t.gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===t.skuUuid})),r=i.map((function(e){e.itemList=[{qty:e.initialWeight,grade:s[0],expiryDate:null===e||void 0===e?void 0:e.expiryDate,expiryDateText:Object(v.a)({date:null===e||void 0===e?void 0:e.expiryDate})}],e.initialWeightUpdate=e.inboundQty-e.initialWeight,e.initialWeightScreenUpdate=parseInt(0);var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=r,k.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(O);case 11:e.sent,b({type:u.g,finish:!0}),S=[],h&&(S=h.jobPost.list.concat(k)),h||(S=k),(D=N[i]).checked||(S=S.filter((function(e){return e.skuUuid!==D.skuUuid}))),P=null===h||void 0===h||null===(a=h.jobPost)||void 0===a?void 0:a.id,C={jobPost:{id:P||0,warehouseSource:x,warehouseDestination:x,areaSource:parseInt(null===j||void 0===j?void 0:j.value),areaName:null===j||void 0===j?void 0:j.label,areaDestination:parseInt(null===j||void 0===j?void 0:j.value),list:S.sort((function(e,t){return Object(f.f)(e,t)}))}},0===S.length&&b(Object(s.a)({type:u.b},"".concat(g,"EntryData"),null)),y(C);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,i,s,c,u,f,b,y,g,E,h,x,j,w,N,L;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.zeroQuantity,a=t.idx,i=t.checked,s=t.dispatch,c=t.moduleName,u=t.moduleSummary,f=t.moduleEntry,b=t.warehouseUuid,y=t.areaId,g=t.preAddHandler,(E=Object(r.a)(u))[a].checked=i,h=null===E||void 0===E?void 0:E.filter((function(e){if(e.checked)return e})),x=[],f&&f.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&x.push(t.skuUuid)})),j=[],w=h.map(function(){var e=Object(l.a)(o.a.mark((function e(t,a){var i,r,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return i=e.sent,t.gradeList=i,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:b,dispatch:s,areaId:y.value,moduleName:c,zeroQuantity:n});case 8:(r=e.sent)&&(l=t.gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===t.skuUuid})),u=r.map((function(e){e.itemList=[{qty:e.initialWeight,grade:l[0],expiryDate:null===e||void 0===e?void 0:e.expiryDate,expiryDateText:Object(v.a)({date:null===e||void 0===e?void 0:e.expiryDate})}],e.initialWeightScreenUpdate=parseInt(0),e.initialWeightUpdate=e.inboundQty-e.initialWeight;var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(v.e)(e.initialWeight)?Object(v.e)(e.initialWeight):e.initialWeight,e})),t.poList=u,t.isNewItem=!0,j.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(w);case 10:e.sent,N=[],f&&(N=f.concat(j)),f||(N=j),(L=E[a]).checked||(N=N.filter((function(e){return e.skuUuid!==L.skuUuid}))),g(N);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.setActiveSKU,n=e.moduleEntry,i=e.moduleName,o=e.setConfirmation,r=e.dispatch,l=e.setIsRequired,c=[],d=Object(a.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(e){return e.itemList.map((function(t){var n,a,i=t.qty,o=t.grade,s=t.ripeness,r=t.note;"Fruits"===e.category?0!=i&&!isNaN(i)||null!==(null===o||void 0===o?void 0:o.value)?"Waste"===(null===t||void 0===t||null===(n=t.grade)||void 0===n?void 0:n.label)||"Semi Waste"===(null===t||void 0===t||null===(a=t.grade)||void 0===a?void 0:a.label)?(isNaN(i)||""===i||null===i?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,"Waste"!==(null===o||void 0===o?void 0:o.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(isNaN(i)||""===i||null===i?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,(null===s||void 0===s?void 0:s.value)?t.ripenessIsEmpty=!1:t.ripenessIsEmpty=!0,"Waste"!==(null===o||void 0===o?void 0:o.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(t.qtyIsEmpty=!1,t.gradeIsEmpty=!1,t.ripenessIsEmpty=!1,t.noteIsEmpty=!1):0!=i&&!isNaN(i)||null!==(null===o||void 0===o?void 0:o.value)?(isNaN(i)||""===i||null===i?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,"Waste"!==(null===o||void 0===o?void 0:o.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(t.qtyIsEmpty=!1,t.gradeIsEmpty=!1,t.ripenessIsEmpty=!1,t.noteIsEmpty=!1);return(null===t||void 0===t?void 0:t.qtyIsEmpty)||(null===t||void 0===t?void 0:t.gradeIsEmpty)||(null===t||void 0===t?void 0:t.ripenessIsEmpty)||(null===t||void 0===t?void 0:t.noteIsEmpty)||(null===t||void 0===t?void 0:t.qtyToCompareIsEmpty)?c.push(!1):c.push(!0),t})),e})),e})),p=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){(null===e||void 0===e?void 0:e.qty)>=0&&(p=!0)}))}))})),d.jobPost.list=m,r(Object(s.a)({type:u.b},"".concat(i,"EntryData"),d)),!c.includes(!1)&&p?"function"===typeof o&&o({show:!0,name:"submit"}):("function"===typeof o&&o({show:!1,name:null}),"function"===typeof l&&l(!0)),Object(f.b)({setActiveSKU:t,moduleEntry:n,moduleName:i})}},753:function(e,t,n){"use strict";var a=n(660),i=n(1),o=n.n(i),s=(n(721),n(722),n(693),n(723));t.a=function(e){e.placeholder;var t,n,r=e.inputWidth,l=e.values,c=e.text,d=e.showTitle,u=e.title,m=e.isEmpty,p=(e.onChange,e.onClick),v=e.disabled,f=e.entryListIdx,b=e.poListIdx,y=Object(i.useState)(),g=Object(a.a)(y,2),E=g[0],h=g[1],x=null===(t=document)||void 0===t?void 0:t.getElementById("date".concat(f).concat(b)),j=document.documentElement.clientWidth,w=null===x||void 0===x?void 0:x.getBoundingClientRect();Object(i.useEffect)((function(){w=null===x||void 0===x?void 0:x.getBoundingClientRect()}),[E]);var N=(null===(n=w)||void 0===n?void 0:n.top)+50,L=!1;if(j>500){var I,k;if((null===(I=w)||void 0===I?void 0:I.bottom)>450)N=(null===(k=w)||void 0===k?void 0:k.top)-300}else{var O,S,D,P;if((null===(O=w)||void 0===O?void 0:O.bottom)>400)L=30,N=(null===(D=w)||void 0===D?void 0:D.top)-200;if((null===(S=w)||void 0===S?void 0:S.bottom)<400)L=30,N=(null===(P=w)||void 0===P?void 0:P.top)+120}var C=Object(i.useRef)(null);return function(e){var t=e.wrapperRef,n=e.show,a=e.setShow;Object(i.useEffect)((function(){function e(e){n&&t.current&&!t.current.contains(e.target)&&a(!n)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,n])}({wrapperRef:C,show:E,setShow:h}),o.a.createElement("div",{className:" ".concat(r," mb-3 mr-3 ")},o.a.createElement("div",{className:" pb-1 LatoBold ".concat(d?null:"d-none")},u),o.a.createElement("div",{tabIndex:"0",id:"date".concat(f).concat(b),onClick:function(){return h((function(e){return!e}))},className:"".concat(m?"border-red":"border"," rounded mb-2 sku-item border-soft-green w-100 w-lg-50 bg-white d-flex align-items-center input-height px-2 mr-3 ").concat("function"===typeof p?"cursor-pointer":null)},o.a.createElement("input",{disabled:v,autoComplete:"off",type:"text",className:"w-100 plain-input ".concat("function"===typeof p?"cursor-pointer":null),value:c}),o.a.createElement("span",{className:"iconU-filterDate emptyTextField"})),o.a.createElement("div",{style:{top:N,right:L,zIndex:9},className:"position-fixed border border-soft-green rounded shadow ".concat(E?null:"d-none"," "),ref:C},o.a.createElement(s.Calendar,{classNames:"p-1",date:l,onChange:function(e){p(e),h(!1)}})))}},999:function(e,t,n){}}]);
//# sourceMappingURL=29.0526b814.chunk.js.map