(function() {

	var canvas = document.querySelector("canvas");
	var drawingSurface = canvas.getContext("2d");
			
	var image = new Image();
	image.src = "images/penguin.png";
	image.addEventListener("load", function() {			
		drawingSurface.drawImage(image, 50, 50, 300, 300);
	}, false);
	
	var spriteObject = {
		x: 0,
		y: 0,
		height: 64,
		width: 64,
		sourceX: 0,
		sourceY: 0,
		sourceWidth: 64,
		sourceHeight: 64,
		vx: 0,
		vy: 0,
		friction: .98,
		acceleration: .1,
		gravity: .3,
		maxSpeed: 5
	};
	
	var penguinObject = Object.create(spriteObject);
	penguinObject.x = 0;
	penguinObject.y = 0;
	penguinObject.width = 200;
	penguinObject.height = 220;
	penguinObject.sourceX = 0;
	penguinObject.sourceY = 0;
	penguinObject.sourceWidth = 200;
	penguinObject.sourceHeight = 220;
	
	function drawSprite(sprite) {
			drawingSurface.save();
			
			drawingSurface.translate(sprite.centerX(), sprite.centerY());
			
			if (sprite.rotation !== 0) {
				drawingSurface.rotate(sprite.rotation * Math.PI / 180);
			}
			
			
			//draws the sprite
			drawingSurface.drawImage(
				image,
				sprite.sourceX, sprite.sourceY, sprite.sourceWidth, sprite.sourceHeight,
				-sprite.halfWidth(), -sprite.halfHeight(), sprite.width, sprite.height
			);
			
			
			drawingSurface.restore();	
} ());