var ax;
var ay;
var r = 0;
var g = 0;
var b = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	stroke(r, g, b);
	x = random(width);
	y = random(width);
	line(ax, ay, x, y);
	ax = x;
	ay = y;
	r = random(255);
	g = random(255);
	b = random(255);
}