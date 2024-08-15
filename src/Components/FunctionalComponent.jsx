import React from "react";

const FunctionalComponent = () =>{
  const [data,setData] = React.useState("react");

  const handleClick = (course) =>{
    console.log("User clicked me")
    setData(course);
  }
  return (
    <div>
      <p>This is functional component which has state : {data}</p>
      <button type="button" onClick={() => handleClick("Vue")}>Click me</button>
    </div>
  )
}

export default FunctionalComponent;