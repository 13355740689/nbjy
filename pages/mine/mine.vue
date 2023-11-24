<template>
	<view>
    <view class="navbar-bg">
      <u-navbar
          title="我的"
          placeholder
          leftIcon=""
          :title-style="{ color: 'white' }"
      >
      </u-navbar>

      <view style="width: 100%;padding: 10upx 20upx;">
        <view class="h-top clearfloat box-s">
          <view class="huiyuan-text">
            <view style="display: flex;align-items: center;justify-content: flex-start;">
              <img
                  src="@/static/imgs/mine/touxiang.png"
                  style="width: 130upx;height: 130upx;"
              />
              <span
                  style="font-weight: 500;color: #fff;margin-left: 20upx;"
              >
							登录/注册
						</span>
            </view>
          </view>
          <view style="display: flex;align-items: center;justify-content: space-around;">
            <view class="perItem">

              <p>74.00</p>
              <span>账户余额</span>

            </view>
            <!-- <u-line></u-line> -->
            <view style="height: 100%;">
              <u-line direction="col" length="80%"></u-line>
            </view>

            <view class="perItem">

              <p>4789</p>
              <span>可用金豆</span>

            </view>
            <u-line direction="col" length="80%"></u-line>
            <view class="perItem">

              <p>10</p>
              <span>可用优惠券</span>

            </view>
          </view>
        </view>
      </view>

    </view>


		<view class="swiper-text" style="display: flex;align-items: center;justify-content: space-between;">
			<span>
				邀好友，赚爱豆
				</span>
			<u-tag type="primary" text="前往"></u-tag>
		</view>

		<view style="display: flex;flex-wrap: wrap;gap: 20upx;padding: 20upx;background: #fff;justify-content: center;">
			<view class="infoBox" style="background: linear-gradient(to left bottom, rgba(82, 86, 255, 0.5), rgba(82, 86, 255, 0.9));">

				<view class="infoItem">
					<view class="infoHead">
						<i
							class="iconfont icon-qiabao1 icon"
							style="color: #8285FF;"
						>
						</i>
					</view>
					<span class="infoText">
						记录
					</span>
				</view>
				<view class="foot">
					已经查看<span class="txt">10</span>个
				</view>

			</view>
			<view class="infoBox" style="width: 45%;background: linear-gradient(to left bottom, rgba(254, 81, 150, 0.5), rgba(254, 81, 150, 0.9));">
				<view class="infoItem">
					<view class="infoHead">
						<i
							class="iconfont icon-qiabao1 icon"
							style="color: #FE7FB2;"
						>
						</i>
					</view>
					<span class="infoText">
						访客
					</span>
				</view>
				<view class="foot">
					已经查看<span class="txt">10</span>个
				</view>
			</view>
			<view class="infoBox" style="width: 45%;background: linear-gradient(to left bottom, rgba(255, 177, 153, 0.5), rgba(255, 177, 153, 0.9));">
				<view class="infoItem">
					<view class="infoHead">
						<i
							class="iconfont icon-qiabao1 icon"
							style="color: #FFC6B5;"
						>
						</i>
					</view>
					<span class="infoText">
						账户管理
					</span>
				</view>
				<view class="foot">
					账户余额<span class="txt">10</span>个
				</view>
			</view>
			<view class="infoBox" style="width: 45%;background: linear-gradient(to left bottom, rgba(0, 114, 255, 0.5), rgba(0, 114, 255, 0.9));">
				<view class="infoItem">
					<view class="infoHead">
						<i
							class="iconfont icon-qiabao1 icon"
							style="color: #489AFF;"
						>
						</i>
					</view>
					<span class="infoText">
						爱豆
					</span>
				</view>
				<view class="foot">
					我的爱豆<span>10</span>个
				</view>
			</view>
		</view>

		<view style="margin-top: 30upx;background: #fff;padding: 20upx;">
			<view class="myItem">
				<span>账号管理</span>
				<i
							class="iconfont icon-right"
						>
						</i>
			</view>
			<view class="myItem">
				<span>访客</span>
				<i
							class="iconfont icon-right"
						>
						</i>
			</view>
			<view class="myItem">
				<span>兑换记录</span>
				<i
							class="iconfont icon-right"
						>
						</i>
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

<style lang="scss" scoped>
.navbar-bg{
  background-image: url('@/static/imgs/mine/text-bck.png');
  background-size: cover;
  background-position: center center;
}
	.h-top {
		//background-image: url('@/static/imgs/mine/text-bck.png');
		background-size: cover;
		background-position: center center;
		//border-radius: 10upx;

		.huiyuan-text {
			padding: 40upx;
		}
		padding-bottom: 40upx;
	}
	.perItem{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-weight: 400;
		color: #fff;
	}

	.swiper-text{
		margin: 20upx 0;
		background: #fff;
		padding: 20upx;
	}

	.infoBox{
		width: 45%;
		border-radius: 10upx;
		padding: 20upx;
		.infoItem{
			display: flex;
			align-items: center;
			.infoHead{
				background: #fff;
				border-radius: 50%;
				width: 50upx;
				height: 50upx;
				display: flex;
				align-items: center;
				justify-content: center;
				.icon{
					color: #8285FF;
				}
			}
			.infoText{
				color: #fff;
				font-weight: bold;
				margin-left: 20upx;
			}
		}
		.foot{
			color: #fff;
			font-size: 28upx;
			font-weight: 300;
			margin-top: 20upx;
			.txt{
				font-weight: 500;
			}
		}
	}

.myItem{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80upx;
	border-bottom: 2upx solid rgba(221, 221, 221, 0.3);
}
</style>
