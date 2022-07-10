import React from 'react'
import Navbar from './Navbar'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  let navigate=useNavigate()

  const [dataUser, setDataUser] = useState({username:"", email:"", password:"", address:"", birthdate:"", gender:""})

  const handleChange = (e) =>{
    setDataUser({...dataUser,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    console.log("test")
    const data = JSON.stringify(dataUser)
    localStorage.setItem("user", data)
    alert(data)
    return navigate("/login")
  }
  return (
    <div>
      <Navbar/>
      <div className="container" style={{marginLeft:'20px',marginRight:'20px',marginTop:'10px'}}>
      <div className="row" >
      <div className="col-12">
      <input type="text" 
      placeholder="user name" 
      value={dataUser.username} 
      name="username" 
      onChange={handleChange}/>

      <input type="email" 
      placeholder="email" 
      value={dataUser.email} 
      name="email" 
      onChange={handleChange}/>

      <input type="password" 
      placeholder="password" 
      value={dataUser.password} 
      name="password" 
      onChange={handleChange}/>
      </div>

      <textarea
      type="text"
      placeholder="Silahkan isi alamat anda"
      value={dataUser.address}
      name="address"
      onChange={handleChange}
      />

      <td>Tempat dan Tanggal Lahir</td>
      <td>:</td>
      <td>
      <input type="text"
      placeholder="tempat lahir" 
      name="birthdate" 
      value={dataUser.birthdate} 
      onChange={handleChange} 
      size="15"/>
      <select name="Tanggal_lahir" value={dataUser.name} onChange={handleChange}>
      <option name="Tanggal_lahir">Tanggal</option>
            <option name="Tanggal_lahir">1</option>
            <option name="Tanggal_lahir">2</option>
            <option name="Tanggal_lahir">3</option>
            <option name="Tanggal_lahir">4</option>
            <option name="Tanggal_lahir">5</option>
            <option name="Tanggal_lahir">6</option>
            <option name="Tanggal_lahir">7</option>
            <option name="Tanggal_lahir">8</option>
            <option name="Tanggal_lahir">9</option>
            <option name="Tanggal_lahir">10</option>
            <option name="Tanggal_lahir">11</option>
            <option name="Tanggal_lahir">12</option>
            <option name="Tanggal_lahir">13</option>
            <option name="Tanggal_lahir">14</option>
            <option name="Tanggal_lahir">15</option>
            <option name="Tanggal_lahir">16</option>
            <option name="Tanggal_lahir">17</option>
            <option name="Tanggal_lahir">18</option>
            <option name="Tanggal_lahir">19</option>
            <option name="Tanggal_lahir">20</option>
            <option name="Tanggal_lahir">21</option>
            <option name="Tanggal_lahir">22</option>
            <option name="Tanggal_lahir">23</option>
            <option name="Tanggal_lahir">24</option>
            <option name="Tanggal_lahir">26</option>
            <option name="Tanggal_lahir">27</option>
            <option name="Tanggal_lahir">28</option>
            <option name="Tanggal_lahir">29</option>
            <option name="Tanggal_lahir">30</option>
            <option name="Tanggal_lahir">31</option>
      </select>
      <select name="Bulan_lahir" value={dataUser.name} onChange={handleChange}>
            <option name="Bulan_lahir">Bulan</option>
            <option name="Bulan_lahir">Januari</option>
            <option name="Bulan_lahir">Februari</option>
            <option name="Bulan_lahir">Maret</option>
            <option name="Bulan_lahir">April</option>
            <option name="Bulan_lahir">Mei</option>
            <option name="Bulan_lahir">Juni</option>
            <option name="Bulan_lahir">Juli</option>
            <option name="Bulan_lahir">Agustus</option>
            <option name="Bulan_lahir">September</option>
            <option name="Bulan_lahir">Oktober</option>
            <option name="Bulan_lahir">November</option>
            <option name="Bulan_lahir">Desember</option>
          </select>
          <select name="Tahun_lahir" value={dataUser.name} onChange={handleChange}>
            <option name="Tahun_lahir">Tahun</option>
            <option name="Tahun_lahir">2006</option>
            <option name="Tahun_lahir">2005</option>
            <option name="Tahun_lahir">2004</option>
            <option name="Tahun_lahir">2003</option>
            <option name="Tahun_lahir">2002</option>
            <option name="Tahun_lahir">2001</option>
            <option name="Tahun_lahir">2000</option>
            <option name="Tahun_lahir">1999</option>
            <option name="Tahun_lahir">1998</option>
          </select>
      </td>

      <p>Jenis Kelamin</p>
      <p><input type='radio' name='gender' value="pria" onChange={handleChange} />Pria</p>
      <p><input type='radio' name='gender' value="wanita" onChange={handleChange} />Perempuan</p>
      
      <p>SKILL</p>
      <p><input type='checkbox' name="skil1" value="coding" onChange={handleChange}/>Coding</p>
      <p><input type='checkbox' name="skil2" value="design" onChange={handleChange}/>Design</p>
      <p><input type='checkbox' name="skil3" value="gaming" onChange={handleChange}/>Gaming</p>

      <button onClick={handleSubmit}>Register</button>
      </div>
      </div>
    </div>
  )
}

export default Register