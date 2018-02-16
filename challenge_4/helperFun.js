const pins = new Array(10).fill(0);

let buildScoreBoard = function(rounds){
	let scoreBoard = [];
	while(rounds > 0){
		scoreBoard.push(new Array(3).fill(0));
		rounds--;
	}
	return scoreBoard;
}

// when pins knocked down turn pins into 1s


let pins = new Array(10).fill(0);
let newScoreBoard = buildScoreBoard(3);

// run this at begining of each round
let randomPinKnockDownOrder = function() {
	let pinIndex = [0,1,2,3,4,5,6,7,8,9],
	    randPins = [],
	    i = pinIndex.length,
	    j = 0;

		while (i--) {
		    j = Math.floor(Math.random() * (i+1));
		    randPins.push(pinIndex[j]);
		    pinIndex.splice(j,1);
		}
		return randPins;
}

// player choses how many to knock over
let knockDownPins = function(play){
	if(play > randPinsArray.length){
		play = randPinsArray.length;
	}

	if(play === 10){
      pins = new Array(10).fill(1);
	} 

	if(play > 0 && play < 10){
		for(let i=0;i<play;i++){
			pins[randPinsArray[i]] = 1;  
		}
		randPinsArray.splice(0,play);
	}
}

let countKnockedPins = function (pins){
		let totalPins = 0;
			totalPins = pins.reduce((a,b)=> {return a+b}, 0)
		return totalPins;
}


let trackScore = function(round, turn){
	// place the score in the small boxes
	if(turn === 0){
		newScoreBoard[round][turn] = countKnockedPins(pins);
	} else {
		newScoreBoard[round][turn] = countKnockedPins(pins) - newScoreBoard[round][turn-1]
	}
	// update totals
	for(var i = 0; i < round+1; i++){
		if(i === 0){
			newScoreBoard[i][2] = newScoreBoard[i][0] + newScoreBoard[i][1];
		} else {
			newScoreBoard[i][2] = newScoreBoard[i][0] + newScoreBoard[i][1] + newScoreBoard[i -1][2];
		}

		if(newScoreBoard[i][0] === 10){
			newScoreBoard[i][2] =  newScoreBoard[i][2] + newScoreBoard[i+1][0] + newScoreBoard[i+1][1];
		} else if((newScoreBoard[i+1][0] + newScoreBoard[i+1][1]) === 10 ){
			newScoreBoard[i][2] =  newScoreBoard[i][2] + newScoreBoard[i+1][0];
		}
	}
}











