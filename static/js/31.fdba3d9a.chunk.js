(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[31],{1153:function(e,t,n){},1154:function(e,t,n){},1221:function(e,t,n){"use strict";n.r(t);var a=n(653),o=n(1),i=n.n(o),c=n(20),r=n(56),s=n(70),l=n(166),d=n(19),u=(n(1153),n(656)),m=n(114),p=function(e){var t=e.isNewItem,n=e.img,a=e.skuDescription,o=e.skuNumber,c=e.activeSku,r=e.uomValue,s=e.idx,l=e.uom,d=e.onClick,p=e.data,b=Object(u.k)({data:p}),v=Object(u.c)(p);return i.a.createElement("div",{onKeyDown:function(e){return Object(m.g)({e:e,idx:s,onClick:d})},className:"w-100 sku-item softGreen pl-2 pr-2 pt-2 mb-3 cursor-pointer rounded ".concat(b?"soft-green":null," ").concat(c===s?"border-green":v?"border-red":"border")},i.a.createElement("div",{className:" w-100 d-flex justify-content-end"},i.a.createElement("div",{className:t?"green-dot":"dot"})),i.a.createElement("div",{onClick:function(){return d()},className:"w-100 softGreen d-flex justify-content-between pl-2 pr-2 mb-3 cursor-pointer ".concat(b?"soft-green":null)},i.a.createElement("div",{className:"d-flex align-items-center w-100"},i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement("img",{src:n,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"})),i.a.createElement("div",{className:"w-100"},i.a.createElement("div",{className:"mr-3 w-100 d-flex"},i.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},a)),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("div",{className:"text"},o),c,i.a.createElement("div",{className:"green LatoBold"},r," ",i.a.createElement("span",null,"".concat(l?l.toUpperCase():"").concat(r>1?"s":""))))))))},b=n(704),v=n.n(b),f=n(657),y=n(655),g=function(e){var t,n,c=e.hideSKUList,u=e.setActiveSKU,m=e.activeSku,b=e.moduleEntry,g=e.moduleName,h=e.setUpdateEntry,E=b.jobPost.list.length,w=document.documentElement.clientWidth,j=document.documentElement.clientHeight;j-=212;var N=Object(o.useState)(!1),x=Object(a.a)(N,2),L=x[0],k=x[1],O=Object(r.c)(),I=Object(r.d)((function(e){return e.thereAreRequest}));return i.a.createElement("div",{className:"".concat(c?"w-0":"w-30","  mt-md-0 rounded-bottom rounded-top")},i.a.createElement("div",{style:{padding:17},className:"w-100 bg-white border-top border-left border-right rounded-top border-soft-green text d-flex align-items-center justify-content-between",onClick:function(){return w<=500?k(!L):null}},i.a.createElement("div",{className:"LatoBold"}," Selected SKU ",i.a.createElement("span",{className:"font-green"},"(".concat(E," SKU").concat(E>1?"s":"",")"))),i.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},i.a.createElement(y.M,{content:"Click to refresh the stock",placement:w<=500?"left":"right"},i.a.createElement("div",null,i.a.createElement("img",{className:"".concat(I>0&&"fa-spin-hover"," mt-1 pointer"),src:v.a,onClick:function(){return Object(f.v)({moduleEntry:b,moduleName:g,dispatch:O,setUpdateEntry:h})}}))),i.a.createElement(l.b,{to:"/inventory-entry/additional-outbound/weight-entry/remove-sku"},i.a.createElement("div",{className:"fontSizeTitle px-3 emptyTextField iconU-remove"})),i.a.createElement(l.b,{to:"/inventory-entry/additional-outbound/weight-entry/add-sku"},i.a.createElement("div",{onClick:function(){return O(Object(s.a)({type:d.a},"".concat(g,"AddSku"),!0))},className:"fontSizeTitle emptyTextField text-bold iconU-entryAdd"})))),i.a.createElement("div",{style:{height:!(w<=500)&&j,maxHeight:j},className:" overflow-y w-100 bg-white mr-0 border rounded-bottom border-soft-green pl-3 pr-0 pt-3 ".concat(L?"d-none":null)},null===b||void 0===b||null===(t=b.jobPost)||void 0===t||null===(n=t.list)||void 0===n?void 0:n.map((function(e,t){return i.a.createElement(p,{isNewItem:null===e||void 0===e?void 0:e.isNewItem,data:e,idx:t,activeSku:m,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:null===e||void 0===e?void 0:e.unitOfMeassures,uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,img:null===e||void 0===e?void 0:e.photo,onClick:function(){return u(t)}})}))))},h=n(697),E=n.n(h),w=n(659),j=n(696),N=n(688),x=n(835),L=function(e){var t,n,a,o=e.entryListIdx,c=e.wmsPoSkuInfoId,s=e.outboundTypeList,l=(e.reason,e.inputWidth),d=e.showTitle,u=e.item,m=e.onChange,p=e.onChangeDropdown,b=e.uom,v=e.totalPack,f=e.poListIdx,y=e.category,g=Object(r.d)((function(e){return e.ripenessLevel}));return i.a.createElement("div",{className:"d-flex w-100 we-m"},i.a.createElement(N.a,{isEmpty:u.qtyIsEmpty,poListIdx:f,entryListIdx:o,wmsPoSkuInfoId:c,uom:b,inputWidth:l,values:null===u||void 0===u?void 0:u.qty,showTitle:d,title:"Input Quantity",onChange:function(e){return m(e)}}),i.a.createElement(j.a,{isEmpty:u.qtyIsEmpty,poListIdx:f,entryListIdx:o,wmsPoSkuInfoId:c,uom:b,inputWidth:l,values:null===u||void 0===u?void 0:u.qty,title:"Input Weight",showTitle:d,onChange:function(e){return m(e)}}),i.a.createElement(N.a,{isEmpty:u.packIsEmpty,entryListIdx:o,wmsPoSkuInfoId:c,uom:"PACK",inputWidth:"".concat(l," ").concat(v?null:"d-none"),values:null===u||void 0===u?void 0:u.pack,showTitle:d,title:"Pack",name:"pack",onChange:function(e){return m(e)}}),i.a.createElement(w.a,{isEmpty:u.outboundTypeIsEmpty,ddType:"codeOutbound",selectedValue:null===u||void 0===u?void 0:u.codeOutbound,entryListIdx:o,wmsPoSkuInfoId:c,uom:"kg",onChangeDropdown:function(e){return p({selected:e,name:"codeOutbound"})},title:"Select Outbound Type",placeholder:"Select Outbound Type",options:null===s||void 0===s?void 0:s.filter((function(e){return"Stock Transfer"!==e.label})),width:"w-30 text-nowrap",showTitle:d,show:!0}),i.a.createElement(w.a,{isEmpty:u.ripenessIsEmpty,selectedValue:null===u||void 0===u?void 0:u.ripeness,grade:null===(t=u.grade)||void 0===t?void 0:t.label,poListIdx:f,entryListIdx:o,wmsPoSkuInfoId:c,uom:b,show:!0,onChangeDropdown:function(e){return p({selected:e,name:"ripeness"})},title:"Ripeness",placeholder:"Select Ripeness",options:g,width:"w-30",showTitle:d,className:"Waste"===(null===u||void 0===u||null===(n=u.grade)||void 0===n?void 0:n.label)||"Semi Waste"===(null===u||void 0===u||null===(a=u.grade)||void 0===a?void 0:a.label)?"d-none":"Fruits"===y?null:"d-none"}),i.a.createElement(x.a,{poListIdx:f,isEmpty:u.noteIsEmpty,entryListIdx:o,wmsPoSkuInfoId:c,inputWidth:"w-30",values:null===u||void 0===u?void 0:u.note,showTitle:d,title:"Note",onChange:function(e){return m(e)}}))},k=(n(1154),n(4)),O=function(e){var t,n=e.inputWidth,a=e.activeSku,o=e.poListIdx,c=e.poItem,l=e.moduleEntry,p=e.moduleName,b=e.outboundTypeList,v=Object(r.c)(),f=c.expiryDate,y=c.inboundDate,g=c.initialWeight,h=c.inboundQty,w=c.initialWeightUpdate,j=c.initialWeightScreenUpdate,N=(c.poUuid,c.skuUuid,c.supplierId,c.supplierName),x=c.uom,O=c.ripeness,I=(c.ripenessLevel,c.edited),S=c.wmsPoSkuCode,D=c.category,C=(c.codeGrade,c.totalPack),P=c.isHidden,U=(isNaN(w),isNaN(j)?g:j),T="kg"===x||"gram"===x?"Weight":"Quantity";return i.a.createElement("div",{className:"".concat(P?"d-none":null," d-flex flex-column justify-content-between w-100 mb-3 align-items-center border rounded border-soft-green ").concat(I?"soft-green":null)},i.a.createElement("div",{className:"w-100 border-soft-green mt-3 d-flex align-items-start px-3"},i.a.createElement("div",{className:"d-flex align-items-center LatoBold pr-3"},"".concat(o+1,".")),i.a.createElement("div",{className:"w-100 d-flex justify-content-between align-items-center LatoBold cardheader-m"},i.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},i.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Date",i.a.createElement("span",{className:"ml-2 font-green"},y?Object(m.b)({date:y}):"-"))),i.a.createElement("div",{className:"d-flex align-items-center mb-3"},"Initial ".concat(T),i.a.createElement("span",{className:"ml-2 font-green"}," ".concat(g," ").concat(null===x||void 0===x?void 0:x.toUpperCase()).concat(g>1?"s":""))))),i.a.createElement("div",{className:"w-100 border-soft-green d-flex align-items-start px-3"},i.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(o+1,".")),i.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},i.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},i.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"PO Code",i.a.createElement("span",{className:"ml-2 font-green"}," ".concat(S||"-"))),i.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Supplier Name",i.a.createElement("span",{className:"ml-2 font-green"}," ".concat(N)))))),i.a.createElement("div",{className:"w-100 border-bottom border-soft-green mb-3 d-flex align-items-start px-3"},i.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(o+1,".")),i.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},i.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},i.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Expiry Date",i.a.createElement("span",{className:"ml-2 font-green"},f?Object(m.b)({date:f,noTime:!0}):"-")),i.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Quantity",i.a.createElement("span",{className:"ml-2 font-green"}," ".concat(h||"-"))),i.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5 ".concat(C?null:"d-none")},"Total Pack",i.a.createElement("span",{className:"ml-2 font-green"}," ".concat(C||"-")))))),i.a.createElement("div",{className:"d-flex flex-column justify-content-between w-100 align-items-center px-3"},null===(t=c.itemList)||void 0===t?void 0:t.map((function(e,t){return i.a.createElement("div",{className:"d-flex w-100 align-items-center justify-content-between"},i.a.createElement("div",{className:"w-100 d-flex"},i.a.createElement("div",{style:{width:"10px"},className:"input-height d-flex align-items-center mb-3 mr-3 pt-4 mt-2"},"".concat(t+1,".")),i.a.createElement("div",{className:"w-100"},i.a.createElement(L,{category:D,poListIdx:o,entryListIdx:t,wmsPoSkuInfoId:e.wmsPoSkuInfoId,showTitle:!0,outboundTypeList:b,onChange:function(e){return function(e){var t,n,a=e.dispatch,o=e.moduleEntry,i=e.moduleName,c=e.activeSku,r=e.poListIdx,l=e.entryListIdx,m=e.e,p=null===m||void 0===m||null===(t=m.target)||void 0===t?void 0:t.name,b=null===m||void 0===m||null===(n=m.target)||void 0===n?void 0:n.value,v=Object(k.a)({},o);if(v.jobPost.list[c].isNewItem=!1,console.clear(),"weight"===p||"weightToCompare"===p){if(console.clear(),!0===/^[0-9\.\x0]+$/.test(b)&&""!==b){var f=0,y=null===b||void 0===b?void 0:b.split("."),g=y[0];g>=0&&(g=parseInt(g));var h=y[1];if(null!==h&&void 0!==h)if(h.length>2){var E=h.slice(0,2);f="".concat(g,".").concat(E)}else f="".concat(g,".").concat(h);else f=parseInt(g);"weight"===p&&(v.jobPost.list[c].poList[r].itemList[l].qty=f,v.jobPost.list[c].poList[r].itemList[l].qtyIsEmpty=!1),"weightToCompare"===p&&(v.jobPost.list[c].poList[r].itemList[l].qtyToCompare=f,v.jobPost.list[c].poList[r].itemList[l].qtyToCompareIsEmpty=!1)}else"weight"===p&&(v.jobPost.list[c].poList[r].itemList[l].qty=""),"weightToCompare"===p&&(v.jobPost.list[c].poList[r].itemList[l].qtyToCompare="")}else if("qty"===p){if(!1===/^[0-9.]+$/.test(b)&&""!==b)return;v.jobPost.list[c].poList[r].itemList[l].qty=b?parseInt(b):b,v.jobPost.list[c].poList[r].itemList[l].qtyIsEmpty=!1}else if("pack"===p){if(!1===/^[0-9.]+$/.test(b)&&""!==b)return;v.jobPost.list[c].poList[r].itemList[l].pack=b>0?parseInt(b):b,v.jobPost.list[c].poList[r].itemList[l].packIsEmpty=!1}"reason"===p&&(v.jobPost.list[c].poList[r].itemList[l].note=b,v.jobPost.list[c].poList[r].itemList[l].noteIsEmpty=!1);var w=v.jobPost.list[c].poList[r].inboundQty,j=w;v.jobPost.list[c].poList[r].edited=!0,v.jobPost.list[c].poList[r].minus=!1,v.jobPost.list[c].poList[r].itemList.map((function(e){j-=isNaN(e.qty)?0:e.qty,v.jobPost.list[c].poList[r].initialWeightUpdate=j,j<0?(v.jobPost.list[c].poList[r].minus=!1,v.jobPost.list[c].poList[r].initialWeightUpdate=0):v.jobPost.list[c].poList[r].itemList.filter((function(e){return e.qtyIsEmpty=!1}))}));var N=v.jobPost.list[c].poList[r].initialWeight;v.jobPost.list[c].poList[r].itemList.map((function(e){N-=isNaN(e.qty)?0:e.qty,v.jobPost.list[c].poList[r].initialWeightScreenUpdate=N}));var x=Object(u.y)({moduleList:v.jobPost.list[c].poList[r].itemList});v.jobPost.list[c].poList[r].initialWeightOver=x>w?x:0,a(Object(s.a)({type:d.b},"".concat(i,"EntryData"),v))}({dispatch:v,moduleEntry:l,moduleName:p,activeSku:a,poListIdx:o,entryListIdx:t,e:e})},onChangeDropdown:function(e){var n=e.selected,i=e.name;return function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,o=e.activeSku,i=e.poListIdx,c=e.entryListIdx,r=e.selected,l=e.name,u=Object(k.a)({},n);u.jobPost.list[o].isNewItem=!1,"codeOutbound"===l&&(u.jobPost.list[o].poList[i].itemList[c].codeOutbound=r,u.jobPost.list[o].poList[i].edited=!0,u.jobPost.list[o].poList[i].itemList[c].outboundTypeIsEmpty=!1),"ripeness"===l&&(u.jobPost.list[o].poList[i].itemList[c].ripeness=r,u.jobPost.list[o].poList[i].edited=!0),t(Object(s.a)({type:d.b},"".concat(a,"EntryData"),u))}({dispatch:v,moduleEntry:l,moduleName:p,activeSku:a,poListIdx:o,entryListIdx:t,selected:n,name:i})},uom:x,ripeness:O,inputWidth:n,item:e,totalPack:C,className:O?null:"d-none"}))),i.a.createElement("div",{className:"d-flex w-25 align-items-center justify-content-end input-height mb-0 p-0"},i.a.createElement("img",{src:E.a,alt:"delete icon",className:"w-1 cursor-pointer",onClick:function(e){return Object(u.e)({dispatch:v,moduleEntry:l,moduleName:p,activeSku:a,poListIdx:o,entryListIdx:t,e:e,countQty:u.d})}})))}))),i.a.createElement("div",{className:"w-100 ml-5 pl-4 font-green mb-3 LatoBold cursor-pointer",onClick:function(){return function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,o=e.activeSku,i=e.poListIdx,c=Object(k.a)({},n);c.jobPost.list[o].poList[i].itemList.push({qty:"",codeOutbound:{label:"",value:""},note:""}),t(Object(s.a)({type:d.b},"".concat(a,"EntryData"),c))}({dispatch:v,moduleEntry:l,moduleName:p,activeSku:a,poListIdx:o})}},i.a.createElement("i",{className:"green iconU-entryAdd pr-2"}),"Add ".concat(T," (").concat(Object(m.e)(U)?Object(m.e)(U):U," ").concat(x?x.toUpperCase():"").concat(U>1?"s":""," left)")))},I=n(771),S=n(669),D=n(703),C=n(742),P=n(686),U=n(707),T=n(671),W=function(e){var t,n,a,o=e.setActiveSKU,c=e.hideSKUList,l=e.setHideSKUList,d=e.activeSku,u=e.moduleEntry,m=e.moduleName,p=e.updateEntry,b=e.setUpdateEntry,v=Object(r.c)(),y=Object(T.d)(),g=y.height,h=y.heightAdj,E=y.dimention,w=Object(T.b)({moduleEntry:u,activeSku:d}),j=w.setIsSuccess,N=w.confirmation,x=w.setConfirmation,L=w.discard,k=w.setDiscard,W=w.isSaved,q=w.setIsSaved,B=w.action,R=w.setAction,A=w.isRequired,K=w.setIsRequired,H=w.hideContent,M=w.setHideContent,z=w.isLoading,F=w.skuName,_=w.skuNumber,Q=w.poList,V=w.unitOfMeassures,G=w.totalWeight,J=w.edited,$=w.postInfo,X=w.outboundTypeList,Y=w.status,Z=E<=500,ee=H?"d-none":null,te=G>1?"s":"",ne=J?"bg-green":"bg-lineGrey";return i.a.createElement("div",{style:{paddingLeft:Z?0:10},className:"w-100 h-100 mt-3 mt-md-0"},i.a.createElement(P.a,{discard:L,module:"Inventory Entry - Additional Outbound",moduleEntry:u,close:function(){return k(!1)},discardEntry:function(e){return Object(f.o)({id:e,moduleName:m,dispatch:v})}}),i.a.createElement(D.a,{updateEntry:p,setUpdateEntry:b,status:Y,moduleEntry:u,submit:function(){var e;return v((e={type:"CREATE_JOB_SHEET"},Object(s.a)(e,"".concat(m,"EntryData"),null),Object(s.a)(e,"".concat(m,"SummaryData"),null),e))},confirmation:N,setConfirmation:x,isSaved:W,action:B,setIsSaved:q,moduleName:m,totalSku:null===u||void 0===u||null===(t=u.jobPost)||void 0===t?void 0:t.list.length}),i.a.createElement(C.a,{isRequired:A,module:u,setIsRequired:K,moduleName:m,totalSku:null===u||void 0===u||null===(n=u.jobPost)||void 0===n?void 0:n.list.length}),i.a.createElement(S.b,{noSkuChecking:!0,moduleName:m,isLoading:z,moduleEntry:u,confirmation:N,setConfirmation:x,isSuccess:$,setAction:R,action:B,save:function(){return Object(f.q)({name:"save",moduleEntry:u,moduleName:m,dispatch:v,setIsSuccess:j})},submit:function(){return Object(f.q)({name:"submit",moduleEntry:u,moduleName:m,dispatch:v,setIsSuccess:j,submitValidation:I.c,setActiveSKU:o})}}),i.a.createElement("div",{className:"mb-3 bg-white rounded-bottom rounded-top"},i.a.createElement("div",(a={style:{height:g}},Object(s.a)(a,"style",{padding:10}),Object(s.a)(a,"className","w-100 mr-0 d-flex align-items-center border-top border-left border-right border-bottom rounded-top border-soft-green"),a),i.a.createElement("div",{className:"d-flex w-100 m-0 p-0",onClick:function(){return Z?M(!H):null}},i.a.createElement("div",{className:"".concat(c?"iconU-sideBarHideRight":"iconU-sideBarHideLeft"," emptyTextField fontSizeTitle mr-3 m-0 p-0"),onClick:function(){return l(!c)}}),i.a.createElement("div",{className:"mr-3 pr-1 d-flex align-items-center m-0 p-0 LatoBold"},"Weight Entry"),i.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center m-0 p-0"}),i.a.createElement("div",{className:"mr-3 d-flex align-items-center font-green LatoBold m-0 p-0"},"".concat(F," (").concat(_,")"))),i.a.createElement(U.a,{moduleEntry:u,moduleName:m,activeSku:d,dispatch:v})),i.a.createElement("div",{style:{height:Z?g:h,minHeight:Z?g:h},className:"w-100 overflow-y mr-0 border-left border-right border-soft-green pl-3 pr-2 pt-3 ".concat(ee)},null===Q||void 0===Q?void 0:Q.map((function(e,t){return i.a.createElement(O,{outboundTypeList:X,inputWidth:"input-w-100",activeSku:d,poListIdx:t,poItem:e,moduleEntry:u,moduleName:m})}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center p-3 border-left border-right border-bottom rounded-bottom LatoBold"},i.a.createElement("button",{type:"button",className:"btn ".concat(ne,"  text-white px-5 mr-3 LatoBold"),onClick:function(){return J?x({show:!0,name:"save"}):null}},"Save"),i.a.createElement("div",null,"Total Weight ",i.a.createElement("span",{className:"font-green"},"".concat(G," ").concat(null===V||void 0===V?void 0:V.toUpperCase()).concat(te))))),i.a.createElement("div",{className:"d-flex align-items-center justify-content-end"},i.a.createElement("div",{onClick:function(){return k(!0)},className:"red pr-3 fontSizeButton cursor-pointer"},i.a.createElement("i",{className:"iconU-entryTrash"})," Discard"),i.a.createElement("button",{onClick:function(){return J?Object(I.c)({setActiveSKU:o,moduleEntry:u,moduleName:m,dispatch:v,setConfirmation:x,setIsRequired:K}):null},className:"btn px-5 py-2 text-white ".concat(ne," LatoBold no-shadow"),style:{height:"fit-content !important"}},"Submit")))};t.default=function(e){var t=Object(r.d)((function(e){return e.outboundEntryData})),n=Object(o.useState)(!1),s=Object(a.a)(n,2),l=s[0],d=s[1],u=Object(o.useState)(0),m=Object(a.a)(u,2),p=m[0],b=m[1],v=Object(o.useState)(),f=Object(a.a)(v,2),y=f[0],h=f[1],E=Object(o.useState)(["/inventory-entry/additional-outbound/weight-entry","/inventory-entry/additional-outbound/remove-sku","/inventory-entry/additional-outbound/add-sku"]),w=Object(a.a)(E,2),j=(w[0],w[1],document.documentElement.clientHeight),N=document.documentElement.clientWidth,x=j-150;return t&&0!==(null===t||void 0===t?void 0:t.jobPost.list.length)?i.a.createElement("div",{style:{height:N<=500?j:x},className:"w-100 d-md-flex justify-content-between scroll-y z-0"},i.a.createElement(g,{hideSKUList:l,activeSku:p,setActiveSKU:b,moduleName:"outbound",moduleEntry:t,setUpdateEntry:h}),i.a.createElement(W,{setActiveSKU:b,setHideSKUList:d,hideSKUList:l,moduleName:"outbound",moduleEntry:t,activeSku:p,setUpdateEntry:h,updateEntry:y})):i.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},i.a.createElement(c.a,{to:"/inventory-entry/additional-outbound"},"Please Select At Least 1 SKU"))}},659:function(e,t,n){"use strict";var a=n(658),o=n(4),i=n(653),c=n(1),r=n.n(c),s=n(689);t.a=function(e){var t,n,l=e.isEmpty,d=e.title,u=e.placeholder,m=e.options,p=e.selectedValue,b=e.showTitle,v=e.width,f=e.className,y=e.entryListIdx,g=e.onChangeDropdown,h=e.show,E=e.poListIdx,w=e.isDisabled,j=e.style,N=e.noMarginBottom,x=e.resetName,L=e.isMulti,k=e.hideResetOpt,O=Object(c.useState)(),I=Object(i.a)(O,2),S=I[0],D=I[1];Object(c.useEffect)((function(){"empty"===p&&D(!0)}),[p,l]);var C=!!l&&function(e){return Object(o.a)(Object(o.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},P=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(y).concat(E)),U=null===P||void 0===P?void 0:P.getBoundingClientRect();Object(c.useEffect)((function(){U=null===P||void 0===P?void 0:P.getBoundingClientRect()}),[S]);var T=document.documentElement.clientWidth,W=[{label:"-".concat(x||d,"-"),value:null}];m&&(W=[].concat(Object(a.a)(W),Object(a.a)(m))),k&&(W=W.filter((function(e){return null===e||void 0===e?void 0:e.value})));var q,B=(null===(n=U)||void 0===n?void 0:n.bottom)>600?"top":"bottom";T<=500&&(B=(null===(q=U)||void 0===q?void 0:q.bottom)>400?"top":"bottom","Categories"===d&&(B="top"));return r.a.createElement("div",{style:j,className:"mr-0 ".concat(j?null:"mr-lg-3"," ").concat(N?null:"mb-3"," ").concat(v," ").concat(f," ").concat(h?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(b?null:"d-none")},d),r.a.createElement(s.a,{inputId:"".concat(d,"_").concat(E,"_").concat(y),isMulti:L,isSearchable:!(T<500),isDisabled:w||!1,id:"dropdown".concat(y).concat(E),value:((null===p||void 0===p?void 0:p.value)||!!(null===p||void 0===p?void 0:p.length))&&p,menuIsOpen:S,menuPortal:!0,placeholder:x||u,options:W,onMenuOpen:function(){return D(!0)},onMenuClose:function(){return D(!1)},onChange:function(e){g(e),D(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(B),styles:{menuPortal:function(e){return Object(o.a)(Object(o.a)({},e),{},{zIndex:9999})},control:C,option:function(e,t){var n=t.isFocused,a=t.isSelected;return Object(o.a)(Object(o.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#a8b1be",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(o.a)(Object(o.a)({},e),{},{borderRadius:4})}}))}},687:function(e,t,n){},688:function(e,t,n){"use strict";var a=n(1),o=n.n(a);t.a=function(e){var t=e.isEmpty,n=e.entryListIdx,a=e.poListIdx,i=(e.wmsPoSkuInfoId,e.uom),c=e.inputWidth,r=e.values,s=e.onChange,l=e.showTitle,d=(e.grade,e.title),u=e.name,m="gram"!==i&&"kg"!==i;return o.a.createElement("div",{className:" ".concat(c," mb-3 mr-3 ").concat(m?null:"d-none")},o.a.createElement("div",{className:" pb-1 LatoBold ".concat(l?null:"d-none")},d),o.a.createElement("div",{className:"".concat(t?"border-red":"border"," rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},o.a.createElement("input",{id:"qty_".concat(a,"_").concat(n),maxLength:"10",autoComplete:"off",type:"text",className:"w-100 plain-input",value:r,name:u||"qty",onChange:function(e){return s(e)}}),o.a.createElement("div",{className:"font-soft-grey"},i?i.toUpperCase():"")))}},704:function(e,t,n){e.exports=n.p+"static/media/refreshIcon.20a8ff95.svg"},705:function(e,t,n){e.exports=n.p+"static/media/asc.9b60817e.svg"},706:function(e,t,n){e.exports=n.p+"static/media/desc.bec03077.svg"},707:function(e,t,n){"use strict";var a=n(653),o=n(1),i=n.n(o),c=n(114),r=n(711),s=(n(709),n(710),n(687),n(4));var l=function(e){var t=e.showDate,n=e.selectDate,c=e.setShowDate;document.documentElement.clientWidth;var l=Object(o.useState)({startDate:new Date,endDate:new Date,key:"selection"}),d=Object(a.a)(l,2),u=d[0],m=d[1],p=Object(o.useState)(new Date),b=Object(a.a)(p,2),v=b[0],f=b[1],y=Object(o.useState)(),g=Object(a.a)(y,2),h=g[0],E=g[1],w=h?"text":"bg-green text-white",j=h?"bg-green text-white":"text",N=Object(o.useRef)(null);!function(e){var t=e.wrapperRef,n=e.showDate,a=e.setShowDate,i=e.selectDate;Object(o.useEffect)((function(){function e(e){n&&t.current&&!t.current.contains(e.target)&&(a(!n),i())}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,n])}({wrapperRef:N,showDate:t,setShowDate:c,selectDate:n}),Object(o.useEffect)((function(){m({startDate:new Date,endDate:new Date,key:"selection"}),f(new Date)}),[h]);return i.a.createElement("div",{ref:N,style:{width:"350px"},className:" mt-5 position-fixed bg-white border border-soft-green rounded z-100 d-flex flex-column justify-content-center ".concat(t?null:"d-none")},i.a.createElement("div",{className:"d-flex justify-content-between w-100 cursor-pointer p-3"},i.a.createElement("div",{className:" border border-soft-green d-flex rounded justify-content-between w-100 cursor-pointer"},i.a.createElement("span",{onClick:function(){return E(!h)},className:" ".concat(w," w-50  ").concat(h?"rounded-left":"rounded"," text-center p-2")},"Single Date"),i.a.createElement("span",{onClick:function(){return E(!h)},className:" ".concat(j," w-50 ").concat(h?"rounded":"rounded-right"," text-center p-2")},"Ranged Date"))),i.a.createElement(r.DateRangePicker,{className:h?null:"d-none",ranges:[u],onChange:function(e){return function(e){var t=e.newdate,n=e.dateRange,a=e.setDateRange,o=Object(s.a)({},n);o.startDate=t.selection.startDate,o.endDate=t.selection.endDate,a(o)}({newdate:e,dateRange:u,setDateRange:m})}}),i.a.createElement(r.Calendar,{className:h?"d-none":null,date:v,onChange:function(e){return f(e)}}),i.a.createElement("div",{className:"d-flex justify-content-between w-100 cursor-pointer p-3"},i.a.createElement("span",{onClick:function(){t&&(n(h?u:v),c())},className:" bg-green text-white w-100 border border-soft-green rounded text-center p-2"},"Confirm")))},d=n(705),u=n.n(d),m=n(706),p=n.n(m);t.a=function(e){var t,n,r=e.moduleEntry,s=e.moduleName,d=e.activeSku,m=e.dispatch,b=Object(o.useState)(),v=Object(a.a)(b,2),f=v[0],y=v[1],g=Object(o.useState)(),h=Object(a.a)(g,2),E=h[0],w=h[1],j=Object(o.useState)(),N=Object(a.a)(j,2),x=N[0],L=N[1],k=Object(o.useState)(),O=Object(a.a)(k,2),I=O[0],S=O[1],D=document.documentElement.clientWidth;return(null===(t=n=Object(c.a)({date:E,datePicker:!0}))||void 0===t?void 0:t.startDate)&&(n="".concat(n.startDate," - ").concat(n.endDate)),Object(o.useEffect)((function(){Object(c.h)({moduleEntry:r,moduleName:s,activeSku:d,dispatch:m,sortBy:f})}),[f,d]),Object(o.useEffect)((function(e){x||Object(c.d)({moduleEntry:r,moduleName:s,activeSku:d,dispatch:m,date:E})}),[E,x,d]),Object(o.useEffect)((function(e){y(),w()}),[I,d]),i.a.createElement("div",{className:"w-25 d-flex justify-content-end"},i.a.createElement("div",{style:{height:40},className:"".concat("repack"===s?"d-none":null," border-soft-green border-top border-bottom border-left m-0 rounded-left green h6 d-flex align-items-center justify-content-center px-2 text-nowrap ").concat(D>500&&E?null:"d-none")},n),i.a.createElement("div",{style:{height:40,minWidth:40},className:"".concat(E?"iconU-modalClose red":"iconU-filterDate emptyTextField"," border-soft-green border ").concat(E?"rounded-right":"rounded"," ").concat("repack"===s?"d-none":null," d-flex align-items-center justify-content-center mr-3 cursor-pointer"),onClick:function(){return E?S((function(e){return!e})):L((function(e){return!e}))}}),i.a.createElement(l,{showDate:x,selectDate:function(e){return w(e)},setShowDate:function(e){return L(e)}}),i.a.createElement("img",{style:{height:40,minWidth:40},src:f?p.a:u.a,onClick:function(){return y(!f)},className:"p-2 border rounded border-soft-green cursor-pointer"}))}},771:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return g}));var a=n(4),o=n(65),i=n.n(o),c=n(70),r=n(658),s=n(89),l=n(22),d=n.n(l),u=n(19),m=n(657),p=n(666),b=n(114),v=n(656),f=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,o,l,b,f,y,g,h,E,w,j,N,x,L,k,O,I,S;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,o=t.checked,l=t.dispatch,b=t.setLocalEntryData,f=t.moduleName,y=t.moduleSummary,g=t.moduleEntry,h=t.warehouseUuid,E=t.areaId,(w=Object(r.a)(y))[a].checked=o,l(Object(c.a)({type:u.c},"".concat(f,"summaryData"),w)),j=null===w||void 0===w?void 0:w.filter((function(e){if(e.checked)return e})),N=[],g&&g.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&N.push(t.skuUuid)})),x=[],L=j.map(function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.c)({});case 4:return a=e.sent,t.outboundTypeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:h,dispatch:l,areaId:E.value,moduleName:f});case 8:(o=e.sent)&&(c=o.map((function(e){var n;e.itemList=[];var a=e.expiryDate?d()(e.expiryDate).valueOf():null,o=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=a,e.inboundDate=o,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),"staging"!==(null===E||void 0===E||null===(n=E.label)||void 0===n?void 0:n.toLowerCase())&&(e.totalPack=null),e})),t.poList=c,x.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(L);case 11:e.sent,k=[],g&&(k=g.jobPost.list.concat(x)),g||(k=x),(O=w[a]).checked||(k=k.filter((function(e){return e.skuUuid!==O.skuUuid}))),I=null===g||void 0===g||null===(n=g.jobPost)||void 0===n?void 0:n.id,S={jobPost:{id:I||0,warehouseSource:h,warehouseDestination:h,areaSource:parseInt(null===E||void 0===E?void 0:E.value),areaName:null===E||void 0===E?void 0:E.label,areaDestination:parseInt(null===E||void 0===E?void 0:E.value),list:k.sort((function(e,t){return Object(v.g)(e,t)}))}},0===k.length&&l(Object(c.a)({type:u.b},"".concat(f,"EntryData"),null)),b(S);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,o,c,l,u,v,f,y,g,h,E,w,j,N,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,o=t.dispatch,c=t.moduleName,l=t.moduleSummary,u=t.moduleEntry,v=t.warehouseUuid,f=t.areaId,y=t.preAddHandler,(g=Object(r.a)(l))[n].checked=a,h=null===g||void 0===g?void 0:g.filter((function(e){if(e.checked)return e})),E=[],u&&u.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&E.push(t.skuUuid)})),w=[],j=h.map(function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.c)({});case 4:return a=e.sent,t.outboundTypeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:v,dispatch:o,areaId:f.value,moduleName:c});case 8:(r=e.sent)&&(s=r.map((function(e){var n;e.itemList=[];var a=e.expiryDate?d()(e.expiryDate).valueOf():null,o=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=a,e.inboundDate=o,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(b.e)(e.initialWeight)?Object(b.e)(e.initialWeight):e.initialWeight,"staging"!==(null===f||void 0===f||null===(n=f.label)||void 0===n?void 0:n.toLowerCase())&&(e.totalPack=null),e})),t.poList=s,t.isNewItem=!0,w.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(j);case 10:e.sent,N=[],u&&(N=u.concat(w)),u||(N=w),(x=g[n]).checked||(N=N.filter((function(e){return e.skuUuid!==x.skuUuid}))),y(N);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.setActiveSKU,n=e.moduleEntry,o=e.moduleName,i=e.setConfirmation,r=e.dispatch,s=e.setIsRequired,l=[],d=Object(a.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(t){var n=t.totalPack,a=Object(v.y)({moduleList:t.itemList});return t.itemList.map((function(o){var i,c,r,s=o.qty,u=(o.grade,o.ripeness,o.reason,o.pack);return isNaN(s)||0==s||""===s||null===s?o.qtyIsEmpty=!0:o.qtyIsEmpty=!1,(null===o||void 0===o||null===(i=o.codeOutbound)||void 0===i?void 0:i.value)?o.outboundTypeIsEmpty=!1:o.outboundTypeIsEmpty=!0,"lainnya"==(null===o||void 0===o||null===(c=o.codeOutbound)||void 0===c?void 0:c.value)&&(""==(null===o||void 0===o?void 0:o.note)||void 0===(null===o||void 0===o?void 0:o.note))?o.noteIsEmpty=!0:o.noteIsEmpty=!1,"staging"!==(null===(r=d.jobPost.areaName)||void 0===r?void 0:r.toLowerCase())||"Fruits"!==(null===e||void 0===e?void 0:e.category)&&"Vegetables"!==(null===e||void 0===e?void 0:e.category)||!u&&n>0&&(o.packIsEmpty=!0),o.qtyIsEmpty||(Number(a)>Number(t.initialWeight)?o.qtyIsEmpty=!0:o.qtyIsEmpty=!1),(null===o||void 0===o?void 0:o.qtyIsEmpty)||(null===o||void 0===o?void 0:o.outboundTypeIsEmpty)||(null===o||void 0===o?void 0:o.noteIsEmpty)||(null===o||void 0===o?void 0:o.packIsEmpty)?l.push(!1):l.push(!0),o})),t})),e}));console.log(l);var p=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(p=!0)}))}))})),d.jobPost.list=m,r(Object(c.a)({type:u.b},"".concat(o,"EntryData"),d)),!l.includes(!1)&&p?"function"===typeof i&&i({show:!0,name:"submit"}):("function"===typeof i&&i({show:!1,name:null}),"function"===typeof s&&s(!0)),Object(v.b)({setActiveSKU:t,moduleEntry:n,moduleName:o})}},835:function(e,t,n){"use strict";var a=n(1),o=n.n(a);t.a=function(e){var t=e.placeholder,n=e.inputWidth,a=e.values,i=e.showTitle,c=e.title,r=e.isEmpty,s=e.onChange,l=e.poListIdx,d=e.entryListIdx;return o.a.createElement("div",{className:" ".concat(n," mb-3 mr-3")},o.a.createElement("div",{className:" pb-1 LatoBold ".concat(i?null:"d-none")},c),o.a.createElement("div",{className:"".concat(r?"border-red":"border"," rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},o.a.createElement("input",{id:"noteob_".concat(l,"_").concat(d),autoComplete:"off",type:"text",className:"w-100 plain-input",value:a,name:"reason",placeholder:t,onChange:function(e){return s(e)}})))}}}]);
//# sourceMappingURL=31.fdba3d9a.chunk.js.map