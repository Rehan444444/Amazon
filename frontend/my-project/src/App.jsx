import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Sign_in from './components/Sign_in'
import Sign_up from './components/Sign_up'

import Footer from './components/Footer'
import All from './components/All'



function App() {
  return (
   <>
  
  <Navbar/>
   

   <Routes>
      <Route  path='/' element={<All/>}   />
      <Route  path='/login' element={<Sign_in/>}   />
      <Route  path='/register' element={<Sign_up/>}   />
   </Routes>


   <Footer/>
   </>
  )
}

export default App
