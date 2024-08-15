import { useState } from "react";

const RegistrationForm = () => {
  const [data,setData] = useState({
    name : "",
    email : "",
    password : "",
    confirmPassword : "",
    coutry : "India",
    gender : "",
    agreement : false
  });

  const handleChange = (event) =>{
    // if(event.target.name === "name"){
    //   setData((oldData) => ({...oldData,name :event.target.value}));
    // }else if(event.target.name === "email"){
    //   setData((oldData) => ({...oldData,email :event.target.value}));
    // }

    //dynamically changing values by [event.target.name]
    if(event.target.name === "agreement"){
      setData((oldData) => ({...oldData,[event.target.name] :event.target.checked}));
    }else{
      setData((oldData) => ({...oldData,[event.target.name] :event.target.value}));
    }
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(data)
  }
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Name : </label>
        <input type="text" name="name" value={data.name} onChange={handleChange} />
      </div>
      <br/>
      <div>
        <label>Email : </label>
        <input type="email" name="email" value={data.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password : </label>
        <input type="password" name="password" value={data.password} onChange={handleChange} />
      </div>
      <div>
        <label>Confirm Password : </label>
        <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange} />
      </div>
      <div>
        <label>Country : </label>
        <select name="country" value={data.coutry} onChange={handleChange}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </div>
      <div>
        <label>Gender : </label>
        <br />
        <input type="radio" name="gender" value="male" onChange={handleChange} />
        <input type="radio" name="gender" value="female" onChange={handleChange} />
        <input type="radio" name="gender" value="other" onChange={handleChange} />
      </div>
      <div>
        <label>Agreement : </label>
        <input type="checkbox" name="agreement" value={data.agreement} onChange={handleChange} />
      </div>
      <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default RegistrationForm;