import React, { useState } from "react"
import axios from "axios"
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const Login=({setLoginUser}) => {

  const navigate = useNavigate();

  const[credentials, setcredentials]= useState({
    email:"",
    password:"",
  })

  const handleChange= e =>{
    const{name, value}=e.target
    setcredentials({
      ...credentials,
      [name]:value
    })
  }
  const login = () => {
    axios.post("http://localhost:5000/api/login", credentials)
    .then(res => { 
      alert(res.data.message)
      setLoginUser(res.data.credentials)
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("userEmail",res.data.email)
      console.log(localStorage.getItem("token"))
      navigate('/')
    })
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" name="email" value={credentials.email} placeholder="Enter your Email" onChange ={ handleChange }></input>
      <input type="password" name="password" value={credentials.password} placeholder="Enter your Password" onChange={ handleChange }></input>
      <div className="button" onClick={login}>Login</div>
      <div>or</div> 
      <div className="button" onClick={() => navigate('/creatuser')}>Signup</div>
    </div>
  )
}

export default Login