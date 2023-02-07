/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _outputBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outputBlock */ \"./src/outputBlock.ts\");\n/* harmony import */ var _rangeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rangeBlock */ \"./src/rangeBlock.ts\");\n/* harmony import */ var _resetButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetButton */ \"./src/resetButton.ts\");\n\r\n\r\n\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.outputBlock = new _outputBlock__WEBPACK_IMPORTED_MODULE_0__.outputBlock();\r\n        this.rangeBlock = new _rangeBlock__WEBPACK_IMPORTED_MODULE_1__.rangeBlock();\r\n        this.resetButton = new _resetButton__WEBPACK_IMPORTED_MODULE_2__.resetButton();\r\n        this.body = document.body;\r\n    }\r\n    App.prototype.start = function () {\r\n        var appBlock = document.createElement('div');\r\n        appBlock.append(this.outputBlock.createInputsValues(), this.rangeBlock.createInputs());\r\n        this.body.append(appBlock, this.resetButton.createBtn());\r\n    };\r\n    return App;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://2-stage-interview/./src/app.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n\r\nvar app = new _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\napp.start();\r\n\n\n//# sourceURL=webpack://2-stage-interview/./src/index.ts?");

/***/ }),

/***/ "./src/inputRange.ts":
/*!***************************!*\
  !*** ./src/inputRange.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputRange\": () => (/* binding */ InputRange)\n/* harmony export */ });\nvar InputRange = /** @class */ (function () {\r\n    function InputRange() {\r\n        this.inputCounter = 0;\r\n        this.inputValue = 0;\r\n        this.inputId = (this.inputCounter += 1);\r\n    }\r\n    InputRange.prototype.consrtuctor = function () {\r\n        this.inputId;\r\n        this.inputValue;\r\n    };\r\n    InputRange.prototype.createInput = function () {\r\n        var range = document.createElement(\"input\");\r\n        range.setAttribute(\"type\", \"range\");\r\n        range.setAttribute(\"id\", \"\".concat(this.inputId));\r\n        this.inputCounter += 1;\r\n        this.inputValue = Number(range.value);\r\n        return range;\r\n    };\r\n    InputRange.prototype.createInputValues = function () {\r\n        var outputValue = document.createElement(\"div\");\r\n        outputValue.classList.add(\"output-value\");\r\n        outputValue.setAttribute(\"id\", \"\".concat(this.inputId, \"-value\"));\r\n        outputValue.innerHTML = \"Range #\".concat(this.inputId, \" is \").concat(this.inputValue);\r\n        return outputValue;\r\n    };\r\n    return InputRange;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://2-stage-interview/./src/inputRange.ts?");

/***/ }),

/***/ "./src/outputBlock.ts":
/*!****************************!*\
  !*** ./src/outputBlock.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"outputBlock\": () => (/* binding */ outputBlock)\n/* harmony export */ });\n/* harmony import */ var _inputRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputRange */ \"./src/inputRange.ts\");\n\r\nvar outputBlock = /** @class */ (function () {\r\n    function outputBlock() {\r\n        this.input = new _inputRange__WEBPACK_IMPORTED_MODULE_0__.InputRange();\r\n    }\r\n    outputBlock.prototype.createInputsValues = function () {\r\n        var outputValuesBlock = document.createElement('div');\r\n        for (var i = 0; i < 3; i += 1) {\r\n            outputValuesBlock.append(this.input.createInputValues());\r\n        }\r\n        return outputValuesBlock;\r\n    };\r\n    return outputBlock;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://2-stage-interview/./src/outputBlock.ts?");

/***/ }),

/***/ "./src/rangeBlock.ts":
/*!***************************!*\
  !*** ./src/rangeBlock.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rangeBlock\": () => (/* binding */ rangeBlock)\n/* harmony export */ });\n/* harmony import */ var _inputRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputRange */ \"./src/inputRange.ts\");\n\r\nvar rangeBlock = /** @class */ (function () {\r\n    function rangeBlock() {\r\n        this.input = new _inputRange__WEBPACK_IMPORTED_MODULE_0__.InputRange();\r\n    }\r\n    rangeBlock.prototype.createInputs = function () {\r\n        var drawRangeBlock = document.createElement(\"div\");\r\n        for (var i = 0; i < 3; i += 1) {\r\n            drawRangeBlock.append(this.input.createInput());\r\n        }\r\n        return drawRangeBlock;\r\n    };\r\n    return rangeBlock;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://2-stage-interview/./src/rangeBlock.ts?");

/***/ }),

/***/ "./src/resetButton.ts":
/*!****************************!*\
  !*** ./src/resetButton.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetButton\": () => (/* binding */ resetButton)\n/* harmony export */ });\nvar resetButton = /** @class */ (function () {\r\n    function resetButton() {\r\n    }\r\n    resetButton.prototype.createBtn = function () {\r\n        var ResetBtn = document.createElement(\"button\");\r\n        ResetBtn.innerHTML = \"Reset\";\r\n        return ResetBtn;\r\n    };\r\n    return resetButton;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://2-stage-interview/./src/resetButton.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;