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
    this.cellsEmptyCount = () => {
      let count = 0
      this.state.cells.forEach((e) => {
        if (!e) {
          count += 1
        }
      })

      return count
    }
  }

  getBotMove() {
    let index = Math.floor(Math.random() * 9)
    let cell = this.state.cells[index]

    while (cell != null) {
      index = Math.floor(Math.random() * 9)
      cell = this.state.cells[index]
    }
    
    return index
  }
  

  handleClick(i) {
    const cells = this.state.cells.slice()

    if (cells[i] == null) {
      cells[i] = 'X'
      this.setState({cells: cells})
      
      cells[this.getBotMove()] = 'O'
      this.setState({cells: cells})
    }
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
