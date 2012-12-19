function resetLevel() {
	level = 0;
	if(level==0){

		// instances for level 1

		goals = [
			new GameObject({
				x: -1000,
				y: 200,
				hitRadius: 15,
				angle: 0
			})
		];

		items = [
			new Item({ x: 400, y: 200, hitRadius: 10 }),
			new Item({ x: 500, y: 0, hitRadius: 11 }),
			new Item({ x: 600, y: -200, hitRadius: 7 }),
			new Item({ x: 700, y: -500, hitRadius: 9 }),
			new Item({ x: 550, y: -600, hitRadius: 8 }),
			new Item({ x: 400, y: -800, hitRadius: 7 }),
			new Item({ x: 200, y: -900, hitRadius: 5 }),
			new Item({ x: 0, y: -950, hitRadius: 5 }),
			new Item({ x: -200, y: -900, hitRadius: 5 }),
			new Item({ x: -400, y: -850, hitRadius: 5 }),
			new Item({ x: -600, y: -800, hitRadius: 10 }),
			new Item({ x: -850, y: -500, hitRadius: 10 }),
			new Item({ x: -900, y: -200, hitRadius: 5 }),
		];

		enemies = [
			// Urchin A
			new Urchin({
				x:-1200, y: -1500,
				arms: [
					new Arm({angle: 0, length: 500}),
					new Arm({angle: -1.78, length: 1431}),
					new Arm({angle: -2.11, length: 583}),
					new Arm({angle: -2.82, length: 316}),
					new Arm({angle: 2.99, length: 1414}),
					new Arm({angle: 2.35, length: 282}),
			]}),

			// Urchin C
			new Urchin({
				x: 1000, y: 300,
				arms: [
					new Arm({angle: 1.03, length: 200}),
					new Arm({angle: 2.40, length: 50}),
					new Arm({angle: 2.55, length: 100}),
					new Arm({angle: 5.10, length: 400}),
					new Arm({angle: 5.44, length: 100}),
			]}),

			// Urchin F
			new Urchin({
				x: -1200, y: 1200,
				arms: [
					new Arm({angle: 0, length: 500}),
					new Arm({angle: 1.57, length: 400}),
					new Arm({angle: 2.10, length: 900}),
					new Arm({angle: 4.50, length: 400}),
					new Arm({angle: 5.24, length: 1000}),
					new Arm({angle: 5.83, length: 400}),
			]}),

			// Urchin G
			new Urchin({
				x: 100, y: -400,
				rotateSpeed: -0.01 * frameModifier,
				growSpeed: 0.5 * frameModifier,
				arms: [
					new Arm({angle: 0.53, length: 150}),
					new Arm({angle: 2.90, length: 550}),
					new Arm({angle: 4.50, length: 350}),
					new Arm({angle: 5.50, length: 250}),
			]}),


			// Urchin A1
			new Urchin({
				x: 800, y: -200,
				rotateSpeed: -0.005 * frameModifier,
				growSpeed: 1.0 * frameModifier,
				arms: [
					new Arm({angle: 0.54, length: 150}),
					new Arm({angle: 0.78, length: 350}),
					new Arm({angle: 4.81, length: 150}),
					new Arm({angle: 4.98, length: 250}),
					new Arm({angle: 4.55, length: 250}),
			]}),

			// Urchin A2 explodes
			new Urchin({
				x: 600, y: -800,
				growSpeed: 0.05 * frameModifier,
				activeRadius: 200, explodeByLength: 200,
				arms: [
					new Arm({angle: 0.66, length: 90}),
					new Arm({angle: 0.78, length: 75}),
					new Arm({angle: 1.50, length: 80}),
					new Arm({angle: 2.40, length: 80}),
					new Arm({angle: 3.66, length: 20}),
					new Arm({angle: 3.77, length: 60}),
			]}),

			// Urchin A3
			new Urchin({
				x: 100, y: 400,
				growSpeed: 1.4 * frameModifier,
				arms: [
					new Arm({angle: 0.88, length: 20}),
					new Arm({angle: 0.98, length: 35}),
					new Arm({angle: 1.66, length: 40}),
					new Arm({angle: 1.87, length: 10}),
					new Arm({angle: 4.55, length: 15}),
					new Arm({angle: 4.88, length: 20}),
					new Arm({angle: 5.88, length: 30}),
			]}),

			// Urchin A4
			new Urchin({
				x: 200, y: 100,
				growSpeed: 1 * frameModifier,
				arms: [
					new Arm({angle: 0.3, length: 20}),
					new Arm({angle: 0.7, length: 35}),
					new Arm({angle: 1.3, length: 20}),
					new Arm({angle: 1.5, length: 40}),
					new Arm({angle: 3.5, length: 25}),
					new Arm({angle: 3.6, length: 20}),
					new Arm({angle: 4.8, length: 40}),
			]}),

			// Urchin A5
			new Urchin({
				x: 400, y: -1100,
				growSpeed: 1 * frameModifier,
				arms: [
					new Arm({angle: 0.4, length: 20}),
					new Arm({angle: 0.7, length: 200}), // boundary
					new Arm({angle: 0.75, length: 20}),
					new Arm({angle: 0.8, length: 40}),
					new Arm({angle: 3.5, length: 25}),
					new Arm({angle: 3.6, length: 300}), // boundary
					new Arm({angle: 4.18, length: 40}),
			]}),

			// Urchin A6
			new Urchin({
				x: 0, y: -900,
				rotateSpeed: 0.01 * frameModifier,
				growSpeed: 0.05 * frameModifier,
				arms: [
					new Arm({angle: 1.03, length: 20}),
					new Arm({angle: 1.63, length: 20}),
					new Arm({angle: 2.65, length: 40}),
					new Arm({angle: 3.65, length: 25}),
					new Arm({angle: 5.24, length: 50}),
			]}),

			// Urchin A7
			new Urchin({
				x: -600, y: -600,
				growSpeed: 0.8 * frameModifier,
				arms: [
					new Arm({angle: 0.4, length: 20}),
					new Arm({angle: 0.6, length: 35}),
					new Arm({angle: 1.1, length: 20}),
					new Arm({angle: 1.2, length: 40}),
					new Arm({angle: 3.7, length: 25}),
					new Arm({angle: 4.1, length: 20}),
					new Arm({angle: 4.2, length: 40}),
			]}),

			// Urchin A8
			new Urchin({
				x: -600, y: -300,
				growSpeed: 0.05 * frameModifier,
				arms: [
					new Arm({angle: 1.0, length: 20}),
					new Arm({angle: 1.05, length: 35}),
					new Arm({angle: 1.3, length: 20}),
					new Arm({angle: 1.35, length: 40}),
					new Arm({angle: 4.44, length: 25}),
					new Arm({angle: 4.45, length: 20}),
					new Arm({angle: 4.49, length: 10}),
			]}),

			// Urchin A9
			new Urchin({
				x: -1100, y: -200,
				growSpeed: 0.1 * frameModifier,
				arms: [
					new Arm({angle: 1.03, length: 20}),
					new Arm({angle: 1.63, length: 20}),
					new Arm({angle: 2.65, length: 40}),
					new Arm({angle: 3.65, length: 25}),
					new Arm({angle: 5.24, length: 50}),
			]}),

			// Urchin A10
			new Urchin({
				x: 900, y: -300,
				growSpeed: 1.6 * frameModifier,
				arms: [
					new Arm({angle: 1.03, length: 20}),
					new Arm({angle: 1.63, length: 20}),
					new Arm({angle: 2.65, length: 40}),
					new Arm({angle: 3.65, length: 25}),
					new Arm({angle: 5.24, length: 50}),
			]}),

			// Urchin A11
			new Urchin({
				x: 900, y: 400,
				growSpeed: 0.4 * frameModifier,
				arms: [
					new Arm({angle: 1.03, length: 20}),
					new Arm({angle: 1.63, length: 20}),
					new Arm({angle: 2.65, length: 40}),
					new Arm({angle: 3.65, length: 25}),
					new Arm({angle: 5.24, length: 50}),
			]}),

			// Urchin A12
			new Urchin({
				x: -800, y: 0,
				growSpeed: 0.4 * frameModifier,
				arms: [
					new Arm({angle: 1.03, length: 20}),
					new Arm({angle: 1.63, length: 20}),
					new Arm({angle: 2.65, length: 40}),
					new Arm({angle: 3.65, length: 25}),
					new Arm({angle: 5.24, length: 50}),
			]}),

			// Urchin A13
			new Urchin({
				x: 500, y: -400,
				growSpeed: 0.4 * frameModifier,
				arms: [
					new Arm({angle: 1.0, length: 20}),
					new Arm({angle: 1.3, length: 20}),
					new Arm({angle: 1.35, length: 40}),
					new Arm({angle: 4.59, length: 20}),
					new Arm({angle: 5.7, length: 40}),
			]}),
		];

		// add all of the objects into one array
		allObjects = [player];
		allObjects = allObjects.concat(goals, enemies, items, decorations);

		alert("Follow The Light");
	}


	if(level==1){

		background = new Background({
			x: -300,
			y: -300,
			spritePath: "assets/bg1.jpg"
		});

		goals = [
			new GameObject({
				x: 550,
				y: 550,
				hitRadius: 20,
				angle: 0
			})
		];

		items = [];

		enemies = [
			new Urchin({
				x:100,
				y: 100,
				rotateSpeed: 0.000,
				hitRadius: 4,
				activeRadius: 110,
				explodeToLength: 200,
				arms: [
					new Arm({length: 10, angle: 0.11*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 10, angle: 0.28*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 10, angle: 0.35*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 10, angle: 0.48*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 10, angle: 0.91*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 10, angle: 0.99*Math.PI, growSpeed: 0.05, explodeLength: 100})

			]}),

			new Urchin({
				x:200,
				y: 200,
				rotateSpeed: -0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 20, angle: 1.4*Math.PI, growSpeed: 0.08}),
					new Arm({length: 10, angle: 1.7*Math.PI, growSpeed: 0.01}),
					new Arm({length: 30, angle: 2.2*Math.PI, growSpeed: 0.01}),
					new Arm({length: 20, angle: 2.6*Math.PI, growSpeed: 0.02}),
					new Arm({length: 10, angle: 3.2*Math.PI, growSpeed: 0.04})
			]}),

			new Urchin({
				x:375,
				y: 125,
				rotateSpeed: -0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 80, angle: 1.4*Math.PI, growSpeed: 0.08}),
					new Arm({length: 90, angle: 1.7*Math.PI, growSpeed: 0.01}),
					new Arm({length: 110, angle: 2.2*Math.PI, growSpeed: 0.01}),
					new Arm({length: 100, angle: 2.6*Math.PI, growSpeed: 0.02}),
					new Arm({length: 90, angle: 3.2*Math.PI, growSpeed: 0.04})
			]}),

			new Urchin({
				x:500,
				y: 400,
				rotateSpeed: -0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 40, angle: 0.1*Math.PI, growSpeed: 0.03}),
					new Arm({length: 80, angle: 0.15*Math.PI, growSpeed: 0.01}),
					new Arm({length: 50, angle: 0.3*Math.PI, growSpeed: 0.01}),
					new Arm({length: 60, angle: 0.35*Math.PI, growSpeed: 0.02}),
					new Arm({length: 80, angle: 1.3*Math.PI, growSpeed: 0.01}),
					new Arm({length: 40, angle: 1.5*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 1.7*Math.PI, growSpeed: 0.04})
			]}),

			new Urchin({
				x:400,
				y: 500,
				rotateSpeed: -0.001,
				hitRadius: 4,
				arms: [
					new Arm({length: 60, angle: 0.4*Math.PI, growSpeed: 0.04}),
					new Arm({length: 50, angle: 1.2*Math.PI, growSpeed: 0.01}),
					new Arm({length: 40, angle: 1.7*Math.PI, growSpeed: 0.01}),
					new Arm({length: 50, angle: 1.9*Math.PI, growSpeed: 0.02}),
					new Arm({length: 60, angle: 3.4*Math.PI, growSpeed: 0.03}),
			]}),

			new Urchin({
				x:100,
				y: 450,
				rotateSpeed: 0.001,
				hitRadius: 4,
				arms: [
					new Arm({length: 10, angle: 0.11*Math.PI, growSpeed: 0.09}),
					new Arm({length: 10, angle: 0.28*Math.PI, growSpeed: 0.08}),
					new Arm({length: 10, angle: 0.35*Math.PI, growSpeed: 0.06}),
					new Arm({length: 10, angle: 0.48*Math.PI, growSpeed: 0.07}),
					new Arm({length: 10, angle: 0.91*Math.PI, growSpeed: 0.09}),
					new Arm({length: 10, angle: 0.99*Math.PI, growSpeed: 0.07})

			]})
		];

		// add all of the objects into one array
		allObjects = [player];
		allObjects = allObjects.concat(goals, enemies, items, decorations);
	}



	if(level==2){

		// instances for level 2

		background = new Background({
			x: -300,
			y: -300,
			spritePath: "assets/bg2.jpg"
		});

		goals = [
			new GameObject({
				x: 50,
				y: 1450,
				hitRadius: 20,
				angle: 0
			})
		];

		items = [
			new Item({ x: 210, y: 310, hitRadius: 5 }),
			new Item({ x: 310, y: 480, hitRadius: 5 }),
		];

		enemies = [
			new Urchin({
				x:400,
				y: 50,
				rotateSpeed: 0.001,
				hitRadius: 4,
				activeRadius: 110,
				explodeToLength: 200,
				arms: [
					new Arm({length: 30, angle: 0.11*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 6.28*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 5.35*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 1.48*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 2.91*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 3.43*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 4.16*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 7.08*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 8.01*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 0.88*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 3.91*Math.PI, growSpeed: 0.05, explodeLength: 100}),
					new Arm({length: 30, angle: 2.09*Math.PI, growSpeed: 0.05, explodeLength: 100})

			]}),

			new Urchin({
				x: 300,
				y: 200,
				rotateSpeed: -0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 80, angle: 1.4*Math.PI, growSpeed: 0.02}),
					new Arm({length: 90, angle: 1.7*Math.PI, growSpeed: 0.01}),
					new Arm({length: 90, angle: 2.2*Math.PI, growSpeed: 0.01}),
					new Arm({length: 70, angle: 2.6*Math.PI, growSpeed: 0.02}),
					new Arm({length: 80, angle: 3.2*Math.PI, growSpeed: 0.04})
			]}),

			new Urchin({
				x:125,
				y: 300,
				rotateSpeed: -0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 40, angle: 1.8*Math.PI, growSpeed: 0.03}),
					new Arm({length: 30, angle: 1.3*Math.PI, growSpeed: 0.01}),
					new Arm({length: 43, angle: 2.7*Math.PI, growSpeed: 0.01}),
					new Arm({length: 35, angle: 2.5*Math.PI, growSpeed: 0.02}),
					new Arm({length: 40, angle: 3.6*Math.PI, growSpeed: 0.04})
			]}),

			new Urchin({
				x:250,
				y: 490,
				rotateSpeed: -0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 40, angle: 0.1*Math.PI, growSpeed: 0.03}),
					new Arm({length: 80, angle: 0.15*Math.PI, growSpeed: 0.04}),
					new Arm({length: 50, angle: 0.3*Math.PI, growSpeed: 0.03}),
					new Arm({length: 60, angle: 0.35*Math.PI, growSpeed: 0.05}),
					new Arm({length: 80, angle: 1.3*Math.PI, growSpeed: 0.03}),
					new Arm({length: 40, angle: 1.5*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 1.7*Math.PI, growSpeed: 0.04}),
					new Arm({length: 80, angle: 2.3*Math.PI, growSpeed: 0.03}),
					new Arm({length: 40, angle: 3.5*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 2.9*Math.PI, growSpeed: 0.04})
			]}),

			new Urchin({
				x:400,
				y: 390,
				rotateSpeed: -0.003,
				hitRadius: 4,
				arms: [
					new Arm({length: 60, angle: 0.4*Math.PI, growSpeed: 0.02}),
					new Arm({length: 50, angle: 1.2*Math.PI, growSpeed: 0.01}),
					new Arm({length: 40, angle: 1.7*Math.PI, growSpeed: 0.01}),
					new Arm({length: 50, angle: 1.9*Math.PI, growSpeed: 0.02}),
					new Arm({length: 60, angle: 3.4*Math.PI, growSpeed: 0.03}),
			]}),

			new Urchin({
				x: 125,
				y: 550,
				rotateSpeed: 0.004,
				hitRadius: 4,
				arms: [
					new Arm({length: 30, angle: 0.11*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 0.28*Math.PI, growSpeed: 0.03}),
					new Arm({length: 30, angle: 0.35*Math.PI, growSpeed: 0.03}),
					new Arm({length: 30, angle: 0.48*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 0.91*Math.PI, growSpeed: 0.03}),
					new Arm({length: 30, angle: 0.99*Math.PI, growSpeed: 0.01})

			]}),
			
			new Urchin({
				x:125,
				y: 700,
				rotateSpeed: 0.009,
				hitRadius: 4,
				arms: [
					new Arm({length: 70, angle: 0.11*Math.PI, growSpeed: 0.02}),
					new Arm({length: 80, angle: 0.28*Math.PI, growSpeed: 0.04}),
					new Arm({length: 60, angle: 0.35*Math.PI, growSpeed: 0.05}),
					new Arm({length: 45, angle: 0.48*Math.PI, growSpeed: 0.06}),
					new Arm({length: 60, angle: 0.91*Math.PI, growSpeed: 0.02}),
					new Arm({length: 75, angle: 0.99*Math.PI, growSpeed: 0.02})

			]}),
			
			
			new Urchin({
				x:125,
				y: 875,
				rotateSpeed: 0.008,
				hitRadius: 4,
				arms: [
					new Arm({length: 10, angle: 0.11*Math.PI, growSpeed: 0.03}),
					new Arm({length: 10, angle: 0.28*Math.PI, growSpeed: 0.03}),
					new Arm({length: 10, angle: 0.35*Math.PI, growSpeed: 0.02}),
					new Arm({length: 10, angle: 0.48*Math.PI, growSpeed: 0.02}),
					new Arm({length: 10, angle: 0.91*Math.PI, growSpeed: 0.03}),
					new Arm({length: 10, angle: 0.99*Math.PI, growSpeed: 0.04})

			]}),
			
				new Urchin({
				x:300,
				y: 975,
				rotateSpeed: 0.009,
				hitRadius: 4,
				arms: [
					new Arm({length: 30, angle: 0.11*Math.PI, growSpeed: 0.02}),
					new Arm({length: 40, angle: 0.28*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 0.35*Math.PI, growSpeed: 0.02}),
					new Arm({length: 40, angle: 0.48*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 0.91*Math.PI, growSpeed: 0.02}),
					new Arm({length: 40, angle: 0.99*Math.PI, growSpeed: 0.02})

			]}),
			
			new Urchin({
				x:75,
				y: 1050,
				rotateSpeed: 0.009,
				hitRadius: 4,
				arms: [
					new Arm({length: 30, angle: 0.11*Math.PI, growSpeed: 0.03}),
					new Arm({length: 40, angle: 0.28*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 0.35*Math.PI, growSpeed: 0.05}),
					new Arm({length: 40, angle: 0.48*Math.PI, growSpeed: 0.03}),
					new Arm({length: 30, angle: 0.91*Math.PI, growSpeed: 0.04}),
					new Arm({length: 40, angle: 0.99*Math.PI, growSpeed: 0.02})
			]}),	
			
			new Urchin({
				x:250,
				y:1075,
				rotateSpeed: 0.006,
				hitRadius: 4,
				arms: [
					new Arm({length: 60, angle: 0.11*Math.PI, growSpeed: 0.03}),
					new Arm({length: 40, angle: 0.28*Math.PI, growSpeed: 0.04}),
					new Arm({length: 70, angle: 0.35*Math.PI, growSpeed: 0.02}),
					new Arm({length: 50, angle: 0.48*Math.PI, growSpeed: 0.02}),
					new Arm({length: 60, angle: 0.91*Math.PI, growSpeed: 0.03}),
					new Arm({length: 80, angle: 0.99*Math.PI, growSpeed: 0.03})
			]}),	
			
			new Urchin({
				x:50,
				y: 1215,
				rotateSpeed: 0.005,
				hitRadius: 4,
				arms: [
					new Arm({length: 50, angle: 0.11*Math.PI, growSpeed: 0.03}),
					new Arm({length: 40, angle: 0.28*Math.PI, growSpeed: 0.02}),
					new Arm({length: 70, angle: 0.35*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 0.48*Math.PI, growSpeed: 0.04}),
					new Arm({length: 30, angle: 0.91*Math.PI, growSpeed: 0.03}),
					new Arm({length: 50, angle: 0.99*Math.PI, growSpeed: 0.02})
			]}),	
			
			new Urchin({
				x:250,
				y: 1260,
				rotateSpeed: 0.004,
				hitRadius: 4,
				arms: [
					new Arm({length: 30, angle: 0.11*Math.PI, growSpeed: 0.02}),
					new Arm({length: 40, angle: 0.28*Math.PI, growSpeed: 0.03}),
					new Arm({length: 30, angle: 0.35*Math.PI, growSpeed: 0.02}),
					new Arm({length: 40, angle: 0.48*Math.PI, growSpeed: 0.05}),
					new Arm({length: 30, angle: 0.91*Math.PI, growSpeed: 0.02}),
					new Arm({length: 40, angle: 0.99*Math.PI, growSpeed: 0.03})
			]}),	
			
		new Urchin({
				x:150,
				y: 1330,
				rotateSpeed: -0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 40, angle: 0.1*Math.PI, growSpeed: 0.03}),
					new Arm({length: 80, angle: 0.15*Math.PI, growSpeed: 0.04}),
					new Arm({length: 50, angle: 0.3*Math.PI, growSpeed: 0.03}),
					new Arm({length: 60, angle: 0.35*Math.PI, growSpeed: 0.05}),
					new Arm({length: 80, angle: 1.3*Math.PI, growSpeed: 0.03}),
					new Arm({length: 40, angle: 1.5*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 1.7*Math.PI, growSpeed: 0.04}),
					new Arm({length: 80, angle: 2.3*Math.PI, growSpeed: 0.03}),
					new Arm({length: 40, angle: 3.5*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 2.9*Math.PI, growSpeed: 0.04})
			]}),
						
				new Urchin({
				x: 300,
				y: 1450,
				rotateSpeed: 0.004,
				hitRadius: 4,
				arms: [
					new Arm({length: 30, angle: 0.11*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 0.28*Math.PI, growSpeed: 0.03}),
					new Arm({length: 30, angle: 0.35*Math.PI, growSpeed: 0.03}),
					new Arm({length: 30, angle: 0.48*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 0.91*Math.PI, growSpeed: 0.03}),
					new Arm({length: 30, angle: 0.99*Math.PI, growSpeed: 0.01})

			]}),
			
			
			new Urchin({
				x:50,
				y: 1550,
				rotateSpeed: -0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 40, angle: 0.1*Math.PI, growSpeed: 0.03}),
					new Arm({length: 80, angle: 0.15*Math.PI, growSpeed: 0.04}),
					new Arm({length: 50, angle: 0.3*Math.PI, growSpeed: 0.03}),
					new Arm({length: 60, angle: 0.35*Math.PI, growSpeed: 0.05}),
					new Arm({length: 80, angle: 1.3*Math.PI, growSpeed: 0.03}),
					new Arm({length: 40, angle: 1.5*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 1.7*Math.PI, growSpeed: 0.04}),
					new Arm({length: 80, angle: 2.3*Math.PI, growSpeed: 0.03}),
					new Arm({length: 40, angle: 3.5*Math.PI, growSpeed: 0.02}),
					new Arm({length: 30, angle: 2.9*Math.PI, growSpeed: 0.04})
			]}),
					
		];

		// add all of the objects into one array
		allObjects = [player];
		allObjects = allObjects.concat(goals, enemies, items, decorations);
	}


	if(level==3){

		// instances for level 2

		background = new Background({
			x: -500,
			y: -500,
			spritePath: "assets/bg1.jpg"
		});

		goals = [
			new GameObject({
				x: 50,
				y: 1450,
				hitRadius: 20,
				angle: 0
			})
		];

		items = [];

		var growSpeed1 = 0.05;
		var growSpeed2 = 0.08;
		var growSpeed3 = 0.1;
		var growSpeed4 = 0.15;
		var growSpeed5 = 0.21;
		var growSpeed6 = 0.25;

		enemies = [



			// Enemy Urchins

			new Urchin({	// Urchin A
				x: -400,
				y: -700,
				rotateSpeed: 0.005,
				hitRadius: 4,
				arms: [
					new Arm({length: 90, angle: 0.55, growSpeed: growSpeed1}),
					new Arm({length: 50, angle: 0.78, growSpeed: growSpeed4}),
					new Arm({length: 10, angle: 2.61, growSpeed: growSpeed3}),
					new Arm({length: 50, angle: 2.76, growSpeed: growSpeed2}),
					new Arm({length: 60, angle: 4.18, growSpeed: growSpeed1}),
					new Arm({length: 70, angle: 4.22, growSpeed: growSpeed5})

			]}),

			new Urchin({	// Urchin B
				x: 1200,
				y: -900,
				rotateSpeed: -0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 20, angle: 1.4*Math.PI, growSpeed: growSpeed3}),
					new Arm({length: 10, angle: 1.7*Math.PI, growSpeed: growSpeed1}),
					new Arm({length: 30, angle: 2.2*Math.PI, growSpeed: growSpeed3}),
					new Arm({length: 20, angle: 2.6*Math.PI, growSpeed: growSpeed2}),
					new Arm({length: 10, angle: 3.2*Math.PI, growSpeed: growSpeed5})
			]}),

			new Urchin({	// Urchin C
				x: 400,
				y: -500,
				rotateSpeed: 0.001,
				hitRadius: 4,
				arms: [
					new Arm({length: 80, angle: 1.4*Math.PI, growSpeed: growSpeed4}),
					new Arm({length: 90, angle: 1.7*Math.PI, growSpeed: growSpeed2}),
					new Arm({length: 110, angle: 2.2*Math.PI, growSpeed: growSpeed1}),
					new Arm({length: 100, angle: 2.6*Math.PI, growSpeed: growSpeed2}),
					new Arm({length: 90, angle: 3.2*Math.PI, growSpeed: growSpeed4})
			]}),

			new Urchin({	// Urchin D
				x: -300,
				y: -300,
				rotateSpeed: 0.002,
				hitRadius: 4,
				arms: [
					new Arm({length: 40, angle: 0.1*Math.PI, growSpeed: growSpeed3}),
					new Arm({length: 80, angle: 0.15*Math.PI, growSpeed: growSpeed5}),
					new Arm({length: 50, angle: 0.3*Math.PI, growSpeed: growSpeed6}),
					new Arm({length: 60, angle: 0.35*Math.PI, growSpeed: growSpeed3}),
					new Arm({length: 80, angle: 1.3*Math.PI, growSpeed: growSpeed5}),
					new Arm({length: 40, angle: 1.5*Math.PI, growSpeed: growSpeed6}),
					new Arm({length: 30, angle: 1.7*Math.PI, growSpeed: growSpeed2})
			]}),

			new Urchin({	// Urchin E
				x: 1000,
				y: -400,
				rotateSpeed: -0.001,
				hitRadius: 4,
				arms: [
					new Arm({length: 60, angle: 0.4*Math.PI, growSpeed: growSpeed1}),
					new Arm({length: 50, angle: 1.2*Math.PI, growSpeed: growSpeed5}),
					new Arm({length: 40, angle: 1.7*Math.PI, growSpeed: growSpeed3}),
					new Arm({length: 50, angle: 1.9*Math.PI, growSpeed: growSpeed2}),
					new Arm({length: 60, angle: 3.4*Math.PI, growSpeed: growSpeed4}),
			]}),


			// Boundary Urchins
			
			new Urchin({	// Urchin #1
				x: -1000, y: -1200,
				rotateSpeed: 0, hitRadius: 6,
				activeRadius: 500,
				arms: [
					new Arm({angle: 0.1, growSpeed: growSpeed1, explodeLength: 500}), // boundary
					new Arm({angle: 0.18, growSpeed: growSpeed1 }),
					new Arm({angle: 1.62, growSpeed: growSpeed2, explodeLength: 450}), // boundary
					new Arm({angle: 1.83, growSpeed: growSpeed1 }),

			]}),

			new Urchin({	// Urchin #2
				x: -200, y: -1000,
				rotateSpeed: 0, hitRadius: 6,
				activeRadius: 500,
				arms: [
					new Arm({angle: 3.6, growSpeed: growSpeed1, explodeLength: 490}), // boundary
					new Arm({angle: 5.85, growSpeed: growSpeed2, explodeLength: 510}), // boundary

			]}),

			new Urchin({	// Urchin #3
				x: 400, y: -1100,
				rotateSpeed: 0, hitRadius: 6,
				activeRadius: 400,
				arms: [
					new Arm({angle: 3.3, growSpeed: growSpeed4, explodeLength: 300}), // boundary
					new Arm({angle: 5.6, growSpeed: growSpeed3, explodeLength: 520}), // boundary
			]}),

			new Urchin({	// Urchin #4
				x: 1100, y: -1200,
				rotateSpeed: 0, hitRadius: 6,
				activeRadius: 500,
				arms: [
					new Arm({angle: 3.1, growSpeed: growSpeed2, explodeLength: 480}), // boundary
					new Arm({angle: 5.7, growSpeed: growSpeed3, explodeLength: 400}), // boundary
			]}),

			new Urchin({	// Urchin #5
				x: 1800, y: -1300,
				rotateSpeed: 0, hitRadius: 6,
				activeRadius: 300,
				arms: [
					new Arm({angle: 1.0, growSpeed: growSpeed1, explodeLength: 400}), // boundary
					new Arm({angle: 3.6, growSpeed: growSpeed4, explodeLength: 400}), // boundary
			]}),

			new Urchin({	// Urchin #6
				x: 1800, y: -900,
				rotateSpeed: 0, hitRadius: 6,
				activeRadius: 300,
				arms: [
					new Arm({angle: 2.1, growSpeed: growSpeed4, explodeLength: 450}), // boundary
					new Arm({angle: 5.4, growSpeed: growSpeed4, explodeLength: 450}), // boundary
			]}),

			new Urchin({	// Urchin #7
				x: 1500, y: -500,
				rotateSpeed: 0, hitRadius: 6,
				activeRadius: 400,
				arms: [
					new Arm({angle: 1.0, growSpeed: growSpeed2, explodeLength: 400}), // boundary
					new Arm({angle: 5.5, growSpeed: growSpeed3, explodeLength: 400}), // boundary
			]}),

			new Urchin({	// Urchin #8
				x: 1600, y: 0,
				rotateSpeed: 0, hitRadius: 4,
				activeRadius: 300,
				arms: [
					new Arm({angle: 1.53, growSpeed: growSpeed4, explodeLength: 450}), // boundary
					new Arm({angle: 5.70, growSpeed: growSpeed3, explodeLength: 450}), // boundary
			]}),

			new Urchin({	// Urchin #9
				x: 1900, y: 700,
				rotateSpeed: 0, hitRadius: 6,
				activeRadius: 600,
				arms: [
					new Arm({angle: 0.58, growSpeed: growSpeed1, explodeLength: 450}), // boundary
					new Arm({angle: 1.36, growSpeed: growSpeed2, explodeLength: 450}), // boundary
			]}),

			new Urchin({	// Urchin #10
				x: 2000, y: 1500, hitRadius: 6,
				activeRadius: 400,
				arms: [
					new Arm({angle: 1.53, growSpeed: growSpeed1, explodeLength: 800}), // boundary
					new Arm({angle: 4.12, growSpeed: growSpeed2, explodeLength: 800}), // boundary
			]}),

			new Urchin({	// Urchin #11
				x: 1900, y: 2000, hitRadius: 6,
				activeRadius: 400,
				arms: [
					new Arm({angle: 0.50, growSpeed: growSpeed1, explodeLength: 400}), // boundary
					new Arm({angle: 4.23, growSpeed: growSpeed2, explodeLength: 900}), // boundary
			]}),

			new Urchin({	// Urchin #12
				x: 1700, y: 2700, hitRadius: 6,
				activeRadius: 500,
				arms: [
					new Arm({angle: 2.50, growSpeed: growSpeed1, explodeLength: 500}), // boundary
					new Arm({angle: 5.20, growSpeed: growSpeed2, explodeLength: 750}), // boundary
			]}),

			new Urchin({	// Urchin #13
				x: 1200, y: 2800, hitRadius: 6,
				activeRadius: 500,
				arms: [
					new Arm({angle: 0.57, growSpeed: growSpeed1, explodeLength: 500}), // boundary
					new Arm({angle: 2.75, growSpeed: growSpeed2, explodeLength: 500}), // boundary
			]}),

			new Urchin({	// Urchin #14
				x: 600, y: 2600, hitRadius: 6,
				activeRadius: 400,
				arms: [
					new Arm({angle: 0.78, growSpeed: growSpeed1, explodeLength: 800}), // boundary
					new Arm({angle: 3.95, growSpeed: growSpeed2, explodeLength: 400}), // boundary
			]}),

			new Urchin({	// Urchin #15
				x: 500, y: 2100, hitRadius: 6,
				activeRadius: 300,
				arms: [
					new Arm({angle: 1.58, growSpeed: growSpeed1, explodeLength: 600}), // boundary
					new Arm({angle: 3.30, growSpeed: growSpeed2, explodeLength: 450}), // boundary
			]}),

			new Urchin({	// Urchin #16
				x: 100, y: 2300, hitRadius: 6,
				activeRadius: 300,
				arms: [
					new Arm({angle: 2.10, growSpeed: growSpeed1, explodeLength: 600}), // boundary
					new Arm({angle: 5.50, growSpeed: growSpeed2, explodeLength: 450}), // boundary
			]}),

			new Urchin({	// Urchin #17
				x: -300, y: 2700, hitRadius: 6,
				activeRadius: 600,
				arms: [
					new Arm({angle: 3.90, growSpeed: growSpeed1, explodeLength: 950}), // boundary
					new Arm({angle: 5.76, growSpeed: growSpeed2, explodeLength: 600}), // boundary
			]}),

			new Urchin({	// Urchin #18
				x: -1000, y: 2300, hitRadius: 6,
				activeRadius: 500,
				arms: [
					new Arm({angle: 0.53, growSpeed: growSpeed1, explodeLength: 750}), // boundary
					new Arm({angle: 5.24, growSpeed: growSpeed2, explodeLength: 750}), // boundary
			]}),

			new Urchin({	// Urchin #19
				x: -900, y: 1600, hitRadius: 6,
				activeRadius: 400,
				arms: [
					new Arm({angle: 1.49, growSpeed: growSpeed1, explodeLength: 650}), // boundary
					new Arm({angle: 3.39, growSpeed: growSpeed2, explodeLength: 650}), // boundary
			]}),

			new Urchin({	// Urchin #20
				x: -1100, y: 1200, hitRadius: 6,
				activeRadius: 400,
				arms: [
					new Arm({angle: 1.40, growSpeed: growSpeed1, explodeLength: 650}), // boundary
					new Arm({angle: 5.20, growSpeed: growSpeed2, explodeLength: 800}), // boundary
			]}),

			new Urchin({	// Urchin #21
				x: -1100, y: 500, hitRadius: 6,
				activeRadius: 500,
				arms: [
					new Arm({angle: 1.45, growSpeed: growSpeed1, explodeLength: 750}), // boundary
					new Arm({angle: 5.18, growSpeed: growSpeed2, explodeLength: 750}), // boundary
			]}),

			new Urchin({	// Urchin #22
				x: -1000, y: -100, hitRadius: 6,
				activeRadius: 400,
				arms: [
					new Arm({angle: 1.18, growSpeed: growSpeed1, explodeLength: 650}), // boundary
					new Arm({angle: 4.61, growSpeed: growSpeed2, explodeLength: 650}), // boundary
			]}),

			new Urchin({	// Urchin #23
				x: -900, y: -600, hitRadius: 6,
				activeRadius: 300,
				arms: [
					new Arm({angle: 2.10, growSpeed: growSpeed1, explodeLength: 600}), // boundary
					new Arm({angle: 4.18, growSpeed: growSpeed2, explodeLength: 600}), // boundary
			]}),
		];

		// add all of the objects into one array
		allObjects = [player];
		allObjects = allObjects.concat(goals, enemies, items, decorations);

	}	
}