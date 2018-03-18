function time ();{

var d = new Date();
document.getElementById("demo").innerHTML = d.toString();}




window.onload = function(){
 TweenLite.to("#logo", 10, {left:600}); }