### The Game Project ###

#### Week 2 – part b ####

1. Inspect the code [0 marks]

2. Moveable game character [2 marks]
   - Create two global variables – one for the x position and another
     for the y position of the character
   - Initialise these with some sensible coordinate values in
     `setup`. HINT: you might use `floorPos_y` and `width`
   - Copy the code for the frontfacing character from part 1 a into
     the draw function of this code
   - Modify the code so that the game character's position is
     determined by the two variables that you created
   - In `mousePressed`, write code using `mouseX` and `mouseY` to
     change the value of your variables so that the character appears
     where you click the mouse

3. House with random position [2 marks]
   - Create two global variables for the x and y positions of the
     house
   - Initialise these with some sensible coordinate values in `setup`
   - Copy the code for the house from part 1b into the draw function
     of this code. HINT: `floorPos_y` might be useful here
   - In `setup` set the y variable so that the house sits on the green
     ground
   - In `setup` set the x variable using
     [random](https://p5js.org/reference/#/p5/random).
   - You should choose an appropriate parameters for this function so
     that the house might appear anywhere along the x-axis
   - Check the game character appears infront of the house. The game
     character must be drawn after the house is drawn.
  
4. Mountain [2 marks]
   - Create a global variable for the mountain/hill
   - In `setup`, initialise this variable with this object `{x_pos: 0,
     height: 100}`
   - Copy the code for the mountain from part 1b into the draw
     function of this code
   - Modify the code so that the property `x_pos` controls where the
     mountain is on the x-axis
   - Modify the code so that the property `height` controls how tall
     the mountain is
   - Check that the mountains are behind the house and the game
     character. This means that the mountains must be drawn first.

5. Trees & clouds [2 marks]
   - As with stage 4 create a new global variable and initialise it to
     an object for the tree
   - Copy the code into the draw function using `x_pos` and `height`
     to control the position and dimensions of the tree
   - Make sure that the tree appears infront of the mountains but
     behind the house
   - Now copy and paste the code to make several trees of different
     heights in different positions
   - Repeat the process to add several clouds to your game scene. The
     clouds should appear behind the mountain. You could use this
     object `{x_pos: 500, y_pos: 50, size: 100}`.

6. Add more properties and variation [2 marks]
   - For the final two marks add more properties to the trees and
     clouds to introduce variation.
   - You might vary the number of branches on the tree, or the number
     of ellipses which make up the cloud
   - You might add some colour variation to make grey clouds
   - A reasonable attempt will get 1 mark but for 2 marks you'll need
     to use your imagination.
