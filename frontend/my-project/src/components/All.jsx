import React from 'react'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fiveth from './Fiveth'
import Sixth from './Sixth'
import Seventh from './Seventh'
import Phone1 from "../assets/phone1.jpg"


const All = () => {
  return (
    <>
     
      <Second/>
   <Third/>
   <Fourth text={"Pick up where you left off"} image={Phone1} text1={"Asus WT200"}/>
   <div className='absolute mx-[44rem]'><Fourth text={"Pick up where you left off"} image={Phone1} text1={"Asus WT200"}/></div>
   <div className='absolute mx-[22rem]'><Fourth text={"Pick up where you left off"} image={Phone1} text1={"Asus WT200"}/></div>
   <Fiveth/>
   <div className='absolute mx-[68rem] my-36'><Fourth text={"Pick up where you left off"} image={Phone1} text1={"Asus WT200"}/></div>
   
   <Sixth text="Today’s Deals" />
  <div className='absolute my-[25.5rem] w-full'> <Sixth text={"Pick up where you left off"} img={Phone1} img1={Phone1} img2={Phone1}/></div>
  <div className='absolute my-[51rem]  w-full'> <Sixth text={"Related to items you've viewed"} /></div>
   
   <Seventh img={Phone1} text={"upto 21% off"} text1={"Day of Deals"} text2={"VIVO V5"}/>
   <div className='mx-80 absolute '><Seventh img={Phone1} text={"upto 21% off"} text1={"Day of Deals"} text2={"VIVO V5"}/></div>
   <div className='mx-[40rem] absolute '><Seventh img={Phone1} text={"upto 21% off"} text1={"Day of Deals"} text2={"VIVO V5"}/></div>
   <div className='mx-[60rem]  absolute '><Seventh img={Phone1} text={"upto 21% off"} text1={"Day of Deals"} text2={"VIVO V5"}/></div>
   <div className='mx-[80rem]  absolute '><Seventh img={Phone1} text={"upto 21% off"} text1={"Day of Deals"} text2={"VIVO V5"}/></div>
   <div className='mx-[100rem]  absolute '><Seventh img={Phone1} text={"upto 21% off"} text1={"Day of Deals"} text2={"VIVO V5"}/></div>
   <div className='mx-[120rem]  absolute '><Seventh img={Phone1} text={"upto 21% off"} text1={"Day of Deals"} text2={"VIVO V5"}/></div>
   <div className='mx-[140rem]  absolute '><Seventh img={Phone1} text={"upto 21% off"} text1={"Day of Deals"} text2={"VIVO V5"}/></div>

  
    </>
  )
}

export default All
