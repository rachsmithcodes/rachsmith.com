---
title: An easing rule of thumb
slug: an-easing-rule
added: 2024-05-29 20:05
updated:  2024-05-29 20:05
tags: [development]
excerpt: Some suggestions for which ease to use when.
note: published
publish: true
---

If you're moving an object from out of the frame/stage in to the frame/stage, use an ease-out variation.

<div class="box">
<div class="object object1"></div>
</div>

If you're moving an object from inside the frame to outside the frame, use an ease-in variation.

<div class="box">
<div class="object object2"></div>
</div>

If you're moving an object from one place to another in the frame, use an ease-in-out variation

<div class="box">
<div class="object object3"></div>
</div>

Of course, there are exceptions, but this helps with keeping animations from looking weird or "not right".

<style>
	.box {
		width: 200px;
		height: 200px;
		position: relative;
		margin: auto;
		border: 2px solid black;
		overflow: hidden;
	}

	.object {
		width: 40px;
		height: 40px;
		top: 80px;
		position: absolute;
		background: #6858a3;
	}
	
	@keyframes object1 {
		0% { transform: translate(0px, 0px) }
		20% { transform: translate(0px, 0px) }
		80% { transform: translate(125px, 0px) }
		100% { transform: translate(125px, 0px) }
	}

	.object1 {
		left: -45px;
		animation: object1 2.6s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
	}

	@keyframes object2 {
		0% { transform: translate(0px, 0px) }
		20% { transform: translate(0px, 0px) }
		80% { transform: translate(125px, 0px) }
		100% { transform: translate(125px, 0px) }
	}

	.object2 {
		left: 80px;
		animation: object2 2.6s cubic-bezier(0.47, 0, 0.745, 0.715) infinite;
	}

	@keyframes object3 {
		0% { transform: translate(0px, 0px) }
		10% { transform: translate(0px, 0px) }
		50% { transform: translate(140px, 0px) }
		60% { transform: translate(140px, 0px) }
		100% { transform: translate(0px, 0px) }
	}

	.object3 {
		left: 10px;
		animation: object3 4s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
	}
	
</style>