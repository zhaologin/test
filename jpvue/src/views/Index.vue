<template>
<div class="index">
    <my-header></my-header>
        <div class="jp-4">
			  <div class="jp-41">
				   <div class="jp-4-1">
					   <ul class="jp-4-2">
						  <li class="jp-4-3 active" data-btn=item1><i class="jp-4-4"></i><span>目的地</span></li>
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
									<input class="jp-4-14" placeholder=" 请输入你想去的国家、城市">
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
							 <div class="jp-4-input block">
								<el-date-picker
                                   v-model="value1"
                                   type="date"
                                   placeholder="开始日期">
                                </el-date-picker>
								<el-date-picker
                                   v-model="value2"
                                   type="date"
                                   placeholder="结束日期">
                                </el-date-picker>
							 </div>

						  
						   <div class="jp-4-16">
							   <a href="#" class="jp-4-17">立即搜索</a>
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
									<input class="jp-4-14" placeholder=" 请输入你想去的国家、城市">
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
                                   v-model="value3"
                                   type="date"
                                   placeholder="开始日期">
                                </el-date-picker>
								<el-date-picker
                                   v-model="value4"
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
							   <a href="#" class="jp-4-17">立即搜索</a>
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
			
					</div>
					<div class="jp-4-9" id="item5">
						<div class="jp-4-10">5搜索当地自由行最热门的特色玩法</div>
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
							 <div class="jp-4-input block" >
								 <el-date-picker
                                   v-model="value5"
                                   type="date"
                                   placeholder="开始日期">
                                </el-date-picker>
								<el-date-picker
                                   v-model="value6"
                                   type="date"
                                   placeholder="结束日期">
                                </el-date-picker>
								
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
				</div>	 
			  </div>   
			  <div id="main">
		    <div id="banner">
		        <div id="btn-left"></div>
		        <ul id="ul-imgs" style="width: 6000px;margin-left: 0px;">
		            <li><a href="#"><img src="/img/index/0b8b0ccb-aea0-46ac-aa62-adcd141efe10.jpg" alt=""></a></li>
		            <li><a href="#"><img src="/img/index/259a631d-1e38-40ba-a034-f9c0cad7a5f0.jpg" alt=""></a></li>
		            <li><a href="#"><img src="/img/index/ee9d1ae0971ae402.jpg" alt=""></a></li>
		            <li><a href="#"><img src="/img/index/9b6daaaf97b6fa02.jpg" alt=""></a></li>
		            <li><a href="#"><img src="/img/index/e6b2f12e-3ee5-457e-89da-43c7a73bb864.jpg" alt=""></a></li>
		            <li><a href="#"><img src="/img/0b8b0ccb-aea0-46ac-aa62-adcd141efe10.jpg" alt=""></a></li>
		        </ul>
		        <ul id="ul-idxs">
		             <li class="active"></li>
		             <li></li>
		             <li></li>
		             <li></li>
		             <li></li>
					 
		        </ul>
		        <div id="btn-right"></div>
		    </div>
		  </div>
			</div>
	    <div class="jp-5">
				<div class="jp-5-1">
					<div class="jp-5-2">
						<ul class="jp-5-3">
							<li class="jp-5-4 active " data-img="itm1"><a href="javascript:;" class="jp-5-5">【泰国】自由行必备</a></li>
							<li class="jp-5-4" data-img="itm2"><a href="javascript:;" class="jp-5-5">【日本】自由行必备</a></li>
							<li class="jp-5-4" data-img="itm3"><a href="javascript:;" class="jp-5-5">【台湾】自由行必备</a></li>
							<li class="jp-5-4" data-img="itm4"><a href="javascript:;" class="jp-5-5">【港澳】自由行必备</a></li>
							<li class="jp-5-4" data-img="itm5"><a href="javascript:;" class="jp-5-5">【马来西亚】自由行必备</a></li>
						</ul>
					</div>
					<div class="jp-5-8">
					  <div class="jp-5-6" id="itm1">
						<div class="top-6-2">
							<a href="#"><img src="/img/index/5fc0e6ad4a426902.jpg_450x300_a95baf25.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">¥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售27</span>
									</div>
							</a>	
						</div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/5fc0e6ad4a426902.jpg_450x300_a95baf25.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售27</span>
									</div>
							</a>	
						</div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/5fc0e6ad4a426902.jpg_450x300_a95baf25.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售27</span>
									</div>
							</a>	
						</div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/5fc0e6ad4a426902.jpg_450x300_a95baf25.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售27</span>
									</div>
							</a>	
						</div>
					  </div>
					  <div class="jp-5-7" id="itm2">
						<div class="top-6-2">
							<a href="#"><img src="/img/index/0b9e9b3ef1b0ac02.jpg_450x300_e37f95b5.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售27</span>
									</div>
							</a>	
						</div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/0b9e9b3ef1b0ac02.jpg_450x300_e37f95b5.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售27</span>
									</div>
							</a>	
						</div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/0b9e9b3ef1b0ac02.jpg_450x300_e37f95b5.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售27</span>
									</div>
							</a>	
						</div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/0b9e9b3ef1b0ac02.jpg_450x300_e37f95b5.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售27</span>
									</div>
							</a>	
						</div>
						
					  </div>
					  <div class="jp-5-7" id="itm3">
						  <div class="top-6-2">
							<a href="#"><img src="/img/index/034ad57172c23802.png_450x300_ff40d729.png" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售9</span>
									</div>
							</a>	
						  </div>
						  <div class="top-6-2">
							<a href="#"><img src="/img/index/034ad57172c23802.png_450x300_ff40d729.png" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售9</span>
									</div>
							</a>	
						  </div>
						  <div class="top-6-2">
							<a href="#"><img src="/img/index/034ad57172c23802.png_450x300_ff40d729.png" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售9</span>
									</div>
							</a>	
						  </div>
						  <div class="top-6-2">
							<a href="#"><img src="/img/index/034ad57172c23802.png_450x300_ff40d729.png" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售9</span>
									</div>
							</a>	
						  </div>
					  </div>
					  <div class="jp-5-7" id="itm4">
						<div class="top-6-2">
							<a href="#"><img src="/img/index/9544ed15c519d302.jpg_450x300_7ecdbf71.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售14</span>
									</div>
							</a>	
						  </div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/9544ed15c519d302.jpg_450x300_7ecdbf71.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售14</span>
									</div>
							</a>	
						  </div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/9544ed15c519d302.jpg_450x300_7ecdbf71.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售14</span>
									</div>
							</a>	
						  </div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/9544ed15c519d302.jpg_450x300_7ecdbf71.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售14</span>
									</div>
							</a>	
						  </div>
					  </div>
					  <div class="jp-5-7" id="itm5">
						<div class="top-6-2">
							<a href="#"><img src="/img/index/c5879045-d9c3-4754-91f0-35d3e4bc9923.jpg_450x300_42f64cff.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售14</span>
									</div>
							</a>	
						</div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/c5879045-d9c3-4754-91f0-35d3e4bc9923.jpg_450x300_42f64cff.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售14</span>
									</div>
							</a>	
						</div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/c5879045-d9c3-4754-91f0-35d3e4bc9923.jpg_450x300_42f64cff.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售14</span>
									</div>
							</a>	
						</div>
						<div class="top-6-2">
							<a href="#"><img src="/img/index/c5879045-d9c3-4754-91f0-35d3e4bc9923.jpg_450x300_42f64cff.jpg" ></a>
							<a href="#">
								<p class="top-6-3">【漫游宝】澳新联游4GWiFi 无限流量不降速 （全国自取/邮寄）</p>
								
									<p class="top-6-4">￥  <span class="top-6-5">28.5</span> /台天</p>
									<div class="top-6-6">
										
										<i class="top-6-7"></i>
										<span>澳大利亚</span>
										<span class="top-6-8">已售14</span>
									</div>
							</a>	
						</div>
					  </div>
					</div>
					<div class="jp-5-9">
						<h2>国际·港澳台 热门旅行地</h2>
						<div class="jp-5-10">
							<ul class="jp-5-11">
								<li class="jp-5-12">
									<div>
										<a href="#" class="jp-5-13">
										 <span>泰国</span>
										 <i class="jp-5-14"></i>
										</a>
									    <div class="jp-5-15">
										<a href="#" class="jp-5-16">
											<img src="/img/index/ad6a.jpg" alt="">
											<em>普吉岛</em>
										</a>
									
									  <div class="jp-5-17">
										<p>
											<span>
												城市
											</span>
											<a href="#" class="jp-5-18">曼谷</a><em>|</em>
											<a href="#">清迈</a><em>|</em>
											<a href="#" class="jp-5-18">芭提雅</a><em>|</em>
											<a href="#">苏梅岛</a><em>|</em>
										</p>
										<p>
											<span>
												景点
											</span>
											<a href="#" class="jp-5-18">大皇宫</a><em>|</em>
											<a href="#">幻多奇</a><em>|</em>
											<a href="#">皇帝岛</a><em>|</em>
											<a href="#">PP岛</a><em>|</em>
										</p>
										<p>
											<span>
												热门
											</span>
											<a href="#">人妖秀</a><em>|</em>
											<a href="#">SPA</a><em>|</em>
											<a href="#">丛林飞跃</a><em>|</em>
											<a href="#">野外探险</a><em>|</em>
										</p>
									  </div>
                                        </div>
									</div>
								</li>
								<li class="jp-5-12">
									<div>
										<a href="#" class="jp-5-13">
										<span>海岛</span>
										<i class="jp-5-14"></i>
										</a>
									    <div class="jp-5-15">
										<a href="#" class="jp-5-16">
											<img src="/img/index/2cfe0374f850a1.jpg" alt="">
											<em>马来西亚</em>
										</a>
									
									  <div class="jp-5-17">
										<p>
											<span>
												城市
											</span>
											<a href="#">毛里求斯</a><em>|</em>
											<a href="#">巴厘岛</a><em>|</em>
											<a href="#">马尔代夫</a><em>|</em>
											<a href="#">塞班岛</a><em>|</em>
										</p>
										<p>
											<span>
												景点
											</span>
											<a href="#">海豚湾</a><em>|</em>
											<a href="#">马埃岛</a><em>|</em>
											<a href="#">军舰岛</a><em>|</em>
											<a href="#">红树林</a><em>|</em>
										</p>
										<p>
											<span>
												热门
											</span>
											<a href="#">浮潜</a><em>|</em>
											<a href="#">海钓</a><em>|</em>
											<a href="#" class="jp-5-18">海底漫步</a><em>|</em>
											
										</p>
									  </div>
                                        </div>
									</div>
								</li>
								<li class="jp-5-12">
									<div>
										<a href="#" class="jp-5-13">
										<span>日本</span>
										<i class="jp-5-14"></i>
										</a>
									    <div class="jp-5-15">
										<a href="#" class="jp-5-16">
											<img src="/img/index/aada0746810f0f60b6b1b88a99.jpg_135x90x92.jpg" alt="">
											<em>东京</em>
										</a>
									
									  <div class="jp-5-17">
										<p>
											<span>
												城市
											</span>
											<a href="#">大阪</a><em>|</em>
											<a href="#">京都</a><em>|</em>
											<a href="#">北海道</a><em>|</em>
											<a href="#">冲绳</a><em>|</em>
										</p>
										<p>
											<span>
												景点
											</span>
											<a href="#">富士山</a><em>|</em>
											<a href="#" class="jp-5-18">迪士尼</a><em>|</em>
											<a href="#">环球影城</a><em>|</em>
											<a href="#">浅草寺</a><em>|</em>
										</p>
										<p>
											<span>
												热门
											</span>
											<a href="#">日本高铁</a><em>|</em>
											<a href="#">温泉</a><em>|</em>
											<a href="#">和服</a><em>|</em>
											<a href="#">包车服务</a><em>|</em>
										</p>
									  </div>
                                        </div>
									</div>
								</li>
								<li class="jp-5-12">
									<div>
										<a href="#" class="jp-5-13">
										<span>美国</span>
										<i class="jp-5-14"></i>
										</a>
									    <div class="jp-5-15">
										<a href="#" class="jp-5-16">
											<img src="/img/index/4426a7dfdb37d7e56e3653dbd4.jpg_135x90x92.jpg" alt="">
											<em>纽约</em>
										</a>
									
									  <div class="jp-5-17">
										<p>
											
											<a href="#">洛杉矶</a><em>|</em>
											<a href="#"> 华盛顿</a><em>|</em>
											<a href="#"> 旧金山</a><em>|</em>
											<a href="#"> 拉斯维加斯</a><em>|</em>
										</p>
										<p>
											
											<a href="#">帝国大厦</a><em>|</em>
											<a href="#"> 环球影城</a><em>|</em>
											<a href="#"> 大峡谷</a><em>|</em>
											<a href="#"> 自由女神</a><em>|</em>
										</p>
										<p>
											
											<a href="#">奥特莱斯 </a><em>|</em>
											<a href="#">游学</a><em>|</em>
											<a href="#" class="jp-5-18">好莱坞 </a><em>|</em>
										</p>
									  </div>
                                        </div>
									</div>
								</li>
								
							</ul>
							<div class="jp-lvxing-img">
								<a href="javascript:;"><img src="/img/index/abde8f8a454e71.jpg" alt=""></a>
							</div>
						</div>
						
					</div>
					<div class="jp-5-9">
						<h2>国内热门旅行地</h2>
						<div class="jp-5-10">
							<ul class="jp-5-11">
								<li class="jp-5-12">
									<div>
										<a href="#" class="jp-5-13">
										<span>四川</span>
										<i class="jp-5-14"></i>
										</a>
									    <div class="jp-5-15">
										<a href="#" class="jp-5-16">
											<img src="/img/index/chendu.jpg" alt="">
											<em>成都</em>
										</a>
									
									  <div class="jp-5-17">
										<p>
											<span>
												城市
											</span>
											<a href="#">乐山</a><em>|</em>
											<a href="#">峨眉山市</a><em>|</em>
											<a href="#">雅安</a><em>|</em>
										</p>
										<p>
											<span>
												景点
											</span>
											<a href="#">九寨沟</a><em>|</em>
											<a href="#">宽窄巷子</a><em>|</em>
											<a href="#">乐山大佛</a><em>|</em>
										</p>
										<p>
											<span>
												热门
											</span>
											<a href="#">大熊猫</a><em>|</em>
											<a href="#">都姜堰</a><em>|</em>
											<a href="#">川剧变脸</a><em>|</em>
											<a href="#">锦里</a><em>|</em>
										</p>
									  </div>
                                        </div>
									</div>
								</li>
								<li class="jp-5-12">
									<div>
										<a href="#" class="jp-5-13">
										<span>西北</span>
										<i class="jp-5-14"></i>
										</a>
									    <div class="jp-5-15">
										<a href="#" class="jp-5-16">
											<img src="/img/index/cc31e51b789038.jpg" alt="">
											<em>西宁</em>
										</a>
									
									  <div class="jp-5-17">
										<p>
											
											<a href="#">张掖</a><em>|</em>
											<a href="#">敦煌</a><em>|</em>
											<a href="#">兰州</a><em>|</em>
											<a href="#">祁连山草原</a><em>|</em>
											<a href="#">卓尔山</a><em>|</em>
										</p>
										<p>
											
											<a href="#">莫高窟</a><em>|</em>
											<a href="#">青海湖</a><em>|</em>
											<a href="#">张掖七彩丹霞</a><em>|</em>
											<a href="#">玉门关 </a><em>|</em>
										</p>
										
									  </div>
                                        </div>
									</div>
								</li>
								<li class="jp-5-12">
									<div>
										<a href="#" class="jp-5-13">
										<span>云南</span>
										<i class="jp-5-14"></i>
										</a>
									    <div class="jp-5-15">
										<a href="#" class="jp-5-16">
											<img src="/img/index/kunming.jpg" alt="">
											<em>昆明</em>
										</a>
									
									  <div class="jp-5-17">
										<p>
											<a href="#">大理</a><em>|</em>
											<a href="#">腾冲</a><em>|</em>
											<a href="#">西双版纳</a><em>|</em>
											<a href="#">丽江古城</a><em>|</em>
											<a href="#">特价团</a><em>|</em>
										</p>
										<p>
											<a href="#">玉龙雪山</a><em>|</em>
											<a href="#">拉市海</a><em>|</em>
											<a href="#">石林</a><em>|</em>
											<a href="#">泸沽湖</a><em>|</em>
										</p>
										<p>
											<a href="#">苍山洱海 </a><em>|</em>
											<a href="#">旅游包车</a><em>|</em>
											<a href="#">梅里雪山</a><em>|</em>
											<a href="#">虎跳峡自驾</a><em>|</em>
										</p>
									  </div>
                                        </div>
									</div>
								</li>
								<li class="jp-5-12">
									<div>
										<a href="#" class="jp-5-13">
										<span>江南</span>
										<i class="jp-5-14"></i>
										</a>
									    <div class="jp-5-15">
										<a href="#" class="jp-5-16">
											<img src="/img/index/shanghai.jpg" alt="">
											<em>上海</em>
										</a>
									
									  <div class="jp-5-17">
										<p>
											
											<a href="#">杭州</a><em>|</em>
											<a href="#">南京</a><em>|</em>
											<a href="#">苏州</a><em>|</em>
											<a href="#">黄山</a><em>|</em>
											<a href="#">乌镇</a><em>|</em>
											<a href="#">西塘</a><em>|</em>
										</p>
										<p>
											<a href="#">扬州</a><em>|</em>
											<a href="#">绍兴</a><em>|</em>
											<a href="#">苏州园林</a><em>|</em>
											<a href="#">外滩</a><em>|</em>
											<a href="#">周庄</a><em>|</em>
										</p>
										<p>  
											<a href="#">千岛湖</a><em>|</em>
											<a href="#">拙政园</a><em>|</em>
											<a href="#">宏村</a><em>|</em>
											<a href="#">瘦西湖</a><em>|</em>
											<a href="#">五泄飞瀑</a><em>|</em>
										</p>
									  </div>
                                        </div>
									</div>
								</li>
								
							</ul>
							<div class="jp-lvxing-img">
								<a href="javascript:;"><img src="img/index/8acbbd01ebbb3fd911aada6646.jpg_92.jpg" alt=""></a>
							</div>
						</div>
					</div>
					<div class="jp-zhuti">
						<h2>主题游玩</h2>
						<ul>
							<li class="jp-zhuti-haidao">
								<div>
									<span class="jp-zhuti-hd" z-index:50>
										<span>全球海岛</span>
										<router-link to="">马来西亚<em>|</em></router-link>
										<router-link to="">普吉岛<em>|</em></router-link>
										<router-link to="">三亚<em>|</em></router-link>
									</span>
									<span>
										<img src="/img/index/ad17a.jpg" alt="">
									</span>
								</div>
							</li>
                            <li class="jp-zhuti-haidao">
								<div>
									<span class="jp-zhuti-hd" z-index:50>
										<span>浪漫蜜月</span>
										<router-link to="">泰国<em>|</em></router-link>
										<router-link to="">法国<em>|</em></router-link>
										<router-link to="">巴厘岛<em>|</em></router-link>
										<router-link to="">济州岛<em>|</em></router-link>
									</span>
									<span>
										<img src="/img/index/lmmy.jpg" alt="">
									</span>
								</div>
							</li>
							<li class="jp-zhuti-haidao">
								<div>
									<span class="jp-zhuti-hd" z-index:50>
										<span>户外体验</span>
										<router-link to="">跳伞<em>|</em></router-link>
										<router-link to="">丛林越野<em>|</em></router-link>
										<router-link to="">越野车<em>|</em></router-link>
									</span>
									<span>
										<img src="/img/index/ad19a.jpg" alt="">
									</span>
								</div>
							</li>
							<li class="jp-zhuti-haidao">
								<div>
									<span class="jp-zhuti-hd" z-index:50>
										<span>家庭旅行</span>
										<router-link to="">新西兰<em>|</em></router-link>
										<router-link to="">日本<em>|</em></router-link>
										<router-link to="">塞班岛<em>|</em></router-link>
										<router-link to="">美国<em>|</em></router-link>
									</span>
									<span>
										<img src="/img/index/ad16a.jpg" alt="">
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
	    <div class="top-8">
		   <div class="top-8-1">
			      <div class="top-8-22">
				        <dl class="top-8-2">
					
				<dt class="top-8-3">热门目的地</dt>
				<dd class="top-8-4">
					<span class="top-8-5"><a class="top-8-6" href="#">东京自由行</a>  |</span>
					<span class="top-8-5"><a class="top-8-6" href="#">西双版纳自由行</a> |</span>
					<span class="top-8-5"><a class="top-8-6" href="#">大理自由行</a> |</span>
					<span class="top-8-5"><a class="top-8-6" href="#">北京自由行</a> |</span>
					<span class="top-8-5"><a class="top-8-6" href="#">丽江自由行</a> |</span>
					<span class="top-8-5"><a class="top-8-6" href="#">帕劳自由行</a> |</span>
					<span class="top-8-5"><a class="top-8-6" href="#">嘉兴自由行</a> |</span>
					<span class="top-8-5"><a class="top-8-6" href="#">台湾自由行</a> |</span>
					<span class="top-8-5"><a class="top-8-6" href="#">意大利自由行</a> |</span>
				</dd>
			                </dl>
		              </div>
		          <div class="top-8-22">
		                 <dl class="top-8-2">
		    	<dt class="top-8-3">wifi租赁</dt>
		    	<dd class="top-8-4">
		    		<span class="top-8-5"><a class="top-8-6" href="#">德国WiFi</a>  |</span>
		    		<span class="top-8-5"><a class="top-8-6" href="#">首尔WiFi</a> |</span>
		    		<span class="top-8-5"><a class="top-8-6" href="#">芭提雅WiFi</a> |</span>
		    		<span class="top-8-5"><a class="top-8-6" href="#">台北市WiFi</a> |</span>
		    		<span class="top-8-5"><a class="top-8-6" href="#">毛里求斯WiFi</a> |</span>
		    		<span class="top-8-5"><a class="top-8-6" href="#">苏梅岛WiFi</a> |</span>
		    		<span class="top-8-5"><a class="top-8-6" href="#">台湾WiFi</a> |</span>
		    		<span class="top-8-5"><a class="top-8-6" href="#">曼彻斯特WiFi</a> |</span>
		    		<span class="top-8-5"><a class="top-8-6" href="#">芬兰WiFi</a> |</span>
		    	</dd>
		                    </dl>
			          </div>
			      <div class="top-8-22">
				         <dl class="top-8-2">
					<dt class="top-8-3">租车包车</dt>
					<dd class="top-8-4">
						<span class="top-8-5"><a class="top-8-6" href="#">惠州包车</a>  |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">桂林包车</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">美国包车</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">巴黎包车</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">长沙包车</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">广州包车</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">新西兰包车</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">乐山包车</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">延边包车</a> |</span>
					</dd>
				             </dl>
		              </div>
		          <div class="top-8-22">
		  	             <dl class="top-8-2">
		  		<dt class="top-8-3">导游</dt>
		  		<dd class="top-8-4">
		  			<span class="top-8-5"><a class="top-8-6" href="#">惠州导游</a>  |</span>
		  			<span class="top-8-5"><a class="top-8-6" href="#">武汉导游</a> |</span>
		  			<span class="top-8-5"><a class="top-8-6" href="#">大理导游</a> |</span>
		  			<span class="top-8-5"><a class="top-8-6" href="#">巴黎导游</a> |</span>
		  			<span class="top-8-5"><a class="top-8-6" href="#">长沙导游</a> |</span>
		  			<span class="top-8-5"><a class="top-8-6" href="#">昆明导游</a> |</span>
		  			<span class="top-8-5"><a class="top-8-6" href="#">三亚导游</a> |</span>
		  			<span class="top-8-5"><a class="top-8-6" href="#">北京导游</a> |</span>
		  			<span class="top-8-5"><a class="top-8-6" href="#">张家界导游</a> |</span>
		  		</dd>
		  	                 </dl>
		              </div>
			      <div class="top-8-22">
				          <dl class="top-8-2">
					<dt class="top-8-3">一日游</dt>
					<dd class="top-8-4">
						<span class="top-8-5"><a class="top-8-6" href="#">东京一日游</a>  |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">德国一日游</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">首尔一日游</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">桂林一日游</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">泰国一日游</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">重庆一日游</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">曼谷一日游</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">意大利一日游</a> |</span>
						<span class="top-8-5"><a class="top-8-6" href="#">芬兰一日游</a> |</span>
					</dd>
				              </dl>
			          </div> 
		        </div>
          </div>		
    <my-food></my-food>
