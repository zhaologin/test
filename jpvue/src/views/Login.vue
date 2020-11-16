<template>
    <div>
        <div class="header">
            <div class="header-shu">
            <div class="header-shou">
               <router-link to="javascript:;">登录</router-link>
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
            <div class="login-body">
                <div class="login-left">
                <div></div>
                <dl>
                  <dt>
                   使用去哪儿客户端<br>
                   手机扫描安全登录</dt>
                  <dd>
                     1. 打开手机去哪儿客户端并登录去哪儿账号<br>
                     2. 在去哪儿登录页点击右上角扫码安全登录<br>
                     3. 使用去哪儿客户端左上角扫描功能完成登录 
                      </dd>  
                </dl>
                </div>
                <div class="login-right">
                    <div class="login-box">
                        <div class="login-right-head">
                            <input type="radio" checked name="yanzheng">
                            <span class="login-right-zhang"> 账号登录</span>
                            <input type="radio"  name="yanzheng">
                            <span> 短信验证码登录</span>
                        </div>
                        <div class="login-rigth-body shouji">
                            <i></i>
                            <input type="text" placeholder="手机号/邮箱/用户名" v-model="username"  :attr="{maxlength:15}" @blur="checkUsername" :state="usernameState">
                        </div>
                        <div class="login-rigth-body mima">
                            <i></i>
                            <input type="password" 
                            placeholder="请输入密码" 
                            v-model="password"  
                            :attr="{maxlength:20,autocomplete:'off'}"
                            :state="passwordState"
                            @blur="checkPassword">
                        </div>
                        <div class="login-rigth-yanzheng">
                            <input type="text" placeholder=" 请输入验证码">
                            <p><input type="text" id="txt"> <button id="btn">换一张</button></p>
                        </div>
                        <div class="login-foot">
                            <input type="checkbox" checked>
                            <span>三个月自动登录</span>
                            <router-link to="/">忘记密码</router-link><em>|</em>
                            <router-link to="/register">立即注册</router-link>
                        </div>
                        <div class="login-mima">用户名或密码不正确</div>
                        <input type="submit" class="denglu" value="登           录" @click="handle">
                    </div>
                    <div class="sanfang">
                        <div class="san"> 
                            <div class="san-left"></div>
                            <div class="san-head">第三方账号登录</div>
                            <div class="san-right"></div>
                        </div>
                        <div class="biaoqian">
                            <router-link to="/" class="login-weixin">微信</router-link>
                            <router-link to="/" class="login-qq">QQ</router-link>
                            <router-link to="/" class="login-xinlang" style="width:65px;">新浪微博</router-link>
                            <router-link to="/" class="login-baidu">百度</router-link>
                        </div>

                    </div>

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
    .login{
    font-size: 20px;
    padding-left: 20px;
    float: left;
    padding-top: 34px;
    }
    .login-body{
        width: 980px;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    height: 440px;
    }
    .login-left{
        float: left;
        width: 525px;
        padding: 20px 0 0 40px;
        height: 196px;
    
    }
    .login-left>div{
       width: 144px;
    height: 177px;
    float: left;
    padding-right: 44px;
    background: url('/img/index/qrcode_login_ad.png') no-repeat;
    }
    .login-left dt{
        padding-top: 26px;
    color: #009bb3;
    font-family: 微软雅黑;
    font-size: 20px;
    line-height: 30px;
    font-weight: normal;
    }
    .login-left dd{
        margin-top: 12px;
    line-height: 21px;
    color: #999;
    }
    .login-right{
         float: right;
         width: 350px;
         background-color: #f6f6f6;

         height: 440px;
         color: #555;
    }
    .login-box{
        margin: 45px auto;
        width: 249px;
        font-size: 12px;
    }
    .login-right-head>input{
        margin-right: 3px;
    }
    .login-right-zhang{
        font-size: 14px;
        margin-right: 50px;
        font-weight: 600;
    }
    .login-rigth-body{
        background: #fff;
    margin-top: 20px;
    height: 28px;
    position: relative;
    border: 1px solid #ccc
    }
    .shouji>i{
        float: left;
        background: url('/img/index/login-icon-v2.png')no-repeat -129px -90px;
        width: 11px;
        height: 11px;
        margin: 9px 10px 0;  
    }
    .login-rigth-body>input{
            color: #666;
    font-size: 14px;
    float: left;
    padding: 0 10px;
    margin-top: 5px;
    height: 18px;
    line-height: 18px;
    width: 182px;
    border: none;
     border-left: 1px solid #ccc;
    }
    .mima>i{
        float: left;
        background: url('/img/index/login-icon-v2.png')no-repeat -129px -101px;
        width: 11px;
        height: 11px;
        margin: 9px 10px 0; 
    }
    
    .login-rigth-yanzheng>input{
        width: 105px;
        border: none;
        clear: both;
         margin-top: 20px;
        height: 28px;
        border: 1px solid #ccc;
        font-size: 14px;
        font-weight: 400;
    }
    .login-rigth-yanzheng>p{
        float: right;
        margin-top: 20px;
    }
    .login-rigth-yanzheng>p>input{
        width: 83px;
        height: 28px;
        border: 1px solid #ccc;
        font-size: 16px;
        font-weight: 500;
    }
    #btn{
        border: none;
        color: #0069ca;
        font-size: 12px;
    }
    .login-foot{
        margin-top: 20px;
    }
    .login-foot>input{
       margin-right: 9px;
    }
    .lgoin-foot>span{
        
        padding-right: 10px;
    }
    .login-foot>a{
        margin: 0 14px;
        color: #0069ca;

    }
    .login-foot>a~a{
        margin-right: 0;
    }
    .denglu{
        display: block;
        background-color: #ff7a00;
       width: 249px;
    height: 30px;
    color:#fff;
    border: none;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    }
    .sanfang{
        margin-top: 20px;
    }
    
    .san{
        padding: 0 38px;
        position: relative;
        height: 18px;
    }
    .san-left{
        width: 90px;
    height: 2px;
    background-color: #ebebeb;
    float: left;
    font-size: 0;
    line-height: 2px;
    position: absolute;
    top: 8px;
    }
    .san-head{
       position: absolute;
       left: 133px;
       font-size: 14px;
    }
    .san-right{
        width: 90px;
    height: 2px;
    background-color: #ebebeb;
    font-size: 0;
    line-height: 2px;
    position: absolute;
    top: 8px;
    right: 25px;
    }
    .biaoqian{
        padding: 10px 0 25px 35px;
    zoom: 1;
    margin-top: 10px;
    vertical-align: bottom;
    }
    .biaoqian>a{
        cursor: pointer;
    width: 48px;
    padding-left: 26px;
    display: inline-block;
    line-height: 24px;
    color: #555;
    
    }
    .login-weixin{
        background: url('/img/index/icon16_wx_logo.png')no-repeat 0 5px;
    }
    .login-qq{
        background: url('/img/index/login_link_icon.png')no-repeat  0 -142px;
    }
    .login-xinlang{
        background: url('/img/index/login_link_icon.png')no-repeat 0 3px;
    }

    .login-baidu{
        background: url('/img/index/login_link_icon.png')no-repeat 0 -26px;
    }
    .login-mima{
       margin-top: 20px;
    border: 1px solid #f8d3a7;
    background: #fffedf;
    padding: 6px; 
    display: none;
    }
</style>
<script>
import {mapActions} from "vuex"
export default {
    data(){
        return{
             username:'',
             password:'',
             usernameState:'',
             passwordState:'',
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
}


    },
    methods: {
        checkUsername(){  
      let usernameRegExp = /^[0-9a-zA-Z_]{6,20}$/;
      if(usernameRegExp.test(this.username)){
        return true;
      } else {
        return false;
      }
    },
     checkPassword(){
     
      let passwordRegExp = /^[0-9A-Za-z]{8,20}$/;
      if(passwordRegExp.test(this.password)){
        return true;
      } else {
        return false;
      }
    },
    handle(){
      if(this.checkUsername() && this.checkPassword()){
        //该将获取到的信息提交到WEB服务器
        let obj={
            username:this.username,
            password:this.password,
        }
        this.$store.dispatch('login',obj);
        this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
             this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
                 if(res.data.code==1){
                   this.$store.commit('logined');
                   localStorage.setItem('isLogined','1');
                     this.$router.push('/')
                 }else{  
                   this.$messagebox("登录提示","用户名或密码不正确")
                 }
             })
        })
       };
    }
    },
}
</script>