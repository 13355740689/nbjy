import Vue from 'vue'
import {RouterMount,createRouter} from 'uni-simple-router'
// import { RouterMount,createRouter } from 'uni-simple-router'
// const Router = require('uni-simple-router')
// import store from '@/common/store'

// Vue.use(Router)
//初始化
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	// APP: {
	// 	animation: {
	// 		animationType: 'pop-in',
	// 		animationDuration: 300
	// 	}
	// },
	// encodeURI: false,
	routes: [...ROUTES] //路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log('------beforeEach-------')
	// 有两个个判断条件,一个是token,还有一个路由元信息
	if (to.meta && to.meta.needLogin) {
		if(!uni.getStorageSync('XD_HOSPITAL_TOKEN')) {
			uni.navigateTo({
				url: '/pages/login'
			})
			return 
		}
	}

	next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('------afterEach-------')
})
export {
	router,
	RouterMount
}
