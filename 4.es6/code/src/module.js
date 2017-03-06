// 把文件导出、出去，主要让包面方便调用

    /*export var a = 1;
    export let b = "2";*/

// 必须要在 function 后面加一个方法名，不然就会报错或者不执行
    /*export function fun(){
        console.log("hello");
    }*/



var obj = {
    a:1,
    fn(){
        console.log("中国·深圳")
    }
}

export default obj;
