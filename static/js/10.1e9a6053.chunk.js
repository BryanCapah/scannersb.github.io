(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[10],{667:function(e,t,n){"use strict";var a=n(665),l=n(4),i=n(659),o=n(1),c=n.n(o),r=n(695);t.a=function(e){var t,n,s=e.isEmpty,d=e.title,u=e.placeholder,m=e.options,v=e.selectedValue,f=e.showTitle,p=e.width,b=e.className,g=e.entryListIdx,h=e.onChangeDropdown,x=e.show,E=e.poListIdx,y=e.isDisabled,N=e.style,w=e.noMarginBottom,O=e.resetName,j=e.isMulti,C=e.hideResetOpt,S=e.zInfinity,k=Object(o.useState)(),T=Object(i.a)(k,2),M=T[0],I=T[1];Object(o.useEffect)((function(){"empty"===v&&I(!0)}),[v,s]);var H=!!s&&function(e){return Object(l.a)(Object(l.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},L=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(g).concat(E)),B=null===L||void 0===L?void 0:L.getBoundingClientRect();Object(o.useEffect)((function(){B=null===L||void 0===L?void 0:L.getBoundingClientRect()}),[M]);var D=document.documentElement.clientWidth,z=[{label:"-".concat(O||d,"-"),value:null}];m&&(z=[].concat(Object(a.a)(z),Object(a.a)(m))),C&&(z=z.filter((function(e){return null===e||void 0===e?void 0:e.value})));var F,P=(null===(n=B)||void 0===n?void 0:n.bottom)>600?"top":"bottom";D<=500&&(P=(null===(F=B)||void 0===F?void 0:F.bottom)>400?"top":"bottom","Categories"===d&&(P="top"));return c.a.createElement("div",{style:N,className:"mr-0 ".concat(N?null:"mr-lg-3"," ").concat(w?null:"mb-3"," ").concat(p," ").concat(b," ").concat(x?null:"d-none")},c.a.createElement("div",{className:" pb-1 LatoBold ".concat(f?null:"d-none")},d),c.a.createElement(r.a,{inputId:"".concat(d,"_").concat(E,"_").concat(g),isMulti:j,isSearchable:!(D<500),isDisabled:y||!1,id:"dropdown".concat(g).concat(E),value:((null===v||void 0===v?void 0:v.value)||!!(null===v||void 0===v?void 0:v.length))&&v,menuIsOpen:M,menuPortal:!0,placeholder:O||u,options:z,onMenuOpen:function(){return I(!0)},onMenuClose:function(){return I(!1)},onChange:function(e){h(e),I(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(P),styles:{menuPortal:function(e){return Object(l.a)(Object(l.a)({},e),{},{zIndex:S?1e16:9999})},control:H,option:function(e,t){var n=t.isFocused,a=t.isSelected;return Object(l.a)(Object(l.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#969696",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(l.a)(Object(l.a)({},e),{},{borderRadius:4})}}))}},679:function(e,t,n){"use strict";var a=n(659),l=n(1),i=n.n(l),o=n(56),c=n(684),r=n.n(c),s=n(685),d=n.n(s),u=n(686),m=n.n(u),v=n(687),f=n.n(v),p=n(688),b=n.n(p),g=n(689),h=n.n(g),x=n(690),E=n.n(x),y=n(691),N=n.n(y),w=n(692),O=n.n(w),j=n(693),C=n.n(j),S=n(666),k=(n(694),function(e){var t,n,c=e.isMulti,r=e.options,s=e.onChange,d=e.moduleName,u=Object(l.useState)(!1),v=Object(a.a)(u,2),p=v[0],g=v[1],x=Object(S.d)().dimention,y=x<=500,w=Object(l.useRef)(null),j=null===(t=document)||void 0===t?void 0:t.getElementById("c-filter"),k=null===j||void 0===j?void 0:j.getBoundingClientRect();Object(l.useEffect)((function(){k=null===j||void 0===j?void 0:j.getBoundingClientRect()}),[p]);var T=(null===(n=k)||void 0===n?void 0:n.top)+(y?-70:function(e,t,n){switch(x){case 1024:return-250;default:return"waste"===e||"ADD_SKU"===e?-100:-220}}(d));Object(l.useEffect)((function(){function e(e){p&&w.current&&!w.current.contains(e.target)&&g(!p)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[w,p]);var M=p?280:0,I=p?1:0,H=y?"1rem":x>=1024&&x<1280?-180:x>=1280&&x<1366?-80:x>=1366&&x<1396?-50:x>=1396&&x<1440?-90:x>=1440&&x<1536?-70:x>=1536&&x<1600?-50:x>=1600&&x<1920?-70:x>=1920&&x<1930?-50:void 0,L=!!y&&"1rem",B=y?"fixed":"absolute",D=y?"100% !important":250,z=Object(l.useState)(""),F=Object(a.a)(z,2),P=F[0],A=F[1],U=Object(l.useState)(c?[]:{}),R=Object(a.a)(U,2),W=R[0],V=R[1],_=Object(l.useState)(!1),G=Object(a.a)(_,2),J=G[0],K=G[1],q=function(e){var t=e.options,n=e.item,a=e.setSelected,l=e.reset,i=null===t||void 0===t?void 0:t.map((function(e){return e}));a(i=(i=i.map((function(e){return n===e.value&&(e.selected=!e.selected),l&&(e.selected=!1),e}))).filter((function(e){return e.selected}))),"function"===typeof s&&s(i)},Q=Object(o.d)((function(e){return e.targetRepack})),X=Object(o.d)((function(e){return e.stockMovementTargetRepack})),Y=!!(Q&&"repack"===d||X&&"stockMovement"===d),Z=[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"},{target:!0,value:"tasc",label:"Most Completion Target"},{target:!0,value:"tdesc",label:"Least Completion Target"}];return i.a.createElement("div",{className:"position-sticky"},i.a.createElement("div",null,i.a.createElement("img",{className:"cursor-pointer",id:"c-filter",src:c?(null===W||void 0===W?void 0:W.length)?b.a:h.a:(null===W||void 0===W?void 0:W.label)?m.a:f.a,onClick:function(){return g(!0)}})),i.a.createElement("div",{ref:w,className:"text mt-3 rounded shadow py-2",style:{zIndex:1040,transition:"max-height ease-in",transitionProperty:"all",transitionDuration:"0.15s",maxHeight:M,opacity:I,minWidth:D,backgroundColor:"white",top:T,position:B,left:H,right:L,overflow:"hidden"}},i.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar ".concat(c?"d-none":null)},!c&&(null===Z||void 0===Z?void 0:Z.map((function(e){var t=e.label===J,n=t?J===e.label?"green":"text":"emptyTextField";return i.a.createElement("div",{onMouseEnter:function(){return K(e.label)},onMouseLeave:function(){return K(null)},onClick:function(){return function(e){V(e),"function"===typeof s&&s(e),g(!1)}(e)},style:{minHeight:40,backgroundColor:"white"},className:"".concat(e.target?Y?null:"d-none":null," filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center px-3 ").concat((null===e||void 0===e?void 0:e.label)===(null===W||void 0===W?void 0:W.label)&&"LatoBold text"," ").concat(n)},e.label)})))),i.a.createElement("div",{className:"px-2 ".concat(c?null:"d-none")},i.a.createElement("div",{className:"border rounded w-100 d-flex justify-content-between align-items-center pl-3 pr-2",style:{height:40}},i.a.createElement("input",{id:"filter-input",value:P,placeholder:"Search Category",onChange:function(e){return A(e.target.value)},type:"text",className:"plain-input m-0 p-0",style:{color:"#969696",fontSize:"1rem"}}),i.a.createElement("div",{className:"green"},i.a.createElement("img",{src:(null===W||void 0===W?void 0:W.length)?E.a:N.a,alt:"delete icon",className:"cursor-pointer",onClick:function(e){return q({options:r,setSelected:V,reset:!0})}})))),i.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar"},c&&(null===r||void 0===r?void 0:r.filter((function(e){return(null===P||void 0===P?void 0:P.length)?e.label.toLowerCase().includes(P.toLowerCase())?e:void 0:e})).sort((function(e,t){return function(e,t){return e.selected&&!t.selected?-1:!e.selected&&t.selected?1:0}(e,t)})).map((function(e,t){var n,a=!!(null===(n=W.filter((function(t){return(null===t||void 0===t?void 0:t.value)===(null===e||void 0===e?void 0:e.value)})))||void 0===n?void 0:n.length),l=a?1:0,o=c?a?J===t?"green":"text":"emptyTextField":W?"text":"emptyTextField";return i.a.createElement("div",{onMouseEnter:function(){return K(t)},onMouseLeave:function(){return K(null)},onClick:function(){return q({options:r,item:e.value,setSelected:V})},style:{minHeight:40,backgroundColor:"white"},className:"filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center ".concat(o)},i.a.createElement("table",{style:{tableLayout:"fixed",width:"100%"}},i.a.createElement("tr",null,i.a.createElement("td",{align:"center",style:{width:"20%"}},i.a.createElement("img",{style:{opacity:l},src:J===t&&a?O.a:C.a})),i.a.createElement("td",{style:{width:"80%"}},e.label))))}))))))});t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,c=(e.textSearch,e.searchHandler),s=void 0===c?null:c,u=e.barcodeScanner,m=e.filter,v=void 0===m?"":m,f=(e.width,e.className,e.filterDropdown),p=void 0===f?null:f,b=(e.value,e.showScanner),g=e.areaId,h=e.setAreaId,x=e.areaDestination,E=e.setAreaDestination,y=e.moduleName,N=e.setSearch,w=e.category,O=e.setCategory,j=e.setSortBy,C=e.hideFilter,S=e.useScanner,T=Object(l.useState)(),M=Object(a.a)(T,2),I=M[0],H=void 0!==I&&I,L=M[1],B="",D="";H?(B="Show Filter",D=""):(B="Hide Filter",D=i.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var z=Object(l.useState)(""),F=Object(a.a)(z,2),P=F[0],A=F[1],U=Object(o.d)((function(e){var t;return null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.categories})),R=Object(o.d)((function(e){var t;return null===(t=e.categoryList)||void 0===t?void 0:t.filter((function(e){return null===U||void 0===U?void 0:U.includes(null===e||void 0===e?void 0:e.value)}))}));return i.a.createElement("div",{className:"search-bar w-100"},i.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},i.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},i.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),i.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},i.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){A(e.target.value),"function"===typeof N&&N(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&s(P)}(e)}}))),i.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3 ".concat(C?"d-none":null)},i.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"}),i.a.createElement("div",{className:"mr-md-2"},i.a.createElement(k,{moduleName:y,selectedValue:w,options:R,onChange:function(e){return j(e)}})),i.a.createElement("div",{className:""},i.a.createElement(k,{moduleName:y,isMulti:!0,selectedValue:w,options:R,onChange:function(e){return O(e)}})),i.a.createElement("div",{className:"mr-0 mr-md-2"},i.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,l=e.setAreaDestination,i=e.barcodeScanner,o=e.moduleName;if("stockMovement"!==o)return(null===t||void 0===t?void 0:t.value)?void i(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===o){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void l("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void l("empty");"function"===typeof i&&i(!0)}}({areaId:g,areaDestination:x,setAreaId:h,setAreaDestination:E,barcodeScanner:u,moduleName:y})},className:"ml-2 pointer ".concat(S?null:"d-none"),src:b?r.a:d.a}))),i.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},v?i.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:H,setFilterShow:L})}},i.a.createElement("div",{className:"filter-text"},B)," ",i.a.createElement("span",{className:"px-3"},i.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),D)):null,i.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return s(P)}},"Search"))),i.a.createElement("div",null,H?null:i.a.createElement("div",{className:"w-100"}," ",p," ")))}},684:function(e,t,n){e.exports=n.p+"static/media/barcodeActive.f2ec13af.svg"},685:function(e,t,n){e.exports=n.p+"static/media/barcodeInactive.dc8d7118.svg"},686:function(e,t,n){e.exports=n.p+"static/media/ascOn.cccbb7d5.svg"},687:function(e,t,n){e.exports=n.p+"static/media/ascOff.d8a8c79c.svg"},688:function(e,t,n){e.exports=n.p+"static/media/categoryOn.5bc834d8.svg"},689:function(e,t,n){e.exports=n.p+"static/media/categoryOff.ffb704a2.svg"},690:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOn.fc3f380e.svg"},691:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOff.fc0332a7.svg"},692:function(e,t,n){e.exports=n.p+"static/media/checkHover.4cfe8e6d.svg"},693:function(e,t,n){e.exports=n.p+"static/media/checkNotHover.a429f43c.svg"},694:function(e,t,n){},720:function(e,t,n){"use strict";var a=n(665),l=n(169),i=n(170),o=n(172),c=n(171),r=n(789),s=(n(770),n(728),n(1)),d=n.n(s),u=n(771),m=n.n(u),v=(n(772),m()(r.a)),f=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).getColumnWidth=function(e,t,n){return 12*Math.max.apply(Math,Object(a.a)(e.map((function(e){var n="";return"number"===typeof(n=t(e))?n.toString().length:(n||"").length}))).concat([n.length]))},i.headerIcon=function(e,t,n){var l=[];if(t&&t.map((function(e,t){if(n[t])return l=Object(a.a)(l);var i={Header:d.a.createElement("span",null,e.Header," ",d.a.createElement("i",{className:"iconU-sort"}," ")),Cell:e.Cell,accessor:e.accessor,sortable:!1!==e.sortable,resizable:e.resizable||!1,className:e.className||null,headerClassName:e.headerClassName||null,style:e.style||null,width:e.width||null};return l=[].concat(Object(a.a)(l),[i])})),"false"!==i.props.editColumn){var o={Header:d.a.createElement("i",{className:"iconU-tableEdit pencilTable"}),accessor:"editBtn",width:50,style:{textAlign:"center"}};l=[].concat(Object(a.a)(l),[o])}return l},i.state={showModal:!1,activeTab:"1",editColumnTemp:{}},i}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.editColumnTemp,t=this.props,n=t.columns,a=t.data,l=t.onClick,i=t.styles,o=t.tableStatus,c=t.className,r=this.headerIcon(a,n,e);return d.a.createElement(d.a.Fragment,null,d.a.createElement(v,{className:c,columns:r,data:a,showPagination:!1,style:i,noDataText:"noData"==o?"Please Wait":"No  Data Found",minRows:"0",resizable:!1,getTdProps:function(e,t,n,a){return{onClick:function(i,o){l&&l(t.original,e,n,i,a)},style:{height:"3rem",cursor:!!l&&"pointer",textAlign:isNaN(null===t||void 0===t?void 0:t.original[n.id])?"left":"right"}}},defaultPageSize:50}))}}]),n}(d.a.Component);t.a=f},728:function(e,t,n){},860:function(e,t,n){"use strict";var a=n(1),l=n.n(a);t.a=function(){return l.a.createElement("div",{className:"d-flex align-items-center pagination-m"},l.a.createElement("div",{className:"bg-white d-flex  radius-all px-0 border-all justify-content-between sub-pag-m",style:{width:"fit-content"}},l.a.createElement("div",{className:"d-flex justify-content-between align-items-center px-3 py-2 border-right"},l.a.createElement("div",{className:"borderHeader"},l.a.createElement("i",{className:"iconU-paginationPrevMost"})),l.a.createElement("div",{className:"px-3 borderHeader"},l.a.createElement("i",{className:"iconU-paginationPrev"})),l.a.createElement("div",{className:"px-3 fontSizeTitle LatoBold borderHeader pag-active"},"1"),l.a.createElement("div",{className:"px-3 fontSizeTitle LatoBold borderHeader"},"2"),l.a.createElement("div",{className:"px-3 fontSizeTitle LatoBold borderHeader"},"3"),l.a.createElement("div",{className:"px-3 fontSizeTitle LatoBold borderHeader"},"4"),l.a.createElement("div",{className:"px-3 nextPagination"},l.a.createElement("i",{className:"iconU-paginationNext"})),l.a.createElement("div",{className:"nextPagination"},l.a.createElement("i",{className:"iconU-paginationNextMost"}))),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center px-3 py-2"},l.a.createElement("div",{className:"text emptyTextField"},"Go to page"),l.a.createElement("div",{className:"px-3"},l.a.createElement("input",{className:"pag-input",type:"text",style:{width:"50px"}})),l.a.createElement("div",{className:"text LatoBold"},"Go"),l.a.createElement("div",{className:"pl-3 text"},l.a.createElement("i",{className:"iconU-paginationNext"})))),l.a.createElement("div",{className:"emptyTextField px-3"},"Showing ",l.a.createElement("span",{className:"text"},"1 to 16 of 16")," entries"))}}}]);
//# sourceMappingURL=10.1e9a6053.chunk.js.map