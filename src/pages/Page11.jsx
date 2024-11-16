import React from "react";
const Page11=()=>{
  return(
    
    <>
    <div className='h-full relative p-10 bg-white'>
        <div className=' relative h-full w-full overflow-hidden bg-black rounded-[30px]'>
            <video autoPlay loop muted className='h-full w-full object-cover rounded-xl'
             src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/480p/mp4/file.mp4"></video>
           
            <div  className='absolute top-0 left-0 w-full mb-8 h-full '>
            <h1 className='  font-[anzo4] text-zinc-200 text-[28vh] uppercase ml-[60vh] mt-[-5vh]  absolute'>
            PERSONAL </h1>

            <h5 className='text-[3vh] font-[anzo5] ml-[60vh] mt-[28vh]  text-zinc-200'>Honesty, Communication, Punctuality</h5>
            
             <h1 className='font-[anzo4] text-zinc-200 text-[28vh] uppercase ml-[60vh] mt-[-5vh]  absolute'>
            PROFESSIONAL</h1> 
            
            <h5 className='text-[3vh] font-[anzo5] ml-[60vh] mt-[30vh]   text-zinc-200'>Photoshop, Wix Studio, Figma</h5> 

            <h1 className='font-[anzo4] text-zinc-200 text-[28vh] uppercase ml-[60vh] mt-[-6vh]  absolute'>
                ADDITIONAL </h1>
            
            <h5 className='text-[3vh] font-[anzo5] ml-[60vh] mt-[28vh]   text-zinc-200'>Business Development, Branding, SEO</h5>
            </div>
        </div>

    </div>
     
    </>

  )
}
export default Page11