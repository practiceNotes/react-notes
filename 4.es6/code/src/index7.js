// ###### 课时9 9. 默认、其余和展开操作符
//
    /*## 默认参数(Default) + 任意参数 (Rest) + 护展运算符(Spread)

    > 他们给JS函数带来的改变
    - 调用具有默认参数的函数, 可以很好的保证函数的容错性，并减少代码逻辑
    -任意参数 rest 让我们不现需要买arguments, 并且更直接的解决了一些常见的问题
    -扩展运算符spread,逻辑清晰，代码精简*/

    /*
    function Person(name, age){
        if(typeof name == "undefined") name = name || "Alan";

        if(typeof age == "undefined") age = age || "18";

        return name + ' ' + age;
    }


    // Default
    var Person = (name="Alan", age="16") => name + " " + age;
    console.log(Person("Alan"));



   function agrv(abj, ...keys){

       var res = Object.create(null)

       console.log(arguments);
       console.log(keys);

       var res =Object.create(null);
   }

   var bate = {title:"es6", name:"name"};
   var msg = agry(data, "title", "name");
   cconsole.log(msg.title);

   */

   var arr = [18, 232, 33, 5];
   var newArr = [...arr, 100, 1000];
   console.log(newArr);


   console.log(Math.max(...newArr));
   /*
   [18, 232, 33, 5, 100, 1000]0: 181: 2322: 333: 54: 1005: 1000length: 6__proto__: Array[0]
   index.js:38 1000
    */
