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
 *  Animation Keyframe data imported from Animate.css by Daniel Eden - https://github.com/daneden/animate.css
 *
 */

 class VCT {
 	constructor(q) {
 		let nodeList = document.querySelectorAll(q);
 		this.el = nodeList.length==undefined?[nodeList]:[...nodeList];
 		this.name = '';
 		this.events = VCT._browserEventCheck();
 		this.handlers = [];
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

 	static get enter() {
 		return 'enter'
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

 	static get enterFromLeftClockwise() {
 		return 'enter from left clockwise'
 	}

 	static get enterFromLeftAnticlockwise() {
 		return 'enter from left anticlockwise'
 	}

 	static get enterFromRightClockwise() {
 		return 'enter from right clockwise'
 	}

 	static get enterFromRightAnticlockwise() {
 		return 'enter from right anticlockwise'
 	}

 	static get enterAlongX() {
 		return 'enter along X'
 	}

 	static get enterAlongY() {
 		return 'enter along Y'
 	}

 	static get exit() {
 		return 'exit'
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

 	static get exitAlongX() {
 		return 'exit along X'
 	}

 	static get exitAlongY() {
 		return 'exit along Y'
 	}

 	static get exitToLeftClockwise() {
 		return 'exit to left clockwise'
 	}

 	static get exitToLeftAnticlockwise() {
 		return 'exit to left anticlockwise'
 	}

 	static get exitToRightClockwise() {
 		return 'exit to right clockwise'
 	}

 	static get exitToRightAnticlockwise() {
 		return 'exit to right anticlockwise'
 	}

 	static get defaultDuration() {
 		return '1s'
 	}

 	static get defaultTimingFunction() {
 		return 'ease-out'
 	}

 	static get defaultDelay() {
 		return '0s'
 	}

 	static get defaultIterationCount() {
 		return '1'
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
 			duration: VCT.defaultDuration,
 			timingFunction: VCT.defaultTimingFunction,
 			delay: VCT.defaultDelay,
 			iterationCount: VCT.iterationCount,
 			direction: VCT.direction,
 			keyframes: [],
 			onStart: VCT._emptyFn,
 			onEnd: VCT._emptyFn,
 			onStep: VCT._emptyFn
 		}
 	}

 	static _browserEventCheck() {
 		const anims = {
 			'animation': ['animationstart','animationiteration','animationend'],
 			'webkitAnimation': ['webkitAnimationStart','webkitAnimationIteration','webkitAnimationEnd'],
 			'mozAnimation': ['mozAnimationStart','mozAnimationIteration','mozAnimationEnd'],
 			'oanimation': ['oanimationstart','oanimationiteration','oanimationend'],
 			'MSAnimation': ['animationstart','animationiteration','animationend']
 		}

 		let fd = document.createElement('div');

 		for(let a in anims){
	        if( fd.style[a] !== undefined ){
	            return anims[a];
	        }
	    }
	    return anims['animation'];
 	}

 	static _generateRandomName() {
 		return 'anim-'+ Math.floor(Math.random() * 1000000000);
 	}

 	static _emptyFn() {
 		return;
 	}

 	_initAnimation(config){
 		this.name = VCT._generateRandomName();
 		this._onStart(config);
 		this._onStep(config);
 		this._onEnd(config);	
 		this._createClass(config.keyframes, config.duration, config.timingFunction, config.delay, config.iterationCount, config.direction, config.playState);
 	}

 	_createClass(keyframes, duration = VCT.defaultDuration, timing = VCT.defaultTimingFunction, delay = VCT.defaultDelay, iterationCount = VCT.defaultIterationCount, direction = VCT.defaultDirection, playState = VCT.defaultPlayState) {
 		let el = document.createElement('style'), sheet;
 		el.setAttribute('id',this.name);
 		el.setAttribute('type','text/css');


 		let rule = "@keyframes "+this.name+" {";
 		keyframes.map(prop => {
 			prop.at.map((v,i) => {
 				if(i!=0)
 					rule+=','
 				rule+=(v+'%');
 			});
 			rule+='{';
 			prop.state.map((v,i) => {
 				rule+=(v+';');
 			});
 			rule+='} ';
 		})
 		rule+='} ';



 		rule+= ".c-"+this.name+" {";
 		rule+="animation-name: "+this.name+";";
    	rule+="animation-duration: "+duration+";";
    	rule+="animation-timing-function: "+timing+";";
    	rule+="animation-delay: "+delay+";";
    	rule+="animation-iteration-count: "+iterationCount+";";
    	rule+="animation-direction: "+direction+";";
    	rule+="animation-play-state: "+playState+";";
    	rule+="animation-fill-mode: forwards;";
    	rule+="}";

    	el.innerHTML = rule;

    	this.el.map(element => element.classList.add("c-"+this.name));


 		document.head.appendChild(el);
 	}

 	_clearDom(e) {
 		let styleEl = document.getElementById(this.name);
 		if(styleEl)
 			styleEl.parentNode.removeChild(styleEl);
 	}

 	_onStart(config = VCT.defaultConfig) {
 		let me = this;
 		if(!config.onStart)
 			config.onStart = VCT._emptyFn;
 		this.el.map(el => 
 			el.addEventListener(me.events[0], 
 				function _handler(e) {  
	 				console.log('Animation Started...');
	 				el.removeEventListener(me.events[0],_handler);
	 				config.onStart.call(this);
	 			}
 			));
 	}

 	_onStep(config = VCT.defaultConfig) {
 		let me = this;
 		if(!config.onStep)
 			config.onStep = VCT._emptyFn;
 		this.el.map(el => 
 			el.addEventListener(me.events[1],config.onStep));
 	}

 	_onEnd(config = VCT.defaultConfig) {
 		let me = this;
 		let ev = me.events[2];
 		if(!config.onEnd)
 			config.onEnd = VCT._emptyFn;
 		this.el.map(el => 
 			el.addEventListener(me.events[2], 
 				function _handler(e) {
		 			console.log('Animation Ended...');
    				el.classList.remove("c-"+me.name);
    				el.removeEventListener(me.events[1],config.onStep);
    				el.removeEventListener(me.events[2],_handler);
		 			me._clearDom(e);
		 			config.onEnd.call(this);
		 		}
		 	));
 	}

 	flash(config = VCT.defaultConfig) {
		config.keyframes = [
			{
				at: [0,50,100],
				state: ['opacity: 1']
			},
			{
				at: [25,75],
				state:['opacity: 0']
			}
		];
 		this._initAnimation(config);
 	}

 	rubberBand(config = VCT.defaultConfig) {
		config.keyframes = [
			{
				at: [0],
				state: ['transform: scale3d(1, 1, 1)']
			},
			{
				at: [30],
				state: ['transform: scale3d(1.25, 0.75, 1)']
			},
			{
				at: [40],
				state: ['transform: scale3d(0.75, 1.25, 1)']
			},
			{
				at: [50],
				state: ['transform: scale3d(1.15, 0.85, 1)']
			},
			{
				at: [65],
				state: ['transform: scale3d(0.95, 1.05, 1)']
			},
			{
				at: [75],
				state: ['transform: scale3d(1.05, 0.95, 1)']
			},
			{
				at: [100],
				state: ['transform: scale3d(1, 1, 1)']
			}
		];
 		this._initAnimation(config);
 	}

 	shake(config = VCT.defaultConfig) {
		config.keyframes = [
			{
				at: [0,100],
				state: ['transform: translate3d(0, 0, 0)']
			},
			{
				at: [10,30,50,70,90],
				state: ['transform: translate3d(-10px, 0, 0)']
			},
			{
				at: [20,40,60,80],
				state: ['transform: translate3d(10px, 0, 0)']
			}
		];
 		this._initAnimation(config);
 	}

 	headShake(config = VCT.defaultConfig) {
		config.keyframes = [
			{
				at: [0,50],
				state: ['transform: translateX(0)']
			},
			{
				at: [6.5],
				state: ['transform: translateX(-6px) rotateY(-9deg)']
			},
			{
				at: [18.5],
				state: ['transform: translateX(5px) rotateY(7deg)']
			},
			{
				at: [31.5],
				state: ['transform: translateX(-3px) rotateY(-5deg)']
			},
			{
				at: [43.5],
				state: ['transform: translateX(2px) rotateY(3deg)']
			}
		];
 		this._initAnimation(config);
 	}

 	swing(config = VCT.defaultConfig) {
		config.keyframes = [
			{
				at: [20],
				state: ['transform: rotate3d(0, 0, 1, 15deg)']
			},
			{
				at: [40],
				state: ['transform: rotate3d(0, 0, 1, -10deg)']
			},
			{
				at: [60],
				state: ['transform: rotate3d(0, 0, 1, 5deg)']
			},
			{
				at: [80],
				state: ['transform: rotate3d(0, 0, 1, -5deg)']
			},
			{
				at: [100],
				state: ['transform: rotate3d(0, 0, 1, 0deg)']
			}
		];
 		this._initAnimation(config);
 	}

 	tada(config = VCT.defaultConfig) {
		config.keyframes = [
			{
				at: [0,100],
				state: ['transform: scale3d(1, 1, 1)']
			},
			{
				at: [10,20],
				state: ['transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)']
			},
			{
				at: [30,50,70,90],
				state: ['transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)']
			},
			{
				at: [40,60,80],
				state: ['transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)']
			}
		];
 		this._initAnimation(config);
 	}

 	wobble(config = VCT.defaultConfig) {
		config.keyframes = [
			{
				at: [0,100],
				state: ['transform: translate3d(0, 0, 0)']
			},
			{
				at: [15],
				state: ['transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)']
			},
			{
				at: [30],
				state: ['transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)']
			},
			{
				at: [45],
				state: ['transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)']
			},
			{
				at: [60],
				state: ['transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)']
			},
			{
				at: [75],
				state: ['transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)']
			}
		];
 		this._initAnimation(config);
 	}

 	jello(config = VCT.defaultConfig) {
		config.keyframes = [
			{
				at: [0,11.1,100],
				state: ['transform: translate3d(0, 0, 0)']
			},
			{
				at: [22.2],
				state: ['transform: skewX(-12.5deg) skewY(-12.5deg)']
			},
			{
				at: [33.3],
				state: ['transform: skewX(6.25deg) skewY(6.25deg)']
			},
			{
				at: [44.4],
				state: ['transform: skewX(-3.125deg) skewY(-3.125deg)']
			},
			{
				at: [55.5],
				state: ['transform: skewX(1.5625deg) skewY(1.5625deg)']
			},
			{
				at: [66.6],
				state: ['transform: skewX(-0.78125deg) skewY(-0.78125deg)']
			},
			{
				at: [77.7],
				state: ['transform: skewX(0.390625deg) skewY(0.390625deg)']
			},
			{
				at: [88.8],
				state: ['transform: skewX(-0.1953125deg) skewY(-0.1953125deg)']
			}
		];
 		this._initAnimation(config);
 	}

 	pulse(config = VCT.defaultConfig) {
		config.keyframes = [
			{
				at: [0,100],
				state: ['transform: scale3d(1, 1, 1)']
			},
			{
				at: [50],
				state:['transform: scale3d(1.05, 1.05, 1.05)']
			}
		];
 		this._initAnimation(config);
 	}

 	fade(config = VCT.defaultConfig) {
 		switch(config.q){
 			case VCT.enter: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0']
 					},
 					{
 						at: [100],
 						state:['opacity: 1']
 					}
 				]
 				break;
 			case VCT.enterFromTop: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0','transform: translate3d(0, -100%, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 1','transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromRight: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0','transform: translate3d(100%, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 1','transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromBottom:
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0','transform: translate3d(0, 100%, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 1','transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromLeft: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0','transform: translate3d(-100%, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 1','transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exit: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 1']
 					},
 					{
 						at: [100],
 						state:['opacity: 0']
 					}
 				]
 				break;
 			case VCT.exitToTop: 
 				config.keyframes = [
 					{
 						at: [100],
 						state:['opacity: 0','transform: translate3d(0, -100%, 0)']
 					},
 					{
 						at: [0],
 						state:['opacity: 1','transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToRight: 
 				config.keyframes = [
 					{
 						at: [100],
 						state:['opacity: 0','transform: translate3d(100%, 0, 0)']
 					},
 					{
 						at: [0],
 						state:['opacity: 1','transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToBottom: 
 				config.keyframes = [
 					{
 						at: [100],
 						state:['opacity: 0','transform: translate3d(0, 100%, 0)']
 					},
 					{
 						at: [0],
 						state:['opacity: 1','transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToLeft:  
 				config.keyframes = [
 					{
 						at: [100],
 						state:['opacity: 0','transform: translate3d(-100%, 0, 0)']
 					},
 					{
 						at: [0],
 						state:['opacity: 1','transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			default:
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0']
 					},
 					{
 						at: [100],
 						state:['opacity: 1']
 					}
 				]
 				break;
 		}
 		
 		this._initAnimation(config);
 	}

 	bounce(config = VCT.defaultConfig) {
 		switch(config.q){
 			case VCT.enterFromInside: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: scale3d(0.3, 0.3, 0.3)']
 					},
 					{
 						at: [20],
 						state:['transform: scale3d(1.1, 1.1, 1.1)']
 					},
 					{
 						at: [40],
 						state:['transform: scale3d(0.9, 0.9, 0.9)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1','transform: scale3d(1.03, 1.03, 1.03)']
 					},
 					{
 						at: [80],
 						state:['transform: scale3d(0.97, 0.97, 0.97)']
 					},
 					{
 						at: [100],
 						state:['transform: scale3d(1, 1, 1)']
 					}
 				]
 				break;
 			case VCT.enterFromOutside: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: scale3d(2.5, 2.5, 2.5)']
 					},
 					{
 						at: [20],
 						state:['transform: scale3d(0.9, 0.9, 0.9)']
 					},
 					{
 						at: [40],
 						state:['transform: scale3d(1.1, 1.1, 1.1)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1','transform: scale3d(0.97, 0.97, 0.97)']
 					},
 					{
 						at: [80],
 						state:['transform: scale3d(1.03, 1.03, 1.03)']
 					},
 					{
 						at: [100],
 						state:['transform: scale3d(1, 1, 1)']
 					}
 				]
 				break;
 			case VCT.enterFromTop:  
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: translate3d(0, -3000px, 0)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1','transform: translate3d(0, 25px, 0)']
 					},
 					{
 						at: [75],
 						state:['transform: translate3d(0, -10px, 0)']
 					},
 					{
 						at: [90],
 						state:['transform: translate3d(0, 5px, 0)']
 					},
 					{
 						at: [100],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromRight: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: translate3d(3000px, 0, 0)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1','transform: translate3d(-25px, 0, 0)']
 					},
 					{
 						at: [75],
 						state:['transform: translate3d(10px, 0, 0)']
 					},
 					{
 						at: [90],
 						state:['transform: translate3d(-5px, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromBottom:
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: translate3d(0, 3000px, 0)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1','transform: translate3d(0, -25px, 0)']
 					},
 					{
 						at: [75],
 						state:['transform: translate3d(0, 10px, 0)']
 					},
 					{
 						at: [90],
 						state:['transform: translate3d(0, -5px, 0)']
 					},
 					{
 						at: [100],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromLeft: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: translate3d(-3000px, 0, 0)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1','transform: translate3d(25px, 0, 0)']
 					},
 					{
 						at: [75],
 						state:['transform: translate3d(-10px, 0, 0)']
 					},
 					{
 						at: [90],
 						state:['transform: translate3d(5px, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToInside: 
 				config.keyframes = [
 					{
 						at: [20],
 						state:['transform: scale3d(0.9, 0.9, 0.9)']
 					},
 					{
 						at: [50,55],
 						state:['opacity: 1','transform: scale3d(1.1, 1.1, 1.1)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: scale3d(0.3, 0.3, 0.3)']
 					}
 				]
 				break;
 			case VCT.exitToOutside: 
 				config.keyframes = [
 					{
 						at: [20],
 						state:['transform: scale3d(1.1, 1.1, 1.1)']
 					},
 					{
 						at: [50,55],
 						state:['opacity: 1','transform: scale3d(0.9, 0.9, 0.9)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: scale3d(2.5, 2.5, 2.5)']
 					}
 				]
 				break;
 			case VCT.exitToTop: 
 				config.keyframes = [
 					{
 						at: [20],
 						state:['transform: translate3d(0, -10px, 0)']
 					},
 					{
 						at: [40,45],
 						state:['opacity: 1','transform: translate3d(0, 20px, 0)']
 					},
 					{
 						at: [90],
 						state:['opacity: 0','transform: translate3d(0, -2000px, 0)']
 					}
 				]
 				break;
 			case VCT.exitToRight: 
 				config.keyframes = [
 					{
 						at: [20],
 						state:['opacity: 0','transform: translate3d(-20px, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: translate3d(2000px, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToBottom: 
 				config.keyframes = [
 					{
 						at: [20],
 						state:['transform: translate3d(0, 10px, 0)']
 					},
 					{
 						at: [40,45],
 						state:['opacity: 1','transform: translate3d(0, -20px, 0)']
 					},
 					{
 						at: [90],
 						state:['opacity: 0','transform: translate3d(0, 2000px, 0)']
 					}
 				]
 				break;
 			case VCT.exitToLeft: 
 				config.keyframes = [
 					{
 						at: [20],
 						state:['opacity: 0','transform: translate3d(20px, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: translate3d(-2000px, 0, 0)']
 					}
 				]
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
 		
 		this._initAnimation(config);
 	}



 	zoom(config = VCT.defaultConfig) {
 		switch(config.q){
 			case VCT.enterFromInside: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: scale3d(0.3, 0.3, 0.3)']
 					},
 					{
 						at: [50],
 						state:['opacity: 1;']
 					},
 					{
 						at: [100],
 						state:['transform: scale3d(1, 1, 1)']
 					}
 				]
 				break;
 			case VCT.enterFromOutside: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: scale3d(2.5, 2.5, 2.5)']
 					},
 					{
 						at: [50],
 						state:['opacity: 1;']
 					}
 				]
 				break;
 			case VCT.enterFromTop:  
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: scale3d(0.3, 0.3, 0.3)','transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1;','transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromRight: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: scale3d(0.3, 0.3, 0.3)','transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1;','transform: scale3d(0.475, 0.475, 0.475) translate3d(-60px, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromBottom:  
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: scale3d(0.3, 0.3, 0.3)','transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1;','transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromLeft: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0;','transform: scale3d(0.3, 0.3, 0.3)','transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1;','transform: scale3d(0.475, 0.475, 0.475) translate3d(60px, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToInside: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 1']
 					},
 					{
 						at: [50],
 						state:['opacity: 0','transform: scale3d(0.3, 0.3, 0.3)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0']
 					}
 				]
 				break;
 			case VCT.exitToOutside: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 1']
 					},
 					{
 						at: [50],
 						state:['opacity: 0','transform: scale3d(2.5, 2.5, 2.5)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0']
 					}
 				]
 				break;
 			case VCT.exitToTop: 
 				config.keyframes = [
 					{
 						at: [40],
 						state:['opacity: 1','transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)','transform-origin: center bottom']
 					}
 				]
 				break;
 			case VCT.exitToRight: 
 				config.keyframes = [
 					{
 						at: [40],
 						state:['opacity: 1','transform: scale3d(0.475, 0.475, 0.475) translate3d(-42, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: scale3d(0.1, 0.1, 0.1) translate3d(2000px, 0, 0)','transform-origin: center bottom']
 					}
 				]
 				break;
 			case VCT.exitToBottom: 
 				config.keyframes = [
 					{
 						at: [40],
 						state:['opacity: 1','transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)','transform-origin: center bottom']
 					}
 				]
 				break;
 			case VCT.exitToLeft:
 				config.keyframes = [
 					{
 						at: [40],
 						state:['opacity: 1','transform: scale3d(0.475, 0.475, 0.475) translate3d(42, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: scale3d(0.1, 0.1, 0.1) translate3d(-2000px, 0, 0)','transform-origin: center bottom']
 					}
 				]
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
 		
 		this._initAnimation(config);
 	}

 	flip(config = VCT.defaultConfig) {
 		switch(config.q){
 			case VCT.enterAlongX: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0','transform: perspective(400px) rotate3d(1, 0, 0, 90deg)']
 					},
 					{
 						at: [40],
 						state:['transform: perspective(400px) rotate3d(1, 0, 0, -20deg)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1','transform: perspective(400px) rotate3d(1, 0, 0, 10deg)']
 					},
 					{
 						at: [80],
 						state:['transform: perspective(400px) rotate3d(1, 0, 0, -5deg)']
 					},
 					{
 						at: [100],
 						state:['transform: perspective(400px)']
 					}
 				]
 				break;
 			case VCT.enterAlongY: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['opacity: 0','transform: perspective(400px) rotate3d(0, 1, 0, 90deg)']
 					},
 					{
 						at: [40],
 						state:['transform: perspective(400px) rotate3d(0, 1, 0, -20deg)']
 					},
 					{
 						at: [60],
 						state:['opacity: 1','transform: perspective(400px) rotate3d(0, 1, 0, 10deg)']
 					},
 					{
 						at: [80],
 						state:['transform: perspective(400px) rotate3d(0, 1, 0, -5deg)']
 					},
 					{
 						at: [100],
 						state:['transform: perspective(400px)']
 					}
 				]
 				break;
 			case VCT.exitAlongX:  
 				config.keyframes = [
 					{
 						at: [0],
 						state:['transform: perspective(400px)']
 					},
 					{
 						at: [30],
 						state:['opacity: 1','transform: perspective(400px) rotate3d(1, 0, 0, -20deg)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: perspective(400px) rotate3d(1, 0, 0, 90deg)']
 					}
 				]
 				break;
 			case VCT.exitAlongY: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['transform: perspective(400px) rotate3d(0, 1, 0, 90deg)']
 					},
 					{
 						at: [30],
 						state:['opacity: 1','transform: perspective(400px) rotate3d(0, 1, 0, -15deg)']
 					},
 					{
 						at: [100],
 						state:['opacity: 0','transform: perspective(400px) rotate3d(0, 1, 0, 90deg)']
 					}
 				]
 				break;
 			default:
 				config.keyframes = [
 					{
 						at: [0],
 						state:['transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)']
 					},
 					{
 						at: [40],
 						state:['transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)']
 					},
 					{
 						at: [50],
 						state:['transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)']
 					},
 					{
 						at: [80],
 						state:['transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)']
 					},
 					{
 						at: [100],
 						state:['transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)']
 					}
 				]
 				break;
 		}
 		
 		this._initAnimation(config);
 	}

 	slide(config = VCT.defaultConfig) {
 		switch(config.q){
 			case VCT.enterFromTop:  
 				config.keyframes = [
 					{
 						at: [0],
 						state:['visibility: visible;','transform: translate3d(0, -100%, 0)']
 					},
 					{
 						at: [100],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromRight: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['visibility: visible;','transform: translate3d(100%, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromBottom:
 				config.keyframes = [
 					{
 						at: [0],
 						state:['visibility: visible;','transform: translate3d(0, 100%, 0)']
 					},
 					{
 						at: [100],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.enterFromLeft: 
 				config.keyframes = [
 					{
 						at: [0],
 						state:['visibility: visible;','transform: translate3d(-100%, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToTop: 
 				config.keyframes = [
 					{
 						at: [100],
 						state:['visibility: hidden;','transform: translate3d(0, -100%, 0)']
 					},
 					{
 						at: [0],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToRight: 
 				config.keyframes = [
 					{
 						at: [100],
 						state:['visibility: hidden;','transform: translate3d(100%, 0, 0)']
 					},
 					{
 						at: [0],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToBottom: 
 				config.keyframes = [
 					{
 						at: [100],
 						state:['visibility: hidden;','transform: translate3d(0, 100%, 0)']
 					},
 					{
 						at: [0],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			case VCT.exitToLeft: 
 				config.keyframes = [
 					{
 						at: [100],
 						state:['visibility: hidden;','transform: translate3d(-100%, 0, 0)']
 					},
 					{
 						at: [0],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 			default:
 				config.keyframes = [
 					{
 						at: [0],
 						state:['visibility: visible;','transform: translate3d(-100%, 0, 0)']
 					},
 					{
 						at: [100],
 						state:['transform: translate3d(0, 0, 0)']
 					}
 				]
 				break;
 		}
 		
 		this._initAnimation(config);
 	}

 	custom(config = VCT.defaultConfig) {
 		this._initAnimation(config);
 	}
 }

 export default VCT;