(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[0],{666:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return v})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return h})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return k})),n.d(t,"n",(function(){return S})),n.d(t,"q",(function(){return g})),n.d(t,"r",(function(){return w})),n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return I})),n.d(t,"f",(function(){return L})),n.d(t,"g",(function(){return N})),n.d(t,"i",(function(){return D})),n.d(t,"h",(function(){return A})),n.d(t,"p",(function(){return M})),n.d(t,"o",(function(){return R})),n.d(t,"e",(function(){return x}));var a=n(65),s=n.n(a),u=n(91),c=n(659),o=n(1),i=n(56),r=n(663),d=n(671),l=n(19),b=n(662),j=n(678),O=n.n(j),m=n(721),f=function(e,t){var n=document.documentElement.clientHeight,a=document.documentElement.clientWidth;return{dimention:n,height:n-(e||0),emptyItem:n-(e||0),width:a,isMobile:a<=500}},v=function(e){var t=document.documentElement.clientWidth,n=document.documentElement.clientHeight,a=n-(e?535:290);return{height:n=t<=500?e?a+100:a:n,heightAdj:a,dimention:t,loading:O.a}},p=function(e){var t=e.dispatch,n=(Object(i.d)((function(e){return e.user})),Object(i.d)((function(e){return e.zeroQuantity}))),a=Object(i.d)((function(e){return e.thereAreRequest})),l=Object(i.d)((function(e){return e.stockTakeFirstLoad})),b=Object(i.d)((function(e){return e.user.warehouseUuid})),j=Object(i.d)((function(e){return e.user.warehouseTypeName})),O=Object(i.d)((function(e){return e.status})),m=Object(i.d)((function(e){return e.isLoading})),f=Object(i.d)((function(e){return e.stockTakeEntryData})),v=Object(o.useState)(null),p=Object(c.a)(v,2),h=p[0],y=p[1],k=Object(o.useState)(),S=Object(c.a)(k,2),g=S[0],w=S[1],E=Object(o.useState)(),I=Object(c.a)(E,2),L=I[0],N=I[1],D=Object(o.useState)(),A=Object(c.a)(D,2),M=A[0],R=A[1],x=Object(o.useState)({}),U=Object(c.a)(x,2),C=U[0],P=U[1],T=Object(o.useState)(),q=Object(c.a)(T,2),W=q[0],Q=q[1];return Object(o.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var n,a,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.e)({dispatch:t});case 2:return n=e.sent,e.next=5,Object(d.h)({dispatch:t,warehouseUuid:b});case 5:a=e.sent,u=null===a||void 0===a?void 0:a.filter((function(e){return 1===e.typeId})),P("Warehouse"===j?null===u||void 0===u?void 0:u.filter((function(e){return"Storage Ambient"===e.label}))[0]:null===u||void 0===u?void 0:u.filter((function(e){return"Storage"===e.label}))[0]),R(a),Object(r.k)({dispatch:t,moduleName:"stockTake",isExist:!!f,ripeness:n});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}try{!function(){e.apply(this,arguments)}()}catch(n){console.log(n)}}),[]),Object(o.useEffect)((function(){w(),y()}),[C]),{moduleName:"stockTake",thereAreRequest:a,moduleFirstLoad:l,warehouseUuid:b,status:O,isLoading:m,stockTakeEntryData:f,summary:h,setSummary:y,localEntryData:g,setLocalEntryData:w,search:L,setSearch:N,area:M,setArea:R,areaId:C,setAreaId:P,discard:W,setDiscard:Q,zeroQuantity:n}},h=function(e){var t=e.moduleEntry,n=e.activeSku,a=Object(o.useState)({success:!1,name:null}),s=Object(c.a)(a,2),u=s[0],r=s[1],d=Object(o.useState)({show:!1,name:null}),l=Object(c.a)(d,2),j=l[0],O=l[1],m=Object(o.useState)(!1),f=Object(c.a)(m,2),v=f[0],p=f[1],h=Object(o.useState)(),y=Object(c.a)(h,2),k=y[0],S=y[1],g=Object(o.useState)(),w=Object(c.a)(g,2),E=w[0],I=w[1],L=Object(o.useState)(!1),N=Object(c.a)(L,2),D=N[0],A=N[1],M=Object(o.useState)(!1),R=Object(c.a)(M,2),x=R[0],U=R[1],C=Object(o.useState)(["/inventory-entry/stock-take/weight-entry","/inventory-entry/stock-take/weight-entry/remove-sku","/inventory-entry/stock-take/weight-entry/add-sku"]),P=Object(c.a)(C,2),T=P[0],q=P[1],W=Object(i.d)((function(e){return e.isLoading})),Q=Object(i.d)((function(e){return e.status})),F=t.jobPost.list[n],B=F.skuName,z=F.skuNumber,H=F.poList,V=F.gradeList,G=F.totalQty,J=F.unitOfMeassures,K=Object(b.C)({moduleEntry:t,activeSku:n}),_=Object(b.o)({moduleEntry:t}),Y=!(!u.success||!u.status);return Object(o.useEffect)((function(){500===u.status?(S(!1),O({show:!1,name:j.name})):200===u.status&&(O({show:!1,name:j.name}),S(!0))}),[u]),Object(o.useEffect)((function(){k||r({success:!1,name:null})}),[k]),{isSuccess:u,setIsSuccess:r,confirmation:j,setConfirmation:O,discard:v,setDiscard:p,isSaved:k,setIsSaved:S,action:E,setAction:I,isRequired:D,setIsRequired:A,hideContent:x,setHideContent:U,allowPage:T,setAllowPage:q,isLoading:W,skuName:B,skuNumber:z,poList:H,gradeList:V,totalQty:G,unitOfMeassures:J,totalWeight:K,edited:_,postInfo:Y,status:Q}},y=function(e){var t,n,a=e.dispatch,l=Object(i.d)((function(e){return e.thereAreRequest})),j=Object(i.d)((function(e){return e.stockMovementFirstLoad})),O=Object(i.d)((function(e){return e.user.warehouseUuid})),m=Object(i.d)((function(e){return e.stockMovementDropdown})),f=Object(i.d)((function(e){return e.areaId})),v=Object(i.d)((function(e){return e.areaIdDesposition})),p=Object(i.d)((function(e){return e.areaMovement})),h=Object(i.d)((function(e){return e.status})),y=Object(i.d)((function(e){return e.isLoading})),k=Object(i.d)((function(e){return e.stockMovementEntryData})),S=Object(i.d)((function(e){return e.wasteReasonList})),g=Object(o.useState)(null),w=Object(c.a)(g,2),E=w[0],I=w[1],L=Object(o.useState)(),N=Object(c.a)(L,2),D=N[0],A=N[1],M=Object(o.useState)(0),R=Object(c.a)(M,2),x=R[0],U=R[1],C=Object(o.useState)(""),P=Object(c.a)(C,2),T=P[0],q=P[1],W=Object(o.useState)(),Q=Object(c.a)(W,2),F=Q[0],B=Q[1],z=Object(o.useState)(),H=Object(c.a)(z,2),V=H[0],G=H[1],J=Object(o.useState)(),K=Object(c.a)(J,2),_=K[0],Y=K[1],X=Object(b.u)({moduleEntry:D,moduleName:"stockMovement"}),Z=x!==X&&X>0,$=!!(D&&(null===D||void 0===D||null===(t=D.jobPost)||void 0===t||null===(n=t.list)||void 0===n?void 0:n.length)>0),ee=Object(i.d)((function(e){return e.stockMovementTargetRepack}));return Object(o.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.e)({dispatch:a});case 2:return t=e.sent,e.next=5,Object(d.h)({dispatch:a,warehouseUuid:O});case 5:return n=e.sent,B(n),e.next=9,Object(r.k)({dispatch:a,moduleName:"stockMovement",isExist:!!k,ripeness:t});case 9:e.sent,(null===S||void 0===S?void 0:S.length)||Object(d.i)({dispatch:a}),U(X);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(o.useEffect)((function(e){(null===f||void 0===f?void 0:f.value)&&(null===v||void 0===v?void 0:v.value)&&(null===f||void 0===f?void 0:f.value)!==(null===v||void 0===v?void 0:v.value)?G(!0):G(!1)}),[f,v,Z]),Object(o.useEffect)((function(){A(),I()}),[f,v]),Object(o.useEffect)((function(e){ee&&((null===f||void 0===f?void 0:f.value)&&(null===v||void 0===v?void 0:v.value)&&(null===f||void 0===f?void 0:f.value)!==(null===v||void 0===v?void 0:v.value)&&(I(),Object(r.g)({moduleName:"stockMovement",stockMovementTargetRepack:ee,dispatch:a,desc:T,warehouseUuid:O,areaId:f,areaIdDesposition:v,setModule:I,module:D}),q(T)));ee||I()}),[ee]),{moduleName:"stockMovement",thereAreRequest:l,moduleFirstLoad:j,warehouseUuid:O,stockMovementDropdown:m,areaId:f,areaIdDesposition:v,areaMovement:p,status:h,isLoading:y,stockMovementEntryData:k,summary:E,setSummary:I,localEntryData:D,setLocalEntryData:A,isCheckedBefore:x,setIsCheckedBefore:U,search:T,setSearch:q,area:F,setArea:B,areaMatched:V,setAreaMatched:G,discard:_,setDiscard:Y,isCheckedTotal:X,added:Z,entryIsReady:$,stockMovementTargetRepack:ee}},k=function(e){var t=e.moduleEntry,n=e.activeSku,a=Object(i.d)((function(e){return e.isLoading})),s=Object(i.d)((function(e){return e.status})),u=Object(i.d)((function(e){return e.areaMovement})),r=t.jobPost.list[n],d=r.skuName,l=r.skuNumber,j=r.poList,O=r.gradeList,m=r.totalQty,f=r.unitOfMeassures,v=Object(b.C)({moduleEntry:t,activeSku:n}),p=Object(b.o)({moduleEntry:t}),h=Object(o.useState)({success:!1,name:null}),y=Object(c.a)(h,2),k=y[0],S=y[1],g=Object(o.useState)({show:!1,name:null}),w=Object(c.a)(g,2),E=w[0],I=w[1],L=Object(o.useState)(!1),N=Object(c.a)(L,2),D=N[0],A=N[1],M=Object(o.useState)(),R=Object(c.a)(M,2),x=R[0],U=R[1],C=Object(o.useState)(),P=Object(c.a)(C,2),T=P[0],q=P[1],W=Object(o.useState)(!1),Q=Object(c.a)(W,2),F=Q[0],B=Q[1],z=Object(o.useState)(!1),H=Object(c.a)(z,2),V=H[0],G=H[1],J=Object(o.useState)(["/inventory-entry/movement/weight-entry","/inventory-entry/movement/weight-entry/remove-sku","/inventory-entry/movement/weight-entry/add-sku"]),K=Object(c.a)(J,2),_=K[0],Y=K[1];Object(o.useEffect)((function(){500===k.status?(U(!1),I({show:!1,name:E.name})):200===k.status&&(I({show:!1,name:E.name}),U(!0))}),[k]),Object(o.useEffect)((function(){x||S({success:!1,name:null})}),[x]);var X=!(!k.success||!k.status);return{isSuccess:k,setIsSuccess:S,confirmation:E,setConfirmation:I,discard:D,setDiscard:A,isSaved:x,setIsSaved:U,action:T,setAction:q,isRequired:F,setIsRequired:B,hideContent:V,setHideContent:G,allowPage:_,setAllowPage:Y,isLoading:a,skuName:d,skuNumber:l,poList:j,gradeList:O,totalQty:m,unitOfMeassures:f,totalWeight:v,edited:p,postInfo:X,areaMovement:u,status:s}},S=function(e){var t=e.moduleEntry,n=e.activeSku,a=Object(i.d)((function(e){return e.status})),s=Object(i.d)((function(e){return e.isLoading})),u=Object(i.d)((function(e){return e.areaMovement})),r=t.jobPost.list[n],d=r.skuName,l=r.skuNumber,j=r.poList,O=r.gradeList,m=r.totalQty,f=r.unitOfMeassures,v=Object(b.C)({moduleEntry:t,activeSku:n}),p=Object(b.o)({moduleEntry:t}),h=Object(o.useState)({success:!1,name:null}),y=Object(c.a)(h,2),k=y[0],S=y[1],g=Object(o.useState)({show:!1,name:null}),w=Object(c.a)(g,2),E=w[0],I=w[1],L=Object(o.useState)(!1),N=Object(c.a)(L,2),D=N[0],A=N[1],M=Object(o.useState)(),R=Object(c.a)(M,2),x=R[0],U=R[1],C=Object(o.useState)(),P=Object(c.a)(C,2),T=P[0],q=P[1],W=Object(o.useState)(!1),Q=Object(c.a)(W,2),F=Q[0],B=Q[1],z=Object(o.useState)(!1),H=Object(c.a)(z,2),V=H[0],G=H[1],J=Object(o.useState)(["/inventory-entry/stock-transfer/weight-entry","/inventory-entry/stock-transfer/weight-entry/remove-sku","/inventory-entry/stock-transfer/weight-entry/add-sku"]),K=Object(c.a)(J,2),_=K[0],Y=K[1];Object(o.useEffect)((function(){500===k.status?(U(!1),I({show:!1,name:E.name})):200===k.status&&(I({show:!1,name:E.name}),U(!0))}),[k]),Object(o.useEffect)((function(){x||S({success:!1,name:null})}),[x]);var X=!(!k.success||!k.status);return{isSuccess:k,setIsSuccess:S,confirmation:E,setConfirmation:I,discard:D,setDiscard:A,isSaved:x,setIsSaved:U,action:T,setAction:q,isRequired:F,setIsRequired:B,hideContent:V,setHideContent:G,allowPage:_,setAllowPage:Y,isLoading:s,skuName:d,skuNumber:l,poList:j,gradeList:O,totalQty:m,unitOfMeassures:f,totalWeight:v,edited:p,postInfo:X,areaMovement:u,status:a}},g=function(e){var t=e.dispatch,n=Object(i.d)((function(e){return e.thereAreRequest})),a=Object(i.d)((function(e){return e.wasteFirstLoad})),l=Object(i.d)((function(e){return e.user.warehouseUuid})),j=Object(i.d)((function(e){return e.status})),O=Object(i.d)((function(e){return e.isLoading})),m=Object(i.d)((function(e){return e.wasteEntryData})),f=Object(o.useState)(),v=Object(c.a)(f,2),p=v[0],h=v[1],y=Object(o.useState)(null),k=Object(c.a)(y,2),S=k[0],g=k[1],w=Object(o.useState)(),E=Object(c.a)(w,2),I=E[0],L=E[1],N=Object(o.useState)(0),D=Object(c.a)(N,2),A=D[0],M=D[1],R=Object(o.useState)(),x=Object(c.a)(R,2),U=x[0],C=x[1],P=Object(o.useState)(),T=Object(c.a)(P,2),q=T[0],W=T[1],Q=Object(b.u)({moduleEntry:I,moduleName:"waste"});return Object(o.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.e)({dispatch:t});case 2:return n=e.sent,e.next=5,Object(d.h)({dispatch:t,warehouseUuid:l});case 5:return e.sent,e.next=8,Object(r.o)({warehouseUuid:l,setAreaId:h});case 8:return e.sent,e.next=11,Object(r.k)({dispatch:t,moduleName:"waste",isExist:!!m,ripeness:n});case 11:e.sent,M(Q);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),{moduleName:"waste",thereAreRequest:n,moduleFirstLoad:a,warehouseUuid:l,status:j,isLoading:O,wasteEntryData:m,areaId:p,setAreaId:h,summary:S,setSummary:g,localEntryData:I,setLocalEntryData:L,isCheckedBefore:A,setIsCheckedBefore:M,search:U,setSearch:C,discard:q,setDiscard:W,isCheckedTotal:Q}},w=function(e){var t=e.moduleEntry,n=e.activeSku,a=Object(i.d)((function(e){return e.isLoading})),s=Object(i.d)((function(e){return e.status})),u=Object(o.useState)({success:!1,name:null}),r=Object(c.a)(u,2),d=r[0],l=r[1],j=Object(o.useState)({show:!1,name:null}),O=Object(c.a)(j,2),m=O[0],f=O[1],v=Object(o.useState)(!1),p=Object(c.a)(v,2),h=p[0],y=p[1],k=Object(o.useState)(),S=Object(c.a)(k,2),g=S[0],w=S[1],E=Object(o.useState)(),I=Object(c.a)(E,2),L=I[0],N=I[1],D=Object(o.useState)(!1),A=Object(c.a)(D,2),M=A[0],R=A[1],x=Object(o.useState)(!1),U=Object(c.a)(x,2),C=U[0],P=U[1],T=Object(o.useState)(["/inventory-entry/waste/weight-entry","/inventory-entry/waste/weight-entry/remove-sku","/inventory-entry/waste/weight-entry/add-sku"]),q=Object(c.a)(T,2),W=q[0],Q=q[1],F=t.jobPost.list[n],B=F.skuName,z=F.skuNumber,H=F.poList,V=F.gradeList,G=F.totalQty,J=F.unitOfMeassures,K=Object(b.C)({moduleEntry:t,activeSku:n}),_=Object(b.o)({moduleEntry:t}),Y=!(!d.success||!d.status);return Object(o.useEffect)((function(){500===d.status?(w(!1),f({show:!1,name:m.name})):200===d.status&&(f({show:!1,name:m.name}),w(!0))}),[d]),Object(o.useEffect)((function(){g||l({success:!1,name:null})}),[g]),{isSuccess:d,setIsSuccess:l,confirmation:m,setConfirmation:f,discard:h,setDiscard:y,isSaved:g,setIsSaved:w,action:L,setAction:N,isRequired:M,setIsRequired:R,hideContent:C,setHideContent:P,allowPage:W,setAllowPage:Q,isLoading:a,skuName:B,skuNumber:z,poList:H,gradeList:V,totalQty:G,unitOfMeassures:J,totalWeight:K,edited:_,postInfo:Y,status:s}},E=function(e){var t=e.dispatch,n=Object(i.d)((function(e){return e.thereAreRequest})),a=Object(i.d)((function(e){return e.outboundFirstLoad})),l=Object(i.d)((function(e){return e.user.warehouseUuid})),j=Object(i.d)((function(e){return e.status})),O=Object(i.d)((function(e){return e.isLoading})),m=Object(i.d)((function(e){return e.outboundEntryData})),f=Object(i.d)((function(e){return e.warehouseArea})),v=Object(i.d)((function(e){return e.outboundAddSku})),p=Object(o.useState)(null),h=Object(c.a)(p,2),y=h[0],k=h[1],S=Object(o.useState)(),g=Object(c.a)(S,2),w=g[0],E=g[1],I=Object(o.useState)(0),L=Object(c.a)(I,2),N=L[0],D=L[1],A=Object(o.useState)(!1),M=Object(c.a)(A,2),R=M[0],x=M[1],U=Object(o.useState)(),C=Object(c.a)(U,2),P=C[0],T=C[1],q=Object(o.useState)(),W=Object(c.a)(q,2),Q=W[0],F=W[1],B=Object(o.useState)(),z=Object(c.a)(B,2),H=z[0],V=z[1],G=Object(o.useState)(),J=Object(c.a)(G,2),K=J[0],_=J[1],Y=Object(b.u)({moduleEntry:w,moduleName:"outbound"}),X=N!==Y&&Y>0;return Object(o.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.e)({dispatch:t});case 2:return e.sent,e.next=5,Object(d.h)({dispatch:t,warehouseUuid:l});case 5:return n=e.sent,T(n),e.next=9,Object(r.k)({dispatch:t,moduleName:"outbound",isExist:!!m});case 9:e.sent,D(Y);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(o.useEffect)((function(){E(),k()}),[Q]),{moduleName:"outbound",thereAreRequest:n,moduleFirstLoad:a,warehouseUuid:l,status:j,isLoading:O,outboundEntryData:m,warehouseArea:f,outboundAddSku:v,summary:y,setSummary:k,localEntryData:w,setLocalEntryData:E,isCheckedBefore:N,setIsCheckedBefore:D,next:R,setNext:x,area:P,setArea:T,areaId:Q,setAreaId:F,search:H,setSearch:V,discard:K,setDiscard:_,isCheckedTotal:Y,added:X}},I=function(e){var t=e.moduleEntry,n=e.activeSku,a=Object(i.d)((function(e){return e.isLoading})),s=Object(i.d)((function(e){return e.status})),u=t.jobPost.list[n],r=u.skuName,d=u.skuNumber,l=u.poList,j=u.outboundTypeList,O=u.totalQty,m=u.unitOfMeassures,f=Object(o.useState)({success:!1,name:null}),v=Object(c.a)(f,2),p=v[0],h=v[1],y=Object(o.useState)({show:!1,name:null}),k=Object(c.a)(y,2),S=k[0],g=k[1],w=Object(o.useState)(!1),E=Object(c.a)(w,2),I=E[0],L=E[1],N=Object(o.useState)(),D=Object(c.a)(N,2),A=D[0],M=D[1],R=Object(o.useState)(),x=Object(c.a)(R,2),U=x[0],C=x[1],P=Object(o.useState)(!1),T=Object(c.a)(P,2),q=T[0],W=T[1],Q=Object(o.useState)(!1),F=Object(c.a)(Q,2),B=F[0],z=F[1],H=Object(o.useState)(["/inventory-entry/additional-outbound/weight-entry","/inventory-entry/additional-outbound/remove-sku","/inventory-entry/additional-outbound/add-sku"]),V=Object(c.a)(H,2),G=V[0],J=V[1],K=Object(b.C)({moduleEntry:t,activeSku:n}),_=Object(b.o)({moduleEntry:t}),Y=!(!p.success||!p.status);return Object(o.useEffect)((function(){500===p.status?(M(!1),g({show:!1,name:S.name})):200===p.status&&(g({show:!1,name:S.name}),M(!0))}),[p]),Object(o.useEffect)((function(){A||h({success:!1,name:null})}),[A]),{isSuccess:p,setIsSuccess:h,confirmation:S,setConfirmation:g,discard:I,setDiscard:L,isSaved:A,setIsSaved:M,action:U,setAction:C,isRequired:q,setIsRequired:W,hideContent:B,setHideContent:z,allowPage:G,setAllowPage:J,isLoading:a,skuName:r,skuNumber:d,poList:l,totalQty:O,unitOfMeassures:m,totalWeight:K,edited:_,postInfo:Y,outboundTypeList:j,status:s}},L=function(e){var t=e.dispatch,n=Object(i.d)((function(e){return e.thereAreRequest})),a=Object(i.d)((function(e){return e.repackFirstLoad})),j=Object(i.d)((function(e){return e.user.warehouseUuid})),O=Object(i.d)((function(e){return e.status})),m=Object(i.d)((function(e){return e.isLoading})),f=Object(i.d)((function(e){return e.repackEntryData})),v=Object(i.d)((function(e){return e.warehouseArea})),p=Object(i.d)((function(e){return e.targetRepack})),h=Object(o.useState)(null),y=Object(c.a)(h,2),k=y[0],S=y[1],g=Object(o.useState)(),w=Object(c.a)(g,2),E=w[0],I=w[1],L=Object(o.useState)(0),N=Object(c.a)(L,2),D=N[0],A=N[1],M=Object(o.useState)(""),R=Object(c.a)(M,2),x=R[0],U=R[1],C=Object(o.useState)(),P=Object(c.a)(C,2),T=P[0],q=P[1],W=Object(o.useState)(),Q=Object(c.a)(W,2),F=Q[0],B=Q[1],z=Object(o.useState)(),H=Object(c.a)(z,2),V=H[0],G=H[1],J=Object(o.useState)(),K=Object(c.a)(J,2),_=K[0],Y=K[1],X=Object(b.u)({moduleEntry:E,moduleName:"repack"}),Z=D!==X&&X>0;return Object(o.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var n,a,u,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.e)({dispatch:t});case 2:return n=e.sent,e.next=5,Object(d.h)({dispatch:t,warehouseUuid:j});case 5:return a=e.sent,q(a),u=null===a||void 0===a?void 0:a.filter((function(e){return"Production"===e.label})),c=null===a||void 0===a?void 0:a.filter((function(e){return"Staging"===e.label})),(null===u||void 0===u?void 0:u.length)&&B(u[0]),(null===c||void 0===c?void 0:c.length)&&G(c[0]),e.next=13,Object(r.k)({dispatch:t,moduleName:"repack",isExist:!!f,ripeness:n});case 13:e.sent,A(X);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(o.useEffect)((function(){I(),S()}),[F]),Object(o.useEffect)((function(e){p&&(S(),F&&Object(r.g)({moduleName:"repack",targetRepack:p,dispatch:t,desc:"",warehouseUuid:j,areaId:F,areaIdDesposition:V,setModule:S,module:E})),p||S()}),[p,F]),{moduleName:"repack",thereAreRequest:n,moduleFirstLoad:a,warehouseUuid:j,status:O,isLoading:m,repackEntryData:f,warehouseArea:v,summary:k,setSummary:S,localEntryData:E,setLocalEntryData:I,isCheckedBefore:D,setIsCheckedBefore:A,search:x,setSearch:U,area:T,setArea:q,areaId:F,setAreaId:B,areaDestinationId:V,setAreaDestinationId:G,discard:_,setDiscard:Y,isCheckedTotal:X,added:Z,targetRepack:p,setTargetRepack:function(e){t({type:l.g,targetRepack:e})}}},N=function(e){var t=e.moduleEntry,n=e.activeSku,a=Object(i.d)((function(e){return e.isLoading})),s=Object(i.d)((function(e){return e.status})),u=Object(o.useState)(),r=Object(c.a)(u,2),d=r[0],l=r[1],j=Object(o.useState)({success:!1,name:null}),O=Object(c.a)(j,2),m=O[0],f=O[1],v=Object(o.useState)({show:!1,name:null}),p=Object(c.a)(v,2),h=p[0],y=p[1],k=Object(o.useState)(!1),S=Object(c.a)(k,2),g=S[0],w=S[1],E=Object(o.useState)(),I=Object(c.a)(E,2),L=I[0],N=I[1],D=Object(o.useState)(),A=Object(c.a)(D,2),M=A[0],R=A[1],x=Object(o.useState)(!1),U=Object(c.a)(x,2),C=U[0],P=U[1],T=Object(o.useState)(!1),q=Object(c.a)(T,2),W=q[0],Q=q[1],F=Object(o.useState)(["/inventory-entry/repacking/weight-entry","/inventory-entry/repacking/weight-entry/remove-sku","/inventory-entry/repacking/weight-entry/add-sku"]),B=Object(c.a)(F,2),z=B[0],H=B[1],V=Object(o.useState)(0),G=Object(c.a)(V,2),J=G[0],K=G[1],_=t.jobPost.list[n],Y=_.skuName,X=_.skuNumber,Z=_.poList,$=_.gradeList,ee=_.totalQty,te=_.unitOfMeassures,ne=Object(b.C)({moduleEntry:t,activeSku:n}),ae=Object(b.A)({moduleEntry:t,activeSku:n}),se=Object(b.o)({moduleEntry:t}),ue=!(!m.success||!m.status);return Object(o.useEffect)((function(){500===m.status?(N(!1),y({show:!1,name:h.name})):200===m.status&&(y({show:!1,name:h.name}),N(!0))}),[m]),Object(o.useEffect)((function(){L||f({success:!1,name:null})}),[L]),{isLoading:a,invalidThreshold:d,setInvalidThreshold:l,isSuccess:m,setIsSuccess:f,confirmation:h,setConfirmation:y,discard:g,setDiscard:w,isSaved:L,setIsSaved:N,action:M,setAction:R,isRequired:C,setIsRequired:P,hideContent:W,setHideContent:Q,allowPage:z,setAllowPage:H,unitOfMeassures:te,totalWeight:ne,edited:se,postInfo:ue,skuName:Y,skuNumber:X,poList:Z,gradeList:$,totalQty:ee,totalPack:ae,status:s,activeTab:J,setActiveTab:K}},D=function(e){var t=e.category,n=e.dispatch,a=e.setLocalEntryData,s=e.setSummary,u=e.setSearch,i=e.getStockTakeSummary,r=e.search,d=e.warehouseUuid,b=e.areaId,j=e.localEntryData,O=(e.moduleName,e.stockMovementTargetRepack,Object(o.useState)()),m=Object(c.a)(O,2),f=m[0],v=m[1],p=Object(o.useState)({show:!1,name:"submit"}),h=Object(c.a)(p,2),y=h[0],k=h[1],S=Object(o.useState)({success:!1,name:null}),g=Object(c.a)(S,2),w=g[0],E=g[1],I=Object(o.useState)(),L=Object(c.a)(I,2),N=L[0],D=L[1],A=Object(o.useState)(),M=Object(c.a)(A,2),R=M[0],x=M[1],U=Object(o.useState)(),C=Object(c.a)(U,2),P=C[0],T=C[1],q=Object(o.useState)(),W=Object(c.a)(q,2),Q=W[0],F=W[1],B=Object(o.useState)(),z=Object(c.a)(B,2),H=z[0],V=z[1];Object(o.useEffect)((function(){500===w.status?(D(!1),k({show:!1,name:y.name})):200===w.status&&(k({show:!1,name:y.name}),D(!0))}),[w]),Object(o.useEffect)((function(){N||E({success:!1,name:null})}),[N]);var G=!(!w.success||!w.status);return{fromBarcode:Q,setFromBarcode:F,updateList:function(e,c,o){a(),s(),"barcode"!==r&&(n({type:l.g,isLoading:!0}),setTimeout((function(){i({category:t,moduleName:o,stockMovementTargetRepack:c,zeroQuantity:e,singleView:!0,dispatch:n,desc:r,warehouseUuid:d,areaId:b,setModule:s,module:j},u(r))}),10))},action:f,setAction:v,confirmation:y,setConfirmation:k,isSuccess:w,setIsSuccess:E,isSaved:N,setIsSaved:D,createPo:R,setCreatePo:x,singleViewData:P,setSingleViewData:T,postInfo:G,moveAll:H,setMoveAll:V}},A=function(){var e=Object(o.useState)(),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(o.useState)(),u=Object(c.a)(s,2);return{showScanner:n,setShowScanner:a,showSkuList:u[0],setShowSkuList:u[1]}},M=function(e){var t,n,a,s,u=e.moduleEntry,r=e.activeSku,d=e.dispatch,l=(e.moduleName,Object(i.d)((function(e){return e.targetRepacks}))),j=Object(i.d)((function(e){return e.slotList})),O=Object(o.useState)(),f=Object(c.a)(O,2),v=f[0],p=f[1],h=(null===u||void 0===u||null===(t=u.jobPost)||void 0===t?void 0:t.list[r]).gradeList,y=(null===u||void 0===u||null===(n=u.jobPost)||void 0===n||null===(a=n.list[r])||void 0===a||null===(s=a.poList[0])||void 0===s?void 0:s.targetRepacks)||[],k=Object(b.k)(y,h,r,u,v),S=Object(o.useState)(!0),g=Object(c.a)(S,2),w=g[0],E=g[1],I=Object(m.a)(u);return Object(o.useEffect)((function(e){Object(b.y)({moduleEntry:u,dispatch:d})}),[]),Object(o.useEffect)((function(e){var t,n;(null===k||void 0===k||null===(t=k.data)||void 0===t?void 0:t.length)||(null===v||void 0===v?void 0:v.length)||E(!1),(null===k||void 0===k||null===(n=k.data)||void 0===n?void 0:n.length)&&E(!0),Object(b.F)({data:null===k||void 0===k?void 0:k.data,targetRepacks:l,activeSku:r,dispatch:d})}),[k]),{showTargetRepack:w,table:k,slot:v,setSlot:p,slotList:j,totalEmptyThreshold:I}},R=function(e){var t,n=e.moduleEntry,a=e.activeSku,s=e.dispatch,u=(e.moduleName,null===(t=n.jobPost.list[a].poList[0])||void 0===t?void 0:t.targetMovements),r=Object(i.d)((function(e){return e.slotList})),d=Object(i.d)((function(e){return e.stockMovementTargetRepack})),l=Object(o.useState)(),j=Object(c.a)(l,2),O=j[0],m=j[1],f=n.jobPost.list[a].gradeList,v=Object(b.k)(u,f,a,n,O,!0),p=Object(o.useState)(!0),h=Object(c.a)(p,2),y=h[0],k=h[1];return Object(o.useEffect)((function(e){var t,n;(null===v||void 0===v||null===(t=v.data)||void 0===t?void 0:t.length)||(null===O||void 0===O?void 0:O.length)||k(!1),(null===v||void 0===v||null===(n=v.data)||void 0===n?void 0:n.length)&&k(!0),Object(b.F)({data:null===v||void 0===v?void 0:v.data,targetRepacks:u,activeSku:a,dispatch:s})}),[v]),{showTargetRepack:y,table:v,slot:O,setSlot:m,slotList:r,stockMovementTargetRepack:d}};function x(e){var t=e.wrapperRef,n=e.setShow,a=e.show;Object(o.useEffect)((function(){function e(e){a&&t.current&&!t.current.contains(e.target)&&n(!a)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,a])}},678:function(e,t,n){e.exports=n.p+"static/media/LOADING-MLS-GRAY.903088aa.gif"},721:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return v}));var a=n(4),s=n(65),u=n.n(s),c=n(71),o=n(665),i=n(91),r=n(19),d=n(663),l=n(671),b=n(116),j=n(662),O=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a,s,b,O,m,f,v,p,h,y,k,S,g,w,E,I,L,N,D;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,s=t.dispatch,b=t.setLocalEntryData,O=t.moduleName,m=t.moduleSummary,f=t.moduleEntry,v=t.warehouseUuid,p=t.areaId,h=t.areaDestinationId,e.prev=1,(k=Object(o.a)(m))[n].checked=a,s(Object(c.a)({type:r.c},"".concat(O,"summaryData"),k)),S=null===k||void 0===k?void 0:k.filter((function(e){if(e.checked)return e})),g=[],f&&f.jobPost.list.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&g.push(t.skuUuid)})),w=[],E=S.map(function(){var e=Object(i.a)(u.a.mark((function e(t,n){var a,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(l.b)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(d.d)({skuId:t.skuUuid,warehouseId:v,uom:t.unitOfMeassures});case 8:(s=e.sent)&&(c=[{itemList:[],expiryMs:null,inBoundyMs:null,expiryDate:null,inboundDate:null,skuUuid:t.skuUuid,uom:t.unitOfMeassures,packSize:t.packSize,category:t.category,initialWeight:Number.isInteger(null===s||void 0===s?void 0:s.data.totalWeight)?parseInt(null===s||void 0===s?void 0:s.data.totalWeight):parseFloat(null===s||void 0===s?void 0:s.data.totalWeight),targetRepacks:null===s||void 0===s?void 0:s.data.targetRepacks}],t.poList=c,w.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=12,Promise.all(E);case 12:e.sent,I=[],f&&(I=f.jobPost.list.concat(w)),f||(I=w),(L=k[n]).checked||(I=I.filter((function(e){return e.skuUuid!==L.skuUuid}))),N=null===f||void 0===f||null===(y=f.jobPost)||void 0===y?void 0:y.id,D={jobPost:{id:N||0,warehouseSource:v,warehouseDestination:v,areaSource:parseInt(null===p||void 0===p?void 0:p.value),areaName:null===p||void 0===p?void 0:p.label,areaDestination:parseInt(null===h||void 0===h?void 0:h.value),areaDestinationName:null===h||void 0===h?void 0:h.label,list:I.sort((function(e,t){return Object(j.g)(e,t)}))}},0===I.length&&s(Object(c.a)({type:r.b},"".concat(O,"EntryData"),null)),b(D),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(1),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[1,24]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a,s,c,r,j,O,m,f,v,p,h,y;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.idx,a=t.checked,t.dispatch,t.moduleName,s=t.moduleSummary,c=t.moduleEntry,r=t.warehouseUuid,t.areaId,j=t.preAddHandler,e.prev=1,(O=Object(o.a)(s))[n].checked=a,m=null===O||void 0===O?void 0:O.filter((function(e){if(e.checked)return e})),f=[],c&&c.map((function(e){var t={skuUuid:e.skuUuid};t.skuUuid&&f.push(t.skuUuid)})),v=[],p=m.map(function(){var e=Object(i.a)(u.a.mark((function e(t,n){var a,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.includes(t.skuUuid)){e.next=10;break}return e.next=4,Object(l.b)({skuId:t.skuUuid});case 4:return a=e.sent,t.gradeList=a,e.next=8,Object(d.d)({skuId:t.skuUuid,warehouseId:r,uom:t.unitOfMeassures});case 8:(s=e.sent)&&(c=[{itemList:[],expiryMs:null,inBoundyMs:null,expiryDate:null,inboundDate:null,skuUuid:t.skuUuid,uom:t.unitOfMeassures,packSize:t.packSize,category:t.category,initialWeight:Object(b.e)(null===s||void 0===s?void 0:s.data.totalWeight)?Object(b.e)(null===s||void 0===s?void 0:s.data.totalWeight):null===s||void 0===s?void 0:s.data.totalWeight,targetRepacks:null===s||void 0===s?void 0:s.data.targetRepacks}],t.poList=c,t.isNewItem=!0,v.push(t));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(p);case 11:e.sent,h=[],c&&(h=c.concat(v)),c||(h=v),(y=O[n]).checked||(h=h.filter((function(e){return e.skuUuid!==y.skuUuid}))),j(h),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.setActiveSKU,n=e.moduleEntry,s=e.moduleName,u=e.setConfirmation,o=e.dispatch,i=e.setIsRequired,d=e.setInvalidThreshold,l=[],O=Object(a.a)({},n),m=[],f=n.jobPost.list.map((function(e){var t=e.originalUom;return e.poList.map((function(n){var a=Object(j.z)({moduleList:n.itemList}),s=n.packSize,u=n.targetRepacks;null===u||void 0===u||u.length;return n.itemList.map((function(u){var c,o,i=u.qty,r=u.grade,d=u.pack,j=u.note;if(0!=i&&!isNaN(i)||null!==(null===r||void 0===r?void 0:r.value))if("Waste"===(null===u||void 0===u||null===(c=u.grade)||void 0===c?void 0:c.label)||"Semi Waste"===(null===u||void 0===u||null===(o=u.grade)||void 0===o?void 0:o.label))isNaN(i)||0==i||""===i||null===i?u.qtyIsEmpty=!0:u.qtyIsEmpty=!1,(null===r||void 0===r?void 0:r.value)?u.gradeIsEmpty=!1:u.gradeIsEmpty=!0,"Waste"!==(null===r||void 0===r?void 0:r.label)||j?u.noteIsEmpty=!1:u.noteIsEmpty=!0;else{var O=e.gradeList.filter((function(e){return e.value===r.value}))[0].multiplier,f="gram"==(null===t||void 0===t?void 0:t.toLowerCase())?s/1e3:s,v=i/d;v-=f/O,v/=f/O,(v*=100)>=51||v<=-20?(u.packThresholdIsEmpty=!0,m.push(!0)):(u.packThresholdIsEmpty=!1,m.push(!1)),u.packThreshold=Object(b.e)(v),isNaN(i)||0==i||""===i||null===i?u.qtyIsEmpty=!0:u.qtyIsEmpty=!1,isNaN(d)||0==d||""===d||null===d?u.packIsEmpty=!0:u.packIsEmpty=!1,(null===r||void 0===r?void 0:r.value)?u.gradeIsEmpty=!1:u.gradeIsEmpty=!0,"Waste"!==(null===r||void 0===r?void 0:r.label)||j?u.noteIsEmpty=!1:u.noteIsEmpty=!0}else u.qtyIsEmpty=!1,u.gradeIsEmpty=!1,u.noteIsEmpty=!1,u.packIsEmpty=!1,u.packThresholdIsEmpty=!1;return u.qtyIsEmpty||(Number(a)>Number(n.initialWeight)?u.qtyIsEmpty=!0:u.qtyIsEmpty=!1),(null===u||void 0===u?void 0:u.qtyIsEmpty)||(null===u||void 0===u?void 0:u.gradeIsEmpty)||u.packIsEmpty||(null===u||void 0===u?void 0:u.noteIsEmpty)||(null===u||void 0===u?void 0:u.qtyToCompareIsEmpty)||(null===u||void 0===u?void 0:u.slotIsEmpty)?l.push(!1):l.push(!0),u})),n})),e})),v=!1;if(f.map((function(e){e.poList.map((function(e){e.itemList.map((function(e){e.qty&&(v=!0)}))}))})),O.jobPost.list=f,o(Object(c.a)({type:r.b},"".concat(s,"EntryData"),O)),!l.includes(!1)&&v?"function"===typeof i&&i(!1):"function"===typeof i&&i(!0),m.includes(!0)?"function"===typeof d&&d(!0):"function"===typeof d&&d(!1),!l.includes(!1)&&v){if(m.includes(!0))return;"function"===typeof u&&u({show:!0,name:"submit"})}else"function"===typeof u&&u({show:!1,name:null});Object(j.b)({setActiveSKU:t,moduleEntry:n,moduleName:s})},v=function(e){var t=[];return e.jobPost.list.length&&e.jobPost.list.map((function(e,n){e.poList.length&&e.poList.map((function(a,s){a.itemList.length&&a.itemList.map((function(a,u){a.packThresholdIsEmpty&&t.push({skuName:e.skuName,id:"pack_".concat(s,"_").concat(u),excess:a.packThreshold,slot:a.slot,activeSku:n})}))}))})),t}}}]);
//# sourceMappingURL=0.338ae961.chunk.js.map