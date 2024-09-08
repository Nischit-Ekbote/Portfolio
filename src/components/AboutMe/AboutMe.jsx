'use client'
import style from './AboutMe.module.css'
import { ReactTyped } from "react-typed";
import MainSlider from '@/components/SliddingBanner/MainSlider';

export default function AboutMe() {
    return (
        <section className={style.outer__container}>
            <div className={style.inner__container}>
                <h1 style={{
                    height:'fit-content',
                    fontSize: '4.4vw',
                    fontWeight: '400',
                    padding: '80px 0px 0px 0px',
                    lineHeight: '30px',
                    textAlign:'left',
                    width:1400
                }}>About Me</h1>
                <p style={{
                    fontSize: '1.3vw',
                    padding: '30px 20px 20px 0px ',
                    width:1400,
                    // width:450,
                }}>Hello! I&apos;m <span className='orange' style={{
                    fontSize:30
                }}>Nischit Ekbote!!</span>, a passionate <span className='blue'><ReactTyped strings={["digital designer." , " front-end developer."]} typeSpeed={100} backSpeed={20} loop /></span><br /> With a keen eye for creating pixel-perfect designs and seamless interfaces.</p>
                <p style={{
                    fontSize: '1.3vw',
                    padding: '0px 50% 30px 0px ',
                    borderBottom: '1px solid #ffffe332',
                    fontWeight:100,
                    textAlign:'justify',
                    width:1400,
                }}>My approach combines <span className='pink'>creativity</span> with <span className='blue'>technical</span> expertise, allowing me to bridge the gap between <span className='pink'>aesthetics</span> and <span className='blue'>functionality</span>. I&apos;m constantly exploring new technologies and design trends to stay at the forefront of <span className='green'>web development</span>.</p>
                <MainSlider/>
             </div>
        </section>
    );
}