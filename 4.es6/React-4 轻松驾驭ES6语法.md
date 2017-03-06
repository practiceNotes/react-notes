#React-4 轻松驾驭ES6语法

###### 课时1 1. ES6介绍
```javascript
    # 介绍
    -ES6/7没有你想象的那么难，但不学习，也没有那么简单
    -学习前起友得把ES3/5的基础打牢
    -拥抱babel:Babel是一个javascript编译器
    -掌握常用的20%的ES6语法，其它的，看工作需要和自己兴趣了
    -destroy one by one每个知识点单点突破
```


###### 课时2 2. 环境变量的配置
```javascript
    # 搭建学习环境
    -基本环境
        01.全局nodejs & npm
        02.git bash or terminal
        03.编辑器atom or others
        04.chrome


    -Babel
        01.babel-core@5 用于浏览器端直接引入
        02.babel-cli命令行工具
        03.babel-preset-es2015 & babel-preset-es2015-loose分别是normal和loose两种模式解析es5语法

    -模式解析ES5语法
        01.babel-preset-stage-0或者stage-1等
        02.babel-preset-es2016
        03.babel-register用于在es6的文件里面直接引入，这样可以运行的解析
        04.babel-polyfill用于将一些es6的API做兼容处理

    -npm script  

    # 基本项目目录结构的说明
      src eso源代码
      dist es6转换为->es5可以运行代码。
      index.html 加载 dist目录下的代码，测试
      package.json  存放的基本的文件




    # 如何开发
      安装插件
      npm install babel-cli babel-preset-es2015 --save-dev
      /*
      $ yarn add babel-cli babel-preset-es2015 --save-dev
      yarn add v0.21.3
      info No lockfile found.
      [1/4] Resolving packages...
      [2/4] Fetching packages...
      warning fsevents@1.1.1: The platform "win32" is incompatible with this module.
      info "fsevents@1.1.1" is an optional dependency and failed compatibility check.                                                                                                                                   Excluding it from installation.
      [3/4] Linking dependencies...
      [4/4] Building fresh packages...
      success Saved lockfile.
      success Saved 155 new dependencies.
      ├─ ansi-regex@2.1.1
      ├─ ansi-styles@2.2.1
      ├─ anymatch@1.3.0
      ├─ arr-diff@2.0.0
      ├─ arr-flatten@1.0.1
      ├─ array-unique@0.2.1
      ├─ arrify@1.0.1
      ├─ assert-plus@1.0.0
      ├─ async-each@1.0.1
      ├─ babel-cli@6.23.0
      ├─ babel-code-frame@6.22.0
      ├─ babel-core@6.23.1
      ├─ babel-generator@6.23.0
      ├─ babel-helper-call-delegate@6.22.0
      ├─ babel-helper-define-map@6.23.0
      ├─ babel-helper-function-name@6.23.0
      ├─ babel-helper-get-function-arity@6.22.0
      ├─ babel-helper-hoist-variables@6.22.0
      ├─ babel-helper-optimise-call-expression@6.23.0
      ├─ babel-helper-regex@6.22.0
      ├─ babel-helper-replace-supers@6.23.0
      ├─ babel-helpers@6.23.0
      ├─ babel-messages@6.23.0
      ├─ babel-plugin-check-es2015-constants@6.22.0
      ├─ babel-plugin-transform-es2015-arrow-functions@6.22.0
      ├─ babel-plugin-transform-es2015-block-scoped-functions@6.22.0
      ├─ babel-plugin-transform-es2015-block-scoping@6.23.0
      ├─ babel-plugin-transform-es2015-classes@6.23.0
      ├─ babel-plugin-transform-es2015-computed-properties@6.22.0
      ├─ babel-plugin-transform-es2015-destructuring@6.23.0
      ├─ babel-plugin-transform-es2015-duplicate-keys@6.22.0
      ├─ babel-plugin-transform-es2015-for-of@6.23.0
      ├─ babel-plugin-transform-es2015-function-name@6.22.0
      ├─ babel-plugin-transform-es2015-literals@6.22.0
      ├─ babel-plugin-transform-es2015-modules-amd@6.22.0
      ├─ babel-plugin-transform-es2015-modules-commonjs@6.23.0
      ├─ babel-plugin-transform-es2015-modules-systemjs@6.23.0
      ├─ babel-plugin-transform-es2015-modules-umd@6.23.0
      ├─ babel-plugin-transform-es2015-object-super@6.22.0
      ├─ babel-plugin-transform-es2015-parameters@6.23.0
      ├─ babel-plugin-transform-es2015-shorthand-properties@6.22.0
      ├─ babel-plugin-transform-es2015-spread@6.22.0
      ├─ babel-plugin-transform-es2015-sticky-regex@6.22.0
      ├─ babel-plugin-transform-es2015-template-literals@6.22.0
      ├─ babel-plugin-transform-es2015-typeof-symbol@6.23.0
      ├─ babel-plugin-transform-es2015-unicode-regex@6.22.0
      ├─ babel-plugin-transform-regenerator@6.22.0
      ├─ babel-plugin-transform-strict-mode@6.22.0
      ├─ babel-polyfill@6.23.0
      ├─ babel-preset-es2015@6.22.0
      ├─ babel-register@6.23.0
      ├─ babel-runtime@6.23.0
      ├─ babel-template@6.23.0
      ├─ babel-traverse@6.23.1
      ├─ babel-types@6.23.0
      ├─ babylon@6.16.1
      ├─ balanced-match@0.4.2
      ├─ binary-extensions@1.8.0
      ├─ brace-expansion@1.1.6
      ├─ braces@1.8.5
      ├─ buffer-shims@1.0.0
      ├─ chalk@1.1.3
      ├─ chokidar@1.6.1
      ├─ commander@2.9.0
      ├─ concat-map@0.0.1
      ├─ convert-source-map@1.4.0
      ├─ core-js@2.4.1
      ├─ core-util-is@1.0.2
      ├─ debug@2.6.1
      ├─ detect-indent@4.0.0
      ├─ escape-string-regexp@1.0.5
      ├─ esutils@2.0.2
      ├─ expand-brackets@0.1.5
      ├─ expand-range@1.8.2
      ├─ extglob@0.3.2
      ├─ filename-regex@2.0.0
      ├─ fill-range@2.2.3
      ├─ for-in@1.0.2
      ├─ for-own@0.1.5
      ├─ fs-readdir-recursive@1.0.0
      ├─ fs.realpath@1.0.0
      ├─ glob-base@0.3.0
      ├─ glob-parent@2.0.0
      ├─ glob@7.1.1
      ├─ globals@9.16.0
      ├─ graceful-fs@4.1.11
      ├─ graceful-readlink@1.0.1
      ├─ has-ansi@2.0.0
      ├─ home-or-tmp@2.0.0
      ├─ inflight@1.0.6
      ├─ inherits@2.0.3
      ├─ invariant@2.2.2
      ├─ is-binary-path@1.0.1
      ├─ is-buffer@1.1.4
      ├─ is-dotfile@1.0.2
      ├─ is-equal-shallow@0.1.3
      ├─ is-extendable@0.1.1
      ├─ is-extglob@1.0.0
      ├─ is-finite@1.0.2
      ├─ is-glob@2.0.1
      ├─ is-number@2.1.0
      ├─ is-posix-bracket@0.1.1
      ├─ is-primitive@2.0.0
      ├─ isarray@1.0.0
      ├─ isobject@2.1.0
      ├─ js-tokens@3.0.1
      ├─ jsesc@1.3.0
      ├─ json5@0.5.1
      ├─ kind-of@3.1.0
      ├─ lodash@4.17.4
      ├─ loose-envify@1.3.1
      ├─ micromatch@2.3.11
      ├─ minimatch@3.0.3
      ├─ minimist@0.0.8
      ├─ mkdirp@0.5.1
      ├─ ms@0.7.2
      ├─ normalize-path@2.0.1
      ├─ number-is-nan@1.0.1
      ├─ object-assign@4.1.1
      ├─ object.omit@2.0.1
      ├─ once@1.4.0
      ├─ os-homedir@1.0.2
      ├─ os-tmpdir@1.0.2
      ├─ output-file-sync@1.1.2
      ├─ parse-glob@3.0.4
      ├─ path-is-absolute@1.0.1
      ├─ preserve@0.2.0
      ├─ private@0.1.7
      ├─ process-nextick-args@1.0.7
      ├─ randomatic@1.1.6
      ├─ readable-stream@2.2.3
      ├─ readdirp@2.1.0
      ├─ regenerate@1.3.2
      ├─ regenerator-runtime@0.10.3
      ├─ regenerator-transform@0.9.8
      ├─ regex-cache@0.4.3
      ├─ regexpu-core@2.0.0
      ├─ regjsgen@0.2.0
      ├─ regjsparser@0.1.5
      ├─ repeat-element@1.1.2
      ├─ repeat-string@1.6.1
      ├─ repeating@2.0.1
      ├─ set-immediate-shim@1.0.1
      ├─ slash@1.0.0
      ├─ source-map-support@0.4.11
      ├─ source-map@0.5.6
      ├─ string_decoder@0.10.31
      ├─ strip-ansi@3.0.1
      ├─ supports-color@2.0.0
      ├─ to-fast-properties@1.0.2
      ├─ trim-right@1.0.1
      ├─ user-home@1.1.1
      ├─ util-deprecate@1.0.2
      ├─ v8flags@2.0.11
      └─ wrappy@1.0.2
      Done in 30.20s.

       */

    # 文档配置：E:\fullStack\es6-course\package.json
        /*
        "dev":"babel src --out-dir dist -w" 把src下面的编译到 dist目录下


        {
          "name": "es6-course",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev":"babel src -d dist -w"    
          },
          "keywords": [],
          "author": "",
          "license": "ISC",
          "dependencies": {
            "babel-cli": "^6.23.0",
            "babel-preset-es2015": "^6.22.0"
          }
        }
     */

    # 运行 npm run dev

    # 创建 touch .babelrc 并配置如下
        {
            "presets":["es2015"]
        }
```

