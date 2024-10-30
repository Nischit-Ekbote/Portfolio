'use client'
import Link from 'next/link';
import Image from 'next/image';
import style from './Footer.module.css';
import BetterBtn from '../BetterBtn/BetterBtn';
import VerticalLine from './VerticalLine';
import { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation'


gsap.registerPlugin(ScrollTrigger);

const navigate = [{
    name: 'Home',
    url:'/'
},
{
    name: 'About',
    url:'/about'
},
{
    name: 'Contact',
    url:'/contact'
}];

const connect = [{
    name:'LinkedIn',
    imgUrl:'contact/LinkedIn.svg',
    url:'https://www.linkedin.com/in/nischit-ekbote-4882762a4/'
},
{
    name:'Discord',
    imgUrl:'contact/Discord.svg',
    url:''
},
{
    name:'Instagram',
    imgUrl:'contact/Instagram.svg',
    url:'https://www.instagram.com/nischit.exe/'
},
{
    name:'Github',
    imgUrl:'contact/Github.svg',
    url:'https://github.com/Nischit-Ekbote'
}];

export default function Page() {

    const [isHover, setIsHover] = useState({ connect: false, project: false });
    const pathname = usePathname()

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.footerText',
                start: 'top 100%', // triggers when the top of the text reaches 80% of the viewport height
                toggleActions: 'play none none none', // play animation on scroll, no reverse, reset, or repeat
            }
        });
        
        timeline.from('.footerText', {
            duration: 0.8,
            opacity: 0,
            x: 50,
            stagger: 0.2,
            ease: "power3.out"
        });

        timeline.to('.footerText', {
            duration: 0.8,
            x: 0,
            opacity: 1,
            ease: "power3.out"
        });
    }, []);

    const navigateItems = navigate.map((item, i) => (
        <Link href={item.url} key={i}><li className={style.naigativeItems}>{item.name}</li></Link>
    ));

     const connectItems = connect.map((item, i) => (
        <Link href={item.url} key={i} target="_blank" rel="noopener noreferrer">
            <Image src={item.imgUrl} alt={item.name} height={20} width={20} style={{
                marginRight: '10px'
            }} />
            {item.name}
        </Link>
    ));
    
    return (
        <>
            <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div className={style.container}>
                <div className={style.logo}><p>STOIC</p></div>
                <div className={`${style.text} text`}>
                    <div className={`${style.quote} footerText`}><p><span className='pink'>Elegance</span> paired with <span className='blue'>efficiency</span></p></div>
                    <VerticalLine />
                    <div className={`${style.nav} footerText`}>
                        <p>NAVIGATE</p>
                        <ul>
                            {navigateItems}
                        </ul>
                    </div>
                    <VerticalLine />
                    <div className={`${style.tag__along} footerText`}>
                        <p>TAG ALONG</p>
                        <ul>
                            {connectItems}
                        </ul>
                    </div>
                    <VerticalLine />
                    <div className={`${style.connect__project__btn} footerText`}>
                        <Link href='/contact'
                            onMouseOver={() => setIsHover(prev => ({ ...prev, connect: true }))}
                            onMouseOut={() => setIsHover(prev => ({ ...prev, connect: false }))}
                        >
                            <h4><span style={{
                                color : isHover.connect && '#73D8F7'
                            }}>Connect</span> <Image src={isHover.connect ? 'Arrow/arrow-top-right-large.svg' : 'Arrow/arrow-right-large.svg'} alt='right-arrow' height={20} width={20}  /></h4>
                            <p>Come Say Hi!!</p>
                        </Link>
                        <hr style={{
                            border:'1px solid #ffffe332'
                        }}></hr>
                        <Link href='/projects' 
                            onMouseOver={() => setIsHover(prev => ({ ...prev, project: true }))}
                            onMouseOut={() => setIsHover(prev => ({ ...prev, project: false }))}
                        >
                            <h4><span style={{
                                color : isHover.project && '#73D8F7'
                            }}>Projects </span> <Image src={isHover.project ? 'Arrow/arrow-top-right-large.svg' : 'Arrow/arrow-right-large.svg'} alt='right-arrow' height={20} width={20} /></h4>
                            <p>View My Work!!</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div style={{
           height:30,
           paddingLeft:70
        }}><p>STOIC ©2024 - Privacy Policy</p></div>
        </>
    );
}
