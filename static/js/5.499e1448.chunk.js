(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[5],{665:function(e,t,a){},669:function(e,t,a){},685:function(e,t,a){"use strict";var s=a(1),n=a.n(s),c=a(661);a(669);t.a=function(e){var t=e.discard,a=e.moduleEntry,s=e.close,u=e.discardEntry,r=e.module;document.documentElement.clientHeight;return n.a.createElement(c.B,{className:t?null:"d-none"},n.a.createElement(c.f,null,n.a.createElement(c.s,{show:t,size:"lg",closeOnBackdrop:!1},n.a.createElement("div",{className:"d-flex flex-row-reverse pr-3 pt-3 mt-1"},n.a.createElement("i",{onClick:function(){return s()},className:"iconU-modalClose"})),n.a.createElement(c.v,{className:"px-5 pb-4 mb-2 pt-4 mt-2 border-none"},n.a.createElement(c.w,{className:"red LatoBold"},"Discard? ",n.a.createElement("span",null,n.a.createElement("i",{className:"em em-astonished"})))),n.a.createElement(c.t,{className:"px-5 pb-5 mb-4 py-0"},n.a.createElement("p",{className:"text mb-3 h5 respon-txt"},"Are you sure you want to discard ",n.a.createElement("span",{className:"green"}," ".concat(null===a||void 0===a?void 0:a.jobPost.list.length," selected SKU ").concat((null===a||void 0===a?void 0:a.jobPost.list.length)>1?"(s)":"")),"from this",n.a.createElement("div",{className:"green h5 pt-2 respon-txt"},r)),n.a.createElement("br",null),n.a.createElement(c.d,{onClick:function(){return u(null===a||void 0===a?void 0:a.jobPost.id)},className:"bg-background text no-shadow pl-5 pr-5 mr-3 LatoBlack"},"Discard"),n.a.createElement(c.d,{onClick:function(){return s()},className:"bg-green no-shadow pl-4 pr-4 LatoBlack"},"Don't Discard")," "))))}},700:function(e,t,a){"use strict";a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return O})),a.d(t,"k",(function(){return m})),a.d(t,"l",(function(){return f})),a.d(t,"i",(function(){return h})),a.d(t,"j",(function(){return S})),a.d(t,"m",(function(){return v})),a.d(t,"p",(function(){return y})),a.d(t,"q",(function(){return p})),a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return g})),a.d(t,"e",(function(){return w})),a.d(t,"f",(function(){return E})),a.d(t,"h",(function(){return L})),a.d(t,"g",(function(){return N})),a.d(t,"o",(function(){return I})),a.d(t,"n",(function(){return A}));var s=a(65),n=a.n(s),c=a(91),u=a(659),r=a(1),o=a(56),i=a(662),d=a(670),b=a(21),l=a(663),j=function(e,t){var a=document.documentElement.clientHeight,s=document.documentElement.clientWidth;return{dimention:a,height:a-e,emptyItem:a-e,width:s,isMobile:s<=500}},O=function(e){var t=document.documentElement.clientWidth,a=document.documentElement.clientHeight,s=a-(e?580:290);return{height:a=t<=500?e?s+100:s:a,heightAdj:s,dimention:t}},m=function(e){var t=e.dispatch,a=Object(o.d)((function(e){return e.zeroQuantity})),s=Object(o.d)((function(e){return e.thereAreRequest})),b=Object(o.d)((function(e){return e.stockTakeFirstLoad})),l=Object(o.d)((function(e){return e.user.warehouseUuid})),j=Object(o.d)((function(e){return e.status})),O=Object(o.d)((function(e){return e.isLoading})),m=Object(o.d)((function(e){return e.stockTakeEntryData})),f=Object(r.useState)(null),h=Object(u.a)(f,2),S=h[0],v=h[1],y=Object(r.useState)(),p=Object(u.a)(y,2),k=p[0],g=p[1],w=Object(r.useState)(),E=Object(u.a)(w,2),L=E[0],N=E[1],I=Object(r.useState)(),A=Object(u.a)(I,2),D=A[0],x=A[1],C=Object(r.useState)({label:"Storage Ambient",value:1}),M=Object(u.a)(C,2),R=M[0],P=M[1],q=Object(r.useState)(),T=Object(u.a)(q,2),U=T[0],Q=T[1];return Object(r.useEffect)((function(){function e(){return(e=Object(c.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)({dispatch:t});case 2:return a=e.sent,e.next=5,Object(d.e)({dispatch:t,warehouseUuid:l});case 5:return s=e.sent,x(s),e.next=9,Object(i.g)({dispatch:t,moduleName:"stockTake",isExist:!!m,ripeness:a});case 9:e.sent;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){g(),v()}),[R]),{moduleName:"stockTake",thereAreRequest:s,moduleFirstLoad:b,warehouseUuid:l,status:j,isLoading:O,stockTakeEntryData:m,summary:S,setSummary:v,localEntryData:k,setLocalEntryData:g,search:L,setSearch:N,area:D,setArea:x,areaId:R,setAreaId:P,discard:U,setDiscard:Q,zeroQuantity:a}},f=function(e){var t=e.moduleEntry,a=e.activeSku,s=Object(r.useState)({success:!1,name:null}),n=Object(u.a)(s,2),c=n[0],i=n[1],d=Object(r.useState)({show:!1,name:null}),b=Object(u.a)(d,2),j=b[0],O=b[1],m=Object(r.useState)(!1),f=Object(u.a)(m,2),h=f[0],S=f[1],v=Object(r.useState)(),y=Object(u.a)(v,2),p=y[0],k=y[1],g=Object(r.useState)(),w=Object(u.a)(g,2),E=w[0],L=w[1],N=Object(r.useState)(!1),I=Object(u.a)(N,2),A=I[0],D=I[1],x=Object(r.useState)(!1),C=Object(u.a)(x,2),M=C[0],R=C[1],P=Object(r.useState)(["/inventory-entry/stock-take/weight-entry","/inventory-entry/stock-take/weight-entry/remove-sku","/inventory-entry/stock-take/weight-entry/add-sku"]),q=Object(u.a)(P,2),T=q[0],U=q[1],Q=Object(o.d)((function(e){return e.isLoading})),B=t.jobPost.list[a],F=B.skuName,H=B.skuNumber,W=B.poList,z=B.gradeList,V=B.totalQty,J=B.unitOfMeassures,K=Object(l.s)({moduleEntry:t,activeSku:a}),G=Object(l.g)({moduleEntry:t}),X=!(!c.success||!c.status);return Object(r.useEffect)((function(){500===c.status?(k(!1),O({show:!1,name:j.name})):200===c.status&&(O({show:!1,name:j.name}),k(!0))}),[c]),Object(r.useEffect)((function(){p||i({success:!1,name:null})}),[p]),{isSuccess:c,setIsSuccess:i,confirmation:j,setConfirmation:O,discard:h,setDiscard:S,isSaved:p,setIsSaved:k,action:E,setAction:L,isRequired:A,setIsRequired:D,hideContent:M,setHideContent:R,allowPage:T,setAllowPage:U,isLoading:Q,skuName:F,skuNumber:H,poList:W,gradeList:z,totalQty:V,unitOfMeassures:J,totalWeight:K,edited:G,postInfo:X}},h=function(e){var t,a,s=e.dispatch,b=Object(o.d)((function(e){return e.thereAreRequest})),j=Object(o.d)((function(e){return e.stockMovementFirstLoad})),O=Object(o.d)((function(e){return e.user.warehouseUuid})),m=Object(o.d)((function(e){return e.stockMovementDropdown})),f=Object(o.d)((function(e){return e.areaId})),h=Object(o.d)((function(e){return e.areaIdDesposition})),S=Object(o.d)((function(e){return e.areaMovement})),v=Object(o.d)((function(e){return e.status})),y=Object(o.d)((function(e){return e.isLoading})),p=Object(o.d)((function(e){return e.stockMovementEntryData})),k=Object(r.useState)(null),g=Object(u.a)(k,2),w=g[0],E=g[1],L=Object(r.useState)(),N=Object(u.a)(L,2),I=N[0],A=N[1],D=Object(r.useState)(0),x=Object(u.a)(D,2),C=x[0],M=x[1],R=Object(r.useState)(),P=Object(u.a)(R,2),q=P[0],T=P[1],U=Object(r.useState)(),Q=Object(u.a)(U,2),B=Q[0],F=Q[1],H=Object(r.useState)(),W=Object(u.a)(H,2),z=W[0],V=W[1],J=Object(r.useState)(),K=Object(u.a)(J,2),G=K[0],X=K[1],Y=Object(l.l)({moduleEntry:I,moduleName:"stockMovement"}),Z=C!==Y&&Y>0,$=!!(I&&(null===I||void 0===I||null===(t=I.jobPost)||void 0===t||null===(a=t.list)||void 0===a?void 0:a.length)>0),_=Object(o.d)((function(e){return e.stockMovementTargetRepack}));return Object(r.useEffect)((function(){function e(){return(e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)({dispatch:s});case 2:return t=e.sent,e.next=5,Object(d.e)({dispatch:s,warehouseUuid:O});case 5:return a=e.sent,F(a),e.next=9,Object(i.g)({dispatch:s,moduleName:"stockMovement",isExist:!!p,ripeness:t});case 9:e.sent,M(Y);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(e){V(!(!f||!h||f===h))}),[f,h,Z]),Object(r.useEffect)((function(){A(),E()}),[f,h]),{moduleName:"stockMovement",thereAreRequest:b,moduleFirstLoad:j,warehouseUuid:O,stockMovementDropdown:m,areaId:f,areaIdDesposition:h,areaMovement:S,status:v,isLoading:y,stockMovementEntryData:p,summary:w,setSummary:E,localEntryData:I,setLocalEntryData:A,isCheckedBefore:C,setIsCheckedBefore:M,search:q,setSearch:T,area:B,setArea:F,areaMatched:z,setAreaMatched:V,discard:G,setDiscard:X,isCheckedTotal:Y,added:Z,entryIsReady:$,stockMovementTargetRepack:_}},S=function(e){var t=e.moduleEntry,a=e.activeSku,s=Object(o.d)((function(e){return e.isLoading})),n=Object(o.d)((function(e){return e.areaMovement})),c=t.jobPost.list[a],i=c.skuName,d=c.skuNumber,b=c.poList,j=c.gradeList,O=c.totalQty,m=c.unitOfMeassures,f=Object(l.s)({moduleEntry:t,activeSku:a}),h=Object(l.g)({moduleEntry:t}),S=Object(r.useState)({success:!1,name:null}),v=Object(u.a)(S,2),y=v[0],p=v[1],k=Object(r.useState)({show:!1,name:null}),g=Object(u.a)(k,2),w=g[0],E=g[1],L=Object(r.useState)(!1),N=Object(u.a)(L,2),I=N[0],A=N[1],D=Object(r.useState)(),x=Object(u.a)(D,2),C=x[0],M=x[1],R=Object(r.useState)(),P=Object(u.a)(R,2),q=P[0],T=P[1],U=Object(r.useState)(!1),Q=Object(u.a)(U,2),B=Q[0],F=Q[1],H=Object(r.useState)(!1),W=Object(u.a)(H,2),z=W[0],V=W[1],J=Object(r.useState)(["/inventory-entry/movement/weight-entry","/inventory-entry/movement/weight-entry/remove-sku","/inventory-entry/movement/weight-entry/add-sku"]),K=Object(u.a)(J,2),G=K[0],X=K[1];Object(r.useEffect)((function(){500===y.status?(M(!1),E({show:!1,name:w.name})):200===y.status&&(E({show:!1,name:w.name}),M(!0))}),[y]),Object(r.useEffect)((function(){C||p({success:!1,name:null})}),[C]);var Y=!(!y.success||!y.status);return{isSuccess:y,setIsSuccess:p,confirmation:w,setConfirmation:E,discard:I,setDiscard:A,isSaved:C,setIsSaved:M,action:q,setAction:T,isRequired:B,setIsRequired:F,hideContent:z,setHideContent:V,allowPage:G,setAllowPage:X,isLoading:s,skuName:i,skuNumber:d,poList:b,gradeList:j,totalQty:O,unitOfMeassures:m,totalWeight:f,edited:h,postInfo:Y,areaMovement:n}},v=function(e){var t=e.moduleEntry,a=e.activeSku,s=Object(o.d)((function(e){return e.isLoading})),n=Object(o.d)((function(e){return e.areaMovement})),c=t.jobPost.list[a],i=c.skuName,d=c.skuNumber,b=c.poList,j=c.gradeList,O=c.totalQty,m=c.unitOfMeassures,f=Object(l.s)({moduleEntry:t,activeSku:a}),h=Object(l.g)({moduleEntry:t}),S=Object(r.useState)({success:!1,name:null}),v=Object(u.a)(S,2),y=v[0],p=v[1],k=Object(r.useState)({show:!1,name:null}),g=Object(u.a)(k,2),w=g[0],E=g[1],L=Object(r.useState)(!1),N=Object(u.a)(L,2),I=N[0],A=N[1],D=Object(r.useState)(),x=Object(u.a)(D,2),C=x[0],M=x[1],R=Object(r.useState)(),P=Object(u.a)(R,2),q=P[0],T=P[1],U=Object(r.useState)(!1),Q=Object(u.a)(U,2),B=Q[0],F=Q[1],H=Object(r.useState)(!1),W=Object(u.a)(H,2),z=W[0],V=W[1],J=Object(r.useState)(["/inventory-entry/stock-transfer/weight-entry","/inventory-entry/stock-transfer/weight-entry/remove-sku","/inventory-entry/stock-transfer/weight-entry/add-sku"]),K=Object(u.a)(J,2),G=K[0],X=K[1];Object(r.useEffect)((function(){500===y.status?(M(!1),E({show:!1,name:w.name})):200===y.status&&(E({show:!1,name:w.name}),M(!0))}),[y]),Object(r.useEffect)((function(){C||p({success:!1,name:null})}),[C]);var Y=!(!y.success||!y.status);return{isSuccess:y,setIsSuccess:p,confirmation:w,setConfirmation:E,discard:I,setDiscard:A,isSaved:C,setIsSaved:M,action:q,setAction:T,isRequired:B,setIsRequired:F,hideContent:z,setHideContent:V,allowPage:G,setAllowPage:X,isLoading:s,skuName:i,skuNumber:d,poList:b,gradeList:j,totalQty:O,unitOfMeassures:m,totalWeight:f,edited:h,postInfo:Y,areaMovement:n}},y=function(e){var t=e.dispatch,a=Object(o.d)((function(e){return e.thereAreRequest})),s=Object(o.d)((function(e){return e.wasteFirstLoad})),b=Object(o.d)((function(e){return e.user.warehouseUuid})),j=Object(o.d)((function(e){return e.status})),O=Object(o.d)((function(e){return e.isLoading})),m=Object(o.d)((function(e){return e.wasteEntryData})),f=Object(r.useState)(),h=Object(u.a)(f,2),S=h[0],v=h[1],y=Object(r.useState)(null),p=Object(u.a)(y,2),k=p[0],g=p[1],w=Object(r.useState)(),E=Object(u.a)(w,2),L=E[0],N=E[1],I=Object(r.useState)(0),A=Object(u.a)(I,2),D=A[0],x=A[1],C=Object(r.useState)(),M=Object(u.a)(C,2),R=M[0],P=M[1],q=Object(r.useState)(),T=Object(u.a)(q,2),U=T[0],Q=T[1],B=Object(l.l)({moduleEntry:L,moduleName:"waste"});return Object(r.useEffect)((function(){function e(){return(e=Object(c.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)({dispatch:t});case 2:return a=e.sent,e.next=5,Object(d.e)({dispatch:t,warehouseUuid:b});case 5:return e.sent,e.next=8,Object(i.j)({warehouseUuid:b,setAreaId:v});case 8:return e.sent,e.next=11,Object(i.g)({dispatch:t,moduleName:"waste",isExist:!!m,ripeness:a});case 11:e.sent,x(B);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),{moduleName:"waste",thereAreRequest:a,moduleFirstLoad:s,warehouseUuid:b,status:j,isLoading:O,wasteEntryData:m,areaId:S,setAreaId:v,summary:k,setSummary:g,localEntryData:L,setLocalEntryData:N,isCheckedBefore:D,setIsCheckedBefore:x,search:R,setSearch:P,discard:U,setDiscard:Q,isCheckedTotal:B}},p=function(e){var t=e.moduleEntry,a=e.activeSku,s=Object(o.d)((function(e){return e.isLoading})),n=Object(r.useState)({success:!1,name:null}),c=Object(u.a)(n,2),i=c[0],d=c[1],b=Object(r.useState)({show:!1,name:null}),j=Object(u.a)(b,2),O=j[0],m=j[1],f=Object(r.useState)(!1),h=Object(u.a)(f,2),S=h[0],v=h[1],y=Object(r.useState)(),p=Object(u.a)(y,2),k=p[0],g=p[1],w=Object(r.useState)(),E=Object(u.a)(w,2),L=E[0],N=E[1],I=Object(r.useState)(!1),A=Object(u.a)(I,2),D=A[0],x=A[1],C=Object(r.useState)(!1),M=Object(u.a)(C,2),R=M[0],P=M[1],q=Object(r.useState)(["/inventory-entry/waste/weight-entry","/inventory-entry/waste/weight-entry/remove-sku","/inventory-entry/waste/weight-entry/add-sku"]),T=Object(u.a)(q,2),U=T[0],Q=T[1],B=t.jobPost.list[a],F=B.skuName,H=B.skuNumber,W=B.poList,z=B.gradeList,V=B.totalQty,J=B.unitOfMeassures,K=Object(l.s)({moduleEntry:t,activeSku:a}),G=Object(l.g)({moduleEntry:t}),X=!(!i.success||!i.status);return Object(r.useEffect)((function(){500===i.status?(g(!1),m({show:!1,name:O.name})):200===i.status&&(m({show:!1,name:O.name}),g(!0))}),[i]),Object(r.useEffect)((function(){k||d({success:!1,name:null})}),[k]),{isSuccess:i,setIsSuccess:d,confirmation:O,setConfirmation:m,discard:S,setDiscard:v,isSaved:k,setIsSaved:g,action:L,setAction:N,isRequired:D,setIsRequired:x,hideContent:R,setHideContent:P,allowPage:U,setAllowPage:Q,isLoading:s,skuName:F,skuNumber:H,poList:W,gradeList:z,totalQty:V,unitOfMeassures:J,totalWeight:K,edited:G,postInfo:X}},k=function(e){var t=e.dispatch,a=Object(o.d)((function(e){return e.thereAreRequest})),s=Object(o.d)((function(e){return e.outboundFirstLoad})),b=Object(o.d)((function(e){return e.user.warehouseUuid})),j=Object(o.d)((function(e){return e.status})),O=Object(o.d)((function(e){return e.isLoading})),m=Object(o.d)((function(e){return e.outboundEntryData})),f=Object(o.d)((function(e){return e.warehouseArea})),h=Object(o.d)((function(e){return e.outboundAddSku})),S=Object(r.useState)(null),v=Object(u.a)(S,2),y=v[0],p=v[1],k=Object(r.useState)(),g=Object(u.a)(k,2),w=g[0],E=g[1],L=Object(r.useState)(0),N=Object(u.a)(L,2),I=N[0],A=N[1],D=Object(r.useState)(!1),x=Object(u.a)(D,2),C=x[0],M=x[1],R=Object(r.useState)(),P=Object(u.a)(R,2),q=P[0],T=P[1],U=Object(r.useState)(),Q=Object(u.a)(U,2),B=Q[0],F=Q[1],H=Object(r.useState)(),W=Object(u.a)(H,2),z=W[0],V=W[1],J=Object(r.useState)(),K=Object(u.a)(J,2),G=K[0],X=K[1],Y=Object(l.l)({moduleEntry:w,moduleName:"outbound"}),Z=I!==Y&&Y>0;return Object(r.useEffect)((function(){function e(){return(e=Object(c.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)({dispatch:t});case 2:return e.sent,e.next=5,Object(d.e)({dispatch:t,warehouseUuid:b});case 5:return a=e.sent,T(a),e.next=9,Object(i.g)({dispatch:t,moduleName:"outbound",isExist:!!m});case 9:e.sent,A(Y);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){E(),p()}),[B]),{moduleName:"outbound",thereAreRequest:a,moduleFirstLoad:s,warehouseUuid:b,status:j,isLoading:O,outboundEntryData:m,warehouseArea:f,outboundAddSku:h,summary:y,setSummary:p,localEntryData:w,setLocalEntryData:E,isCheckedBefore:I,setIsCheckedBefore:A,next:C,setNext:M,area:q,setArea:T,areaId:B,setAreaId:F,search:z,setSearch:V,discard:G,setDiscard:X,isCheckedTotal:Y,added:Z}},g=function(e){var t=e.moduleEntry,a=e.activeSku,s=Object(o.d)((function(e){return e.isLoading})),n=t.jobPost.list[a],c=n.skuName,i=n.skuNumber,d=n.poList,b=n.outboundTypeList,j=n.totalQty,O=n.unitOfMeassures,m=Object(r.useState)({success:!1,name:null}),f=Object(u.a)(m,2),h=f[0],S=f[1],v=Object(r.useState)({show:!1,name:null}),y=Object(u.a)(v,2),p=y[0],k=y[1],g=Object(r.useState)(!1),w=Object(u.a)(g,2),E=w[0],L=w[1],N=Object(r.useState)(),I=Object(u.a)(N,2),A=I[0],D=I[1],x=Object(r.useState)(),C=Object(u.a)(x,2),M=C[0],R=C[1],P=Object(r.useState)(!1),q=Object(u.a)(P,2),T=q[0],U=q[1],Q=Object(r.useState)(!1),B=Object(u.a)(Q,2),F=B[0],H=B[1],W=Object(r.useState)(["/inventory-entry/additional-outbound/weight-entry","/inventory-entry/additional-outbound/remove-sku","/inventory-entry/additional-outbound/add-sku"]),z=Object(u.a)(W,2),V=z[0],J=z[1],K=Object(l.s)({moduleEntry:t,activeSku:a}),G=Object(l.g)({moduleEntry:t}),X=!(!h.success||!h.status);return Object(r.useEffect)((function(){500===h.status?(D(!1),k({show:!1,name:p.name})):200===h.status&&(k({show:!1,name:p.name}),D(!0))}),[h]),Object(r.useEffect)((function(){A||S({success:!1,name:null})}),[A]),{isSuccess:h,setIsSuccess:S,confirmation:p,setConfirmation:k,discard:E,setDiscard:L,isSaved:A,setIsSaved:D,action:M,setAction:R,isRequired:T,setIsRequired:U,hideContent:F,setHideContent:H,allowPage:V,setAllowPage:J,isLoading:s,skuName:c,skuNumber:i,poList:d,totalQty:j,unitOfMeassures:O,totalWeight:K,edited:G,postInfo:X,outboundTypeList:b}},w=function(e){var t=e.dispatch,a=Object(o.d)((function(e){return e.thereAreRequest})),s=Object(o.d)((function(e){return e.repackFirstLoad})),b=Object(o.d)((function(e){return e.user.warehouseUuid})),j=Object(o.d)((function(e){return e.status})),O=Object(o.d)((function(e){return e.isLoading})),m=Object(o.d)((function(e){return e.repackEntryData})),f=Object(o.d)((function(e){return e.warehouseArea})),h=Object(r.useState)(null),S=Object(u.a)(h,2),v=S[0],y=S[1],p=Object(r.useState)(),k=Object(u.a)(p,2),g=k[0],w=k[1],E=Object(r.useState)(0),L=Object(u.a)(E,2),N=L[0],I=L[1],A=Object(r.useState)(),D=Object(u.a)(A,2),x=D[0],C=D[1],M=Object(r.useState)(),R=Object(u.a)(M,2),P=R[0],q=R[1],T=Object(r.useState)(),U=Object(u.a)(T,2),Q=U[0],B=U[1],F=Object(r.useState)(),H=Object(u.a)(F,2),W=H[0],z=H[1],V=Object(r.useState)(),J=Object(u.a)(V,2),K=J[0],G=J[1],X=Object(l.l)({moduleEntry:g,moduleName:"repack"}),Y=N!==X&&X>0;return Object(r.useEffect)((function(){function e(){return(e=Object(c.a)(n.a.mark((function e(){var a,s,c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)({dispatch:t});case 2:return a=e.sent,e.next=5,Object(d.e)({dispatch:t,warehouseUuid:b});case 5:return s=e.sent,q(s),c=null===s||void 0===s?void 0:s.filter((function(e){return 4===e.value})),u=null===s||void 0===s?void 0:s.filter((function(e){return 5===e.value})),(null===c||void 0===c?void 0:c.length)&&B(c[0]),(null===c||void 0===c?void 0:c.length)&&z(u[0]),e.next=13,Object(i.g)({dispatch:t,moduleName:"repack",isExist:!!m,ripeness:a});case 13:e.sent,I(X);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){w(),y()}),[Q]),{moduleName:"repack",thereAreRequest:a,moduleFirstLoad:s,warehouseUuid:b,status:j,isLoading:O,repackEntryData:m,warehouseArea:f,summary:v,setSummary:y,localEntryData:g,setLocalEntryData:w,isCheckedBefore:N,setIsCheckedBefore:I,search:x,setSearch:C,area:P,setArea:q,areaId:Q,setAreaId:B,areaDestinationId:W,setAreaDestinationId:z,discard:K,setDiscard:G,isCheckedTotal:X,added:Y}},E=function(e){var t=e.moduleEntry,a=e.activeSku,s=Object(o.d)((function(e){return e.isLoading})),n=Object(r.useState)(),c=Object(u.a)(n,2),i=c[0],d=c[1],b=Object(r.useState)({success:!1,name:null}),j=Object(u.a)(b,2),O=j[0],m=j[1],f=Object(r.useState)({show:!1,name:null}),h=Object(u.a)(f,2),S=h[0],v=h[1],y=Object(r.useState)(!1),p=Object(u.a)(y,2),k=p[0],g=p[1],w=Object(r.useState)(),E=Object(u.a)(w,2),L=E[0],N=E[1],I=Object(r.useState)(),A=Object(u.a)(I,2),D=A[0],x=A[1],C=Object(r.useState)(!1),M=Object(u.a)(C,2),R=M[0],P=M[1],q=Object(r.useState)(!1),T=Object(u.a)(q,2),U=T[0],Q=T[1],B=Object(r.useState)(["/inventory-entry/repacking/weight-entry","/inventory-entry/repacking/weight-entry/remove-sku","/inventory-entry/repacking/weight-entry/add-sku"]),F=Object(u.a)(B,2),H=F[0],W=F[1],z=t.jobPost.list[a],V=z.skuName,J=z.skuNumber,K=z.poList,G=z.gradeList,X=z.totalQty,Y=z.unitOfMeassures,Z=Object(l.s)({moduleEntry:t,activeSku:a}),$=Object(l.q)({moduleEntry:t,activeSku:a}),_=Object(l.g)({moduleEntry:t}),ee=!(!O.success||!O.status);return Object(r.useEffect)((function(){500===O.status?(N(!1),v({show:!1,name:S.name})):200===O.status&&(v({show:!1,name:S.name}),N(!0))}),[O]),Object(r.useEffect)((function(){L||m({success:!1,name:null})}),[L]),{isLoading:s,invalidThreshold:i,setInvalidThreshold:d,isSuccess:O,setIsSuccess:m,confirmation:S,setConfirmation:v,discard:k,setDiscard:g,isSaved:L,setIsSaved:N,action:D,setAction:x,isRequired:R,setIsRequired:P,hideContent:U,setHideContent:Q,allowPage:H,setAllowPage:W,unitOfMeassures:Y,totalWeight:Z,edited:_,postInfo:ee,skuName:V,skuNumber:J,poList:K,gradeList:G,totalQty:X,totalPack:$}},L=function(e){var t=e.dispatch,a=e.setLocalEntryData,s=e.setSummary,n=e.setSearch,c=e.getStockTakeSummary,o=e.search,i=e.warehouseUuid,d=e.areaId,l=e.localEntryData,j=(e.moduleName,e.stockMovementTargetRepack,Object(r.useState)()),O=Object(u.a)(j,2),m=O[0],f=O[1],h=Object(r.useState)({show:!1,name:"submit"}),S=Object(u.a)(h,2),v=S[0],y=S[1],p=Object(r.useState)({success:!1,name:null}),k=Object(u.a)(p,2),g=k[0],w=k[1],E=Object(r.useState)(),L=Object(u.a)(E,2),N=L[0],I=L[1],A=Object(r.useState)(),D=Object(u.a)(A,2),x=D[0],C=D[1],M=Object(r.useState)(),R=Object(u.a)(M,2),P=R[0],q=R[1],T=Object(r.useState)(),U=Object(u.a)(T,2),Q=U[0],B=U[1];Object(r.useEffect)((function(){500===g.status?(I(!1),y({show:!1,name:v.name})):200===g.status&&(y({show:!1,name:v.name}),I(!0))}),[g]),Object(r.useEffect)((function(){N||w({success:!1,name:null})}),[N]);var F=!(!g.success||!g.status);return{updateList:function(e,u,r){a(),s(),"barcode"!==o&&(t({type:b.g,isLoading:!0}),setTimeout((function(){c({moduleName:r,stockMovementTargetRepack:u,zeroQuantity:e,singleView:!0,dispatch:t,desc:o,warehouseUuid:i,areaId:d,setModule:s,module:l},n(o))}),10))},action:m,setAction:f,confirmation:v,setConfirmation:y,isSuccess:g,setIsSuccess:w,isSaved:N,setIsSaved:I,createPo:x,setCreatePo:C,singleViewData:P,setSingleViewData:q,postInfo:F,moveAll:Q,setMoveAll:B}},N=function(){var e=Object(r.useState)(),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(),c=Object(u.a)(n,2);return{showScanner:a,setShowScanner:s,showSkuList:c[0],setShowSkuList:c[1]}},I=function(e){var t=e.moduleEntry,a=e.activeSku,s=e.dispatch,n=(e.moduleName,Object(o.d)((function(e){return e.targetRepacks}))),c=Object(o.d)((function(e){return e.slotList})),i=Object(r.useState)(),d=Object(u.a)(i,2),b=d[0],j=d[1],O=t.jobPost.list[a].gradeList,m=t.jobPost.list[a].poList[0].targetRepacks,f=Object(l.e)(m,O,a,t,b),h=Object(r.useState)(!0),S=Object(u.a)(h,2),v=S[0],y=S[1];return Object(r.useEffect)((function(e){Object(l.o)({moduleEntry:t,dispatch:s})}),[]),Object(r.useEffect)((function(e){var t,c;(null===f||void 0===f||null===(t=f.data)||void 0===t?void 0:t.length)||(null===b||void 0===b?void 0:b.length)||y(!1),(null===f||void 0===f||null===(c=f.data)||void 0===c?void 0:c.length)&&y(!0),Object(l.t)({data:null===f||void 0===f?void 0:f.data,targetRepacks:n,activeSku:a,dispatch:s})}),[f]),{showTargetRepack:v,table:f,slot:b,setSlot:j,slotList:c}},A=function(e){var t=e.moduleEntry,a=e.activeSku,s=e.dispatch,n=(e.moduleName,t.jobPost.list[a].poList[0].targetMovements),c=Object(o.d)((function(e){return e.slotList})),i=Object(r.useState)(),d=Object(u.a)(i,2),b=d[0],j=d[1],O=t.jobPost.list[a].gradeList,m=Object(l.e)(n,O,a,t,b,!0),f=Object(r.useState)(!0),h=Object(u.a)(f,2),S=h[0],v=h[1];return Object(r.useEffect)((function(e){var t,c;(null===m||void 0===m||null===(t=m.data)||void 0===t?void 0:t.length)||(null===b||void 0===b?void 0:b.length)||v(!1),(null===m||void 0===m||null===(c=m.data)||void 0===c?void 0:c.length)&&v(!0),Object(l.t)({data:null===m||void 0===m?void 0:m.data,targetRepacks:n,activeSku:a,dispatch:s})}),[m]),{showTargetRepack:S,table:m,slot:b,setSlot:j,slotList:c}}}}]);
//# sourceMappingURL=5.499e1448.chunk.js.map