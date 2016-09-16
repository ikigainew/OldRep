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

      $('#buttonsRow').append(button);
      };
    }
    buttonsRow();


  // MVP 3 - The turns should alternate (red, black, red, black, etc.)
      var startGame = function () {
        $buttonStart.on
      }
      startGame()

  // MVP 4 - A player should not be able to mark a space that has already been played



  // MVP 5 - The game should announce a winner if a player gets four tokens in a row, horizontally or vertically

});
