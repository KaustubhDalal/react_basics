import { useState } from "react";
const CounterApp = () =>{
  const [count,setCount] = useState(0);

  const incrementCount = () =>{
    setCount(count+1);
  }

  const decrementCount = () =>{
    setCount(count-1);
  }
  return (
    <div>
      <p>Couter App</p>
      <p>Current Count is : {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default CounterApp;