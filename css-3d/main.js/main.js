/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("const steve = document.querySelector('[data-steve]');\nconst animate = document.querySelectorAll('[data-animation]');\nconst { body } = document;\nlet rotateX = 0;\nlet rotateY = 0;\nlet resetTime;\n\nconst state = {\n  rotating: 'rotating',\n  restating: 'restarting',\n  moving: 'moving',\n};\n\nconst animations = {\n  walking: 'walking',\n  waving: 'waving',\n  moving: 'moving',\n  negating: 'negating',\n  accepting: 'accepting',\n};\n\nconst onRotate = ({ movementX, movementY }) => {\n  rotateX += movementX / 6;\n  rotateY += -movementY / 6;\n\n  steve.style.transform = `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`;\n};\n\nconst initRotate = () => {\n  steve.classList.remove(state.restating);\n  clearTimeout(resetTime);\n\n  body.addEventListener('mousemove', onRotate);\n  body.classList.add(state.rotating);\n};\n\nconst stopRotate = () => {\n  body.removeEventListener('mousemove', onRotate);\n  body.classList.remove(state.rotating);\n};\n\nconst resetRotate = () => {\n  rotateX = 0;\n  rotateY = 0;\n\n  steve.classList.add(state.restating);\n  resetTime = setTimeout(() => {\n    steve.classList.remove(state.restating);\n  }, 3000);\n\n  steve.style.transform = 'rotateY(0deg) rotateX(0deg)';\n};\n\nconst initAnimation = (e) => {\n  const { animation } = e.currentTarget.dataset;\n  const toRemove = Object.values(animations);\n\n  toRemove.forEach((a) => steve.classList.remove(a));\n  animate.forEach((i) => i.classList.remove('on'));\n\n  steve.classList.add(animations[animation]);\n  e.currentTarget.classList.add('on');\n};\n\n// const onMove = ({\n//   pageX, pageY, movementX, movementY,\n// }) => {\n//   const parentWidth = body.offsetWidth / 2;\n//   const parentHeight = body.offsetHeight / 2;\n//   const posX = (pageX) - parentWidth;\n//   const posY = (pageY) - parentHeight;\n\n//   steve.style.left = `${posX}px`;\n//   steve.style.top = `${posY}px`;\n//   steve.style.transform = `\n//     rotateX(${-movementY * 2}deg) rotateY(${movementX * 2}deg)  rotateZ(${movementX}deg)\n//   `;\n// };\n\n// const initMove = () => {\n//   body.addEventListener('mousemove', onMove);\n//   body.classList.add(state.moving);\n//   steve.classList.add(state.moving);\n// };\n\n// const stopMove = () => {\n//   body.removeEventListener('mousemove', onMove);\n//   body.classList.remove(state.moving);\n//   steve.classList.remove(state.moving);\n// };\n\n// body.addEventListener('mousedown', initMove);\n// body.addEventListener('mouseup', stopMove);\n\nanimate.forEach((e) => e.addEventListener('click', initAnimation));\nbody.addEventListener('mousedown', initRotate);\nbody.addEventListener('mouseup', stopRotate);\n// body.addEventListener('mouseleave', resetRotate);\n\n\n//# sourceURL=webpack://minecraft-steve-i-css/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;