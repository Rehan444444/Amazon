import React from 'react'

const Fourth = ({text,image, text1}) => {
  return (
    <>
      <div className='w-[21rem] mx-10 rounded-2xl h-[28rem] shadow-xl shadow-gray-600 -my-40 absolute bg-white  '>
        <span>{text}</span>
      <div className='flex'>
      <div >
       <img className='w-32' src={image} alt="" />
        <span>{text1}</span>
       </div>
       <div >
       <img className='w-32' src={image} alt="" />
        <span>{text1}</span>
       </div>
      
      </div>
      <div className='flex'>
      <div >
       <img className='w-32' src={image} alt="" />
        <span>{text1}</span>
       </div>
       <div >
       <img className='w-32'  src={image} alt="" />
        <span>{text1}</span>
       </div>
      
      </div>

        
       
       
      

       
      </div>
    </>
  )
}

export default Fourth
