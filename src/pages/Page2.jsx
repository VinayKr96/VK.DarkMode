import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.p2h3', {
      transform: 'rotateX(-80deg)',
      opacity: 0,
      duration: 1.5,
      stagger: 1,
      scrollTrigger: {
        trigger: '.p2h3',
        start: 'top 70%',
        end: 'top -360%',
        scrub: true,
      }
    })
  })

  return (
    <>
      <div id="se2" className='text-center p-10 bg-white text-black md:p-20 lg:p-30 xl:p-40'>
        <h3 className='text-gray-500 text-2xl font-[anzo2] mt-[-12vh] md:text-3xl lg:text-4xl xl:text-2xl'>
          &copy;  VK.DarkMode 2024 | designed and developed
        </h3>

        <div className='p2h3 mt-30 md:mt-60 lg:mt-80 xl:mt-20'>
          <h1 className='font-[anzo4] text-[42vw] text-black uppercase leading-[35vw] md:text-[35vw] lg:text-[30vw] xl:text-[38vw]'>
            IMPACTFUL
          </h1>
        </div>
        <div className='p2h3'>
          <h1 className='font-[anzo4] text-[42vw] text-black uppercase leading-[35vw] md:text-[35vw] lg:text-[30vw] xl:text-[38vw]'>
            Design
          </h1>
        </div>
        <div className='p2h3'>
          <h1 className='font-[anzo4] text-[42vw] text-black uppercase leading-[35vw] md:text-[35vw] lg:text-[30vw] xl:text-[38vw]'>
            Is the
          </h1>
        </div>
        <div className='p2h3'>
          <h1 className='font-[anzo4] text-[42vw] text-black uppercase leading-[35vw] md:text-[35vw] lg:text-[30vw] xl:text-[38vw]'>
            Design
          </h1>
        </div>
        <div className='p2h3'>
          <h1 className='font-[anzo4] text-[42vw] text-black uppercase leading-[35vw] md:text-[35vw] lg:text-[30vw] xl:text-[38vw]'>
            that
          </h1>
        </div>
        <div className='p2h3'>
          <h1 className='font-[anzo4] text-[42vw] text-black uppercase leading-[35vw] md:text-[35vw] lg:text-[30vw] xl:text-[38vw]'>
            Works
          </h1>
        </div>

        <div id="p2DI" className='gap-6 flex items-center justify-center mix-blend-mode md:gap-12 lg:gap-12 xl:gap-10'>
          <img className='h-[12vh] w-[16vh] bg-transparent opacity-80 mix-blend-mode rounded-lg shadow-lg hover:scale-125 transition duration-500 md:h-[15vh] md:w-[20vh] lg:h-[18vh] lg:w-[24vh] xl:h-[12vh] xl:w-[16vh]' src="https://w7.pngwing.com/pngs/458/865/png-transparent-tesla-logo-tesla-motors-car-tesla-model-s-tesla-model-3-decal-angle-text-rectangle-thumbnail.png" alt="" />
          <img className='h-[12vh] w-[16vh] bg-transparent opacity-80 mix-blend-mode rounded-full shadow-md hover:rotate-180 transition duration-500 md:h-[15vh] md:w-[20vh] lg:h-[18vh] lg:w-[24vh] xl:h-[12vh] xl:w-[16vh]' src="https://w7.pngwing.com/pngs/822/712/png-transparent-2012-honda-cr-v-2017-honda-cr-v-honda-logo-2018-honda-cr-v-honda-angle-text-logo-thumbnail.png" alt="" />
          <img className='h-[12vh] w-[16vh] bg-transparent opacity-80 mix-blend-mode rounded-sm shadow-sm hover:skew-x-12 transition duration-500 md:h-[15vh] md:w-[20vh] lg:h-[18vh] lg:w-[24vh] xl:h-[12vh] xl:w-[16vh]' src="https://w7.pngwing.com/pngs/784/179/png-transparent-black-signal-icon-contactless-payment-google-pay-debit-card-contactless-smart-card-mastercard-text-logo-payment-thumbnail.png" alt="" />
          <img className='h-[12vh] w-[16vh] bg-transparent opacity-80 mix-blend-mode rounded-md shadow hover:scale-x-150 transition duration-500 md:h-[15vh] md:w-[20vh] lg:h-[18vh] lg:w-[24vh] xl:h-[12vh] xl:w-[16vh]' src="https://w7.pngwing.com/pngs/581/598/png-transparent-bulgari-jewellery-brand-logo-iron-on-behance-angle-white-bracelet-thumbnail.png" alt="" />
          <img className='h-[12vh] w-[16vh] bg-transparent opacity-80 mix-blend-mode rounded-xl shadow-xl hover:skew-y-12 transition duration-500 md:h-[15vh] md:w-[20vh] lg:h-[18vh] lg:w-[24vh] xl:h-[12vh] xl:w-[16vh]' src="https://w7.pngwing.com/pngs/600/114/png-transparent-dragon-kali-linux-android-linux-logo-silhouette-linux-thumbnail.png" alt="" />
          <img className='h-[12vh] w-[16vh] bg-transparent opacity-80 mix-blend-mode rounded-2xl shadow-2xl hover:translate-x-20 transition duration-500 md:h-[15vh] md:w-[20vh] lg:h-[18vh] lg:w-[24vh] xl:h-[12vh] xl:w-[16vh]' src="https://w7.pngwing.com/pngs/621/830/png-transparent-fingerprint-computer-icons-unique-miscellaneous-angle-text-thumbnail.png" alt="" />
        </div>

        <div className='h-[2px] w-1/3 relative left-1/2 -translate-x-1/2 mt-24 bg-black md:w-1/2 lg:w-2/3 xl:w-3/4'></div>

      </div>
    </>
  )
}
export default Page2
