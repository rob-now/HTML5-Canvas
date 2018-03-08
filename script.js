var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.beginPath();
context.fillStyle = "#888";
context.fillRect(100,200,200,300);
context.arc(200,200,100,Math.PI,2*Math.PI);


context.stroke();