"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[466],{2466:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"80%"}},[t("div",{staticStyle:{"margin-bottom":"30px"}},[e._v("编辑用户")]),t("el-form",{attrs:{inline:!0,model:e.form,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"卡号"}},[t("el-input",{attrs:{disabled:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"年龄"}},[t("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"联系方式"}},[t("el-input",{attrs:{placeholder:"请输入联系方式"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),t("el-form-item",{attrs:{label:"地址"}},[t("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),t("el-form-item",{attrs:{label:"性别"}},[t("el-radio",{attrs:{label:"男"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("男")]),t("el-radio",{attrs:{label:"女"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女")])],1)],1),t("div",{staticStyle:{"text-align":"center","margin-top":"30px"}},[t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.save}},[e._v("提交")])],1)],1)},a=[],s=(r(7658),r(4471)),o={name:"EditUser",data(){return{form:{}}},created(){const e=this.$route.query.id;s.Z.get("/user/"+e).then((e=>{this.form=e.data}))},methods:{save(){s.Z.put("/user/update",this.form).then((e=>{"200"===e.code?(this.$notify.success("更新成功"),this.$router.push("/userList")):this.$notify.error(e.msg)}))}}},n=o,i=r(1001),m=(0,i.Z)(n,l,a,!1,null,null,null),u=m.exports}}]);
//# sourceMappingURL=466.0161c838.js.map