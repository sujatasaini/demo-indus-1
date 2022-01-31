//1. initializing variable and conditions
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var mouse = false;
ctx.lineJoin = "round";
ctx.lineCap = "round";
var positionX, positionY;

//Element retrieval 
var reset = document.getElementById("reset"); //reset
var saveLink = document.getElementById("saveLink"); //saveLink element 

//Set initial color conditions 
//var myColor = color.value;
//ctx.strokeStyle = myColor;



function resetClick() {
	window.location.reload();
}

//7. Making the save button work 
function saveClick() {
	var data = canvas.toDataURL(); //encodes image information into a base 64 format
	console.log(data);
	saveLink.href = data;
	saveLink.download = "SujataProject.png"; // Change to get option for Jpeg/Png/SVG
}

//Event Listeners for tools 
reset.addEventListener("click", resetClick); //Reset click event 
saveLink.addEventListener("click", saveClick); //Save click event 