###### 课时3 3. 介绍ES6
```javascript


    ## 语言版本的介绍

    -ES6的第一个版本，于2015年6月批准成为javascript语言的下一代标准，是自2009年ES5标准确定后的第一个重大更新，正式名称就是《ECMAScript 2015标准》(简称ES2015)

    -2016年6月，小幅修订的《ECMAScript2016标准》(简称ES2016)如期发布，这个版本可以看作是ES6.1版，明年6月还会有ES2017的发布

    -规范在逐步确定更新升级，不过浏览器厂商可不一定能够及时跟得上升级的步伐，不过，一些主要的javascript引擎正在逐渐实现这些新功能。

    -借助babel来快速应用ES6语法新特性

```


######课时4：4. 箭头函数 13:36
```javascript

    ## 箭头函数 Arrow Function
    -箭头函数是使用 => 符号对函数定义的简写，它支持两种写法：表达式(Expression bodies)和函数体(Statement bodies).

    -值得注意的是，与一般的函数不同，函数体内的this对象，指向的是绑定定义时所在的对象，而不是使用时所在的对象，即："共享父作用域的关键字this"


    定定一个箭头函数
        var fn = p => p

        等价于
        var fn = function(p){
            return p
        }

    -案例

        let a = 1;
        const b = "中国深圳";

        // TODO: 前头函数
            var fn = p => p;

            var fn1 = () => "无参数的输入的剪头函数"

            var fn3 = (a, b) => a + b;
            console.log(fn3(1, 4));

            var fn4 = (a, b) => {
                var m = a + 2;

                // 显示的return
                return m * b;

            }
            console.log(fn4(2, 5)); // 20



        //TODO: ES5, 通过 bind来解决问题
            var obj = {
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
            obj.getMessage();


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

```  


