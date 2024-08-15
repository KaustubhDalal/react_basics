import { useState,useEffect } from "react";
import ComponentThree from "./ComponentThree";

const ComponentTwo = () => {
  return(
    <div>
      <p>Component Two</p>
      <ComponentThree/>
    </div>
  )
}

export default ComponentTwo;