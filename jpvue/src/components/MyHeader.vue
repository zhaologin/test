<template>
      
         <div class="jp-1">
				<div class="jp-11">
					<a href="#" title="去哪儿旅游搜索引擎 Qunar.com" class="jp-12"><img src="/img/index/50214952fbf248f06af43a222c82a532.png" height="54px"></a>
				</div>
				<div class="jp-2">
					<ul class="jp-2-1">
						<li class="jp-2-2" v-if="this.$store.state.isLogined==0
						"><span>请</span><router-link to="/login" class="jp-2-3">登录</router-link><span>或</span><router-link to="/register" class="jp-2-3 jp-2-4">免费注册</router-link></li>
						<li class="jp-2-2" v-else><span style="margin-right:5px">{{this.$store.state.username}}</span><button @click="logut" class="jp-zhuxiao">注销</button></li>
						<li class="jp-2-2"><a href="javascript:;" class="jp-2-5"><i class="jp-2-6"></i><span>消息</span><b class="jp-2-7"></b></a></li>
						<li class="jp-2-2">
							<dl class="jp-2-11">
								<dt class="jp-2-10">
									<a href="#">
										<span class="jp-2-5 jp-2-8">查看订单</span>
										<b class="jp-2-9"></b>
									</a>
								</dt>
								<dd class="jp-2-12">
									<div><a href="javascript:;" class="jp-2-13">机票订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">酒店订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">公寓订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">团购订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">度假订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">门票订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">火车票订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">汽车票订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">车车订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">Q商城订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">当地人订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">金融订单</a></div>
									<div><a href="javascript:;" class="jp-2-13">礼品卡订单</a></div>
								</dd>
							</dl>
						</li>
						<li class="jp-2-2"><a href="javascript:;" class="jp-2-5">积分商城</a></li>
						<li class="jp-2-2"><a href="javascript:;" class="jp-2-5">联系客服</a></li>
					</ul>
				</div>
				<div class="jp-3">
					<ul class="jp-3-1">
						<li class="jp-3-3"><a class="jp-3-2" heaf="javascript:;">首页</a></li>
						<li class="jp-3-3"><router-link to="/wifi" class="jp-3-2" style="color:#000">机票</router-link></li>
						<li class="jp-3-3"><a class="jp-3-2" heaf="javascript:;">酒店</a></li>
						<li class="jp-3-3 jp-3-6"><a class="jp-3-2" heaf="javascript:;">团购</a><div class="jp-3-4">
						<a class="jp-3-5" href="javascript:;">度假团购</a>
						<a class="jp-3-5" href="javascript:;">周边休闲</a>
						<a class="jp-3-5" href="javascript:;">长线游</a>
					</div></li>
						 <li class="jp-3-3 jp-3-7 jp-3-6"><a class="jp-3-2" heaf="javascript:;">度假</a>
						 <div class="jp-3-4 jp-3-8">
			        <a class="jp-3-5" href="#">度假首页</a>
							<a class="jp-3-5" href="javascript:;">海外玩乐</a>
							<a class="jp-3-5" href="javascript:;">自由行</a>
							<a class="jp-3-5" href="javascript:;">出境游</a>
							<a class="jp-3-5" href="javascript:;">特卖</a>
							<a class="jp-3-5" href="javascript:;">周边游</a>
							<a class="jp-3-5" href="javascript:;">邮轮</a>
							<a class="jp-3-5" href="javascript:;">签证</a>
							<a class="jp-3-5" href="javascript:;"><span class="jp-3-9">海外购物</span><i class="jp-3-10"></i></a>
							<a class="jp-3-5" href="javascript:;">包团·定制</a>
						 </div></li>
						<li class="jp-3-3"><a class="jp-3-2" heaf="javascript:;">邮轮</a></li>
						<li class="jp-3-3 jp-3-11 jp-3-6"><a class="jp-3-2  " heaf="javascript:;">门票</a>
						 <div class="jp-3-4 jp-3-12">
							<a href="javascript:;" class="jp-3-5">境内门票</a>
							<a href="javascript:;" class="jp-3-5"><span class="jp-3-9">品质一日游</span><i class="jp-3-13 jp-3-10"></i></a>
							<a href="javascript:;" class="jp-3-5">玩转海外</a>
							<a href="javascript:;" class="jp-3-5">港澳台门票</a>
							<a href="javascript:;" class="jp-3-5">地图找景点</a>
						 </div>
						</li>
						<li class="jp-3-3"><a class="jp-3-2" heaf="#">火车票</a></li>
						<li class="jp-3-3 jp-3-14 jp-3-6"><a class="jp-3-2" heaf="#">攻略</a>
		        <div class="jp-3-4 jp-3-15">
							<a href="javascript:;" class="jp-3-5">攻略首页</a>
							<a href="javascript:;" class="jp-3-5">攻略库</a>
							<a href="javascript:;" class="jp-3-5">目的地</a>
							<a href="javascript:;" class="jp-3-5">创建行程</a>
							<a href="javascript:;" class="jp-3-5"><span class="jp-3-9">发表游记</span><i class="jp-3-10 jp-3-16"></i></a>
							<a href="javascript:;" class="jp-3-5"></a>
							<a href="javascript:;" class="jp-3-5"></a>
						</div>				
						</li>
						<li class="jp-3-3"><a class="jp-3-2" heaf="javascript:;">当地人</a></li>
						<li class="jp-3-3 jp-3-6 jp-3-17"><a class="jp-3-2" heaf="#">车车</a>
						<div class="jp-3-4 jp-3-18">
							<a href="javascript:;" class="jp-3-5">车车首页</a>
							<a href="javascript:;" class="jp-3-5"><span class="jp-3-9">国内租车</span><i class="jp-3-10 jp-3-19"></i></a>
							<a href="javascript:;" class="jp-3-5"><span class="jp-3-9">境外租车</span><i class="jp-3-10 jp-3-20"></i></a>
							<a href="javascript:;" class="jp-3-5">国际接送机</a>
						</div>
						</li>
						<li class="jp-3-3"><a class="jp-3-2" heaf="#">汽车票</a></li>
						<li class="jp-3-3"><a class="jp-3-2" heaf="#">境外</a></li>
					
					</ul>
					<div class="jp-3-4">
						<a class="jp-3-5" href="#">度假团购</a>
						<a class="jp-3-5" href="#">周边休闲</a>
						<a class="jp-3-5" href="#">长线游</a>
					</div>
				</div>
	      </div>
          
