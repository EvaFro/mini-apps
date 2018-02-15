import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
// import './styles.css'


const renderBlankBoard = function(numCol, numRows){
	let board = [];
	let i = numRows;
	while(i>0){
	  let arr = new Array(numCol).fill(null);
	  board.push(arr);
	  i--;
	}
	return board;
}

const blankBoard = renderBlankBoard(7,6);

ReactDOM.render(
  <App board={blankBoard}/>,
  document.getElementById('app')
);

module.hot.accept();