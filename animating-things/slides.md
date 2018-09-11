
![cover](./cover.gif)
## Animating Things like a pro
### GT Webdev 
#### 9/4/18

---

### What kinda stuff can you animate?

- DOM nodes (HTML Elements)
- SVG graphics
- Canvas
- WebGL

---

### What kinda stuff does a pro animate?

- DOM Elements **where it makes sense**
- SVGs for advanced animations

---

### Styling HTML Elements (CSS animations)

- inline styles

```html
<div id="some-div" style="background-color:blue">
    Fun
</div>
```

<div id="some-div" style="background-color:blue">
    Fun
</div>

---V

- class styles

```html
<div class="some-div" style="">
    Fun
</div>
<div class="some-div" style="">
    Fun
</div>
<div class="some-div" style="">
    Fun
</div>
<style>
	.some-div {
		background-color: blue;
	}
</style>
```

<div class="some-div-1">
    Fun
</div>
<div class="some-div-1">
    Fun
</div>
<div class="some-div-1">
    Fun
</div>

<style>
	.some-div-1 {
		background-color: blue;
	}
</style>

---V

- more styles

```html
<div class="some-div" style="">
    Fun
</div>
<div class="some-div" style="">
    Fun
</div>
<div class="some-div" style="">
    Fun
</div>
<style>
	.some-div {
		background-color: blue;
		transform: rotateZ(130deg)
	}
</style>
```

<div class="some-div-2">
    Fun
</div>
<div class="some-div-2">
    Fun
</div>
<div class="some-div-2">
    Fun
</div>

<style>
	.some-div-2 {
		background-color: blue;
		transform: rotateZ(130deg)	}
</style>

---

### CSS Animations

- built-in Pseudo classes you can style
	```css
	.myclass:hover {...}
	.myclass:action {...}
	.myclass:focus {...}
	```
- can interpolate between values 👌

	[MDN Docs on Pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

---

### `.some-div:hover {...}`

```
<div class="some-div" style="">
    Fun
</div>

<style>
	.some-div {
		background-color: blue;
	}
	.some-div:hover {
		background-color: red;
	}
</style>
```
<div class="some-div" style="">
    Fun
</div>

<style>
	.some-div {
		background-color: blue;
	}
	.some-div:hover {
		background-color: red;
	}
</style>

---V

### `.some-div:hover {...} + transition: all .5s`

```
<div class="some-div" style="">
    Fun
</div>

<style>
	.some-div {
		background-color: blue;
		transition: all .5s;
	}
	.some-div:hover {
		background-color: red;
	}
</style>
```
<div class="some-div2">
    Fun
</div>

<style>
	.some-div2 {
		background-color: blue;
		transition: all .5s;
	}
	.some-div2:hover {
		background-color: red;
	}
</style>

---

## CSS Animations - advanced

### [CSS animations gone too far](https://webdesign.tutsplus.com/articles/15-inspiring-examples-of-css-animation-on-codepen--cms-23937)

---

### Stuff that's possible...

- manually editing inline styles

```html
<div id="myEl" style="background-color:#3a3a3a">
    Fun
</div>

<script>
setInterval(
	()=>
		document.getElementById('myEl').style.cssText = 
			'background-color: #'
			+ Math.round(
				Math.random()*Math.pow(6,6)
				).toString(16)
	,300)
</script>
```

<div id="myEl" style="background-color:blue">
    Fun
</div>
<img src='sdfsdf' style="display:none" onerror="
setInterval(()=>
        document.getElementById('myEl').style.cssText = 'background-color: #'+ Math.round(Math.random()*Math.pow(16,3)).toString(16)
        ,300)
"/>

---

## Pros let Pros style for them

- use UI libraries
	1. they've done the research
	2. they already did it for you
	3. they already did it for you

[Vuetify](https://vuetifyjs.com/en/motion/transitions)

---

## CSS Animations vs SVG animations

### CSS
- good for UI elements
- Transitions

### SVG
- advanced graphics
- Graphic animations

---

## Advanced SVG animation with lottie

- Plug and play advanced animations
- airBnB
- exported from Adobe AfterEffects


[lottiefiles.com](https://www.lottiefiles.com/)

![lottie.gif](lottie.gif)


---

## Lets add them to a portfolio

