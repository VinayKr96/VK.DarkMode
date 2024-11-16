import React from "react";

const TiltText=(props)=>{
  return(
    
    <>
    <div id="tiltDiv" ref={props.abc} className='relative mt-[20vh] sm:mt-[15vh] md:mt-[10vh] lg:mt-[10vh] xl:mt-[22vh]'>
        <h1 className='text-[10vh] sm:text-[8vh] md:text-[6vh] lg:text-[8vh] xl:text-[9vh] leading-[12vh] uppercase font-[anzo0]'>I am
             <span className='text-black text-[10vh] sm:text-[8vh] md:text-[6vh] lg:text-[4vh] xl:text-[9vh] uppercase font-[anzo0]'>DARK MODE</span>™</h1>
        <h1 className='text-[16vh] sm:text-[14vh] md:text-[12vh] lg:text-[10vh] xl:text-[16vh] leading-[12vh] font-[anzo0]'>DEVELOPER</h1>
        <h1 className='text-[10vh] sm:text-[8vh] md:text-[6vh] lg:text-[4vh] xl:text-[9vh] leading-[12vh] uppercase font-[anzo0]'>
          To Hire <span className='text-[3.3vh] sm:text-[2.5vh] md:text-[2vh] lg:text-[1.5vh] xl:text-[3vh]  font-[anzo0]'>Vinay Kumar</span></h1>
      </div>

    </>

  )
}
export default TiltText
