(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[69],{1180:function(e,t,a){},1222:function(e,t,a){"use strict";a.r(t);var r=a(659),n=a(1),o=a.n(n),l=a(56),i=a(19),u=a(682),s=a(733),c=a.n(s),d=a(662),p=(a(1180),c.a.ExcelFile),m=c.a.ExcelFile.ExcelSheet,b=c.a.ExcelFile.ExcelColumn;t.default=Object(i.i)((function(e){var t=Object(l.c)(),a=o.a.useState(!1),i=Object(r.a)(a,2),s=(i[0],i[1],Object(l.d)((function(e){return e.warehouseData})));return Object(n.useEffect)((function(){s||Object(d.i)({dispatch:t})}),[]),o.a.createElement("div",{className:"mb-5"},o.a.createElement(p,{element:o.a.createElement("button",{id:"download-template-xls",style:{display:"none"}},"Download Data"),filename:"StockTransferUpload_Template"},o.a.createElement(m,{data:[{areaSource:"",warehouseSource:"",warehouseDestination:"",expiryDate:"",po:"",skuNumber:"",inputWeight:""}],name:"template"},o.a.createElement(b,{label:"PO SKU Code",value:"po"}),o.a.createElement(b,{label:"SKU Number",value:"skuNumber"}),o.a.createElement(b,{label:"Expiry Date",value:"expiryDate"}),o.a.createElement(b,{label:"Warehouse Source",value:"warehouseSource"}),o.a.createElement(b,{label:"Area Source",value:"areaSource"}),o.a.createElement(b,{label:"Warehouse Destination",value:"warehouseDestination"}),o.a.createElement(b,{label:"Input Weight",value:"inputWeight"}))),o.a.createElement(u.a,{nextPage:function(){return e.history.push("/inventory-entry/stock-transfer/CSV-upload/review")},transaction:"stockTransfer",field:[{dataField:"id",text:"ID",editable:!1,sort:!0,hidden:!0,type:"number"},{dataField:"wmsPoSkuCode",text:"PO SKU Code",type:"number",sort:!0},{dataField:"skuNumber",text:"SKU Number",type:"number",sort:!0},{dataField:"expiryDateCol",text:"Expiry Date",type:"date_indo",sort:!0},{dataField:"warehouse",text:"Warehouse Source",type:"string",sort:!0},{dataField:"areaName",text:"Area Source",type:"string",sort:!0},{dataField:"warehouseDestination",text:"Warehouse Destination",type:"string",sort:!0},{dataField:"qty",text:"Input Weight",type:"number",sort:!0}],type:"stockTransfer"}))}))}}]);
//# sourceMappingURL=69.2e071c41.chunk.js.map