'use client'
import style from './my_projects.module.css'
import Page from './singleProject/SingleProject';
import { useState, useEffect } from 'react';


const projects = [{
    title: 'Quil-Quest',
    webLogo:'/project_thumbnails/Quil_Quest_Logo.svg',
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
    title: 'Quil-Quest',
    webLogo:'/project_thumbnails/Quil_Quest_Logo.svg',
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
}
];

export default function My_projects() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursor , setCursor] = useState(false);

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const list = projects.map((project , i) => (
        <Page project={project} key={i} i={i}/>
    ));
    
    return (
        <div className={style.container} onMouseOver={()=>{setCursor(true)}} onMouseOut={()=>{setCursor(false)}}>
            <div>
                <h1 style={{
                    fontSize:'60px',
                    fontWeight:'400',
                    paddingTop:'50px',     
                    lineHeight:'30px'               
                    // color:'ffb5fb'
                }}>My Projects</h1>
                <p style={{
                    fontSize:'20px',
                    paddingBottom:'30px',
                    borderBottom:'1px solid #ffffe332',
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