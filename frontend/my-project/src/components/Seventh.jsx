import React from 'react'

const Seventh = ({img, text, text1, text2}) => {
  return (
    <>
    <div className='w-72  h-56 shadow-xl shadow-gray-200 rounded-2xl bg-[#f7f8f8] absolute my-[36rem] mx-4'>
      <img className=' mx-16 my-5 w-[9rem]' src={img} alt=" This is  a phone image " />
      <div className='my-10'>
      <span>{text}</span>
      <span>{text1}</span><br/>
      <span>{text2}</span>
      </div>

    </div>
    
    
    </>
  )
}

export default Seventh
