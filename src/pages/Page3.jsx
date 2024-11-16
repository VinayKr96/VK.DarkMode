import React from "react";
const Page3=()=>{
  return(
    
    <>
    <div className='h-screen  relative flex items-center justify-center bg-white'>
    <img className=' absolute z-20 h-[80vh] w-[70vw]' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1249,h_719,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />

        <video autoPlay loop muted className=' z-10 relative h-[70vh] w-[55vw] object-cover' src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>

        <div className=' z-0 bg-black h-[2px] w-[60vw] top-[15%] absolute'></div>
        <div className=' z-0 bg-black h-[2px] w-[70vw] top-[45%] absolute'></div>
        <div className=' z-0 bg-black h-[2px] w-4/5 top-[70%] absolute'></div>
        <div className=' z-0 bg-black h-[2px] w-full top-[96%] absolute'></div>
        

    </div>
    
     
    </>

  )
}
export default Page3