import React from 'react'

const Sixth = ({text, img, img1, img2}) => {
  return (
    <>
      <div className='w-full h-96 rounded-2xl shadow-xl shadow-gray-300  absolute my-[32rem] bg-white p-4'>
        <span className='text-3xl font-bold text-gray-800 mx-5 '>{text}</span><br/>
       <div className='flex '>
      
        <img className='h-52 my-10  mx-2' src={img} alt="" />
        <img className='h-52 my-10 mx-2' src={img} alt="" />
        <img className='h-52 my-10 mx-2' src={img1} alt="" />
        <img className='h-52 my-10 mx-2' src={img2} alt="" />
        <img className='h-52 my-10 mx-2' src={img} alt="" />


       </div>
      </div>
    </>
  )
}

export default Sixth
