inport React from 'react';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			board: props.board,
			curentPlayerRed: true;
		}
	}

	render(){
		return(
			<div> 
			<Board board{this.state.board} />

			</div>

		)
	}
}



const Board = (props) =>(
	<div className="board">
	{props.board.map((row)=>{
		<Row row{row} />
	})}
	</div>

);


const Row = (props)=>(
	<div className="row">
	{props.row.map((element, index)=>{
		<Square piece={element} index={index} />
	})}
	</div>
)

const Square = (props) => (
	<div className="square" onClick={()=>{
		// function to place piece
	}} >
	{props.piece}
	</div>
)






module.exports = { App };

