(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[15],{116:function(a,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return d})),t.d(e,"e",(function(){return h})),t.d(e,"h",(function(){return v})),t.d(e,"d",(function(){return p})),t.d(e,"i",(function(){return f})),t.d(e,"f",(function(){return m})),t.d(e,"c",(function(){return g})),t.d(e,"g",(function(){return V}));var n=t(65),i=t.n(n),r=t(91),c=t(71),o=t(5),l=t(23),s=t.n(l),u=function(a){var e=a.date,t=a.noTime,n=s()(e||s()()).format("HH:mm"),i=s()(e||s()()).format("DD"),r=s()(e||s()()).format("MMMM"),c=s()(e||s()()).format("YYYY");return"".concat(t?"":"".concat(n," - ")," ").concat(i," ").concat(r," ").concat(c)},d=function(a){var e,t=a.date,n=a.datePicker,i=null===t||void 0===t?void 0:t.startDate,r=null===t||void 0===t?void 0:t.endDate;return i&&n&&(e={startDate:s()(i).format("DD-MMM-YYYY"),endDate:s()(r).format("DD-MMM-YYYY")}),n&&!(null===t||void 0===t?void 0:t.startDate)&&(e=s()(t).format("DD-MMM-YYYY")),t&&!n&&(e=s()(t).format("DD-MM-YYYY")),e},h=function(a){if(a){if(a.toString().split("").includes(".")){var e=a.toString().split(".");return 0===parseInt(e[1])?e[0]:parseFloat(a).toFixed(2)}return parseInt(a)}return 0},v=function(a){var e=a.moduleEntry,t=a.moduleName,n=a.activeSku,i=a.dispatch,r=a.sortBy,l=Object(o.a)({},e);l.jobPost.list[n].poList.sort((function(a,e){return r?e.inboundDate-a.inboundDate:a.inboundDate-e.inboundDate})),i(Object(c.a)({type:"STATUS"},"".concat(t,"EntryData"),l))},p=function(a){var e=a.moduleEntry,t=a.moduleName,n=a.activeSku,i=a.dispatch,r=a.date,l=Object(o.a)({},e);l.jobPost.list[n].poList.map((function(a){var e=s()(a.inboundDate).format("MM-DD-YYYY");if(r){if(null===r||void 0===r?void 0:r.startDate){var t=r.startDate,n=r.endDate,i=s()(t).format("MM-DD-YYYY"),c=s()(n).format("MM-DD-YYYY");(e<i||e>c)&&(a.isHidden=!0),e>=i&&e<=c&&(a.isHidden=!1)}if(!(null===r||void 0===r?void 0:r.startDate)){var o=s()(r).format("MM-DD-YYYY");o&&e!==o&&(a.isHidden=!0),o&&e===o&&(a.isHidden=!1)}}return r||(a.isHidden=!1),a})),i(Object(c.a)({type:"STATUS"},"".concat(t,"EntryData"),l))},f=function(a){var e,t,n,i,r="ECONNABORTED"===(null===a||void 0===a?void 0:a.code)?408:a.code,c=null===a||void 0===a||null===(e=a.response)||void 0===e?void 0:e.status,o="timeout"==(null===a||void 0===a||null===(t=a.message)||void 0===t?void 0:t.split(" "))[0]?400:500,l=r||(c||o),s=null===a||void 0===a||null===(n=a.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.message;return{code:l,message:s||(null===a||void 0===a?void 0:a.message)}},m=function(a){if(a){var e=[];if(a.jobPost.list.map((function(a){a.poList.map((function(a){var t=0;a.itemList.filter((function(e){return e.qty>a.initialWeight})).length>0&&e.push(!0),a.itemList.map((function(n){(t+=n.qty)>a.initialWeight&&e.push(!0)}))}))})),e.length)return!0}},b=function(a){var e=Object.assign({},JSON.parse(JSON.stringify(a))),t=e.jobPost.list[0].poList[0].itemList.map((function(a){var e,t;return"waste"===(null===a||void 0===a||null===(e=a.ripeness)||void 0===e?void 0:e.value)||"semi_waste"===(null===a||void 0===a||null===(t=a.ripeness)||void 0===t?void 0:t.value)?(a.codeGrade=a.ripeness,a.ripeness=null,a):a}));return e.jobPost.list[0].poList[0].itemList=t,e},g=function(){var a=Object(r.a)(i.a.mark((function a(e){var t,n,r,c,o,l,s,u,d,h,v,p,f;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.summary,n=e.resetSummary,r=e.name,c=e.moduleEntry,o=e.moduleName,l=e.dispatch,s=e.setIsSuccess,u=e.saveJobSheet,e.setLocalEntryData,d=e.setCreatePo,h=e.moveAll,v=e.singleViewData,p=h?c:b(v),a.next=4,u({name:r,moduleEntry:p,moduleName:o,dispatch:l,setIsSuccess:s});case 4:a.sent&&(f=t.map((function(a){return a.checked=!1,a})),n(f),"function"===typeof d&&d({show:!1,skuNumber:null}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),V=function(a){var e=a.e,t=a.idx,n=a.onClick;if(13===e.keyCode){n();var i=document.getElementById("sku_item_".concat(t,"_",0));i&&i.focus()}}},21:function(a,e,t){"use strict";t.d(e,"e",(function(){return n})),t.d(e,"m",(function(){return i})),t.d(e,"k",(function(){return r})),t.d(e,"g",(function(){return c})),t.d(e,"a",(function(){return o})),t.d(e,"o",(function(){return l})),t.d(e,"i",(function(){return s})),t.d(e,"f",(function(){return u})),t.d(e,"h",(function(){return d})),t.d(e,"c",(function(){return h})),t.d(e,"b",(function(){return v})),t.d(e,"d",(function(){return p})),t.d(e,"j",(function(){return f})),t.d(e,"l",(function(){return m})),t.d(e,"n",(function(){return b}));var n="GET_USER",i="USER_LOGOUT",r="STATUS",c="IS_LOADING",o="ADD_SKU",l="WAREHOUSE_AREA",s="RIPENESS_LEVEL",u="GRADE",d="GRADE",h="GET_STOCK_TAKE_ACTION",v="CREATE_JOB_SHEET",p="GET_UNFINISHED_ENTRIES",f="SET_AREA",m="SET_STOK_TAKE_UPLOAD_JSON",b="SET_VALIDATE_PO_SKU_INFO_ID"},395:function(a,e,t){"use strict";t.d(e,"a",(function(){return n})),t.d(e,"b",(function(){return i}));var n="DROPDOWN_ACTION",i=function(a){var e=a.name,t=(a.i,a.dispatch),i=a.isOpen,r=a._nav,c=(void 0===r?[]:r).map((function(a){return a.name===e?a.isOpen=!i:a.isOpen=!1,a}));t({type:n,_nav:c})}},403:function(a,e,t){a.exports=t(535)},531:function(a,e,t){},535:function(a,e,t){"use strict";t.r(e);t(404),t(411),t(119),t(128),t(129),t(130),t(131),t(132),t(133),t(134),t(135),t(136),t(137),t(138),t(139),t(140),t(141),t(192),t(194),t(195),t(196),t(197),t(198),t(199),t(201),t(202),t(143),t(204),t(205),t(85),t(206),t(207),t(209),t(210),t(211),t(212),t(213),t(214),t(215),t(216),t(217),t(218),t(219),t(220),t(223),t(224),t(225),t(226),t(227),t(146),t(100),t(229),t(231),t(232),t(233),t(234),t(235),t(236),t(237),t(239),t(240),t(241),t(242),t(243),t(244),t(245),t(246),t(147),t(247),t(248),t(249),t(251),t(253),t(254),t(255),t(256),t(257),t(258),t(260),t(261),t(263),t(264),t(265),t(267),t(268),t(269),t(270),t(271),t(272),t(273),t(275),t(276),t(277),t(278),t(279),t(280),t(281),t(282),t(148),t(283),t(284),t(290),t(291),t(292),t(293),t(294),t(295),t(296),t(297),t(298),t(299),t(300),t(301),t(302),t(303),t(157),t(304),t(305),t(158),t(306),t(307),t(308),t(309),t(98),t(310),t(311),t(314),t(315),t(316),t(317),t(318),t(319),t(320),t(321),t(322),t(323),t(324),t(325),t(326),t(327),t(328),t(329),t(330),t(331),t(332),t(333),t(334),t(335),t(336),t(337),t(340),t(341),t(342),t(343),t(344),t(345),t(346),t(347),t(348),t(349),t(350),t(351),t(352),t(353),t(354),t(355),t(356),t(357),t(358),t(359),t(360),t(361),t(362),t(363),t(364),t(365),t(366),t(367),t(368),t(369),t(370),t(371),t(372),t(111),t(374),t(422),t(424),t(425),t(426),t(427),t(428),t(430),t(431),t(432),t(433),t(434),t(435),t(436),t(437),t(439),t(440),t(441),t(442),t(443),t(444),t(445),t(446),t(447),t(448),t(449),t(450),t(451),t(452),t(453),t(454),t(455),t(456),t(457),t(458),t(459),t(460),t(461),t(462),t(463),t(465),t(467),t(468),t(469),t(470),t(471),t(472),t(473),t(474),t(475),t(476),t(477),t(478),t(479),t(480),t(481),t(482),t(483),t(484),t(485),t(486),t(487),t(488),t(489),t(490),t(491),t(492),t(493),t(494),t(495),t(496),t(497),t(499),t(188),t(189),t(190),t(501),t(502),t(503),t(504),t(505),t(506),t(507),t(375),t(377),t(378),t(379),t(380),t(382),t(163);!function(){if("function"===typeof window.CustomEvent)return!1;function a(a,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(a,e.bubbles,e.cancelable,e.detail),t}a.prototype=window.Event.prototype,window.CustomEvent=a}();var n=t(1),i=t.n(n),r=t(396),c=t(93),o=t.n(c),l=t(65),s=t.n(l),u=t(91),d=t(169),h=t(170),v=t(172),p=t(171),f=t(56),m=t(53),b=t.n(m),g=t(19),V=t(168),A=t(21),M=t(116),y=(t(531),i.a.createElement("div",{className:"pt-3 text-center"},i.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"}))),E=i.a.lazy((function(){return Promise.all([t.e(27),t.e(14),t.e(66)]).then(t.bind(null,1378))})),S=i.a.lazy((function(){return t.e(67).then(t.bind(null,1340))})),D=i.a.lazy((function(){return Promise.all([t.e(14),t.e(59)]).then(t.bind(null,1341))})),Z=function(a){var e=a.props,t=Object(f.d)((function(a){return a.user})),n=Object(f.d)((function(a){return a.status})),r=0,c=Object(f.c)();t&&(b.a.interceptors.response.use((function(a){return r--,c({type:A.k,status:200,statusMessage:null,thereAreRequest:r}),a}),(function(a){r=0;var e=Object(M.i)(a);return console.log(e),c({type:A.k,status:e,isLoading:!1,thereAreRequest:r}),Promise.reject(a)})),b.a.interceptors.request.use((function(a){return r++,c({type:A.k,thereAreRequest:r}),a}),(function(a){r=0;var e=Object(M.i)(a);c({type:A.k,status:e,isLoading:!1,thereAreRequest:r})})));return i.a.createElement(g.b,Object.assign({},e.others,{render:function(a){return 401!==(null===n||void 0===n?void 0:n.code)&&t||(window.location.href="https://dev-wms-web.sayurbox.tech/"),i.a.createElement(E,a)}}))},O=function(a){Object(v.a)(t,a);var e=Object(p.a)(t);function t(a){return Object(d.a)(this,t),e.call(this,a)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var a=Object(u.a)(s.a.mark((function a(){var e;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(JSON.stringify(caches).length>2)){a.next=7;break}return a.next=3,caches.keys();case 3:return e=a.sent,a.next=6,Promise.all(e.map((function(a){return caches.delete(a)})));case 6:window.location.reload();case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()},{key:"render",value:function(){if(this.props.user){var a=this.props.user.sessionId;b.a.defaults.headers.common["session-id"]=a}return b.a.defaults.baseURL="https://dev-inventory-management-oss-dev.apps.aws.sayurbox.io/",b.a.defaults.headers.common["Content-Type"]="application/json",b.a.defaults.headers.common.Accept="application/json",b.a.defaults.timeout=15e4,i.a.createElement(V.a,null,i.a.createElement(i.a.Suspense,{fallback:y},i.a.createElement(g.d,null,i.a.createElement(g.b,{path:"/authenticate",name:"Landing Page",render:function(a){return i.a.createElement(D,a)}}),i.a.createElement(g.b,{path:"/server-error",name:"Server error",render:function(a){return i.a.createElement(S,a)}}),i.a.createElement(Z,{path:"/",name:"Page404",component:E,props:this.props}))))}}]),t}(n.Component),k=Object(f.b)((function(a){return{user:a.user}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(635),C=t(636),w=t(637),_=t(638),T=t(639),Y=t(640),j=t(641),H=t(642),I=t(643),P=t(644),N=t(645),U=t(646),R=t(647),B=t(648),x=t(649),q=t(650),G=t(651),F=t(652),J=t(653),W=t(654),z=t(655),K=t(656),Q=t(657),X=t(658),$=t(629),aa=t(630),ea=t(631),ta=t(632),na=t(633),ia=t(634),ra=t(536),ca=t(537),oa=t(538),la=t(539),sa=t(540),ua=t(541),da=t(542),ha=t(543),va=t(544),pa=t(545),fa=t(546),ma=t(547),ba=t(548),ga=t(549),Va=t(550),Aa=t(551),Ma=t(552),ya=t(553),Ea=t(554),Sa=t(555),Da=t(556),Za=t(557),Oa=t(558),ka=t(559),La=t(560),Ca=t(561),wa=t(562),_a=t(563),Ta=t(564),Ya=t(565),ja=t(566),Ha=t(567),Ia=t(568),Pa=t(569),Na=t(570),Ua=t(571),Ra=t(572),Ba=t(573),xa=t(574),qa=t(575),Ga=t(576),Fa=t(577),Ja=t(578),Wa=t(579),za=t(580),Ka=t(581),Qa=t(582),Xa=t(583),$a=t(584),ae=t(585),ee=t(586),te=t(587),ne=t(588),ie=t(589),re=t(590),ce=t(591),oe=t(592),le=t(593),se=t(594),ue=t(595),de=t(596),he=t(597),ve=t(598),pe=t(599),fe=t(600),me=t(601),be=t(602),ge=t(603),Ve=t(604),Ae=t(605),Me=t(606),ye=t(607),Ee=t(608),Se=t(609),De=t(610),Ze=t(611),Oe=t(612),ke=t(613),Le=t(614),Ce=t(615),we=t(616),_e=t(617),Te=t(618),Ye=t(619),je=t(620),He=t(621),Ie=t(622),Pe=t(623),Ne=t(624),Ue=t(625),Re=t(626),Be=t(627),xe=t(628),qe=Object.assign({},{sygnet:["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill: currentColor;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],logo:["690 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#80d0ff;">\n      <path d="M672.3,59.6528a3.4937,3.4937,0,0,0-3.1992,0,2.6556,2.6556,0,0,0-1.0645,1.1016,3.4924,3.4924,0,0,0-.375,1.6484V67.645a3.4925,3.4925,0,0,0,.375,1.6485,2.6559,2.6559,0,0,0,1.0645,1.1015,3.4937,3.4937,0,0,0,3.1992,0,2.6551,2.6551,0,0,0,1.0644-1.1015,3.4926,3.4926,0,0,0,.3755-1.6485V62.4028a3.4925,3.4925,0,0,0-.3755-1.6484A2.6547,2.6547,0,0,0,672.3,59.6528Z"/>\n      <path d="M685.49,46h-66a2,2,0,0,0-2,2V81.9161a2,2,0,0,0,2,2h66a2,2,0,0,0,2-2V48A2,2,0,0,0,685.49,46ZM639.5851,64.439a4.8213,4.8213,0,0,1-1.9751,1.914,6.1869,6.1869,0,0,1-2.9467.6768H630.861v6.9394h-3.3716V56.0786h7.1739a6.1447,6.1447,0,0,1,2.9467.6826,4.85,4.85,0,0,1,1.9751,1.9258,6.2486,6.2486,0,0,1,0,5.752Zm15.8194,9.53L651.371,66.771h-2.0451v7.1982h-3.3716V56.0659h7.8379a4.9978,4.9978,0,0,1,2.5967.6641,4.5005,4.5005,0,0,1,1.7349,1.8769,6.7322,6.7322,0,0,1,0,5.6231,4.4814,4.4814,0,0,1-1.7412,1.8769,4.6377,4.6377,0,0,1-1.1708.4848l4.2777,7.3775Zm22.085-6.4111a7.1411,7.1411,0,0,1-.812,3.4639,5.6854,5.6854,0,0,1-2.2949,2.3134,7.5835,7.5835,0,0,1-6.8536,0,5.6854,5.6854,0,0,1-2.2949-2.3134,7.1411,7.1411,0,0,1-.812-3.4639V62.4888a7.1438,7.1438,0,0,1,.812-3.4639,5.6972,5.6972,0,0,1,2.2949-2.3135,7.5918,7.5918,0,0,1,6.8536,0,5.6972,5.6972,0,0,1,2.2949,2.3135,7.1438,7.1438,0,0,1,.812,3.4639Z"/>\n      <path d="M635.5705,59.604a2.0521,2.0521,0,0,0-1.0766-.2773h-3.8882v4.4541h3.8882a2.0283,2.0283,0,0,0,1.0644-.2764,1.9,1.9,0,0,0,.72-.7813,2.503,2.503,0,0,0,.2583-1.1572,2.6239,2.6239,0,0,0-.252-1.1748A1.8478,1.8478,0,0,0,635.5705,59.604Z"/>\n      <path d="M654.1893,59.5728a1.6479,1.6479,0,0,0-.9229-.2588h-4.1958v4.2089h4.1958a1.6259,1.6259,0,0,0,.9106-.2587,1.6741,1.6741,0,0,0,.6089-.7383,2.8225,2.8225,0,0,0,.2276-1.1074,2.683,2.683,0,0,0-.2154-1.1075A1.6737,1.6737,0,0,0,654.1893,59.5728Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],logoNegative:["690 134",'\n  <title>coreui react pro logo</title>\n  <g>\n    <rect x="617.4894" y="46" width="70.0001" height="37.9161" rx="2"/>\n    <g style="fill:#80d0ff;">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill: #00a1ff;">\n      <path d="M672.3,59.6528a3.4937,3.4937,0,0,0-3.1992,0,2.6556,2.6556,0,0,0-1.0645,1.1016,3.4924,3.4924,0,0,0-.375,1.6484V67.645a3.4925,3.4925,0,0,0,.375,1.6485,2.6559,2.6559,0,0,0,1.0645,1.1015,3.4937,3.4937,0,0,0,3.1992,0,2.6551,2.6551,0,0,0,1.0644-1.1015,3.4926,3.4926,0,0,0,.3755-1.6485V62.4028a3.4925,3.4925,0,0,0-.3755-1.6484A2.6547,2.6547,0,0,0,672.3,59.6528Z"/>\n      <path d="M685.49,46h-66a2,2,0,0,0-2,2V81.9161a2,2,0,0,0,2,2h66a2,2,0,0,0,2-2V48A2,2,0,0,0,685.49,46ZM639.5851,64.439a4.8213,4.8213,0,0,1-1.9751,1.914,6.1869,6.1869,0,0,1-2.9467.6768H630.861v6.9394h-3.3716V56.0786h7.1739a6.1447,6.1447,0,0,1,2.9467.6826,4.85,4.85,0,0,1,1.9751,1.9258,6.2486,6.2486,0,0,1,0,5.752Zm15.8194,9.53L651.371,66.771h-2.0451v7.1982h-3.3716V56.0659h7.8379a4.9978,4.9978,0,0,1,2.5967.6641,4.5005,4.5005,0,0,1,1.7349,1.8769,6.7322,6.7322,0,0,1,0,5.6231,4.4814,4.4814,0,0,1-1.7412,1.8769,4.6377,4.6377,0,0,1-1.1708.4848l4.2777,7.3775Zm22.085-6.4111a7.1411,7.1411,0,0,1-.812,3.4639,5.6854,5.6854,0,0,1-2.2949,2.3134,7.5835,7.5835,0,0,1-6.8536,0,5.6854,5.6854,0,0,1-2.2949-2.3134,7.1411,7.1411,0,0,1-.812-3.4639V62.4888a7.1438,7.1438,0,0,1,.812-3.4639,5.6972,5.6972,0,0,1,2.2949-2.3135,7.5918,7.5918,0,0,1,6.8536,0,5.6972,5.6972,0,0,1,2.2949,2.3135,7.1438,7.1438,0,0,1,.812,3.4639Z"/>\n      <path d="M635.5705,59.604a2.0521,2.0521,0,0,0-1.0766-.2773h-3.8882v4.4541h3.8882a2.0283,2.0283,0,0,0,1.0644-.2764,1.9,1.9,0,0,0,.72-.7813,2.503,2.503,0,0,0,.2583-1.1572,2.6239,2.6239,0,0,0-.252-1.1748A1.8478,1.8478,0,0,0,635.5705,59.604Z"/>\n      <path d="M654.1893,59.5728a1.6479,1.6479,0,0,0-.9229-.2588h-4.1958v4.2089h4.1958a1.6259,1.6259,0,0,0,.9106-.2587,1.6741,1.6741,0,0,0,.6089-.7383,2.8225,2.8225,0,0,0,.2276-1.1074,2.683,2.683,0,0,0-.2154-1.1075A1.6737,1.6737,0,0,0,654.1893,59.5728Z"/>\n    </g>\n    <g style="fill:#fff;">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n']},{cilAlignCenter:ra.a,cilAlignLeft:ca.a,cilAlignRight:oa.a,cilApplicationsSettings:la.a,cilArrowBottom:sa.a,cilArrowRight:ua.a,cilArrowTop:da.a,cilAsterisk:ha.a,cilBan:va.a,cilBasket:pa.a,cilBell:fa.a,cilBold:ma.a,cilBookmark:ba.a,cilCalculator:ga.a,cilCalendar:Va.a,cilCloudDownload:Aa.a,cilChartPie:Ma.a,cilCheck:ya.a,cilChevronBottom:Ea.a,cilChevronLeft:Sa.a,cilChevronRight:Da.a,cilChevronTop:Za.a,cilCircle:Oa.a,cilCheckCircle:ka.a,cilCode:La.a,cilCommentSquare:Ca.a,cilCreditCard:wa.a,cilCursor:_a.a,cilCursorMove:Ta.a,cilDrop:Ya.a,cilDollar:ja.a,cilEnvelopeClosed:Ha.a,cilEnvelopeLetter:Ia.a,cilEnvelopeOpen:Pa.a,cilEuro:Na.a,cilEyedropper:Ua.a,cilFile:Ra.a,cilFullscreen:Ba.a,cilFullscreenExit:xa.a,cilGlobeAlt:qa.a,cilGraph:Ga.a,cilGrid:Fa.a,cilHome:Ja.a,cilInbox:Wa.a,cilIndentDecrease:za.a,cilIndentIncrease:Ka.a,cilInputPower:Qa.a,cilItalic:Xa.a,cilJustifyCenter:$a.a,cilJustifyLeft:ae.a,cilLaptop:ee.a,cilLayers:te.a,cilLightbulb:ne.a,cilList:ie.a,cilListNumbered:re.a,cilListRich:ce.a,cilLocationPin:oe.a,cilLockLocked:le.a,cilMagnifyingGlass:se.a,cilMap:ue.a,cilMoon:de.a,cilNotes:he.a,cilOptions:ve.a,cilPaperclip:pe.a,cilPaperPlane:fe.a,cilPencil:me.a,cilPeople:be.a,cilPhone:ge.a,cilPrint:Ve.a,cilPuzzle:Ae.a,cilSave:Me.a,cilScrubber:ye.a,cilSettings:Ee.a,cilShare:Se.a,cilShareAll:De.a,cilShareBoxed:Ze.a,cilShieldAlt:Oe.a,cilSpeech:ke.a,cilSpeedometer:Le.a,cilSpreadsheet:Ce.a,cilStar:we.a,cilSun:_e.a,cilTags:Te.a,cilTask:Ye.a,cilTrash:je.a,cilUnderline:He.a,cilUser:Ie.a,cilUserFemale:Pe.a,cilUserFollow:Ne.a,cilUserUnfollow:Ue.a,cilX:Re.a,cilXCircle:Be.a,cilWarning:xe.a},{cifUs:$.a,cifBr:aa.a,cifIn:ea.a,cifFr:ta.a,cifEs:na.a,cifPl:ia.a},{cibSkype:L.a,cibFacebook:C.a,cibTwitter:w.a,cibLinkedin:_.a,cibFlickr:T.a,cibTumblr:Y.a,cibXing:j.a,cibGithub:H.a,cibStackoverflow:I.a,cibYoutube:P.a,cibDribbble:N.a,cibInstagram:U.a,cibPinterest:R.a,cibVk:B.a,cibYahoo:x.a,cibBehance:q.a,cibReddit:G.a,cibVimeo:F.a,cibCcMastercard:J.a,cibCcVisa:W.a,cibStripe:z.a,cibPaypal:K.a,cibGooglePay:Q.a,cibCcAmex:X.a}),Ge=t(5),Fe=t(399),Je=t(55),We=t(167),ze=t(398),Ke=t.n(ze),Qe=t(395),Xe={stockMovementDropdown:[{label:"Move to Production",value:1},{label:"Back From Production",value:2},{label:"Back From Staging",value:3},{label:"Hold",value:4},{label:"Release",value:5},{label:"Staging to Waste",value:6},{label:"Move to Staging",value:7}],expandSidebar:!0,sidebarShow:!0,asideShow:!1,darkMode:!1,status:null,zeroQuantity:!1,_nav:[{_tag:"CSidebarNavDropdown",name:"Inventory Entry",to:"/stockentry",icon:"iconU-sideBarInventoryEntry",isOpen:!1,_children:[{_tag:"CSidebarNavItem",name:"Stock Take",to:"/inventory-entry/stock-take",icon:"iconU-sideBarDot"},{_tag:"CSidebarNavItem",name:"Movement",to:"/inventory-entry/movement",icon:"iconU-sideBarDot"},{_tag:"CSidebarNavItem",name:"Waste",to:"/inventory-entry/waste",icon:"iconU-sideBarDot"},{_tag:"CSidebarNavItem",name:"Additional Outbound",to:"/inventory-entry/additional-outbound",icon:"iconU-sideBarDot"},{_tag:"CSidebarNavItem",name:"Repacking",to:"/inventory-entry/repacking",icon:"iconU-sideBarDot"}]}]},$e={key:"sbroot",storage:Ke.a},at=Object(We.a)($e,(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,e=arguments.length>1?arguments[1]:void 0,t=e.type,n=e.data,i=Object(Fe.a)(e,["type","data"]);switch(t){case"set":case"EXPAND_SIDEBAR":case"UPDATE_WEIGHT_ENTRY":case"STATUS":case Qe.a:case A.i:case A.f:case A.h:case A.c:case A.d:case A.o:case A.e:return Object(Ge.a)(Object(Ge.a)({},a),i);case A.m:return Xe;case A.g:case A.a:case A.l:case A.b:case A.j:case A.n:return Object(Ge.a)(Object(Ge.a)({},a),i);case"SET_ZERO_QUANTITY":return Object(Ge.a)(Object(Ge.a)({},a),{},{zeroQuantity:n});default:return a}})),et=Object(Je.c)(at),tt=Object(We.b)(et);i.a.icons=qe,o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f.a,{store:et},i.a.createElement(r.a,{loading:null,persistor:tt},i.a.createElement(k,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))}},[[403,16,17]]]);
//# sourceMappingURL=main.81e45750.chunk.js.map