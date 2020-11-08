// JavaScript source code

var timer = null;
var speed;

window.onload = function () {

	document.getElementById("start").onclick = startAnime;
	document.getElementById("fontsize").onchange = animeSize;
	document.getElementById("turbo").onclick = animeSpeed;
	document.getElementById("stop").onclick = stop;
}

var index = 0;
function startAnime() {
	timer = setInterval(animate, speed);

	var start = document.getElementById("start");
    start.disabled = true;

	var stop = document.getElementById("stop");
    stop.disabled = false;

}

function animeSize() {
	let sizeChoice = document.getElementById("fontsize").value;

		if (sizeChoice === "Tiny") {
		document.getElementById("text-area").style.fontSize = "7pt";
	}
	else if (sizeChoice === "Small"){
		document.getElementById("text-area").style.fontSize = "10pt";
	}
	else if (sizeChoice === "Medium"){
		document.getElementById("text-area").style.fontSize = "15pt";
	}
	else if (sizeChoice === "Large"){
		document.getElementById("text-area").style.fontSize = "20pt";
	}
	else if (sizeChoice === "Extra Large"){
		document.getElementById("text-area").style.fontSize = "25pt";
	}
	else {
		document.getElementById("text-area").style.fontSize = "32pt";
	}
}

function animeSpeed() {

	let turboSpeed = document.getElementById("turbo").checked;

	
	if (turboSpeed) {
		speed = 50;
	}
	else {
		speed = 250;
	}
}

function animate() {
	let textxBox = document.getElementById("text-area");
	let annimeTypeValue = document.getElementById("animation").value;
	let annimeType = ANIMATIONS[annimeTypeValue].split("=====\n");

	if (annimeTypeValue != "Blank") {
		if (index < (annimeType.length - 1)) {
			
			index += 1;
		}
		else {
			index = 0;
		}
		textxBox.value = annimeType[index];
	}
}

function stop(){
	clearInterval(timer);
	index=0;

	let textxBox = document.getElementById("text-area");
	let annimeTypeValue = document.getElementById("animation").value;
	let annimeType = ANIMATIONS[annimeTypeValue].split("=====\n");
	textxBox.value =  annimeType[index];

	var stop = document.getElementById("stop");
	stop.disabled = true;
	
	var start = document.getElementById("start");
    start.disabled = false;
}

