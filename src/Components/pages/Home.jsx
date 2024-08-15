import { useNavigate } from "react-router-dom";
const Home = () =>{
  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate("order-confirmation");
  }
  return (
    <div>
      <p>Home page</p>
      <button onClick={handleNavigate}>Place Order</button>
    </div>
  )
}

export default Home;