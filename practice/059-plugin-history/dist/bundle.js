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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var list = []\n  , el\n  , on_click\n  , output = {\n    init: init,\n    add: add,\n    remove: remove,\n    clear: clear,\n  }\n;\n\nfunction init(config) {\n\n  /*找到用户指定的历史记录根元素*/\n  el = document.querySelector(config.el);\n\n  /*点击历史记录后要执行的函数（回调函数，执行个性化的功能）*/\n  on_click = config.on_click;\n\n  /*把冰箱里的数据取回到炒瓢*/\n  sync_to_ladle();\n\n  /*初次渲染*/\n  render();\n}\n\nfunction render() {\n  el.innerHTML = '';\n\n  list.forEach(function (keyword) {\n    var el_row = document.createElement('div');\n\n    el_row.innerHTML = `${keyword}`\n\n    el_row.addEventListener('click', function (e) {\n      if (on_click)\n        on_click(keyword, e);\n    });\n\n    el_row.classList.add('history');\n\n    el.appendChild(el_row);\n  });\n}\n\nfunction sync_to_ladle() {\n  list = JSON.parse(localStorage.getItem('history_list')) || [];\n}\n\nfunction sync_to_store() {\n  localStorage.setItem('history_list', JSON.stringify(list));\n}\n\n/*添加一条历史记录\n* @param String keyword\n* */\nfunction add(keyword) {\n  list.push(keyword);\n  render();\n  sync_to_store();\n}\n\nfunction remove(keyword) {\n  var shit_index = list.indexOf(keyword);\n  if (shit_index == -1)\n    return;\n\n  list.splice(shit_index, 1);\n  render();\n  sync_to_store();\n\n}\n\nfunction clear() {\n  list = [];\n  render();\n  sync_to_store();\n}\n\nmodule.exports = output;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGlzdG9yeS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGxpc3QgPSBbXVxuICAsIGVsXG4gICwgb25fY2xpY2tcbiAgLCBvdXRwdXQgPSB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBhZGQ6IGFkZCxcbiAgICByZW1vdmU6IHJlbW92ZSxcbiAgICBjbGVhcjogY2xlYXIsXG4gIH1cbjtcblxuZnVuY3Rpb24gaW5pdChjb25maWcpIHtcblxuICAvKuaJvuWIsOeUqOaIt+aMh+WumueahOWOhuWPsuiusOW9leagueWFg+e0oCovXG4gIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZWwpO1xuXG4gIC8q54K55Ye75Y6G5Y+y6K6w5b2V5ZCO6KaB5omn6KGM55qE5Ye95pWw77yI5Zue6LCD5Ye95pWw77yM5omn6KGM5Liq5oCn5YyW55qE5Yqf6IO977yJKi9cbiAgb25fY2xpY2sgPSBjb25maWcub25fY2xpY2s7XG5cbiAgLyrmiorlhrDnrrHph4znmoTmlbDmja7lj5blm57liLDngpLnk6IqL1xuICBzeW5jX3RvX2xhZGxlKCk7XG5cbiAgLyrliJ3mrKHmuLLmn5MqL1xuICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBlbC5pbm5lckhUTUwgPSAnJztcblxuICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpIHtcbiAgICB2YXIgZWxfcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBlbF9yb3cuaW5uZXJIVE1MID0gYCR7a2V5d29yZH1gXG5cbiAgICBlbF9yb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKG9uX2NsaWNrKVxuICAgICAgICBvbl9jbGljayhrZXl3b3JkLCBlKTtcbiAgICB9KTtcblxuICAgIGVsX3Jvdy5jbGFzc0xpc3QuYWRkKCdoaXN0b3J5Jyk7XG5cbiAgICBlbC5hcHBlbmRDaGlsZChlbF9yb3cpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3luY190b19sYWRsZSgpIHtcbiAgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpc3RvcnlfbGlzdCcpKSB8fCBbXTtcbn1cblxuZnVuY3Rpb24gc3luY190b19zdG9yZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpc3RvcnlfbGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbn1cblxuLyrmt7vliqDkuIDmnaHljoblj7LorrDlvZVcbiogQHBhcmFtIFN0cmluZyBrZXl3b3JkXG4qICovXG5mdW5jdGlvbiBhZGQoa2V5d29yZCkge1xuICBsaXN0LnB1c2goa2V5d29yZCk7XG4gIHJlbmRlcigpO1xuICBzeW5jX3RvX3N0b3JlKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShrZXl3b3JkKSB7XG4gIHZhciBzaGl0X2luZGV4ID0gbGlzdC5pbmRleE9mKGtleXdvcmQpO1xuICBpZiAoc2hpdF9pbmRleCA9PSAtMSlcbiAgICByZXR1cm47XG5cbiAgbGlzdC5zcGxpY2Uoc2hpdF9pbmRleCwgMSk7XG4gIHJlbmRlcigpO1xuICBzeW5jX3RvX3N0b3JlKCk7XG5cbn1cblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGxpc3QgPSBbXTtcbiAgcmVuZGVyKCk7XG4gIHN5bmNfdG9fc3RvcmUoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdXRwdXQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/history.js\n");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var history = __webpack_require__(/*! ../src/history */ \"./src/history.js\");\n\nhistory.init({\n  el: '#history-list',\n  on_click: function (keyword, e) {\n    console.log(keyword);\n  },\n});\n\n// history.add('a');\n// history.add('b');\n// history.remove('b');\n// history.clear();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZXN0L3Rlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3Rlc3QuanM/MzdhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGlzdG9yeSA9IHJlcXVpcmUoJy4uL3NyYy9oaXN0b3J5Jyk7XG5cbmhpc3RvcnkuaW5pdCh7XG4gIGVsOiAnI2hpc3RvcnktbGlzdCcsXG4gIG9uX2NsaWNrOiBmdW5jdGlvbiAoa2V5d29yZCwgZSkge1xuICAgIGNvbnNvbGUubG9nKGtleXdvcmQpO1xuICB9LFxufSk7XG5cbi8vIGhpc3RvcnkuYWRkKCdhJyk7XG4vLyBoaXN0b3J5LmFkZCgnYicpO1xuLy8gaGlzdG9yeS5yZW1vdmUoJ2InKTtcbi8vIGhpc3RvcnkuY2xlYXIoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./test/test.js\n");

/***/ })

/******/ });