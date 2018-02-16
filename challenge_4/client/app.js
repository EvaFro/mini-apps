import React from 'react';

class Game extends React.Component {
	constructor(props){
		super(props)
		this.state{
			this.pins = props.pins;
			this.randomPins = [];
			this.frame = 0;
			this.isfirstRound = true;
			this.numPins2PutDown = 0;

		}
	}

	render() {
		return(
			<div className="game" >
				<ScoreBoard />,
				<PinArea />,
				<NumberPad />
			</div>
		);
	}
}

const ScoreBoard = (props) => {
	<div className="scoreBoard" >
	{}
	</div>
}

const Frame = (props) => {
	<div className='fullFrame' >
	{}
	</div>
}

const PinArea = (props) => {
	<div className="pinArea" >
	{}
	</div>
}

const Pin = (props) => {
	<div className="pin" >
	{}
	</div>
}

const NumberPad = (props) => {
	<div className="numberPad" >
	{}
	</div>
}


const Keys = (props) => {
	<div className="keys" >
	{}
	</div>
}





