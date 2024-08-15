import React from "react";
class ClassBasedComponent extends React.Component{
  // constructor(props){
  //   console.log(props)
  //   super(props); //initializes React.Component controller // if using props in constructor we need to pass it to super() as well
  //   this.state = {course : "react"}
  // }
  state = {course : "react",counter : 0} // state initialization shortcut in class based component

  componentDidMount(){
    //when component is render this method get call automatically
    console.log('component did mount')
    setInterval(() => {
      // this.setState({course : "Vue",counter : this.state.counter + 1}); // updating state here 
    },2000);
    this.setState((oldState,props) => {
      return {
        course : "Vue",
        counter : oldState.counter + 1
      }
    })
  }

  componentWillUnmount(){

  }
  
  render(){
    console.log('render')
    return (
      <div>
        <p>Class based component</p>
        <span>Props : {this.props.test}</span>
        <br />
        <p>State : This is {this.state.course} course</p>
      </div>
    )
  }
}

export default ClassBasedComponent;