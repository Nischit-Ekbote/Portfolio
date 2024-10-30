import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import style from './singleProject.module.css';
import Image from 'next/image';


export default function Page({ project, i }) {
  

  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid #ffffe332',
        padding: '20px',
        gap: '50px',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      {i % 2 === 0 ? (
        <>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Image src={project.img} alt={project.title} width={650} height={300} />
          </a>
          <div className={style.textBlock}>
            <div className={style.titleBlock}>
              <div>
                <h1 className={style.title}>{project.title}</h1>
                <p className={style.metaData}>{project.tools}</p>
              </div>
              <p className={style.metaData}>{project.year}</p>
              <Image
                src={project.webLogo}
                alt={project.title}
                width={50}
                height={50}
                style={{
                  position: 'absolute',
                  zIndex: '100',
                  right: '70px',
                  top: '63px',
                }}
              />
            </div>
            <div
              style={{
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
              }}
            >
              <ul>
                {project.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">Visit Website</Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={style.textBlock}>
            <div className={style.titleBlock}>
              <div>
                <h1 className={style.title}>{project.title}</h1>
                <p className={style.metaData}>{project.tools}</p>
              </div>
              <p className={style.metaData}>{project.year}</p>
              <Image
                src={project.webLogo}
                alt={project.title}
                width={50}
                height={50}
                style={{
                  position: 'absolute',
                  zIndex: '100',
                  right: '70px',
                  top: '63px',
                }}
              />
            </div>
            <div
              style={{
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
              }}
            >
              <ul>
                {project.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">Visit Website</Link>
            </div>
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Image src={project.img} alt={project.title} width={650} height={300} />
          </a>
        </>
      )}
    </div>
  );
}
