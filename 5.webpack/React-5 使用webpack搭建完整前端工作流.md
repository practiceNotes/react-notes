###### 课时1 1. webpack介绍
```javascript

    ## 01. 基本环境
        -git 版本的管理
            初始化
                $ git init
        -nodejs 全局环境
                查看node的版本
                $node -V
        -atom 编辑器
                使用的工具
                    atom
        -chrome 浏览器


    ## 02.了解webpack
        url:http://webpack.github.io/docs/


```


###### 课时2 2. 初始化项目
```javascript
    01. 创建一个项目文件夹
        $ mkdir webpack-course

    02. 初始化git
        $ git init
            就会得到一个 .git 文件夹

        $ ll -all   查看文件列表

    03. 初始化一个 package.json 文件
        $ npm init -y

    04. 分别创建一些文件
        $ touch .gitignore READMD.md

        $ touch index.html

    05. 创建文件
        创建一个 src 并且 进入 src 并且 创建 两个文件 index.js component.js
        $ mkdir src && cd src && touch index.js component.js

    06. 编辑.gitignore文件并且进行要过虑的文件,不让它上传到 github服务器上
        node_modules/

    /*

        # 项目开发指导



            ## 基本环境

            ##依赖技术点


            -webpack
            -babel 语法解析
            -es6/7 基本语法
            -eslint 语法检查
            -npm scripts 统一的任务构建
            -react 组件化 基础类库
            -mocha
            -karma

            ## 如何开发


            ```
                $npm install
            ```

            ```
                $ npm run build
            ```
     */
```

###### 课时3 3. 基本命令
```javascript

        01. 使用命令安装 webpack
            $ yarn add webpack --save-dev

        02. 创建 webpack.config.js
            $ touch webpack.config.js

        03. 编辑 webpack.config.js
            /*
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
                }

            }

            // 导出为外部调用的文件
            module.exports = config;
            */

        04. 编辑 conponent.js 文件
            modul.exports = function () {
                document.body.innerHTML = "搭建开发环境";
            }

        05. 编辑index.js 文件 并且 调用 component.js 文件
            modul.exports = function () {
                document.body.innerHTML = "搭建开发环境";
            }

        06. 配置 package.json 文件
            /*{
              "name": "webpack-course",
              "version": "1.0.0",
              "description": "",
              "main": "index.js",
              "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "build":"webpack --progress --colors"
              },
              "keywords": [],
              "author": "",
              "license": "ISC",
              "dependencies": {
                "webpack": "^2.2.1"
              }
          }*/

        07. 运行命令 yarn run build 进行打包
            $ yarn run build
            /*
                $ yarn run build            
                yarn run v0.21.3
                $ webpack --progress --colors
                Hash: d5bf54df2c5f148a5d70
                Version: webpack 2.2.1
                Time: 205ms
                Asset    Size  Chunks             Chunk Names
                bunld.js  2.7 kB       0  [emitted]  main
                [0] ./src/component.js 75 bytes {0} [built]
                [1] ./src/index.js 41 bytes {0} [built]
                Done in 2.39s.
             */

        08. 在index.html 文件进行 引用 bundle.js文件
            <script src="./dist/bunld.js"></script>        

        09. 编辑文件 component.js
            # 导出 component.js 文件 方便外部的调用
            module.exports = function () {
                document.body.innerHTML = "搭建开发环境";
            }

        10. 编辑文件 index.js
            # 引入 component.js文件
            var component = require("./component.js");
            component();
```

###### 课时4 4. 使用es6
```javascript

    ## 写ES6的代码

    01. 创建一个 ES6的配置文件，名为：.babelrc
        $ touch .babelrc

    02. 下载文件
        $ yarn add babel-loader babel-core babel-preset-es2015 --save-dev

    02. 编辑 .babelrc 的文件
        {
            "presets":["es2015"]    
        }


    03.配置 webpack.config.js
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
                filename:"bunlde.js"
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




```


###### 课时5 5. 自动产出html
```javascript


```


###### 课时5 5. 自动产出html
```javascript


```
