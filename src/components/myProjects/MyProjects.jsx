'use client'
import style from './my_projects.module.css';
import Page from './singleProject/SingleProject';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Quil-Quest',
    webLogo: '/project_thumbnails/Quil_Quest_Logo.svg',
    desc: [
      'User Registration and Authentication',
      'Content Creation',
      'Content Viewing',
      'Simple Structure',
      'User Profiles',
      'Easy Navigation'
    ],
    tools: 'Next.js MongoDb',
    img: '/project_thumbnails/Quil_quest.jpg',
    year: '2024',
    link: 'https://quil-quest.vercel.app',
  },
  {
    title: 'Gilded-Bit',
    webLogo: '/project_thumbnails/Gilded_Bit_Logo.svg',
    desc: [
      'User Registration and Authentication',
      'Buying and Selling of Digital Gold',
      'Purcase history',
      'Simple Structure',
      'User Profiles',
      'Easy Navigation'
    ],
    tools: 'React, Express, Postgres',
    img: '/project_thumbnails/Gilded_Bit.png',
    year: '2024',
    link: 'https://gilded-bit.pages.dev/',
  },
];

export default function MyProjects() {
    
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState(false);
  const projectRef = useRef();

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: projectRef.current,
          start: 'top 0%',
          end: 'bottom top',
          scrub: true,
          
        },
      }
    );
  }, []);

  const list = projects.map((project, i) => (
    <Page project={project} key={i} i={i} ref={projectRef}/>
  ));

  return (
    <div className={style.container} onMouseOver={() => setCursor(true)} onMouseOut={() => setCursor(false)}>
      <div>
        <h1 style={{
          fontSize: '60px',
          fontWeight: '400',
          paddingTop: '50px',
          lineHeight: '30px'
        }}>My Projects</h1>
        <p style={{
          fontSize: '20px',
          paddingBottom: '30px',
          borderBottom: '1px solid #ffffe332',
        }}>Turning <span className='pink'>ideas</span> into <span className='blue'>reality</span></p>
        {list}
      </div>
      {cursor && <span style={{
        position: 'fixed',
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        pointerEvents: 'none',
        zIndex: 9999,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: '#7161ef',
        transition: 'transform 1s ease',
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference',
      }}>
      </span>}
    </div>
  );
}