######  课时5：5. 类

```javascript
    // TODO：关于计继承

    ## 如何定义一个类 class

    -ES2015的类只是一个语法糖，能过class关键字让语法更这传统的面向对象模式，本质上还是基本于原型的。

    -使用单一便捷的声明格式，使得类使用起来更方便，也更具互操作性。
    -类支持基于原型的继承，调用父类的构造函数，生成实例，静态方法和构造函数。

    // TODO: ES5
        function Animal (name, age){
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
        cat.getMessage();



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

```


######课时6：6. 对象和继承 06:49
```javascript
    /*
    # 轻松驾驭 ES6

    ### 增强的对对象字面量

    -扩展后的对象字面量，允许在结构中设置原型，简化了类似 `foo:foo` 这样的赋值、定义方法父级调用。
    -这使对象字面量更接近"类的声明"， 并使得基于对象的设计更加方便

    // 设置一个原型
        var others = {data:"other data"}

        var obj = {
            __proto__: others,
            name:"Alan",
            // ES5
            /*getName:function(){
                console.log(this.name);
            }*/

            // ES6的写法
            getName(){
                console.log(this.name);
            }
        }

        //obj.getName();

        //console.log(obj.data); // other data

        // 简化之后
        var a = 1;
        var b = "2";
        var fn = (m, n) => console.log(m + n);

        var objAnother = {a, b ,fn}

        console.log(objAnother.fn(1, 4));


    */
```




