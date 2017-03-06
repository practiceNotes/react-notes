let path = require("path");
let webpack = require("webpack");

let config = {
    // 入口文件
    entry:path.resolve(__dirname, "./src/index.js"),
    // 输出的目标位置及生成自定文件
    output:{
        // 生成一个文件夹目录
        path:path.resolve(__dirname, "dist"),
        //  生成一个自定义的文件做为引用的
        filename:"bunld.js"
    },
    // 配置加载的文件
    module:{
        // 里是一个数组的的写法，多个的配置
        loaders:[
            {
                // 所有的js文件
                test:/\.js$/,
                // 使用es6来进行加载
                loader:"babel-loader",
                // 排出不需要使用和处理，和被改变的文件
                exclude:/node_modules/
            }
        ]
    }

}

// 导出为外部调用的文件
module.exports = config;
