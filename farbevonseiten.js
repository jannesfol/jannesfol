var y = 1;
var p = 0;
var r = 0;
var g = 0;
var b = 0;
var h = 0;
var g1;
var o = 1;
var pi;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	pi = windowHeight;
}

function draw() {
	if (o == 1) {
		stroke(r, g, b);
		line(0, y, windowWidth, y)
		pi = windowHeight;
	}
	if (o == 2) {
		stroke(r, g, b);
		line(y, 0, y, windowHeight);
		pi = windowWidth;
	}
	if (o == 3) {
		stroke(r, g, b);
		line(0, windowHeight - y, windowWidth, windowHeight - y)
		pi = windowHeight;
	}
	if (o == 4) {
		stroke(r, g, b);
		line(windowWidth - y, 0, windowWidth - y, windowHeight);
		pi = windowWidth;
	}
	g1 = 256 / pi;
	y = y + 1;
	p = g1 * 3;
	h = random(0, 3);
	//h steht für Auswahl

	if (h <= 1) {
		r = r + p;
	}

	if (h > 1 && h < 2) {
		g = g + p;
	}

	if (h > 2 && h < 3) {
		b = b + p;
	}
	//p steht für plus


	if (y == pi) {
		r = 0;
		g = 0;
		b = 0;
		y = 0;
		background(0);
		o = o + 1;
	}
	if (0 == 5) {
		o = 1;
	}
}