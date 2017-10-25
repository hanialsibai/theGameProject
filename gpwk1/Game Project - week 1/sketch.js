/*

The Game Project

Week 1 - part b

Use p5 drawing functions such as rect, ellipse, line, triangle and point to draw the scenery as set out in the comments below. The items should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = You've used lots of shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to imaginatively modify these and interpret the scenery titles loosely to match your game theme.


*/

var cloud_x;
var cloud_y;

function setup() {
	
    createCanvas(1200,600);	
}

function draw() 
{    background(170);
	    
        
 // Draw cloud
 
 // cloud side left
 	fill(255);
 	noStroke();
    cloud_x = 1040;
	for(cloud_y = 520; cloud_y > 470; cloud_y -= 5){
		
		rect(width - cloud_x, height - cloud_y, 5, 5);
		cloud_x = cloud_x - 5;
	 	
 }
 // cloud bottom
 	fill(255);
 	stroke(255);
 	strokeWeight(5);
 	line(width - 990, height - 473, width - 940, height - 473);
 
 // cloud top
 	fill(255);
 	stroke(255);
 	strokeWeight(5);
 	line(width - 1039, height - 521, width - 890, height - 521);
 
 // cloud side right
 
 	fill(255);
 	noStroke();
    cloud_x = 890;
	for(cloud_y = 520; cloud_y > 470; cloud_y -= 5){
		
		rect(width - cloud_x, height - cloud_y, 5, 5);
		cloud_x +=5;
	 	
 }
 
 	noStroke();
    fill(255);
    text("cloud", 200,100);
 
 
 	//ground
    noStroke();
    fill(80); 
    rect(0, height * 3/4,width, height/4); 
	stroke(255, 0 , 0);
	fill(255, 0, 0);
	
 // coordonates tool
 	stroke(255);
 	strokeWeight(1);
 	textSize(10);
    text("X: " + mouseX + " Y:" + mouseY, mouseX,mouseY);
    
   	//2. a mountain in the distance
 	var mountain_x;
 	var mountain_y;
 	
 // mountain side right
 	fill(255);
 	stroke(70);
 	strokeWeight(4);
 	mountain_x = 640;
	for(mountain_y = 290; mountain_y > 150; mountain_y -= 5){
		
		rect(width - mountain_x, height - mountain_y, 5, 5);
		mountain_x = mountain_x - 5;
 
	}
 
 // mountain side left
 
 	fill(255);
 	stroke(70);
 	strokeWeight(4);
 	mountain_x = 705;
	for(mountain_y = 290; mountain_y > 150; mountain_y -= 5){
		
		rect(width - mountain_x, height - mountain_y, 5, 5);
		mountain_x += 5;
 
	}
 
 // mountain bottom
 	stroke(70);
 	strokeWeight(4);
 	line(362, 450, 693, 450);
 
 // mountain top
 	noFill();
 	stroke(166, 34, 34);
 	ellipse(530, 313, 55, 48);
 
    noStroke();
    fill(255);
    text("mountain", 500,height/2);
    
    //3. a tree 
   
    fill(80);
 	noStroke();
 	
 	rect(770, 327, 35, 125);
    
 	fill(255);
 	stroke(255);
 	noFill();
 
 	beginShape()
 	vertex(774, 325);
 	vertex(724, 324);
 	vertex(766, 283);
 	vertex(721, 296);
 	vertex(784, 228);
 	vertex(728, 265);
 	vertex(801, 165);
 	vertex(840, 217);
 	vertex(802, 217);
 	vertex(854, 259);
 	vertex(798, 249);
 	vertex(848, 287);
 	vertex(807, 286);
 	vertex(850, 322);
 	endShape(CLOSE);
    fill(255);
    text("tree", 800, height * 0.6);
    
    //4. a house

 //frame
 	noFill();
 	stroke(120);
 	rect(65, 361, 120, 88);
 	//roof
 	stroke(0);
 	triangle(50, 361, 197, 360, 128, 255);
 	// door
 	stroke(80);
 	rect(105, 408, 30, 43);
 	ellipse(127, 433, 5, 5);
 	strokeWeight(3);
 	line(88, 373, 88, 398);
 	line(137, 390, 163, 390);
 
 	// windows
 	ellipse(88, 386, 30, 30);
 	ellipse(150, 391, 30, 30);
   	
    noStroke();
    fill(255);
    text("house", 100, height * 0.6);
    
    //5. Great totem
  
 	noFill();
 	stroke(255);
 	ellipse(1051, 427, 90, 40);
 	ellipse(1049, 388, 70, 30);
   	ellipse(1049, 359, 60, 20);
 	ellipse(1047, 330, 30, 30);
    noStroke();
    fill(255);
    text("Great totem", 1050, height * 0.7);
    
    
}