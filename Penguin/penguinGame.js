(function() {

	var canvas = document.querySelector("canvas");
	var drawingSurface = canvas.getContext("2d");
			
	var image = new Image();
	image.src = "images/penguin.png";
	image.addEventListener("load", function() {			
		update();
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
		maxSpeed: 5,
		centerX: function() { return this.x + this.width/2; },
		centerY: function() { return this.y + this.height/2;},
		halfWidth: function() { return this.width/2; },
		halfHeight: function () { return this.height/2; }
		
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
	
	var mouse= {
		x: 0,
		y: 0,
		down: false
	};
	
	canvas.addEventListener("mousemove", function(event) {
		mouse.x = event.offsetX;
		mouse.y = event.offsetY;
		
	}, false);
	
	function update() {
		window.requestAnimationFrame(update);
		
		leny = mouse.y - penguinObject.centerY();
		lenx = mouse.x - penguinObject.centerX();
		magnitude = Math.sqrt((leny * leny) + (lenx * lenx));
		dx = lenx / magnitude;
		dy = leny / magnitude;	
		
		if (magnitude > 50) {
			penguinObject.vx += dx * penguinObject.acceleration;
			penguinObject.vy += dy * penguinObject.acceleration;
		}
		
		penguinObject.vx *= penguinObject.friction;
		penguinObject.vy *= penguinObject.friction;
		
		if (penguinObject.vx > penguinObject.maxSpeed) {
			penguinObject.vx = penguinObject.maxSpeed;
		}
		if (penguinObject.vx < -penguinObject) {
			penguinObject.vx = -penguinObject.maxSpeed;
		}
		if (penguinObject.vy > penguinObject.maxSpeed) {
			penguinObject.vy = penguinObject.maxSpeed;
		}
		if (penguinObject.vy < -penguinObject) {
			penguinObject.vy = -penguinObject.maxSpeed;
		}
		penguinObject.x = penguinObject.x + penguinObject.vx;
		penguinObject.y = penguinObject.y + penguinObject.vy;
		
		
		drawingSurface.clearRect(0,0, canvas.width, canvas.height);
		
		drawSprite(penguinObject);
	}
	
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
	}
	
} ());