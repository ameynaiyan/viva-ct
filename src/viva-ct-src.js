/*
 *
 *	viva-ct.js
 *
 *	Version: 1.0.0
 *	Author: Amey Naiyan
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

 	onStart(callback) {
 		this.el.addEventListener(VivaCT.animationStart, callback);
 	}

 	onEnd(callback) {
 		this.el.addEventListener(VivaCT.animationEnd, callback);
 	}

 	onStep(callback) {
 		this.el.addEventListener(VivaCT.animationIteration, callback);
 	}
 }