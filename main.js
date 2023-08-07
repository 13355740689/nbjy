import App from './App'

import Vue from 'vue'
// import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

import {
	router,
	RouterMount
} from '@/common/router.js'


Vue.use(router);

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import tools from '@/common/util/tools/index'
Vue.prototype.$tools = tools

const app = new Vue({
  ...App
})


// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif



