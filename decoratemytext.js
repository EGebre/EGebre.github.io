// JavaScript source code


/*function pageLoad(){
	var deco = document.getElementById("bigDec");
	deco.onclick = popUp;
}*/

var timer = null;

window.onload = function() {
	document.getElementById("bigDec").onclick = timerFunction;
	document.getElementById("bling").onchange = toBold;
}



/*function popUp(){
	
	window.alert("Hello, world!");
}*/

//window.onload = pageLoad;

/*window.onload = function() { 
	document.getElementById("bigDec").onclick = increaseFont;
};*/

/*function increaseFont(){
	var deco = document.getElementById("textBox");
	deco.style.fontSize += "24pt";
}*/

function timerFunction(){

    if(timer===null){
        timer = setInterval(increaseContinuous,500);
    }
    else {
        clearInterval(timer);
        timer = null;
    }
}

/*window.onload = function() { 
	document.getElementById("bigDec").onclick = function(){
		
		let obj = document.getElementById("textBox");
		let oriSize = parseInt(obj.style.fontSize);
		obj.style.fontSize = (oriSize + 10) + "pt";
	}
};*/

function increaseContinuous(){

	
	let obj = document.getElementById("textBox");
    let fontSize = parseInt(obj.style.fontSize);
    if(!fontSize)
        fontSize = 12;

	obj.style.fontSize = parseInt(fontSize) + 2 + "pt";}

window.onchange  = function() { 
	//document.getElementById("bling").onchange = toBold;
	//window.alert("Style has been changed");

};

function toBold(){
	var deco = document.getElementById("textBox");

	if (document.getElementById("bling").checked){
		deco.style.color = "green";
		deco.style.textDecoration = "underline";
	}

	else if (!(document.getElementById("bling").checked)){
		deco.style.color = "black";
		deco.style.textDecoration = "none";
	}
	
}

//popUp();