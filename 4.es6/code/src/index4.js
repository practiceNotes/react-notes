
// 对象字面量
    /*var obj = {
        name:"Alan",
        getName:function(){
            console.log(this.name);
        }
    }
    obj.getName();  // Alan*/


// 设置它的原型
    var others = {data:"other data"}

    var obj = {
        ___proto__: others.data,
        name:"Alan'Leung",
        getName(){
            console.log(this.name);
        }
    }
    obj.getName();
    console.log(obj.data);

    var a = 1;
    var b = "2";
    var fn = (m, n) => console.log(m + n);
    var objAnother = {a, b, fn}
    console.log(objAnother.fn(1 ,));
