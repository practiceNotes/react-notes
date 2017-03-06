
// TODO: ES5
/*function Animal (name, age){
    this.name = name;
    this.age = age;
}

Animal.prototype = {
    getMessage: functin(){
        var pri = this.name + " is " + this.age + " yers old";
        console.log(pri);
    }
}


var cat = new Animal("cat", "1");
cat.getMessage();*/



// TODO: ES6
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getMessage(){
        console.log(this.name + " is " + this.asge + "yers old");
    }

    static showInfo(){
        console.log("show info......");
    }
}

// var cat = new Animal("cat", "1");
// cat.getMessage();
//
// console.log(cat.__proto__);

//Animal.showInfo();


// 继承 Animal
class Cat extends Animal{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }

    getName(){
        console.log(this.name + " color is " + this.color);
    }

}

var cat = new Cat("中国", "2", "red");
cat.getMessage();

cat.getName();
