


// test implementation of the game objects

var Distance = {
	
	// square a value
	sqr: function(x) {
		return x * x;
	},

	// squared distance between 2 points
	dist2: function(vec1, vec2) {
		return this.sqr(vec1.x-vec2.x) + this.sqr(vec1.y-vec2.y);
	},

	dist: function(vec1, vec2) {
		return Math.sqrt(this.dist2(vec1, vec2));
	},

	distToLineSegment2: function(point, line1, line2) {
		// the squared length of the line
		var len2 = this.dist2(line1, line2);

		// line's endpoints are the same, i.e. 0 length
		if(len2==0) return this.dist2(point, line1);

		var dotProduct = (point.x - line1.x) * (line2.x - line1.x) + 
						 (point.y - line1.y) * (line2.y - line1.y);

		var t = dotProduct / len2;

		// point beyond line1 point
		if(t < 0) return this.dist2(point, line1);

		// point beyond line2 point
		if(t > 1) return this.dist2(point, line2);

		return this.dist2(point, {
			x: line1.x + t*(line2.x - line1.x),
			y: line1.y + t*(line2.y - line1.y)
		});

	},

	distToLineSegment: function(point, line1, line2) {
		return Math.sqrt( this.distToLineSegment2(point, line1, line2) );
	}
};

var Angle = {
	// p1 must be the "origin" point from which angle is measured
	betweenTwoPoints: function(p1, p2) {
		return Math.atan2(p2.x-p1.x, p2.y-p1.y);
	}
};


var Render = {

	circle: function(ctx, centerX, centerY, radius, startAngle, endAngle, antiClockwise) {
		startAngle = startAngle || 0;
		endAngle = endAngle || 2*Math.PI;
		antiClockwise = antiClockwise || true;

		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwise);
		ctx.closePath();
		ctx.fill();
	},

	rectangle: function() {

	},

	image: function() {

	},

	background: function(ctx, background) {
		ctx.drawImage(background.image, background.x, background.y, 1500, 1500);
	}, 

	player: function(ctx, player) {
		ctx.save();
		ctx.translate(player.x - player.image.width/2+8, player.y - player.image.height/2+15);
		ctx.rotate(player.angle);
		ctx.drawImage(player.image,  -player.image.width/2,  -player.image.height/2);
		
		ctx.restore();

		this.circle(ctx, player.x, player.y, 0.5, 0, 0, true);
	},

	goal: function(ctx, goal) {
		Lighting.createLensFlare(ctx, goal.x, goal.y, goal.hitRadius*0.5, goal.hitRadius*40);
	},

	item: function(ctx, item) {
		Lighting.createLensFlare(ctx, item.x, item.y, item.hitRadius*0.3, item.hitRadius*10)
	},

	allGoals: function(ctx, goals) {
		for(var i=0; i<goals.length; i++){
			this.goal(ctx, goals[i]);
		}
	},

	allItems: function(ctx, items) {
		for (var i=0; i<items.length; i++){
			this.item(ctx, items[i]);
		}
	},

	urchin: function(ctx, urchin) {
		var origin = urchin.vector();

		ctx.strokeStyle = 'black';
		ctx.lineWidth = 0.5;

		// draw a circle
		this.circle(ctx, origin.x, origin.y, urchin.hitRadius, 0, urchin.angle, true);

		for(var i=0; i<urchin.arms.length; i++){
			var arm = urchin.arms[i];
			var armEnd = arm.end();

			// draw a long triangle
			ctx.beginPath();
			ctx.moveTo(origin.x, origin.y);
			ctx.moveTo(origin.x+1, origin.y+1);
			ctx.lineTo(armEnd.x, armEnd.y);
			ctx.lineTo(origin.x-1, origin.y-1);
			ctx.closePath();
			ctx.fill();
			
			// fill the stroke
			ctx.stroke();
		}
	},

	allUrchins: function(ctx, urchins) {
		for(var i=0; i<urchins.length; i++) {
			this.urchin(ctx, urchins[i]);
		}
	}
};

