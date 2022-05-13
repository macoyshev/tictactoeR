import React, {useState} from "react";

function Cell() {
  const [move, setMove] = useState('')

  function userMove() {
    setMove('x')
  }
  
  function botMove() {
    setMove('y')
  }
  
  return (
    <div className="cell" onClick={userMove}>
      {move}
    </div>
  );
}


function Board() {
  return (
    <div>
      <Cell/><Cell/><Cell/>
      <Cell/><Cell/><Cell/> 
      <Cell/><Cell/><Cell/>
    </div>
  )
}

export default Board;
