import http from '../server.js'


// 列表
export const userList = param => {
	return http.request({
		url:'users/list',
		method: 'get',
		param
	})
}


export default {
	userList
}
