/*

The Game Project 7 - Making a complete level

Week 12

*/
// world variables

var floorPos_y;
var scrollPos;
var realPos;
var houseX;
var housePos_y;
var clouds;
var mountain;
var tree;
var platforms;
var isOnPlatform;
var img;
var img2;

var canyon = [ 
 	{x_pos: 300, width: 100},
 	{x_pos: 15, width: 85},
 	{x_pos: 1000, width: 73},
 	{x_pos: 1500, width: 60}
 	]

var totems = [ 
	{x_pos: -420, y_pos: 450, size: 45, isFound: false},
	{x_pos: 200, y_pos: 450, size: 35, isFound: false},
	{x_pos: 1300, y_pos: 450, size: 55, isFound: false}
]
// character variables 

var gameChar_x;
var gameChar_y;
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

// Gameplay variables
var lives;
var isLeft;
var isRight;
var isJumping;
var isFalling;
var isLost;
var score;
var isWon;
var enemies;
var alternate;
function preload(){ 

	img = loadImage("img.png");
	img2 = loadImage("img2.png");
}
function setup()
{	
	createCanvas(1024, 576);
	lives = 3;
	floorPos_y = height * 3/4;
	score = 0;
	// set the state of the enemies
	alternate = true;


	startGame();
	
}

function draw()
{
	background(170); // fill the sky grey

	noStroke();
	fill(80);
	rect(0, floorPos_y, width, height/4); // draw some ground

	// Draw clouds.
	push();
    translate(scrollPos * 0.1,0);

  	drawClouds();

    pop();

	// Draw mountains.

    push();
    translate(scrollPos * 0.2,0);

    drawMountains();

	pop();

	// Draw trees.

    push();
    translate(scrollPos * 0.3, 0);

    drawTrees();

    pop();

    // Draw canyon

    push();
    translate(scrollPos  ,0);

    for( var i = 0; i < canyon.length; i++ ) {


    drawCanyon(canyon[i]);
    checkCanyon(canyon[i]);
}
    pop();

	// Draw houses.

	push();
    translate(scrollPos * 0.5, 0);

    drawHouses();

    pop();
		
	// Draw pickup items.

	push();
	translate(scrollPos ,0);

	for( var i = 0; i < totems.length; i++ ) {

	drawTotem(totems[i]);
	checkPickup(totems[i]);

}
	pop();

	// Draw game character.

	drawGameChar();
	
	// Draw enemies
	
        	
	for( var i = 0; i < enemies.length; i++ ) {

		push();
		translate(scrollPos, 0);
		enemies[i].render();
		enemies[i].move();
		enemies[i].checkCharCollision();
		pop();
	}

	// Draw platforms

	isOnPlatform = false;

	for( var i = 0; i < platforms.length; i++ ) {

		push();
		translate(scrollPos * 0.9, 0);

		platforms[i].display();
		platforms[i].checkCharOn();

		pop();
	}

	//GamePlayLogic
	textSize(32);
	stroke(180, 0, 0);

	if(isLost == true ) text("Game over - you lost. Press space to continue", 200, height/2);
	if(isWon == true ) text("Game over - you won. Press space to continue", 200, height/2);

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
			if(gameChar_x > width * 0.2)
			{
					gameChar_x -= 3;
			}
			else
			{
					scrollPos += 3;
			}
	}

	if(isRight)
	{
			if(gameChar_x < width * 0.8)
			{
					gameChar_x  += 3;
			}
			else
			{
					scrollPos -= 3; // negative for moving against the background
			}
	}

	// Logic to make the game character rise and fall.
	if(gameChar_y  < floorPos_y  && !isOnPlatform)
	{
			gameChar_y += 2;
			isJumping = true;
	}
	else
	{
			isJumping = false;
	}

	if(isFalling )
	{
			gameChar_y += 5;
	}

	// Update real position of gameChar for collision detection.
	realPos = gameChar_x - scrollPos;

	scoreCounter(score);
	checkPlayerWon();
	checkPlayerDie();
	textSize(20);
	text("Lives:" + lives, 950, 20);
		



}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

	if(isLost || isWon)
{
    if(key == ' ')
    {
        nextLevel();
    }
    return;
}

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

    fill(25);
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

	if( isFalling && !isOnPlatform ) {
		
		if( realPos < t_canyon.x_pos ) realPos = t_canyon.x_pos + 5;
		
		if( realPos > t_canyon.x_pos + t_canyon.width ) realPos = t_canyon.x_pos + t_canyon.width - 5;
		
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
		&& gameChar_y <= t_totem.y_pos && gameChar_y>= t_totem.y_pos - 70 ) {

		if(!t_totem.isFound) {

		 t_totem.isFound = true;
		 score++;

		 console.log("Score is: " + score);

		}
		
	}
	
}

