"use strict"
var hit = 1;
var missed = 1;
var clock = setTimeout(function() {miss_target()}, 4000);


function move_dot() {
	var target = document.getElementById("target");
	var top = Math.floor((Math.random() * 480) + 60);
	var left = Math.floor((Math.random() * 630) + 450);
	
	target.style.top = top + "px";
	target.style.left = left + "px";
}


function hit_target() {
	move_dot();
	document.getElementById("hit").innerHTML = "Targets hit: " + hit;
	hit++;
	clearTimeout(clock);
	timer();
}

function miss_target() {
	move_dot();
	document.getElementById("miss").innerHTML = "Targets missed: " + missed;
	missed++;
	clearTimeout(clock);
	timer(); 
}

function timer() {
	clock = setTimeout(function() {miss_target()}, 3000);
}