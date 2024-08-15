import { useReducer } from "react";

const intialState = {
  counter : 5
};

const reducer = (state,action) =>{
  //returns new State   
  switch(action.type){
    case  "increment":
      return {counter : state.counter + action.value};
    case "decrement":
      return {counter : state.counter - action.value};
    default : 
      return state;
  } 
}
const ComplexCounter = () => {
  const [state,dispatch] = useReducer(reducer,intialState)
  return (
    <div>
      <button onClick={() => dispatch({type : "increment",value : 2})}>+</button>
      <p>Counter - {state.counter}</p>
      <button onClick={() => dispatch({type : "decrement",value : 3})}>-</button>
    </div>
  )
}

export default ComplexCounter;