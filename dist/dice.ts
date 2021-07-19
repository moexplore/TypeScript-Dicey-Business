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

/***/ "./dice.ts":
/*!*****************!*\
  !*** ./dice.ts ***!
  \*****************/
/***/ (() => {

eval("\r\nvar button = document.getElementById(\"generatedie\");\r\nvar dieContainer = document.getElementById(\"dieContainer\");\r\nvar rollButton = document.getElementById(\"rolldie\");\r\nvar sumButton = document.getElementById(\"sumdie\");\r\nvar sumContainer = document.createElement(\"div\");\r\nsumContainer.classList.add(\"sumContainer\");\r\ndocument.body.appendChild(sumContainer);\r\nvar globalarr = [];\r\nvar Die = /** @class */ (function () {\r\n    function Die() {\r\n        // let value = roll()\r\n        this.div = document.createElement(\"div\");\r\n        this.value = Math.floor(Math.random() * 6) + 1;\r\n        this.div.classList.add(\"die\");\r\n        dieContainer.appendChild(this.div);\r\n        this.roll();\r\n        this.remover();\r\n        this.update();\r\n    }\r\n    ;\r\n    Die.prototype.roll = function () {\r\n        globalarr.push(this);\r\n        this.div.append(this.value.toString());\r\n    };\r\n    ;\r\n    Die.prototype.remover = function () {\r\n        var _this = this;\r\n        this.div.addEventListener('dblclick', function () {\r\n            console.log(\"hey\");\r\n            globalarr.splice(globalarr.indexOf(_this), 1);\r\n            _this.div.remove();\r\n        });\r\n    };\r\n    ;\r\n    Die.prototype.update = function () {\r\n        var _this = this;\r\n        this.div.addEventListener(\"click\", function () {\r\n            globalarr.splice(globalarr.indexOf(_this), 1);\r\n            _this.value = Math.floor(Math.random() * 6) + 1;\r\n            _this.div.innerText = '';\r\n            _this.div.append(_this.value.toString());\r\n            globalarr.push(_this);\r\n        });\r\n    };\r\n    ;\r\n    return Die;\r\n}());\r\nbutton.addEventListener(\"click\", function () {\r\n    new Die();\r\n});\r\nsumButton.addEventListener(\"click\", function () {\r\n    sumContainer.innerText = '';\r\n    var sumDice = 0;\r\n    globalarr.forEach(function (total) {\r\n        // total = parseInt(this.value);\r\n        sumDice += total.value;\r\n    });\r\n    console.log(sumDice);\r\n    sumContainer.append(\"The sum of all the dice heretofore mentioned on this most awesome of a website is \" + sumDice);\r\n});\r\nrollButton.addEventListener(\"click\", function () {\r\n    globalarr.forEach(function (num) {\r\n        num.div.innerText = '';\r\n        num.value = Math.floor(Math.random() * 6) + 1;\r\n        num.div.append(num.value.toString());\r\n    });\r\n    console.log(globalarr);\r\n});\r\n\n\n//# sourceURL=webpack://TypeSDice/./dice.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dice.ts"]();
/******/ 	
/******/ })()
;