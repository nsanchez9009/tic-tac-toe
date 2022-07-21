// So, when a box in the game grid is clicked, we follow these steps:

// Make sure there is not a mark there already.
// Increment NumberClicks.
// Place proper mark in corresponding location (X if XTurn is “true”, otherwise O).
// Switch to next player (not needed if there is a win or draw).
// Check for win.  If there is a win, declare the winner and stop the game.
// Check if NumberClicks = 9 (board is full with no win).  If so, declare the game a draw and stop.