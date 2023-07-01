import React from 'react'


const Footer = () => {
  return (
    <>
    
    <div className='flex  w-12 items-center mx-[42rem] my-[54rem]  p-2 space-x-8'>
      <img className='cursor-pointer' src="../src/img/whatsapp.jpeg" alt="" />
      <img className='cursor-pointer' src="../src/img/instagram.png" alt="" />
      <img className='cursor-pointer' src="../src/img/linkedin.png" alt="" />
      
      </div>

      <div className='  w-full h-64 bg-slate-600'>
        <div className='flex mx-40 text-xl font-semibold text-white p-4 space-x-28'>
          <h1>My Project</h1>
          <h1>Contact Me</h1>
          <h1>My Hobbies</h1>
        </div>
        <span className='text-white space-y-2 absolute mx-44 w-12'><ul><li className='cursor-pointer hover:text-blue-600 hover:underline'>FimyEra</li>
        <li className='cursor-pointer hover:text-blue-600 hover:underline'>Codeswear</li>
        <li className='cursor-pointer hover:text-blue-600 hover:underline'>Portfolio</li>
        <li className='cursor-pointer hover:text-blue-600 hover:underline'>NewsApplication</li>
        
        </ul></span>
        <span className='text-white space-y-2 absolute mx-96 w-12'><ul><li className='cursor-pointer hover:text-blue-600 hover:underline'>Whatsapp</li>
        <li className='cursor-pointer hover:text-blue-600 hover:underline'>instagram</li>
        <li className='cursor-pointer hover:text-blue-600 hover:underline'>Linkedin</li>
        <li className='cursor-pointer hover:text-blue-600 hover:underline'>Github</li>
        
        </ul></span>
        <span className='text-white space-y-2 absolute mx-[37.5rem] w-12'><ul><li className='cursor-pointer hover:text-blue-600 hover:underline'>Coding</li>
        <li className='cursor-pointer hover:text-blue-600 hover:underline'>Movie</li>
        <li className='cursor-pointer hover:text-blue-600 hover:underline'>Cricket</li>
        <li className='cursor-pointer hover:text-blue-600 hover:underline'>ReadingBooks</li>
        
        </ul></span>
      </div>
    </>
  )
}

export default Footer
