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

 	onStart(callback) {
 		this.el.map(el => el.addEventListener(VivaCT.animationStart, callback));
 	}

 	onEnd(callback) {
 		this.el.map(el => el.addEventListener(VivaCT.animationEnd, callback));
 	}

 	onStep(callback) {
 		this.el.map(el => el.addEventListener(VivaCT.animationIteration, callback));
 	}

 	bounce(query, config) {
 		switch(query){
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
 				break;
 		}
 	}
 }