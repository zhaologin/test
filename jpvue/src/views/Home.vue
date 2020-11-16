<template>
    <div class="index">
        <my-header></my-header>
        <div class="jp-4">
            <div class="jp-41">
				   <div class="jp-4-1">
					   <ul class="jp-4-2">
						  <li class="jp-4-3 active" data-btn=item1><i class="jp-4-4 "></i><span>目的地</span></li>
						  <li class="jp-4-3" data-btn=item2><i class=" jp-4-4 jp-4-5"></i><span>WiFi租赁</span></li>
						  <li class="jp-4-3" data-btn=item3><i class=" jp-4-4 jp-4-6"></i><span>包车游览</span></li>
						  <li class="jp-4-3" data-btn=item4><i class=" jp-4-4 jp-4-7"></i><span>接送机</span></li>
						  <li class="jp-4-3 jp-4-33" data-btn=item5><i class=" jp-4-4 jp-4-8"></i><span>当地顾问</span></li>
					   </ul>
				</div>
				<div class="jp-4-91">
			        <div class="jp-4-9 active" id="item1">
						 <div class="jp-4-10">搜索当地自由行最热门的特色玩法</div>
						 <div class="jp-4-99">
					     
					     <div class="jp-4-11">
						    <div>
									 <input class="jp-4-14" placeholder=" 请输入你想去的国家、城市或关键字">
									 <div class="jp-4-15">
										<dl>
											<dt>国际·港澳台</dt>
											<dd>
												<a href="#">日本</a>
												<a href="#">泰国</a>
												<a href="#">香港</a>
												<a href="#">美国</a>
												<a href="#">新加坡</a>
												<a href="#">土耳其</a>
												<a href="#">台湾</a>
												<a href="#">法国</a>
												<a href="#">英国</a>
												<a href="#">加拿大</a>
												<a href="#">澳大利亚</a>
												<a href="#">曼谷</a>
												<a href="#">清迈</a>
												<a href="#">普吉岛</a>
											</dd>
										</dl>
										<dl>
											<dt>国内</dt>
											<dd>
												<a href="#">敦煌</a>
												<a href="#">呼伦贝尔</a>
												<a href="#">西宁</a>
												<a href="#">西安</a>
												<a href="#">厦门</a>
												<a href="#">成都</a>
												<a href="#">北京</a>
												<a href="#">大理</a>
												<a href="#">杭州</a>
												<a href="#">昆明</a>
												<a href="#">青岛</a>
												<a href="#">张家界</a>
											</dd>
										</dl>
									</div>
								</div>
							  
						   
						    <div class="jp-4-16">
							    <a href="#" class="jp-4-17">立即搜索</a>
					      </div>
					     </div>
						 </div>
             <div class="jp-4-18">
						  <span>精选推荐</span>
						  <a href="#">普吉岛</a>
						  <a href="#">清迈</a>
						  <a href="#">曼谷</a>
						  <a href="#">日本</a>
						  <a href="#">敦煌</a>
						  <a href="#">呼伦贝尔</a>
						  <a href="#">三亚</a>
						  <a href="#">厦门</a>
						  <a href="#">台湾</a>
						  <a href="#">北京专车向导</a>
						  <a href="#">巴厘岛</a>
						  <a href="#">九寨沟</a>
						  <a href="#">法国</a>
						  <a href="#">新加坡</a>
						  <a href="#">马尔代夫</a>
						  <a href="#">美国</a>
						  <a href="#">丽江</a>
						  <a href="#">北京</a>
						  <a href="#">成都</a>
					  </div>
					</div>
					<div class="jp-4-9" id="item2">
						<div class="jp-4-10">随时随地有WiFi，海外上网更便宜</div>
						<div class="jp-4-99 jp-4-991">
						
						<div class="jp-4-11">
						   <div>
									<input class="jp-4-14" placeholder=" 请输入你想去的国家、城市" v-model="keyword">
									<div class="jp-4-15">
									   <dl>
										   <dt>国际·港澳台</dt>
										   <dd>
											   <a href="#">日本</a>
											   <a href="#">泰国</a>
											   <a href="#">香港</a>
											   <a href="#">美国</a>
											   <a href="#">新加坡</a>
											   <a href="#">土耳其</a>
											   <a href="#">台湾</a>
											   <a href="#">法国</a>
											   <a href="#">英国</a>
											   <a href="#">加拿大</a>
											   <a href="#">澳大利亚</a>
											   <a href="#">曼谷</a>
											   <a href="#">清迈</a>
											   <a href="#">普吉岛</a>
										   </dd>
									   </dl>
									   
								   </div>
							   </div>
							 <div class="jp-4-input block" >
								 
                                   <el-date-picker
                                         v-model="value1"
                                     type="date"
                                      placeholder="选择日期">
                                    </el-date-picker>
                                  
								
							 </div>

						  
						   <div class="jp-4-16">
							   <a href="#" class="jp-4-17" @cilck="cearch">立即搜索</a>
						 </div>
						</div>
						</div>
			<div class="jp-4-181">
						 <span class="jp-4-182">TIPS:</span>
						 国外上网地图导航、查询攻略、刷微博微信的必备神器，支持国内快递或机场自提
					 </div>
					</div>
					<div class="jp-4-9" id="item3">
						<div class="jp-4-10">舒适专车接送，中文随行讲解</div>
						<div class="jp-4-99 jp-4-991">
						
						<div class="jp-4-11">
						   <div>
									<input class="jp-4-14" placeholder=" 请输入你想去的国家、城市" v-model="keyword">
									<div class="jp-4-15">
									   <dl>
										   <dt>国际·港澳台</dt>
										   <dd>
											   <a href="#">日本</a>
											   <a href="#">泰国</a>
											   <a href="#">香港</a>
											   <a href="#">美国</a>
											   <a href="#">新加坡</a>
											   <a href="#">土耳其</a>
											   <a href="#">台湾</a>
											   <a href="#">法国</a>
											   <a href="#">英国</a>
											   <a href="#">加拿大</a>
											   <a href="#">澳大利亚</a>
											   <a href="#">曼谷</a>
											   <a href="#">清迈</a>
											   <a href="#">普吉岛</a>
										   </dd>
									   </dl>
									   
								   </div>
							   </div>
							 <div class="jp-4-input block" >
								 <el-date-picker
                                   v-model="value1"
                                   type="date"
                                   placeholder="开始日期">
                                </el-date-picker>
								<el-date-picker
                                   v-model="value1"
                                   type="date"
                                   placeholder="结束日期">
                                </el-date-picker>
								
							 </div>
                             <div class="jp-4-rinput">
								<input type="text" placeholder="   1-4人" class="jp-4-baimg"> 
								<i class="jp-4-i3"></i>
							 </div>
						      <div class="jp-4-rshu">
								  <ul>
									  <li>1-4人</li>
									  <li>5-7人</li>
									  <li>8人以上</li>
								  </ul>
							  </div>
						   <div class="jp-4-16">
							   <a href="#" class="jp-4-17" @cilck="cearch">立即搜索</a>
						 </div>
						</div>
						</div>
			<div class="jp-4-181">
						 <span class="jp-4-182">TIPS:</span>
						 国外上网地图导航、查询攻略、刷微博微信的必备神器，支持国内快递或机场自提
					 </div>
					</div>
					<div class="jp-4-9" id="item4">
						<div class="jp-js">
							<ul>
								<li class="jp-jj active" data-div="itm1">接机</li>
								<li class="jp-sj" data-div="itm2">送机</li>
							</ul>
						</div>
						<div class="jp-4-99 itm1">
						
						<div class="jp-4-11">
						   <div>
									<input class="jp-4-14" placeholder=" 请输入你想去的国家、城市或关键字" v-model="keyword">
									<div class="jp-4-15">
									   <dl>
										   <dt>国际·港澳台</dt>
										   <dd>
											   <a href="#">日本</a>
											   <a href="#">泰国</a>
											   <a href="#">香港</a>
											   <a href="#">美国</a>
											   <a href="#">新加坡</a>
											   <a href="#">土耳其</a>
											   <a href="#">台湾</a>
											   <a href="#">法国</a>
											   <a href="#">英国</a>
											   <a href="#">加拿大</a>
											   <a href="#">澳大利亚</a>
											   <a href="#">曼谷</a>
											   <a href="#">清迈</a>
											   <a href="#">普吉岛</a>
										   </dd>
									   </dl>
									   <dl>
										   <dt>国内</dt>
										   <dd>
											   <a href="#">敦煌</a>
											   <a href="#">呼伦贝尔</a>
											   <a href="#">西宁</a>
											   <a href="#">西安</a>
											   <a href="#">厦门</a>
											   <a href="#">成都</a>
											   <a href="#">北京</a>
											   <a href="#">大理</a>
											   <a href="#">杭州</a>
											   <a href="#">昆明</a>
											   <a href="#">青岛</a>
											   <a href="#">张家界</a>
										   </dd>
									   </dl>
								   </div>
							   </div>
							 
						  
						   <div class="jp-4-16">
							   <a href="#" class="jp-4-17" @cilck="cearch">立即搜索</a>
						 </div>
						</div>
						</div>
			
					</div>
					<div class="jp-4-9" id="item5">
						<div class="jp-4-10">5搜索当地自由行最热门的特色玩法</div>
						<div class="jp-4-99">
						
						<div class="jp-4-11">
						   <div>
									<input class="jp-4-14" placeholder=" 请输入你想去的国家、城市或关键字" v-model="keyword">
									<div class="jp-4-15">
									   <dl>
										   <dt>国际·港澳台</dt>
										   <dd>
											   <a href="#">日本</a>
											   <a href="#">泰国</a>
											   <a href="#">香港</a>
											   <a href="#">美国</a>
											   <a href="#">新加坡</a>
											   <a href="#">土耳其</a>
											   <a href="#">台湾</a>
											   <a href="#">法国</a>
											   <a href="#">英国</a>
											   <a href="#">加拿大</a>
											   <a href="#">澳大利亚</a>
											   <a href="#">曼谷</a>
											   <a href="#">清迈</a>
											   <a href="#">普吉岛</a>
										   </dd>
									   </dl>
									   <dl>
										   <dt>国内</dt>
										   <dd>
											   <a href="#">敦煌</a>
											   <a href="#">呼伦贝尔</a>
											   <a href="#">西宁</a>
											   <a href="#">西安</a>
											   <a href="#">厦门</a>
											   <a href="#">成都</a>
											   <a href="#">北京</a>
											   <a href="#">大理</a>
											   <a href="#">杭州</a>
											   <a href="#">昆明</a>
											   <a href="#">青岛</a>
											   <a href="#">张家界</a>
										   </dd>
									   </dl>
								   </div>
							   </div>
							 
						  
						   <div class="jp-4-16">
							   <a href="#" class="jp-4-17" @cilck="cearch">立即搜索</a>
						 </div>
						</div>
						</div>
			<div class="jp-4-18">
						 <span>精选推荐</span>
						 <a href="#">普吉岛</a>
						 <a href="#">清迈</a>
						 <a href="#">曼谷</a>
						 <a href="#">日本</a>
						 <a href="#">敦煌</a>
						 <a href="#">呼伦贝尔</a>
						 <a href="#">三亚</a>
						 <a href="#">厦门</a>
						 <a href="#">台湾</a>
						 <a href="#">北京专车向导</a>
						 <a href="#">巴厘岛</a>
						 <a href="#">九寨沟</a>
						 <a href="#">法国</a>
						 <a href="#">新加坡</a>
						 <a href="#">马尔代夫</a>
						 <a href="#">美国</a>
						 <a href="#">丽江</a>
						 <a href="#">北京</a>
						 <a href="#">成都</a>
					 </div>
					</div>
				</div>	 
			  </div>
        </div>
    </div>
