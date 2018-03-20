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


