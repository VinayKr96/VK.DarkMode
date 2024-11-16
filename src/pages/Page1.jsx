import React, { useRef, useState } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const mouseMoving = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 15);
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 15);

    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  }

  useGSAP(function () {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: 'elastic.out(1,0.3)',
      overwrite: true
    })
  }, [xVal, yVal])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div id="page1" onMouseMove={(e) => {
        mouseMoving(e)
      }}
        className={`relative px-6 py-4 h-[125vh] w-full bg-white ${windowWidth < 768 ? 'px-2' : 'px-6'}`}>
        <div id="page1-in" className={`relative p-16 shadow-xl shadow-gray-700 rounded-[20px] h-[120vh]  bg-cover bg-center   
       bg-[url('./public/Vinay.png')] ${windowWidth < 768 ? 'p-8' : 'p-16'}`}>
          <img className={`imv h-[20vh]  ${windowWidth < 768 ? 'h-12' : 'h-18'}`}
            src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
            alt="" />

          <TiltText abc={tiltRef} />
          <Page1Bottom />
        </div>
      </div>
    </>
  )
}
export default Page1;
