(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[29],{1186:function(e,t,n){},1187:function(e,t,n){},1248:function(e,t,n){"use strict";n.r(t);var a=n(659),i=n(1),o=n.n(i),s=n(20),r=n(56),c=n(71),l=n(168),d=n(19),u=(n(1186),n(662)),m=n(116),p=function(e){var t=e.isNewItem,n=e.img,a=e.skuDescription,i=e.skuNumber,s=e.activeSku,r=e.uomValue,c=e.idx,l=e.uom,d=e.onClick,p=e.data,f=Object(u.k)({data:p}),b=Object(u.c)(p);return o.a.createElement("div",{onKeyDown:function(e){return Object(m.g)({e:e,idx:c,onClick:d})},className:"w-100 sku-item softGreen pl-2 pr-2 pt-2 mb-3 cursor-pointer rounded ".concat(f?"soft-green":null," ").concat(s===c?"border-green":b?"border-red":"border")},o.a.createElement("div",{className:" w-100 d-flex justify-content-end"},o.a.createElement("div",{className:t?"green-dot":"dot"})),o.a.createElement("div",{onClick:function(){return d()},className:"w-100 softGreen d-flex justify-content-between pl-2 pr-2 mb-3 cursor-pointer ".concat(f?"soft-green":null)},o.a.createElement("div",{className:"d-flex align-items-center w-100"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("img",{src:n,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"})),o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{className:"mr-3 w-100 d-flex"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},a)),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"text"},i),s,o.a.createElement("div",{className:"green LatoBold"},r," ",o.a.createElement("span",null,"".concat(l?l.toUpperCase():"").concat(r>1?"s":""))))))))},f=n(711),b=n.n(f),v=n(663),y=n(661),h=function(e){var t,n,s=e.hideSKUList,u=e.setActiveSKU,m=e.activeSku,f=e.moduleEntry,h=e.moduleName,g=e.setUpdateEntry,E=f.jobPost.list.length,w=document.documentElement.clientWidth,N=document.documentElement.clientHeight;N-=212;var x=Object(i.useState)(!1),j=Object(a.a)(x,2),L=j[0],k=j[1],I=Object(r.c)(),O=Object(r.d)((function(e){return e.thereAreRequest}));return o.a.createElement("div",{className:"".concat(s?"w-0":"w-30","  mt-md-0 rounded-bottom rounded-top")},o.a.createElement("div",{style:{padding:17},className:"w-100 bg-white border-top border-left border-right rounded-top border-soft-green text d-flex align-items-center justify-content-between",onClick:function(){return w<=500?k(!L):null}},o.a.createElement("div",{className:"LatoBold"}," Selected SKU ",o.a.createElement("span",{className:"font-green"},"(".concat(E," SKU").concat(E>1?"s":"",")"))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},o.a.createElement(y.M,{content:"Click to refresh the stock",placement:w<=500?"left":"right"},o.a.createElement("div",null,o.a.createElement("img",{className:"".concat(O>0&&"fa-spin-hover"," mt-1 pointer"),src:b.a,onClick:function(){return Object(v.v)({moduleEntry:f,moduleName:h,dispatch:I,setUpdateEntry:g})}}))),o.a.createElement(l.b,{to:"/inventory-entry/waste/weight-entry/remove-sku"},o.a.createElement("div",{className:"fontSizeTitle px-3 emptyTextField iconU-remove"})),o.a.createElement(l.b,{to:"/inventory-entry/waste/weight-entry/add-sku"},o.a.createElement("div",{onClick:function(){return I(Object(c.a)({type:d.a},"".concat(h,"AddSku"),!0))},className:"fontSizeTitle emptyTextField text-bold iconU-entryAdd"})))),o.a.createElement("div",{style:{height:!(w<=500)&&N,maxHeight:N},className:" overflow-y w-100 bg-white mr-0 border rounded-bottom border-soft-green pl-3 pr-0 pt-3 ".concat(L?"d-none":null)},null===f||void 0===f||null===(t=f.jobPost)||void 0===t||null===(n=t.list)||void 0===n?void 0:n.map((function(e,t){return o.a.createElement(p,{isNewItem:null===e||void 0===e?void 0:e.isNewItem,data:e,idx:t,activeSku:m,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:null===e||void 0===e?void 0:e.unitOfMeassures,uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,img:null===e||void 0===e?void 0:e.photo,onClick:function(){return u(t)}})}))))},g=n(703),E=n.n(g),w=n(666),N=n(702),x=n(695),j=n(704),L=n(725),k=function(e){var t=e.entryListIdx,n=e.wmsPoSkuInfoId,a=e.gradeList,i=e.ripeness,s=e.inputWidth,r=e.showTitle,c=e.item,l=e.onChange,d=e.onChangeDropdown,u=e.uom,m=e.poListIdx;e.category;return o.a.createElement("div",{className:"d-flex w-100 we-m"},o.a.createElement(x.a,{isEmpty:c.qtyIsEmpty,poListIdx:m,entryListIdx:t,wmsPoSkuInfoId:n,uom:u,ripeness:i,inputWidth:s,values:null===c||void 0===c?void 0:c.qty,showTitle:r,title:"Input Quantity",onChange:function(e){return l(e)}}),o.a.createElement(N.a,{isEmpty:c.qtyIsEmpty,poListIdx:m,entryListIdx:t,wmsPoSkuInfoId:n,uom:u,ripeness:i,inputWidth:s,values:null===c||void 0===c?void 0:c.qty,title:"Input Weight",showTitle:r,onChange:function(e){return l(e)}}),o.a.createElement(w.a,{isEmpty:c.wasteTypeIsEmpty,selectedValue:null===c||void 0===c?void 0:c.wasteType,poListIdx:m,entryListIdx:t,wmsPoSkuInfoId:n,uom:u,show:!0,onChangeDropdown:function(e){return d({selected:e,name:"grade"})},title:"Waste",placeholder:"Select Waste",options:a,width:"w-30",showTitle:r,className:null}),o.a.createElement(j.a,{isEmpty:c.noteIsEmpty,grade:"Waste",poListIdx:m,entryListIdx:t,wmsPoSkuInfoId:n,inputWidth:"w-30",values:null===c||void 0===c?void 0:c.note,showTitle:r,title:"Note",onChange:function(e){return l(e)}}),o.a.createElement(L.a,{isEmpty:c.uploadPhotoIsEmpty,uom:"PACK",inputWidth:"fit-content",values:c.uploadPhoto,onChange:function(e){return l(e)},showTitle:!0,title:"Add Photos"}))},I=(n(1187),n(65)),O=n.n(I),S=n(91),P=n(4),U=function(){var e=Object(S.a)(O.a.mark((function e(t){var n,a,i,o,s,r,l,m,p,f,b,y,h,g,E,w,N,x,j,L,k,I,S,U;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.dispatch,o=t.moduleEntry,s=t.moduleName,r=t.activeSku,l=t.poListIdx,m=t.entryListIdx,p=t.e,f=null===p||void 0===p||null===(n=p.target)||void 0===n?void 0:n.name,b=null===p||void 0===p||null===(a=p.target)||void 0===a?void 0:a.value,(y=Object(P.a)({},o)).jobPost.list[r].isNewItem=!1,f){e.next=9;break}return y.jobPost.list[r].poList[l].itemList[m].uploadPhoto=null,i(Object(c.a)({type:d.b},"".concat(s,"EntryData"),y)),e.abrupt("return");case 9:if("upload"!==f){e.next=17;break}return e.next=12,Object(v.p)({e:p,dispatch:i});case 12:return h=e.sent,y.jobPost.list[r].poList[l].itemList[m].uploadPhoto=h,y.jobPost.list[r].poList[l].itemList[m].uploadPhotoIsEmpty=!1,i(Object(c.a)({type:d.b},"".concat(s,"EntryData"),y)),e.abrupt("return");case 17:if("weight"!==f&&"weightToCompare"!==f){e.next=23;break}g=/^[0-9\.\x0]+$/,console.clear(),!0===g.test(b)&&""!==b?(E=0,w=null===b||void 0===b?void 0:b.split("."),(N=w[0])>=0&&(N=parseInt(N)),null!==(x=w[1])&&void 0!==x?x.length>2?(j=x.slice(0,2),E="".concat(N,".").concat(j)):E="".concat(N,".").concat(x):E=parseInt(N),"weight"===f&&(y.jobPost.list[r].poList[l].itemList[m].qty=E,y.jobPost.list[r].poList[l].itemList[m].qtyIsEmpty=!1),"weightToCompare"===f&&(y.jobPost.list[r].poList[l].itemList[m].qtyToCompare=E,y.jobPost.list[r].poList[l].itemList[m].qtyToCompareIsEmpty=!1)):("weight"===f&&(y.jobPost.list[r].poList[l].itemList[m].qty=""),"weightToCompare"===f&&(y.jobPost.list[r].poList[l].itemList[m].qtyToCompare="")),e.next=29;break;case 23:if("qty"!==f){e.next=29;break}if(!1!==/^[0-9.]+$/.test(b)||""===b){e.next=27;break}return e.abrupt("return");case 27:y.jobPost.list[r].poList[l].itemList[m].qty=b?parseInt(b):b,y.jobPost.list[r].poList[l].itemList[m].qtyIsEmpty=!1;case 29:"note"===f&&(y.jobPost.list[r].poList[l].itemList[m].note=b,y.jobPost.list[r].poList[l].itemList[m].noteIsEmpty=!1),L=y.jobPost.list[r].poList[l].inboundQty,k=L,y.jobPost.list[r].poList[l].edited=!1,y.jobPost.list[r].poList[l].minus=!1,y.jobPost.list[r].poList[l].itemList.map((function(e){e.qty&&(y.jobPost.list[r].poList[l].edited=!0),k-=isNaN(e.qty)?0:e.qty,y.jobPost.list[r].poList[l].initialWeightUpdate=k;y.jobPost.list[r].poList[l].itemList[m].qty;k<0?(y.jobPost.list[r].poList[l].minus=!1,y.jobPost.list[r].poList[l].initialWeightUpdate=0):y.jobPost.list[r].poList[l].itemList.filter((function(e){return e.qtyIsEmpty=!1}))})),I=y.jobPost.list[r].poList[l].initialWeight,S=I,y.jobPost.list[r].poList[l].itemList.map((function(e){S-=isNaN(e.qty)?0:e.qty,y.jobPost.list[r].poList[l].initialWeightScreenUpdate=S})),U=Object(u.y)({moduleList:y.jobPost.list[r].poList[l].itemList}),y.jobPost.list[r].poList[l].initialWeightOver=U>L?U:0,i(Object(c.a)({type:d.b},"".concat(s,"EntryData"),y));case 41:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t,n=e.inputWidth,a=e.activeSku,i=e.poListIdx,s=e.poItem,l=e.moduleEntry,p=e.moduleName,f=e.gradeList,b=Object(r.c)(),v=s.expiryDate,y=s.inboundDate,h=s.initialWeight,g=s.inboundQty,w=s.initialWeightUpdate,N=s.initialWeightScreenUpdate,x=(s.poUuid,s.skuUuid,s.supplierId,s.supplierName),j=s.uom,L=s.ripeness,I=(s.ripenessLevel,s.edited),O=s.wmsPoSkuCode,S=(s.category,s.codeGrade),D=s.isHidden,C=(isNaN(w),isNaN(N)?h:N),W="kg"===j||"gram"===j?"Weight":"Quantity",q=l.jobPost.list[a].gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===S}));return o.a.createElement("div",{className:"".concat(D?"d-none":null," z-0 d-flex flex-column justify-content-between w-100 mb-3 align-items-center border rounded border-soft-green ").concat(I?"soft-green":null)},o.a.createElement("div",{className:"w-100 border-soft-green mt-3 d-flex align-items-start px-3"},o.a.createElement("div",{className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex justify-content-between align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Date",o.a.createElement("span",{className:"ml-2 font-green"},y?Object(m.b)({date:y}):"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3"},"Initial ".concat(W),o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(h," ").concat(null===j||void 0===j?void 0:j.toUpperCase()).concat(h>1?"s":""))))),o.a.createElement("div",{className:"w-100 border-soft-green d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"PO Code",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(O||"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Supplier Name",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(x)))))),o.a.createElement("div",{className:"w-100 border-bottom border-soft-green mb-3 d-flex align-items-start px-3"},o.a.createElement("div",{style:{opacity:0},className:"d-flex align-items-center LatoBold pr-3"},"".concat(i+1,".")),o.a.createElement("div",{className:"w-100 d-flex align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Expiry Date",o.a.createElement("span",{className:"ml-2 font-green"},v?Object(m.b)({date:v,noTime:!0}):"-")),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Grade",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(q.length?q[0].label:"-"))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Quantity",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(g||"-")))))),o.a.createElement("div",{className:"d-flex flex-column justify-content-between w-100 align-items-center px-3 z-0"},null===(t=s.itemList)||void 0===t?void 0:t.map((function(e,t){return o.a.createElement("div",{className:"d-flex w-100 align-items-center justify-content-between"},o.a.createElement("div",{className:"w-100 d-flex"},o.a.createElement("div",{style:{width:"10px"},className:"input-height d-flex align-items-center mb-3 mr-3 pt-4 mt-2"},"".concat(t+1,".")),o.a.createElement("div",{className:"w-100"},o.a.createElement(k,{entryListIdx:t,wmsPoSkuInfoId:e.wmsPoSkuInfoId,showTitle:!0,gradeList:f,onChange:function(e){return U({dispatch:b,moduleEntry:l,moduleName:p,activeSku:a,poListIdx:i,entryListIdx:t,e:e})},onChangeDropdown:function(e){var n=e.selected,o=e.name;return function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,i=e.activeSku,o=e.poListIdx,s=e.entryListIdx,r=e.selected,l=e.name,u=Object(P.a)({},n);u.jobPost.list[i].isNewItem=!1,"grade"===l&&(u.jobPost.list[i].poList[o].itemList[s].wasteType=r,u.jobPost.list[i].poList[o].edited=!0,u.jobPost.list[i].poList[o].itemList[s].wasteTypeIsEmpty=!1),"ripeness"===l&&(u.jobPost.list[i].poList[o].itemList[s].ripeness=r,u.jobPost.list[i].poList[o].edited=!0,u.jobPost.list[i].poList[o].itemList[s].ripenessIsEmpty=!1),t(Object(c.a)({type:d.b},"".concat(a,"EntryData"),u))}({dispatch:b,moduleEntry:l,moduleName:p,activeSku:a,poListIdx:i,entryListIdx:t,selected:n,name:o})},uom:j,ripeness:L,inputWidth:n,item:e,className:L?null:"d-none",poListIdx:i}))),o.a.createElement("div",{className:"d-flex w-25 align-items-center justify-content-end input-height mb-0 p-0"},o.a.createElement("img",{src:E.a,alt:"delete icon",className:"w-1 cursor-pointer",onClick:function(e){return Object(u.e)({dispatch:b,moduleEntry:l,moduleName:p,activeSku:a,poListIdx:i,entryListIdx:t,e:e,countQty:u.d})}})))}))),o.a.createElement("div",{className:"w-100 ml-5 pl-4 font-green mb-3 LatoBold cursor-pointer",onClick:function(){return function(e){var t=e.dispatch,n=e.moduleEntry,a=e.moduleName,i=e.activeSku,o=e.poListIdx,s=Object(P.a)({},n),r=s.jobPost.list[i].poList[o].codeGrade,l=s.jobPost.list[i].gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===r})),u=s.jobPost.list[i].poList[o].itemList,m=u[(null===u||void 0===u?void 0:u.length)-1],p=m?m.grade:l[0];s.jobPost.list[i].poList[o].itemList.push({qty:"",grade:p,note:"",uploadPhoto:null,wasteType:null}),t(Object(c.a)({type:d.b},"".concat(a,"EntryData"),s))}({dispatch:b,moduleEntry:l,moduleName:p,activeSku:a,poListIdx:i})}},o.a.createElement("i",{className:"green iconU-entryAdd pr-2"}),"Add ".concat(W," (").concat(Object(m.e)(C)?Object(m.e)(C):C," ").concat(j?j.toUpperCase():"").concat(C>1?"s":""," left)")))},C=n(778),W=n(675),q=n(710),T=n(748),B=n(692),A=n(714),K=n(677),R=function(e){var t,n,a,i=e.setActiveSKU,s=e.hideSKUList,l=e.setHideSKUList,d=e.activeSku,u=e.moduleEntry,m=e.moduleName,p=e.updateEntry,f=e.setUpdateEntry,b=Object(r.c)(),y=Object(K.d)(),h=y.dimention,g=y.height,E=y.heightAdj,w=Object(K.q)({moduleEntry:u,activeSku:d}),N=w.setIsSuccess,x=w.confirmation,j=w.setConfirmation,L=w.discard,k=w.setDiscard,I=w.isSaved,O=w.setIsSaved,S=w.action,P=w.setAction,U=w.isRequired,R=w.setIsRequired,z=w.hideContent,H=w.setHideContent,M=w.isLoading,_=w.skuName,G=w.skuNumber,Q=w.poList,F=w.gradeList,V=w.unitOfMeassures,J=w.totalWeight,$=w.edited,X=w.postInfo,Y=w.status,Z=h<=500,ee=z?"d-none":null,te=J>1?"s":"",ne=$?"bg-green":"bg-lineGrey";return o.a.createElement("div",{style:{paddingLeft:Z?0:10},className:"w-100 h-100 mt-3 mt-md-0"},o.a.createElement(B.a,{discard:L,module:"Inventory Entry - Waste",moduleEntry:u,close:function(){return k(!1)},discardEntry:function(e){return Object(v.o)({id:e,moduleName:m,dispatch:b})}}),o.a.createElement(q.a,{updateEntry:p,setUpdateEntry:f,status:Y,moduleEntry:u,submit:function(){var e;return b((e={type:"CREATE_JOB_SHEET"},Object(c.a)(e,"".concat(m,"EntryData"),null),Object(c.a)(e,"".concat(m,"SummaryData"),null),e))},confirmation:x,setConfirmation:j,isSaved:I,action:S,setIsSaved:O,moduleName:m,totalSku:null===u||void 0===u||null===(t=u.jobPost)||void 0===t?void 0:t.list.length}),o.a.createElement(T.a,{isRequired:U,module:u,setIsRequired:R,moduleName:m,totalSku:null===u||void 0===u||null===(n=u.jobPost)||void 0===n?void 0:n.list.length}),o.a.createElement(W.b,{moduleName:m,isLoading:M,moduleEntry:u,confirmation:x,setConfirmation:j,isSuccess:X,setAction:P,action:S,save:function(){return Object(v.q)({name:"save",moduleEntry:u,moduleName:m,dispatch:b,setIsSuccess:N})},submit:function(){return Object(v.q)({name:"submit",moduleEntry:u,moduleName:m,dispatch:b,setIsSuccess:N,submitValidation:C.c,setActiveSKU:i})}}),o.a.createElement("div",{className:"mb-3 bg-white rounded-bottom rounded-top"},o.a.createElement("div",(a={style:{height:g}},Object(c.a)(a,"style",{padding:10}),Object(c.a)(a,"className","w-100 mr-0 d-flex align-items-center border-top border-left border-right border-bottom rounded-top border-soft-green"),a),o.a.createElement("div",{className:"d-flex w-100 m-0 p-0",onClick:function(){return Z?H(!z):null}},o.a.createElement("div",{className:"".concat(s?"iconU-sideBarHideRight":"iconU-sideBarHideLeft"," emptyTextField fontSizeTitle mr-3 m-0 p-0"),onClick:function(){return l(!s)}}),o.a.createElement("div",{className:"mr-3 pr-1 d-flex align-items-center m-0 p-0 LatoBold"},"Weight Entry"),o.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center m-0 p-0"}),o.a.createElement("div",{className:"mr-3 d-flex align-items-center font-green LatoBold m-0 p-0"},"".concat(_," (").concat(G,")"))),o.a.createElement(A.a,{moduleEntry:u,moduleName:m,activeSku:d,dispatch:b})),o.a.createElement("div",{style:{height:Z?g:E,minHeight:Z?g:E},className:"w-100 overflow-y mr-0 border-left border-right border-soft-green pl-3 pr-2 pt-3 ".concat(ee)},null===Q||void 0===Q?void 0:Q.map((function(e,t){return o.a.createElement(D,{gradeList:F,inputWidth:"input-w-100",activeSku:d,poListIdx:t,poItem:e,moduleEntry:u,moduleName:m})}))),o.a.createElement("div",{className:"w-100 d-flex align-items-center p-3 border-left border-right border-bottom rounded-bottom LatoBold"},o.a.createElement("button",{type:"button",className:"btn ".concat(ne,"  text-white px-5 mr-3 LatoBold"),onClick:function(){return $?j({show:!0,name:"save"}):null}},"Save"),o.a.createElement("div",null,"Total Weight ",o.a.createElement("span",{className:"font-green"},"".concat(J," ").concat(null===V||void 0===V?void 0:V.toUpperCase()).concat(te))))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-end"},o.a.createElement("div",{onClick:function(){return k(!0)},className:"red pr-3 fontSizeButton cursor-pointer"},o.a.createElement("i",{className:"iconU-entryTrash"})," Discard"),o.a.createElement("button",{onClick:function(){return $?Object(C.c)({setActiveSKU:i,moduleEntry:u,moduleName:m,dispatch:b,setConfirmation:j,setIsRequired:R}):null},className:"btn px-5 py-2 text-white ".concat(ne," LatoBold no-shadow"),style:{height:"fit-content !important"}},"Submit")))};t.default=function(){var e=Object(r.d)((function(e){return e.wasteEntryData})),t=Object(i.useState)(!1),n=Object(a.a)(t,2),c=n[0],l=n[1],d=Object(i.useState)(0),u=Object(a.a)(d,2),m=u[0],p=u[1],f=Object(i.useState)(),b=Object(a.a)(f,2),v=b[0],y=b[1],g=document.documentElement.clientHeight,E=document.documentElement.clientWidth,w=g-150;return e&&0!==(null===e||void 0===e?void 0:e.jobPost.list.length)?o.a.createElement("div",{style:{height:E<=500?g:w},className:"w-100 d-md-flex justify-content-between scroll-y z-0"},o.a.createElement(h,{hideSKUList:c,activeSku:m,setActiveSKU:p,moduleName:"waste",moduleEntry:e,setUpdateEntry:y}),o.a.createElement(R,{setActiveSKU:p,setHideSKUList:l,hideSKUList:c,moduleName:"waste",moduleEntry:e,activeSku:m,setUpdateEntry:y,updateEntry:v})):o.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},o.a.createElement(s.a,{to:"/inventory-entry/waste"},"Please Select At Least 1 SKU"))}},693:function(e,t,n){},695:function(e,t,n){"use strict";var a=n(1),i=n.n(a);t.a=function(e){var t=e.isEmpty,n=e.entryListIdx,a=e.poListIdx,o=(e.wmsPoSkuInfoId,e.uom),s=e.inputWidth,r=e.values,c=e.onChange,l=e.showTitle,d=(e.grade,e.title),u=e.name,m="gram"!==o&&"kg"!==o;return i.a.createElement("div",{className:" ".concat(s," mb-3 mr-3 ").concat(m?null:"d-none")},i.a.createElement("div",{className:" pb-1 LatoBold ".concat(l?null:"d-none")},d),i.a.createElement("div",{className:"".concat(t?"border-red":"border"," rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},i.a.createElement("input",{id:"qty_".concat(a,"_").concat(n),maxLength:"10",autoComplete:"off",type:"text",className:"w-100 plain-input",value:r,name:u||"qty",onChange:function(e){return c(e)}}),i.a.createElement("div",{className:"font-soft-grey"},o?o.toUpperCase():"")))}},704:function(e,t,n){"use strict";var a=n(1),i=n.n(a);t.a=function(e){var t=e.isEmpty,n=e.entryListIdx,a=(e.wmsPoSkuInfoId,e.uom),o=e.inputWidth,s=e.values,r=e.onChange,c=e.showTitle,l=e.grade,d=e.title,u=e.isReadOnly,m=e.poListIdx;return i.a.createElement("div",{className:" ".concat(o," mb-3 mr-3 ").concat("Waste"===l?null:"d-none")},i.a.createElement("div",{className:" pb-1 LatoBold ".concat(c?null:"d-none")},d),i.a.createElement("div",{className:"".concat(t?"border-red":"border"," border rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},i.a.createElement("input",{id:"note_".concat(m,"_").concat(n),readOnly:u,autoComplete:"off",className:"w-100 plain-input",value:s,name:"note",onChange:function(e){return r(e)}}),i.a.createElement("div",{className:"font-soft-grey"},a?a.toUpperCase():"")))}},711:function(e,t,n){e.exports=n.p+"static/media/refreshIcon.20a8ff95.svg"},712:function(e,t,n){e.exports=n.p+"static/media/asc.9b60817e.svg"},713:function(e,t,n){e.exports=n.p+"static/media/desc.bec03077.svg"},714:function(e,t,n){"use strict";var a=n(659),i=n(1),o=n.n(i),s=n(116),r=n(718),c=(n(716),n(717),n(693),n(4));var l=function(e){var t=e.showDate,n=e.selectDate,s=e.setShowDate;document.documentElement.clientWidth;var l=Object(i.useState)({startDate:new Date,endDate:new Date,key:"selection"}),d=Object(a.a)(l,2),u=d[0],m=d[1],p=Object(i.useState)(new Date),f=Object(a.a)(p,2),b=f[0],v=f[1],y=Object(i.useState)(),h=Object(a.a)(y,2),g=h[0],E=h[1],w=g?"text":"bg-green text-white",N=g?"bg-green text-white":"text",x=Object(i.useRef)(null);!function(e){var t=e.wrapperRef,n=e.showDate,a=e.setShowDate,o=e.selectDate;Object(i.useEffect)((function(){function e(e){n&&t.current&&!t.current.contains(e.target)&&(a(!n),o())}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,n])}({wrapperRef:x,showDate:t,setShowDate:s,selectDate:n}),Object(i.useEffect)((function(){m({startDate:new Date,endDate:new Date,key:"selection"}),v(new Date)}),[g]);return o.a.createElement("div",{ref:x,style:{width:"350px"},className:" mt-5 position-fixed bg-white border border-soft-green rounded z-100 d-flex flex-column justify-content-center ".concat(t?null:"d-none")},o.a.createElement("div",{className:"d-flex justify-content-between w-100 cursor-pointer p-3"},o.a.createElement("div",{className:" border border-soft-green d-flex rounded justify-content-between w-100 cursor-pointer"},o.a.createElement("span",{onClick:function(){return E(!g)},className:" ".concat(w," w-50  ").concat(g?"rounded-left":"rounded"," text-center p-2")},"Single Date"),o.a.createElement("span",{onClick:function(){return E(!g)},className:" ".concat(N," w-50 ").concat(g?"rounded":"rounded-right"," text-center p-2")},"Ranged Date"))),o.a.createElement(r.DateRangePicker,{className:g?null:"d-none",ranges:[u],onChange:function(e){return function(e){var t=e.newdate,n=e.dateRange,a=e.setDateRange,i=Object(c.a)({},n);i.startDate=t.selection.startDate,i.endDate=t.selection.endDate,a(i)}({newdate:e,dateRange:u,setDateRange:m})}}),o.a.createElement(r.Calendar,{className:g?"d-none":null,date:b,onChange:function(e){return v(e)}}),o.a.createElement("div",{className:"d-flex justify-content-between w-100 cursor-pointer p-3"},o.a.createElement("span",{onClick:function(){t&&(n(g?u:b),s())},className:" bg-green text-white w-100 border border-soft-green rounded text-center p-2"},"Confirm")))},d=n(712),u=n.n(d),m=n(713),p=n.n(m);t.a=function(e){var t,n,r=e.moduleEntry,c=e.moduleName,d=e.activeSku,m=e.dispatch,f=Object(i.useState)(),b=Object(a.a)(f,2),v=b[0],y=b[1],h=Object(i.useState)(),g=Object(a.a)(h,2),E=g[0],w=g[1],N=Object(i.useState)(),x=Object(a.a)(N,2),j=x[0],L=x[1],k=Object(i.useState)(),I=Object(a.a)(k,2),O=I[0],S=I[1],P=document.documentElement.clientWidth;return(null===(t=n=Object(s.a)({date:E,datePicker:!0}))||void 0===t?void 0:t.startDate)&&(n="".concat(n.startDate," - ").concat(n.endDate)),Object(i.useEffect)((function(){Object(s.h)({moduleEntry:r,moduleName:c,activeSku:d,dispatch:m,sortBy:v})}),[v,d]),Object(i.useEffect)((function(e){j||Object(s.d)({moduleEntry:r,moduleName:c,activeSku:d,dispatch:m,date:E})}),[E,j,d]),Object(i.useEffect)((function(e){y(),w()}),[O,d]),o.a.createElement("div",{className:"w-25 d-flex justify-content-end"},o.a.createElement("div",{style:{height:40},className:"".concat("repack"===c?"d-none":null," border-soft-green border-top border-bottom border-left m-0 rounded-left green h6 d-flex align-items-center justify-content-center px-2 text-nowrap ").concat(P>500&&E?null:"d-none")},n),o.a.createElement("div",{style:{height:40,minWidth:40},className:"".concat(E?"iconU-modalClose red":"iconU-filterDate emptyTextField"," border-soft-green border ").concat(E?"rounded-right":"rounded"," ").concat("repack"===c?"d-none":null," d-flex align-items-center justify-content-center mr-3 cursor-pointer"),onClick:function(){return E?S((function(e){return!e})):L((function(e){return!e}))}}),o.a.createElement(l,{showDate:j,selectDate:function(e){return w(e)},setShowDate:function(e){return L(e)}}),o.a.createElement("img",{style:{height:40,minWidth:40},src:v?p.a:u.a,onClick:function(){return y(!v)},className:"p-2 border rounded border-soft-green cursor-pointer"}))}},725:function(e,t,n){"use strict";var a=n(659),i=n(1),o=n.n(i);t.a=function(e){var t=e.isEmpty,n=e.uom,s=e.inputWidth,r=e.values,c=e.onChange,l=e.showTitle,d=e.title,u=Object(i.useState)(),m=Object(a.a)(u,2),p=m[0],f=m[1],b="gram"!==n&&"kg"!==n;return o.a.createElement("div",{name:"upload",className:" ".concat(s," mb-3 mr-3 ").concat(b?null:"d-none"),onClick:function(){return p&&r?c():null}},o.a.createElement("div",{className:" pb-1 LatoBold text-nowrap ".concat(l?null:"d-none")},d),o.a.createElement("div",{onMouseLeave:function(){return f()},onMouseEnter:function(){return f(!0)},style:{backgroundImage:"url(".concat(r,")"),backgroundSize:"cover",opacity:.7,width:!!r&&42},id:"input-img",className:"".concat(t?"border-red":"border"," rounded border-soft-green bg-white d-flex w-fit-content px-2 justify-content-center align-items-center input-height d-flex mr-3")},r&&p?o.a.createElement("div",{className:"hand-cursor",style:{margin:0}},o.a.createElement("span",{style:{fontSize:!!r&&25},className:"photo_text hidden-xs ".concat(r?p?"iconU-entryTrash css-2613qy-menu":null:" iconU-entryPhotos")})):o.a.createElement("label",{className:"hand-cursor",style:{margin:0}},o.a.createElement("input",{name:"upload",type:"file","nv-file-select":!0,uploader:"$ctrl.uploader",accept:"image/x-png,image/gif,image/jpeg",onChange:function(e){return c(e)}}),o.a.createElement("span",{className:"fa fa-camera"}),o.a.createElement("span",{style:{fontSize:!!r&&25},className:"photo_text hidden-xs ".concat(r?p?"iconU-entryTrash css-2613qy-menu":null:" iconU-entryPhotos")}))))}},778:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return h}));var a=n(4),i=n(65),o=n.n(i),s=n(71),r=n(664),c=n(91),l=n(22),d=n.n(l),u=n(19),m=n(663),p=n(672),f=n(116),b=n(662),v=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,i,l,f,v,y,h,g,E,w,N,x,j,L,k,I,O,S;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,i=t.checked,l=t.dispatch,f=t.setLocalEntryData,v=t.moduleName,y=t.moduleSummary,h=t.moduleEntry,g=t.warehouseUuid,E=t.areaId,(w=Object(r.a)(y))[a].checked=i,l(Object(s.a)({type:u.c},"".concat(v,"summaryData"),w)),N=null===w||void 0===w?void 0:w.filter((function(e){if(e.checked)return e})),x=[],h&&h.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&x.push(t.skuUuid)})),j=[],L=N.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===(null===e||void 0===e?void 0:e.label)||"Semi Waste"===(null===e||void 0===e?void 0:e.label)})),e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:g,dispatch:l,areaId:E.value,moduleName:v});case 8:(i=e.sent)&&(s=i.map((function(e){e.itemList=[];var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=s,j.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(L);case 11:e.sent,k=[],h&&(k=h.jobPost.list.concat(j)),h||(k=j),(I=w[a]).checked||(k=k.filter((function(e){return e.skuUuid!==I.skuUuid}))),O=null===h||void 0===h||null===(n=h.jobPost)||void 0===n?void 0:n.id,S={jobPost:{id:O||0,warehouseSource:g,warehouseDestination:g,areaSource:parseInt(null===E||void 0===E?void 0:E.value),areaName:null===E||void 0===E?void 0:E.label,areaDestination:parseInt(null===E||void 0===E?void 0:E.value),list:k.sort((function(e,t){return Object(b.g)(e,t)}))}},0===k.length&&l(Object(s.a)({type:u.b},"".concat(v,"EntryData"),null)),f(S);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,i,s,l,u,b,v,y,h,g,E,w,N,x,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,i=t.dispatch,s=t.moduleName,l=t.moduleSummary,u=t.moduleEntry,b=t.warehouseUuid,v=t.areaId,y=t.preAddHandler,(h=Object(r.a)(l))[n].checked=a,g=null===h||void 0===h?void 0:h.filter((function(e){if(e.checked)return e})),E=[],u&&u.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&E.push(t.skuUuid)})),w=[],N=g.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=null===a||void 0===a?void 0:a.filter((function(e){return"Waste"===(null===e||void 0===e?void 0:e.label)||"Semi Waste"===(null===e||void 0===e?void 0:e.label)})),e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:b,dispatch:i,areaId:v.value,moduleName:s});case 8:(r=e.sent)&&(c=r.map((function(e){e.itemList=[];var n=e.expiryDate?d()(e.expiryDate).valueOf():null,a=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=a,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(f.e)(e.initialWeight)?Object(f.e)(e.initialWeight):e.initialWeight,e})),t.poList=c,t.isNewItem=!0,w.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(N);case 10:e.sent,x=[],u&&(x=u.concat(w)),u||(x=w),(j=h[n]).checked||(x=x.filter((function(e){return e.skuUuid!==j.skuUuid}))),y(x);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.setActiveSKU,n=e.moduleEntry,i=e.moduleName,o=e.setConfirmation,r=e.dispatch,c=e.setIsRequired,l=[],d=Object(a.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(e){var t=Object(b.y)({moduleList:e.itemList});return e.itemList.map((function(n){var a=n.qty,i=n.wasteType,o=n.note;return 0!=a&&!isNaN(a)||null!==(null===i||void 0===i?void 0:i.value)?(isNaN(a)||0==a||""===a||null===a?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1,(null===i||void 0===i?void 0:i.value)?n.wasteTypeIsEmpty=!1:n.wasteTypeIsEmpty=!0,n.noteIsEmpty=!o):(n.qtyIsEmpty=!1,n.wasteTypeIsEmpty=!1,n.uploadPhotoIsEmpty=!1,n.noteIsEmpty=!1),n.qtyIsEmpty||(Number(t)>Number(e.initialWeight)?n.qtyIsEmpty=!0:n.qtyIsEmpty=!1),(null===n||void 0===n?void 0:n.qtyIsEmpty)||(null===n||void 0===n?void 0:n.wasteTypeIsEmpty)||(null===n||void 0===n?void 0:n.uploadPhotoIsEmpty)||(null===n||void 0===n?void 0:n.noteIsEmpty)?l.push(!1):l.push(!0),n})),e})),e})),p=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(p=!0)}))}))})),d.jobPost.list=m,r(Object(s.a)({type:u.b},"".concat(i,"EntryData"),d)),!l.includes(!1)&&p?"function"===typeof o&&o({show:!0,name:"submit"}):("function"===typeof o&&o({show:!1,name:null}),"function"===typeof c&&c(!0)),Object(b.b)({setActiveSKU:t,moduleEntry:n,moduleName:i})}}}]);
//# sourceMappingURL=29.c5b1d478.chunk.js.map