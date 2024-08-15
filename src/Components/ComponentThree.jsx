import { useState,useEffect } from "react";
import CourseContext from "./context/courseContext";
import { useContext } from "react";
const ComponentThree = () => {
  const context = useContext(CourseContext);
  return(
    <div>
      <p>Component Three</p>
      <p>Course : {context.course}</p>
    </div>
  )
}

export default ComponentThree;