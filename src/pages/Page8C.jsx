import React from "react";

const Page8C=()=>{

  const [component, setComponent] = React.useState(null);

  const handleComponentChangevk = (componentName) => {
    switch (componentName) {
      
      case 'EMAIL ME':
        setComponent();
        break;
      
      default:
        setComponent(null);
    }
  }

  return(
    
    <>
    <div className='h-[110vh] w-[100vw] relative p-5 mt-[-20vh] ml-[-80vw] bg-white'>
        <div className=' relative h-[98vh] w-full overflow-hidden object-cover 
         bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1857,h_911,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg)] rounded-[30px]'>
            <div>
            <h1 className='font-[anzo4] text-white text-[45vh] uppercase ml-8 mt-[-10vh] absolute'>RIGHT</h1>
            <h1 className='font-[anzo4] text-zinc-300 text-[45vh] uppercase ml-8 mt-[30vh] absolute'>FIT</h1>

            </div>
            <div className='text-[2.4vh] gap-4 mb-10 mt-2 ml-[70vh] h-[70vh] w-[50vw]'>
              <h3 className='mt-5'>
              <span className='font-[anzo2]'>PERSONALITY</span>
              </h3>
              <h2 className='font-[anzo0]'>
              Business relationships build on trust and compassion vs how can I get more for less +/-
              </h2>
              <h3 className='mt-5'>
              <span className='font-[anzo2]'>APPROACH</span>
              </h3>
              <h2 className='font-[anzo0]'>
               Full dive into personality, goals and objectives with transparency of worq process 
               vs template and unmanageable office routine +/-
              </h2>
              <h3 className='mt-5'>
              <span className='font-[anzo2]'>DESIGN</span>
              </h3>
              <h2 className='font-[anzo0]'>
              Design that is actually functional and helps to achieve results is design that works +/-
              </h2>
              <h3 className='mt-5'>
              <span className='font-[anzo2]'>FOCUS</span>
              </h3>
              <h2 className='font-[anzo0]'>
              
               How can I help and what can I do solve your problem or objective vs how can I sell you more +/-
              </h2>
              <h3 className='mt-5'>
              <span className='font-[anzo2]'>FIT</span>
              </h3>
              <h2 className='font-[anzo0]'>
              
              The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself! +/-
              </h2>
              <h3 className='mt-5'>
              <span className='font-[anzo2]'>CORE VALUES</span>
              </h3>
              <h2 className='font-[anzo0]'>
              
              Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-
              </h2>
              <h3 className='mt-5'>
              <span className='font-[anzo2]'>TO CONSIDER</span>
              </h3>
              <h2 className='font-[anzo0] mb-[18vh]'>
              
              Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-
              </h2>

            </div>
            <div className=' ml-8 mt-8  w-[20vw] absolute'>
              <h2 className='font-[anzo2]'>SOUNDS GOOD?</h2>
              <h2 className='font-[anzo2]'>THEN PLEASE  

                <button onDoubleClick={() => handleComponentChangevk('EMAIL ME')} onClick={() => alert('vk939239@gmail.com')} >

                <span className='font-[anzo0] ml-2'>EMAIL ME</span>
                </button>
              </h2>
              {component}

            </div>



        </div>

    </div>
     
    </>

  )
}
export default Page8C