(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[12],{657:function(e,t,a){},662:function(e,t,a){},668:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return p}));var n=a(653),o=a(1),l=a.n(o),c=a(654),s=(a(662),a(56)),r=a(659),i=a(687),m=function(e){var t=e.e,a=e.state,n=e.isCaptcha,o=e.setIsValidated,l=e.setIsType,c=e.isType,s=t.key;if(["ArrowRight","ArrowLeft","ArrowUp","ArrowDown","Tab"].includes(s))return 0;"Backspace"===s?1!==a&&document.getElementById("t"+(parseInt(a)-1)).focus():3!==a&&document.getElementById("t"+(parseInt(a)+1)).focus();var i=Object(r.a)(c);i[a]="Backspace"===s?"":s.toUpperCase();if(!"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890".split("").includes(s.toUpperCase())&&""!=i[a])return 0;document.getElementById("t"+parseInt(a)).value=i[a],l(i);var m=!0;n.map((function(e,t){0!=t&&i[t+1]!=n[t]&&(m=!1)})),o(m)},d=a(658),u=function(e){var t,a,n,s=e.moduleEntry,r=e.confirmation,m=e.setConfirmation,u=e.save,p=e.submit,b=e.isSuccess,f=e.isLoading,v=e.moveAll,h=e.setAction,E=e.moduleName,g=e.noSkuChecking,y=e.singleViewData,w=document.documentElement.clientHeight-300,x="Submit";"save"===r.name&&(x="Save"),Object(o.useEffect)((function(){b&&m({show:!1,name:null})}),[b]),window.onkeydown=function(e){return 27===e.keyCode?m({show:!1,name:null}):null},Object(o.useEffect)((function(){h(r.name)}),[r]);var N=y&&!v?y:s,k=null===N||void 0===N||null===(t=N.jobPost)||void 0===t?void 0:t.areaDestinationName,C=null===N||void 0===N||null===(a=N.jobPost)||void 0===a?void 0:a.warehouseDestinationName,S=null===N||void 0===N||null===(n=N.jobPost)||void 0===n?void 0:n.areaName,j=function(e,t,a){if(null===e||void 0===e?void 0:e.length){var n=[];e.map((function(e){e.poList.map((function(o){o.itemList.map((function(o){var l,c,s,r,m,d,u=o.qty,p=o.grade,b=Object(i.a)(u)?parseInt(u):u?parseFloat(u):0,f=t?e.skuName:"waste"===a?(null===(l=o.wasteType)||void 0===l?void 0:l.label)?null===(c=o.wasteType)||void 0===c?void 0:c.label:e.skuName:null===p||void 0===p?void 0:p.label,v="waste"===a?"Semi Waste"===(null===(s=o.wasteType)||void 0===s?void 0:s.label)||"Waste"===(null===(r=o.wasteType)||void 0===r?void 0:r.label):"Waste"===(null===p||void 0===p?void 0:p.label)||"Semi Waste"===(null===p||void 0===p?void 0:p.label),h=t?e.unitOfMeassures:"gram"===(null===p||void 0===p?void 0:p.uom)?"kg":null===p||void 0===p?void 0:p.uom,E={sku:f,qty:b,uom:h,wqty:0,swqty:0};v&&(E.qty=0,E.sku=e.skuName),("waste"===a?"Waste"===(null===(m=o.wasteType)||void 0===m?void 0:m.label):"Waste"===(null===p||void 0===p?void 0:p.label))&&(E.wqty=b),("waste"===a?"Semi Waste"===(null===(d=o.wasteType)||void 0===d?void 0:d.label):"Semi Waste"===(null===p||void 0===p?void 0:p.label))&&(E.swqty=b);var g,y,w=n.findIndex((function(t){return(null===t||void 0===t?void 0:t.sku)===(v?e.skuName:f)}));("waste"!==a&&(-1===w&&n.push(E),-1!==w&&(v||(n[w].qty+=b),"Semi Waste"===(null===p||void 0===p?void 0:p.label)&&(n[w].swqty+=b),"Waste"===(null===p||void 0===p?void 0:p.label)&&(n[w].wqty+=b))),"waste"===a)&&(-1===w&&n.push(E),-1!==w&&(v||(n[w].qty+=b),"Semi Waste"===(null===(g=o.wasteType)||void 0===g?void 0:g.label)&&(n[w].swqty+=b),"Waste"===(null===(y=o.wasteType)||void 0===y?void 0:y.label)&&(n[w].wqty+=b)))}))}))}));var o=e.length?e[0].skuName:"No SKU",l=n.findIndex((function(e){return e.sku===o}));return n.map((function(e){-1!==l&&("Waste"===e.sku&&(n[l].wqty=e.qty),"Semi Waste"===e.sku&&(n[l].swqty=e.qty))})),n}}(null===N||void 0===N?void 0:N.jobPost.list,g,E);return l.a.createElement(c.B,{className:r.show?null:"d-none"},l.a.createElement(c.f,null,l.a.createElement(c.s,{show:r.show,closeOnBackdrop:!1},l.a.createElement(c.v,{className:"px-4 pt-5 border-none"},l.a.createElement(c.w,{className:"text LatoBold"},"Confirmation ",l.a.createElement("span",null,l.a.createElement("i",{className:"em em-pray"}))),l.a.createElement("label",{tabIndex:"0",onKeyDown:function(e){return 13===e.keyCode&&m({show:!1,name:null})},onClick:function(){return m({show:!1,name:null})},className:"sku-item iconU-modalClose"})),l.a.createElement(c.t,{className:"px-4 py-0",style:{minHeight:w}},l.a.createElement("p",{className:"text mb-2"},l.a.createElement("span",null,"Are you sure want to ".concat("Waste"==S?"update":"send"," this Item ")),l.a.createElement("span",{className:" ".concat(k?null:"d-none")}," from"),l.a.createElement("span",{className:"green ".concat(k?null:"d-none")}," ".concat(S," ")),l.a.createElement("span",null,"outbound"==E?"from":"repack"===E?"":"to"," "),l.a.createElement("span",{className:"green ".concat("repack"!==E?null:"d-none")}," ".concat("stockTransfer"===E?C:k||S," "))),l.a.createElement("p",{className:"text"},"Please double check this list, this record will store to database."),l.a.createElement("div",{style:{minHeight:w,maxHeight:w,overflow:"auto",border:"1px solid var(--lineGrey)"}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",{style:{borderBottom:"1px solid var(--lineGrey)"}},l.a.createElement("th",{style:{color:"var(--emptyTextField)"}},"SKU List"),l.a.createElement("th",{style:{textAlign:"right",color:"var(--emptyTextField)"}},"Weight"),l.a.createElement("th",{style:{textAlign:"right",color:"var(--emptyTextField)"}},"Semi Waste"),l.a.createElement("th",{style:{textAlign:"right",color:"var(--emptyTextField)"}},"Waste"))),l.a.createElement("tbody",null,null===j||void 0===j?void 0:j.map((function(e){return l.a.createElement("tr",{style:{borderBottom:"1px solid var(--lineGrey)"}},l.a.createElement("td",{style:{maxWidth:"160px"}},e.sku),l.a.createElement("td",{className:"text-right py-3",style:{textAlign:"right"}},"".concat(Object(d.s)(null===e||void 0===e?void 0:e.qty))),l.a.createElement("td",{className:"text-right text-nowrap",style:{textAlign:"right"}},l.a.createElement("span",{className:"text-nowrap"},"".concat(Object(d.s)(null===e||void 0===e?void 0:e.swqty)," "))),l.a.createElement("td",{className:"text-right",style:{textAlign:"right"}},"".concat(Object(d.s)(null===e||void 0===e?void 0:e.wqty))))}))))),l.a.createElement("div",{className:"px-0 pb-5 pt-0 justify-content-start border-none"},l.a.createElement(c.d,{tabIndex:"0",onKeyDown:function(e){return 13===e.keyCode&&m({show:!1,name:null})},className:"bg-background sku-item text no-shadow px-5 mt-4 mb-0 mx-0",onClick:function(){return m({show:!1,name:null})}},"Cancel"),l.a.createElement(c.d,{tabIndex:"0",onKeyDown:function(e){return 13===e.keyCode&&(f?null:"save"===r.name?u():p())},className:"".concat(f?"bg-softGreen text":"bg-green text-white"," no-shadow px-5 mt-4 sku-item mb-0 ml-3 mr-0"),onClick:function(){return f?null:"save"===r.name?u():p()}},f?"Processing...":x)," ")))))},p=function(e){for(var t=e.show,a=void 0!==t&&t,r=e.setIsShowModal,i=e.submit,d=e.submitText,u=void 0===d?"Submit":d,p="",b="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",f=b.length,v=[],h=0;h<3;h++){var E=b.charAt(Math.floor(Math.random()*f));p+=E,v.push(E)}Object(s.c)();var g=Object(s.d)((function(e){return e.csvFileName})),y=l.a.useState(v),w=Object(n.a)(y,2),x=w[0],N=(w[1],l.a.useState(p)),k=Object(n.a)(N,2),C=k[0],S=(k[1],l.a.useState(!1)),j=Object(n.a)(S,2),D=j[0],O=j[1],I=l.a.useState("Submit"),T=Object(n.a)(I,2),B=(T[0],T[1],l.a.useState([])),W=Object(n.a)(B,2),L=W[0],A=W[1];return Object(o.useEffect)((function(){!0===a&&(document.getElementById("t1").value="",document.getElementById("t2").value="",document.getElementById("t3").value="")}),[a]),l.a.createElement(c.B,{className:a?null:"d-none"},l.a.createElement(c.f,null,l.a.createElement(c.s,{show:a,onClose:function(){r(!1)},size:"lg",style:{height:"400px"}},l.a.createElement(c.v,{className:"px-5 pt-5 border-none"},l.a.createElement(c.w,{className:"text LatoBold"},"Confirmation")),l.a.createElement(c.t,{className:"px-5 py-0"},l.a.createElement("p",{className:"text mb-2"},"Are you sure want to upload ",l.a.createElement("span",{className:"green"},"Edited")," ",g,"?"),l.a.createElement("p",{className:"text"},"Once uploaded this record will store to databases."),l.a.createElement("p",{className:"text mb-2"},"Please type \u2018",C,"\u2019 on the Box to confirm upload file."),l.a.createElement("div",{className:"captcha-box"},l.a.createElement("input",{autocomplete:"off",onKeyUp:function(e){m({e:e,state:1,isCaptcha:x,setIsValidated:O,setIsType:A,isType:L})},id:"t1",type:"text",style:{textTransform:"uppercase"},className:"captcha-input",maxLength:"1",placeholder:x[0]}),l.a.createElement("input",{autocomplete:"off",onKeyUp:function(e){m({e:e,state:2,isCaptcha:x,setIsValidated:O,setIsType:A,isType:L})},id:"t2",type:"text",style:{textTransform:"uppercase"},className:"captcha-input ml-0 mr-0",maxLength:"1",placeholder:x[1]}),l.a.createElement("input",{autocomplete:"off",onKeyUp:function(e){m({e:e,state:3,isCaptcha:x,setIsValidated:O,setIsType:A,isType:L})},id:"t3",type:"text",style:{textTransform:"uppercase"},className:"captcha-input",maxLength:"1",placeholder:x[2]}))),l.a.createElement(c.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},l.a.createElement(c.d,{className:"bg-background text no-shadow px-5 mt-4 mb-0 mx-0",onClick:function(){r(!1)}},"Cancel"),l.a.createElement(c.d,{className:(D?"bg-green":"bg-emptyTextField disabled")+" no-shadow px-5 mt-4 mb-0 ml-3 mr-0",onClick:function(){i(),O(!1)}},u)," "))))}},675:function(e,t,a){"use strict";var n=a(1),o=a.n(n),l=a(654);a(662);t.a=function(e){var t=e.discard,a=e.moduleEntry,n=e.close,c=e.discardEntry,s=e.module;document.documentElement.clientHeight;return o.a.createElement(l.B,{className:t?null:"d-none"},o.a.createElement(l.f,null,o.a.createElement(l.s,{show:t,size:"lg",closeOnBackdrop:!1},o.a.createElement("div",{className:"d-flex flex-row-reverse pr-3 pt-3 mt-1"},o.a.createElement("i",{onClick:function(){return n()},className:"iconU-modalClose"})),o.a.createElement(l.v,{className:"px-5 pb-4 mb-2 pt-4 mt-2 border-none"},o.a.createElement(l.w,{className:"red LatoBold"},"Discard? ",o.a.createElement("span",null,o.a.createElement("i",{className:"em em-astonished"})))),o.a.createElement(l.t,{className:"px-5 pb-5 mb-4 py-0"},o.a.createElement("p",{className:"text mb-3 h5 respon-txt"},"Are you sure you want to discard ",o.a.createElement("span",{className:"green"}," ".concat(null===a||void 0===a?void 0:a.jobPost.list.length," selected SKU ").concat((null===a||void 0===a?void 0:a.jobPost.list.length)>1?"(s)":"")),"from this",o.a.createElement("div",{className:"green h5 pt-2 respon-txt"},s)),o.a.createElement("br",null),o.a.createElement(l.d,{onClick:function(){return c(null===a||void 0===a?void 0:a.jobPost.id)},className:"bg-background text no-shadow pl-5 pr-5 mr-3 LatoBlack"},"Discard"),o.a.createElement(l.d,{onClick:function(){return n()},className:"bg-green no-shadow pl-4 pr-4 LatoBlack"},"Don't Discard")," "))))}},680:function(e,t,a){"use strict";var n=a(1),o=a.n(n);t.a=function(e){var t=e.isEmpty,a=e.entryListIdx,n=e.poListIdx,l=(e.wmsPoSkuInfoId,e.uom),c=(e.ripeness,e.inputWidth),s=e.values,r=e.onChange,i=e.showTitle,m=e.title,d=e.toCompare,u="gram"===l||"kg"===l||"KG"===l;return o.a.createElement("div",{className:" ".concat(c," mb-3 mr-3 ").concat(u?null:"d-none")},o.a.createElement("div",{className:" pb-1 LatoBold ".concat(i?null:"d-none")},m),o.a.createElement("div",{className:"".concat(t?"border-red":"border"," rounded border-soft-green w-100 bg-white d-flex align-items-center input-height px-2 mr-3")},o.a.createElement("input",{id:"wgt_".concat(n,"_").concat(a),maxLength:"12",autoComplete:"off",type:"text",className:"w-100 plain-input",value:s,name:d?"weightToCompare":"weight",onChange:function(e){return r(e)}}),o.a.createElement("div",{className:"font-soft-grey"},l?l.toUpperCase():"")))}},681:function(e,t,a){e.exports=a.p+"static/media/trash.121a7b10.png"},686:function(e,t,a){},688:function(e,t,a){"use strict";var n=a(653),o=a(1),l=a.n(o),c=a(654),s=(a(657),a(114)),r=function(e){var t=e.confirmation,a=e.setIsSaved,n=e.submit,o=e.setLocalEntryData,l=e.moveAll;"submit"===t.name?(l&&o(),n(),a()):a()};t.a=function(e){var t,a=e.isSaved,i=e.moduleName,m=e.totalSku,d=e.setIsSaved,u=e.confirmation,p=e.setConfirmation,b=e.submit,f=e.action,v=e.moduleEntry,h=e.complete,E=e.setLocalEntryData,g=e.moveAll,y=e.status,w={success:{header:"submit"===u.name?"Success ! ":"Saved !",headerIcon:"submit"===u.name?"em em-tada":"em em-camera_with_flash",textColor:"green",date:Object(s.b)({}),sku:m?"".concat(m," ").concat(m>1?"SKU(s)":"SKU"):"",module:i,status:"".concat("submit"===u.name?"Submitted":"Saved"," successfully"),button:"bg-green",buttonText:"Got It !"},failed:{header:"".concat("submit"===u.name?"Submit":"Save"," Failed"),headerIcon:"em em-anguished",textColor:"red",date:Object(s.b)({}),sku:"",module:"Sorry ",status:"item not recorded.",button:"bg-red",buttonText:"Try Again"}},x=a?w.success:w.failed,N=Object(o.useState)(!1),k=Object(n.a)(N,2),C=k[0],S=k[1],j=!0===a||!1===a,D=document.getElementById("btn_is_saved");D&&D.focus();var O=C?"iconU-arrowTop":"iconU-arrowBottom",I=a||C?1:0,T=C?"Hide Message":"Show Message";return l.a.createElement(c.B,{onKeyDown:function(e){return 27===e.keyCode&&alert()},className:j?null:"d-none"},l.a.createElement(c.f,null,l.a.createElement(c.s,{className:"".concat(a?null:"popup-saved"),show:j,onClose:function(){a&&r({confirmation:u,setIsSaved:d,submit:b}),a||d()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3",closeOnBackdrop:!1},l.a.createElement("div",{className:"d-flex flex-row-reverse"},l.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){return a?r({confirmation:u,setIsSaved:d,submit:b}):d()}})),l.a.createElement(c.t,{className:"px-5 mt-3 py-0"},l.a.createElement("label",{className:"".concat(x.textColor," LatoBold mr-2 h5 mb-3")},x.header)," ",l.a.createElement("span",null,l.a.createElement("i",{className:"".concat(x.headerIcon)})),l.a.createElement("div",{className:"mr-1 h5 mb-3"},"Entries ".concat(x.status)),l.a.createElement("div",{onClick:function(){return S(!C)},className:"d-flex align-items-center mr-1 mb-3 error-message pointer ".concat(a?"d-none":null)},l.a.createElement("div",{className:"mr-2 ".concat(O)}),l.a.createElement("div",{className:"green"},T)),l.a.createElement("div",{style:{backgroundColor:"#F5F7FA",opacity:I},className:"w-100 border rounded px-3 pt-3 pb-3 mb-3"},l.a.createElement("div",{className:"h5 mb-3 ".concat(a?null:"d-none")},x.date),l.a.createElement("div",{className:"mb-0"},l.a.createElement("label",{className:"mr-1 ".concat(a?null:"d-none")},"".concat(function(e){var t=e.moduleEntry;e.complete;if(null===t||void 0===t?void 0:t.jobPost){var a=null===t||void 0===t?void 0:t.jobPost,n=a.areaDestinationName,o=a.areaName;return n?" ".concat(o," reefer ").concat(n," - "):" ".concat(o," - ")}}({moduleEntry:v,complete:h})," ").concat(x.sku)),l.a.createElement("div",{className:"mr-1 ".concat(a?"d-none":null)},l.a.createElement("div",{style:{wordWrap:"break-word",opacity:I,height:!C&&0},className:"mr-1 "},"".concat(null===y||void 0===y||null===(t=y.message)||void 0===t?void 0:t.toString()))))),l.a.createElement("div",{className:"mb-2 h5 ".concat("submit"===u.name?"d-none":null)},"Please continue your work"),l.a.createElement("div",{className:"w-100 d-flex "},l.a.createElement(c.d,{onClick:function(){return d()},className:"text no-shadow px-5 mr-4 mb-3 ".concat("bg-softGreen ".concat(a?"d-none":null))},"Cancel"),l.a.createElement(c.d,{id:"btn_is_saved",tabIndex:"0",onClick:function(){return a?r({confirmation:u,setIsSaved:d,submit:b,setLocalEntryData:E,moveAll:g}):function(e){var t=e.setIsSaved,a=e.setConfirmation,n=e.action;e.setLocalEntryData;t(),a({show:!0,name:n})}({setIsSaved:d,setConfirmation:p,action:f})},className:"text-white sku-item no-shadow px-5 mb-3 ".concat(x.button)},x.buttonText))))))}},695:function(e,t,a){"use strict";var n=a(1),o=a.n(n),l=a(114),c=a(654),s=(a(657),{header:"Complete All !",headerIcon:"em em-anger",textColor:"red",date:"You are  required to update all entries on the list.",sku:"",module:"",status:"Check several entries left.",button:"bg-green",buttonText:"Check Entries"}),r={header:"Something wrong!",headerIcon:"em em-thinking_face",textColor:"red",date:"The threshold calculation ratio should be between -20% until 50%",sku:"",module:"",status:"Please check again and edit the Weight field or Pack field?",button:"bg-green",buttonText:"Check Entries"},i={header:"Something wrong!",headerIcon:"em em-thinking_face",textColor:"red",date:"Add Weight should not exceed Initial Weight",sku:"",module:"",status:"Please check again and edit the Weight field or Pack field?",button:"bg-green",buttonText:"Check Entries"};t.a=function(e){var t,a,n,m,d,u,p,b=e.isRequired,f=e.setIsRequired,v=e.moduleName,h=e.module,E=(e.totalSku,e.invalidThreshold),g=e.setInvalidThreshold,y=s;(!b&&E||b&&E)&&(y=r),"stockTake"!==v&&Object(l.f)(h)&&(y=i);var w=document.getElementById("btn_is_required");return w&&w.focus(),o.a.createElement(c.B,{className:b||E?null:"d-none"},o.a.createElement(c.f,null,o.a.createElement(c.s,{show:b||E,onClose:function(){f(!1),E&&g(!1)},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3",closeOnBackdrop:!1},o.a.createElement("div",{className:"d-flex flex-row-reverse"},o.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:function(){f(!1),E&&g(!1)}})),o.a.createElement(c.t,{className:"px-5 mt-3 py-0"},o.a.createElement("label",{className:"".concat(null===(t=y)||void 0===t?void 0:t.textColor," LatoBold mr-2 mb-5 h5")},null===(a=y)||void 0===a?void 0:a.header)," ",o.a.createElement("span",null,o.a.createElement("i",{className:"".concat(null===(n=y)||void 0===n?void 0:n.headerIcon)})),o.a.createElement("div",{style:{backgroundColor:"#F5F7FA"},className:"w-100 border rounded px-3 pt-4 pb-3 mb-4"},o.a.createElement("div",{className:"h5 mb-3 ".concat(b||E?null:"d-none")},null===(m=y)||void 0===m?void 0:m.date),o.a.createElement("div",{className:"mb-0"},o.a.createElement("label",{className:"mr-1 h5"},"".concat(null===(d=y)||void 0===d?void 0:d.status))))),o.a.createElement(c.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none d-flex mt-2"},o.a.createElement(c.d,{onClick:function(){f(!1),E&&g(!1)},className:"text no-shadow ".concat("bg-softGreen ".concat(b?"d-none":null))},"Cancel"),o.a.createElement(c.d,{id:"btn_is_required",tabIndex:"0",onClick:function(){f(!1),E&&g(!1)},className:"text-white no-shadow ".concat(null===(u=y)||void 0===u?void 0:u.button)},null===(p=y)||void 0===p?void 0:p.buttonText)))))}},706:function(e,t,a){"use strict";var n=a(653),o=a(1),l=a.n(o),c=a(114),s=a(712),r=(a(710),a(711),a(686),a(4));var i=function(e){var t=e.showDate,a=e.selectDate,c=e.setShowDate;document.documentElement.clientWidth;var i=Object(o.useState)({startDate:new Date,endDate:new Date,key:"selection"}),m=Object(n.a)(i,2),d=m[0],u=m[1],p=Object(o.useState)(new Date),b=Object(n.a)(p,2),f=b[0],v=b[1],h=Object(o.useState)(),E=Object(n.a)(h,2),g=E[0],y=E[1],w=g?"text":"bg-green text-white",x=g?"bg-green text-white":"text",N=Object(o.useRef)(null);!function(e){var t=e.wrapperRef,a=e.showDate,n=e.setShowDate,l=e.selectDate;Object(o.useEffect)((function(){function e(e){a&&t.current&&!t.current.contains(e.target)&&(n(!a),l())}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,a])}({wrapperRef:N,showDate:t,setShowDate:c,selectDate:a}),Object(o.useEffect)((function(){u({startDate:new Date,endDate:new Date,key:"selection"}),v(new Date)}),[g]);return l.a.createElement("div",{ref:N,style:{width:"350px"},className:" mt-5 position-fixed bg-white border border-soft-green rounded z-100 d-flex flex-column justify-content-center ".concat(t?null:"d-none")},l.a.createElement("div",{className:"d-flex justify-content-between w-100 cursor-pointer p-3"},l.a.createElement("div",{className:" border border-soft-green d-flex rounded justify-content-between w-100 cursor-pointer"},l.a.createElement("span",{onClick:function(){return y(!g)},className:" ".concat(w," w-50  ").concat(g?"rounded-left":"rounded"," text-center p-2")},"Single Date"),l.a.createElement("span",{onClick:function(){return y(!g)},className:" ".concat(x," w-50 ").concat(g?"rounded":"rounded-right"," text-center p-2")},"Ranged Date"))),l.a.createElement(s.DateRangePicker,{className:g?null:"d-none",ranges:[d],onChange:function(e){return function(e){var t=e.newdate,a=e.dateRange,n=e.setDateRange,o=Object(r.a)({},a);o.startDate=t.selection.startDate,o.endDate=t.selection.endDate,n(o)}({newdate:e,dateRange:d,setDateRange:u})}}),l.a.createElement(s.Calendar,{className:g?"d-none":null,date:f,onChange:function(e){return v(e)}}),l.a.createElement("div",{className:"d-flex justify-content-between w-100 cursor-pointer p-3"},l.a.createElement("span",{onClick:function(){t&&(a(g?d:f),c())},className:" bg-green text-white w-100 border border-soft-green rounded text-center p-2"},"Confirm")))},m=a(715),d=a.n(m),u=a(716),p=a.n(u);t.a=function(e){var t,a,s=e.moduleEntry,r=e.moduleName,m=e.activeSku,u=e.dispatch,b=Object(o.useState)(),f=Object(n.a)(b,2),v=f[0],h=f[1],E=Object(o.useState)(),g=Object(n.a)(E,2),y=g[0],w=g[1],x=Object(o.useState)(),N=Object(n.a)(x,2),k=N[0],C=N[1],S=Object(o.useState)(),j=Object(n.a)(S,2),D=j[0],O=j[1],I=document.documentElement.clientWidth;return a=(null===(t=a=Object(c.a)({date:y,datePicker:!0}))||void 0===t?void 0:t.startDate)?"".concat(a.startDate," - ").concat(a.endDate):a,Object(o.useEffect)((function(){Object(c.h)({moduleEntry:s,moduleName:r,activeSku:m,dispatch:u,sortBy:v})}),[v,m]),Object(o.useEffect)((function(e){k||Object(c.d)({moduleEntry:s,moduleName:r,activeSku:m,dispatch:u,date:y})}),[y,k,m]),Object(o.useEffect)((function(e){h(),w()}),[D,m]),l.a.createElement("div",{className:"w-25 d-flex justify-content-end"},l.a.createElement("div",{style:{height:40},className:"".concat("repack"===r?"d-none":null," border-soft-green border-top border-bottom border-left m-0 rounded-left green h6 d-flex align-items-center justify-content-center px-2 text-nowrap ").concat(I>500&&y?null:"d-none")},a),l.a.createElement("div",{style:{height:40,minWidth:40},className:"".concat(y?"iconU-modalClose red":"iconU-filterDate emptyTextField"," border-soft-green border ").concat(y?"rounded-right":"rounded"," ").concat("repack"===r?"d-none":null," d-flex align-items-center justify-content-center mr-3 cursor-pointer"),onClick:function(){return y?O((function(e){return!e})):C((function(e){return!e}))}}),l.a.createElement(i,{showDate:k,selectDate:function(e){return w(e)},setShowDate:function(e){return C(e)}}),l.a.createElement("img",{style:{height:40,minWidth:40},src:v?p.a:d.a,onClick:function(){return h(!v)},className:"p-2 border rounded border-soft-green cursor-pointer"}))}},715:function(e,t,a){e.exports=a.p+"static/media/asc.9b60817e.svg"},716:function(e,t,a){e.exports=a.p+"static/media/desc.bec03077.svg"}}]);
//# sourceMappingURL=12.09a1b186.chunk.js.map