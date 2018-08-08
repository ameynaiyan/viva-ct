var VivaCT =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/viva-ct-src.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/viva-ct-src.js":
/*!****************************!*\
  !*** ./src/viva-ct-src.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\n *\n *\tviva-ct.js\n *\n *\tVersion: 1.0.0\n *\tAuthor: Amey Naiyan\n *\tLicensed under the MIT license - http://opensource.org/licenses/MIT\n *\t\n *\tA tiny dynamic animation library\n *\n */\n\nvar VivaCT = function () {\n  function VivaCT(q) {\n    _classCallCheck(this, VivaCT);\n\n    var nodeList = document.querySelector(q);\n    this.el = nodeList.length == undefined ? [nodeList] : [].concat(_toConsumableArray(nodeList));\n    this.name = '';\n    this.events = VivaCT._browserEventCheck();\n  }\n\n  _createClass2(VivaCT, [{\n    key: '_initAnimation',\n    value: function _initAnimation(config) {\n      this.name = VivaCT._generateRandomName();\n      this._onStart(config.onStart);\n      this._onStep(config.onStep);\n      this._onEnd(config.onEnd);\n      this._createClass(config.keyframes, config.duration, config.timingFunction, config.delay, config.iterationCount, config.direction, config.playState);\n    }\n  }, {\n    key: '_createClass',\n    value: function _createClass(keyframes) {\n      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VivaCT.defaultDuration;\n      var timing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : VivaCT.defaultTimingFunction;\n      var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : VivaCT.defaultDelay;\n      var iterationCount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : VivaCT.defaultIterationCount;\n\n      var _this = this;\n\n      var direction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : VivaCT.defaultDirection;\n      var playState = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : VivaCT.defaultPlayState;\n\n      var el = document.createElement('style'),\n          sheet = void 0;\n      el.setAttribute('id', this.name);\n      el.setAttribute('type', 'text/css');\n\n      var rule = \"@keyframes \" + this.name + \" {\";\n      keyframes.map(function (prop) {\n        prop.at.map(function (v, i) {\n          if (i != 0) rule += ',';\n          rule += v + '%';\n        });\n        rule += '{';\n        prop.state.map(function (v, i) {\n          rule += v + ';';\n        });\n        rule += '} ';\n      });\n      rule += '} ';\n\n      rule += \".c-\" + this.name + \" {\";\n      rule += \"animation-name: \" + this.name + \";\";\n      rule += \"animation-duration: \" + duration + \";\";\n      rule += \"animation-timing-function: \" + timing + \";\";\n      rule += \"animation-delay: \" + delay + \";\";\n      rule += \"animation-iteration-count: \" + iterationCount + \";\";\n      rule += \"animation-direction: \" + direction + \";\";\n      rule += \"animation-play-state: \" + playState + \";\";\n      rule += \"animation-fill-mode: forwards;\";\n      rule += \"}\";\n\n      el.innerHTML = rule;\n\n      this.el.map(function (element) {\n        return element.classList.add(\"c-\" + _this.name);\n      });\n\n      document.head.appendChild(el);\n    }\n  }, {\n    key: '_clearDom',\n    value: function _clearDom() {\n      var _this2 = this;\n\n      var styleEl = document.getElementById(this.name);\n      styleEl.parentNode.removeChild(styleEl);\n      this.el.map(function (el) {\n        return el.removeEventListener(_this2.events[0], VivaCT._emptyFn, false);\n      });\n      this.el.map(function (el) {\n        return el.removeEventListener(_this2.events[1], VivaCT._emptyFn, false);\n      });\n      this.el.map(function (el) {\n        return el.removeEventListener(_this2.events[2], VivaCT._emptyFn, false);\n      });\n    }\n  }, {\n    key: '_onStart',\n    value: function _onStart() {\n      var _this3 = this;\n\n      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VivaCT._emptyFn;\n\n      this.el.map(function (el) {\n        return el.addEventListener(_this3.events[0], function (e) {\n          console.log('Animation Started...');\n          callback.call(_this3);\n        }, false);\n      });\n    }\n  }, {\n    key: '_onStep',\n    value: function _onStep() {\n      var _this4 = this;\n\n      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VivaCT._emptyFn;\n\n      this.el.map(function (el) {\n        return el.addEventListener(_this4.events[1], function (e) {\n          console.log('Animation Next Iteration...');\n          callback.call(_this4);\n        }, false);\n      });\n    }\n  }, {\n    key: '_onEnd',\n    value: function _onEnd() {\n      var _this5 = this;\n\n      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VivaCT._emptyFn;\n\n      this.el.map(function (el) {\n        return el.addEventListener(_this5.events[2], function (e) {\n          console.log('Animation Ended...');\n          _this5.el.map(function (el) {\n            return el.classList.remove(\"c-\" + _this5.name);\n          });\n          _this5._clearDom();\n          callback.call(_this5);\n        }, false);\n      });\n    }\n  }, {\n    key: 'flash',\n    value: function flash() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VivaCT.defaultConfig;\n\n      config.keyframes = [{\n        at: [0, 50, 100],\n        state: ['opacity: 1']\n      }, {\n        at: [25, 75],\n        state: ['opacity: 0']\n      }];\n      this._initAnimation(config);\n    }\n  }, {\n    key: 'rubberBand',\n    value: function rubberBand() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VivaCT.defaultConfig;\n\n      config.keyframes = [{\n        at: [0],\n        state: ['transform: scale3d(1, 1, 1)']\n      }, {\n        at: [30],\n        state: ['transform: scale3d(1.25, 0.75, 1)']\n      }, {\n        at: [40],\n        state: ['transform: scale3d(0.75, 1.25, 1)']\n      }, {\n        at: [50],\n        state: ['transform: scale3d(1.15, 0.85, 1)']\n      }, {\n        at: [65],\n        state: ['transform: scale3d(0.95, 1.05, 1)']\n      }, {\n        at: [75],\n        state: ['transform: scale3d(1.05, 0.95, 1)']\n      }, {\n        at: [100],\n        state: ['transform: scale3d(1, 1, 1)']\n      }];\n      this._initAnimation(config);\n    }\n  }, {\n    key: 'pulse',\n    value: function pulse() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VivaCT.defaultConfig;\n\n      config.keyframes = [{\n        at: [0, 100],\n        state: ['transform: scale3d(1, 1, 1)']\n      }, {\n        at: [50],\n        state: ['transform: scale3d(1.05, 1.05, 1.05)']\n      }];\n      this._initAnimation(config);\n    }\n  }, {\n    key: 'fade',\n    value: function fade() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VivaCT.defaultConfig;\n\n      switch (config.q) {\n        case VivaCT.enter:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0']\n          }, {\n            at: [100],\n            state: ['opacity: 1']\n          }];\n          break;\n        case VivaCT.enterFromTop:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0', 'transform: translate3d(0, -100%, 0)']\n          }, {\n            at: [100],\n            state: ['opacity: 1', 'transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.enterFromRight:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0', 'transform: translate3d(100%, 0, 0)']\n          }, {\n            at: [100],\n            state: ['opacity: 1', 'transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.enterFromBottom:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0', 'transform: translate3d(0, 100%, 0)']\n          }, {\n            at: [100],\n            state: ['opacity: 1', 'transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.enterFromLeft:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0', 'transform: translate3d(-100%, 0, 0)']\n          }, {\n            at: [100],\n            state: ['opacity: 1', 'transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.exit:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 1']\n          }, {\n            at: [100],\n            state: ['opacity: 0']\n          }];\n          break;\n        case VivaCT.exitToTop:\n          config.keyframes = [{\n            at: [100],\n            state: ['opacity: 0', 'transform: translate3d(0, -100%, 0)']\n          }, {\n            at: [0],\n            state: ['opacity: 1', 'transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.exitToRight:\n          config.keyframes = [{\n            at: [100],\n            state: ['opacity: 0', 'transform: translate3d(100%, 0, 0)']\n          }, {\n            at: [0],\n            state: ['opacity: 1', 'transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.exitToBottom:\n          config.keyframes = [{\n            at: [100],\n            state: ['opacity: 0', 'transform: translate3d(0, 100%, 0)']\n          }, {\n            at: [0],\n            state: ['opacity: 1', 'transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.exitToLeft:\n          config.keyframes = [{\n            at: [100],\n            state: ['opacity: 0', 'transform: translate3d(-100%, 0, 0)']\n          }, {\n            at: [0],\n            state: ['opacity: 1', 'transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        default:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0']\n          }, {\n            at: [100],\n            state: ['opacity: 1']\n          }];\n          break;\n      }\n\n      this._initAnimation(config);\n    }\n  }, {\n    key: 'bounce',\n    value: function bounce() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VivaCT.defaultConfig;\n\n      switch (config.q) {\n        case VivaCT.enterFromInside:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0;', 'transform: scale3d(0.3, 0.3, 0.3)']\n          }, {\n            at: [20],\n            state: ['transform: scale3d(1.1, 1.1, 1.1)']\n          }, {\n            at: [40],\n            state: ['transform: scale3d(0.9, 0.9, 0.9)']\n          }, {\n            at: [60],\n            state: ['opacity: 1', 'transform: scale3d(1.03, 1.03, 1.03)']\n          }, {\n            at: [80],\n            state: ['transform: scale3d(0.97, 0.97, 0.97)']\n          }, {\n            at: [100],\n            state: ['transform: scale3d(1, 1, 1)']\n          }];\n          break;\n        case VivaCT.enterFromOutside:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0;', 'transform: scale3d(2.5, 2.5, 2.5)']\n          }, {\n            at: [20],\n            state: ['transform: scale3d(0.9, 0.9, 0.9)']\n          }, {\n            at: [40],\n            state: ['transform: scale3d(1.1, 1.1, 1.1)']\n          }, {\n            at: [60],\n            state: ['opacity: 1', 'transform: scale3d(0.97, 0.97, 0.97)']\n          }, {\n            at: [80],\n            state: ['transform: scale3d(1.03, 1.03, 1.03)']\n          }, {\n            at: [100],\n            state: ['transform: scale3d(1, 1, 1)']\n          }];\n          break;\n        case VivaCT.enterFromTop:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0;', 'transform: translate3d(0, -3000px, 0)']\n          }, {\n            at: [60],\n            state: ['opacity: 1', 'transform: translate3d(0, 25px, 0)']\n          }, {\n            at: [75],\n            state: ['transform: translate3d(0, -10px, 0)']\n          }, {\n            at: [90],\n            state: ['transform: translate3d(0, 5px, 0)']\n          }, {\n            at: [100],\n            state: ['transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.enterFromRight:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0;', 'transform: translate3d(3000px, 0, 0)']\n          }, {\n            at: [60],\n            state: ['opacity: 1', 'transform: translate3d(-25px, 0, 0)']\n          }, {\n            at: [75],\n            state: ['transform: translate3d(10px, 0, 0)']\n          }, {\n            at: [90],\n            state: ['transform: translate3d(-5px, 0, 0)']\n          }, {\n            at: [100],\n            state: ['transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.enterFromBottom:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0;', 'transform: translate3d(0, 3000px, 0)']\n          }, {\n            at: [60],\n            state: ['opacity: 1', 'transform: translate3d(0, -25px, 0)']\n          }, {\n            at: [75],\n            state: ['transform: translate3d(0, 10px, 0)']\n          }, {\n            at: [90],\n            state: ['transform: translate3d(0, -5px, 0)']\n          }, {\n            at: [100],\n            state: ['transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.enterFromLeft:\n          config.keyframes = [{\n            at: [0],\n            state: ['opacity: 0;', 'transform: translate3d(-3000px, 0, 0)']\n          }, {\n            at: [60],\n            state: ['opacity: 1', 'transform: translate3d(25px, 0, 0)']\n          }, {\n            at: [75],\n            state: ['transform: translate3d(-10px, 0, 0)']\n          }, {\n            at: [90],\n            state: ['transform: translate3d(5px, 0, 0)']\n          }, {\n            at: [100],\n            state: ['transform: translate3d(0, 0, 0)']\n          }];\n          break;\n        case VivaCT.exitToInside:\n          config.keyframes = [{\n            at: [20],\n            state: ['transform: scale3d(0.9, 0.9, 0.9)']\n          }, {\n            at: [50, 55],\n            state: ['opacity: 1', 'transform: scale3d(1.1, 1.1, 1.1)']\n          }, {\n            at: [100],\n            state: ['opacity: 0', 'transform: scale3d(0.3, 0.3, 0.3)']\n          }];\n          break;\n        case VivaCT.exitToOutside:\n          config.keyframes = [{\n            at: [20],\n            state: ['transform: scale3d(1.1, 1.1, 1.1)']\n          }, {\n            at: [50, 55],\n            state: ['opacity: 1', 'transform: scale3d(0.9, 0.9, 0.9)']\n          }, {\n            at: [100],\n            state: ['opacity: 0', 'transform: scale3d(2.5, 2.5, 2.5)']\n          }];\n          break;\n        case VivaCT.exitToTop:\n          config.keyframes = [{\n            at: [20],\n            state: ['transform: translate3d(0, -10px, 0)']\n          }, {\n            at: [40, 45],\n            state: ['opacity: 1', 'transform: translate3d(0, 20px, 0)']\n          }, {\n            at: [90],\n            state: ['opacity: 0', 'transform: translate3d(0, -2000px, 0)']\n          }];\n          break;\n        case VivaCT.exitToRight:\n          config.keyframes = [{\n            at: [20],\n            state: ['opacity: 0', 'transform: translate3d(-20px, 0, 0)']\n          }, {\n            at: [100],\n            state: ['opacity: 0', 'transform: translate3d(2000px, 0, 0)']\n          }];\n          break;\n        case VivaCT.exitToBottom:\n          config.keyframes = [{\n            at: [20],\n            state: ['transform: translate3d(0, 10px, 0)']\n          }, {\n            at: [40, 45],\n            state: ['opacity: 1', 'transform: translate3d(0, -20px, 0)']\n          }, {\n            at: [90],\n            state: ['opacity: 0', 'transform: translate3d(0, 2000px, 0)']\n          }];\n          break;\n        case VivaCT.exitToLeft:\n          config.keyframes = [{\n            at: [20],\n            state: ['opacity: 0', 'transform: translate3d(20px, 0, 0)']\n          }, {\n            at: [100],\n            state: ['opacity: 0', 'transform: translate3d(-2000px, 0, 0)']\n          }];\n          break;\n        default:\n          config.keyframes = [{\n            at: [0, 20, 53, 80, 100],\n            state: ['transform: translate3d(0, 0, 0)']\n          }, {\n            at: [40, 43],\n            state: ['transform: translate3d(0, -30px, 0)']\n          }, {\n            at: [70],\n            state: ['transform: translate3d(0, -15px, 0)']\n          }, {\n            at: [90],\n            state: ['translate3d(0, -4px, 0)']\n          }];\n          break;\n      }\n\n      this._initAnimation(config);\n    }\n  }], [{\n    key: '_browserEventCheck',\n    value: function _browserEventCheck() {\n      var anims = {\n        'animation': ['animationstart', 'animationiteration', 'animationend'],\n        'webkitAnimation': ['webkitAnimationStart', 'webkitAnimationIteration', 'webkitAnimationEnd'],\n        'mozAnimation': ['mozAnimationStart', 'mozAnimationIteration', 'mozAnimationEnd'],\n        'oanimation': ['oanimationstart', 'oanimationiteration', 'oanimationend'],\n        'MSAnimation': ['animationstart', 'animationiteration', 'animationend']\n      };\n\n      var fd = document.createElement('div');\n\n      for (var a in anims) {\n        if (fd.style[a] !== undefined) {\n          return anims[a];\n        }\n      }\n      return anims['animation'];\n    }\n  }, {\n    key: '_generateRandomName',\n    value: function _generateRandomName() {\n      return 'anim-' + Math.floor(Math.random() * 1000000000);\n    }\n  }, {\n    key: '_emptyFn',\n    value: function _emptyFn() {\n      return;\n    }\n  }, {\n    key: 'vendorPrefixes',\n    get: function get() {\n      return ['-webkit-', '-moz-', '-ms-', '-o-', ''];\n    }\n  }, {\n    key: 'enter',\n    get: function get() {\n      return 'enter';\n    }\n  }, {\n    key: 'enterFromInside',\n    get: function get() {\n      return 'enter from inside';\n    }\n  }, {\n    key: 'enterFromOutside',\n    get: function get() {\n      return 'enter from outside';\n    }\n  }, {\n    key: 'enterFromTop',\n    get: function get() {\n      return 'enter from top';\n    }\n  }, {\n    key: 'enterFromRight',\n    get: function get() {\n      return 'enter from right';\n    }\n  }, {\n    key: 'enterFromBottom',\n    get: function get() {\n      return 'enter from bottom';\n    }\n  }, {\n    key: 'enterFromLeft',\n    get: function get() {\n      return 'enter from left';\n    }\n  }, {\n    key: 'exit',\n    get: function get() {\n      return 'exit';\n    }\n  }, {\n    key: 'exitToInside',\n    get: function get() {\n      return 'exit to inside';\n    }\n  }, {\n    key: 'exitToOutside',\n    get: function get() {\n      return 'exit to outside';\n    }\n  }, {\n    key: 'exitToTop',\n    get: function get() {\n      return 'exit to top';\n    }\n  }, {\n    key: 'exitToRight',\n    get: function get() {\n      return 'exit to right';\n    }\n  }, {\n    key: 'exitToBottom',\n    get: function get() {\n      return 'exit to bottom';\n    }\n  }, {\n    key: 'exitToLeft',\n    get: function get() {\n      return 'exit to left';\n    }\n  }, {\n    key: 'defaultDuration',\n    get: function get() {\n      return '1s';\n    }\n  }, {\n    key: 'defaultTimingFunction',\n    get: function get() {\n      return 'ease-out';\n    }\n  }, {\n    key: 'defaultDelay',\n    get: function get() {\n      return '0s';\n    }\n  }, {\n    key: 'defaultIterationCount',\n    get: function get() {\n      return '1';\n    }\n  }, {\n    key: 'defaultDirection',\n    get: function get() {\n      return 'normal';\n    }\n  }, {\n    key: 'defaultPlayState',\n    get: function get() {\n      return 'running';\n    }\n  }, {\n    key: 'defaultConfig',\n    get: function get() {\n      return {\n        q: null,\n        duration: VivaCT.defaultDuration,\n        timingFunction: VivaCT.defaultTimingFunction,\n        delay: VivaCT.defaultDelay,\n        iterationCount: VivaCT.iterationCount,\n        direction: VivaCT.direction,\n        keyframes: [],\n        onStart: VivaCT._emptyFn,\n        onEnd: VivaCT._emptyFn,\n        onStep: VivaCT._emptyFn\n      };\n    }\n  }]);\n\n  return VivaCT;\n}();\n\nexports.default = VivaCT;\n\n//# sourceURL=webpack://VivaCT/./src/viva-ct-src.js?");

/***/ })

/******/ })["default"];