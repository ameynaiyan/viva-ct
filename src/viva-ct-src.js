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
 		this.events = VivaCT._browserEventCheck();
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
 		this.name = VivaCT._generateRandomName();
 		this._onStart(config.onStart);
 		this._onStep(config.onStep);
 		this._onEnd(config.onEnd);	
 		this._createClass(config.keyframes, config.duration, config.timingFunction, config.delay, config.iterationCount, config.direction, config.playState);
 	}

 	_createClass(keyframes, duration = VivaCT.defaultDuration, timing = VivaCT.defaultTimingFunction, delay = VivaCT.defaultDelay, iterationCount = VivaCT.defaultIterationCount, direction = VivaCT.defaultDirection, playState = VivaCT.defaultPlayState) {
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

 	_clearDom() {
 		let styleEl = document.getElementById(this.name);
 		styleEl.parentNode.removeChild(styleEl);
 		this.el.map(el => el.removeEventListener(this.events[0],VivaCT._emptyFn,false));
 		this.el.map(el => el.removeEventListener(this.events[1],VivaCT._emptyFn,false));
 		this.el.map(el => el.removeEventListener(this.events[2],VivaCT._emptyFn,false));
 	}

 	_onStart(callback = VivaCT._emptyFn) {
 		this.el.map(el => 
 			el.addEventListener(this.events[0], 
 				(e) => {
	 				console.log('Animation Started...');
	 				callback.call(this);
	 			},
	 			false
 			));
 	}

 	_onStep(callback = VivaCT._emptyFn) {
 		this.el.map(el => 
 			el.addEventListener(this.events[1], 
 				(e) => {
		 			console.log('Animation Next Iteration...');
		 			callback.call(this);
		 		},
		 		false
		 	));
 	}

 	_onEnd(callback = VivaCT._emptyFn) {
 		this.el.map(el => 
 			el.addEventListener(this.events[2], 
 				(e) => {
		 			console.log('Animation Ended...');
    				this.el.map(el => el.classList.remove("c-"+this.name));
		 			this._clearDom();
		 			callback.call(this);
		 		},
		 		false
		 	));
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
 		
 		this._initAnimation(config);
 	}
 }

 export default VivaCT;