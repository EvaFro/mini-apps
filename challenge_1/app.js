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
// Players
// create a current player
var playerOne = 'X';
var playerTwo = 'O';
var currentPlayer = playerOne;
// create a winner
var winner = playerOne;
//scoreBoardObj = 
var scoreBoardObj = {};
scoreBoardObj[playerOne] = 0;
scoreBoardObj[playerTwo] = 0;


// Board
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
// * placePeiceOnBoard - in jss
// * search4Winner -in js
// * clearBoard - in js
// * keepTrackScore - js
// * setPlayerNames - js

// Note player X = 1 & player O = 0;
function switchPlayer(){
	(currentPlayer === playerOne) ? (currentPlayer = playerTwo) : (currentPlayer = playerOne)
}

// add piece to boardArray
function addPieceOnBoard(element) {
	var position = JSON.parse(element);

	if(currentPlayer === playerOne){
		boardArray[position[0]-1][position[1]-1] = 1
	} else {
		boardArray[position[0]-1][position[1]-1] = 0
	}
}

function search4Winner(element){
	// I: none 
	// O: pop up declare a winner/tie or nothing & set winner to currentWinner
	// Goal: search row,col and diag to evalueate if just played piece won the game and display who won.
	// Code: 
	// crate position - JSON.parse element
	var position = JSON.parse(element);
		// subtract 1 from both values in position to ensure its in correct spot in the index
	position[0] = position[0] - 1
	position[1] = position[1] - 1
	// look for rows
		// if boardArray[position[0]][0] === boardArray[position[0]][1] === boardArray[position[0]][2]
		if((boardArray[position[0]][0] === boardArray[position[0]][1]) && (boardArray[position[0]][0] === boardArray[position[0]][2])){
			// set winner = curentPlayer
			winner = currentPlayer;
			// alert: "Player __ Wins!"
			alert(`Player ${currentPlayer} Wins!!!!`)
			// add 1 to winner inscoreBoardObj



		} else if((boardArray[0][position[1]] === boardArray[1][position[1]]) &&  (boardArray[0][position[1]] === boardArray[2][position[1]])){
		// for column
		// else if boardArray[0][position[1]] === boardArray[1][position[1]] === boardArray[2][position[1]]
			// set winner = curentPlayer
			winner = currentPlayer;
			// alert: "Player __ Wins!"
			alert(`Player ${currentPlayer} Wins!!!!`)
			// add 1 to winner inscoreBoardObj

		// left diagnal
		} else if(element === "[1,1]" || element === "[2,2]" || element === "[3,3]"){
		// for diagnal
		// else if element === "[1,1]" || element === "[2,2]" || element === "[3,3]"
			// if boardArray[0][0] === boardArray[1][1] === boardArray[2][2]
			if((boardArray[0][0] === boardArray[1][1]) && (boardArray[0][0] === boardArray[2][2])){
				// set winner = curentPlayer
				winner = currentPlayer;
				// alert: "Player __ Wins!"
				alert(`Player ${currentPlayer} Wins!!!!`)
				// add 1 to winner inscoreBoardObj

			}
		// right diagnal
		} else if(element === "[1,3]" || element === "[2,2]" || element === "[3,1]"){
		// for diagnal
		// else if element === "[1,1]" || element === "[2,2]" || element === "[3,3]"
			// if boardArray[0][0] === boardArray[1][1] === boardArray[2][2]
			if((boardArray[0][2] === boardArray[1][1]) && (boardArray[0][2] === boardArray[2][0])){
				// set winner = curentPlayer
				winner = currentPlayer;
				// alert: "Player __ Wins!"
				alert(`Player ${currentPlayer} Wins!!!!`)
				// add 1 to winner inscoreBoardObj

			}
			
		} else if(!boardArray[0].includes(null) && !boardArray[1].includes(null)  && !boardArray[2].includes(null)){
		// for tie
		// else if !boradArray[0].includes(null) && !boradArray[1].includes(null)  && !boradArray[2].includes(null)
			// alert: "Tie! Cat Scratch!"
			alert(`Tie! Cat Scratch!`)
		}
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
		// invoke search4Winner
		search4Winner(element);
		// invoke switchPlayer
		switchPlayer();
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






















