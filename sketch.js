function setup() {
	createCanvas(600,600); // make an HTML canvas element width x height pixels
}

function draw() {

	background(180);
	noStroke();

	translate(width/2, height/2);

	var radius = 75.0;
	var numPoints = 60;
	var angle = TWO_PI/numPoints;

var secondsRadius = radius * 0.9;

var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
let m = map(minute(), 0, 60, 0, 60);
var h = map(hour(), 0, 60, 0, 60);


fill(0);
circle(0, 0, 240);

var f;
var l;

if (h*10 >= m*4) {
	f = 150;
	l = 255;
}

if (h*10 < m*4) {
	f = 255;
	l = 100;

}

fill(255, 0, 0, f);
circle(0, 0, h*10);

fill(0, 200, 200, l);
circle(0, 0, m*4);

fill(255, 204, 0);
translate(cos(s) * secondsRadius * 3.14, sin(s) * secondsRadius * 3.14);
circle(0, 0, 40);





	if (second() == 0) {
		console.log('the value of minute is: ' + minute());
	}
}
