// 课时8 8. 解构赋值
    /*var arr = ["狗", "猫", "牛"];
    var [dog] = arr;
    console.log(dog);*/


    let [dog, ,bull] = ["狗", "猫", "牛"];
    console.log(dog);

    console.log(bull);



    // 对象结构的赋值
    var obj = {
        a: "1",
        b: ["狗", ["猫", "牛"]],
        fn(){
            console.log(this.a);
        }
    }

    var {a, b} = obj;
    console.log(b);


    var {React, component, ProtoType} = require("react");
