// make a random circle in html5 canvas

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var centerX = width / 2;
var centerY = height / 2;

var radius = Math.floor(Math.random() * width / 2) + 50;

var angle = 0;
var angleIncrement = 2 * Math.PI / width;

setInterval(function() {
	ctx.clearRect(0, 0, width, height);

	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	ctx.fillStyle = '#000000';
	ctx.fill();
}, 10);