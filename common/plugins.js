import api from '@/common/request/api.js'


import filters from '@/common/filters/index.js'


const install = (Vue) => {
	Vue.prototype.$api = api
	
	Object.keys(filters).forEach(key => {
		Vue.filter(key, filters[key])
	})
}

export default {
    install
}
