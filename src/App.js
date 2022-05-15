import React, {useState} from "react";

class Cell extends React.Component {
  render() {
    return (
      <div className="cell">
        {this.props.value}
      </div>
    );
  }
}


class Board extends React.Component {
  renderCell(i) {
    return <Cell value={i}/>
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