######课时7：7. 模板字符串 08:21
```javascript
    /*
    ## 模板字符串 tempalte strings
    -模板字符串提供了构建字符串的语法糖，类似于像Perl，Python等语言中的字符串插值。

    -也可以构建一个自定义标签，避免注入攻击或用字符串内容构建更高层次的数据结构
    */


    // TODO  字符串模板

        // ES5的字符串模板
            var name = "cat";
            var age = "1";
            var str = name + " is " + age + " years old.";

        // ES6的字符串模板
            var temStr = `${name} is ${age} years old.`;

            console.log(str);   // cat is 1 years old.
            console.log(temStr);// cat is 1 years old.


        // ES5 拼接一个HTML片段
            var htmlStr = '<div>' + name + '</div>'+
                          '<h1>' + age +'</h1>';
            console.log(htmlStr);

        // ES6 拼接一个HTML片段
            var htmlTemStr = `<div>
                                <div>${name}</div>
                                <h1>${age}</h1>
                            </div>`;
            console.log(htmlTemStr);  


```

###### 课时8 8. 解构赋值
```javascript
    ## 解构 Destructuring

    -解构允许"数组和对象"使用"模式匹配"进行绑定
    -解构是以foo["foo"]方式查的变量，当没有找到的返回undefined



    解构赋值
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

```

###### 课时9 9. 默认、其余和展开操作符
```javascript

    ## 默认参数(Default) + 任意参数 (Rest) + 护展运算符(Spread)

    > 他们给JS函数带来的改变
    - 调用具有默认参数的函数, 可以很好的保证函数的容错性，并减少代码逻辑
    -任意参数 rest 让我们不现需要买arguments, 并且更直接的解决了一些常见的问题
    -扩展运算符spread,逻辑清晰，代码精简

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


   var arr = [18, 232, 33, 5];
   var newArr = [...arr, 100, 1000];
   console.log(newArr);


   console.log(Math.max(...newArr));
   /*
   [18, 232, 33, 5, 100, 1000]0: 181: 2322: 333: 54: 1005: 1000length: 6__proto__: Array[0]
   index.js:38 1000
    */



```

####### 课时10 10. let和const定义变量
```javascript

    ## Let(局部变量) + Const(常量)
    -新增块级作用域，使用let定义。
    -const 是用于定义常量，单赋值(仅充许被赋值一次)。
    -没有变量提长，静态限制(Static restrictions) 限止变量在赋值前被使用


    #这里的结果是 10        
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


           {

               var a = "2";
               console.log(a)
           }

```

