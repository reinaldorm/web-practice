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

/***/ "./js/lib/select.js":
/*!**************************!*\
  !*** ./js/lib/select.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Select)\n/* harmony export */ });\nclass Select {\n  constructor(select) {\n    this.select = document.querySelector(select);\n    this.elementRef = this.select.dataset.select;\n    this.element = document.querySelector(`[data-slider=\"${this.elementRef}\"]`);\n    this.selectHandler = this.selectHandler.bind(this);\n  }\n\n  selectHandler() {\n    const oldElements = document.querySelectorAll('body *');\n    oldElements.forEach((element) => {\n      if (element.className) element.classList.remove('on');\n    });\n\n    oldElements.forEach((element) => element.classList.remove('on'));\n    this.select.classList.add('on');\n    this.element.classList.add('on');\n  }\n\n  selectEvents() {\n    this.select.addEventListener('click', this.selectHandler);\n  }\n\n  init() {\n    this.selectEvents();\n    console.log(this.element);\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://slider-css-js/./js/lib/select.js?");

/***/ }),

/***/ "./js/lib/slider.js":
/*!**************************!*\
  !*** ./js/lib/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\n  constructor(slider) {\n    this.slider = document.querySelector(slider);\n    this.elements = this.slider.querySelectorAll('[data-slider=\"item\"]');\n    this.controls = this.slider.querySelectorAll('[data-control]');\n  }\n\n  static sliderTime(element) {\n    element.setAttribute('disabled', 'true');\n    setTimeout(() => element.removeAttribute('disabled'), 400);\n  }\n\n  sliderBackward() {\n    this.controls.forEach((control) => this.constructor.sliderTime(control));\n    this.elements.forEach((element) => {\n      const thisPos = +element.dataset.position;\n      const newPos = thisPos - 1 < 0 ? this.elements.length - 1 : thisPos - 1;\n      element.dataset.position = newPos;\n    });\n  }\n\n  sliderForward() {\n    this.controls.forEach((control) => this.constructor.sliderTime(control));\n    this.elements.forEach((element) => {\n      const thisPos = +element.dataset.position;\n      const newPos = thisPos + 1 > this.elements.length - 1 ? 0 : thisPos + 1;\n      element.dataset.position = newPos;\n    });\n  }\n\n  sliderBinds() {\n    this.sliderBackward = this.sliderBackward.bind(this);\n    this.sliderForward = this.sliderForward.bind(this);\n  }\n\n  sliderEvents() {\n    this.controls[0].addEventListener('click', this.sliderBackward);\n    this.controls[1].addEventListener('click', this.sliderForward);\n  }\n\n  init() {\n    this.sliderBinds();\n    this.sliderEvents();\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://slider-css-js/./js/lib/slider.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/slider */ \"./js/lib/slider.js\");\n/* harmony import */ var _lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/select */ \"./js/lib/select.js\");\n\n\n\nconst sliderHorizontal = new _lib_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-slider=\"slider-horizontal\"]');\nconst sliderVertical = new _lib_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-slider=\"slider-vertical\"]');\nconst selectHorizontal = new _lib_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-select=\"slider-horizontal\"]');\nconst selectVertical = new _lib_select__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-select=\"slider-vertical\"]');\n\nsliderHorizontal.init();\nsliderVertical.init();\nselectHorizontal.init();\nselectVertical.init();\n\n\n//# sourceURL=webpack://slider-css-js/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;