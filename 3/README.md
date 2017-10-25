### The Game Project

#### Week 3 – Game interaction

1. Inspect the code.

2. Create four global Boolean variables: `isLeft`, `isRight`,
   `isJumping`, and `isFalling`, and initialise each of them to
   `false`. These variables will be used to animate your game
   character.

3. Using the p5.js function
   [`keyPressed`](https://p5js.org/reference/#/p5/keyPressed), write
   two `if` statements such that:
   - when the left arrow key is pressed, `isLeft = true`;
   - when the right arrow key is pressed, `isRight = true`.
   - Test your logic using `console.log()` within `keyPressed` to
     check that the correct keys are being detected.
   - Hint: look up the difference between
     [`keyCode`](https://p5js.org/reference/#/p5/keyCode) and
     [`key`](https://p5js.org/reference/#/p5/key) to help you decide
     which variable you need to use.

4. Using the p5.js function
   [`keyReleased`](https://p5js.org/reference/#/p5/keyReleased), write
   two `if` statements such that:
   - when the left arrow key is released, `isLeft = false`;
   - when the right arrow key is release, `isRight = false`.
   - Test you logic using `console.log` within the `draw` function to
     check that the values of `isLeft` and `isRight` are changing
     correctly when you press and release the left and right arrow
     keys.
   - [2 marks]

5. Add your game character code from project 2 to this sketch. You
   need to place each block of character code within the appropriate
   `if` statement so that when the character is animated the correct
   image will be drawn.

6. In the `draw` function add two `if` statements such that:
   - when `isLeft` is `true` the character moves to the left;
   - when `isRight` is `true` the character moves to the right.
   - Test that your character moves left, right, and stops correctly
     when the arrow keys are pressed and released.
   - Hint: you need to use the `isLeft`, `isRight`, and `gameChar_x`
     variables.
   - [2 marks]

7. Next make your character jump! Add another `if` statement within
   `keyPressed` that makes the character jump when the space-bar is
   pressed. Your character should only be able to jump when touching
   the ground.
   - Hint: use the `isJumping` and `gameChar_y` variables.

8. Next implement gravity! After your character jumps in the air they
   should gradually fall back down to the ground. To achieve this you
   need to add an `if` statement to the `draw` function such that
   whenever the character is in the air they gradually fall back down
   until they reach `floorPos_y`.
   - Test that your character can jump facing forward, jump to the
     left, and jump to the right, and in each case that gravity brings
     them back to the ground.
   - [2 marks]
 - DONE SO FAR
9. To give the game an objective, we now need to add an item for the
   character to collect. Create an object to store the properties of
   your mystery item from project 1. The object should have the
   following four properties.
   - `x_pos`: `100`
   - `y_pos`: `100`
   - `size`: `50`
   - `isFound`: `false`
	-
10. Add your mystery item code from project 1 to the `draw`
    function. Your mystery items should be drawn using the properties
    defined in your mystery item object, and should only be drawn when
    `isFound` is `false`.
    - If your mystery item from last week is not pickup-able then
      design a new item.

11. Next implement collision detection between your character and the
    mystery item. Using an `if` statement in `draw`, specify a
    condition that is `true` when the character collides with the
    item. When the condition is `true`, set the value of `isFound` in
    the mystery item object to `false`.
    - When your character comes into contact with the mystery item the
      mystery item should disappear.
    - [2 marks]

12. To make the game more difficult implement collision detection
    between your character and the canyon. Write an `if` statement
    within `draw` such that when the character is over the canyon, if
    they are not jumping, `isFalling` is set to `true`. Animate your
    character falling by adding another `if` statements such that when
    `isFalling` is `true` the character will fall down the canyon.
    - Test that your character can both jump over and fall into the
      canyon.
    - [2 marks]
