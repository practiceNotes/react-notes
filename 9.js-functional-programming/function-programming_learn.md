###### 课时1 什么是函数式编程
```
  ## 1. 什么时函数式编程
        > 什么是函数式编程，就是把函数本身上长到一等公民的地位，进行编程构建

  ## 2. 什么是函数
        定义：一般的，在一个变化过程中，有两个变变量 x、y, 如果给定一个x值，相应的就确定唯一的一个y, 那么就称y是x的函数，其中x是自变量，y是因变量，x的取值范围叫做这个函数的定义域，相应y的取值范围叫做函数的值域。

        - 数学中的函数：函数就是从A到B的关系映射->`y = f(x)`
        - js中的函数：多条语句组成的程序块->`var y = function (x) {}`


  ## 3. 面向函数编程
        - 面向过程编程：以过程为中心的编程思想，想到什么写什么

        - 面向对象编程：从数据结构的角度出发
            01.具有相同特性(数据元素) 和 行为 (功能) 的对象的抽象就是类
            02.对象的抽象是类，类的实例是对象
            03.类实际上就是一种数据类型

        - 面向函数编程：从算法角度出发，也就是从行为的角度出发，体现的一些编程原则
            01.不要重复自己 (don't repeat yourself)
            02.高内聚低耦合 (loose counling high cohesion)
            03.最小间外原则 (Principles of least surprise)
            04.单一责任 (single responsibility)

```




###### 课时2 函数式编程的好处
```
    ## 1.为什么要学习函数式编程
         -为了更好的模块化
            00.模块化使得开发更快、维护更容易
            01.模块可以重用
            02.模块化便于单元测试和debug

         -掌握函数式编程有助于更好的理解和使用Rxjs、Redux等一些前端类库和框架

```

###### 课时3 函数是一等公民
```
    -函数式编程的基本理念是以函数为核心来组织代码，很自然的。它首先将函数的地位提高，视其为"第一等公民"(first class)。

    -所谓一等公民，是指函数和其它数据类型拥有平等的地位，比如：
        01.函数可以赋值给变量
        02.函数可以被作为实参传递
        03.函数可以被另一个函数返回
        04.函数可以作为形参

```
```javascript

    // 定义一个函数
        var a = function (x) {
            return x + 1;
        }


    // 赋值
        var res = a (1);


    // 实参传递
        var b = function (a) {
            return a(1) + 1;
        }


    // 返回另一个函数
        var c = function (a, cb) {
            return function (c) {
                cb();

                return c + 2;
            }
        }

        function cb () {

        }

```



###### 课时4 纯函数的作用
```
    >纯函数：一个没有任何副作用，并且返回值只由输入决定的函数


    ### 两个例子
        - slice & splice ：slice 是一个纯函数，splice是非函数
        -add

    > 副作用：如果一个函数，除了返回值之外，还会修改某些其它状态，或者与外部函数等有可观测的交互

```
```javascript

    ### 两个例子
        - slice & splice ：slice 是一个纯函数，splice是非函数
        -add     

    // 01 slice(start, end) 截取从0到2的位置，输入的值不变，返回的值也不变
        var arr = [1,2,3,4,5,6];
        //var getSlice = arr.slice(0, 2); // 截取从0到2的位置
        console.log(arr.slice(0, 2));          // 返回出来的结果: [1, 2]
        // 说明, 只要我们 arr.slice(0, 2)它返回的给我们始终都是1和2的值，不会改变

    // 02 调用数组的 splice(0, 2); 输入的值不变，返回的值会变
        //var arrSplice = arr.splice(0, 2);

        // 第一次返回的结果：
        console.log(arr.splice(0, 2))
        ·> 1 [1, 2]

        // 第二次返回的结果：
        console.log(arr.splice(0, 2))
        ·> 2 [3, 4]

        // 第三次返回的结果：
        console.log(arr.splice(0, 2))
        ·> 3 [5, 6]

        // 第四次返回的结果：
        console.log(arr.splice(0, 2))
        ·> 4 []


    // 03.定义一个变量
        var x = 5;
        function add (x) {
            return y + x;
        }
        // 运行
        console.log(add (1));

        // x 改变为 10
        x = 10;
        console.log(add ());
        ·> 11 返回出来的结果就是 11

    // 04. add 的非纯函数定义
        var x = 5;
        function add (y) {
            return y + x;
        }    
        // 如何定义一个纯函数
        function addPure(x){
            return function (y){
                return y + x;
            }
        }

        //每次去调用一次
        var a = addPure(5)(1);
        console.log(a) // 6


```


