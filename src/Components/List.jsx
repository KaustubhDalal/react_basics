const List = () => {
  const items = ["React","Vue","Angular","PHP"];

  return(
    <div>
      <p>Popular course name : </p>
      <ul>
        {items.map((item,index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default List;