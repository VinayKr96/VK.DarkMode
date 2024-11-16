import React from "react";
import PageEndC from "./PageEndC";

const Page4=()=>{

  const [component, setComponent] = React.useState(null);

  const handleComponentChangev = (componentName) => {
    switch (componentName) {
      
      case 'Contact me':
        setComponent();
        break;
      
      default:
        setComponent(null);
    }
  }

  return(
    
    <>
    <div className='h-full relative p-10 bg-white'>
        <div className=' relative h-full w-full overflow-hidden bg-black rounded-[30px]'>
            <video autoPlay loop muted className='h-full w-full object-cover rounded-xl' src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/480p/mp4/file.mp4"></video>
        </div>
        <div className='flex top-0 left-0  absolute'>
        <h1 className='font-[anzo4] text-zinc-300 text-[30vh] uppercase ml-[20vh] mt-[1vh] '>how </h1>
        <h1 className='font-[anzo4] text-white text-[30vh] uppercase ml-[20vh] mt-[28vh] absolute '>can </h1>
        <h1 className='font-[anzo4] text-white text-[30vh] uppercase ml-[100vh] mt-[1vh] '> i help </h1>
        <h1 className='font-[anzo4] text-white text-[30vh] uppercase ml-[150vh] mt-[28vh] absolute '>you</h1>

        </div>

        <div className='flex  top-[60vh]  ml-[6vw]  mt-[4vh] gap-10  h-[46vh] absolute'>
          <div className='w-[25vw]  '>
            <h4 className='font-[anzo1] text-zinc-500'> Iam a self-taught web and brand designer with a passion for creating unique and timeless
               <span className='font-[anzo1] text-zinc-100' >masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses. 
               Bespoke Freelance </span>
               for agencies.</h4>

               <img className='h-[7vh] w-[5vw] mt-4 animate-spin' src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_86,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUN.png" alt="" />

<h1 className='font-[anzo4] text-[7vh] ml-[6vw] mt-[-8vh] animate-pulse'>DESIGN 
  <span className=' ml-4 text-2xl font-[anzo0]'>01</span></h1>
  

                <h3 className='font-[anzo5] text-zinc-500'>GOT A PROJECT? </h3>
                  <h3 className='font-[anzo5] text-zinc-500'>THEN PLEASE
                    
                  <button onDoubleClick={() => handleComponentChangev('Contact me')} onClick={() => alert('+91 9654445182 / vk939239@gmail.com')} >
                  <span className='font-[anzo1] text-zinc-200 ml-2'>CONTACT ME</span>
                   </button>
           </h3>
                   
        {component}
             
            </div>
          <div className='w-[25vw] '>
            <h4 className='font-[anzo1] text-zinc-500'>With a background in strategic marketing and acknowledged expertise in web development, 
              <span className='font-[anzo1] text-zinc-100'>I aim to  my client's resources spent on macro and micro-management, marketing research,
              and hiring a whole team of a larger agency.</span></h4>
              <img className='h-[7vh] w-[5vw] mt-4 animate-none ' src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EARTH.png" alt="" />

<h1 className='font-[anzo4] text-[7vh] ml-[6vw] mt-[-8vh] animate-pulse'>DEVELOPMENT 
  <span className=' ml-4 text-2xl font-[anzo0]'>02</span></h1>
  

          </div>
          <div className='w-[25vw] '>
            <h4 className='font-[anzo1] text-zinc-500'>
              <span className='font-[anzo1] text-zinc-100'>My mission is to drive exceptional growth for my clients by increasing their brand
            appearance,</span> 
            defining their identity,engaging customers through captivating B&W aesthetics with a modern, luxurious,and minimalistic touch.</h4>

              <img className='h-[9vh] w-[5vw] mt-2 animate-bounce animate-spin-slow' src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/START%20UP.png" alt="" />

<h1 className='font-[anzo4] text-[7vh] ml-[6vw] mt-[-8vh] animate-pulse'>BRANDING 
  <span className=' ml-4 text-2xl font-[anzo0]'>03</span></h1>
  
  

          </div>

        </div>


    </div>
     
    </>

  )
}
export default Page4