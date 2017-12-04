/*

The Game Project 5 - Making a complete level

Week 7

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var realPos;

var isLeft;
var isRight;
var isJumping;
var isFalling;

var relative = {
		torso_x : -43,
		torso_y : -103,
		mountain_x : 25,
		mountain_y : 10,
		tree_x : 770,
		tree_y : 327
};

var neck = {
		width: 6,
		height : 7
	};
	
var leg = {
		width : 7,
		height : 10
	};
	
var torso = {
		width : 22,
		height : 30
	};
	
var arm = {
		width : 7,
		height : 20
	};
	
var head = {
		width : 14,
		height: 14
	};
var totems = {x_pos: 100, y_pos: 450, size: 45, isFound: false};


var houseX;
var housePos_y;
var clouds;
var mountain;
var tree;
var canyon = {x_pos: 300, width: 50};

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	realPos = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isJumping = false;
	isFalling = false;

	// Initialise arrays of scenery objects.
	housePos_y = floorPos_y;
	houseX=[50, 200, 400, 600];
	clouds = [ 
	{pos_x:150, pos_y:180 },
	 {pos_x:300, pos_y:180 }, 
	 {pos_x:450, pos_y:180 } 
	 ];


	mountain = [ { x_pos : 1, height : 150 }, { x_pos : 700, height : 135 }, {x_pos : 200,height : 200 }, {x_pos : 15, height : 150}, {x_pos : 250,height : 150}, {x_pos : 450,height : 150}, {x_pos : 650,height : 150}, {x_pos : 323,height : 150}]
	tree = [

	{
	x_pos: 300,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},

	{
	x_pos: 1,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},
{
	x_pos: 150,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},

{
	x_pos: 300,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},

{
	x_pos: 450,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},

{
	x_pos: 650,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},

{
	x_pos: 350,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},

{
	x_pos: 850,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
}
]

	for( var i = 0; i < 4; i++ ) {

		clouds.push(
		{
			pos_x: i * random( 100, 200 ),
			pos_y: random( floorPos_y - 100)
					
		}
	);

	}

	for( var i = 0; i < 3; i++ ) {

		mountain.push(
		{

			x_pos: i * random( 100, 500),
			height : random(120, 200)

		}

			)
	}

	for( var i = 0; i < 3; i++ ) {

		tree.push( 
		{

			x_pos: i * random(50, 400),
			y_pos: 350,
			size: 125 * random( 1, 4),
			color1: random(0, 255),
			randHeight1: random( 1, 3)
		}


			)
	}

	for( var i = 0; i < 3; i++ ) {

		houseX.push(i * random(20, 600));
	}

}

function draw()
{
	background(170); // fill the sky blue

	noStroke();
	fill(80);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	// Draw clouds.
	push();
    translate(scrollPos * 0.3,0);

  	drawClouds();

    pop();
	// Draw mountains.

    push();
    translate(scrollPos * 0.6,0);

    drawMountains();

	pop();

	// Draw trees.

    push();
    translate(scrollPos * 0.8, 0);

    drawTrees();

    pop();

    // Draw canyon
    push();
    translate(scrollPos,0);
    drawCanyon(canyon);
    checkCanyon(canyon);
    pop();

	// Draw houses.

	push();
    translate(scrollPos, 0);

    drawHouses();

    pop();
		
	// Draw pickup items.
	push();
	translate(scrollPos,0);
	drawTotem(totem);
	checkPickup(totem);
	pop();
	// Draw game character.
	drawGameChar();

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
			if(gameChar_x > width * 0.2)
			{
					gameChar_x -= 5;
			}
			else
			{
					scrollPos += 5;
			}
	}

	if(isRight)
	{
			if(gameChar_x < width * 0.8)
			{
					gameChar_x  += 5;
			}
			else
			{
					scrollPos -= 5; // negative for moving against the background
			}
	}

	// Logic to make the game character rise and fall.
	if(gameChar_y < floorPos_y)
	{
			gameChar_y += 2;
			isJumping = true;
	}
	else
	{
			isJumping = false;
	}

	if(isFalling)
	{
			gameChar_y += 5;
	}

	// Update real position of gameChar for collision detection.
	realPos = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

		// console.log(keyCode);
		// console.log(key);

	if(key == 'A' || keyCode == 37)
	{
			isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
			isRight = true;
	}

	if(key == ' ' || key == 'W')
	{
			if(!isJumping)
			{
					gameChar_y -= 100;
			}
	}
}

function keyReleased(){

	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
if(isLeft && isJumping)
    {
        // jumping-left 
		 
		 // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		 
		triangle(gameChar_x + 36 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 50 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 43 + relative.torso_x, gameChar_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		 
		rect( gameChar_x + 40 + relative.torso_x, gameChar_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		 
		rect(gameChar_x + 38 + relative.torso_x, gameChar_y + 71 + relative.torso_y, head.width - 4, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		 
		ellipse(gameChar_x + 40 + relative.torso_x, gameChar_y + 78 + relative.torso_y, 5, 4);
		 
		stroke(0);
		point(gameChar_x + 40 + relative.torso_x, gameChar_y + 78 + relative.torso_y);
		 
		 // torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		 
		rect( gameChar_x + 36  + relative.torso_x , gameChar_y + 88 + relative.torso_y , torso.width - 9, torso.height);
		
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		 
		triangle( gameChar_x + 32 + relative.torso_x, gameChar_y + 112 + relative.torso_y, gameChar_x + 26 + relative.torso_x, gameChar_y + 116 + relative.torso_y, gameChar_x + 32 + relative.torso_x, gameChar_y + 120 + relative.torso_y );
		 
		rect( gameChar_x + 32 + relative.torso_x, gameChar_y + 112 + relative.torso_y, leg.width, leg.height);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		 
		triangle(gameChar_x + 28 + relative.torso_x, gameChar_y + 116 + relative.torso_y, gameChar_x + 22 + relative.torso_x, gameChar_y + 112 + relative.torso_y, gameChar_x + 22 + relative.torso_x, gameChar_y + 120 + relative.torso_y);
		
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		 
		ellipse( gameChar_x + 43 + relative.torso_x, gameChar_y + 110 - 103, 10, 10);
		fill(100);
		rect( gameChar_x + 40 + relative.torso_x , gameChar_y + 88 + relative.torso_y, arm.width, arm.height);
	
    }
    else if(isRight && isJumping)
    {
        // jumping-right
		 
		  // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		 
		triangle(gameChar_x + 36 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 50 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 43 + relative.torso_x, gameChar_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		 
		rect( gameChar_x + 40 + relative.torso_x, gameChar_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		 
		rect(gameChar_x + 38 + relative.torso_x, gameChar_y + 71 + relative.torso_y, head.width - 4, head.height);
		
	// right eye 
		noStroke();
		fill( 230);
		 
		ellipse(gameChar_x + 46 + relative.torso_x, gameChar_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(gameChar_x + 46 + relative.torso_x, gameChar_y + 78 + relative.torso_y);
		 
		 // torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		 
		rect( gameChar_x + 36  + relative.torso_x , gameChar_y + 88 + relative.torso_y , torso.width - 9, torso.height);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		 
		triangle( gameChar_x + 53 + relative.torso_x , gameChar_y + 112 + relative.torso_y, gameChar_x + 63 + relative.torso_x, gameChar_y + 116 + relative.torso_y, gameChar_x + 54 + relative.torso_x, gameChar_y + 120 + relative.torso_y);
		rect( gameChar_x + 46 + relative.torso_x, gameChar_y + 112 + relative.torso_y, leg.width, leg.height);
		
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		 
		triangle(gameChar_x + 60 + relative.torso_x , gameChar_y + 116 + relative.torso_y, gameChar_x + 68 + relative.torso_x, gameChar_y + 112 + relative.torso_y , gameChar_x + 68 + relative.torso_x, gameChar_y + 120 + relative.torso_y);
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		 
		ellipse( gameChar_x + 43 + relative.torso_x , gameChar_y + 110 + relative.torso_y, 10, 10);
		 
		fill(100);
		rect( gameChar_x + 39 + relative.torso_x , gameChar_y + 88 + relative.torso_y, arm.width, arm.height);
	

    }
    else if(isLeft)
    {
        // walking left
		 
		 // standing facing forwards
		 
       // hat
		 
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		
		triangle(gameChar_x + 36 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 50 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 43 + relative.torso_x, gameChar_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( gameChar_x + 40 + relative.torso_x, gameChar_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(gameChar_x + 38 + relative.torso_x, gameChar_y + 71 + relative.torso_y, head.width - 4, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(gameChar_x + 40 + relative.torso_x, gameChar_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(gameChar_x + 40 + relative.torso_x, gameChar_y + 78 + relative.torso_y);
		
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		 
		triangle( gameChar_x + 39 + relative.torso_x, gameChar_y + 127 + relative.torso_y, gameChar_x + 48 + relative.torso_x, gameChar_y + 127 + relative.torso_y, gameChar_x + 43 + relative.torso_x, gameChar_y + 133 + relative.torso_y );
		rect( gameChar_x + 39 + relative.torso_x, gameChar_y + 117 + relative.torso_y, leg.width, leg.height);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		 
		triangle(gameChar_x + 43 + relative.torso_x, gameChar_y + 133 + relative.torso_y, gameChar_x + 48 + relative.torso_x, gameChar_y + 137 + relative.torso_y, gameChar_x + 38 + relative.torso_x, gameChar_y + 137 + relative.torso_y);
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		 
		rect( gameChar_x + 36 + relative.torso_x , gameChar_y + 88 + relative.torso_y , torso.width - 9, torso.height);
	
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		 
		ellipse( gameChar_x + 43 + relative.torso_x, gameChar_y + 110 - 103, 10, 10);
		fill(100);
		rect( gameChar_x + 40 + relative.torso_x , gameChar_y + 88 + relative.torso_y, arm.width, arm.height);
	

		 
		 
    }
    else if(isRight)
    {
        // walking right 
		 
		  // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		 
		triangle(gameChar_x + 36 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 50 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 43 + relative.torso_x, gameChar_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( gameChar_x + 40 + relative.torso_x, gameChar_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		 
		rect(gameChar_x + 38 + relative.torso_x, gameChar_y + 71 + relative.torso_y, head.width - 4, head.height);
		
	// right eye 
		noStroke();
		fill( 230);
		 
		ellipse(gameChar_x + 46 + relative.torso_x, gameChar_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(gameChar_x + 46 + relative.torso_x, gameChar_y + 78 + relative.torso_y);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		 
		triangle( gameChar_x + 39 + relative.torso_x , gameChar_y + 127 + relative.torso_y, gameChar_x + 48 + relative.torso_x, gameChar_y + 127 + relative.torso_y, gameChar_x + 43 + relative.torso_x, gameChar_y + 133 + relative.torso_y);
		rect( gameChar_x + 39 + relative.torso_x, gameChar_y + 117 + relative.torso_y, leg.width, leg.height);
		
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		 
		triangle(gameChar_x + 43 + relative.torso_x , gameChar_y + 133 + relative.torso_y, gameChar_x + 48 + relative.torso_x, gameChar_y + 137 + relative.torso_y , gameChar_x + 38 + relative.torso_x, gameChar_y + 137 + relative.torso_y);
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		 
		rect( gameChar_x + 36  + relative.torso_x , gameChar_y + 88 + relative.torso_y , torso.width - 9, torso.height);
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		 
		ellipse( gameChar_x + 43 + relative.torso_x , gameChar_y + 110 + relative.torso_y, 10, 10);
		fill(100);
		rect( gameChar_x + 39 + relative.torso_x , gameChar_y + 88 + relative.torso_y, arm.width, arm.height);
	

    }
	
    else if(isJumping || isFalling)
    {   
		 // jumping facing forwards
        // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(gameChar_x + 36 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 50 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 43 + relative.torso_x, gameChar_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( gameChar_x + 40 + relative.torso_x, gameChar_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(gameChar_x + 36 + relative.torso_x, gameChar_y + 71 + relative.torso_y, head.width, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(gameChar_x + 46 + relative.torso_x, gameChar_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(gameChar_x + 46 + relative.torso_x, gameChar_y + 78 + relative.torso_y);
		
	// right eye 
		noStroke();
		fill( 230);
		ellipse(gameChar_x + 40 + relative.torso_x, gameChar_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(gameChar_x + 40 + relative.torso_x, gameChar_y + 78 + relative.torso_y);
		
	// mouth
		stroke(255);
		line(gameChar_x + 43 + relative.torso_x, gameChar_y + 82 + relative.torso_y, gameChar_x + 45 + relative.torso_x, gameChar_y + 82 + relative.torso_y);
		 
		 // torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( gameChar_x + 33  + relative.torso_x , gameChar_y + 88 + relative.torso_y , torso.width, torso.height);
		 
		 // left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( gameChar_x + 57 + relative.torso_x, gameChar_y + 110 - 103, 10, 10);
		fill(100);
		rect( gameChar_x + 53 + relative.torso_x , gameChar_y + 88 + relative.torso_y, arm.width, arm.height);

		 // right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( gameChar_x + 30 + relative.torso_x , gameChar_y + 110 + relative.torso_y, 10, 10);
		fill(100);
		rect( gameChar_x + 26 + relative.torso_x , gameChar_y + 88 + relative.torso_y, arm.width, arm.height);
		 
		 
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		rect( gameChar_x + 49 + relative.torso_x, gameChar_y + 117 + relative.torso_y, leg.width, leg.height - 5);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		rect( gameChar_x + 32 + relative.torso_x, gameChar_y + 117 + relative.torso_y, leg.width, leg.height - 5);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(gameChar_x + 53 + relative.torso_x, gameChar_y + 113 + relative.torso_y, gameChar_x + 49 + relative.torso_x, gameChar_y + 127 + relative.torso_y, gameChar_x + 58 + relative.torso_x, gameChar_y + 127 + relative.torso_y);
		
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(gameChar_x + 36 + relative.torso_x , gameChar_y + 113 + relative.torso_y, gameChar_x + 41 + relative.torso_x, gameChar_y + 127 + relative.torso_y , gameChar_x + 31 + relative.torso_x, gameChar_y + 127 + relative.torso_y);
	
    }
    else
    {

     // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(gameChar_x + 36 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 50 + relative.torso_x, gameChar_y + 71 + relative.torso_y, gameChar_x + 43 + relative.torso_x, gameChar_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( gameChar_x + 40 + relative.torso_x, gameChar_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(gameChar_x + 36 + relative.torso_x, gameChar_y + 71 + relative.torso_y, head.width, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(gameChar_x + 46 + relative.torso_x, gameChar_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(gameChar_x + 46 + relative.torso_x, gameChar_y + 78 + relative.torso_y);
		
	// right eye 
		noStroke();
		fill( 230);
		ellipse(gameChar_x + 40 + relative.torso_x, gameChar_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(gameChar_x + 40 + relative.torso_x, gameChar_y + 78 + relative.torso_y);
		
	// mouth
		stroke(255);
		line(gameChar_x + 43 + relative.torso_x, gameChar_y + 82 + relative.torso_y, gameChar_x + 45 + relative.torso_x, gameChar_y + 82 + relative.torso_y);

	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( gameChar_x + 49 + relative.torso_x, gameChar_y + 127 + relative.torso_y, gameChar_x + 58 + relative.torso_x, gameChar_y + 127 + relative.torso_y, gameChar_x + 53 + relative.torso_x, gameChar_y + 133 + relative.torso_y );
		rect( gameChar_x + 49 + relative.torso_x, gameChar_y + 117 + relative.torso_y, leg.width, leg.height);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( gameChar_x + 32 + relative.torso_x , gameChar_y + 127 + relative.torso_y, gameChar_x + 41 + relative.torso_x, gameChar_y + 127 + relative.torso_y, gameChar_x + 36 + relative.torso_x, gameChar_y + 133 + relative.torso_y);
		rect( gameChar_x + 32 + relative.torso_x, gameChar_y + 117 + relative.torso_y, leg.width, leg.height);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(gameChar_x + 53 + relative.torso_x, gameChar_y + 133 + relative.torso_y, gameChar_x + 58 + relative.torso_x, gameChar_y + 137 + relative.torso_y, gameChar_x + 48 + relative.torso_x, gameChar_y + 137 + relative.torso_y);
		
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(gameChar_x + 36 + relative.torso_x , gameChar_y + 133 + relative.torso_y, gameChar_x + 41 + relative.torso_x, gameChar_y + 137 + relative.torso_y , gameChar_x + 31 + relative.torso_x, gameChar_y + 137 + relative.torso_y);
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( gameChar_x + 33  + relative.torso_x , gameChar_y + 88 + relative.torso_y , torso.width, torso.height);
	
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( gameChar_x + 57 + relative.torso_x, gameChar_y + 110 - 103, 10, 10);
		fill(100);
		rect( gameChar_x + 53 + relative.torso_x , gameChar_y + 88 + relative.torso_y, arm.width, arm.height);
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( gameChar_x + 30 + relative.torso_x , gameChar_y + 110 + relative.torso_y, 10, 10);
		fill(100);
		rect( gameChar_x + 26 + relative.torso_x , gameChar_y + 88 + relative.torso_y, arm.width, arm.height);
	
}

}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

function drawClouds() {

	for( var i = 0; i < clouds.length;i++) {

    	fill(130);
	ellipse( clouds[i].pos_x - 10, clouds[i].pos_y, 20, 35);
	ellipse( clouds[i].pos_x - 20, clouds[i].pos_y, 20, 35);
	ellipse( clouds[i].pos_x + 10, clouds[i].pos_y, 20, 35);
	ellipse( clouds[i].pos_x + 20, clouds[i].pos_y, 20, 35);
	ellipse( clouds[i].pos_x, clouds[i].pos_y, 20, 35);
	ellipse( clouds[i].pos_x, clouds[i].pos_y, 100, 20);
    }
}

// Function to draw mountains objects.
function drawMountains() {


    for(var i = 0; i < mountain.length; i++) {

    fill( 120 );
	stroke( 50 );
	strokeWeight(2);
	triangle( mountain[i].x_pos + relative.mountain_x + 25, floorPos_y - mountain[i].height + 25, mountain[i].x_pos + relative.mountain_x - 35 - mountain[i].height * 1/3, floorPos_y , mountain[i].x_pos + relative.mountain_x + 55 + mountain[i].height * 1/3, floorPos_y);
	
	// MOUNTAIN
	fill(110);
	stroke(0);
	strokeWeight(3);
 	triangle( mountain[i].x_pos + relative.mountain_x ,floorPos_y - mountain[i].height, mountain[i].x_pos + relative.mountain_x - 35 - mountain[i].height * 1/3, floorPos_y , mountain[i].x_pos + relative.mountain_x + 35 + mountain[i].height * 1/3, floorPos_y);
	

 
 // mountain top
 	fill( 30);
 	stroke(166, 34, 34);
	strokeWeight(4);
 	ellipse(mountain[i].x_pos + relative.mountain_x, floorPos_y - mountain[i].height + relative.mountain_y, 45, 35);
	strokeWeight(2);
	fill(220, 20, 60, 120);
	ellipse( mountain[i].x_pos + relative.mountain_x, floorPos_y - mountain[i].height + relative.mountain_y, 9, 25);

}
}
// Function to draw trees objects.
function drawTrees() {

	for(var i = 0; i< tree.length; i++) {

	 fill(80);
 	noStroke();
	
	tree.size = 330 * tree[i].randHeight1;
 	
 	rect(tree[i].x_pos ,  tree[i].y_pos - tree.size * 1/4, 35, tree.size);
    // relative.tree_x, relative.tree_y
 	fill(255);
 	stroke(tree[i].color1);
 	strokeWeight(3);
 	noFill();
 
 	beginShape()
 	vertex(tree[i].x_pos - relative.tree_x + 774, tree[i].y_pos - relative.tree_y + 325 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 724, tree[i].y_pos - relative.tree_y + 324 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 766, tree[i].y_pos - relative.tree_y + 283 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 721, tree[i].y_pos - relative.tree_y + 296 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 784, tree[i].y_pos - relative.tree_y + 228 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 728, tree[i].y_pos - relative.tree_y + 265 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 801, tree[i].y_pos - relative.tree_y + 165 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 840, tree[i].y_pos - relative.tree_y + 217 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 802, tree[i].y_pos - relative.tree_y + 217 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 854, tree[i].y_pos - relative.tree_y + 259 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 798, tree[i].y_pos - relative.tree_y + 249 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 848, tree[i].y_pos - relative.tree_y + 287 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 807, tree[i].y_pos - relative.tree_y + 286 - tree.size * 1/4);
 	vertex(tree[i].x_pos - relative.tree_x + 850, tree[i].y_pos - relative.tree_y + 322-  tree.size * 1/4);
 	endShape(CLOSE);
	}


	
}
// Function to draw houses objects.

function drawHouses() {

	 for( var i = 0; i < houseX.length; i++) {

    	//frame
 	fill(100);
 	stroke(120);

 	rect(houseX[i] + 65,  housePos_y - 71, 120, 88);
	
 // roof
 	stroke(0);
	fill(170);
	strokeWeight(3);
 	triangle(houseX[i] + 50, 361, houseX[i] + 197, 360, houseX[i] + 128, 255);
	
 //  door
 	stroke(80);
	strokeWeight(1);
 	rect(houseX[i] + 105, 408, 30, 40);
	
// doorknob
	
 	ellipse(houseX[i] +127, 433, 5, 5);
 	strokeWeight(3);
 	
 
 // windows
	fill(180, 100);
	stroke(0);
	
 	ellipse(houseX[i] + 88, 386, 30, 30);
 	ellipse(houseX[i] + 150, 391, 30, 30);
	line(houseX[i] + 88, 373, houseX[i] +88, 398);
 	line(houseX[i] + 137, 390, houseX[i] + 163, 390);

    }
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
	  //draw the canyon
    fill(255);
    rect(t_canyon.x_pos, floorPos_y , t_canyon.width, height - floorPos_y);
	

}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
if( ( realPos >= t_canyon.x_pos ) && ( realPos <= t_canyon.x_pos + t_canyon.width ) && !isJumping ) {
		
		isFalling = true;
		
	} else {
		if ( gameChar_y <= floorPos_y )
		isFalling = false;
	}
	if( isFalling ) {
		
		if( realPos < t_canyon.x_pos ) {
			
			realPos = t_canyon.x_pos + 5;
		}
		
		if( realPos > t_canyon.x_pos + t_canyon.width ) {
			
			realPos = t_canyon.x_pos + t_canyon.width - 5;
		}
		
		gameChar_y += 5;
		
	}
}

// ----------------------------------
// Pick-up render and check functions
// ----------------------------------

// Function to draw pick-up objects.

function drawTotem(t_totem) {
	if ( !t_totem.isFound) {
	noFill();
 	stroke(255);
	strokeWeight(4);
 	ellipse(t_totem.x_pos, t_totem.y_pos, t_totem.size, t_totem.size - 25);
 	ellipse(t_totem.x_pos, t_totem.y_pos - 20, t_totem.size - 10, t_totem.size - 30);
   ellipse(t_totem.x_pos, t_totem.y_pos - 35, t_totem.size - 15, t_totem.size - 35 );
 	ellipse(t_totem.x_pos - 2, t_totem.y_pos - 50, t_totem.size - 30, t_totem.size - 30);
 }
}

function checkPickup(t_totem){

	if( realPos >=t_totem.x_pos - 30 && realPos <= t_totem.x_pos + 30 
		&& gameChar_y <= t_totem.y_pos && gameChar_y>= t_totem.y_pos - 70 ) t_totem.isFound = true;
}

// Function to check character has picked up an item.