/*

The Game Project

Week 2 part b

*/

var floorPos_y;

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

var cloud;

var housePos_x;
var housePos_y;

var tree;

var mountain;

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
	
function setup() 
{
    createCanvas(1024, 576);
    floorPos_y = height*3/4; //NB. we are now using a variable for the floor position
	
// character initial position
	
	charPos_x = width/3;
	charPos_y = floorPos_y;

// house initial position
	
	housePos_x = random( -65, 950 );
	housePos_y = floorPos_y * 5/6;
	
	mountain = {
		x_pos : 175,
		height : 150
	};	
	
	tree = {
	x_pos: 300,
	y_pos: 350, 
	size: 125 * random( 1, 4),
	color1 : random( 0, 255),
	color2 : random( 0, 255),
	color3 : random( 0, 255),
	randHeight1: random( 1, 3),
	randHeight2: random( 1, 3),
	randHeight3: random( 1, 2)
};
	
	cloud = {
		x_pos : 160,
		y_pos : 56,
		size : 5,
		rand : random( - 60, 700),
	 	rand2 : random( - 20, 180),
		rand3 : random( - 60, 700),
		rand4 : random( - 20, 180),
		color1: random( 0, 255),
		color2: random( 0, 255),
		color3: random( 0, 255)
	};
	
	
}

