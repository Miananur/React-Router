import React from 'react'
import Navbar from './Navbar'
import {useState, useEffect} from 'react'

const Profile = () => {
    const [dataUser, setDataUser] = useState()

    const userStorage= localStorage.getItem("user")
    const data = JSON.parse(userStorage)
    console.log("test", data)

  return (
    <div>
        <Navbar/>
        <p>Username : {data.username}</p>
        <p>Email : {data.email}</p>
        <p>Alamat: {data.address}</p>
        <p>Tempat & Tanggal Lahir : {data.birthdate}, {data.Tanggal_lahir}, {data.Bulan_lahir}, {data.Tahun_lahir}</p>
        <p>Jenis Kelamin : {data.gender}</p>
        <p>Skill : {data.skil1}{data.skil2}{data.skil3}</p>
    </div>
  )
}

export default Profile