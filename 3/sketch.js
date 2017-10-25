/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft = false;
var isRight = false;
var isJumping = false;
var isFalling = false;
var controls;

var charPos_x;
var charPos_y;

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

var jewel = {x_pos: 100, y_pos: 100, size: 50, isFound: false};
var canyon = {x_pos: 300, width: 100};

function setup()
{
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
   charPos_x = width/2;
   charPos_y = floorPos_y;
	
	controls = {
		jump : 38,
		left : 37,
		right : 39
	};
	
	
}

function draw()
{
    background(100,155,255); //fill the sky blue

    noStroke();
    fill(0,155,0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground


    //draw the canyon
    fill(50,50,0);
    rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);
	
	


    //the game character
    if(isLeft && isJumping)
    {
        // jumping-left 
		 
		 // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		 
		triangle(charPos_x + 36 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 50 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 43 + relative.torso_x, charPos_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		 
		rect( charPos_x + 40 + relative.torso_x, charPos_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		 
		rect(charPos_x + 38 + relative.torso_x, charPos_y + 71 + relative.torso_y, head.width - 4, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		 
		ellipse(charPos_x + 40 + relative.torso_x, charPos_y + 78 + relative.torso_y, 5, 4);
		 
		stroke(0);
		point(charPos_x + 40 + relative.torso_x, charPos_y + 78 + relative.torso_y);
		 
		 // torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		 
		rect( charPos_x + 36  + relative.torso_x , charPos_y + 88 + relative.torso_y , torso.width - 9, torso.height);
		
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		 
		triangle( charPos_x + 32 + relative.torso_x, charPos_y + 112 + relative.torso_y, charPos_x + 26 + relative.torso_x, charPos_y + 116 + relative.torso_y, charPos_x + 32 + relative.torso_x, charPos_y + 120 + relative.torso_y );
		 
		rect( charPos_x + 32 + relative.torso_x, charPos_y + 112 + relative.torso_y, leg.width, leg.height);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		 
		triangle(charPos_x + 28 + relative.torso_x, charPos_y + 116 + relative.torso_y, charPos_x + 22 + relative.torso_x, charPos_y + 112 + relative.torso_y, charPos_x + 22 + relative.torso_x, charPos_y + 120 + relative.torso_y);
		
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		 
		ellipse( charPos_x + 43 + relative.torso_x, charPos_y + 110 - 103, 10, 10);
		fill(100);
		rect( charPos_x + 40 + relative.torso_x , charPos_y + 88 + relative.torso_y, arm.width, arm.height);
	
    }
    else if(isRight && isJumping)
    {
        // jumping-right
		 
		  // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		 
		triangle(charPos_x + 36 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 50 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 43 + relative.torso_x, charPos_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		 
		rect( charPos_x + 40 + relative.torso_x, charPos_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		 
		rect(charPos_x + 38 + relative.torso_x, charPos_y + 71 + relative.torso_y, head.width - 4, head.height);
		
	// right eye 
		noStroke();
		fill( 230);
		 
		ellipse(charPos_x + 46 + relative.torso_x, charPos_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(charPos_x + 46 + relative.torso_x, charPos_y + 78 + relative.torso_y);
		 
		 // torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		 
		rect( charPos_x + 36  + relative.torso_x , charPos_y + 88 + relative.torso_y , torso.width - 9, torso.height);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		 
		triangle( charPos_x + 53 + relative.torso_x , charPos_y + 112 + relative.torso_y, charPos_x + 63 + relative.torso_x, charPos_y + 116 + relative.torso_y, charPos_x + 54 + relative.torso_x, charPos_y + 120 + relative.torso_y);
		rect( charPos_x + 46 + relative.torso_x, charPos_y + 112 + relative.torso_y, leg.width, leg.height);
		
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		 
		triangle(charPos_x + 60 + relative.torso_x , charPos_y + 116 + relative.torso_y, charPos_x + 68 + relative.torso_x, charPos_y + 112 + relative.torso_y , charPos_x + 68 + relative.torso_x, charPos_y + 120 + relative.torso_y);
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		 
		ellipse( charPos_x + 43 + relative.torso_x , charPos_y + 110 + relative.torso_y, 10, 10);
		 
		fill(100);
		rect( charPos_x + 39 + relative.torso_x , charPos_y + 88 + relative.torso_y, arm.width, arm.height);
	

    }
    else if(isLeft)
    {
        // walking left
		 
		 // standing facing forwards
		 
       // hat
		 
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		
		triangle(charPos_x + 36 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 50 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 43 + relative.torso_x, charPos_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( charPos_x + 40 + relative.torso_x, charPos_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(charPos_x + 38 + relative.torso_x, charPos_y + 71 + relative.torso_y, head.width - 4, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(charPos_x + 40 + relative.torso_x, charPos_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(charPos_x + 40 + relative.torso_x, charPos_y + 78 + relative.torso_y);
		
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		 
		triangle( charPos_x + 39 + relative.torso_x, charPos_y + 127 + relative.torso_y, charPos_x + 48 + relative.torso_x, charPos_y + 127 + relative.torso_y, charPos_x + 43 + relative.torso_x, charPos_y + 133 + relative.torso_y );
		rect( charPos_x + 39 + relative.torso_x, charPos_y + 117 + relative.torso_y, leg.width, leg.height);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		 
		triangle(charPos_x + 43 + relative.torso_x, charPos_y + 133 + relative.torso_y, charPos_x + 48 + relative.torso_x, charPos_y + 137 + relative.torso_y, charPos_x + 38 + relative.torso_x, charPos_y + 137 + relative.torso_y);
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		 
		rect( charPos_x + 36 + relative.torso_x , charPos_y + 88 + relative.torso_y , torso.width - 9, torso.height);
	
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		 
		ellipse( charPos_x + 43 + relative.torso_x, charPos_y + 110 - 103, 10, 10);
		fill(100);
		rect( charPos_x + 40 + relative.torso_x , charPos_y + 88 + relative.torso_y, arm.width, arm.height);
	

		 
		 
    }
    else if(isRight)
    {
        // walking right 
		 
		  // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		 
		triangle(charPos_x + 36 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 50 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 43 + relative.torso_x, charPos_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( charPos_x + 40 + relative.torso_x, charPos_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		 
		rect(charPos_x + 38 + relative.torso_x, charPos_y + 71 + relative.torso_y, head.width - 4, head.height);
		
	// right eye 
		noStroke();
		fill( 230);
		 
		ellipse(charPos_x + 46 + relative.torso_x, charPos_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(charPos_x + 46 + relative.torso_x, charPos_y + 78 + relative.torso_y);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		 
		triangle( charPos_x + 39 + relative.torso_x , charPos_y + 127 + relative.torso_y, charPos_x + 48 + relative.torso_x, charPos_y + 127 + relative.torso_y, charPos_x + 43 + relative.torso_x, charPos_y + 133 + relative.torso_y);
		rect( charPos_x + 39 + relative.torso_x, charPos_y + 117 + relative.torso_y, leg.width, leg.height);
		
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		 
		triangle(charPos_x + 43 + relative.torso_x , charPos_y + 133 + relative.torso_y, charPos_x + 48 + relative.torso_x, charPos_y + 137 + relative.torso_y , charPos_x + 38 + relative.torso_x, charPos_y + 137 + relative.torso_y);
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		 
		rect( charPos_x + 36  + relative.torso_x , charPos_y + 88 + relative.torso_y , torso.width - 9, torso.height);
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		 
		ellipse( charPos_x + 43 + relative.torso_x , charPos_y + 110 + relative.torso_y, 10, 10);
		fill(100);
		rect( charPos_x + 39 + relative.torso_x , charPos_y + 88 + relative.torso_y, arm.width, arm.height);
	

    }
	
    else if(isJumping || isFalling)
    {   
		 // jumping facing forwards
        // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(charPos_x + 36 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 50 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 43 + relative.torso_x, charPos_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( charPos_x + 40 + relative.torso_x, charPos_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(charPos_x + 36 + relative.torso_x, charPos_y + 71 + relative.torso_y, head.width, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(charPos_x + 46 + relative.torso_x, charPos_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(charPos_x + 46 + relative.torso_x, charPos_y + 78 + relative.torso_y);
		
	// right eye 
		noStroke();
		fill( 230);
		ellipse(charPos_x + 40 + relative.torso_x, charPos_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(charPos_x + 40 + relative.torso_x, charPos_y + 78 + relative.torso_y);
		
	// mouth
		stroke(255);
		line(charPos_x + 43 + relative.torso_x, charPos_y + 82 + relative.torso_y, charPos_x + 45 + relative.torso_x, charPos_y + 82 + relative.torso_y);
		 
		 // torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( charPos_x + 33  + relative.torso_x , charPos_y + 88 + relative.torso_y , torso.width, torso.height);
		 
		 // left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( charPos_x + 57 + relative.torso_x, charPos_y + 110 - 103, 10, 10);
		fill(100);
		rect( charPos_x + 53 + relative.torso_x , charPos_y + 88 + relative.torso_y, arm.width, arm.height);

		 // right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( charPos_x + 30 + relative.torso_x , charPos_y + 110 + relative.torso_y, 10, 10);
		fill(100);
		rect( charPos_x + 26 + relative.torso_x , charPos_y + 88 + relative.torso_y, arm.width, arm.height);
		 
		 
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		rect( charPos_x + 49 + relative.torso_x, charPos_y + 117 + relative.torso_y, leg.width, leg.height - 5);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		rect( charPos_x + 32 + relative.torso_x, charPos_y + 117 + relative.torso_y, leg.width, leg.height - 5);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(charPos_x + 53 + relative.torso_x, charPos_y + 113 + relative.torso_y, charPos_x + 49 + relative.torso_x, charPos_y + 127 + relative.torso_y, charPos_x + 58 + relative.torso_x, charPos_y + 127 + relative.torso_y);
		
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(charPos_x + 36 + relative.torso_x , charPos_y + 113 + relative.torso_y, charPos_x + 41 + relative.torso_x, charPos_y + 127 + relative.torso_y , charPos_x + 31 + relative.torso_x, charPos_y + 127 + relative.torso_y);
	
    }
    else
    { // standing facing forwards
       // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(charPos_x + 36 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 50 + relative.torso_x, charPos_y + 71 + relative.torso_y, charPos_x + 43 + relative.torso_x, charPos_y + 60 + relative.torso_y);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( charPos_x + 40 + relative.torso_x, charPos_y + 82 + relative.torso_y, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(charPos_x + 36 + relative.torso_x, charPos_y + 71 + relative.torso_y, head.width, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(charPos_x + 46 + relative.torso_x, charPos_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(charPos_x + 46 + relative.torso_x, charPos_y + 78 + relative.torso_y);
		
	// right eye 
		noStroke();
		fill( 230);
		ellipse(charPos_x + 40 + relative.torso_x, charPos_y + 78 + relative.torso_y, 5, 4);
		stroke(0);
		point(charPos_x + 40 + relative.torso_x, charPos_y + 78 + relative.torso_y);
		
	// mouth
		stroke(255);
		line(charPos_x + 43 + relative.torso_x, charPos_y + 82 + relative.torso_y, charPos_x + 45 + relative.torso_x, charPos_y + 82 + relative.torso_y);

	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( charPos_x + 49 + relative.torso_x, charPos_y + 127 + relative.torso_y, charPos_x + 58 + relative.torso_x, charPos_y + 127 + relative.torso_y, charPos_x + 53 + relative.torso_x, charPos_y + 133 + relative.torso_y );
		rect( charPos_x + 49 + relative.torso_x, charPos_y + 117 + relative.torso_y, leg.width, leg.height);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( charPos_x + 32 + relative.torso_x , charPos_y + 127 + relative.torso_y, charPos_x + 41 + relative.torso_x, charPos_y + 127 + relative.torso_y, charPos_x + 36 + relative.torso_x, charPos_y + 133 + relative.torso_y);
		rect( charPos_x + 32 + relative.torso_x, charPos_y + 117 + relative.torso_y, leg.width, leg.height);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(charPos_x + 53 + relative.torso_x, charPos_y + 133 + relative.torso_y, charPos_x + 58 + relative.torso_x, charPos_y + 137 + relative.torso_y, charPos_x + 48 + relative.torso_x, charPos_y + 137 + relative.torso_y);
		
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(charPos_x + 36 + relative.torso_x , charPos_y + 133 + relative.torso_y, charPos_x + 41 + relative.torso_x, charPos_y + 137 + relative.torso_y , charPos_x + 31 + relative.torso_x, charPos_y + 137 + relative.torso_y);
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( charPos_x + 33  + relative.torso_x , charPos_y + 88 + relative.torso_y , torso.width, torso.height);
	
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( charPos_x + 57 + relative.torso_x, charPos_y + 110 - 103, 10, 10);
		fill(100);
		rect( charPos_x + 53 + relative.torso_x , charPos_y + 88 + relative.torso_y, arm.width, arm.height);
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( charPos_x + 30 + relative.torso_x , charPos_y + 110 + relative.torso_y, 10, 10);
		fill(100);
		rect( charPos_x + 26 + relative.torso_x , charPos_y + 88 + relative.torso_y, arm.width, arm.height);
	
    }
	
	if( isLeft ) {
		
		charPos_x -= 5;
	}
	if( isRight) {
		
		charPos_x += 5;
	}
	
	if( isJumping && floorPos_y - charPos_y < 50 ) {
		
		charPos_y -= 5;
	}
	
	if( charPos_y < floorPos_y  && !isJumping) {
			
			charPos_y += 1;
		}
	

	
	
	
}


function keyPressed()
{
  	if( keyCode == controls.left ) {
		
		isLeft = true;
	}
	
	if ( keyCode == controls.right ) {
		
		isRight = true;
	}
	
	if( keyCode == controls.jump && charPos_y == floorPos_y ) {
		
		isJumping = true;
		 
	}
}


function keyReleased()
{
    if( keyCode == controls.left ) {
		 
		 isLeft = false;
	 }
	
	if( keyCode == controls.right ) {
		
		isRight = false;
	}
	
	if( keyCode == controls.jump ) {
		
		isJumping = false;
	}
		
}
