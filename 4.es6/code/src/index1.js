
/*let a = 1;
const b = "中国深圳";*/

// TODO: 前头函数
    /*var fn = p => p;

    var fn1 = () => "无参数的输入的剪头函数"

    var fn3 = (a, b) => a + b;
    console.log(fn3(1, 4));

    var fn4 = (a, b) => {
        var m = a + 2;

        // 显示的return
        return m * b;

    }
    console.log(fn4(2, 5)); // 20
    */


//TODO: ES5, 通过 bind来解决问题
/*var obj = {
    name:"Alan",
    courses:["深圳", "北京", "上海"],
    getMessage: function(){
        this.courses.forEach(function(index, item){
            //console.log(item + " <====> " + index);
            console.log(this);
            console.log(this.name + "tech <====> " + item);
        }.bind(this));
    }
};
obj.getMessage();*/


// TODO: ES6, 没有通过THIS来解决，是用箭头函数
var obj = {
    name:"Alan",
    courses:["深圳", "北京", "上海"],
    getMessage: function(){
        this.courses.forEach((item) => {
            //console.log(item + " <====> " + index);
            console.log(this);
            //console.log(this.name + "tech <====> " + item);
        });
    }
};
obj.getMessage();
