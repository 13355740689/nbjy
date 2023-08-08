<template>
	<view>
		<view class="container">
			<u-swiper
			        :list="list1"
			        previousMargin="30"
			                        nextMargin="30"
			                        circular
			                        :autoplay="true"
			                        radius="5"
			                        bgColor="#ffffff"
			></u-swiper>
		</view>
		
		<!--快捷导航-->
		<view class="quick-nav">
			        <u-grid
			                :border="false"
			                col="4"
			        >
			            <u-grid-item
			                    v-for="(listItem,listIndex) in list"
			                    :key="listIndex"
			            >
							<!-- <img :src="listItem.name"> -->
							<u--image :src="listItem.name" width="80upx" height="80upx"></u--image>
			                <span class="grid-text">{{listItem.title}}</span>
			            </u-grid-item>
			        </u-grid>
		</view>
		
		<u-gap height="10" bgColor="#eee"></u-gap>
		
		<view>
			<view style="display: flex;align-items: center;justify-content: space-between;padding: 20upx 30upx;">
				<view style="display: flex;align-items: center;">
					<u--image :src="require('@/static/imgs/index/icon-hot.png')" width="34upx" height="34upx"></u--image>
					<span style="margin-left: 10upx;">热门推荐</span>
				</view>
				<view style="display: flex;align-items: center;">
					<span style="font-size: 28upx;color: #bbb;">更多</span>
					<u-icon name="arrow-right" color="#bbb" size="14"></u-icon>
				</view>
			</view>
			
			<u-grid
			        :border="false"
			        col="2"
			>
			    <u-grid-item
			            v-for="(listItem,listIndex) in perlist"
			            :key="listIndex"
			    >
					<view>
						<view>
							<u--image :src="listItem.img" width="280upx" height="280upx"></u--image>
						</view>
						<view style="width: 100%;display: flex;align-items: center;justify-content: space-between;padding: 10upx 0 30upx;">
							<span style="font-size: 28upx;">{{listItem.title}}</span>
							<view style="display: flex;align-items: center;justify-content: center;">
								<u-icon name="eye"></u-icon>
								<span style="font-size: 24upx;">{{listItem.num}}</span>
							</view>
						</view>
					</view>

			    </u-grid-item>
			</u-grid>
			
		</view>


			<zd-tabbar></zd-tabbar>
	</view>
</template>

<script>
	    export default {
	        data() {
	            return {
					perlist: [
						{
							img: require('@/static/imgs/index/wm1.jpeg'),
							title: '海曙 97 会计',
							num: 91
						},
						{
							img: require('@/static/imgs/index/wm2.jpeg'),
							title: '鄞州 96 会计',
							num: 102
						},
						{
							img: require('@/static/imgs/index/wm3.jpeg'),
							title: '江北 95 会计',
							num: 42
						},
						{
							img: require('@/static/imgs/index/wm4.jpeg'),
							title: '镇海 97 会计',
							num: 167
						}
					],
					                list: [{
					                    name: require('@/static/imgs/index/icon-love.png'),
					                    title: '主播关注'
					                    },
					                    {
					                        name: require('@/static/imgs/index/icon-fav.png'),
					                        title: '视频收藏'
					                    },
					                    {
					                        name: require('@/static/imgs/index/icon-buy.png'),
					                        title: '我购买的'
					                    },
					                    {
					                        name: require('@/static/imgs/index/icon-fenlei.png'),
					                        title: '全部分类'
					                    }
					                ],
	                list1: [
	                    'https://img1.baidu.com/it/u=1175765576,2279212614&fm=253&fmt=auto&app=138&f=JPEG?w=829&h=500',
	                    'https://img0.baidu.com/it/u=2758822920,348523756&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
	                    'https://pics6.baidu.com/feed/42a98226cffc1e17b7b8f41d039cd804738de9ae.jpeg?token=ba9aa8b8c343b195f33ae216f3c55638',
	                ]
	            }
	        }
	    }
</script>

<style lang="scss" scoped>
	.container{
		padding: 0 20upx;
	}
	
	.quick-nav{
		padding: 20upx 0;
		.grid-text{
			margin-top: 10upx;
			font-size: .24rem;color: #333333;text-align: center;padding-top: .12rem;padding-bottom: .1rem;
		}
	}

</style>