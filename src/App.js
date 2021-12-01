import React,{useState} from "react"
import './App.css';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from "./components/Header"
import {Sign} from "./components/Sign"
import {Lessons} from "./components/Lesson"

function App() {

   const [userData,setUserData] = useState({
     email:'',
     password:'',
     name:''
   })
   const changeDataHandler = (e) => setUserData((prev) => {
     return {
       ...prev,
       [e.target.name]: e.target.value
     }
   })

  return (
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/lesson" element={<Lessons name={userData.name}/>}/>
              <Route path="/" element={<Sign data={userData} setData={changeDataHandler}/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
