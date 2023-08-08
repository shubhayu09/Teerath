import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Signup.css"

import axios from "axios"
// import {useHistory} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Signup=() => {

  const navigate = useNavigate();
  const[credentials, setcredentials]= useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })

  const handleChange= e =>{
    const{name, value}=e.target
    setcredentials({
      ...credentials,
      [name]:value
    })
  }

  const register= ()=> {
     const{ name, email, password, reEnterPassword }= credentials
     if(name && email && password && (password===reEnterPassword)){
      axios.post("http://localhost:5000/api/creatuser", credentials)
      .then(res => {
        alert(res.data.message)
        navigate('/login')
      })
    }
     else{
      alert("invalid input")
     }
  }
  return (
    <div className="register">
      <h1>Register</h1>
      <input type="text" name="name" value={credentials.name} placeholder="Enter your Name" onChange ={ handleChange }></input>
      <input type="text" name="email" value={credentials.email} placeholder="Enter your Email" onChange ={ handleChange }></input>
      <input type="password" name="password" value={credentials.password} placeholder="Enter your Password" onChange ={ handleChange }></input>
      <input type="password" name="reEnterPassword" value={credentials.reEnterPassword} placeholder="Re-Enter your Password" onChange ={ handleChange }></input>
      <div className="button" onClick={register}>Signup</div>
      <div>or</div> 
      <div className="button" onClick={() => navigate('/login')}>Login</div>
    </div>
  )
}

export default Signup




































/*
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser", {
    //   mode: "no-cors",
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              name="name"
              value={credentials.name}
              onChange={onChange}
            >
              Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              name="email"
              value={credentials.email}
              onChange={onChange}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              name="password"
              value={credentials.password}
              onChange={onChange}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputAddress"
              className="form-label"
              name="location"
              value={credentials.location}
              onChange={onChange}
            >
              Address
            </label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  )
}

export default Signup;
*/



















































