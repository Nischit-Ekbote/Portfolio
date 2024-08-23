'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import style from './LogoLink.module.css'
import { useRouter } from "next/navigation";

export default function LogoLink() {
    const router = useRouter();
    const [shouldNavigate, setShouldNavigate] = useState(false);

    useEffect(() => {
        if (shouldNavigate) {
            router.push('/');
            setShouldNavigate(false);
        }
    }, [shouldNavigate, router]);

    const handleReloadClick = (e) => {
        e.preventDefault();
        sessionStorage.setItem('shouldNavigateHome', 'true');
        window.location.reload();
    }

    useEffect(() => {

        const shouldNavigateHome = sessionStorage.getItem('shouldNavigateHome');
        if (shouldNavigateHome === 'true') {
            sessionStorage.removeItem('shouldNavigateHome');
            setTimeout(() => setShouldNavigate(true), 1000); 
        }
    }, []);

    return (
        <div className={style.logo}>
            <Link href='/' onClick={handleReloadClick}><FiberManualRecordIcon/>Stoic</Link>
        </div>
    );
}