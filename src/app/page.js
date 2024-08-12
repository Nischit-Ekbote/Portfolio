'use client'

import Link from 'next/link';
import style from './page.module.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { FiberManualRecordSharp } from '@mui/icons-material';
import { useState , useEffect } from 'react';
import About_me from '@/components/about_me/about_me';
import BetterBtn from '@/components/BetterBtn/BetterBtn';
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
        <div><Link href='/about'>I &lsquo; m Nischit</Link></div>
        <h1 className={style.pink}>DIGITAL</h1>
      </div>
      <div className={style.logoText2}>
        <h1 >DESIGNER</h1>
        <div>
          {/* <Link href='/contact'><FiberManualRecordSharp/> Let's Connect</Link> */}
          <BetterBtn 
            icon={<FiberManualRecordSharp/>} 
            text={"Let's Connect" }
          />
        </div>
      </div>
      <div className={style.logoText3}>
        <p>{backSlash}Front-End</p>
        <span>&</span><h1 className={style.blue}>DEVELOPER.</h1>
      </div>
      <p>From <span className={style.pink}>pixel-perfect</span> designs to <span className={style.blue}>seamless</span> interfaces.</p>
      
    </main>

    {cursor &&  <Image src='/cursors/Better_Figma_Cursor_orange.svg' alt='cursor' height={70} width={60} style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          pointerEvents: 'none', 
          zIndex: 9999, 
      }}></Image>}
    
    </>
    
  );
}