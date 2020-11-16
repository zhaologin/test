<template>
    <div>
        <div class="header">
            <div class="header-shu">
            <div class="header-shou">
               <router-link to="/login">登录</router-link>
               <router-link to="/register">注册</router-link><em>|</em>
               <router-link to="/"  style="color:#ff7c00;">去哪网首页</router-link><em>|</em>
               <router-link to="#">联系客服</router-link>
            </div>
            </div>
        </div>
        <div class="body">
            <div class="login-logo">
                <router-link to="/" class="login-img"><img src="/img/index/login-logo.png" alt=""></router-link>
                <div class="login">账号登录</div>
            </div>
        </div>
        <div class="zhuce">
            <form action="" class="body-center">
        <div>
            <div class="body-left">
                <div class="left-guo diqu">
                    <label class="left-diqu">国家/地区</label>
                    <input type="text" placeholder=" 中国  86"><b></b>
                </div>
                <div class="left-guo">
                    <label>手机号码</label>
                    <input type="text" placeholder=" 请输入手机号码"  :attr="{maxlength:15}"
          v-model="username"
          :state="usernameState"
          @blur.native.capture="checkUsername">
                    <span>可用于激活码获取、密码找回、订单查询等</span>
                    <span style="display:none;">手机号不能为空</span>
                    <span></span>
                </div>
                <div class="left-guo">
                    <label>登录密码 </label>
                    <input type="password" placeholder=" 请输入登录密码" :attr="{maxlength:20,autocomplete:'off'}"
          v-model="conpassword"
          :state="conpasswordState"
          @blur.native.capture="checkConpassword">
                </div>
                <div class="left-guo">
                    <label>验证码</label>
                    <input type="text" placeholder=" 请输入验证码" id="left-yanzheng">
                    <p id="left-huan"><input type="text" id="txt"> <button id="btn">换一张</button></p>
                </div>
                <div class="left-guo">
                    <label>激活码</label>
                    <input type="text" placeholder=" 请输入激活码" id="left-jihuo">
                    <button class="left-button">激活码获取</button>
                </div>
                <div class="left-que">
                    <input type="checkbox" v-model="isAgress">
                    <label for="">我已阅读并同意遵守</label>
                    <router-link to="">《去哪儿用户服务协议》</router-link>
                </div>
                <div class="left-tong">
                    <button :disabled="isAgress==false"  @click="handle">同意协议并注册</button>
                </div>
            </div>
        </div>
            </form>
            <div class="login-rigth">
                <div class="rigth-zhu">
                    <dl>
                        <dt>注册成为“去哪儿”的用户后，您可以：</dt>
                        <dd>
                            <ul>
                                <li>畅游与去哪儿合作的<span>机票</span> 、<span>酒店</span> 、<span>度假</span>代理商网站，轻松管理订单</li>
                                <li>查询、计划、管理您的预订信息</li>
                                <li>享受优质超低价格<span>团购</span>服务</li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <my-food></my-food>
    </div>
