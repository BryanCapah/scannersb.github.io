(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[46],{1169:function(e,t,n){},1170:function(e,t,n){},1234:function(e,t,n){"use strict";n.r(t);var i=n(659),a=n(1),o=n.n(a),s=n(19),r=n(56),l=n(71),c=n(168),d=n(21),u=(n(1169),n(662)),m=function(e){e.isNewItem;var t=e.img,n=e.skuDescription,i=e.skuNumber,a=e.activeSku,s=e.uomValue,r=e.idx,l=e.uom,c=e.onClick,d=e.data,m=Object(u.j)({data:d});return o.a.createElement("div",{onClick:function(){return c()},className:"w-100 softGreen d-flex justify-content-between pl-2 pr-3 py-2 mb-3 cursor-pointer rounded ".concat(m?"soft-green":null," ").concat(a===r?"border-green":"border")},o.a.createElement("div",{className:"d-flex align-items-center w-100"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("img",{src:t,alt:"sku",className:"w-5 mr-3 border softGreen rounded"})),o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{className:"mr-3"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},n)),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"text"},i),a,o.a.createElement("div",{className:"green LatoBold"},s," ",o.a.createElement("span",null,"".concat(l?l.toUpperCase():"").concat(s>1?"s":"")))))))},p=function(e){var t=e.hideSKUList,n=e.setActiveSKU,i=e.activeSku,a=e.moduleEntry,s=e.moduleName,u=a.jobPost.list.length,p=Object(r.c)();return o.a.createElement("div",{className:"".concat(t?"w-0":"w-30","  mt-md-0 rounded-bottom rounded-top skuList-m")},o.a.createElement("div",{className:"w-100 bg-white h-screen-title p-3 border-top border-left border-right rounded-top border-soft-green text d-flex align-items-center justify-content-between"},o.a.createElement("div",{className:"LatoBold"}," Selected SKU ",o.a.createElement("span",{className:"font-green"},"(".concat(u," SKU").concat(u>1?"s":"",")"))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},o.a.createElement(c.b,{to:"/inventory-entry/additional-inbound/weight-entry/weight-entry/remove-sku"},o.a.createElement("div",{className:"fontSizeTitle px-3 emptyTextField iconU-remove"})),o.a.createElement(c.b,{to:"/inventory-entry/additional-inbound/weight-entry/weight-entry/add-sku"},o.a.createElement("div",{onClick:function(){return p(Object(l.a)({type:d.a},"".concat(s,"AddSku"),!0))},className:"fontSizeTitle emptyTextField text-bold iconU-entryAdd"})))),o.a.createElement("div",{className:"w-100 bg-white h-screen-content mr-0 border rounded-bottom border-soft-green pl-3 pr-1 pt-3"},null===a||void 0===a?void 0:a.jobPost.list.map((function(e,t){return o.a.createElement(m,{data:e,idx:t,activeSku:i,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:null===e||void 0===e?void 0:e.unitOfMeassures,uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,img:null===e||void 0===e?void 0:e.photo,onClick:function(){return n(t)}})}))))},b=n(116),v=n(687),y=n.n(v),f=n(667),g=n(686),h=n(834),E=function(e){var t=e.entryListIdx,n=e.wmsPoSkuInfoId,i=e.gradeList,a=e.ripeness,s=e.inputWidth,l=e.inboundTypeList,c=e.showTitle,d=e.item,u=e.onChange,m=e.onChangeDropdown,p=e.uom,b=e.poListIdx,v=(Object(r.d)((function(e){return e.ripenessLevel})),"kg"===p||"gram"===p);return o.a.createElement("div",{className:"w-100 we-m"},o.a.createElement("div",{className:"d-flex w-100 we-m"},o.a.createElement(f.a,{isEmpty:d.inboundTypeIsEmpty,ddType:"inboundType",selectedValue:null===d||void 0===d?void 0:d.inboundType,entryListIdx:t,wmsPoSkuInfoId:n,uom:"kg",onChangeDropdown:function(e){return m({selected:e,name:"inboundType"})},title:"Inbound Type",placeholder:"Inboud Type",options:l,width:"drp-w-50",showTitle:c,show:!0}),o.a.createElement(f.a,{isEmpty:d.gradeIsEmpty,selectedValue:null===d||void 0===d?void 0:d.grade,poListIdx:b,entryListIdx:t,wmsPoSkuInfoId:n,uom:p,show:v,onChangeDropdown:function(e){return m({selected:e,name:"grade"})},title:"Order Id",placeholder:"Select Order Id",options:i,width:"drp-w-50",showTitle:c,className:a?"d-none":null}),o.a.createElement(g.a,{isEmpty:d.qtyIsEmpty,entryListIdx:t,wmsPoSkuInfoId:n,uom:p,ripeness:a,inputWidth:s,title:"Input Weight",showTitle:c,onChange:function(e){return u(e)}})),o.a.createElement("div",{className:"d-flex w-50"},o.a.createElement(h.a,{isEmpty:d.reasonIsEmpty,entryListIdx:t,wmsPoSkuInfoId:n,inputWidth:"w-30",values:null===d||void 0===d?void 0:d.reason,showTitle:c,title:"Note",onChange:function(e){return u(e)}})))},j=(n(1170),n(4)),L=function(e){var t,n=e.inputWidth,i=e.activeSku,a=e.poListIdx,s=e.poItem,c=e.moduleEntry,m=e.inboundTypeList,p=e.moduleName,v=e.gradeList,f=Object(r.c)(),g=(s.expiryDate,s.inboundDate),h=s.initialWeight,L=s.inboundQty,I=s.initialWeightUpdate,N=s.initialWeightScreenUpdate,w=(s.poUuid,s.skuUuid,s.supplierId,s.supplierName),x=s.uom,k=s.ripeness,O=s.edited,S=(s.wmsPoSkuCode,s.isHidden),U=(isNaN(I),isNaN(N)?h:N),P="kg"===x||"gram"===x?"Weight":"Quantity";return o.a.createElement("div",{className:"".concat(S?"d-none":null," z-0 d-flex flex-column justify-content-between w-100 mb-3 align-items-center border rounded border-soft-green ").concat(O?"soft-green":null)},o.a.createElement("div",{className:"w-100 border-bottom border-soft-green my-3 d-flex align-items-start px-3"},o.a.createElement("div",{className:"d-flex align-items-center LatoBold pr-3"},"".concat(a+1,".")),o.a.createElement("div",{className:"w-100 d-flex justify-content-between align-items-center LatoBold cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center cardheader-m"},o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-5"},"Inbound Date",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(Object(b.b)(g)))),o.a.createElement("div",{className:"d-flex align-items-center mb-3 mr-3"},"Supplier Name",o.a.createElement("span",{className:"ml-2 font-green"}," ".concat(w)))))),o.a.createElement("div",{className:"d-flex flex-column justify-content-between w-100 align-items-center px-3 z-0"},null===(t=s.itemList)||void 0===t?void 0:t.map((function(e,t){return o.a.createElement("div",{className:"d-flex w-100 align-items-center justify-content-between"},o.a.createElement("div",{className:"w-100 d-flex"},o.a.createElement("div",{style:{width:"10px"},className:"input-height d-flex align-items-center mb-3 mr-3 pt-4 mt-2"},"".concat(t+1,".")),o.a.createElement("div",{className:"w-100"},o.a.createElement(E,{entryListIdx:t,wmsPoSkuInfoId:e.wmsPoSkuInfoId,showTitle:!0,gradeList:v,inboundTypeList:m,onChange:function(e){return function(e){var t,n,i=e.dispatch,a=e.moduleEntry,o=e.moduleName,s=e.activeSku,r=e.poListIdx,c=e.entryListIdx,u=e.e,m=null===u||void 0===u||null===(t=u.target)||void 0===t?void 0:t.name,p=null===u||void 0===u||null===(n=u.target)||void 0===n?void 0:n.value,b=Object(j.a)({},a);if("weight"===m){b.jobPost.list[s].poList[r].itemList[c].qty=parseInt(p);if(console.clear(),!1===/^[0-9\.\x0]+$/.test(p)&&""!==p)return;var v=0,y=0!=p?p.split("."):0,f=y[0];f>0&&(f=parseInt(f));var g=y[1];if(null!==g&&void 0!==g)if(g.length>2){var h=g.slice(0,2);v="".concat(f,".").concat(h)}else v="".concat(f,".").concat(g);else v=parseInt(f);b.jobPost.list[s].poList[r].itemList[c].qty=v,b.jobPost.list[s].poList[r].itemList[c].qtyIsEmpty=!1}else"note"!==m&&(b.jobPost.list[s].poList[r].itemList[c].qty=p>0?parseInt(p):p,b.jobPost.list[s].poList[r].itemList[c].qtyIsEmpty=!0);"note"===m&&(b.jobPost.list[s].poList[r].itemList[c].note=p,b.jobPost.list[s].poList[r].itemList[c].noteIsEmpty=!0);var E=b.jobPost.list[s].poList[r].inboundQty,L=E;b.jobPost.list[s].poList[r].edited=!1,b.jobPost.list[s].poList[r].minus=!1,b.jobPost.list[s].poList[r].itemList.map((function(e){if(e.qty&&(b.jobPost.list[s].poList[r].edited=!0),L-=isNaN(e.qty)?0:e.qty,b.jobPost.list[s].poList[r].initialWeightUpdate=L,L<0){b.jobPost.list[s].poList[r].minus=!1;var t=b.jobPost.list[s].poList[r].itemList[c].qty;"qty"===m&&(b.jobPost.list[s].poList[r].initialWeightUpdate=parseInt(L)+parseInt(t||0)),"weight"===m&&(b.jobPost.list[s].poList[r].initialWeightUpdate=parseFloat(L)+parseFloat(t||0)),b.jobPost.list[s].poList[r].itemList[c].qty="",b.jobPost.list[s].poList[r].initialWeightUpdate<0&&(b.jobPost.list[s].poList[r].initialWeightUpdate=E)}})),i(Object(l.a)({type:d.b},"".concat(o,"EntryData"),b))}({dispatch:f,moduleEntry:c,moduleName:p,activeSku:i,poListIdx:a,entryListIdx:t,e:e})},onChangeDropdown:function(e){var n=e.selected,o=e.name;return function(e){var t=e.dispatch,n=e.moduleEntry,i=e.moduleName,a=e.activeSku,o=e.poListIdx,s=e.entryListIdx,r=e.selected,c=e.name,u=Object(j.a)({},n);"grade"===c&&(u.jobPost.list[a].poList[o].itemList[s].grade=r,u.jobPost.list[a].poList[o].edited=!0,u.jobPost.list[a].poList[o].itemList[s].gradeIsEmpty=!1,u.jobPost.list[a].poList[o].itemList[s].ripeness={label:null,value:null},u.jobPost.list[a].poList[o].itemList[s].ripenessIsEmpty=!1,u.jobPost.list[a].poList[o].itemList[s].note=null,u.jobPost.list[a].poList[o].itemList[s].noteIsEmpty=!1),"ripeness"===c&&(u.jobPost.list[a].poList[o].itemList[s].ripeness=r,u.jobPost.list[a].poList[o].edited=!0,u.jobPost.list[a].poList[o].itemList[s].ripenessIsEmpty=!1,u.jobPost.list[a].poList[o].itemList[s].note=null,u.jobPost.list[a].poList[o].itemList[s].noteIsEmpty=!1),"inboundType"===c&&(u.jobPost.list[a].poList[o].itemList[s].inboundType=r,u.jobPost.list[a].poList[o].edited=!0,u.jobPost.list[a].poList[o].itemList[s].inboundTypeIsEmpty=!1),t(Object(l.a)({type:d.b},"".concat(i,"EntryData"),u))}({dispatch:f,moduleEntry:c,moduleName:p,activeSku:i,poListIdx:a,entryListIdx:t,selected:n,name:o})},uom:x,ripeness:k,inputWidth:n,item:e,className:k?null:"d-none",poListIdx:a}))),o.a.createElement("div",{className:"d-flex w-25 align-items-center justify-content-end input-height mb-0 p-0"},o.a.createElement("img",{src:y.a,alt:"delete icon",className:"w-1 cursor-pointer",onClick:function(e){return Object(u.e)({dispatch:f,moduleEntry:c,moduleName:p,activeSku:i,poListIdx:a,entryListIdx:t,e:e,countQty:u.d})}})))}))),o.a.createElement("div",{className:"w-100 ml-5 pl-4 font-green mb-3 LatoBold cursor-pointer",onClick:function(){return function(e){var t=e.dispatch,n=e.moduleEntry,i=e.moduleName,a=e.activeSku,o=e.poListIdx,s=Object(j.a)({},n),r=s.jobPost.list[a].gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===s.jobPost.list[a].skuUuid})),c=s.jobPost.list[a].poList[o].itemList,u=c[(null===c||void 0===c?void 0:c.length)-1],m=u?u.grade:r[0];s.jobPost.list[a].poList[o].itemList.push({qty:"",grade:m,inboundType:{label:"",value:""},ripeness:null}),t(Object(l.a)({type:d.b},"".concat(i,"EntryData"),s))}({dispatch:f,moduleEntry:c,moduleName:p,activeSku:i,poListIdx:a})}},o.a.createElement("i",{className:"green iconU-entryAdd pr-2"}),"Add ".concat(P," (").concat(Object(b.e)(U)?Object(b.e)(U):U," ").concat(x?x.toUpperCase():"").concat(U>1?"s":""," left)")))},I=n(663),N=n(738),w=n(674),x=n(695),k=n(702),O=n(681),S=n(713),U=function(e){var t,n,s=e.setActiveSKU,c=e.hideSKUList,d=e.setHideSKUList,m=e.activeSku,p=e.moduleEntry,b=e.moduleName,v=Object(r.c)(),y=Object(r.d)((function(e){return e.status})),f=Object(r.d)((function(e){return e.isLoading})),g=p.jobPost.list[m],h=g.skuName,E=g.skuNumber,j=g.poList,U=g.gradeList,P=(g.totalQty,g.unitOfMeassures),D=Object(u.z)({moduleEntry:p,activeSku:m}),W=Object(u.m)({moduleEntry:p}),C=Object(a.useState)({success:!1,name:null}),T=Object(i.a)(C,2),q=T[0],B=T[1],K=Object(a.useState)({show:!1,name:null}),z=Object(i.a)(K,2),A=z[0],Q=z[1],M=Object(a.useState)(!1),R=Object(i.a)(M,2),F=R[0],H=R[1],V=Object(a.useState)(),G=Object(i.a)(V,2),J=G[0],_=G[1],$=Object(a.useState)(),X=Object(i.a)($,2),Y=X[0],Z=X[1],ee=Object(a.useState)(!1),te=Object(i.a)(ee,2),ne=te[0],ie=te[1],ae=Object(a.useState)(["/inventory-entry/additional-inbound/weight-entry","/inventory-entry/additional-inbound/weight-entry/remove-sku","/inventory-entry/additional-inbound/weight-entry/add-sku"]),oe=Object(i.a)(ae,2);oe[0],oe[1];Object(a.useEffect)((function(){500===q.status?(_(!1),Q({show:!1,name:A.name})):200===q.status&&(Q({show:!1,name:A.name}),_(!0))}),[q]),Object(a.useEffect)((function(){J||B({success:!1,name:null})}),[J]);var se=!(!q.success||!q.status);return o.a.createElement("div",{className:"w-100 entryList-m entryList-mobile pl-3"},o.a.createElement(O.a,{discard:F,module:"Inventory Entry - Stock Take",moduleEntry:p,close:function(){return H(!1)},discardEntry:function(e){return Object(I.m)({id:e,moduleName:b,dispatch:v})}}),o.a.createElement(x.a,{status:y,moduleEntry:p,submit:function(){var e;return v((e={type:"CREATE_JOB_SHEET"},Object(l.a)(e,"".concat(b,"EntryData"),null),Object(l.a)(e,"".concat(b,"SummaryData"),null),e))},confirmation:A,setConfirmation:Q,isSaved:J,action:Y,setIsSaved:_,moduleName:b,totalSku:null===p||void 0===p||null===(t=p.jobPost)||void 0===t?void 0:t.list.length}),o.a.createElement(k.a,{isRequired:ne,module:p,setIsRequired:ie,moduleName:b,totalSku:null===p||void 0===p||null===(n=p.jobPost)||void 0===n?void 0:n.list.length}),o.a.createElement(w.b,{isLoading:f,moduleEntry:p,confirmation:A,setConfirmation:Q,isSuccess:se,setAction:Z,action:Y,save:function(){return Object(I.o)({name:"save",moduleEntry:p,moduleName:b,dispatch:v,setIsSuccess:B})},submit:function(){return Object(I.o)({name:"submit",moduleEntry:p,moduleName:b,dispatch:v,setIsSuccess:B})}}),o.a.createElement("div",{className:"mb-3 bg-white rounded-bottom rounded-top"},o.a.createElement("div",{className:"w-100 h-screen-title mr-0 d-flex align-items-center border-top border-left border-right border-bottom rounded-top border-soft-green p-3"},o.a.createElement("div",{className:"d-flex w-75"},o.a.createElement("div",{className:"".concat(c?"iconU-sideBarHideRight":"iconU-sideBarHideLeft"," emptyTextField fontSizeTitle mr-3"),onClick:function(){return d(!c)}}),o.a.createElement("div",{className:"mr-3 pr-1 d-flex align-items-center m-0 p-0 LatoBold"},"Weight Entry"),o.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center"}),o.a.createElement("div",{className:"mr-3 d-flex align-items-center font-green LatoBold"},"".concat(h," (").concat(E,")"))),o.a.createElement(S.a,{moduleEntry:p,moduleName:b,activeSku:m,dispatch:v})),o.a.createElement("div",{className:"w-100 h-screen-content-right mr-0 border-left border-right border-soft-green pl-3 pr-1 pt-3"},null===j||void 0===j?void 0:j.map((function(e,t){return o.a.createElement(L,{gradeList:U,inputWidth:"input-w-100",activeSku:m,poListIdx:t,poItem:e,moduleEntry:p,moduleName:b})}))),o.a.createElement("div",{className:"w-100 d-flex align-items-center p-3 border-left border-right border-bottom rounded-bottom LatoBold"},o.a.createElement("button",{type:"button",className:"btn ".concat(W?"bg-green":"bg-lineGrey","  text-white px-5 mr-3 LatoBold"),onClick:function(){return W?Q({show:!0,name:"save"}):null}},"Save"),o.a.createElement("div",null,"Total Weight ",o.a.createElement("span",{className:"font-green"},"".concat(D," ").concat(null===P||void 0===P?void 0:P.toUpperCase()).concat(D>1?"s":""))))),o.a.createElement("div",{className:"d-flex align-items-center justify-content-end"},o.a.createElement("div",{onClick:function(){return H(!0)},className:"red pr-3 fontSizeButton cursor-pointer"},o.a.createElement("i",{className:"iconU-entryTrash"})," Discard"),o.a.createElement("button",{onClick:function(){return W?Object(N.c)({setActiveSKU:s,moduleEntry:p,moduleName:b,dispatch:v,setConfirmation:Q,setIsRequired:ie}):null},className:"btn px-5 py-2 text-white ".concat(W?"bg-green":"bg-lineGrey"," LatoBold no-shadow"),style:{height:"fit-content !important"}},"Submit")))};t.default=function(){var e=Object(r.d)((function(e){return e.inboundEntryData})),t=Object(a.useState)(!1),n=Object(i.a)(t,2),l=n[0],c=n[1],d=Object(a.useState)(0),u=Object(i.a)(d,2),m=u[0],b=u[1];return e&&0!==(null===e||void 0===e?void 0:e.jobPost.list.length)?o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{className:"w-100 d-md-flex justify-content-between scroll-y z-0"},o.a.createElement(p,{hideSKUList:l,activeSku:m,setActiveSKU:b,moduleName:"inbound",moduleEntry:e}),o.a.createElement(U,{setHideSKUList:c,hideSKUList:l,moduleName:"inbound",moduleEntry:e,activeSku:m}))):o.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center w-100 h-screen"},o.a.createElement(s.a,{to:"/inventory-entry/additional-inbound"},"Please Select At Least 1 SKU"))}},667:function(e,t,n){"use strict";var i=n(665),a=n(4),o=n(659),s=n(1),r=n.n(s),l=n(685);t.a=function(e){var t,n,c,d=e.isEmpty,u=e.title,m=e.placeholder,p=e.options,b=e.selectedValue,v=e.showTitle,y=e.width,f=e.className,g=e.entryListIdx,h=e.onChangeDropdown,E=e.show,j=e.poListIdx,L=e.isDisabled,I=e.style,N=e.noMarginBottom,w=e.resetName,x=e.isMulti,k=e.hideResetOpt,O=Object(s.useState)(),S=Object(o.a)(O,2),U=S[0],P=S[1];Object(s.useEffect)((function(){"empty"===b&&P(!0)}),[b,d]);var D=!!d&&function(e,t){t.isOpen;return Object(a.a)(Object(a.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},W=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(j)),C=null===W||void 0===W?void 0:W.getBoundingClientRect();Object(s.useEffect)((function(){C=null===W||void 0===W?void 0:W.getBoundingClientRect()}),[U]);var T=document.documentElement.clientWidth,q=[{label:"-".concat(w||u,"-"),value:null}];p&&(q=[].concat(Object(i.a)(q),Object(i.a)(p))),k&&(q=q.filter((function(e){return null===e||void 0===e?void 0:e.value})));var B=(null===(n=C)||void 0===n?void 0:n.bottom)>600?"top":"bottom";return T<=500&&(B=(null===(c=C)||void 0===c?void 0:c.bottom)>400?"top":"bottom"),r.a.createElement("div",{style:I,className:"mr-0 ".concat(I?null:"mr-lg-3"," ").concat(N?null:"mb-3"," ").concat(y," ").concat(f," ").concat(E?null:"d-none")},r.a.createElement("div",{className:" pb-1 LatoBold ".concat(v?null:"d-none")},u),r.a.createElement(l.a,{isMulti:x,isSearchable:!(T<500),isDisabled:L||!1,id:"dropdown".concat(g).concat(j),value:((null===b||void 0===b?void 0:b.value)||!!(null===b||void 0===b?void 0:b.length))&&b,menuIsOpen:U,menuPortal:!0,placeholder:w||m,options:q,onMenuOpen:function(){return P(!0)},onMenuClose:function(){return P(!1)},onChange:function(e){h(e),P(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(B),styles:{menuPortal:function(e){return Object(a.a)(Object(a.a)({},e),{},{zIndex:9999})},control:D,option:function(e,t){var n=t.isFocused,i=t.isSelected;t.isOpen;return Object(a.a)(Object(a.a)({},e),{},{backgroundColor:i?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:i?"black":"#a8b1be",cursor:"pointer",fontWeight:i?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:i?null:"#4abe84"}})}},theme:function(e){return Object(a.a)(Object(a.a)({},e),{},{borderRadius:4})}}))}},738:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return g}));var i=n(4),a=n(65),o=n.n(a),s=n(71),r=n(665),l=n(91),c=n(22),d=n.n(c),u=n(21),m=n(663),p=n(669),b=n(116),v=n(662),y=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,i,a,c,y,f,g,h,E,j,L,I,N,w,x,k,O,S,U,P,D;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.idx,c=t.checked,y=t.dispatch,f=t.setLocalEntryData,g=t.moduleName,h=t.moduleSummary,E=t.moduleEntry,j=t.warehouseUuid,L=t.areaId,I=t.zeroQuantity,(N=Object(r.a)(h))[a].checked=c,y((n={type:u.c},Object(s.a)(n,"".concat(g,"summaryData"),N),Object(s.a)(n,"finish",!1),n)),w=null===N||void 0===N?void 0:N.filter((function(e){if(e.checked)return e})),x=[],E&&E.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&x.push(t.skuUuid)})),k=[],O=w.map(function(){var e=Object(l.a)(o.a.mark((function e(t,n){var i,a,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return i=e.sent,t.gradeList=i,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:j,dispatch:y,areaId:L.value,moduleName:g,zeroQuantity:I});case 8:(a=e.sent)&&(s=t.gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===t.skuUuid})),r=a.map((function(e){e.itemList=[{qty:e.initialWeight,grade:s[0],expiryDate:null===e||void 0===e?void 0:e.expiryDate,expiryDateText:Object(b.a)({date:null===e||void 0===e?void 0:e.expiryDate})}],e.initialWeightUpdate=e.inboundQty-e.initialWeight,e.initialWeightScreenUpdate=parseInt(0);var n=e.expiryDate?d()(e.expiryDate).valueOf():null,i=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=i,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Number.isInteger(e.initialWeight)?parseInt(e.initialWeight):parseFloat(e.initialWeight),e})),t.poList=r,k.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(O);case 11:e.sent,y({type:u.g,finish:!0}),S=[],E&&(S=E.jobPost.list.concat(k)),E||(S=k),(U=N[a]).checked||(S=S.filter((function(e){return e.skuUuid!==U.skuUuid}))),P=null===E||void 0===E||null===(i=E.jobPost)||void 0===i?void 0:i.id,D={jobPost:{id:P||0,warehouseSource:j,warehouseDestination:j,areaSource:parseInt(null===L||void 0===L?void 0:L.value),areaName:null===L||void 0===L?void 0:L.label,areaDestination:parseInt(null===L||void 0===L?void 0:L.value),list:S.sort((function(e,t){return Object(v.f)(e,t)}))}},0===S.length&&y(Object(s.a)({type:u.b},"".concat(g,"EntryData"),null)),f(D);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,i,a,s,c,u,v,y,f,g,h,E,j,L,I,N,w;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.zeroQuantity,i=t.idx,a=t.checked,s=t.dispatch,c=t.moduleName,u=t.moduleSummary,v=t.moduleEntry,y=t.warehouseUuid,f=t.areaId,g=t.preAddHandler,(h=Object(r.a)(u))[i].checked=a,E=null===h||void 0===h?void 0:h.filter((function(e){if(e.checked)return e})),j=[],v&&v.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&j.push(t.skuUuid)})),L=[],I=E.map(function(){var e=Object(l.a)(o.a.mark((function e(t,i){var a,r,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(p.a)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(m.f)({skuId:t.skuUuid,warehouseUuid:y,dispatch:s,areaId:f.value,moduleName:c,zeroQuantity:n});case 8:(r=e.sent)&&(l=t.gradeList.filter((function(e){return(null===e||void 0===e?void 0:e.value)===t.skuUuid})),u=r.map((function(e){e.itemList=[{qty:e.initialWeight,grade:l[0],expiryDate:null===e||void 0===e?void 0:e.expiryDate,expiryDateText:Object(b.a)({date:null===e||void 0===e?void 0:e.expiryDate})}],e.initialWeightScreenUpdate=parseInt(0),e.initialWeightUpdate=e.inboundQty-e.initialWeight;var n=e.expiryDate?d()(e.expiryDate).valueOf():null,i=e.inboundDate?d()(e.inboundDate).valueOf():null;return e.expiryDate=n,e.inboundDate=i,e.skuUuid=t.skuUuid,e.uom=t.unitOfMeassures,e.category=t.category,e.initialWeight=Object(b.e)(e.initialWeight)?Object(b.e)(e.initialWeight):e.initialWeight,e})),t.poList=u,t.isNewItem=!0,L.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=10,Promise.all(I);case 10:e.sent,N=[],v&&(N=v.concat(L)),v||(N=L),(w=h[i]).checked||(N=N.filter((function(e){return e.skuUuid!==w.skuUuid}))),g(N);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.setActiveSKU,n=e.moduleEntry,a=e.moduleName,o=e.setConfirmation,r=e.dispatch,l=e.setIsRequired,c=[],d=Object(i.a)({},n),m=n.jobPost.list.map((function(e){return e.poList.map((function(e){return e.itemList.map((function(t){var n,i,a=t.qty,o=t.grade,s=t.ripeness,r=t.note;"Fruits"===e.category?0!=a&&!isNaN(a)||null!==(null===o||void 0===o?void 0:o.value)?"Waste"===(null===t||void 0===t||null===(n=t.grade)||void 0===n?void 0:n.label)||"Semi Waste"===(null===t||void 0===t||null===(i=t.grade)||void 0===i?void 0:i.label)?(isNaN(a)||""===a||null===a?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,"Waste"!==(null===o||void 0===o?void 0:o.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(isNaN(a)||""===a||null===a?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,(null===s||void 0===s?void 0:s.value)?t.ripenessIsEmpty=!1:t.ripenessIsEmpty=!0,"Waste"!==(null===o||void 0===o?void 0:o.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(t.qtyIsEmpty=!1,t.gradeIsEmpty=!1,t.ripenessIsEmpty=!1,t.noteIsEmpty=!1):0!=a&&!isNaN(a)||null!==(null===o||void 0===o?void 0:o.value)?(isNaN(a)||""===a||null===a?t.qtyIsEmpty=!0:t.qtyIsEmpty=!1,(null===o||void 0===o?void 0:o.value)?t.gradeIsEmpty=!1:t.gradeIsEmpty=!0,"Waste"!==(null===o||void 0===o?void 0:o.label)||r?t.noteIsEmpty=!1:t.noteIsEmpty=!0):(t.qtyIsEmpty=!1,t.gradeIsEmpty=!1,t.ripenessIsEmpty=!1,t.noteIsEmpty=!1);return(null===t||void 0===t?void 0:t.qtyIsEmpty)||(null===t||void 0===t?void 0:t.gradeIsEmpty)||(null===t||void 0===t?void 0:t.ripenessIsEmpty)||(null===t||void 0===t?void 0:t.noteIsEmpty)||(null===t||void 0===t?void 0:t.qtyToCompareIsEmpty)?c.push(!1):c.push(!0),t})),e})),e})),p=!1;m.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){(null===e||void 0===e?void 0:e.qty)>=0&&(p=!0)}))}))})),d.jobPost.list=m,r(Object(s.a)({type:u.b},"".concat(a,"EntryData"),d)),!c.includes(!1)&&p?o({show:!0,name:"submit"}):(o({show:!1,name:null}),l(!0)),Object(v.b)({setActiveSKU:t,moduleEntry:n,moduleName:a})}},834:function(e,t,n){"use strict";var i=n(1),a=n.n(i);t.a=function(e){var t=e.placeholder,n=e.inputWidth,i=e.values,o=e.showTitle,s=e.title,r=e.isEmpty,l=e.onChange;return a.a.createElement("div",{className:" ".concat(n," mb-3 mr-3")},a.a.createElement("div",{className:" pb-1 LatoBold ".concat(o?null:"d-none")},s),a.a.createElement("div",{className:"".concat(r?"border-red":"border"," rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},a.a.createElement("input",{autoComplete:"off",type:"text",className:"w-100 plain-input",value:i,name:"reason",placeholder:t,onChange:function(e){return l(e)}})))}}}]);
//# sourceMappingURL=46.5b281eec.chunk.js.map