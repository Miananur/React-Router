import React from 'react'
import Navbar from './Navbar'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  let navigate=useNavigate()

  const [dataUser, setDataUser] = useState({email:"", password:""})

  const handleChange = (e) =>{
    setDataUser({...dataUser,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    const userStorage= localStorage.getItem("user")
    const data = JSON.parse(userStorage)
    console.log("test", data)
    
    if(dataUser.email===data.email && dataUser.password===data.password){
      localStorage.setItem("isLogin", true)
      return navigate("/profile")
    }else{
      alert("Email atau password anda salah")
    }
  }
  return (
    <div>
      <Navbar/>
      <input type="email" placeholder="email" value={dataUser.email} name="email" onChange={handleChange}></input>
      <input type="password" placeholder="password" value={dataUser.password} name="password" onChange={handleChange}></input>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login