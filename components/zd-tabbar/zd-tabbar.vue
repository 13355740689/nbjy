<template>
	<view>
		<view class="place"></view>
		<view class="shopro-tabbar-wrap" v-if="showTabbar">
			<view class="tabbar-box" :style="{ background: tabbarData.bgcolor || '#fff' }">
				<view class="tabbar-item" v-for="(tab, index) in tabbarData.tabbarList" :key="tab.name" @tap="switchTabbar(tab, index)">
					<view class="img-box">
	
						<i
							class="iconfont"
							:class="currentPath == getPath(tab.path) ? tab.activeIcon : tab.icon"
							:style="{color: currentPath === getPath(tab.path) ? tabbarData.activeColor : tabbarData.color}"
						>
						</i>
					</view>
					<view
						class="tabbar-text"
						:style="{ color: currentPath == getPath(tab.path) ? tabbarData.activeColor : tabbarData.color }"
					>
						{{ tab.name }}
					</view>
				</view>
			</view>
		</view>
		<view class="safeBottom"></view>
	</view>
</template>

<script>
export default {
	name: 'zdTabbar',
	components: {},
	data() {
		return {
			tabbarData: {
				bgcolor: '#fff',
				activeColor: '#fd79a8',
				color: '#333',
				tabbarList: [
					{
						name: '首页',
						path: '/pages/index/index',
						icon: 'icon-shouye',
						activeIcon: 'icon-shouye1'
					},
					{
						name: '广场',
						path: '/pages/work/work',
						icon: 'icon-dibu_guangchang_p',
						activeIcon: 'icon-yingyongguangchang'
					},
					{
						name: '消息',
						path: '/pages/message/message',
						icon: 'icon-envelope',
						activeIcon: 'icon-envelope-full'
					},
					{
						name: '我的',
						path: '/pages/mine/mine',
						icon: 'icon-31wode',
						activeIcon: 'icon-my'
					}
				]
			}
			
		};
	},
	props: {},
	computed: {
		currentPath() {
			let pages = getCurrentPages();
			let currPage = null;
			if (pages.length) {
				currPage = pages[pages.length - 1].route;
			}
			return '/' + currPage;
		},
		showTabbar() {
			if (this?.tabbarData?.tabbarList) {
				let arr = [];
				let path = '';
				for (let item of this.tabbarData.tabbarList) {
					path = this.getPath(item.path);
					arr.push(path);
				}
				return arr.includes(this.currentPath);
			}
		}
	},
	created() {},
	methods: {
		// 切换tabbar
		switchTabbar(tab, index) {
			console.log('111111111111')
			console.dir(this.$tools)
			this.$tools.routerTo(tab.path, {}, true);
		},
		getPath(path) {
			if (path.indexOf('?') !== -1) {
				let index = path.lastIndexOf('?');
				path = path.slice(0, index);
			}
			// this.showTabbar = arr[0].page.includes(this.currentPath);
			return path;
		}
	}
};
</script>

<style lang="scss" scoped>
	.place{
		width: 100%;
		height: calc(100upx + constant(safe-area-inset-bottom) / 2);
		height: calc(100upx + env(safe-area-inset-bottom) / 2);
	}
	.safeBottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: calc(env(safe-area-inset-bottom) / 2);
		background: #fff;
		z-index: 70;
	}
.shopro-tabbar-wrap {
	// height: calc(100rpx + constant(safe-area-inset-bottom));
	height: 100upx;
	// position: relative;
	position: fixed;
	// bottom: calc(var(–window-bottom) + env(safe-area-inset-bottom));
	// padding-bottom: calc(24rpx + constant(safe-area-inset-bottom));
	//   padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
	left: 0;
	width: 100%;
	z-index: 70;
	bottom: calc(constant(safe-area-inset-bottom) / 2);
	bottom: calc(env(safe-area-inset-bottom) / 2);
	.tabbar-box {
		position: fixed;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100rpx;
		border-top: 1rpx solid #eeeeee;
		z-index: 998;
		// bottom: 0;
		

		.tabbar-item {
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex: 1;
			.img-box {
				display: flex;
				// position: relative;
				// .cu-tag {
				// 	right: -12px;
				// }
			}

			.tabbar-icon {
				// width: 50rpx;
				// height: 50rpx;
			}

			.tabbar-text {
				font-size: 20rpx;
			}
		}
	}
}
</style>
