# tic-tac-toe

Tic Tac Toe Web Game
A simple web-based Tic Tac Toe game developed with JavaScript, HTML, and CSS.

Description
This program presents a simple implementation of the classic Tic Tac Toe game, where two players ("X" and "O") take turns to mark a spot on a 3x3 grid, aiming to align three of their marks vertically, horizontally, or diagonally.

Key Features:

Player turns alternate between "X" and "O".
Win detection for any row, column, or diagonal of identical marks.
Simple UI to interact with the game.
A start game button to initiate the game.
A reset button to clear the board and restart the game.
Message displays for game-win scenarios.
How to Use
Start the Game:

Click on the "Start Game" button to display the game board.
Playing the Game:

Players take turns clicking on a cell in the grid to mark it with their symbol ("X" or "O").
The game checks for a win or tie after each move and displays a message accordingly.
Reset the Game:

Click on the "Reset" button to clear the board and start a new game.
The game can be reset at any time.
Winning the Game:

A player wins by being the first to get 3 of their marks in a horizontal, vertical, or diagonal row.
A message is displayed when a player wins.
Code Overview
The JavaScript code manages game state, player turns, and win/tie detection through various functions and event listeners. Here's a brief overview of the code functionality:

Game State:

playerOnes and playerTwos variables determine which player's turn is next.
The gameOver variable is a flag indicating if the game has ended.
Game Logic:

The game(playerOne, playerTwo) function determines the current player and ensures no moves are made post-gameover.
Event listeners on each cell (xAndO) manage player input and turn progressions.
winnerRows(), winnerColumns(), and winnerDiagonal() functions check for winning conditions.
tie() checks for a tie condition.
UI Interactions:

startGame event listener enables the display of the game board.
reset event listener allows resetting the game board, the game state, and UI elements.
Known Issues and Limitations
The UI might not respond appropriately to wins in some situations.
The code does not support player score tracking between resets.
The code structure and function operations could be optimized and modularized further for cleaner and more efficient performance.
Future Enhancements
Implement score tracking for players across multiple rounds.
Introduce player name inputs for a personalized experience.
Upgrade UI/UX for a better user interaction.
Implement an AI opponent for single-player mode.
Feel free to explore, raise issues, or contribute to enhancing this simple Tic Tac Toe web game!
