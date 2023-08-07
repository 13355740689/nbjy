<template>
	<view class="content">
		<u-swiper
		            :list="list1"
		    ></u-swiper>
			
		<zd-tabbar></zd-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [
				         'http://47.98.63.31:8888/down/FlEmQgd82pRP'
				                ]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
