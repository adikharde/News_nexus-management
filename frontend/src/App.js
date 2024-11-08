import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ct from './component/Ct'
import Nav from './component/Nav'
import Home from './component/Home'
import All from './component/categories/All'
import Politics from './component/categories/Politics'
import Business from './component/categories/Bussiness'
import Technology from './component/categories/Technology'
import Sports from './component/categories/Sports'
import Others from './component/categories/Others'
import PostDoneByMe from './component/PostDoneByMe'
import Editposts from './component/Editposts'
import Login from './component/Login'
import Registrations from './component/Registrations'
import Logout from './component/Logout'
import Admin from './component/Admin'
import Addpost from './component/Addpost'
import './App.css'

const App = () => {
  let [cobj,setCont]=useState({"f":false})
  let updfun=(obj)=>{
    setCont({...cobj,...obj})
  }
  let obj={"cobj":cobj,"updfun":updfun}
  return (<BrowserRouter>
    <Ct.Provider value={obj}>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/' element={<All/>}/>
          <Route path='/politics' element={<Politics/>}/>
          <Route path='/bussiness' element={<Business/>}/>
          <Route path='/technology' element={<Technology/>}/>
          <Route path='/sports' element={<Sports/>}/>
          <Route path='/other' element={<Others/>}/>
          <Route path='/pdbm' element={<PostDoneByMe/>}/>
          <Route path='/editpost' element={<Editposts/>}/>
        </Route>
        <Route path='/register' element={<Registrations/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/addpost' element={<Addpost/>}/>
      </Routes>
    </Ct.Provider>
  </BrowserRouter>)
}

export default App