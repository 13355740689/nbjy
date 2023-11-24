<template>
	<view>
		<view style="width: 100%;padding: 20upx;">
			
		
			<view style="
							padding: 20upx;
							border-radius: 8upx;
							background: linear-gradient(179.2deg, rgba(242, 0, 0, 0.42) 0%, rgba(240, 125, 125, 0.01) 100%);
							box-shadow: 4px 5px 11px  rgba(0, 0, 0, 0.1);"
			>
				<view style="display: flex;align-items: center;">
					<u-avatar :src="require('@/static/imgs/index/wm1.jpeg')" size="50"></u-avatar>
					<view style="margin-left: 20upx;">
						<span style="font-weight: 600;font-size: 36upx;">寻缘号138923</span>
						<view style="display: flex;align-items: center;">
							<u-icon name="man-add"></u-icon>
							<span style="font-size: 26upx;color: #aaa;">我孩子漂亮美丽</span>
						</view>
					</view>
				</view>
		
				<view>
		
					<u-row justify="space-between" gutter="10">
						<u-col span="6">
							<view class="infoAll">
								<span class="info1">年份</span>
								<span class="info2">1993年</span>
							</view>
						</u-col>
						<u-col span="6">
							<view class="infoAll">
								<span class="info1">性别</span>
								<span class="info2">女</span>
							</view>
						</u-col>
					</u-row>
					
					<u-row justify="space-between" gutter="10">
						<u-col span="6">
							<view class="infoAll">
								<span class="info1">居住</span>
								<span class="info2">宁波</span>
							</view>
							
						</u-col>
						<u-col span="6">
							<view class="infoAll">
								<span class="info1">户籍</span>
								<span class="info2">宁波</span>
							</view>
						</u-col>
					</u-row>
					
					<u-row justify="space-between" gutter="10">
						<u-col span="6">
							<view class="infoAll">
								<span class="info1">学历</span>
								<span class="info2">本科</span>
							</view>
						</u-col>
						<u-col span="6">
							<view class="infoAll">
								<span class="info1">身高</span>
								<span class="info2">163cm</span>
							</view>
						</u-col>
					</u-row>
		
				</view>
		
		
				<view style="display: flex;align-items: center;justify-content: space-around;margin-top: 10upx;">
					<span style="border: 2upx solid salmon;border-radius: 30upx;padding: 6upx 30upx;">
						<span style="font-weight: 600;color: salmon;">联系对方</span>
					</span>
					<span
						style="border: 2upx solid #d63031;border-radius: 30upx;padding: 6upx 30upx;background: #ff7675;"
						@click="goDetail()"
					>
						<span style="font-weight: 600;color: #fff;">查看资料</span>
					</span>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>