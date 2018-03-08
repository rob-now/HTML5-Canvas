var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.fillStyle = "#888"; // Outlines and text color
// Text on top
context.font = "30px Arial";
context.fillText("I am Robot on Canvas", 50, 45);

// Drawing a cap (half circle)
context.fillStyle = "#AEA";
context.beginPath();
context.arc(200, 200, 100, Math.PI, 2 * Math.PI);
context.fill();
// Drawing pompom
context.beginPath();
context.arc(200, 100, 30, 0, 2 * Math.PI);
context.fill();

// Drawing face
context.strokeRect(100, 200, 200, 190);

context.fillStyle = "#CCC"; // Eyes color
// Drawing left eye
context.fillRect(120, 220, 60, 60);
// Drawing right eye
context.fillRect(220, 220, 60, 60);
// Drawing left and right inner eyes
context.fillStyle = "#44F"; // Inner eyes color
context.beginPath();
context.arc(160, 245, 15, 0, 2 * Math.PI);
context.arc(260, 245, 15, 0, 2 * Math.PI);
context.fill();

// Drawing nose (middle part)
context.fillStyle = "#F44"; // Nose color
context.fillRect(190, 260, 20, 60);
// Upper part of nose (half circle)
context.beginPath();
context.arc(200, 260, 10, Math.PI, 2 * Math.PI);
context.fill();
// Lower part of nose (two circles)
context.beginPath();
context.arc(190, 310, 10, 0, 2 * Math.PI);
context.arc(210, 310, 10, 0, 2 * Math.PI);
context.fill();

// Drawing mouth
context.fillStyle = "#44F"; // Nose color
context.beginPath();
context.arc(190, 285, 85, 0.4, 2.2);
context.fill();