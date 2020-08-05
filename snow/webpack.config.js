const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
    // 项目入口文件 支持 str | [] | {}
   mode:'development',
    devtool: 'cheap-module-eval-source-map',
    entry: path.resolve(__dirname, './src/react.js'),
   // entry: path.resolve(__dirname, './src/index.js'), 
    output: {
        path: path.resolve(__dirname, './dist'),
      //	filename: 'mian_[hash:8].js'
	filename: 'mian.js'
    },
    // 打包环境 默认是生产环境 production
    // 如果是开发环境 这里需要换成 development
    // 接下来为了观察打包后的文件，使用 development

    // 模块 这些选项决定了如何处理项目中的不同类型的模块。
    module: {
		    rules: [
				{
				   test:/\.css$/,
				   use:[
					   'style-loader',
					   'css-loader'
					]
				},
				{
				    test:/\.less$/,
				    use:[
						'style-loader',
						'less-loader'
					]
				},
			
				{
				    test: /\.(png|jpg|gif)$/,
				    use:[{loader:'url-loader',options:{name:'[name].[ext]'}}]
						
			    		
				},
				{
				    test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				    use:[{loader:'url-loader',options:{name:'[name].[ext]'}}]
				    
				},
					
				{
				    test: /\.js/,
				    loader: 'babel-loader'
				},
				
		    
		]},
    // 插件
    devServer: {
        // 指向打包后的文件地址
        contentBase: './dist',
        // 是否自动打开一个新窗口
        open: false,
        // 端口号
        port: 8085,
        // 是否开启热更新
        hot: true,
        // 启用热模块替换，而不会在构建失败时将页面刷新作为后备。
        hotOnly: true,
	overlay:true,
	historyApiFallback:true
    },
    plugins: [
        // 启用模块热替换(HMR - Hot Module Replacement)
        new webpack.HotModuleReplacementPlugin(),
	new htmlWebpackPlugin({
		template: "./src/index.html",
		filename:"./index.html"		
	})
    ]

    //plugins: [
	// 复制一个 html 并将最后打包好的资源在 html 中引入
	//	    new htmlWebpackPlugin({
			// 页面title 需要搭配 ejs 使用
	//		title: "测试title",
			// html 模板路径
	//		template: "./index.html",
			// 输出文件名称
	//		filename: "index.html",
	//		minify: {
	//		    // 压缩HTML⽂件
	//		    removeComments: true, // 移除HTML中的注释
	//		    collapseWhitespace: true, // 删除空⽩符与换⾏符
	//		    minifyCSS: true // 压缩内联css
	//		}
	//	    }),
		    // 每次部署时清空 dist 目录
//		    new CleanWebpackPlugin()
//
//		],
    // 是否开启 source-map
    
}


