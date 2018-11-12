var t = 0;
var t1 = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
background(0);
}

function draw() {
  t = t + 0.021;
  t1 = t1 + 0.019
  var x = noise(t) * windowWidth;
  var y = noise(t1) * windowHeight;
  var r = noise(t + 10) * 255;
  var g = noise(t + 5)  * 255;
  var b = noise(t + 15) * 255;
  fill(r,g,b);
  ellipse(x,y,y / 2);
}