import React from "react";
import 'remixicon/fonts/remixicon.css'
import PageHire from "../pages/PageHire";
import Page6C from "../pages/Page6C";
import PageEndC from "../pages/PageEndC";
import Page8C from "../pages/Page8C";

const Header = () => {

  const [component, setComponent] = React.useState(null);

  const handleComponentChange = (componentName) => {
    switch (componentName) {
      case 'Hire me':
        setComponent(<PageHire  />);
        break;
      case 'About':
        setComponent(<Page6C  />);
        break;
      case 'Contact':
        setComponent(<PageEndC />);
        break;
      case 'FAQ':
        setComponent(<Page8C />);
        break;
      default:
        setComponent(null);
    }
  }

  return (
    <>

      <div className=' top-0   ml-[80vw] fixed h-[90vh] w-[16vw] mt-6 z-10 '>

      <button
          className='bg-black border-2 font-[anzo] text-xl ml-[1vw] mt-[6vh] mr-2 px-6 py-2 hover:bg-gray-500 rounded-[30px]'
          onClick={() => handleComponentChange('Hire me')}>
          Hire me
        </button>

        
        <i class="ri-search-line text-3xl animate-pulse" id="search-icon" style={{ color: 'black', cursor: 'pointer' }} onClick={() => { document.getElementById('search-icon').classList.toggle('rotate-180'); document.getElementById('search-bar').classList.toggle('hidden'); document.getElementById('search-bar').focus(); document.getElementById('search-icon').classList.toggle('text-zinc-500'); document.getElementById('search-icon').classList.toggle('text-zinc-500') }}></i>
        <input type="text" id="search-bar" className=' hidden absolute mt-[15vh] ml-[-12.5vw] w-[14vw] h-10  text-lg bg-transparent text-gray-700 rounded-lg border-b-[1px] border-r-[1px] border-l-[1px] focus:outline-none focus:ring-1 focus:ring-zinc-400  placeholder-black' placeholder="Search..." />

        <i className="ri-more-2-fill text-3xl" id="more-icon" style={{ color: 'black', cursor: 'pointer' }} onClick={() => { document.getElementById('more-icon').classList.toggle('rotate-180'); document.getElementById('more-menu').classList.toggle('hidden') }}></i>
        <ul id="more-menu" className="hidden absolute  mt-[9vh] ml-[10vw] w-[5vw] h-25 text-sm text-black rounded-lg placeholder-black  gap-4 ">
          <li className="p-2 hover:bg-gray-300 text-black rounded-lg cursor-pointer" style={{ borderBottom: '1px solid gray' }} onClick={() => handleComponentChange('About')}>About</li>
          <li className="p-2 hover:bg-gray-300 text-black rounded-lg cursor-pointer" style={{ borderBottom: '1px solid gray' }} onClick={() => handleComponentChange('Contact')}>Contact</li>
          <li className="p-2 hover:bg-gray-300 text-black rounded-lg cursor-pointer" onClick={() => handleComponentChange('FAQ')}>FAQ</li>
        </ul>

        {component}

        <img className='imv mt-[45vh] ml-[6vw]  h-20 mb-4' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt="" />
        <img className='imv ml-[6vw]  h-20   ' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt="" />

      </div>

    </>

  )
}
export default Header