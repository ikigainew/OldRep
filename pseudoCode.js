//PseudoCode

//MVP - minimum viable product

var player 1 track places

var player 2 track places

var board [1,2,3,4,.......,42]

var board column (1,2,3,4,5,6,7)

var board row (1,2,3,4,5,6)


// An interactive board which renders on page load
function buildBoard
  Will need 7 columns 6 rows = 42 places to track


//A way for players to mark an empty space on their turn
function placeToken
          just 7 places available to place token
          function track tokens places


//The turns should alternate (red, black, red, black, etc.)
function alternate


//A player should not be able to mark a space that has already been played
function placesAvailable =  [1,2,3,4,5,6,7]
          after move, new array = previous array - chosen element + (chosen element + 7)


//The game should announce a winner if a player gets four tokens in a row, horizontally or vertically
function checkIfFourInLine
          horizontal solutions
            [1,2,3,4; 2,3,4,5; 3,4,5,6; 4,5,6,7;]
              create a loop and adding 7 to all number and run it 5 times
              [8,9,10,11; .......]
              [15,16,17,18; .....]
              [22,23,24,25;......]
              [29,30,31,32;......]
              [36,37,38,39;......]

              vertica solution;
              [1,8,15,22; 8,15,22,29; 15,22,29,26]
              create a loop add 1 nr to all 6 times
              [2,9,16,23;........]
              [3,10,17,24;.......]
              [4,11,18,25;.......]
              [5,12,19,26;.......]
              [6,13,20,27;.......]
              [7,14,21,28;.......]

              Diagonal:
              1	9	17	25			    4	10	16	22
              2	10	18	26			 5	11	17	23
              3	11	19	27			 6	12	18	24
              4	12	20	28			 7	13	19	25

              8	16	24	32			 11	17	23	29
              9	17	25	33			 12	18	24	30
              10	18	26	34		 13	19	25	31
              11	19	27	35		 14	20	26	32

              15	23	31	39	   18 24	30	36
              16	24	32	40		 19	25	31	37
              17	25	33	41		 20	26	32	38
              18	26	34	42		 21	27	33	39

function announceWinner

function newGame/clearResetBoard

HTML:

<!--
<aside class="aside">
  <div class="instructions">
      Instructions:
      <br>
      1 - Write your names
      <br>
      2 - Press start new game
      <br>
      3 - Place 4 tokens in a row in any direction to wins
      <br>
      4 - To reset the score press New Match
  </div>
  <div class="settings">
      settings
  </div>
</aside>

<container>
  <div class="score">
      score
  </div>
  <div class="board">
      board
  </div>
  <div class="display">
      display
  </div>
</contanier>

<footer>
<h5>Footer - All Rights Reserved PP Inc. - Peter Productions</h5>
</footer> -->
