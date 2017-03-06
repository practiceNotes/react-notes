/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module__ = __webpack_require__(1);
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

console.log(__WEBPACK_IMPORTED_MODULE_0__module__);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = obj;


/***/ })
/******/ ]);