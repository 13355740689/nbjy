export default {
	config: {
		baseURL: 'http://localhost:8083/',
		// 请求拦截器
		beforeRequest(options = {}) {
			const uri = options.url
			const time = new Date().getTime()
			const headerStr = 'time=' + time + '&uri=/' + uri
			let paramsStr = ''
			let contentype = 'application/json;charset=UTF-8'


			// get参数编码
			let url = options.url
			if (options.method.toUpperCase() === 'GET' && options.param) {
				let paramsStr = ''
				url += '?'
				const keys = Object.keys(options.param).sort()
				for (const key of keys) {
					url += `${key}=${encodeURIComponent(options.param[key])}&`
					paramsStr += `${key}=${options.param[key]}&`
				}
				paramsStr = paramsStr.substring(0, paramsStr.length - 1)
				url = url.substring(0, url.length - 1)
				options.param = {}
			}

			options.url = url

			return new Promise((resolve, reject) => {
				resolve(options)
			})
		},
		// 响应拦截器
		handleResponse(data) {
			return new Promise((resolve, reject) => {
				
				const [err, res] = data // data为一个数组，数组第一项为错误信息，第二项为返回数据
				if (res.statusCode === 200) {
					return resolve(res.data) // success
				} else {
					reject(res.errMsg)
				}
				
			})
		}
	},
	// request 请求
	request(options = {}) {
		return this.config.beforeRequest(options).then(opt => { // 下方uni.request 三种请求方式的第二种 Promise请求方式
			return uni.request(opt)
		}).then(res => {

			return this.config.handleResponse(res)
		})
	}
}