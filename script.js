var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.strokeStyle = "#88F";

context.beginPath();
context.arc(200,200,100,Math.PI,2*Math.PI);
context.stroke();


context.strokeRect(100,200,200,190);
context.fillStyle = "#88A";
context.fillRect(120,220,60,60);
context.fillRect(220,220,60,60);
context.font="30px Arial";
context.fillText("I am Robot on Canvas",50,60);