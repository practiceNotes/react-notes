let path = require("path");
var webpack = require("webpack");

var config = {
    entry:path.resolve(__dirname, "./src/index.js"),
    output:{
        path:path.resolve(__dirname, "./dist"),
        filename:"bundle.js"
    },
    // 配置
    module:{
        loaders:[
            {
                test:/].js$/,
                loader:"babel",
                exclude:/node_modules/
            }
        ]
    }
}

module.exports = config;
