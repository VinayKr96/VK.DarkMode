import React from "react";
const Page6=()=>{
  return(
    <>
    <div className='h-[110vh] relative p-5 bg-white md:p-10 lg:p-30 xl:p-50'>
        <div className=' relative h-[100vh] w-[94vw] overflow-hidden bg-black rounded-[30px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px]'>
            <video autoPlay loop muted className='h-full w-full object-cover rounded-xl' src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/720p/mp4/file.mp4"></video>
            <h1 className='font-[anzo4] text-white text-[82vh] uppercase ml-8 bottom-[-20vh] absolute  shadow-lg animate-pulse pb-4 md:text-[40vh] lg:text-[50vh] xl:text-[80vh]'>About</h1>
        </div>
    </div>
    </>
  )
}
export default Page6