var Lighting = {
	createLensFlare: function(ctx, x, y, startR, endR) {
		var initialFillStyle = ctx.fillStyle;
		var baseGradient = ctx.createRadialGradient(
			x, // startX
			y, // startY
			startR, // startR
			x, // endX
			y, // endY
			endR); // endR
		baseGradient.addColorStop(0.00, 'rgba(255, 255, 255, 1)');
		baseGradient.addColorStop(0.10, 'rgba(255, 251, 207, 0.6)');
		baseGradient.addColorStop(0.20, 'rgba(255, 225, 207, 0.4)');
		baseGradient.addColorStop(0.25, 'rgba(255, 207, 207, 0.3)');
		baseGradient.addColorStop(0.40, 'rgba(255, 246, 207, 0.20)');
		baseGradient.addColorStop(0.50, 'rgba(245, 255, 207, 0.15)');
		baseGradient.addColorStop(0.60, 'rgba(210, 255, 207, 0.10)');
		baseGradient.addColorStop(0.75, 'rgba(210, 255, 250, 0.08)');
		baseGradient.addColorStop(0.90, 'rgba(210, 230, 255, 0.06)');
		baseGradient.addColorStop(0.95, 'rgba(210, 210, 255, 0.05)');
		baseGradient.addColorStop(1.00, 'rgba(220, 210, 255, 0.01)');

		ctx.fillStyle = baseGradient;
		ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);

		// reset fill to original style
		ctx.fillStyle = initialFillStyle;
	}
};


// methods for handling a collision with the player
var CollisionHandler = {

	itemTouched: function(item) {
		itemSound.play();
		item.x = 10000;
		item.y = 10000;
	},

	goalTouched: function(goal) {
		winSound.play();
		alert("You win");
		lose();
	},

	urchinProximityTouched: function(player, urch) {
		if( urch.active && urch.activeRadius > 0 ){
			explodeSound.play();
			urch.activate();
		}
	},

	urchinBodyTouched: function(player, urch) {
		lose();
		loseSound.play();
	},

	urchinArmTouched: function(player, arm) {
		lose();
		loseSound.play();
	}

};

// returns true if there is a collision at the time function is called
function checkCollisions() {
	possibleCollisions = [];

	// check enemies (urchins)
	for(var i=0; i<enemies.length; i++){
		var enemy = enemies[i];
		var distToBody = Distance.dist(player.vector(), enemy.vector());

		// check if player is within radius of urchins "activating"
		if(distToBody < enemy.activeRadius){
			CollisionHandler.urchinProximityTouched(player, enemy);
		}

		// check enemies' arms
		for(var j=0; j<enemies[i].arms.length; j++){
			var arm = enemies[i].arms[j];
			var endPoints = arm.end();
			var distToArm = Distance.distToLineSegment( player.vector(), arm.origin(), arm.end() );

			if( distToArm < player.hitRadius ){
				// handle arm collision
				CollisionHandler.urchinArmTouched();
				return true;
			}

			// if player is outside outer bounding box of the arm, do not run collision detection 
			// calculations (inefficient)
			if(arm.x < (player.x-player.hitRadius) && endPoints.x < (player.x-player.hitRadius) ||
				arm.x > (player.x+player.hitRadius) && endPoints.x > (player.x+player.hitRadius) ||
				arm.y < (player.y-player.hitRadius) && endPoints.y < (player.y-player.hitRadius) ||
				arm.y > (player.y+player.hitRadius) && endPoints.y > (player.y+player.hitRadius) ) {
				continue;
			} else {

				possibleCollisions.push(enemies[i].arms[j]);

				// run collision detection against the possible collision objects
				for(var k=0; k<possibleCollisions.length; k++){

					var distToPlayer = Distance.distToLineSegment(
						player.vector(), possibleCollisions[k].origin(), possibleCollisions[k].end() );

					if( distToPlayer < player.hitRadius ){
						// handle arm collision
						CollisionHandler.urchinArmTouched();
						return true;
					}
				}
			}

		}
	}

	// check items
	for(var i=0; i<items.length; i++){
		var item = items[i];

		if (Distance.dist(player.vector(), item.vector()) < (player.hitRadius+item.hitRadius)) {
			CollisionHandler.itemTouched(item);
		}
	}


	// check goals
	for(var i=0; i<goals.length; i++){
		var goal = goals[i];

		if(Distance.dist(player.vector(), goal.vector()) < (player.hitRadius+goal.hitRadius) ){
			// handle a win
			CollisionHandler.goalTouched();
			return true;
		}
	}

	return false;
}



