import {
	router
} from '@/common/router'

export default {
	/**
	 * 跳转再封装，不支持复杂传参。
	 */
	routerTo(path, params = {}, isLogin) {
		let objParams = params;
		// console.log(path, objParams, isLogin);
		// 是否跳转外部链接
		if (~path.indexOf('http')) {
			this.$Route.push({
				path: '/pages/public/webview',
				query: {
					'webviewPath': path
				}
			})
			return false
		}
		// 判断是否有参数
		if (path.indexOf('?') !== -1) {
			let index = path.lastIndexOf('?');
			let query = path.substring(index + 1, path.length);
			let arr = query.split('&')
			path = path.slice(0, index);
			arr.forEach(item => {
				let mArr = item.split('=');
				objParams[mArr[0]] = mArr[1]
			})
		}
		// 判断是否是tabbar
		if (isLogin) {
			router.replaceAll({
				path: path,
				query: objParams
			})
		} else {
			router.push({
				path: path,
				query: objParams
			})
		}
	},

	// 关闭当前页面并跳转
	redirectTo(path, params = {}, isLogin) {
		// this.$store.dispatch('delVisitedViews', this.$route);
		let objParams = params;
		// 是否跳转外部链接
		if (~path.indexOf('http')) {
			this.$Route.push({
				path: '/pages/public/webview',
				query: {
					'webviewPath': path
				}
			})
			return false
		}
		// 判断是否有参数
		if (path.indexOf('?') !== -1) {
			let index = path.lastIndexOf('?');
			let query = path.substring(index + 1, path.length);
			let arr = query.split('&')
			path = path.slice(0, index);
			arr.forEach(item => {
				let mArr = item.split('=');
				objParams[mArr[0]] = mArr[1]
			})
		}
		// 判断是否是tabbar
		if (isLogin) {
			router.replaceAll({
				path: path,
				query: objParams
			})
		} else {
			router.replace({
				path: path,
				query: objParams
			})
		}
	},
	//复杂的接收参数 接收对象类型的参数
	getParseComplexParams(params) {
		// #ifdef H5
		return JSON.parse(params)
		// #endif
		// #ifdef MP-WEIXIN
		return JSON.parse(decodeURIComponent(decodeURIComponent(params)))
		// #endif
	},

	getQueryParam(key) {
		let pages = getCurrentPages()
		let page = pages[pages.length - 1]
		let options = page.options
		return options[key]
	}
}