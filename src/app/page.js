'use client'

import Link from 'next/link';
import style from './page.module.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { FiberManualRecordSharp } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { useState , useEffect, useRef } from 'react';
import About_me from '@/components/about_me/about_me';
import BetterBtn from '@/components/BetterBtn/BetterBtn';
import MainSlider from '@/components/SliddingBanner/MainSlider';
import NextNProgress from 'nextjs-progressbar';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/3dModel/scene'), {
  ssr:false
})

export default function App() {
  const container = useRef();
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

  useGSAP(() => {
    // Animation for logoText1
    gsap.from('.logoText1', {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
    });

    // Animation for logoText2
    gsap.from('.logoText2', {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
      delay: 0.5
    });

    // Continuous rotation animation for the 'i' in DESIGNER
    gsap.to('.i', {
      rotationX:720,
      duration: 2,       
      ease: 'power2.out',       
      delay: 2.5,
      repeat: -1,
      // ease: 'linear',
      transformOrigin: '50% 50%'
    });
    gsap.from('.logoText3', {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
      delay:1
    });
    gsap.from('.threeDdiv',{
      opacity: 0,
      delay :1.5,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <>
      {/* <div className='threedDiv' style={{
        position:'absolute',
        width:'100%',
        height:'100%',
      }}>
       <Scene pos={mousePosition}/>
      </div> */}
      <main className={style.main} onMouseOver={() => setCursor(true)} onMouseOut={() => setCursor(false)} style={{
        cursor: cursor ? 'none' : 'pointer'
      }} ref={container}>
        <p>{backSlash}HeIIo</p>
        <div className={`${style.logoText1} logoText1`}> 
          <div>
            <NextNProgress/>
            <BetterBtn 
              iconLeft={<InfoIcon/>}
              text={" I'm Nischit " }
              padding={'0px 20px'}
            />
          </div>
          <h1 className='pink'>DIGITAL</h1>
        </div>
        <div className={`${style.logoText2} logoText2`}>
          <h1>DES<span className='i' style={{display: 'inline-block' , fontSize:'70px' , fontWeight:900,margin:'0px 6px 0px 6px'}}>i</span>GNER</h1>
          <div>
            <BetterBtn 
              iconLeft={<FiberManualRecordSharp/>} 
              text={"Let's Connect" }
              padding={'0px 20px'}
            />
          </div>
        </div>
        <div className={`${style.logoText3} logoText3`}>
          <p>{backSlash}Front-End</p>
          <span>&</span><h1 className='blue'>DEVELOPER.</h1>
        </div>
        <p>From <span className='pink'>pixel-perfect</span> designs to <span className='blue'>seamless</span> interfaces.</p>
      </main>

      {cursor && <Image src='/cursors/Better_Figma_Cursor_orange.svg' alt='cursor' height={70} width={60} style={{
        transform:'translateY(-20px)',
        position: 'fixed',
        left: mousePosition.x,
        top: mousePosition.y,
        pointerEvents: 'none', 
        zIndex: 9999, 
      }}/>}
      <MainSlider/>
    </>
  );
}