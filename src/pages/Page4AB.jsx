import React from "react";
const Page4AB=()=>{
  return(
    
    <>
    <div className='h-full relative  bg-white flex justify-center items-center animate-fadeIn'>
  <div className='relative h-full w-[95vw] overflow-hidden bg-black rounded-[30px] animate-scaleUp'>
    {/* <video autoPlay loop muted className='h-full w-full object-cover rounded-xl'
     src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/480p/mp4/file.mp4"></video>
    */} 
    <img src="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727_1280.jpg" alt="" className='animate-zoomIn' />
    <div className='absolute top-0 left-0 w-[90vw]  h-full flex flex-col justify-center items-center animate-fadeIn'>
      <h1 className='font-[anzo4] text-zinc-200 text-[24vh] mt-[-2vh] uppercase animate-slideInLeft'>
        PROGRAMER 
      </h1>
      <h5 className='text-[3vh] font-[anzo5] text-zinc-200 mt-[-2vh] animate-slideInRight'>
        Intuition, Imagination, Discipline
      </h5>
      <h1 className='font-[anzo4] text-zinc-200 text-[24vh] uppercase animate-pulse'>
        PROFESSIONAL
      </h1>
      <h5 className='text-[3vh] font-[anzo5] text-zinc-200 mt-[-2vh] animate-slideInLeft'>
        Time Management, Multitasking, Creativity 
      </h5>
      <h1 className='font-[anzo4] text-zinc-200 text-[24vh] uppercase animate-slideInRight'>
        WEB DEVELOPER 
      </h1>
      <h5 className='text-[3vh] font-[anzo5] text-zinc-200 mt-[4vh] animate-fadeIn'>
        3D, Animation, AI Tools
      </h5>
      <button className='bg-zinc-200 text-black p-2 mt-[4vh] rounded-lg animate-bounce hover:bg-zinc-300' onClick={() => window.open(' http://localhost:5174/', '_blank')} >
        Explore My Projects
      </button>
    </div>
  </div>
</div>

    </>

  )
}
export default Page4AB