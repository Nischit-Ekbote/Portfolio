import Link from 'next/link';
import style from './singleProject.module.css'
import Image from 'next/image';

export default function Page({project , i}) {
    // console.log(project.link)
    // Function to determine if a URL is external
    const isExternalLink = (url) => {
        return url.startsWith('http://') || url.startsWith('https://');
    };

    return (
        <div style={{
            display:'flex',
            border:'1px solid #ffffe332',
            padding:'20px',
            gap:'50px',
            borderRadius:'10px',
            overflow:'hidden',
        }}>
            {i%2==0 ? 
            <>
            
                <a href={project.link}><Image src={project.img} alt={project.title}  width={650} height={300}></Image></a>
                <div className={style.textBlock}>
                    <div className={style.titleBlock}>
                        <div >
                            <h1 className={style.title}>{project.title}</h1>
                            <p className={style.metaData}>{project.tools}</p>
                        </div>
                        <p className={style.metaData}>{project.year}</p>
                    </div>
                    {isExternalLink(project.link) ? (
                        <button><a href={project.link} target="_blank" rel="noopener noreferrer">Visit Website</a></button>
                    ) : (
                        <button><Link href={project.link}>Visit Website</Link></button>
                    )}
                </div>
            </> :
            <>
                <div className={style.textBlock}>
                    <div className={style.titleBlock}>
                        <div >
                            <h1 className={style.title}>{project.title}</h1>
                            <p className={style.metaData}>{project.tools}</p>
                        </div>
                        <p className={style.metaData}>{project.year}</p>
                    </div>
                    {isExternalLink(project.link) ? (
                        <button><a href={project.link} target="_blank" rel="noopener noreferrer">Visit Website</a></button>
                    ) : (
                       <button> <Link href={project.link}>Visit Website</Link></button>
                    )}
                </div>
                <Image src={project.img} alt={project.title}  width={650} height={300}></Image>
            </>   
            }
        </div>
    );
}