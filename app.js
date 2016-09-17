$( function() {


  //MVP 1 - An interactive board which renders on page load
  var board = function(){
    for (var i = 1; i < 43; i++) {
      var square = $("<div class='square'></div>");
      square.attr('id', i);
      $('#board').prepend(square);
    };
  }
  board();

  // MVP 2 -  A way for players to mark an empty space on their turn
  var buttonsRow = function(){
    for (var i = 1; i < 8; i++) {
      var button = $("<button class='button' >Drop</button>");
      button.attr('id', i);
      button.on('click',console.log('clicked'));
      $('#buttonsRow').append(button);
      };
    }
    buttonsRow();
});

  // MVP 3 - The turns should alternate (red, black, red, black, etc.)
      // var startGame = function () {
      //   $buttonStart.on('click',console.log(clicked);)
      // }
      // startGame()

  // MVP 4 - A player should not be able to mark a space that has already been played
      // condition to play => value z === white
      //
      // }


  // MVP 5 - The game should announce a winner if a player gets four tokens in a row, horizontally or vertically

        LESSON LEARNT!
        The approach to create a programm comes from:
          1 - identify the problems/goals we want to achieve;
                  in this case is to declare a winner
          2 - identify the organization/structure/parameters of the dataset to achieve that!
                  in this case became obvious we need location x,y and a state white,red,black for the 42 squares of the board
          3 - Once the organization is done think about interaction with this dataset!
                  Output: in this case declare winner when a condition is met
                  Input: in this case how we change the z values inside the board
          4 - once this is done create the visual interface so that a user can play!
                  visualization of the dataset is the board
                  to input a new value in z we have buttons that the user click and changes the value in z
                  the output is when the final goal or condition is met, in this case is to declare a winner, (4 equal z values)


        Problem: to ensure programm is capable of find winner it needs to:
          - know the location (x,y) and its state (white,red,black)

        Solution: create positions/ coordinates and store a state!
        the var 'board' should have 42 elements (will match the 42 divs),
        each element has 3 keys&values => locationX, locationY, state(white,red,black)
        (x,y,z) has parameters
        something like {x,y} so the x and y will be the parameters of the function location
        var board = function (x,y,z){

        var x = [1,2,3,4,5,6,7]     // must have 'x' for horizontal location
        var y = [1,2,3,4,5,6]       // must have 'y' for vertical location
        var z = [white,red,black]   // must have 'z' for state storage & white means empty/free

        var board = function(x,y,z){
          var 36={x=1, y=6, z=empty} var 37={x=2, y=6, z=empty} .......... var 42={x=7, y=6, z=empty}
          var 29={x=1, y=5, z=empty} var 30={x=2, y=5, z=empty} .......... var 35={x=7, y=6, z=empty}
          var 22={x=1, y=4, z=empty} var 23={x=2, y=4, z=empty} .......... var 28={x=7, y=6, z=empty}
          var 15={x=1, y=3, z=empty} var 16={x=2, y=3, z=empty} .......... var 21={x=7, y=6, z=empty}
          var 08={x=1, y=2, z=empty} var 09={x=2, y=2, z=empty} .......... var 14={x=7, y=6, z=empty}
          var 01={x=1, y=1, z=empty} var 02={x=2, y=1, z=empty} .......... var 07={x=7, y=6, z=empty}
        }

        PROBLEM: "How to build this dinamically?"
        NOTE TO SELF: The programms is storing data in the "var board"! the layout/browser just displays the state of the "var board"!
                      This means that each div will display collor empty, red or black according to value of var z!
                      So... each div will interact with the var with the same number in the object board!
                      The user view in the browser is just a visualization of a set of parameters in a database...


        Next Problem: How to check the winner? The conditions that defines a winner are:
                      when x remains the same, for consecutive Y we have four equal z values except white (vertically)
                      when y remains the same, for consecutive x we have four equal z values except white (horizontally)
                      z = (red,red,red,red) or z = (black,black,black,black) consecutivelly

        Possible Solution for winner condition check:
                when: after each turn, before the formula changeTurn run "checkWinner" formula.
                        this check is broken into 3 subformulas
                          verticalCheck: check for x=1; y=1 and then++ , value of Z
                            if value of Z appears four consecutive times => run formula "declareWinnervertical"
                              if not, run formula changePlayerTurn
                            do a loop for all x=[1,2,3,4,5,6,7]
                          horizontalCheck: check for y=1; x=1 and then++ , value of Z
                            if value of Z appears four consecutive times => run formula "declareWinnerHorizontal"
                              if not, run formula changePlayerTurn
                            do a loop for all y=[1,2,3,4,5,6]
                          diagonalCheck: the tricky part here is that neither the 'x' or 'y' are constant!
                              loop starting on (x=1,y=1) if there are 4 equal 'z' values for condition (x=+,y=+)
                              loop starting on (x=1,y=1) if there are 4 equal 'z' values for condition (x=-,y=+)


          Next PROBLEM: How to change the values 'z' stored in the database (var board)?
                        Conditions:
                        'x'is define by the button which is "clicked" location
                        'y' always comes from bottom to top, (from 1 to 6), is defined by z = 'white'
                        When function finds the first y with z=white, it changes the z to the colour of the player
                        something like 'push.playercolour' that comes from var player1 = {colour: black} and var player2 = {colour: red}
                        this also most comes from "who is playing condition"

                when the function "dropToken" is 'clicked';
                  if active player is red, then place red,  push red to object {x=1,y=1,z=red}
                    if not, place black, push black to object {x=1,y=1,z=black};

                      each button on top will be "connected" with a 'y' var to know in which column will the token be dropped
                        the function drop will check the var z to see if the location is empty, this will be run in a sorted
                          way for 'x'!
                          so if user hits button for column 1 (y=1), then formula will check if var z for x1 equals empty,
                            if not; move to x2;
                              if not, move to x3;
                                if not, move to x4;
                                  if not, move to x5;
                                    if not, move to x6;
                                      if not, display "column full, choose another one";





formulas to build:
