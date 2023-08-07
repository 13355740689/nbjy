
import {RouterMount,createRouter} from 'uni-simple-router'

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
