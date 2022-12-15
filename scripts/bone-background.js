let bone;

function preload() {
	bone = loadImage('images/femur.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('black');
	imageMode(CENTER);
}

function draw() {
	background('black');

	let boneSpacing = 100;
	
	for (let boneX = 0; boneX < width; boneX += boneSpacing) {
		for (let boneY = 0; boneY < width; boneY += boneSpacing) {
			drawBone(boneX, boneY);
		}
	}
}

function drawBone(x, y) {
	image(bone, x, y);
}