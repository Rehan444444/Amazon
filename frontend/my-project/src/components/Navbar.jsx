import React from 'react'
import Amazon from "../assets/amazon2.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-center h-16 bg-[#0f0f23] text-white spacing-x-5">
      <div className="left ">
       <div className='flex '>
        <Link to="/"><img className='w-40 -my-2 absolute -mx-[28rem]' src={Amazon} alt="This is a amazon logo" /></Link>
        <span className=''>Select Your Location</span>
        <input type="text" placeholder="Search on Amazon"/>
        <button>Search</button>
       </div>
      </div>
      <div className="right ">
         <span><Link to="/login">Sign-in</Link> </span>
         <span>Return and Order</span>
      </div>
      </div>
    </>
  )
}

export default Navbar
