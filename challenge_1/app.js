// Goals of this file:
//1: Create functionallity of a tic tac toe game
//2: Allow players to click with in side the board to place game pieces
//3: Create a popup that lets the users know who won or tie.
//4: Have a button to clear the board when a game is done.

// I: user clicks on page with mouse
// O: X/O peices get placed on the board
	// at end of game popup for winner/tie

//E: if there i a piece that is placed and user clicks on that spot
	// pop up that says invaled move
//Note: start with X piece and alternate players -  
	// once a player clicks on the board can't go back


// Helper Functions:
// * lisen4Click -  in html
// * placePeiceOnBoard - in js
// * clearBoard - in js
// * search4Winner
// * declareWinner


// How to track board pieces?
	// create a boardArray var
		// an object or array = which is easier? 
// (X || undefined) ? O : X


function placePeiceOnBoard(element){
	// I: element Id
	// O: adds X or O to element or a pop up saying ivaled move
	// Goal: to add player pieces to board or tell player if it is an ivaled move
	// Code: 
		// first check if there is an element inerHtml value 
			//retreave value and set to currentPieces
			// if curentPice is not equal to ""
			// pop up warning that says invalid move
			// else 
				// add current player piece to inner html
				// add current player piece to boardArray
				// invoke search4Winner


}


function clearBoard(){
// I: none
// O: clears the board pieces from both the boardArray and the web board
// Goal: restet the board
// get the id's of all the places on the board
// iterate through all the id's 
	// replace each inner HTML with ""
// set the BoardArray back to original state

}


function search4Winner(board){
	
}

function declareWinner(){
	// may not need this func
}