const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}

const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()

module.exports = {
    // 配置路径别名
    configureWebpack: {
        devServer: {
            // 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
            disableHostCheck: true,
			proxy: {
			    "/" : {
			        "target" : "http://192.168.50.242:8083",
			        "changeOrigin" : true,
			        "secure" : false,
			        "pathRewrite" : {
			            "^/" : ""
			        }
			    }
			}
        },
		resolve: {
			alias: {
				"@": resolve("/")
			}
		},
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'aliasPath', 'name', 'meta', 'title']
					});
					return JSON.stringify(tfPages.routes)
				}, true)
			})
		]
    }
    // productionSourceMap: false,
}