</div>    
</template>
<style>
	.jp-4-input .el-input__inner{
		border-radius: 0 ;
		border: 1px solid #bcd7db ;
	}
</style>
<style scoped>
.index{margin: 0 auto;min-width: 1200px;height: 500px;font: normal 12px tahoma,arial,sans-seri;z-index: 99;width: 1200px;}
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
.el-date-editor .el-input{
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
.jp-js{
	height: 35px;
	border-bottom: 1px solid #97d3d9;
}
.jp-jj,.jp-sj{
	float: left;
	width: 70px;
	color: #999;
	font-size: 14px;
	height: 35px;
	display: block;
	line-height: 35px;
	text-align: center;
	 cursor: pointer;
}
.jp-jj.active{
	color: #000;
	border-bottom:2px solid #158cb5;
}
#main{width:464px;float: left;margin-left: 10px;margin-top: 10px;}
       #banner{
       		
             width: 464px;
             overflow:hidden;
             position: relative;
             }
         #ul-imgs,#ul-idxs{list-style: none;}
         #ul-imgs>li{float: left;width:464px;}
         
         #ul-imgs.transtinon{
             transition: all 0.5s linear;
         }
         #ul-idxs{
       		width: 130px;
       		margin: 0 auto;
       		position: absolute;
       		bottom: 25px;
       		right: 16px;
       		
       	}
       	#ul-idxs>li{
       		float: left;
       		width: 16px;
       		height: 16px;
       		background-color: #fff;
       		border-radius: 50%;
       		margin: 0 5px;
       		cursor: pointer;
       		}
       		#ul-idxs>li.active{
       			background-color:#f60;
       		}
       		#btn-left,#btn-right{
       			width: 50px;
       			height: 50px;
       			position: absolute;
       			top:135px;
       			position: center;
       			cursor: pointer;
				display: none;
				opacity: 0;

			   }
			#banner:hover #btn-left{
			   display: block;
			   opacity: 1;
			}
			#banner:hover #btn-right{
				display: block;
				opacity: 1;
            }
       		#btn-left{
       			left:0px;
       			background:url(/img/index/ddr_icon.png) no-repeat 0 0;
       		}
       		#btn-right{
       			right: 0;
       			background: url(/img/index/ddr_icon.png)no-repeat -56px 0;
       		}
		.jp-5{
		
		margin: 0 auto;
		width: 1200px;
	}
	.jp-5-2{
		height: 33px;
		margin-top: 10px;
		padding-bottom: 5px;
		border-bottom: 2px solid #1cafc7;
		
	}
	.jp-5-2::after{
       content: "";
		display: block;
		clear: both;
		visibility: hidden;
	}
	.jp-5-3{padding-bottom:6px;}
	.jp-5-4{float: left;}
	.jp-5-5{
		display: inline-block;
		font-size: 16px;
		height: 33px;
		line-height: 33px;
		padding: 0 13px;
		color: #3bb0d0;
		}
	.jp-5-4.active>a{
		background-color: #3bb0d0;
		color: #fff;
		
		}
	.jp-5-6,.jp-5-7{
		height: 331px;
		margin-top: 15px;
	}
	.jp-5-7{display: none;}
	.jp-5-8::after{
		content: "";
		display: block;
		clear: both;
		visibility: hidden;
	}
	.top-6-2{width: 283px;height: 329px;border: 1px solid #ddd;position: relative;float: left;margin-bottom: 16px;float: left;}
	.jp-5-6>div~div,.jp-5-7>div~div{margin-left:20px;}

	.top-6-2 a{color: #333;}
	.top-6-2 img{width: 283px;height: 191px;}
	.top-6-3{overflow: hidden; margin-top: 12px;padding: 0 16px;font-size: 14px;}
	.top-6-3:hover{ color:#0084bb ;}
	.top-6-4{float: left;display: block;width: 100%;padding: 0 16px;margin-top: 10px;margin-bottom: 8px;}
	.top-6-5{font-size: 30px;line-height: 30px;color: #f60;}
	.top-6-6{margin-left: 16px;font-size: 12px;color: #999;height: 14px;line-height: 14px;}
	.top-6-7{background:url(/img/index/icotool5.png) -82px 0 no-repeat;width: 10px; height: 14px;margin-right: 10px;margin-top: -2px;display: inline-block;overflow: hidden;vertical-align: middle;}
	.top-6-8{float: right;margin-right: 16px;}
	.jp-5-9>h2{
		font-size:22px ;
		border-bottom: 2px solid #89d193;
		color: #89d193;
		height: 42px;
		line-height: 42px;
		
	}
	.jp-5-10{
		height: 398px;
		overflow: hidden;
		padding-top: 16px;
	
	}
	.jp-5-11{
		width: 960px;
		float: left;
	}
	.jp-5-9::after{
		content: "";
		display: block;
		clear: both;
		visibility: hidden;
	}
	.jp-5-12{
		margin: 0 16px 16px 0;
		display:block;
		float: left;
        width: 464px;
        height: 176px;
        overflow: hidden; 
	}
	.jp-5-13{
		display: block;
		background: #89d193;
		height: 32px;
		line-height: 32px;
		color: #fff;
		overflow: hidden;
		padding-left: 15px;
		font-size: 16px;
	}
	.jp-5-14{
		float: right;
		margin: 10px 10px 0 0;
		width: 6px;
		height: 10px;
		background: url(/img/index/symbol2.png) repeat 0 0;
		overflow: hidden;
	}
	.jp-5-15{
		border: 1px solid #eee;
    border-top: 0;
    padding: 16px 11px 5px 15px;
    height: 122px;
	overflow: hidden;
	width: 451px;
	}
	.jp-5-16{
    float: right;
    width: 135px;
    height: 90px;
	margin-left: 16px;
	}
	.jp-5-16>em{
		background: #f6f6f6;
    display: block;
    height: 24px;
    line-height: 24px;
    color: #333;
    text-align: center;
    cursor: pointer;
    font-size: 14px
	}
	.jp-5-16>em:hover{
		color: #0084bb;
	}
	.jp-5-17{
		margin-top: 10px;
		height: 86px;
	}
	.jp-5-17 p{
		margin-bottom: 15px;
	}
	.jp-5-17 span,.jp-5-17 em {
    color: #999;
	}
	.jp-5-17 a{
		color: #666;
		display: inline-block;
		margin: 0 7px;
	}
	.jp-5-18{
		color: #fc582f !important;
		
	}
	.jp-5-17 a:hover{
		color: #0084bb !important;
	}
	.jp-lvxing-img{
		float: right;
		width: 240px;
	}
	.jp-zhuti{
		overflow: hidden;
	}
	.jp-zhuti>h2{
		border-bottom: 2px solid #ff9000;
		color: #ff9000;
		font-size: 22px;
		line-height: 42px;
		height: 42px;
	}
	.jp-zhuti>ul{
		width: 1300px;
		padding: 16px 0 0 0;
	}
	.jp-zhuti>ul>li{
		float: left;
		width: 288px;
		height: 192px;
		overflow: hidden;
		margin-right:16px;
		display: list-item;
	}
	.jp-zhuti-haidao>div{
		position: relative;
		width: 288px;
		height: 192px;
		overflow: hidden;
	}
	.jp-zhuti-hd{
		position: absolute;
		bottom: 13px;
		left: 10px;
		width: 247px;
		height: 52px;
		padding: 7px 10px;
		background-color: rgba(255,255,255,0.8);
		color: #333;
	}
	.jp-zhuti-haidao>div{
		display: inline-block;
	}
	.jp-zhuti-hd>span{
		display:block;
		font-size: 22px;
	}
	.jp-zhuti-hd>a{
		font-size: 14px;
		color: #333;
	}
	.jp-zhuti-hd>a:hover{
		color: #0084bb;
	}
	.jp-zhuti-hd>a>em{
		margin: 0 6px;
		color: #aba8aa;
	}
	.jp-zhuti-haidao img{
		width: 288px;
		height: 192px;
	}
		.top-8{clear: both;
		padding: 15px 0 5px;
		line-height: 1.231;
		font-size: 12px;
		color: #f5f5f5;
		width: 979px; 
		margin: 0 auto;
		font-family: Arial, Helvetica, sans-serif;
		text-align: right;
		}
		.top-8-1{
			border-top: 1px solid #ddd;
			}
		.top-8-2{
			margin: 10px 0 0; 
			clear: both;
			color: #a7a7a7;
			padding: 0;
			}
		.top-8-22::after{
			  content:"";
			  display: block;
			  clear:both;
			}
		.top-8-3{width: 75px;
		font-weight: 700;
		float: left;
		white-space: nowrap;}
		.top-8-4{
			margin-left: 88px;
		word-spacing: 5px;
		}
		.top-8-5{
			float: left;
			 margin-right: 6px;
			 white-space: nowrap;}
		.top-8-6{
			color: #a7a7a7;
			margin-right: 6px;
			}
		.el-date-editor.el-input{
        width: 245px;
		margin-right: 25px;
		color: #000;
    }
    .el-input__inner{
		border: 1px solid #bcd7db !important;
		border-radius: 0 !important;}
</style>
<script>
export default {
    data(){
          return {
			  cearch:'',
			  keyword:'',
              pickerOptions: {
               disabledDate(time) {
            return time.getTime() > Date.now();
		           },
			    },
			 value1:'',
			 value2:'',
			 value3:'',
			 value4:'',
			 value5:'',
			 value6:'',
             
          } 
        },
    mounted() {
		var i=0;
       var LIWIDTH=464;
       var DURATION=50;
       var LICOUNT=5;
       var ulImgs=document.getElementById("ul-imgs");
       var ulIdxs=document.getElementById("ul-idxs");
       var lis=ulIdxs.children;
       function moveTo(to){
         if(to==undefined){
           to=i+1;
         }
         if(i==0){
           if(to>i){
             ulImgs.className="transition";
           }else{
             ulImgs.className="";
             ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
             setTimeout(function(){
               moveTo(LICOUNT-1);
             },100);
             return;
           }
         }
         i=to;
         ulImgs.style.marginLeft=-i*LIWIDTH+"px";
         for(var li of lis){
           li.className=""
         }
         if(i==LICOUNT){
           i=0;
           setTimeout(function(){
             ulImgs.className="";
             ulImgs.style.marginLeft=0;
           },DURATION)
         }
         lis[i].className="active";
       }
     
       var btnLeft=document.getElementById("btn-left");
       var btnRight=document.getElementById("btn-right");
       var canClick=true;
       btnRight.onclick=function(){
         move(1)
       }
       function move(n){
         if(canClick){
           moveTo(i+n);
           canClick=false;
           setTimeout(function(){
             canClick=true;
           },DURATION+100);
         }
       }
       btnLeft.onclick=function(){
         move(-1);
       }
     
       var interval=3000;
       var timer=setInterval(function(){
         moveTo()
       },3000);
       var banner=document.getElementById("banner");
       banner.onmouseover=function(){
         clearInterval(timer);
       }
       banner.onmouseout=function(){
         timer=setInterval(function(){
           moveTo()
         },3000);
       }
     
       var ulIdxs=document.getElementById("ul-idxs");
       var canClick=true;
       ulIdxs.onclick=function(e){
         if(canClick){
           var li=e.target;
           if(li.nodeName=="LI"){
             if(li.className!=="active"){
               for(var i=0;i<lis.length;i++){
                 if(lis[i]==li){
                   break;
                 }
               }
               moveTo(i);
               setTimeout(function(){
                 canClick=true;
               },DURATION);
             }
           }
         }
       }
        $(".jp-4-3").click(function(){
    if(!$(this).hasClass("active")){
        $(this).addClass("active");
    }
    $(this).siblings().removeClass("active");
    var btnId=$(this).data("btn");
    $(`#${btnId}`).show().siblings().hide();
  })

$(".jp-4-14").focus(function(){
    $(".jp-4-15").show();})
$(".jp-4-14").blur(function(){
    $(".jp-4-15").hide();

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
