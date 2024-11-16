import React from "react";
const Page10=()=>{
  return(
    
    <>
    <div className='p-10  relative bg-white'>
    <img className='  shadow-transparent' src="https://static.wixstatic.com/media/f1c650_50b3eb1a161343a6a87b1fe48cb27f9a~mv2.png/v1/fill/w_1140,h_1703,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Astro%20Me.png" alt="" />
    
    <div className='text-[4vh] h-9 w-[17vw] bg-black  shadow-lg shadow-black   mt-[-260vh]  left-[5vw] font-[anzo4] rounded-full  absolute'>
    
    <i class='ri-vuejs-line  ml-2 rounded-full bg-black hover:scale-125 transition duration-300' onClick={() => alert('Vue.js icon clicked!')}></i>
<i class='ri-instagram-line ml-3 rounded-full bg-black hover:rotate-360 transition duration-500' onMouseOver={() => alert('@ig__vinay_k.r')}></i>
<i class='ri-twitter-x-fill ml-3 rounded-full bg-black hover:scale-x-125 transition duration-300' onClick={() => alert('Twitter icon animation ended!')}></i>
<i class='ri-mail-line ml-3 rounded-full bg-black hover:animate-bounce transition duration-500' onClick={() => alert('vk939239@gmail.com')}></i>
<span class='absolute mt-4 ml-3  w-2 h-2 bg-green-500 rounded-full animate-pulse hover:animate-spin transition duration-300' onFocus={() => console.log('Green dot focused!')}></span>
<i class='ri-github-fill ml-8 rounded-full bg-black hover:scale-150 transition duration-500' onClick={() => alert('Github icon touched!')}></i>


    <h1 className='text-[28vh] text-black mt-10 left-[2vw] font-[anzo4]  absolute'>EGO</h1>
    </div>

    </div>
     
    </>

  )
}
export default Page10