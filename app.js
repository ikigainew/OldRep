window.onload =  function(){
  console.log('teste');

  // Flow Control:
  var start = {}



  // database is an object, it stores values coming from playing the game
  // var database = {
  //   squares: [],
  //   var x = [1,2,3,4,5,6,7]     // must have 'x' for horizontal location
  //   var y = [1,2,3,4,5,6]       // must have 'y' for vertical location
  //   var z = [empty,red,black]   // must have 'z' for state storage & white means empty/free
  //
  // }


  // UI is an object, each key has a function to control the UI
  var UI = {

    buttonStart: function() {
      var buttonStart = $("<button>Start Game</button>");
      buttonStart.on('click',function() {
        console.log('start')});
      $('#buttonStart').append(buttonStart);
    },

    buttonsRow: function(){
      for (var i = 1; i < 8; i++) {
        var buttonDrop = $("<button class='buttonDrop' >Drop</button>");
        buttonDrop.attr('id', i);
        buttonDrop.on('click',function() {
          console.log('clicked')});
        $('#buttonsRow').append(buttonDrop);
      };
    }, // end of key buttonsRow which value is a function

    board: function(){
      for (var i = 1; i < 43; i++) {
        var square = $("<div class='square'></div>");
        square.attr('id', 'sq'+i);
        $('#board').prepend(square);
        };
      }, //end of key board wich value is a function

  }; //end of object UI

  UI.buttonStart(); // This displays the button start
  UI.buttonsRow(); // This displays the function buttonsRow in the browser
  UI.board(); // This displays the function board in the browser
} //end of window.onload function
