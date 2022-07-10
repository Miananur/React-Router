import './App.css';

import Home from './components/Home'
import Register from './components/Register'
import Product from './components/Product'
import Profile from './components/Profile'
import Login from './components/Login'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
//Routes buat kita naro kumpulan rute rute

function App() {
  const isLogin =JSON.parse(localStorage.getItem("isLogin"))
  console.log("isLogin", isLogin)

  return (
    <BrowserRouter>
    <Routes>
      {/* halamannya didaftarin di route */}
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={isLogin ? <Profile/>: <Navigate to="/login"/>}/>
      <Route path="/product" element={<Product/> }/>
      <Route path="*" element={<NotFound404/>}/>
    </Routes>
    </BrowserRouter>
  );
}

function NotFound404(){
  return(
    <h1 style={{color:'red'}}>HALAMAN TIDAK DITEMUKAN</h1>
  )
}

export default App;
