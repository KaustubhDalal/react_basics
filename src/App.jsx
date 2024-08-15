import SubComponent from "./Components/SubComponent";
import ClassBasedComponent from "./Components/ClassBasedComponent";
import FunctionalComponent from "./Components/FunctionalComponent";
import ConditionalRendering from "./Components/ConditionalRendering";
import List from "./Components/List";
import CounterApp from "./Components/CounterApp";
import Form from "./Components/Form";
import RegistrationForm from "./Components/RegistrationForm";
import ComponentOne from "./Components/ComponentOne";
import CourseContext from "./Components/context/courseContext";
// import UseEffectCom from "./Components/UseEffect";
import Timer from "./Components/Timer";
import { useState } from "react";
import Posts from "./Components/Posts";
import UseReducer from "./Components/UseReducer";
import ComplexCounter from "./Components/ComplexCounter";
import PostListWithoutReducer from "./Components/PostListWithoutReducer";
import PostListWithReducer from "./Components/PostListWithReducer";
import PostListWithCustomHook from "./Components/PostListWithCustomHook";
import CSSStyle from "./Components/CSSStyles";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import About from "./Components/pages/About";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import OrderConfirmation from "./Components/pages/OrderConfirmation";
import NotFound from "./Components/pages/NotFound";
import PostsList from "./Components/pages/PostsList";
import PostDetails from "./Components/pages/PostDetails";
import HotPost from "./Components/pages/HotPost";
import ProductList from "./Components/pages/ProductList";
import FeatureProduct from "./Components/pages/FeatureProduct";
import NewProduct from "./Components/pages/NewProduct";
function App() {
  const [toggle,setToggle] = useState(false);
  return (
    <div>
      {/* <p>This is Root Component</p>
      <SubComponent>
        This is Children
      </SubComponent>
      <ClassBasedComponent test="This is test prop" />
      <FunctionalComponent />
      <ConditionalRendering />
      <List />
      <CounterApp />
      <Form />
      <RegistrationForm/>
      <CourseContext.Provider value={{course: "react"}}>
        <ComponentOne course="react" />
      </CourseContext.Provider>
      <UseEffectCom/> */}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle Button</button>
      {toggle ? <CounterApp/> : <Timer/>} */}
      {/* <Timer/>  */}
      {/* <Posts/> */}
      {/* <UseReducer/> */}
      {/* <ComplexCounter/> */}
      {/* <PostListWithoutReducer/> */}
      {/* <PostListWithReducer/> */}
      {/* <PostListWithCustomHook/> */}
      {/* <CSSStyle/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/order-confirmation" element={<OrderConfirmation/>} />
        <Route path="/posts" element={<PostsList/>} />
        <Route path="/posts/:postId" element={<PostDetails/>} />
        <Route path="/posts/hot" element={<HotPost/>} />
        <Route path="/products" element={<ProductList/>}>
          <Route path="featured" element={<FeatureProduct/>} />
          <Route path="new" element={<NewProduct/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