function step() {
	// wipe the canvas
	ctx.clearRect(0,0, canvas.width, canvas.height);

	// enemies step
	for(var i=0; i<enemies.length; i++){
		enemies[i].step();
	}

	// render the player, goals, and enemies
	Render.background(ctx, background);
	Render.player(ctx, player);
	Render.allGoals(ctx, goals);
	Render.allItems(ctx, items);
	Render.allUrchins(ctx, enemies);
}


function main() {
	var now = Date.now();
	var delta = now - then;
	var modifier = delta/1000;

	step();

	checkCollisions();

	var shiftVect = {x: 0, y: 0};


	if(motionDevice){
		var motionCorrection = 10;
		var speedCorrection = 20;

		if(player.speed/speedCorrection < 1){
			speedCorrection = 1;
		}

		// cap gamma and beta at 10
		if(gamma<-10) gamma=-10;
		else if(gamma>10) gamma=10;

		if(beta<-10) beta=-10;
		else if(beta>10) beta=10;


		if(gamma >= 0) {
			shiftVect.x = (player.speed/speedCorrection) * (-1)*(gamma/motionCorrection); 
		}

		if(gamma < 0) {
			shiftVect.x = (player.speed/speedCorrection) * (-1)*(gamma/motionCorrection);
		}

		if(beta >= 0) {
			shiftVect.y = (player.speed/speedCorrection) * (-1)*(beta/motionCorrection); 
		}

		if(beta < 0) {
			shiftVect.y = (player.speed/speedCorrection) * (-1)*(beta/motionCorrection);
		}


	}


	if(38 in keysDown) { //Up key
		shiftVect.y = player.speed * modifier;
	}
	if(40 in keysDown) { //down key
		shiftVect.y = (-1)*player.speed * modifier;
	}
	if(37 in keysDown) { //left key
		shiftVect.x = player.speed * modifier;
	}
	if(39 in keysDown) { //Up key
		shiftVect.x = (-1)*player.speed * modifier;
	}

	// shift all other objects excluding player
	for(var m=1; m<allObjects.length; m++){
		allObjects[m].shift(shiftVect.x, shiftVect.y);
	}

	// change the player's angle based on movement
	if(shiftVect.x != 0 || shiftVect.y!=0)
		player.angle = Angle.betweenTwoPoints({x: shiftVect.x, y: -shiftVect.y}, {x:0, y:0} );

	// shift background with adjusted shift
	background.shift(shiftVect.x/settings.backgroundParallaxModifier,
					shiftVect.y/settings.backgroundParallaxModifier);

	levelLogicLoop();

	then = now;
}

function play() {
	loop = setInterval(main, settings.frameRate);
}

function pause() {
	clearInterval(loop);
}

function lose() {
	clearInterval(loop);
	setTimeout(function () {
		resetLevel();
		loop = setInterval(main, settings.frameRate);
	}, 1000);
}

document.addEventListener("keydown", function(e) {
	keysDown[e.keyCode] = true;
}, false);

document.addEventListener("keyup", function(e) {
	delete keysDown[e.keyCode];
}, false);

var then = Date.now();

window.onload = function () {
	resetLevel();

	// wait for background to load
	background.image.onload = function () {
		play();
	};
};
