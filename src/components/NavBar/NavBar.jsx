'use client'
import Link from "next/link";
import NavBarItems from "./NavBarItems";
import style from './NavBar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LogoLink from "../logoLink/LogoLink";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";

const items = [{
    path:'/',
    name:'Home',
    icon:<HomeIcon/>
},
{
    path:'/projects',
    name:'My Projects',
    icon:<WorkIcon/>
    
},
{
    path:'/about',
    name:'About Me',
    icon:<ContactPageIcon/>
},
];

export default function NavBar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(undefined);
    
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const list = items.map((item, i) => (
        <NavBarItems item={item} key={i}/>
    ));
    
    const toggleSidebar = () => {
        setTimeout(() => {
            setIsSideBarOpen(!isSideBarOpen);
        }, 100);
    };

    const sidebarItemsStyle = {
        height: 'calc(100vh - 70px)',
        display: 'flex',
        position: 'fixed',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '30px',
        right: '0px',
        width:'50%',
        alignItems:'center',
        zIndex: 1000,
        color:'#FFFFE3',
        backdropFilter: 'blur(10px)'
    };
    
    return (
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}>
            <nav className={style.container}>
                <LogoLink/>
                {isSideBarOpen==false && <div className={style.items}>            
                    {list}
                </div>}

                <div className={style.contact}>
                    <Link href='/contact' prefetch={false}>
                        <MarkunreadIcon/>   
                    Contact Me</Link>
                </div>
                {windowWidth !== undefined && windowWidth < 1000 &&
                    <div className={style.sidebarIcon} onClick={toggleSidebar} style={{
                        transform: isSideBarOpen ? 'rotate(-90deg)' : "",
                        transition: '0.3s',
                        position:'absolute',
                        right:'20px',
                        zIndex:'10000'
                    }}>
                        <MenuIcon/>
                    </div>
                }
            </nav>
            {isSideBarOpen && windowWidth < 1000 && (
                <div className={style.sidebar}>

                    <div className={style.sidebaritems} style={sidebarItemsStyle}>            
                        {list}
                        <Link href='/contact'>
                            <MarkunreadIcon/>
                            Contact Me
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}