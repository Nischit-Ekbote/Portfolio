'use client'
import Link from "next/link";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import style from './LogoLink.module.css'

export default function LogoLink() {

    return (
        <div className={style.logo}>
            <Link href='/' onClick={()=>{window.location.reload()}}><FiberManualRecordIcon/>Stoic</Link>
        </div>
    );
}