</template>
<style scoped>
     .jp-4{border-top:1px solid #52c2d5 ;height: 331px;}
.jp-41{border: 6px solid #1cafc8;margin-top: 10px;width: 710px;height: 309px;float: left;}
.jp-4-1{font-size: 14px;float: left;width: 106px;height: 308px;clear: both;}
.jp-4-2{overflow: hidden;}
.jp-4-3{height: 61px;line-height: 61px;color: #fff;padding: 0 0 0 10px;border-bottom: 1px solid #52c2d5;background-color:#1cafc8;cursor: pointer;}
.jp-4-3.active{color:#3292a7 ;background-color:#fff ;}
.jp-4-33{border-bottom-color:#1cafc8 ;}
.jp-4-4{background: url(/img/index/tabIco.png) -4px -2px no-repeat;display: inline-block;width: 19px;height: 16px;overflow: hidden;vertical-align: middle;margin-right: 7px;}
.jp-4-5{background-position:  -4px -73px ;}
.jp-4-6{background-position:  -3px -27px ;}
.jp-4-7{background-position:  -2px -48px ;}
.jp-4-8{background-position: -5px -97px ;}
.jp-4-3.active>.jp-4-4{background-position: -26px -2px;}
.jp-4-3.active>.jp-4-5{
	background-position: -29px -73px;
}
.jp-4-3.active>.jp-4-6{
	background-position: -29px -25px;
}
.jp-4-3.active>.jp-4-7{
	background-position: -29px -48px;
}
.jp-4-3.active>.jp-4-8{
	background-position: -31px -97px;
}
.jp-4-91{width:574px;height: 308px;float: left;margin: 10px 15px;}
.jp-4-9{width:574px;height: 308px;float: left;display: none;}
.jp-4-9.active{display: block;}
.jp-4-99{width:575px;height: 205px;background: #f4fbfc;}
.jp-4-991{height:214px ;}
.jp-4-10{color: #1cafc8;font-size: 14px;padding: 1px 0 14px 0;font-family: sumsun;font-weight: 600;}
.jp-4-11{padding: 30px 0 0 30px;height: 176px;position: relative;}

.jp-4-14{line-height: 20px;height: 20px;font-size: 14px;columns: #333;width:513px;padding: 8px 0; border: #bcd7db solid 1px;}
.jp-4-15{position: absolute;padding: 15px 15px 1px 15px;border: 1px solid #bcd7db;margin-right: 30px;border-top:0 ;}
.jp-4-15>dl{margin-bottom: 10px;}
.jp-4-15 dt{color: #3292a7;font-weight: bold;margin-bottom: 3px;}
.jp-4-15 a{color: #666;margin-right: 20px;}
.jp-4-15 a:hover{color: red;}
.jp-4-15{display: none;z-index: 1;background-color: #fff;}
.jp-4-16{text-align: right;padding-right: 30px;}
.jp-4-17{display: inline-block;background: #fc582f;border-radius: 3px;padding: 0 28px;height: 40px;line-height: 40px;font-size: 18px;color: #fff;margin-top: 20px;}
.jp-4-18{margin-top: 10px;margin-right: 90px;color:  #999;}
.jp-4-18>span{margin-right: 7px;}
.jp-4-18>a{color: #666;margin: 0 10px 3px 0;}
.jp-4-18>a:hover{color: #00a3d2;}
.jp-4-181{padding-top: 16px;color: #666;}
.jp-4-182{color: #999;}
.jp-4-input{
	padding-top: 20px;
}
.el-date-editor.el-input{
	width: 247px;
	margin-right: 10px;
	
}
.el-input__inner{
	font-size: 14px;
	width: 221px;
    margin-right: 15px;
    padding-right: 25px;
	height: 37px;
	border:#bcd7db solid 1px ;
	border-radius: 0 ;
}
.el-picker-panel .el-date-picker .el-popper{
	width: 247px;
}
.jp-4-rinput{
	float: left;
	width: 246px;
	margin-top: 20px;
	font-size: 14px;
}
.jp-4-rinput>input{
  height: 37px;
  width: 100%;
  border: 1px solid #bcd7db;
}

.jp-4-rshu{
	width: 246px;
	height: 82px;
	position: absolute;
	z-index: 10;
	border:1px solid #bcd7db ;
	top: 185px;
	background-color: #fff;
	display: none;
	cursor: pointer;
}
.jp-4-rshu li{
	font-size: 14px;
	padding-left: 14px;
	color: #666;
	padding-bottom: 8px;
}
.jp-4-i1{
	top: 100px;
	right: 307px;
	display: block;
    width: 16px;
    height: 13px;
    position: absolute;
    background: url(/img/index/symbol2.png) 0 -13px no-repeat;
	overflow: hidden;
	cursor: pointer;
}
.jp-4-i2{
	top: 100px;
	right: 40px;
	display: block;
    width: 16px;
    height: 13px;
    position: absolute;
    background: url(/img/index/symbol2.png) 0 -13px no-repeat;
	overflow: hidden;
	cursor: pointer;
}
.jp-4-i3{
	top: 165px;
	left: 257px;
	display: block;
    width: 8px;
    height: 4px;
    position: absolute;
    background: url(/img/index/symbol2.png) -9px 0 no-repeat;
	overflow: hidden;
	cursor: pointer;
}
</style>
<script>
export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }  
          
          },
        value1:'',  
      }
      
      },
    mounted() {
        $(".jp-4-3").click(function(){
    if(!$(this).hasClass("active")){
        $(this).addClass("active");
    }
    $(this).siblings().removeClass("active");
    var btnId=$(this).data("btn");
    $(`#${btnId}`).show().siblings().hide();
  })


$(".jp-4-14").click(function(){
    $(".jp-4-15").toggle();

    // if($a.css("display")=="none"){
    //     $a.show();
    // }else{$a.hide();}
  }) 
  $(".jp-5-4").click(function(){
    if(!$(this).hasClass("active")){
        $(this).addClass("active");
    }
    $(this).siblings().removeClass("active");
    var imgs=$(this).data("img");
    $(`#${imgs}`).show().siblings().hide();
  });
  $(".jp-4-rinput").click(function(){
    $(".jp-4-rshu").toggle();
  })
    },
    
}
</script>
