import { useNavigate } from "react-router-dom";
const OrderConfirmation = () =>{
  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate("/");
  }
  return (
    <div>
      <p>Order Confirmation Successful</p>
      <button onClick={handleNavigate}>Go Back</button>
    </div>
  )
}

export default OrderConfirmation;