// score counter

function scoreCounter(score) {
	textSize(20);
	text("Score:" + score, 10, 20);

}

// check if all items are picked up

function checkPlayerWon() {

	if( score == totems.length ) {


	 isWon = true;
	 console.log("You won!");
	}
}

function startGame(){

	enemies = [];
	platforms = [];
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isWon = false;
	isLost = false;

	//Create enemies

	enemies.push( new Enemy(100, floorPos_y - 20, 50, 150, 1));
	enemies.push( new Enemy(1100, floorPos_y - 20, 50, 170, 1));
	enemies.push( new Enemy(900, floorPos_y - 20, 50, 80, 2));
	enemies.push( new Enemy(-320, floorPos_y - 20, 20, 50, 2));
	enemies.push( new Enemy(-320, floorPos_y - 100, 50, 150, 0.9));


	//Create platforms

	platforms.push( new Platform( 720, floorPos_y - 50, 180, 15) );
	platforms.push( new Platform( -300, floorPos_y - 50, 180, 13));





	// Platform collision detection

	isOnPlatform = false;


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
	houseX=[0, 360, 520, 700];

	clouds = [ 
	{pos_x:150, pos_y:180 },
	 {pos_x:300, pos_y:180 }, 
	 {pos_x:450, pos_y:180 } 
	 ];

	mountain = [ { x_pos : 1, height : 150 }, { x_pos : 50, height : 135 }, {x_pos : 150,height : 200 }, {x_pos : 350, height : 150}, {x_pos : 550,height : 150}, {x_pos : 650,height : 150}, {x_pos : 850,height : 150}, {x_pos : 1023,height : 150}]
	tree = [

	{
	x_pos: 50,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},

	{
	x_pos: 100,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},
{
	x_pos: 200,
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
	x_pos: 850,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
},

{
	x_pos: 950,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	randHeight1: random( 1, 3),
	
}
]

	for( var i = 0; i < 4; i++ ) {

		clouds.push(
		{
			pos_x: i * 250,
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

			x_pos: i * 300,
			y_pos: 350,
			size: 125 * random( 1, 4),
			color1: random(0, 255),
			randHeight1: random( 1, 3)
		}


			)
	}

	

		houseX.push(i * random(50, 100));
		
	


}

function Enemy(x, y, startPoint, endPoint, speed) {

	this.x_pos = x;
	this.y_pos = y;
	
	this.x1 = startPoint;
	this.x2 = endPoint;
	this.speed = speed;

	this.render = function() {


        if(alternate)
        image(img2, this.x_pos, this.y_pos);
    	else image(img, this.x_pos, this.y_pos);
            
        }

    this.move = function() {

        if( this.x_pos == this.x1 ) alternate = true;
        if( this.x_pos == this.x2 ) alternate = false;

        if( alternate ) this.x_pos += this.speed;

        	else this.x_pos -= this.speed;
        		
        }

    this.checkCharCollision = function() {


        if( realPos >= ( this.x_pos ) && realPos <= (this.x_pos  + 50 ) // left-right detection

        && gameChar_y <= ( this.y_pos  + 50 ) && gameChar_y >= ( this.y_pos  ) ) { // top/bottom detection
        		
        playerDied();

        	}
        }
}

function Platform( x, y, width, height ) {

	this.x_pos = x;
	this.y_pos = y;
	this.width = width;
	this.height = height;

	this.display = function() {

		 // Draw platform.
            fill([120, 0, 0]);
            rect(this.x_pos, this.y_pos, this.width, this.height);
            line(this.x_pos,
                 this.y_pos + this.height / 2,
                 this.x_pos + this.width,
                 this.y_pos + this.height / 2);
	}

	this.checkCharOn = function () {

		if( realPos >= this.x_pos && realPos <= ( this.x_pos + width ) &&
			gameChar_y <= this.y_pos - 34 && gameChar_y >= this.y_pos - 35) {

			isOnPlatform = true;
		}
	}


}


function checkPlayerDie()
{
    if (gameChar_y > height)
    {
        playerDied();
    }
}

function playerDied()
{
    console.log('player died!');
    
    if (lives > 0)
    {
    	lives--;
        // Restart game.
        startGame();
    }
    else
    {
        // Game over, player lost.
        isLost = true;
    }
}


function nextLevel()
{
    // DO NOT CHANGE THIS FUNCTION!

    console.log('next level');
}