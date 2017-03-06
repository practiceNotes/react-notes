// 从外部导入文件进来，也可以说是引入外部的js
/*
    $  yarn run build
    yarn run v0.21.3
    error Couldn't find a package.json file in "E:\\fullStack\\es6-course\\src"
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

    以上提示是无法找到这个 js


    // TODO: 01. 文件名为：module.js 把文件导出、出去，主要让包面方便调用
        export var a = 1;


        export let obj = {
            m:"2"
        }



    // TODO：01. 导入一个文件。并进行组合后。重名名
    import * as module from "./module"
    console.log(module);
        Object
            __esModule:true
            a:(...)
            obj:(...)

    // TODO：02.导入一个js文件后，并进行结构赋值解析
    import {obj} from "./module";
    console.log(obj);   // Object {m: "2"}


    // TODO: 03.
        文件名为：module.js
            export default {
                a:"2"
            }

        导入的方式：
        import * as module from "./module";
        console.log(module);   // Object {default: Object, __esModule: true}

        但是我们不可能用以下的方式去获取里面的内容如：
        console.log(module.default.a); // 结果是 2

    ### 重点：正确的方式去获取，用以下的方式去解决 default的方式
        安装插件：
            01. npm install babel-plugin-add-module-exports --save-dev

            安装成后：
                $ yarn add babel-plugin-add-module-exports --save-dev
                yarn add v0.21.3
                [1/4] Resolving packages...
                [2/4] Fetching packages...
                warning fsevents@1.1.1: The platform "win32" is incompatible with this module.
                info "fsevents@1.1.1" is an optional dependency and failed compatibility check. Excluding it from installation.
                [3/4] Linking dependencies...
                warning "babel-loader@6.4.0" has unmet peer dependency "babel-core@^6.0.0".
                [4/4] Building fresh packages...
                success Saved lockfile.
                success Saved 1 new dependency.
                └─ babel-plugin-add-module-exports@0.2.1


    ### 配置文件 .babelrc 文件
        {
            "presets":["es2015"],
            "plugins":["add-module-exports"]
        }

        import * as module from "./module";
        console.log(module.a);   // 2


    ### 解构 module.js 文件

        export default {
            a:"2"
        }

        // 通过 import 进来之后重命名之后。再进行解构赋值
        import {a} from "module";
        console.log(a);

 */
import {a} from "./module";
console.log(a);
