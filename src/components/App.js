import React, { Component } from 'react';
import Board from './Board';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xPlayer: true
    }
  }

  handleClick = (i) => {
    console.log('handle click: ', i);
  }

  render() {
    console.log('array squares: ', this.state.squares);
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Board
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
          />
      </div>
    );
  }
}

export default App;
