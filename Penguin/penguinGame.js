(function() {

	var canvas = document.querySelector("canvas");
	var drawingSurface = canvas.getContext("2d");
			
	var image = new Image();
	image.src = "images/penguin.png";
	image.addEventListener("load", function() {			
		drawingSurface.drawImage(image, 50, 50, 300, 300);
	}, false);
	
} ());