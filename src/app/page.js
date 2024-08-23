'use client'

import Link from 'next/link';
import style from './page.module.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { FiberManualRecordSharp } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { useState , useEffect } from 'react';
import About_me from '@/components/about_me/about_me';
import BetterBtn from '@/components/BetterBtn/BetterBtn';
import MainSlider from '@/components/SliddingBanner/MainSlider';
import NextNProgress from 'nextjs-progressbar';
import Image from 'next/image';



export const dynamic = 'force-dynamic'

export default function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor , setCursor] = useState(false);
  const backSlash = '//';

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

  return (
    <>
      <main className={style.main} onMouseOver={()=> setCursor(true)} onMouseOut={()=> setCursor(false)} style={{
        cursor: cursor ? 'none' : 'pointer'
      }}>
      <p>{backSlash}HeIIo</p>
      <div className={style.logoText1}>
        <div>
          <NextNProgress/>
          <BetterBtn 
            iconLeft={<InfoIcon/>}
            text={" I'm Nischit " }
            padding={'0px 20px'}
          /></div>
        <h1 className='pink'>DIGITAL</h1>
      </div>
      <div className={style.logoText2}>
        <h1 >DESIGNER</h1>
        <div>
          {/* <Link href='/contact'><FiberManualRecordSharp/> Let's Connect</Link> */}
          <BetterBtn 
            iconLeft={<FiberManualRecordSharp/>} 
            text={"Let's Connect" }
            padding={'0px 20px'}
          />
        </div>
      </div>
      <div className={style.logoText3}>
        <p>{backSlash}Front-End</p>
        <span>&</span><h1 className='blue'>DEVELOPER.</h1>
      </div>
      <p>From <span className='pink'>pixel-perfect</span> designs to <span className='blue'>seamless</span> interfaces.</p>
      
    </main>

    {cursor &&  <Image src='/cursors/Better_Figma_Cursor_orange.svg' alt='cursor' height={70} width={60} style={{
          transform:'translateY(-20px)',
          // transform:'translateX(-5px)',
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          pointerEvents: 'none', 
          zIndex: 9999, 
      }}></Image>}
      <MainSlider/>
      
    </>
    
  );
}