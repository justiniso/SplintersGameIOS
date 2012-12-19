// globals
var canvas = document.getElementById('main-canvas');
var ctx = canvas.getContext('2d');
ctx.clearRect(0,0, canvas.width, canvas.height);

var loop; // the main game loop

var alpha=0;
var beta=0;
var gamma=0;
var motionDevice = false;
var touchDevice = true;
var frameModifier = 1/30;

var assetsToLoad = 0; // 1 bg image, 6 audio
var assetsLoaded = 0;


// for game controls
var keysDown = {};
var touches = {};

// game objects
var player = new Hero({
	x: canvas.width/2,
	y: canvas.height/2,
	hitRadius: 10, 
	angle: 0,
	speed: 250,
	spritePath: "assets/astronaut1.png"
});

var background = new Background({
	x: -800,
	y: -800,
	spritePath: "assets/bg2.jpg"
});

background.image = loadImage(background.spritePath);


var music = new Audio();
var loseSound = new Audio();
var winSound = new Audio();
var itemSound = new Audio();
var explodeSound = new Audio();
var explodeSound2 = new Audio();





var goals = [];
var enemies = [];
var items = [];
var decorations = [];
var allObjects = [];

var possibleCollisions = [];


// for game levels
var level = 0;
var levelLogicBefore = function() {}; // a function to execute before each level
var levelLogicLoop = function() {}; // a function to execute every time the loop is called

var settings = {
	canvasWidth: 960,
	canvasHeight: 640,
	backgroundParallaxModifier: 10,
	frameRate: 5
};






// check if device has motion
if(window.DeviceMotionEvent){
	console.log("Device motion events enabled");

	window.ondeviceorientation = function(event) {
		alpha = Math.round(event.alpha);
		beta = Math.round(event.beta);
		gamma = Math.round(event.gamma);
		
		// visual output
		//gammaCounter.innerHTML = gamma+"";
		//betaCounter.innerHTML = beta+"";
	};
	motionDevice = true;
	frameModifier = 1;

} else {
	console.log("No device motion events");
}

function loadImage(uri) {
	var image = new Image();
	image.src = uri;
	return image;
}

function loadAudio(uri) {
	var audio = new Media(uri, function(){}, function(err) {alert(err.message)});
	// audio.addEventListener('canplaythrough', assetLoaded, false);
	return audio;
}



document.addEventListener("deviceready", function() {
	console.log(assetsLoaded+" assets loaded.");
	console.log("Loading audio...");
	music = loadAudio("assets/audio/Scifi_freak_out.mp3");
	loseSound = loadAudio("assets/audio/lose.mp3");
	winSound = loadAudio("assets/audio/win.mp3");
	itemSound = loadAudio("assets/audio/item.mp3");
	explodeSound = loadAudio("assets/audio/explode.mp3");
	explodeSound2 = loadAudio("assets/audio/explode2.mp3");

	music.play();
	play();

}, false);


