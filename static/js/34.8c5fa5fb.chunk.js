(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[34],{1258:function(e,t,n){"use strict";n.r(t);var a=n(659),l=n(1),o=n.n(l),c=n(667),i=n(679),r=n(683),s=n.n(r),y=(n(116),function(e){var t=e.data,n=e.setUser,a=s.a,l=t.key||0;return o.a.createElement("div",{onKeyDown:function(e){return 13===e.keyCode&&alert()},tabindex:"0",className:"w-100 border d-md-flex sku-item um-list-card justify-content-between ".concat("pl-0 pr-0"," py-2 mb-3 rounded")},o.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat("pl-2 pr-3"),onClick:alert},o.a.createElement("img",{src:a,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),o.a.createElement("div",{className:"text-left"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},"sugiana@gmail.com"),o.a.createElement("div",{className:"text"},"Admin - JK01 - Sentul"))),o.a.createElement("hr",{className:"".concat(null)}),o.a.createElement("div",{className:"d-flex w-100 ".concat("pr-3"," pl-5 pl-md-0 align-items-center")},o.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat("justify-content-end")},o.a.createElement("div",{className:"mr-1 font-weight-bold emptyTextField"},"".concat(l," Modules")),o.a.createElement("div",{className:"mr-3 ml-3 emptyTextField iconU-sideBarDot d-flex align-items-center"}),o.a.createElement("div",{className:"mr-3 font-weight-bold emptyTextField"},"".concat(12," SKU Categories"))),o.a.createElement("div",{onClick:function(){return n(t)},style:{height:30,width:30,paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"cursor-pointer iconU-tableEdit font-weight-bold green d-flex align-items-center justify-content-center border rounded border-green"})))}),d=n(670),k=function(e){var t=e.minLength,n=e.setMinLength,a=e.maxLength,l=e.setMaxLength,o=(e.i,e.page),c=e.totalPage,i=e.setActivePage,r=o.key;r>=0&&r<c.length&&i(r),r===a&&a<c.length&&(i(r),l(a+(r===c.length-1?0:2)),n(t+(r===c.length-1?0:2))),r===t&&t>0&&r>0&&(i(r),l(a-2),n(t-2))},u=function(e){var t=e.setActivePage,n=e.setMaxLength,a=e.setMinLength;t(0),n(2),a(0)},m=function(e){var t=e.setActivePage,n=e.setMaxLength,a=e.setMinLength,l=e.totalPage;t((null===l||void 0===l?void 0:l.length)-1),n(l.length-1),a(l.length-3)},g=function(e,t){return{height:e,minHeight:e,maxHeight:e,backgroundColor:t}},v=function(e){var t,n,c=e.totalEntries,i=e.setUser,r=function(e){var t=Object(l.useState)([]),n=Object(a.a)(t,2),o=n[0],c=n[1],i=Object(l.useState)(0),r=Object(a.a)(i,2),s=r[0],y=r[1],g=Object(l.useState)(0),v=Object(a.a)(g,2),f=v[0],p=v[1],b=Object(l.useState)(2),h=Object(a.a)(b,2),E=h[0],x=h[1],w=Object(d.c)(250).height,N=null===e||void 0===e?void 0:e.length;Object(l.useEffect)((function(){if(N){for(var e=Math.ceil(N/20),t=[],n=0;n<e;n++)t.push({key:n});c(t)}}),[e]);var A=N||0,j=20*s+1||1,C=s===o.length-1?N:20*(s+1);return{totalPage:o,setTotalPage:c,activePage:s,setActivePage:y,minLength:f,setMinLength:p,maxLength:E,setMaxLength:x,height:w,onChangeHandler:k,toStartPage:u,toEndPage:m,startPage:j,endPage:C,numberOfPage:A}}(c),s=r.totalPage,g=r.activePage,v=r.setActivePage,f=r.minLength,p=r.setMinLength,b=r.maxLength,h=r.setMaxLength,E=r.height,x=r.onChangeHandler,w=r.toStartPage,N=r.toEndPage,A=r.startPage,j=r.endPage,C=r.numberOfPage;return o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku flex-column w-100 text-center",style:{minHeight:E,maxHeight:E}},null===c||void 0===c||null===(t=c.filter((function(e,t){return t>=20*g&&t<20*(g+1)})))||void 0===t?void 0:t.map((function(e){return o.a.createElement(y,{setUser:i,data:e})}))),o.a.createElement("div",{className:"d-md-flex justify-content-between w-100 ".concat((null===c||void 0===c?void 0:c.length)?null:"d-none")},o.a.createElement("div",{className:"w-100"}),o.a.createElement("div",{className:"d-flex w-100 justify-content-center"},o.a.createElement("div",{onClick:function(){return w({setActivePage:v,setMaxLength:h,setMinLength:p})},className:" ".concat("emptyTextField"," "," h6 fontSizeSmallTitle d-flex align-items-center p-pgn-btn rounded mr-3 iconU-paginationPrevMost")}),o.a.createElement("div",{onClick:function(){return x({minLength:f,setMinLength:p,maxLength:b,setMaxLength:h,page:{key:g-1},totalPage:s,setActivePage:v})},className:" ".concat("emptyTextField"," "," h6 fontSizeSmallTitle d-flex align-items-center p-pgn-btn rounded mr-3 iconU-paginationPrev")}),null===s||void 0===s||null===(n=s.filter((function(e,t){return t>=f&&t<=b})))||void 0===n?void 0:n.map((function(e,t){return o.a.createElement("div",{onClick:function(){return x({minLength:f,setMinLength:p,maxLength:b,setMaxLength:h,i:t,page:e,totalPage:s,setActivePage:v})},style:{width:25,height:25,transitionDuration:"0.2s",transition:"background-color linear",transitionProperty:"all",backgroundColor:"transparent"},className:" ".concat(g===e.key?"bg-green text-white":"emptyTextField"," h6 d-flex align-items-center justify-content-center p-1 cursor-pointer rounded mr-3")},e.key+1)})),o.a.createElement("div",{onClick:function(){return x({minLength:f,setMinLength:p,maxLength:b,setMaxLength:h,page:{key:g+1},totalPage:s,setActivePage:v})},className:" ".concat("emptyTextField"," "," h6 fontSizeSmallTitle d-flex align-items-center d-flex align-items-center p-pgn-btn rounded mr-3 iconU-paginationNext")}),o.a.createElement("div",{onClick:function(){return N({setActivePage:v,setMaxLength:h,setMinLength:p,totalPage:s})},className:" ".concat("emptyTextField"," "," h6 fontSizeSmallTitle d-flex align-items-center d-flex align-items-center p-pgn-btn rounded mr-3 iconU-paginationNextMost")})),o.a.createElement("div",{className:"d-flex w-100 justify-content-center align-items-center justify-content-lg-end"},o.a.createElement("div",null,"Showing "),o.a.createElement("div",{className:"LatoBold ml-1 mr-1"}," ".concat(A," to ").concat(j," of ").concat(C," ")),o.a.createElement("div",null," entries"))))},f=n(660),p=n(666),b=n(56),h=function(e){var t,n=e.setUser,c=e.user,i=Object(b.d)((function(e){return e.inventoryModules})),r=Object(b.d)((function(e){return e.categoryList})),y=Object(b.d)((function(e){return e.userRoles})),d=Object(l.useState)(""),k=Object(a.a)(d,2),u=k[0],m=k[1],v=document.documentElement.clientWidth,h=document.documentElement.clientHeight-130,E=v<=500?"60%":"75%";return o.a.createElement(f.B,{onKeyDown:function(e){return 27===e.keyCode&&n()},className:"".concat(c?null:"d-none"," single-view")},o.a.createElement(f.f,null,o.a.createElement(f.s,{closeOnBackdrop:!1,show:c,onClose:function(){return n()},className:"w-100"},o.a.createElement(f.v,{className:"px-3 pt-3  border-none m-0 d-flex align-items-center"},o.a.createElement("div",{className:"LatoBold softGrey"},"User Management - Edit User"),"  ",o.a.createElement("i",{className:"iconU-modalClose LatoBold",onClick:function(){return n()}})),o.a.createElement(f.t,{className:"pl-3 pr-1 py-0 w-100 overflow-y border-top pt-3 pb-3",style:g(h+15)},o.a.createElement("div",{className:" d-flex align-items-center bg-softGreen rounded p-3 mb-3"},o.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(v<=500?"pl-2 pr-3":"pl-0 pr-0"),onClick:alert},o.a.createElement("img",{src:s.a,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),o.a.createElement("div",{className:"text-left"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},"sugiana@gmail.com"),o.a.createElement("div",{className:"text"},"Admin - JK01 - Sentul")))),o.a.createElement("div",{style:{backgroundColor:"#F9FAFC"},className:"mb-3 p-3 rounded  d-flex justify-content-between align-items-center"},o.a.createElement("div",{style:{height:"fit-content"},className:"LatoBold"},"User Level Access"),o.a.createElement(p.a,{show:!0,width:"w-50",placeholder:"Select Role",style:{},noMarginBottom:!0,options:y,title:"User Roles"})),o.a.createElement("div",{style:{backgroundColor:"#F9FAFC"},className:"mb-3 p-3 rounded  h-25"},o.a.createElement("div",{style:{height:"fit-content"},className:"LatoBold pb-3"},"User Module Access ",o.a.createElement("span",null,"(7 Modules Selected)")),o.a.createElement("div",{className:"overflow-y",style:g("75%")},o.a.createElement("div",{className:"grid-container"},null===i||void 0===i?void 0:i.map((function(e){return o.a.createElement("div",{className:"d-flex align-items-center mb-3"},o.a.createElement("table",null,o.a.createElement("td",{style:{verticalAlign:"middle"}},o.a.createElement(f.H,{className:"float-right mr-3",shape:"pill",color:"success",size:v<=500?"sm":"md",onChange:function(){return!1}})),o.a.createElement("td",{style:{verticalAlign:"middle"}},o.a.createElement("div",{className:"text",style:{fontWeight:400}},e.label))))}))))),o.a.createElement("div",{style:{backgroundColor:"#F9FAFC",height:"38%"},className:"mb-3 p-3 rounded "},o.a.createElement("div",{style:{height:"fit-content"},className:"LatoBold mb-2"},"SKU Category Access ",o.a.createElement("span",null,"(7 Categories Selected)")),o.a.createElement("div",{className:" border rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mb-3"},o.a.createElement("input",{autoComplete:"off",placeholder:"Enter Category",className:"w-100 plain-input",onChange:function(e){return m(e.target.value)}})),o.a.createElement("div",{className:"overflow-y",style:g(E)},o.a.createElement("div",{className:"grid-container"},null===r||void 0===r||null===(t=r.filter((function(e){var t;if(null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t.toLowerCase().includes(u))return e})))||void 0===t?void 0:t.map((function(e){return o.a.createElement("div",{className:"d-flex align-items-center mb-3"},o.a.createElement("table",null,o.a.createElement("td",{style:{verticalAlign:"middle"}},o.a.createElement(f.H,{className:"float-right mr-3",shape:"pill",color:"success",size:v<=500?"sm":"md",onChange:function(){return!1}})),o.a.createElement("td",{style:{verticalAlign:"middle"}},o.a.createElement("div",{className:"text",style:{fontWeight:400}},e.label))))}))))),o.a.createElement(f.d,{onClick:function(){return null},className:"".concat("bg-green text-white"," no-shadow sku-item px-5 w-100")}," Submit")))))},E=n(671);t.default=function(){var e=Object(b.d)((function(e){return e.status})),t=Object(l.useState)(""),n=Object(a.a)(t,2),r=(n[0],n[1],Object(l.useState)([{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40},{key:0},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11},{key:12},{key:13},{key:14},{key:15},{key:16},{key:17},{key:18},{key:19},{key:20},{key:21},{key:22},{key:23},{key:24},{key:25},{key:26},{key:27},{key:28},{key:29},{key:30},{key:31},{key:32},{key:33},{key:34},{key:35},{key:36},{key:37},{key:38},{key:39},{key:40}])),s=Object(a.a)(r,2),y=s[0],d=(s[1],Object(l.useState)()),k=Object(a.a)(d,2),u=k[0],m=k[1],g=Object(b.c)();return Object(l.useEffect)((function(){Object(E.f)({dispatch:g}),Object(E.c)({dispatch:g})}),[]),o.a.createElement("div",{className:"w-100  stock-take-summary"},u?o.a.createElement(h,{setUser:m,user:u}):null,o.a.createElement(c.a,{status:e}),o.a.createElement("div",{className:"py-3 pl-3 pr-3 bg-white border-all radius-all mb-3"},o.a.createElement(i.a,{hideFilter:!0,moduleName:"userManagement",placeholder:"Enter User",filter:!1,searchHandler:function(e){return null}}),o.a.createElement(v,{totalEntries:y,setUser:m})))}},664:function(e,t,n){},666:function(e,t,n){"use strict";var a=n(665),l=n(4),o=n(659),c=n(1),i=n.n(c),r=n(694);t.a=function(e){var t,n,s=e.isEmpty,y=e.title,d=e.placeholder,k=e.options,u=e.selectedValue,m=e.showTitle,g=e.width,v=e.className,f=e.entryListIdx,p=e.onChangeDropdown,b=e.show,h=e.poListIdx,E=e.isDisabled,x=e.style,w=e.noMarginBottom,N=e.resetName,A=e.isMulti,j=e.hideResetOpt,C=e.zInfinity,O=Object(c.useState)(),S=Object(o.a)(O,2),L=S[0],M=S[1];Object(c.useEffect)((function(){"empty"===u&&M(!0)}),[u,s]);var P=!!s&&function(e){return Object(l.a)(Object(l.a)({},e),{},{border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})},B=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(f).concat(h)),T=null===B||void 0===B?void 0:B.getBoundingClientRect();Object(c.useEffect)((function(){T=null===B||void 0===B?void 0:B.getBoundingClientRect()}),[L]);var U=document.documentElement.clientWidth,F=[{label:"-".concat(N||y,"-"),value:null}];k&&(F=[].concat(Object(a.a)(F),Object(a.a)(k))),j&&(F=F.filter((function(e){return null===e||void 0===e?void 0:e.value})));var I,R=(null===(n=T)||void 0===n?void 0:n.bottom)>600?"top":"bottom";U<=500&&(R=(null===(I=T)||void 0===I?void 0:I.bottom)>400?"top":"bottom","Categories"===y&&(R="top"));return i.a.createElement("div",{style:x,className:"mr-0 ".concat(x?null:"mr-lg-3"," ").concat(w?null:"mb-3"," ").concat(g," ").concat(v," ").concat(b?null:"d-none")},i.a.createElement("div",{className:" pb-1 LatoBold ".concat(m?null:"d-none")},y),i.a.createElement(r.a,{inputId:"".concat(y,"_").concat(h,"_").concat(f),isMulti:A,isSearchable:!(U<500),isDisabled:E||!1,id:"dropdown".concat(f).concat(h),value:((null===u||void 0===u?void 0:u.value)||!!(null===u||void 0===u?void 0:u.length))&&u,menuIsOpen:L,menuPortal:!0,placeholder:N||d,options:F,onMenuOpen:function(){return M(!0)},onMenuClose:function(){return M(!1)},onChange:function(e){p(e),M(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(R),styles:{menuPortal:function(e){return Object(l.a)(Object(l.a)({},e),{},{zIndex:C?1e16:9999})},control:P,option:function(e,t){var n=t.isFocused,a=t.isSelected;return Object(l.a)(Object(l.a)({},e),{},{backgroundColor:a?"rgb(242, 250, 246, 0)":n?"rgb(242, 250, 246)":null,color:a?"black":"#969696",cursor:"pointer",fontWeight:a?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:a?null:"#4abe84"}})}},theme:function(e){return Object(l.a)(Object(l.a)({},e),{},{borderRadius:4})}}))}},667:function(e,t,n){"use strict";var a=n(659),l=n(1),o=n.n(l),c=n(660),i=(n(664),n(56)),r=n(19);t.a=function(e){var t=e.refresh,n=e.status,s=e.icon,y=e.statusDisplay,d=void 0!==y&&y,k=e.title,u=void 0===k?"":k,m=e.cancelButtonTitle,g=void 0===m?"Cancel":m,v=e.actionButtonTitle,f=void 0===v?"Submit":v,p=e.cancelButtonClass,b=void 0===p?"bg-background":p,h=e.actionButtonClass,E=void 0===h?"bg-background":h,x=e.actionButtonEvent,w=void 0===x?null:x,N=e.colorText,A=void 0===N?"red":N,j=e.msg1,C=void 0===j?null:j,O=e.msg2,S=void 0===O?null:O,L=e.onCloseFunction,M=void 0===L?null:L,P=e.refreshOnCancel,B=void 0===P||P,T=e.setIsSuccess,U=Object(i.c)();500===(null===n||void 0===n?void 0:n.code)&&(s="em-pensive",u="Server Error",g="Try Again",f="Contact Administration",A="red",C=null===n||void 0===n?void 0:n.message,S="Please try again or contact Sayurbox administration for further information.",b="bg-green",d=!0,B=!0),408===(null===n||void 0===n?void 0:n.code)&&(s="em-alarm_clock",u="Request Timeout",g="Try Again",f="Contact Administration",A="red",C=null===n||void 0===n?void 0:n.message,S="Please try again or contact Sayurbox administration for further information.",b="bg-green",d=!0,B=!0),400===(null===n||void 0===n?void 0:n.code)&&(s="em-alarm_clock",u="Server Error",g="Try Again",f="Contact Administration",A="red",C=null===n||void 0===n?void 0:n.message,S="Please try again or contact Sayurbox administration for further information.",b="bg-green",d=!0,B=!1),404===(null===n||void 0===n?void 0:n.code)&&(u="Something wrong with the application",g="Try Again",f="Contact Administration",A="red",C=null===n||void 0===n?void 0:n.message,S="Please try again or contact Sayurbox administration for further information.",b="bg-green",d=!0,B=!1);var F=Object(l.useState)(d),I=Object(a.a)(F,2),R=I[0],H=I[1];return Object(l.useEffect)((function(){H(d)}),[d]),Object(l.useEffect)((function(){}),[R]),window.onkeydown=function(e){return 27===e.keyCode?H(!1):null},o.a.createElement(c.B,{className:"".concat(R?null:"d-none")},o.a.createElement(c.f,null,o.a.createElement(c.s,{show:R,closeOnBackdrop:!1,onClose:function(){H(!1),"function"===typeof T&&T({success:null,name:null}),U({type:r.k,status:null}),M&&M()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},o.a.createElement("div",{className:"d-flex flex-row-reverse"},o.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){H(!1),"function"===typeof T&&T({success:null,name:null}),U({type:r.k,status:null}),M&&M()}})),o.a.createElement(c.v,{className:"px-5 pt-5 border-none"},o.a.createElement(c.w,{className:"text LatoBold ".concat(A)},u," ",o.a.createElement("span",null,o.a.createElement("i",{className:"em ".concat(s)})))),o.a.createElement(c.t,{className:"px-5 py-0"},o.a.createElement("p",{className:"text mb-2"},C),o.a.createElement("p",{className:"text"},S)),o.a.createElement(c.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},g?o.a.createElement(c.d,{className:"".concat(b," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:function(){B?"function"===typeof t?t():function(e){var t=e.refresh;!0===(void 0===t||t)&&window.location.reload(!1)}({refresh:!0}):function(e){var t=e.setShow,n=e.parentOncCloseFunction;t(!1),n&&n()}({setShow:H,parentOncCloseFunction:M}),U({type:r.k,status:null})}},g):null,f?o.a.createElement(c.d,{className:"".concat(E," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:function(){w?(w(),H(!1)):H(!1)}},f):null," "))))}},679:function(e,t,n){"use strict";var a=n(659),l=n(1),o=n.n(l),c=n(56),i=n(684),r=n.n(i),s=n(685),y=n.n(s),d=n(686),k=n.n(d),u=n(687),m=n.n(u),g=n(688),v=n.n(g),f=n(689),p=n.n(f),b=n(690),h=n.n(b),E=n(691),x=n.n(E),w=n(692),N=n.n(w),A=n(670),j=(n(693),function(e){var t,n,i=e.isMulti,r=e.options,s=e.onChange,d=e.moduleName,u=Object(l.useState)(!1),g=Object(a.a)(u,2),f=g[0],b=g[1],E=Object(A.d)().dimention,w=E<=500,j=Object(l.useRef)(null),C=null===(t=document)||void 0===t?void 0:t.getElementById("c-filter"),O=null===C||void 0===C?void 0:C.getBoundingClientRect();Object(l.useEffect)((function(){O=null===C||void 0===C?void 0:C.getBoundingClientRect()}),[f]);var S=(null===(n=O)||void 0===n?void 0:n.top)+(w?-70:function(e,t,n){switch(E){case 1024:return-250;default:return"waste"===e||"ADD_SKU"===e?-100:-220}}(d));Object(l.useEffect)((function(){function e(e){f&&j.current&&!j.current.contains(e.target)&&b(!f)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[j,f]);var L=f?280:0,M=f?1:0,P=w?"1rem":E>=1024&&E<1280?-180:E>=1280&&E<1366?-80:E>=1366&&E<1396?-50:E>=1396&&E<1440?-90:E>=1440&&E<1536?-70:E>=1536&&E<1600?-50:E>=1600&&E<1920?-70:E>=1920&&E<1930?-50:void 0,B=!!w&&"1rem",T=w?"fixed":"absolute",U=w?"100% !important":250,F=Object(l.useState)(""),I=Object(a.a)(F,2),R=I[0],H=I[1],D=Object(l.useState)(i?[]:{}),K=Object(a.a)(D,2),z=K[0],V=K[1],W=Object(l.useState)(!1),J=Object(a.a)(W,2),Q=J[0],Y=J[1],G=function(e){var t=e.options,n=e.item,a=e.setSelected,l=e.reset,o=null===t||void 0===t?void 0:t.map((function(e){return e}));a(o=(o=o.map((function(e){return n===e.value&&(e.selected=!e.selected),l&&(e.selected=!1),e}))).filter((function(e){return e.selected}))),"function"===typeof s&&s(o)},X=Object(c.d)((function(e){return e.targetRepack})),Z=Object(c.d)((function(e){return e.stockMovementTargetRepack})),q=!!(X&&"repack"===d||Z&&"stockMovement"===d),_=[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"},{target:!0,value:"tasc",label:"Most Completion Target"},{target:!0,value:"tdesc",label:"Least Completion Target"}];return o.a.createElement("div",{className:"position-sticky"},o.a.createElement("div",null,o.a.createElement("img",{className:"cursor-pointer",id:"c-filter",src:i?(null===z||void 0===z?void 0:z.length)?m.a:v.a:(null===z||void 0===z?void 0:z.label)?y.a:k.a,onClick:function(){return b(!0)}})),o.a.createElement("div",{ref:j,className:"text mt-3 rounded shadow py-2",style:{zIndex:1040,transition:"max-height ease-in",transitionProperty:"all",transitionDuration:"0.15s",maxHeight:L,opacity:M,minWidth:U,backgroundColor:"white",top:S,position:T,left:P,right:B,overflow:"hidden"}},o.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar ".concat(i?"d-none":null)},!i&&(null===_||void 0===_?void 0:_.map((function(e){var t=e.label===Q,n=t?Q===e.label?"green":"text":"emptyTextField";return o.a.createElement("div",{onMouseEnter:function(){return Y(e.label)},onMouseLeave:function(){return Y(null)},onClick:function(){return function(e){V(e),"function"===typeof s&&s(e),b(!1)}(e)},style:{minHeight:40,backgroundColor:"white"},className:"".concat(e.target?q?null:"d-none":null," filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center px-3 ").concat((null===e||void 0===e?void 0:e.label)===(null===z||void 0===z?void 0:z.label)&&"LatoBold text"," ").concat(n)},e.label)})))),o.a.createElement("div",{className:"px-2 ".concat(i?null:"d-none")},o.a.createElement("div",{className:"border rounded w-100 d-flex justify-content-between align-items-center pl-3 pr-2",style:{height:40}},o.a.createElement("input",{id:"filter-input",value:R,placeholder:"Search Category",onChange:function(e){return H(e.target.value)},type:"text",className:"plain-input m-0 p-0",style:{color:"#969696",fontSize:"1rem"}}),o.a.createElement("div",{className:"green"},o.a.createElement("img",{src:(null===z||void 0===z?void 0:z.length)?p.a:h.a,alt:"delete icon",className:"cursor-pointer",onClick:function(e){return G({options:r,setSelected:V,reset:!0})}})))),o.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar"},i&&(null===r||void 0===r?void 0:r.filter((function(e){return(null===R||void 0===R?void 0:R.length)?e.label.toLowerCase().includes(R.toLowerCase())?e:void 0:e})).sort((function(e,t){return function(e,t){return e.selected&&!t.selected?-1:!e.selected&&t.selected?1:0}(e,t)})).map((function(e,t){var n,a=!!(null===(n=z.filter((function(t){return(null===t||void 0===t?void 0:t.value)===(null===e||void 0===e?void 0:e.value)})))||void 0===n?void 0:n.length),l=a?1:0,c=i?a?Q===t?"green":"text":"emptyTextField":z?"text":"emptyTextField";return o.a.createElement("div",{onMouseEnter:function(){return Y(t)},onMouseLeave:function(){return Y(null)},onClick:function(){return G({options:r,item:e.value,setSelected:V})},style:{minHeight:40,backgroundColor:"white"},className:"filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center ".concat(c)},o.a.createElement("table",{width:100,style:{tableLayout:"fixed"}},o.a.createElement("tr",{width:100},o.a.createElement("td",{width:10},o.a.createElement("img",{style:{opacity:l},className:"mr-3",src:Q===t&&a?x.a:N.a})),o.a.createElement("td",{width:90},e.label))))}))))))});t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,i=(e.textSearch,e.searchHandler),s=void 0===i?null:i,y=e.barcodeScanner,d=e.filter,k=void 0===d?"":d,u=(e.width,e.className,e.filterDropdown),m=void 0===u?null:u,g=(e.value,e.showScanner),v=e.areaId,f=e.setAreaId,p=e.areaDestination,b=e.setAreaDestination,h=e.moduleName,E=e.setSearch,x=e.category,w=e.setCategory,N=e.setSortBy,A=e.hideFilter,C=Object(l.useState)(),O=Object(a.a)(C,2),S=O[0],L=void 0!==S&&S,M=O[1],P="",B="";L?(P="Show Filter",B=""):(P="Hide Filter",B=o.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));var T=Object(l.useState)(""),U=Object(a.a)(T,2),F=U[0],I=U[1],R=Object(c.d)((function(e){return e.categoryList}));return o.a.createElement("div",{className:"search-bar w-100"},o.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},o.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},o.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),o.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},o.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:n,onChange:function(e){I(e.target.value),"function"===typeof E&&E(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&s(F)}(e)}}))),o.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3 ".concat(A?"d-none":null)},o.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"}),o.a.createElement("div",{className:"mr-md-2"},o.a.createElement(j,{moduleName:h,selectedValue:x,options:R,onChange:function(e){return N(e)}})),o.a.createElement("div",{className:""},o.a.createElement(j,{moduleName:h,isMulti:!0,selectedValue:x,options:R,onChange:function(e){return w(e)}})),o.a.createElement("div",{className:"mr-0 mr-md-2"},o.a.createElement("img",{onClick:function(){return function(e){var t=e.areaId,n=e.areaDestination,a=e.setAreaId,l=e.setAreaDestination,o=e.barcodeScanner,c=e.moduleName;if("stockMovement"!==c)return(null===t||void 0===t?void 0:t.value)?void o(!0):void("function"===typeof a&&a("empty"));if("stockMovement"===c){if(!(null===t||void 0===t?void 0:t.value))return void a("empty");if(!(null===n||void 0===n?void 0:n.value))return void l("empty");if((null===t||void 0===t?void 0:t.value)===(null===n||void 0===n?void 0:n.value))return void l("empty");"function"===typeof o&&o(!0)}}({areaId:v,areaDestination:p,setAreaId:f,setAreaDestination:b,barcodeScanner:y,moduleName:h})},className:"ml-2 pointer ".concat(g?null:"d-none"),src:r.a}))),o.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},k?o.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:function(){return function(e){var t=e.filterShow;(0,e.setFilterShow)(!t)}({filterShow:L,setFilterShow:M})}},o.a.createElement("div",{className:"filter-text"},P)," ",o.a.createElement("span",{className:"px-3"},o.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),B)):null,o.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:function(){return s(F)}},"Search"))),o.a.createElement("div",null,L?null:o.a.createElement("div",{className:"w-100"}," ",m," ")))}},684:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7VZNTsJQEJ5XSsKG2BULVjYBEnYcwSPACcQTIB5A8QTCCaonUI/gBawuSPhr6QYWbNp0S2j9BmlDarGxwoKEL3np67y+75uZvsw8MZ1OldVqpRHRBYZC37A8z2tUKpUP+iN83yfLslRwvm/xObBr5XL5Rl4ul11JkuqRfeyEQykBTgWczpagIoRoj8djV0wmE5sN+EitVqsW7Rkc8WAwULPZrIlXWwq82CWGlJ8bhqGNRqPaLkJew3jQdV2JriMyyuVy1uZVkSgBSG0NpM1MJtMKbCBvIjOXPJ/P5wKPa6Swlc/n60l8UlxEw+Ew3IjD88NrkPMh02gHFovF2inmShTEv+wgmmdE0KQUmM1m5Lpug52Cs7eJgv8FDkdsVg4mmIST4EnwiAVRzmw6AOSoAbWTK41eKpVeKQUKhQKXNs1xHA9cb4mCm67R+4WTK8kVSpcftQdZYVHgKW6vTAlAqXpBfeXW9BjYcBMI58Vi0Udj7aIN+fjuM44DkYbzsAEjjSpg0R7APdI0TYEsrMWYG08DS7aAdx14dxfZs+87zXoJnD1JluUuJpzv7TtM6jtNv9/nFneGKWfO3wwbjtwjgPYXKl76O3Z5GQ4AAAAASUVORK5CYII="},685:function(e,t,n){e.exports=n.p+"static/media/ascOn.cccbb7d5.svg"},686:function(e,t,n){e.exports=n.p+"static/media/ascOff.d8a8c79c.svg"},687:function(e,t,n){e.exports=n.p+"static/media/categoryOn.5bc834d8.svg"},688:function(e,t,n){e.exports=n.p+"static/media/categoryOff.ffb704a2.svg"},689:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOn.fc3f380e.svg"},690:function(e,t,n){e.exports=n.p+"static/media/deleteCategoryOff.fc0332a7.svg"},691:function(e,t,n){e.exports=n.p+"static/media/checkHover.4cfe8e6d.svg"},692:function(e,t,n){e.exports=n.p+"static/media/checkNotHover.a429f43c.svg"},693:function(e,t,n){}}]);
//# sourceMappingURL=34.8c5fa5fb.chunk.js.map