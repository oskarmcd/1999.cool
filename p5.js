var down, xPosition, yPosition, windowWidth, windowHeight;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	frameRate(100);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	down = true;
	xPosition = 10;
	yPosition = 0;
	setInterval(drawCircle, 60);
}

function drawCircle() {
	yPosition = yPosition + 25;
	console.log(yPosition);
	ellipse(xPosition, yPosition, 80, 80);

	if (yPosition > (0.95 * windowHeight)) {
		down = false;
		xPosition += 40;
		yPosition = 0;
	}
	if (xPosition > (0.98 * windowWidth)) {
		xPosition = 10
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
