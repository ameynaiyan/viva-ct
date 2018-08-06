/*
 *
 *	viva-ct.js
 *
 *	Version: 1.0.0
 *	Author: Amey Naiyan
 *	Licensed under the MIT license - http://opensource.org/licenses/MIT
 *	
 *	A tiny dynamic animation library
 *
 */

 class VivaCT {
 	constructor(q) {
 		let nodeList = document.querySelector(q);
 		this.el = nodeList.length==undefined?[nodeList]:[...nodeList];
 		this.name = '';
 		this.currentIteration = 0;
 	}

 	static get vendorPrefixes() {
 		return [
 			'-webkit-',
 			'-moz-',
 			'-ms-',
 			'-o-',
 			''
 		]
 	}

 	static get animationStart() {
 		return 'webkitAnimationStart mozAnimationStart MSAnimationStart oanimationstart animationstart'
 	}

 	static get animationEnd() {
 		return 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
 	}

 	static get animationIteration() {
 		return 'webkitAnimationIteration mozAnimationIteration MSAnimationIteration oanimationiteration animationiteration'
 	}

 	static get enterFromInside() {
 		return 'enter from inside'
 	}

 	static get enterFromOutside() {
 		return 'enter from outside'
 	}

 	static get enterFromTop() {
 		return 'enter from top'
 	}

 	static get enterFromRight() {
 		return 'enter from right'
 	}

 	static get enterFromBottom() {
 		return 'enter from bottom'
 	}

 	static get enterFromLeft() {
 		return 'enter from left'
 	}

 	static get exitToInside() {
 		return 'exit to inside'
 	}

 	static get exitToOutside() {
 		return 'exit to outside'
 	}

 	static get exitToTop() {
 		return 'exit to top'
 	}

 	static get exitToRight() {
 		return 'exit to right'
 	}

 	static get exitToBottom() {
 		return 'exit to bottom'
 	}

 	static get exitToLeft() {
 		return 'exit to left'
 	}

 	static get defaultDuration() {
 		return '0.75s'
 	}

 	static get defaultTimingFunction() {
 		return 'linear'
 	}

 	static get defaultDelay() {
 		return '0s'
 	}

 	static get defaultIterationCount() {
 		return 1
 	}

 	static get defaultDirection() {
 		return 'normal'
 	}

 	static get defaultPlayState() {
 		return 'running'
 	}

 	static get defaultConfig() {
 		return {
 			q: null,
 			duration: VivaCT.defaultDuration,
 			timingFunction: VivaCT.defaultTimingFunction,
 			delay: VivaCT.defaultDelay,
 			iterationCount: VivaCT.iterationCount,
 			direction: VivaCT.direction,
 			keyframes: [],
 			onStart: VivaCT._emptyFn,
 			onEnd: VivaCT._emptyFn,
 			onStep: VivaCT._emptyFn
 		}
 	}


 	static _generateRandomName() {
 		return 'anim-'+ Math.floor(Math.random() * 1000000000);
 	}

 	static _emptyFn() {
 		return;
 	}

 	static _initAnimation(config){
 		this.name = VivaCT._generateRandomName();
 		this._createKeyframes(config.keyframes);
 		this._createClass(config.duration, config.timingFunction, config.delay, config.iterationCount, config.direction, config.playState)
 		this._onStart(config.onStart);
 		this._onStep(config.onStep);
 		this._onEnd(config.onEnd);
 	}

 	_createKeyframes(keyframes) {
 		
 	}

 	_createClass(duration = VivaCT.defaultDuration, timing = VivaCT.defaultTimingFunction, delay = VivaCT.defaultDelay, iterationCount = VivaCT.defaultIterationCount, direction = VivaCT.defaultDirection, playState = VivaCT.defaultPlayState) {
 		
 	}

 	_clearDom() {

 	}

 	_onStart(callback = VivaCT._emptyFn) {
 		this.el.map(el => el.addEventListener(VivaCT.animationStart, () => {
 			callback.call(this);
 		}).bind(this));
 	}

 	_onEnd(callback = VivaCT._emptyFn) {
 		this.el.map(el => el.addEventListener(VivaCT.animationEnd, () => {
 			callback.call(this);
 		}).bind(this));
 	}

 	_onStep(callback = VivaCT._emptyFn) {
 		this.el.map(el => el.addEventListener(VivaCT.animationIteration, () => {
 			this._clearDom();
 			callback.call(this);
 		}).bind(this));
 	}

 	bounce(config = VivaCT.defaultConfig) {
 		switch(config.q){
 			case VivaCT.enterFromInside: 
 				break;
 			case VivaCT.enterFromOutside: 
 				break;
 			case VivaCT.enterFromTop: 
 				break;
 			case VivaCT.enterFromRight: 
 				break;
 			case VivaCT.enterFromBottom: 
 				break;
 			case VivaCT.enterFromLeft: 
 				break;
 			case VivaCT.exitToInside: 
 				break;
 			case VivaCT.exitToOutside: 
 				break;
 			case VivaCT.exitToTop: 
 				break;
 			case VivaCT.exitToRight: 
 				break;
 			case VivaCT.exitToBottom: 
 				break;
 			case VivaCT.exitToLeft: 
 				break;
 			default:
 				config.keyframes = [
 					{
 						at: [0,20,53,80,100],
 						state:['transform: translate3d(0, 0, 0)']
 					},
 					{
 						at: [40,43],
 						state:['transform: translate3d(0, -30px, 0)']
 					},
 					{
 						at: [70],
 						state:['transform: translate3d(0, -15px, 0)']
 					},
 					{
 						at: [90],
 						state:['translate3d(0, -4px, 0)']
 					}
 				]
 				break;
 		}
 		
 		VivaCT._initAnimation(config);
 	}
 }