import React, {useState} from "react";

class Cell extends React.Component {
  render() {
    return (
      <button className="cell" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}


class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: Array(9).fill(null)
    }
  }

  handleClick(i) {
    const cells = this.state.cells.slice()

    cells[i] = 'X'
    console.log('x');
    
    this.setState({cells: cells})
  }

  renderCell(i) { 
    return <Cell value={this.state.cells[i]} onClick={() => this.handleClick(i)}/>
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
        </div>
        <div className="board-row">
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
        </div>
        <div className="board-row">
          {this.renderCell(7)}
          {this.renderCell(8)}
          {this.renderCell(9)}
        </div>
      </div>
    );
  }
}


export default Board;
