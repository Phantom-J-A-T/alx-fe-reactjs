import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)} style={{backgroundColor:'green',color:'white'}}>Increment</button>
        <button onClick={() => setCount(0)} style={{backgroundColor:'yellow',color:'white', margin:'10px'}}>Reset</button>
        <button onClick={() => setCount(count - 1)} style={{backgroundColor:'red',color:'white'}}>Decrement</button>
      </div>
    );
  }

  export default Counter;