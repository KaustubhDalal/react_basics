const SubComponent = (props) => {
  return (
    <div>
      <p>This is sub component</p>
      <span>{props.children}</span>
    </div>
  )
}

export default SubComponent;