###### 课时11 11.模块
```javascript

    ## 模块(Nodules)

        -ES6的Classic只是面向对旬编程的语法糠，升级了ES5的构造函数的原型链继承的写法，并不骨解决模块化问题，Module功能就是为了解决这个问题而提出来的。

        -为了方便定义模块，从语言层面对模块进行了支持。编写方式借鉴了流行的JavaScript模块加载器(AMD, CommonJS)。

        -使用webpack将模块打包

    ## 安装 webpack
        01. $ yarn add webpack babel-loader --save-dev

        02. 创建一个 webpack.config.js 文件
            $ touch webpack.config.js


    ## 配置 webpack.config.js 文件
        let path = require("path");
        var webpack = require("webpack");

        var config = {
            entry:path.resolve(__dirname, "./src/index.js"),
            output:{
                path:path.resolve(__dirname, "./dis"),
                filename:[name].js
            },
            // 配置
            module:{
                loaders:[
                    {
                        test:/].js$/,
                        loader:"babel",
                        exclude:/node_modules/
                    }
                ]
            }
        }

        module.exports = config;


    ## 配置 package.json 文件
        - webpack       // 打包的
        - -w            // 是监听的文件
        - --progress    // 显示文件的进度情况
        - --colors      // 显示信息的颜色
        {
          "name": "es6-course",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "babel src -d dist -w",
            "build":"webpack -w --progress --colors"
          },
          "keywords": [],
          "author": "",
          "license": "ISC",
          "dependencies": {
            "babel-cli": "^6.23.0",
            "babel-loader": "^6.4.0",
            "babel-preset-es2015": "^6.22.0",
            "webpack": "^2.2.1"
          }
        }


    ## 运行环境

        错误的 filename:[name].js
        let path = require("path");
        var webpack = require("webpack");

        var config = {
            entry:path.resolve(__dirname, "./src/index.js"),
            output:{
                path:path.resolve(__dirname, "./dis"),
                filename:[name].js
            },
            // 配置
            module:{
                loaders:[
                    {
                        test:/].js$/,
                        loader:"babel",
                        exclude:/node_modules/
                    }
                ]
            }
        }

        module.exports = config;
            /*
            $ yarn run build
            yarn run v0.21.3
            $ webpack -w --progress --colors
            E:\fullStack\es6-course\webpack.config.js:8
                    filename:[name].js
                              ^

            ReferenceError: name is not defined
                at Object.<anonymous> (E:\fullStack\es6-course\webpack.config.js:8:19)
                at Module._compile (module.js:571:32)
                at Object.Module._extensions..js (module.js:580:10)
                at Module.load (module.js:488:32)
                at tryModuleLoad (module.js:447:12)
                at Function.Module._load (module.js:439:3)
                at Module.require (module.js:498:17)
                at require (internal/module.js:20:19)
                at requireConfig (E:\fullStack\es6-course\node_modules\webpack\bin\convert-a                                                                                                                                  rgv.js:96:18)
                at E:\fullStack\es6-course\node_modules\webpack\bin\convert-argv.js:109:17
            error Command failed with exit code 1.
            info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this comm                                                                                                                                  and.

             如果出现以上 filename:[name].js 这里的错误就是因为这是是要必成字符串："[name].js"                                     ^

             */

        正确的 filename:"[name].js"

            let path = require("path");
            var webpack = require("webpack");

            var config = {
                entry:path.resolve(__dirname, "./src/index.js"),
                output:{
                    path:path.resolve(__dirname, "./dis"),
                    filename:"[name].js"
                },
                // 配置
                module:{
                    loaders:[
                        {
                            test:/].js$/,
                            loader:"babel",
                            exclude:/node_modules/
                        }
                    ]
                }
            }

            module.exports = config;


        ### 案例--------------------------    
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

```

###### 课时12 12.模块扩展
