
class Context{
  constructor(value){
    this.value = value;
  }

  Provided = ({children,value}) => {
    this.value = value;
    return children;
  }

  Consumer = ({children}) => children(this.value);
}

function createContext(value = null) {
  const context = new Context(value);

  return {
    Provider : context.Provided,
    Consumer : context.Consumer
  }
}

export default createContext;