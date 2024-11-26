import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [ans,setAns] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


// ourrr codee
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Registration Successful!");

    try {
      const response = await axios.post(
        "http://localhost:8080/abc/save",
        formData
      );

      console.log(response);
    } catch (error) {
      console.log(error);

      alert("error to post data");
    }
  };

  
  //ourrr codee
  
  const data = async()=>{
    try {
      const response = await axios.get("http://localhost:8080/abc/findAll")

      console.log(response);
      console.log(response.data);
      
      setAns(response.data);
    } catch (error) {

      
      alert("error to gettttttt data");
    }
  }
 
useEffect(()=>{
  data();

},[])

// our functio to perform delete operation 
const delete1=async (_id)=>{
try{
const result =await axios.delete(`http://localhost:8080/abc/delete/${_id}`)
data();
alert("data is deleted")

}
catch(error){
alert("not present")
}
}

  return (
    <>
      <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Register
        </button>
      </form>
    </div>
      {ans.map((item) => (
        <div className="card">
          <h3>name:{item.name}</h3>
          <h3>email:{item.email}</h3>
          <h3>password:{item.password}</h3>
          <h3>dob:{item.dob}</h3>
          <button onClick={()=>delete1(item._id)}>delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
