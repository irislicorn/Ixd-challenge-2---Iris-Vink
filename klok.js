function time (){

var d = new Date();
document.getElementById("demo").innerHTML = d.toString();}


test();
function test() {
	var tijd = 3600;

	TweenLite.to(".front", tijd, {
		rotationY: -5.4*tijd,
		ease: Linear.easeNone,
	});
	
}

function addTime() {
setInterval(function() {;
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();

function checkTime(i){
	if (i < 10) {i = "0" + i};
	return i;
}

h = checkTime(h);
m = checkTime(m);
s = checkTime(s);

document.getElementById('hours').innerHTML = h;
document.getElementById('minutes').innerHTML = ":" + m;
document.getElementById('seconds').innerHTML = ":" + s;

/*var d = new Date();
document.getElementById("demo").innerHTML = d.toString();*/
}, 1)}
addTime();

function checkDayOrNight () {
	setInterval(function() {
	var d = new Date();
	var h = d.getHours();
	//var h = 20;
	if (h >= 18 || h < 6) {
		document.body.classList.add("nightback");
	}
	else if (h > 6 && h < 18) {
		document.body.classList.add("dayback");
	}
	}, 10000)
	
}
checkDayOrNight();


document.getElementById("switch").onclick = function () {
	var d = new Date();
	var h = d.getHours();
	if (h >= 18 || h < 6) {
		document.body.classList.remove("nightback");
		document.body.classList.add("dayback");
	}
	else if (h > 6 && h < 18) {
		document.body.classList.remove("dayback");
		document.body.classList.add("nightback");
	}
}



