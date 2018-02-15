inport React from 'react';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			board: props.board,
			isCurentPlayerRed: true;
		}
	}

	whoIsCurrentPlayer(){
		return this.state.isCurentPlayerRed ? 1 : 0 ;
	}

	whatIsCurrentPlayerName(){
		return this.state.isCurentPlayerRed ? "Red" : "Black";
	}



	changePlayer(){
		this.setState({isCurentPlayerRed: !this.setState.isCurentPlayerRed});
	}

	placePiceOnBoard (col){
		// need a copy of the board
		let newBoard = [];
		this.state.board.forEach((row)=>{
			newBoard.push([...row]);
		})

		let numRows = newBoard.length

		for(let i= -1; i<numRows; i++){
		  if((i+1) === (numRows-1) && newBoard[i+1][col] === null){
		     newBoard[i+1][col] = 1;
		     return [i,col];
		  } else if(newBoard[i+1][col] === null){
		    i;
		  } else if((i+1 === 0) && newBoard[i+1][col] !== null){
		    break;
		  } else {
		    newBoard[i][col] = this.whoIsCurrentPlayer();
		    this.setState({board: newBoard})
		    this.changePlayer();
		    return [i , col];
		  }
		}
	}

	checkRow(position, currentPlayerVal){
		let row = board[position[0]];
		let count = 0;
		for(let i=1;i<4;i++){
			//look right
			//debugger
			if((row[position[1]+i] !== null || row[position[1]+i] !== undefined) && (row[position[1]+i] === currentPlayerVal)){
				count += 1
			// look left
			}
			if((row[position[1]-i] !== null || row[position[1]-i] !== undefined) && (row[position[1]-i] === currentPlayerVal)){
				count += 1
			}
		}
		return count;
	}

	checkCol(position, currentPlayerVal){
		let count = 0;
		for(let i=1;i<4;i++){
			//look down nvr have to look up
			if(position[0]+i<6){
			  	if((board[position[0]+i][position[1]] !== undefined) && (board[position[0]+i][position[1]] === currentPlayerVal)){
				count += 1
	          }
	        }
		}
		return count;
	}

checkDiagUpRight(position, currentPlayerVal){
		let count = 0;
		for(let i=1;i<4;i++){
			//look diag down 
			if(position[0]+i<6){
			  	if((board[position[0]+i][position[1]-i] !== null || board[position[0]+i][position[1]-i] !== undefined) && (board[position[0]+i][position[1]-i] === currentPlayerVal)){
				count += 1
	          }
	      }
	          // diagnal up
	        if(position[1]+i<7){
	          if((board[position[0]-i][position[1]+i] !== null || board[position[0]-i][position[1]+i] !== undefined) && (board[position[0]-i][position[1]+i] === currentPlayerVal)){
				count += 1
	          }
	        }
		}
		return count;
	}

	checkDiagUpLeft(position, currentPlayerVal){
		let count = 0;
		for(let i=1;i<4;i++){
			//look diag up
			if(position[1]-i > -1){
			  	if((board[position[0]-i][position[1]-i] !== null || board[position[0]-i][position[1]-i] !== undefined) && (board[position[0]-i][position[1]-i] === currentPlayerVal)){
				count += 1
	          }
	      }
	          // diagnal down
	        if(position[0]+i < 6){
	          if((board[position[0]+i][position[1]+i] !== null || board[position[0]+i][position[1]+i] !== undefined) && (board[position[0]+i][position[1]+i] === currentPlayerVal)){
				count += 1
	          }
	        }
		}
		return count;
	}

	check4Winner(position) {
		let currentPlayerVal = this.whoIsCurrentPlayer();
		let currentPlayerName = this.whatIsCurrentPlayerName();
		if (checkCol(position, currentPlayerVal) >= 3){
			alert(`${currentPlayerName} winns!`)
		} else if(checkRow(position, currentPlayerVal) >= 3){
			alert(`${currentPlayerName} winns!`)
		}else if(checkDiagUpRight(position, currentPlayerVal) >= 3){
			alert(`${currentPlayerName} winns!`)
		} else if(checkDiagUpLeft(position, currentPlayerVal) >= 3){
			alert(`${currentPlayerName} winns!`)
		}
	}



	render(){
		return(
			<div> 
			<Board board{this.state.board} placePice{this.placePiceOnBoard.bind(this)} check4Winner{this.check4Winner.bind(this)} />
			</div>
		)
	}
}



const Board = (props) =>(
	<div className="board">
	{props.board.map((row)=>{
		<Row row{row} placePice{props.placePice} check4Winner{props.check4Winner} />
	})}
	</div>

);


const Row = (props)=>(
	<div className="row">
	{props.row.map((element, index)=>{
		<Square piece={element} index={index} placePice{props.placePice} check4Winner{props.check4Winner} />
	})}
	</div>
)

const Square = (props) => (
	<div className="square" onClick={()=>{
		let position = props.placePice(props.index)
		props.check4Winner(position)
	}} > {props.piece} </div>
)






module.exports = { App, };