</template>
<style scoped>
    .header{
    height: 28px;
    border-bottom: 1px solid #ddd;
    background-color: #f5f5f5;
    }
    .header-shu{
        width: 990px;
        margin: 0 auto;
    }
    .header-shou{
        width: 230px;
         height: 28px;
        float: right;
        font-size: 12px;
    }
    .header a{
        display:inline-block;
        line-height: 28px;
        margin: 0 5px;
        color: #555;
    }
    .body{
        width: 980px;
        margin: 0 auto;
         background: #fff;
         
    }
    .login{
    font-size: 20px;
    padding-left: 20px;
    float: left;
    padding-top: 34px;
    }
    .login-logo{
            width: 980px;
            height: 53px;
            padding: 20px 11px;
    }
    .login-img{
        width: 138px;
        height: 53px;
        float: left;
        cursor: pointer;
    }
    .diqu{
        position: relative;
    }
    .body-center{
        margin: 0 auto;
    background: #fff;
    border-bottom: 1px solid #ddd;
    min-height: 455px;
    float: left;
    }
    .body-left{
        float: left;
    width: 615px;
    clear: both;
    padding: 40px 0 0 30px;
    }
    .left-guo{
        padding: 10px 0;
    color: #999;
    font-family: tahoma,arial,sans-serif;
    height: 36px;
    position: relative;
    }
    .left-guo>label{
    display: inline-block;
    width: 80px;
    text-align: right;
    font-size: 14px;
    vertical-align: middle;
    }
    .left-guo>input{
            display: inline-block;
    line-height: 34px;
    height: 34px;
    width: 244px;
    box-sizing: content-box;
    margin-left: 10px;
    font-size: 14px;
    font-family: tahoma,arial,sans-serif;
    vertical-align: middle;
    border:1px solid#ccc;    }
    .left-diqu{
        position: relative;
    float: left;
    padding-top: 8px
    }
    .left-guo>b{
          position: absolute;
    right: 307px;
    top: 27px;
    border-width: 4px;
    border-style: solid;
    border-color: #555 #fff #fff #fff;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    display: block;
    }
    #left-yanzheng{
         width: 105px;
        border: none;
        clear: both;
         margin-top: 3px;
        height: 34px;
        border: 1px solid #ccc;
        font-size: 14px;
        font-weight: 400;
    }
    #left-jihuo{
         width: 105px;
        border: none;
        clear: both;
         margin-top: 3px;
        height: 34px;
        border: 1px solid #ccc;
        font-size: 14px;
        font-weight: 400;
    }
    .left-button{
        width: 87px;
        background-color: #0b60f0;
        color: #fff;
        padding:0 10px;
        font-size: 12px;
        border: none;
        height: 20px;
        border-radius: 3px;
        line-height: 20px;
        margin-left: 20px;
        cursor: pointer;
    }
    #txt{
        width: 87px;
        height: 30px;
        border: 1px solid #ccc;
        font-size: 16px;
        font-weight: 500;
        background-color: #f8f8f8;
    }
    #btn{
        border: none;
        color: #0069ca;
        font-size: 12px;
        background-color: #fff;
        cursor: pointer;
    }
    #btn:hover{
        border: none;
        color: #f60;
        font-size: 12px;
        background-color: #fff;
        cursor: pointer;
    }
    #left-huan{
        position: absolute;
        right: 270px;
        top: 15px;
        
    }
    .left-que{
        line-height: 20px;
    height: 20px;
    padding: 5px 0 0 0;
    margin-left: 85px;
    font-size: 12px;
    color:#999;
    }
    .left-que>a{
        color: #006bc8;
    }
    .left-que>a:hover{
        color: #f60;
    }
    .left-tong{
        margin-left: 90px;
        margin-top: 16px;
    }
    .left-tong>button{
        padding: 5px;
        color: #fff;
        background-color: #f60;
        border: none;
        border-radius: 3px;
    }
    .zhuce{
      margin: 0 auto;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    min-height: 455px ; 
    width: 100%;
    min-width: 980px;
    }
  .login-rigth{
      width: 320px;
    height: 455px;
    margin-left: 15px;
    float: left;
}
.rigth-zhu{
    margin-left: 5px;
        padding: 10px;
    font: normal 12px/25px simsun;
    margin-top: 44px
}
.rigth-zhu dt{
    font-size: 14px;
}
.rigth-zhu li{
    padding-top: 8px;             
}
.rigth-zhu span{
    color: #fd017c;
}
</style>
<script>
import {mapActions} from "vuex"
export default {
    data() {
        return {
            isAgress:false,
             // 用户名
      username:'',
      // 密码
      password:'',
      // 用户名的状态
      usernameState:'',
      // 密码的状态
      passwordState:'',
      // 确认密码的状态
      conpasswordState:''
        }
    },
     mounted() {
        var oTxt=document.getElementById("txt");  
var oBtn=document.getElementById("btn");
function random(a,b){
return Math.round(Math.random()*(a-b)+b);
}
oBtn.onclick=function(){
oTxt.value="";
var arr=[ ];
for(var i=0;i<26;i++){
arr.push(String.fromCharCode(65+i));
}
for(var i=0;i<26;i++){
arr.push(String.fromCharCode(97+i));
}
for(var j=0;j<=9;j++){
arr.push(j);
}
for(var m=0;m<4;m++){ 
oTxt.value+=arr[random(0,61)]; 
}
}},
  methods:{
    //校验用户名
    checkUsername(){  
      let usernameRegExp = /^[0-9a-zA-Z_]{6,20}$/;
      if(usernameRegExp.test(this.username)){
        this.usernameState = 'success';
        return true;
      } else {
        this.usernameState = 'error';
        // this.$toast({
        //   message:"用户名为必填项",
        //   position:"top",
        //   duration:"2000"
        // });
        return false;
      }
    },
    //校验密码
    checkPassword(){
      //密码的正则表达式
      let passwordRegExp = /^[0-9A-Za-z]{8,20}$/;
      if(passwordRegExp.test(this.password)){
        this.passwordState='success';
        return true;
      } else {
        this.passwordState='error';
        // this.$toast({
        //   message:"密码必须为字母、数字的组合体",
        //   position:"top",
        //   duration:"2000"
        // });
        return false;
      }
    },
    //校验确认密码
    checkConpassword(){
      if(this.password != this.conpassword){
        this.conpasswordState='error';
        // this.$toast({
        //   message:"两次密码不一致",
        //   position:"top",
        //   duration:"2000"
        // });
        return false;
      } else {
        this.conpasswordState='success';
        return true;
      }
    },
    handle(){
      if(this.checkUsername() && this.checkPassword()){
        //该将获取到的信息提交到WEB服务器
        this.axios.post('/register', "username=" + this.username + "&password=" + this.password).then(res=>{
          if (res.data.code==1){
             this.$messagebox('注册提示','注册成功')
            this.$router.push('/');
          }else{
            this.$messagebox('注册提示','用户名已存在')
          }
      });
      };
    }
  }   
}
</script>