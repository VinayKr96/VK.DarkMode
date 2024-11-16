import React from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('.imv',{
      rotate:360, 
      duration:3,
      repeat:-1,
      ease:'linear'
    })
  })

  return(
    <>
      <div className='ml-2 p-20 flex justify-between items-end bottom-[-6vh] left-0 absolute w-[50vw] md:p-10 lg:p-20 xl:p-30'>
        <div className='text-center md:text-left lg:text-center xl:text-left'>
          <h2 className='text-xl font-[anzo3] md:text-2xl lg:text-2xl xl:text-2xl'>BRAND DEVELOPER | SOFTWARE ENGINEER</h2>
          <h3 className='text-2xl font-[anzo2] text-gray-400 md:text-2xl lg:text-2xl xl:text-3xl'>BESPOKE FREELANCE</h3>
        </div>
      </div>
    </>
  )
}
export default Page1Bottom
