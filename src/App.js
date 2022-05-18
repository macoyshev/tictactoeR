import {useState} from 'react'


function Cell(props) {
  return (
    <button className="cell" onClick={props.onClick}>
      {props.value}
    </button>
  )
}


function Board() {
  let [board, setBoard] = useState(Array(9).fill(null))

  let changeCell = (index) => {
    let brd = board.slice()
    brd[index] = 'x'
    setBoard(brd)
  }
  
  return (
    <div className="board">
      <div className="board-row">
        <Cell value={board[0]} onClick={() => changeCell(0)}/>
        <Cell value={board[1]} onClick={() => changeCell(1)}/>
        <Cell value={board[2]} onClick={() => changeCell(2)}/>
      </div>
      <div className="board-row">
        <Cell value={board[3]} onClick={() => changeCell(3)}/>
        <Cell value={board[4]} onClick={() => changeCell(4)}/>
        <Cell value={board[5]} onClick={() => changeCell(5)}/>
      </div>  
      <div className="board-row">
        <Cell value={board[6]} onClick={() => changeCell(6)}/>
        <Cell value={board[7]} onClick={() => changeCell(7)}/>
        <Cell value={board[8]} onClick={() => changeCell(8)}/>
      </div>
    </div>
  )
}

export default Board;
