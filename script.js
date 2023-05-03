$(function() { // Waits for the DOM to fully load before JS can affect it
    let currentPlayer = 'X'; // Made a variable to keep track of the player, players are X and O
    // Click event listener for all the cells
    $('.cell').on('click', function() {
      // if statement to check if the cell is currently populated (if an empty string, then...). Does nothing otherwise.
      if ($(this).text() === '') { // When used in an event handler like .on('click'), the this keyword is used to represent the element that was clicked
        $(this).text(currentPlayer); //Sets the text of the cell to the currentPlayer string
  
        // Another if statement to check for a win, based on the checkWin function below. Triggers if checkWin returns true.
        if (checkWin(currentPlayer)) {
          // Display a winner message and reset the board
          $('h2').text(`${currentPlayer} wins!`);
          setTimeout(resetBoard, 1000); // Resets the board after 1000ms
        } else {
          // Switch to the next player
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; //Using the ternary operator, we switch players using the logic "if 'X' then return 'O', else 'X'".
          $('h2').text(`It's ${currentPlayer}'s turn!`); // Sets h2 text to the current player's turn
        }
      }
    });
  
    // Reset the board
    function resetBoard() {
      $('.cell').text('');
      $('h2').text(`It's X's turn!`);
      currentPlayer = 'X';
    }
  
    // Check if the current player has won
    function checkWin(player) {
      // Using an array of arrays, define the winning combinations (3x horizontal, 3x vertical, 2x diagonal)
      const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      // Function then checks if any of the winning combinations have been achieved
      for (let i = 0; i < winCombos.length; i++) {
        if (
          $('.cell').eq(winCombos[i][0]).text() === player &&
          $('.cell').eq(winCombos[i][1]).text() === player &&
          $('.cell').eq(winCombos[i][2]).text() === player
        ) {
          return true;
        }
      }
  
      // If no winning combination has been achieved, return false
      return false;
    }
  
    // Initialize the game
    resetBoard();
  });
  