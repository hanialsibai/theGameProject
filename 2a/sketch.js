/*

The Game Project

Week 2 - part a

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used lots of shape functions to create a detailed
game character

** Only submit your sketch.js **

*/

function setup()
{
    createCanvas(400, 600);
}

function draw()
{
    background(255);
    		stroke(255);
       	strokeWeight(3);
        	textSize(10);
        	text("X: " + mouseX + " Y:" + mouseY, mouseX,mouseY);
        
    //Standing, facing frontwards
    stroke(100);
    noFill();
    rect(20, 60, 50, 80);
    noStroke();
    fill(0);
    text("1. standing front facing", 20, 160);
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
	
	// hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(36, 71, 50, 71, 43, 60);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( 40, 82, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(36, 71, head.width, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(46, 78, 5, 4);
		stroke(0);
		point(46, 78);
		
	// right eye 
		noStroke();
		fill( 230);
		ellipse(40, 78, 5, 4);
		stroke(0);
		point(40, 78);
		
	// mouth
		stroke(255);
		line( 43, 82, 45, 82);
	
	
	
		
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( 49, 127, 58, 127, 53, 133 );
		rect( 49, 117, leg.width, leg.height);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( 32, 127, 41, 127, 36, 133 );
		rect( 32, 117, leg.width, leg.height);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(53, 133, 58, 137, 48, 137);
		
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(36, 133, 41, 137, 31, 137);
	
		
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( 33, 88, torso.width, torso.height);
	
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( 57, 110, 10, 10);
		fill(100);
		rect( 53, 88, arm.width, arm.height);
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( 30, 110, 10, 10);
		fill(100);
		rect( 26, 88, arm.width, arm.height);
		
    //Jumping facing forwards
    stroke(100);
    noFill();
    rect(220, 60, 50, 80);
    noStroke();
    fill(0);
    text("2. jumping facing forwards", 220, 160);

	// hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(236, 71, 250, 71, 243, 60);
	
  // neck
	
		noStroke();
		fill( 200 );
		rect( 240, 82, neck.width, neck.height);

	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(236, 71, head.width, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(246, 78, 5, 4);
		stroke(0);
		point(246, 78);
		
	// right eye 
		noStroke();
		fill( 230);
		ellipse(240, 78, 5, 4);
		stroke(0);
		point(240, 78);
		
	// mouth
		stroke(255);
		line( 243, 82, 245, 82);
	
	

	// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( 233, 88, torso.width, torso.height);
	
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( 257, 110, 10, 10);
		fill(100);
		rect( 253, 88, arm.width, arm.height);
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( 230, 110, 10, 10);
		fill(100);
		rect( 226, 88, arm.width, arm.height);
	
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		rect( 249, 117, leg.width, leg.height - 5);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		rect( 232, 117, leg.width, leg.height -5 );
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(253, 113, 249, 127, 258, 127);
	
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(236, 113, 241, 127, 231, 127);
	
    //Walking, turned left
    stroke(100);
    noFill();
    rect(20, 260, 50, 80);
    noStroke();
    fill(0);
    text("3. Walking left", 20, 360);

  // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(36, 271, 50, 271, 43, 260);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( 40, 282, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(38, 271, head.width - 4, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(40, 278, 5, 4);
		stroke(0);
		point(40, 278);
		
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( 39, 327, 48, 327, 43, 333 );
		rect( 39, 317, leg.width, leg.height);

	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(43, 333, 48, 337, 38, 337);
		
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( 36, 288, torso.width - 9, torso.height);
	
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( 43, 310, 10, 10);
		fill(100);
		rect( 40, 288, arm.width, arm.height);

    //Walking, turned right
    stroke(100);
    noFill();
    rect(220, 260, 50, 80);
    noStroke();
    fill(0);
    text("4. Walking right", 220, 360);

    // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(236, 271, 250, 271, 243, 260);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( 240, 282, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(238, 271, head.width - 4, head.height);
	
	// right eye 
		noStroke();
		fill( 230);
		ellipse(246, 278, 5, 4);
		stroke(0);
		point(246, 278);
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( 239, 327, 248, 327, 243, 333 );
		rect( 239, 317, leg.width, leg.height);
	
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(243, 333, 248, 337, 238, 337);
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( 236, 288, torso.width - 9, torso.height);
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( 243, 310, 10, 10);
		fill(100);
		rect( 239, 288, arm.width, arm.height);


    //Jumping left
    stroke(100);
    noFill();
    rect(20, 460, 50, 80);
    noStroke();
    fill(0);
    text("5. Jumping to the left", 20, 560);
	
	 // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(36, 471, 50, 471, 43, 460);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( 40, 482, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(38, 471, head.width - 4, head.height);
	
	// left eye
		noStroke();
		fill( 230);
		ellipse(40, 478, 5, 4);
		stroke(0);
		point(40, 478);
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( 36, 488, torso.width - 9, torso.height);
	
	// left leg
		
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( 32, 512, 26, 516, 32, 520 );
		rect( 32, 512, leg.height, leg.width);
	
	// left boot
		
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(28, 516, 22, 512, 22, 520);
	
	// left arm
		
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( 43, 510, 10, 10);
		fill(100);
		rect( 40, 488, arm.width, arm.height);
  


    //Jumping to the left
    stroke(100);
    noFill();
    rect(220, 460, 50, 80);
    noStroke();
    fill(0);
    text("6. Jumping to the right", 220, 560);

    // hat
		stroke( 255, 0, 0);
		fill( 234, 0, 0, 190);
		triangle(236, 471, 250, 471, 243, 460);
	
	// neck
	
		noStroke();
		fill( 200 );
		rect( 240, 482, neck.width, neck.height);
	
	// head
		
		stroke(0);
		strokeWeight(1);
		fill( 150);
		rect(238, 471, head.width - 4, head.height);
	
	// right eye 
		noStroke();
		fill( 230);
		ellipse(246, 478, 5, 4);
		stroke(0);
		point(246, 478);
	
		// torso
		
		stroke(0);
		strokeWeight(1);
		fill(120);
		rect( 236, 488, torso.width - 9, torso.height);
	
	
	// right leg
		stroke(0);
		fill(100);
		strokeWeight(1);
		triangle( 253, 512, 263, 516, 254, 520 );
		rect( 246, 512, leg.height, leg.width);
		
	
	// right boot
	
		stroke(0);
		fill(60);
		strokeWeight(1);
		triangle(260, 516, 268, 512, 268, 520);
	
	
	// right arm
		stroke(0);
		strokeWeight(1);
		fill( 15);
		ellipse( 243, 510, 10, 10);
		fill(100);
		rect( 239, 488, arm.width, arm.height);


}
