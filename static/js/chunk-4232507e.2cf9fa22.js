(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4232507e"],{"0f2a":function(e,t,n){"use strict";var r=n("3a393"),a=n.n(r);a.a},"3a393":function(e,t,n){},b562:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var r=n("b775");function a(e){return Object(r["a"])({url:"/api/sso/login",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/api/token/role/queryMenu",method:"get",params:e})}},dc3f:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-form"},[e._m(0),n("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline,inline:""}},[n("Row",[n("Col",{attrs:{span:"24"}},[n("FormItem",{staticClass:"login-input-width",attrs:{prop:"userName"}},[n("Input",{attrs:{type:"text",placeholder:"userNamename",size:"large"},model:{value:e.formInline.userName,callback:function(t){e.$set(e.formInline,"userName",t)},expression:"formInline.userName"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1)],1),n("Col",{attrs:{span:"24"}},[n("FormItem",{staticClass:"login-input-width",attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"Password",size:"large"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1)],1),n("Col",{attrs:{span:"24"}},[n("FormItem",{staticClass:"login-input-width"},[n("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v("登录")])],1)],1)],1)],1)],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-tit"},[n("h2",[e._v("系统登录")])])}],s=n("b562"),o={name:"Login",data:function(){return{formInline:{userName:"manage",password:"ls123456"},ruleInline:{userName:[{required:!0,message:"请填写用户",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码最小长度为6",trigger:"blur"}]}}},watch:{},computed:{},created:function(){},mounted:function(){this.$parent.perms="1233",console.log("parent",this.$parent)},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e?Object(s["a"])(t.formInline).then((function(e){var n=e.data;n.data||"undefined"===typeof n.data||0===n.data?(sessionStorage.setItem("token",n.data.token),t.$router.push("/layout")):t.$Message.error(n.message)})):t.$Message.error("Fail!")}))}}},i=o,l=(n("0f2a"),n("2877")),u=Object(l["a"])(i,r,a,!1,null,"aa1618b2",null);t["default"]=u.exports}}]);