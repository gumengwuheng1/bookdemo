"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[659],{6659:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{"margin-bottom":"20px"}},[t("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入图书名称"},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}}),t("el-input",{staticStyle:{width:"240px","margin-left":"5px"},attrs:{placeholder:"请输入图书标准码"},model:{value:e.params.bookNo,callback:function(t){e.$set(e.params,"bookNo",t)},expression:"params.bookNo"}}),t("el-input",{staticStyle:{width:"240px","margin-left":"5px"},attrs:{placeholder:"请输入用户名称"},model:{value:e.params.userName,callback:function(t){e.$set(e.params,"userName",t)},expression:"params.userName"}}),t("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:e.load}},[t("i",{staticClass:"el-icon-search"}),e._v(" 搜索")]),t("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"warning"},on:{click:e.reset}},[t("i",{staticClass:"el-icon-refresh"}),e._v(" 重置")])],1),t("el-table",{attrs:{data:e.tableData,stripe:"","row-key":"id","default-expand-all":""}},[t("el-table-column",{attrs:{prop:"id",label:"编号",width:"80"}}),t("el-table-column",{attrs:{prop:"bookName",label:"图书名称"}}),t("el-table-column",{attrs:{prop:"bookNo",label:"图书标准码"}}),t("el-table-column",{attrs:{prop:"userNo",label:"会员码"}}),t("el-table-column",{attrs:{prop:"userName",label:"用户名称"}}),t("el-table-column",{attrs:{prop:"userPhone",label:"用户联系方式"}}),t("el-table-column",{attrs:{prop:"score",label:"所用积分"}}),t("el-table-column",{attrs:{prop:"createtime",label:"借出日期"}}),t("el-table-column",{attrs:{prop:"status",label:"借出状态"}}),t("el-table-column",{attrs:{prop:"days",label:"借出天数"}}),t("el-table-column",{attrs:{prop:"returnDate",label:"归还日期"}}),t("el-table-column",{attrs:{prop:"realDate",label:"实际归还日期"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popconfirm",{staticStyle:{"margin-left":"5px"},attrs:{title:"您确定删除这行数据吗？"},on:{confirm:function(t){return e.del(a.row.id)}}},[t("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("el-pagination",{attrs:{background:"","current-page":e.params.pageNum,"page-size":e.params.pageSize,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},r=[],o=a(4471),s=a(680),n={name:"ReturList",data(){return{admin:s.Z.get("admin")?JSON.parse(s.Z.get("admin")):{},tableData:[],total:0,params:{pageNum:1,pageSize:7,name:"",bookNo:""}}},created(){this.load()},methods:{load(){o.Z.get("/borrow/pageRetur",{params:this.params}).then((e=>{"200"===e.code&&(this.tableData=e.data.list,this.total=e.data.total)}))},reset(){this.params={pageNum:1,pageSize:7,bookName:"",bookNo:"",userName:""},this.load()},handleCurrentChange(e){this.params.pageNum=e,this.load()},del(e){o.Z["delete"]("/borrow/deleteRetur/"+e).then((e=>{"200"===e.code?(this.$notify.success("删除成功"),this.load()):this.$notify.error(e.msg)}))},returnBooks(e){}}},p=n,i=a(1001),u=(0,i.Z)(p,l,r,!1,null,"4f190a4b",null),c=u.exports}}]);
//# sourceMappingURL=659.99e6495b.js.map