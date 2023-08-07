<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	@import "@/static/font/iconfont.css";
	@import "@/static/style/index.css";

	/*每个页面公共css */
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		font-size: 32upx;
	}
	body{
		background: #f8f9fd;
	}
</style>