###### 课时5 柯里化函数
```
    > 只传递函数的一部分参数来调用它。让它返回一个函数去处理剩下的参数

    ### 接上部分例讲解

```
```javascript
    // 01. 柯里化
    function addPure(x){
        return function(y){
            return y + x;
        }
    }

    var addTemp = addPure(5);
    var res = addTemp(1);       // 6
    var res1 = addTemp(10);     // 15


    // 02.非柯里化
    function addPure (x, y){
        return  y + x;
    }


    // 03. 柯里化ES6
    const add = x => y => x + y;
    // redux middlreware 在这里就是在react里定义了一个中间界
    const loggerMiddleware = store => next => next => {
        // do some thing.
    }

    //TODO:好处
    /**
     * -参数利用：利用柯里化，我们可以固定往其中的部参数，在调用的时候，这个参数就相当于已经被记住了，不需要再次传递，也就是我们这里说的参数复用，
     *
     * -延迟执行：不断的柯里化，累积传的参数，最后执行。
     *
     *
     * **函数柯里化给我们带来的是：解决问题的一种逻辑思维方式。**
     *
     * -性能
     * -复杂度
     */

```


####### 课时6 函数组合
```javascript
    /*
    ·当函数纯化之后，有一个很鲜明的特点是，这个函数变的可以组合了，我们可以像堆积木一样，把各个我们要用的函数堆起来变成一个更大的函数体
    ·函数可组合之后，要解决的问题就是如何组合

    ### 函数嵌套
        学会了使用纯函数以及如何把它柯里化之后，我们会很容易写出这要瓣嵌套代码：
    */    
        //  很清晰
        const f = x => x + 1;
        const g = x => x + 2;
        const h = x => x + 3;

        var a = h(g(f(x)));
        说明：哪果嵌套太多，代码不好理解，逻辑很难掌控


    //TODO: 示例：定义compose函数实现函数的组合使用
       /*   
        简易compose函数的定义
        */
        var compse = function(g, g){
            return function(x){
                return f(g(x));
            };
        };

      /*或者使用es6的箭头函数定义compose*/
      var compose = (f, g) => (x => f(g(x)));

      var add = x => x + 1;
      var multiple = x => x + 5;

      compose(multiple, add)(2);

      /*
        add出来的结果是：3
        multiple出来的结果：15

        如果没有compose组合
       */
       var a = multiple(add(add1(add2(add(add3(2))))));


      > 两个函数组合使用结果是， 从右往左依次调用了传入compose的两个方法，实现了值的计算


      >### 不同的类库对compose方法有不同的实现
       以redux为例，compose源码：

      /*
         * from right to left, For example, compose(f, g, h) is identical to doing
       */

       export default function compose(...funcs){
           if(funcs.length === 0){
               return arg => arg;
           }


           if(funcs.length == 1){
               return funcs[0];
           }

           const last = function[funcs.length - 1];
           const rest = funcs.slice(0, -1);
           return (...args) => rest.reduceRight((composed, f) => f(composed, last(...args)));


           const demo = (composed, f) => {
               f(composed);
               return last(...args);
           };


           compose(fun1, fun2, fun3);

       }



       ### 调用compose的姿势：
       // applyMiddleware.js
       disptch = compose(...chain)(store.displatch);
```



####### 课时7 高阶函数
```javascript
    > 以一个函数为参数，同时返回一个函数作函数的返回值

    >### 简单理解高阶
    const fn = x => x + 1;

    // ES6
    const highQrderFn = x => y => {
        console.log(y);
        return x(y);
    }

    const middle = store => next => action => {

    }
    // 调用
    var a = highOredFn(fn);
    var b = a(2)(); // 3


    ### 实践：react中的高阶组件
    const Comp extends Component {
        render(){
            return <h1>Compo</h>
        }
    }

    // high order
    const Mixis = ExampleComp => class extends Component {
        constructor(props){
            this.state = {name:"demo"};
            super(props);
        }

        render(){
            <ExampleComp
                {...th.staste}
                {...ths.props}
                fn = {this.fn}

            />
        }
    }

    const MycComponent = Mixins(Comp)




```
