///////////////////////////////////////////////////////////////////////////////
// Goals of this file:
///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////
// Data for board:
///////////////////////////////////////////////////////////////////////////////

// create a current player
var currentPlayer = 'X';
// create a winner
var winner = "X";

// How to track board pieces?
	// create a boardArray var
		// an object or array = which is easier? 
		// array!
var startBoardArray = JSON.stringify([[null,null,null],[null,null,null],[null,null,null]]);
var boardArray = JSON.parse(startBoardArray);



///////////////////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////////////////////

// Helper Functions:
// * lisen4Click -  in html
// * switchPlayers - in js
// * addPieceOnBoard - in js
// * placePeiceOnBoard - in js
// * searchRow
// * searchDiag
// * searchCol
// * search4Winner -in js
// * clearBoard - in js

// Note player X = 1 & player O = 0;
function switchPlayer(){
	(currentPlayer === 'X') ? (currentPlayer = 'O') : (currentPlayer = 'X')
}

// add piece to boardArray
function addPieceOnBoard(element) {
	var position = JSON.parse(element);

	if(currentPlayer === "X"){
		boardArray[position[0]-1][position[1]-1] = 1
	} else {
		boardArray[position[0]-1][position[1]-1] = 0
	}
}

function search4Winner(){
	// 
}

// add to html board
function placePieceOnBoard(element){
	// I: element Id
	// O: adds X or O to element or a pop up saying ivaled move
	// Goal: to add player pieces to board or tell player if it is an ivaled move
	// Code: 
		// first check if there is an element inerHtml value 
			//retreave value and set to currentPieces
	var curentPiece = document.getElementById(element).innerHTML;
			// if curentPice ! not equal to ""
	if(curentPiece !== ""){
		// pop up warning that says invalid move
		alert("Invalid move! Please choose a different square.")
		// else 
	} else {
		// add current player piece to inner html
		document.getElementById(element).innerHTML = currentPlayer;
		// add current player piece to boardArray
		addPieceOnBoard(element);
		// invoke switchPlayer
		switchPlayer();
		// invoke search4Winner
		search4Winner();
	}
}

// clear the board without refreshing page
function clearBoard(){
// I: none
// O: clears the board pieces from both the boardArray and the web board
// Goal: restet the board
// get the id's of all the places on the board
	var classIds = document.getElementsByClassName('whiteSquare')
// iterate through all the id's 
	for(i = 0; i< classIds.length ; i++){
	// replace each inner HTML with ""
		document.getElementById(classIds[i].id).innerHTML = "";
	}
// set the boardArray back to original state
	boardArray = JSON.parse(startBoardArray);
// set current player to winner or X
	currentPlayer = winner;
}






