function draw() 
{    
    background(170); //fill the sky blue
    
    noStroke();
    fill(80);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
	
	// clouds
	fill( cloud.color1);
	ellipse( cloud.x_pos - 10, cloud.y_pos, 20, 35);
	ellipse( cloud.x_pos - 20, cloud.y_pos, 20, 35);
	ellipse( cloud.x_pos + 10, cloud.y_pos, 20, 35);
	ellipse( cloud.x_pos + 20, cloud.y_pos, 20, 35);
	ellipse( cloud.x_pos, cloud.y_pos, 20, 35);
	ellipse( cloud.x_pos, cloud.y_pos, 100, 20);
	
	// cloud 2
	 
	fill( cloud.color2);
	ellipse( cloud.x_pos - 10 + cloud.rand, cloud.y_pos + cloud.rand2, 20, 35);
	ellipse( cloud.x_pos - 20 + cloud.rand, cloud.y_pos + cloud.rand2, 20, 35);
	ellipse( cloud.x_pos + 10 + cloud.rand, cloud.y_pos + cloud.rand2, 20, 35);
	ellipse( cloud.x_pos + 20 + cloud.rand, cloud.y_pos + cloud.rand2, 20, 35);
	ellipse( cloud.x_pos + cloud.rand, cloud.y_pos + cloud.rand2, 20, 35);
	ellipse( cloud.x_pos + cloud.rand, cloud.y_pos + cloud.rand2, 100, 20);
	
	// cloud 3
	
	fill( cloud.color3);
	ellipse( cloud.x_pos - 10 + cloud.rand3, cloud.y_pos + cloud.rand4, 20, 35);
	ellipse( cloud.x_pos - 20 + cloud.rand3, cloud.y_pos + cloud.rand4 , 20, 35);
	ellipse( cloud.x_pos + 10+ cloud.rand3, cloud.y_pos + cloud.rand4, 20, 35);
	ellipse( cloud.x_pos + 20+ cloud.rand3, cloud.y_pos + cloud.rand4, 20, 35);
	ellipse( cloud.x_pos + cloud.rand3, cloud.y_pos + cloud.rand4, 20, 35);
	ellipse( cloud.x_pos + cloud.rand3, cloud.y_pos + cloud.rand4, 100, 20);
	
	
	
	// small mountain
	
	fill( 120 );
	stroke( 50 );
	strokeWeight(2);
	triangle( mountain.x_pos + relative.mountain_x + 25, floorPos_y - mountain.height + 25, mountain.x_pos + relative.mountain_x - 35 - mountain.height * 1/3, floorPos_y , mountain.x_pos + relative.mountain_x + 55 + mountain.height * 1/3, floorPos_y);
	
	// MOUNTAIN
	fill(110);
	stroke(0);
	strokeWeight(3);
 	triangle( mountain.x_pos + relative.mountain_x ,floorPos_y - mountain.height, mountain.x_pos + relative.mountain_x - 35 - mountain.height * 1/3, floorPos_y , mountain.x_pos + relative.mountain_x + 35 + mountain.height * 1/3, floorPos_y);
	

 
 // mountain top
 	fill( 30);
 	stroke(166, 34, 34);
	strokeWeight(4);
 	ellipse(mountain.x_pos + relative.mountain_x, floorPos_y - mountain.height + relative.mountain_y, 45, 35);
	strokeWeight(2);
	fill(220, 20, 60, 120);
	ellipse( mountain.x_pos + relative.mountain_x, floorPos_y - mountain.height + relative.mountain_y, 9, 25);
	
// tree
   
    fill(80);
 	noStroke();
	
	tree.x_pos =300,
	tree.y_pos = 350, 
	tree.size =125 * tree.randHeight1;
 	
 	rect(tree.x_pos ,  tree.y_pos - tree.size * 1/4, 35, tree.size);
    // relative.tree_x, relative.tree_y
 	fill(255);
 	stroke(tree.color1);
 	noFill();
 
 	beginShape()
 	vertex(tree.x_pos - relative.tree_x + 774, tree.y_pos - relative.tree_y + 325 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 724, tree.y_pos - relative.tree_y + 324 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 766, tree.y_pos - relative.tree_y + 283 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 721, tree.y_pos - relative.tree_y + 296 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 784, tree.y_pos - relative.tree_y + 228 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 728, tree.y_pos - relative.tree_y + 265 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 801, tree.y_pos - relative.tree_y + 165 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 840, tree.y_pos - relative.tree_y + 217 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 802, tree.y_pos - relative.tree_y + 217 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 854, tree.y_pos - relative.tree_y + 259 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 798, tree.y_pos - relative.tree_y + 249 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 848, tree.y_pos - relative.tree_y + 287 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 807, tree.y_pos - relative.tree_y + 286 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 850, tree.y_pos - relative.tree_y + 322-  tree.size * 1/4);
 	endShape(CLOSE);
	
	// tree 2
	 fill(80);
 	noStroke();
 	tree.x_pos = 80;
	tree.y_pos = 350;
	tree.size = 225 * tree.randHeight2;
 	rect(tree.x_pos ,  tree.y_pos - tree.size * 1/4 , 35, tree.size);
    // relative.tree_x, relative.tree_y
 	fill(255);
 	stroke(tree.color2);
 	noFill();
 
 	beginShape()
 	vertex(tree.x_pos - relative.tree_x + 774, tree.y_pos - relative.tree_y + 325 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 724, tree.y_pos - relative.tree_y + 324 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 766, tree.y_pos - relative.tree_y + 283 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 721, tree.y_pos - relative.tree_y + 296 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 784, tree.y_pos - relative.tree_y + 228 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 728, tree.y_pos - relative.tree_y + 265 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 801, tree.y_pos - relative.tree_y + 165 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 840, tree.y_pos - relative.tree_y + 217 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 802, tree.y_pos - relative.tree_y + 217 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 854, tree.y_pos - relative.tree_y + 259 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 798, tree.y_pos - relative.tree_y + 249 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 848, tree.y_pos - relative.tree_y + 287 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 807, tree.y_pos - relative.tree_y + 286 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 850, tree.y_pos - relative.tree_y + 322-  tree.size * 1/4);
 	endShape(CLOSE);
	
	
	// tree 3
	 fill(80);
 	noStroke();
 	tree.x_pos = 700;
	tree.y_pos = 350;
	tree.size = 525 * tree.randHeight3;
 	rect(tree.x_pos ,  tree.y_pos - tree.size * 1/4 , 35, tree.size);
    // relative.tree_x, relative.tree_y
 	fill(255);
 	stroke(tree.color3);
 	noFill();
 
 	beginShape()
 	vertex(tree.x_pos - relative.tree_x + 774, tree.y_pos - relative.tree_y + 325 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 724, tree.y_pos - relative.tree_y + 324 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 766, tree.y_pos - relative.tree_y + 283 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 721, tree.y_pos - relative.tree_y + 296 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 784, tree.y_pos - relative.tree_y + 228 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 728, tree.y_pos - relative.tree_y + 265 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 801, tree.y_pos - relative.tree_y + 165 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 840, tree.y_pos - relative.tree_y + 217 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 802, tree.y_pos - relative.tree_y + 217 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 854, tree.y_pos - relative.tree_y + 259 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 798, tree.y_pos - relative.tree_y + 249 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 848, tree.y_pos - relative.tree_y + 287 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 807, tree.y_pos - relative.tree_y + 286 - tree.size * 1/4);
 	vertex(tree.x_pos - relative.tree_x + 850, tree.y_pos - relative.tree_y + 322-  tree.size * 1/4);
 	endShape(CLOSE);
	//HOUSE
	
 //frame
 	fill(100);
 	stroke(120);
 	rect(housePos_x + 65,  housePos_y, 120, 88);
	
 // roof
 	stroke(0);
	fill(170);
 	triangle(housePos_x + 50, 361, housePos_x + 197, 360, housePos_x + 128, 255);
	
 //  door
 	stroke(80);
	strokeWeight(1);
 	rect(housePos_x + 105, 408, 30, 40);
	
// doorknob
	
 	ellipse(housePos_x +127, 433, 5, 5);
 	strokeWeight(3);
 	
 
 // windows
	fill(180, 100);
	stroke(0);
	
 	ellipse(housePos_x + 88, 386, 30, 30);
 	ellipse(housePos_x + 150, 391, 30, 30);
	line(housePos_x + 88, 373, housePos_x +88, 398);
 	line(housePos_x + 137, 390, housePos_x + 163, 390);

// CHARACTER
	
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

function mousePressed()
{
	charPos_x = mouseX;
	charPos_y = mouseY;
    
}

