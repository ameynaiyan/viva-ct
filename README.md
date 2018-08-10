# vivaCT
--------
[1]: <https://github.com/ameynaiyan/viva-ct>

Version 1.0.0

vivaCT is a tiny dynamic animation library built for easy generation of animation on webpages.

The ready to use animation data was imported from Animate.css library by Daniel Eden - https://daneden.github.io/animate.css/


### Installation

Include dist/viva-ct.js or dist/viva-ct.min.js as part of your application


### Creating a new Object

```javascript
let obj = new VCT('#obj');
```


### Config

A sample config object is given below. It is not mandatory to include all properties .

```javascript
{
	q: 'enter from left',			// default = null
	duration: '1s',				// default = '1s'
	timingFunction: 'ease-in-out',	        // default = 'ease-out'
	delay: '0s',				// default = '0s'
	iterationCount: 3,			// default = '1'
	direction: 'normal',			// default = 'normal'
	keyframes: [],			        // default = '[]' - Refer to Custom Animations
	onStart: function() {},			// Callback function to be triggered at the start of an animation
	onEnd: function() {},			// Callback function to be triggered at the start of each iteration, except first
	onStep: function() {}			// Callback function to be triggered at the end of an animation
}
```


### Methods

Name | q
---- | -----
flash | 
rubberBand | 
shake | 
headShake | 
swing | 
tada | 
wobble |
jello | 
pulse | 
fade | 'enter' / 'enter from top' / 'enter from right' / 'enter from bottom' / 'enter from left' / 'exit' / 'exit to top' / 'exit to right' / 'exit to bottom' / 'exit to left'
bounce | 'enter from inside' / 'enter from outside' / 'enter from top' / 'enter from right' / 'enter from bottom' / 'enter from left' / 'exit to inside' / 'exit to outside' / 'exit to top' / 'exit to right' / 'exit to bottom' / 'exit to left'
zoom | 'enter from inside' / 'enter from outside' / 'enter from top' / 'enter from right' / 'enter from bottom' / 'enter from left' / 'exit to inside' / 'exit to outside' / 'exit to top' / 'exit to right' / 'exit to bottom' / 'exit to left'
flip | 'enter along X' / 'enter along Y' / 'exit along X' / 'exit along Y'
slide | 'enter from top' / 'enter from right' / 'enter from bottom' / 'enter from left' / 'exit to top' / 'exit to right' / 'exit to bottom' / 'exit to left'
custom | 


### Custom Animations

The keyframes array of the config object is used to define custom animations.

Property | Value | Example
-------- | ----- | -------
at | A set of integers indicating the percentage position along the timeline of an animation | '[0,22.5,35,84]'
state | A set of css properties representing the state of the animated object at the spectified time | ['opacity:0.5', 'transform: translate3d(-100%, 0, 0)']


### Example Usage

```javascript
let obj = new VCT('#obj');

obj.fade({
	q: 'enter from left',
	duration: '1s',	
	timingFunction: 'ease-in-out'
});

obj.jello();

obj.pulse({
  	iterationCount: 5,
	onStep: function(){
		console.log('pulse!')
	}
});

obj.custom({
	keyframes:[
		{
			at: [20,80],
			state:['transform: translate3d(-100%, 0, 0)']
		},
		{
			at: [0,50,100],
			state:['transform: translate3d(0, 0, 0)']
		}
	]
});
```