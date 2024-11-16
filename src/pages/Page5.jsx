import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.from('.p2h33', {
            transform: 'rotateX(-80deg)',
            opacity: 0,
            duration: 1.5,
            stagger: 1,
            scrollTrigger: {
                trigger: '.p2h33',
                start: 'top 90%',
                end: 'top -470%',
                scrub: true,
            }
        })
    })

    return (
        <>
            <div id="se22" className='text-center p-10 bg-white text-black'>

                <div className='p2h33 mt-10'>
                    <h1 className='font-[anzo4] text-[52vh] md:text-[30vw] sm:text-[25vw] text-black uppercase xl:text-[40vw] mt-2 leading-[40vw]'>HElping</h1>
                </div>
                <div className='p2h33'>
                    <h1 className='font-[anzo4] text-[52vh] md:text-[30vw] sm:text-[25vw] text-black uppercase xl:text-[38vw] mt-2 leading-[40vw]'>my</h1>
                </div>
                <div className='p2h33'>
                    <h1 className='font-[anzo4] text-[52vh] md:text-[30vw] sm:text-[25vw] text-black uppercase xl:text-[38vw] mt-2 leading-[40vw]'>clients</h1>
                </div>
                <div className='p2h33'>
                    <h1 className='font-[anzo4] text-[52vh] md:text-[30vw] sm:text-[25vw] text-black uppercase xl:text-[38vw] mt-2 leading-[40vw]'>to achieve</h1>
                </div>
                <div className='p2h33'>
                    <h1 className='font-[anzo4] text-[52vh] md:text-[30vw] sm:text-[25vw] text-black uppercase xl:text-[38vw] mt-2 leading-[40vw]'>their</h1>
                </div>
                <div className='p2h33'>
                    <h1 className='font-[anzo4] text-[52vh] md:text-[30vw] sm:text-[25vw] text-black uppercase xl:text-[38vw] mt-2 leading-[40vw]'>dreams!</h1>
                </div>

            </div>
        </>
    )
}
export default Page5

gsap.from('.p2h33', {
    transform: 'rotateX(-80deg)',
    opacity: 0,
    duration: 1.5,
    stagger: 1,
    scrollTrigger: {
        trigger: '.p2h33',
        start: 'top 110%',
        end: 'top -415%',
        scrub: true,
    }
})

gsap.from('.p2h33 h1', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.p2h33',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
    }
})

gsap.from('.p2h33 h1', {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.p2h33',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
    },
    breakpoints: {
        '(max-width: 768px)': {
            scale: 0.3,
        },
        '(max-width: 480px)': {
            scale: 0.2,
        }
    }
})
