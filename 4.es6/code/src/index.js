// 课时12 12.模块扩展
/*
    ------start------
    # 文件名为 module.js
        把文件导出、出去，主要让包面方便调用
            export var a = 1;
            export let b = "2";

        必须要在 function 后面加一个方法名，不然就会报错或者不执行
            export function fun(){
                console.log("hello");
            }
    ------end------

    第一种，是重命名，*是把所有的东西都拿到
         module.js
             export var a = 1;
             export let b = "2";
             export function fun(){
                 console.log("hello");
             }

         index.js
             import * as module from "./module";
             console.log(module);


    第二种：通过解构赋值的方式拿到里面的东西
        module.js
            export var a = 1;
            export let b = "2";
            export function fun(){
                console.log("hello");
            }

        index.js
            import {fun} from "./module";
            console.log(fun);

        结果如下：
            function fun(){
                console.log("hello");
            }

    第三种：
        module.js
            var obj = {
                a:1,
                fn(){
                    console.log("中国·深圳")
                }
            }
            export default obj;

        index.js
            import * as module from "./module";
            console.log(module);
 */
import * as module from "./module";
console.log(module);
