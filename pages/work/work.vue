<template>
	<view>
    <view style="width: 100%;display: flex;align-items: center;justify-content: center;">
      <view style="width: 60%;">
        <u-subsection :list="list" :current="1" activeColor="#f56c6c" bgColor="#ddd"></u-subsection>
      </view>
    </view>

    <view style="width: 100%;padding: 20upx 40upx;">
      <view
        class="perItem"
        v-for="(item, index) in userList"
        :key="index"
        style="padding: 20upx;border-radius: 8upx;"
        :style="item.sex === 1 ? 'box-shadow: 2px 2px 5px #5352ed;' : 'box-shadow: 2px 2px 5px rgba(247, 95, 204, 0.3);'"
      >
        <view style="display: flex;align-items: center;">
          <u-avatar :src="require('@/static/imgs/index/wm1.jpeg')" size="50"></u-avatar>
          <view style="margin-left: 20upx;">
            <span style="font-weight: 600;font-size: 36upx;">寻缘号{{item.id}}</span>
            <view style="display: flex;align-items: center;">
              <u-icon name="man-add"></u-icon>
              <span style="font-size: 26upx;color: #aaa;">{{item.self_introduce}}</span>
            </view>
          </view>
        </view>

        <view>
          <u-row justify="space-between" gutter="10">
            <u-col span="6">
              <view class="infoAll">
                <span class="info1">年份</span>
                <span class="info2">{{item.birthday | formatYear}}年</span>
              </view>
            </u-col>
            <u-col span="6">
              <view class="infoAll">
                <span class="info1">性别</span>
                <span class="info2">{{ item.sex === 1 ? '男' : '女' }}</span>
              </view>
            </u-col>
          </u-row>

          <u-row justify="space-between" gutter="10">
            <u-col span="6">
              <view class="infoAll">
                <span class="info1">职业</span>
                <span class="info2">{{ item.work }}</span>
              </view>

            </u-col>
            <u-col span="6">
              <view class="infoAll">
                <span class="info1">户籍</span>
                <span class="info2">{{ item.native_place }}</span>
              </view>
            </u-col>
          </u-row>

          <u-row justify="space-between" gutter="10">
            <u-col span="6">
              <view class="infoAll">
                <span class="info1">学历</span>
                <span class="info2">{{ item.education }}</span>
              </view>
            </u-col>
            <u-col span="6">
              <view class="infoAll">
                <span class="info1">身高</span>
                <span class="info2">{{ item.height }}cm</span>
              </view>
            </u-col>
          </u-row>

        </view>


        <view style="display: flex;align-items: center;justify-content: space-around;margin-top: 10upx;">
          <span style="border: 2upx solid salmon;border-radius: 30upx;padding: 6upx 30upx;">
            <span style="font-weight: 600;color: salmon;">联系对方</span>
          </span>
          <span
            style="border: 2upx solid #d63031;border-radius: 30upx;padding: 6upx 30upx;background: #ff7675;">
            <span style="font-weight: 600;color: #fff;">查看资料</span>
          </span>
        </view>
      </view>
    </view>

    <u-loadmore :status="status" />


		<zd-tabbar></zd-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['今日推荐', '看看新人'],
				current: 0,
				userList: [],
        status: 'loadmore',
        loading: true,
        num: 0
			}
		},
		onShow() {
			this.getList()
		},

		onReachBottom() {
			console.log('下拉刷新')

      this.getList()
		},
		methods: {
			getList() {
        uni.showLoading()
				this.$api.userList({
          num: this.num
        }).then(res => {
          console.log('22222222222222=========')
          console.dir(res)
					this.userList = [...this.userList, ...res.data.list]

          if (this.userList.length === res.data.totalNum) {
            this.status = 'nomore'
          }

          this.num++

          uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.infoAll{
		padding: 10upx 0;
		.info1{
			font-size: 28upx;
			font-weight: 400;
			letter-spacing: 4upx;
		}
		.info2{
			font-size: 32upx;
			font-weight: 500;
			margin-left: 10upx;
		}
	}

	.perItem:nth-child(n+2){
		margin-top: 20px;
	}
</style>
