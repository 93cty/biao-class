/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Templator/templator.js":
/*!************************************!*\
  !*** ./src/Templator/templator.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction obj_get (obj, key) {\n  let tmp = Object.assign({}, obj);\n  let arr = key.split('.');\n\n  console.log(arr);\n}\n\nlet o = {\n  a : {\n    b : {\n      c : 1,\n    },\n  },\n};\n\nobj_get(o, 'a.b.c'); // 1\n\nfunction templator (tpl, data) {\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (templator);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVGVtcGxhdG9yL3RlbXBsYXRvci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9UZW1wbGF0b3IvdGVtcGxhdG9yLmpzPzk5MGMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gb2JqX2dldCAob2JqLCBrZXkpIHtcbiAgbGV0IHRtcCA9IE9iamVjdC5hc3NpZ24oe30sIG9iaik7XG4gIGxldCBhcnIgPSBrZXkuc3BsaXQoJy4nKTtcblxuICBjb25zb2xlLmxvZyhhcnIpO1xufVxuXG5sZXQgbyA9IHtcbiAgYSA6IHtcbiAgICBiIDoge1xuICAgICAgYyA6IDEsXG4gICAgfSxcbiAgfSxcbn07XG5cbm9ial9nZXQobywgJ2EuYi5jJyk7IC8vIDFcblxuZnVuY3Rpb24gdGVtcGxhdG9yICh0cGwsIGRhdGEpIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0b3I7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Templator/templator.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Templator_templator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Templator/templator */ \"./src/Templator/templator.js\");\n\n\n// let tpl  = `<h1>你好，我叫{{name}}，我今年{{age}}岁了，我娃叫{{child.name}}，他今年{{child.age}}</h1>`;\n// let data = {\n//   name  : '王花花',\n//   age   : 18,\n//   child : { name : '李拴蛋', age : 54 },\n// };\n// let r    = templator(tpl, data);\n// console.log(r);\n\n// import article_api from './Api/article';\n// import article_ui  from './Ui/article';\n// import route       from './Route/route';\n//\n// let route_config = {\n//   routes : {\n//     home         : {\n//       path         : '/home',\n//       el           : '#home',\n//       template_url : './src/template/home.html',\n//     },\n//     about        : {\n//       path         : '/about',\n//       el           : '#about',\n//       template_url : './src/template/about.html',\n//     },\n//     article      : {\n//       path         : '/article/:author/:id', // ['article', ':author', ':id']\n//       el           : '#article',\n//       template_url : './src/template/article.html',\n//     },\n//     article_list : {\n//       path         : '/article-list',\n//       el           : '#article-list',\n//       template_url : './src/template/article-list.html',\n//     },\n//   },\n//   hook   : {\n//     before : function () {\n//       return true;\n//     },\n//     after  : function (route) {\n//       /*先通过接口拿到数据*/\n//       // article_api.read(1, data => {\n//       //   /*有了数据就可以渲染动态的内容了*/\n//       //   article_ui.render(data);\n//       // });\n//     },\n//   },\n// };\n//\n// route\n//   .init(route_config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVtcGxhdG9yIGZyb20gJy4vVGVtcGxhdG9yL3RlbXBsYXRvcic7XG5cbi8vIGxldCB0cGwgID0gYDxoMT7kvaDlpb3vvIzmiJHlj6t7e25hbWV9fe+8jOaIkeS7iuW5tHt7YWdlfX3lsoHkuobvvIzmiJHlqIPlj6t7e2NoaWxkLm5hbWV9fe+8jOS7luS7iuW5tHt7Y2hpbGQuYWdlfX08L2gxPmA7XG4vLyBsZXQgZGF0YSA9IHtcbi8vICAgbmFtZSAgOiAn546L6Iqx6IqxJyxcbi8vICAgYWdlICAgOiAxOCxcbi8vICAgY2hpbGQgOiB7IG5hbWUgOiAn5p2O5ou06JuLJywgYWdlIDogNTQgfSxcbi8vIH07XG4vLyBsZXQgciAgICA9IHRlbXBsYXRvcih0cGwsIGRhdGEpO1xuLy8gY29uc29sZS5sb2cocik7XG5cbi8vIGltcG9ydCBhcnRpY2xlX2FwaSBmcm9tICcuL0FwaS9hcnRpY2xlJztcbi8vIGltcG9ydCBhcnRpY2xlX3VpICBmcm9tICcuL1VpL2FydGljbGUnO1xuLy8gaW1wb3J0IHJvdXRlICAgICAgIGZyb20gJy4vUm91dGUvcm91dGUnO1xuLy9cbi8vIGxldCByb3V0ZV9jb25maWcgPSB7XG4vLyAgIHJvdXRlcyA6IHtcbi8vICAgICBob21lICAgICAgICAgOiB7XG4vLyAgICAgICBwYXRoICAgICAgICAgOiAnL2hvbWUnLFxuLy8gICAgICAgZWwgICAgICAgICAgIDogJyNob21lJyxcbi8vICAgICAgIHRlbXBsYXRlX3VybCA6ICcuL3NyYy90ZW1wbGF0ZS9ob21lLmh0bWwnLFxuLy8gICAgIH0sXG4vLyAgICAgYWJvdXQgICAgICAgIDoge1xuLy8gICAgICAgcGF0aCAgICAgICAgIDogJy9hYm91dCcsXG4vLyAgICAgICBlbCAgICAgICAgICAgOiAnI2Fib3V0Jyxcbi8vICAgICAgIHRlbXBsYXRlX3VybCA6ICcuL3NyYy90ZW1wbGF0ZS9hYm91dC5odG1sJyxcbi8vICAgICB9LFxuLy8gICAgIGFydGljbGUgICAgICA6IHtcbi8vICAgICAgIHBhdGggICAgICAgICA6ICcvYXJ0aWNsZS86YXV0aG9yLzppZCcsIC8vIFsnYXJ0aWNsZScsICc6YXV0aG9yJywgJzppZCddXG4vLyAgICAgICBlbCAgICAgICAgICAgOiAnI2FydGljbGUnLFxuLy8gICAgICAgdGVtcGxhdGVfdXJsIDogJy4vc3JjL3RlbXBsYXRlL2FydGljbGUuaHRtbCcsXG4vLyAgICAgfSxcbi8vICAgICBhcnRpY2xlX2xpc3QgOiB7XG4vLyAgICAgICBwYXRoICAgICAgICAgOiAnL2FydGljbGUtbGlzdCcsXG4vLyAgICAgICBlbCAgICAgICAgICAgOiAnI2FydGljbGUtbGlzdCcsXG4vLyAgICAgICB0ZW1wbGF0ZV91cmwgOiAnLi9zcmMvdGVtcGxhdGUvYXJ0aWNsZS1saXN0Lmh0bWwnLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIGhvb2sgICA6IHtcbi8vICAgICBiZWZvcmUgOiBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9LFxuLy8gICAgIGFmdGVyICA6IGZ1bmN0aW9uIChyb3V0ZSkge1xuLy8gICAgICAgLyrlhYjpgJrov4fmjqXlj6Pmi7/liLDmlbDmja4qL1xuLy8gICAgICAgLy8gYXJ0aWNsZV9hcGkucmVhZCgxLCBkYXRhID0+IHtcbi8vICAgICAgIC8vICAgLyrmnInkuobmlbDmja7lsLHlj6/ku6XmuLLmn5PliqjmgIHnmoTlhoXlrrnkuoYqL1xuLy8gICAgICAgLy8gICBhcnRpY2xlX3VpLnJlbmRlcihkYXRhKTtcbi8vICAgICAgIC8vIH0pO1xuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyB9O1xuLy9cbi8vIHJvdXRlXG4vLyAgIC5pbml0KHJvdXRlX2NvbmZpZyk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });