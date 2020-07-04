var objekt = new Array();
var x = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
}

function draw() {
  background(0);
  noStroke();

  if (frameCount % 1 == 0) {
    x = x + 1;
    newObjekt(x);
  }
  for (var i = 0; i <= x; i++) {
	
	fill(objekt[i].color);
    ellipse(objekt[i].x, objekt[i].currentY, objekt[i].width, objekt[i].height);
    if (objekt[i].currentY != objekt[i].y) {
      objekt[i].currentY = objekt[i].currentY + 1;
    }
	if(objekt[i].color != 255){
		objekt[i].color = objekt[i].currentY / objekt[i].y * 255;
	}
  }

  stroke(0);
  fill(255);
  //text("Anzahl der Objekte: " + x, 10, 10);
}

function newObjekt(x1) {
  var a = int(random(5, 20));
  var b = int(random(5, 20));

  objekt[x1] = {
    width: a,
    height: b,
    x: int(random(width - a)),
    y: int(random(height - b)),
    currentY: 0,
	color: 0
  }
}