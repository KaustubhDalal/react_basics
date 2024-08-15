import { useState } from "react";
const Form = () => {
  const [course,setCourse] = useState("");
  const [desc,setDesc] = useState("");
  const [country,setCountry] = useState("India");
  const [agreement,setAgreement] = useState(false);
  const [gender,setGender] = useState("");

  const handleChange = (event) =>{
    if(event.target.name === "course"){
      setCourse(event.target.value);
    }else if(event.target.name === "desc"){
      setDesc(event.target.value)
    }else if(event.target.name === "country"){
      setCountry(event.target.value);
    }else if(event.target.name === "agreement"){
      setAgreement(event.target.checked);
    }else if(event.target.name === "gender"){
      setGender(event.target.value);
    }
  }

  const handleSubmit = (event) =>{
    event.preventDefault();// it will not reload page on submit
    console.log(course);
    console.log(desc);
    console.log(agreement);
    console.log(gender);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Course Name : </label>
        <input type="text" id="course_name" name="course" placeholder="Enter course name" value={course} onChange={handleChange}/>
        <br/>
        <label>Course Desc : </label>
        <textarea id="course_desc" name="desc" placeholder="Enter course description" value={desc} onChange={handleChange}></textarea>
        <br/>
        <select name="country" value={country} onChange={handleChange}>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
        </select>
        <br/>
        <input type="checkbox" name="agreement" checked={agreement} onChange={handleChange}/>
        <br/>
        <input type="radio" name="gender" value="male" onChange={handleChange}/>
        <input type="radio" name="gender" value="female" onChange={handleChange}/>
        <input type="radio" name="gender" value="other" onChange={handleChange}/>
        <br/>
        <input type="submit"  value="Save" />
      </form>
    </div>
  )
}

export default Form;