</template>
<style scoped>
    .jp-0{margin: 0 auto;width: 100%;min-width: 980px;height: 500px;font: normal 12px tahoma,arial,sans-seri;z-index: 99;width: 1200px;}
.jp-1{height: 73px;}
.jp-11{float: left;display: block;margin-top: 15px;width: 128px;height: 50px;position: relative;}
.jp-12{display: block;width: 136px;height: 54px;overflow: hidden;}
.jp-2{float: right;display: block;padding-top: 6px;width: 688px;height: 14px;}
.jp-2-1{float: right;display: block;line-height: 14px;font-family: tahoma,arial,sans-serif;}
.jp-2-1>li{border-right: 1px solid #d6d6d6;}
.jp-2-2{float: left;display: block;padding: 0 11px 0 10px;}
.jp-2-3{margin:0 5px;color: #0084bb;}
.jp-2-4{color:#00bcd4 ;}
.jp-2-5{color: #666;}
.jp-2-5:hover{color:#0084bb ;}
.jp-2-6{position: relative;width: 11px;height: 8px;display: inline-block;overflow-x: hidden;margin-right: 5px;background: url( /img/index/header_v13.png) -30px -153px no-repeat;}
.jp-2-7{position: relative;left: 6px;right: 10px;z-index: 1;width: 6px;height: 6px;overflow: hidden;background: url(/img/index/header_new_v7.png) -153px -21px no-repeat;display: inline-block;}
.jp-2-8{display: block;margin-bottom: -5px;padding: 4px 17px 1px 5px ;cursor: pointer;font-size: 12px;}
.jp-2-9{position: absolute;top: 10px;right: 10px;z-index: 1;display: block;width: 7px;height: 4px;background:  url(/img/index/header_new_v7.png) -152px -21px no-repeat;overflow: hidden;}
.jp-2-10{position: relative;top:-4px;margin: 0 0 -4px 1px;padding: 0 5px;}
.jp-2-11{position: relative;}
.jp-2-12{position: absolute;top: 17px;padding:0 0 5px;background: #fff;z-index: 99;left: -1px;display: none;}
.jp-2-13{display: block;padding: 0 10px 0 11px;line-height: 22px;white-space: nowrap;word-break: break-all;color: #666;}
.jp-2-13:hover{background-color:#0069ca ;color: #fff;}
.jp-2-10:hover b{background-position: -152px -29px ;}
.jp-2-11:hover{border-left: 1px solid #d6d6d6;border-top: 1px solid #d6d6d6;border-right: 1px solid #d6d6d6;box-sizing: border-box;margin: -1px;}
.jp-2-11:hover .jp-2-12{border-left: 1px solid #d6d6d6;border-bottom: 1px solid #d6d6d6;border-right: 1px solid #d6d6d6;display: block;z-index:10 ;display: block;}
.jp-zhuxiao{border: none; font-size: 12px;color:#0aa1ed;cursor: pointer;background-color: #fff;margin-top: -5px;}
.jp-3{float: left; padding: 25px 0 0 10px;position: relative;}
.jp-3-1{width: 923px;margin-right: -50px;}
.jp-3-3{float: left;height: 28px;}
.jp-3-2{float: left;cursor: pointer;height:1.2;font-size: 16px;font-weight:bold;margin: 0 10px;}
.jp-3-2:hover{color:#0084bb;}
.jp-3-4{height: 47px;border: 1px solid #ccc;position: absolute;left: 71px;bottom: -49px;display: none;background-color: #fff;z-index: 2;}
.jp-3-5:hover{background-color:#e0f4ff ;color:#00a3d2 ;}
.jp-3-5{line-height: 48px;padding: 8px 12px;font-weight: 600;color: #666;margin: 0 2px;}
.jp-3-6:hover{border-left: 1px solid #ccc;border-right: 1px solid #ccc;margin: 0 -1px;}
.jp-3-6:hover .jp-3-4{display: block;}
.jp-3-7:hover .jp-3-8{display: block;}
.jp-3-9{color: red;}
.jp-3-10{background: url(/img/index/header_new_v7.png) -151px -9px no-repeat;position: absolute;right: 86px;top:9px;width: 9px;height: 9px;}
.jp-3-11:hover .jp-3-12{display: block;}
.jp-3-12{left: 227px;}
.jp-3-13{left: 150px;}

.jp-3-14:hover .jp-3-15{display: block;}
.jp-3-15{left: 349px;}
.jp-3-16{left: 341px;}
.jp-3-17:hover .jp-3-18{display: block;}
.jp-3-18{left: 460px;}
.jp-3-19{background: url(/img/index/header_new_v7.png) -151px 0 no-repeat;position: absolute;right: 171px;}
.jp-3-20{left: 214px;}
</style>
<script>
export default {
	methods: {
		 logut(){
            this.$store.commit('logut')
        },
	},
}
</script>