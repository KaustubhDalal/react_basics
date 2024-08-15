// import "../assets/css/style.css"
import classes from "../assets/css/test.module.css"
import { useState } from "react";
const CSSStyle = () =>{
  const [color,setColor] = useState(false);

  const handleClick = () =>{
    setColor(!color)
  }
  return (
    // <div style={{border:"5px solid black",backgroundColor:"red"}}>
    //   <p style={{fontSize:"30px",color:"red",backgroundColor:"yellow"}}>css stylig</p>
    // </div>

    //css module
    <div className={color ? classes.container : classes.container1}>
      <p className={color ? classes.text : classes.text1}>text</p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  )
}

export default CSSStyle;