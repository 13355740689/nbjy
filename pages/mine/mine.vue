<template>
	<view >
			    	<view class="h-top clearfloat box-s">
						<view class="ge-back"><img src="img/text-bck.png" ></view>
						<view class="mui-tus">
							<view class="huiyuan-text">
								<img src="img/touxiang.png"/>
							<!-- 	<view class="content clearfloat">
									<p class="hname">王小二</p>
									<p class="hpthy">普通管理员</p>
								</view> -->
								<a class="content clearfloat" style="font-size: 0.5rem; color: #fff;display: block;" href="login.html">
									登录/注册
								</a>
								
							</view>
							
							<ul>
								<li>
									<a href="#">
										<p>74.00</p>
										<span>账户余额</span>
									</a>
								</li>
								<span class="right-lines"></span>
								<li>
									<a href="#">
										<p>4789</p>
										<span>可用金豆</span>
									</a>
								</li>
								<span class="right-lines"></span>
								<li>
									<a href="#">
										<p>10</p>
										<span>可用优惠券</span>
									</a>
								</li>
							</ul>
								    		
						</view>
			    	</view>
		
		<zd-tabbar></zd-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
/*
 center--------------------------------------------------------------------------------------
 * */
.h-top {
	position: relative;
	width: 100%;
	height: 6.8rem;
	/* background-color: #25cb83; */
/* 	background: url(../img/text-bck.png) no-repeat center; */
	padding: 0.4rem;
}
.h-top .ge-back img{
	width: 100%;
	height: 100%;
	display: block;
	margin: 0 auto;
}
.mui-tus{
	position: absolute;
	bottom: 77px;
	padding: 0 0.6rem;
}
.huiyuan-text{
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
}
.h-top img {
	width: 23%;
}

.h-top .content {
	width: 60%;
	margin-left: 5%;
	padding-top: 20px;
}

.h-top .content p {
	color: #fff;
	line-height: .6rem;
}

.h-top .content p.hname {
	font-size: .5rem;
}

.h-top .content p.htel,
.h-top .content p.hpthy {
	font-size: .4rem;
}

.h-top .btn {
	width: 15%;
	text-align: center;
	height: 1rem;
	background-color: #fff;
	color: #25cb83;
	font-size: .45rem;
	line-height: 1rem;
	margin-top: 3%;
}
</style>
