import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }
  
  function decreement() {
    setCount(count - 1)
  }
  
  return (
    <div className="Counting">
      count:{count}
      <button onClick={increment}>+</button>
      <button onClick={decreement}>-</button>
    </div>
  );
}

export default App;
