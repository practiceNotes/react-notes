// ####### 课时10 10. let和const定义变量
/*
    ## Let(局部变量) + Const(常量)
    -新增块级作用域，使用let定义。
    -const 是用于定义常量，单赋值(仅充许被赋值一次)。
    -没有变量提长，静态限制(Static restrictions) 限止变量在赋值前被使用
*/

// 这里的结果是 10
    /*
        for(var i = 0; i < 10; i++){

        }
        console.log(i); // 10


        for(let i = 0; i < 10; i++){
            console.log(i);
        }
        console.log(i);


        const a = 1;
        a = 2;


        console.log(a); // undefined
        var a = 10;
    */

   {

       var a = "2";
       console.log(a)
   }
