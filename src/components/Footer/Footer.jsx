'use client'
import Link from 'next/link';
import Image from 'next/image';
import style from './Footer.module.css'
import BetterBtn from '../BetterBtn/BetterBtn';
import VerticalLine from './VerticalLine';
import { useState } from 'react'

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

    const navigateItems = navigate.map((item, i) => (
        <Link href={item.url} key={i}><li>{item.name}</li></Link>
    ));

    const connectItems = connect.map((item, i) => (
        <Link href={item.url} key={i}><li><Image src={item.imgUrl} alt={item.name} height={20} width={20} style={{
            marginRight: '10px'
        }}></Image>{item.name}</li></Link>
    ));

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div className={style.container}>
                <div className={style.logo}><p>STOIC</p></div>
                <div className={style.text}>
                    <div className={style.quote}><p><span className='pink'>Elegance</span> paired with <span className='blue'>efficiency</span></p></div>
                    <VerticalLine />
                    <div className={style.nav}>
                        <p>NAVIGATE</p>
                        <ul>
                            {navigateItems}
                        </ul>
                    </div>
                    <VerticalLine />
                    <div className={style.tag__along}>
                        <p>TAG ALONG</p>
                        <ul>
                            {connectItems}
                        </ul>
                    </div>
                    <VerticalLine />
                    <div className={style.connect__project__btn}>
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
                            <p>Come Say Hi!!</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
