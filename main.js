import Vue from 'vue'
import App from './App'

// vuex
import store from './store'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'

import mixin from './common/mixin'

Vue.prototype.$store = store

import tools from 'common/util/tools/index.js'
Vue.prototype.$tools = tools

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uView)

import {
	router,
	RouterMount
} from '@/common/router.js'

Vue.use(router)

// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
// #endif

Vue.mixin(mixin)

const app = new Vue({
    store,
    ...App
})

// 引入请求封装
// require('./util/request/index')(app)

import plugins from '@/common/plugins.js'
Vue.use(plugins)

// #ifdef H5
	RouterMount(app,router,'#app')
// #endif
// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
