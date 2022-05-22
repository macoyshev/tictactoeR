import {useState} from 'react'


function Cell(props) {
  return (
    <button className="cell" onClick={props.onClick}>
      {props.value}
    </button>
  )
}


function Board() {
  let [board, setBoard] = useState(Array(3).fill(null).map(() => Array(3)))
  
  let getBroadCopy = () => {
    let newArray = []
    for (var i = 0; i < board.length; i++)
        newArray[i] = board[i].slice();
      
    return newArray
  }

  let winnter = () => {
  }

  let isEmptyCell = () => {
    let res = false
    board.forEach((e) => {
      if (e) {
        res = true
        return
      }
    })
    
    return res
  }

  let emptyIndexCell = () => {
    
    let brd = getBroadCopy()
    let index = Math.floor(Math.random() * 8)
    let cell = brd[Math.floor(index / 3)][index % 3]

    while (!cell) {
      index = Math.floor(Math.random() * 8)
      cell = brd[Math.floor(index / 3)][index % 3]
    }
    
    return index
  }

  let userMove = (index) => {
    let brd = getBroadCopy()
    brd[Math.floor(index / 3)][index % 3] = 'x'
    board = brd
    setBoard(brd)
    console.log(board);
  }

  let botMove = () => {
    let brd = getBroadCopy()
    brd[emptyIndexCell()] = 'o'
    setBoard(brd)
  }

  let changeCell = (index) => {
    let cell = board[Math.floor(index / 3)][index % 3]

    if (cell == null) {
      //user move
      userMove(index)

      if (!isEmptyCell()) {
        alert('Game Over')
        return 
      }
      
      //bot move
      botMove()
      
      if (!isEmptyCell) {
        alert('Game Over')
        return 
      }
    }
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
