import { useEffect, useState } from "react";
const UseEffectCom = () => {
  const [count,updateCount] = useState(0);

  const handleClick = () => {
    updateCount((counter) => counter + 1)
  }

  //useEffect(callback function,array = optional)
  useEffect(() => {
    console.log("This useEffect will call on every render");
  });

  useEffect(() => {
    console.log("This useEffect will call on initial render");
  },[]);

  useEffect(() => {
    //first time when page load
    console.log("This useEffect will call when dependency changes.");
  },[count]);

  return (
    <div>
      <div>use effect example</div>
      <button onClick={handleClick}>Click Counter</button>
      <p>Counter : {count}</p>
    </div>
  )
}

export default UseEffectCom;