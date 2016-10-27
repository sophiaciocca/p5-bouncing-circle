var x = 50;
var speed = 3;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);

	if (speed > 0) {
		fill(115, 60, 200);
	}
	else {
		fill(200, 250, 75);
	}

	ellipse(x, 200, 100, 100);

	if (x > 550 || x < 50) {
		speed = -speed;
	}

	x = x + speed;
}
 