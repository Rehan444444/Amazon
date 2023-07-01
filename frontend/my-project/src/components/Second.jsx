import React from 'react'
import Prime from "../assets/prime.jpg"

const Second = () => {
  return (
    <>
      <div className="second h-12 bg-[#232f3e] text-white flex justify-between">
        <div className="left space-x-5 p-2">
           <span>All</span>
           <span>Amazon MiniTV</span>
           <span>Sell</span>
           <span>Amazon Business</span>
           <span>Gousery & Growmat Foods</span>
           <span>Coupons</span>
           <span>Beauty & PresonalCare</span>
           
        </div>
        <div className="right p-2">
          <img src={Prime} alt="This si amazon prime Image" />
        </div>
      </div>
    </>
  )
}

export default Second
