"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { sendEmail } from "@/lib/sendEmail";
import style from './Contact.module.css';
import Image from 'next/image';
import gsap from "gsap";
import Footer from "@/components/Footer/Footer";
import { useGSAP } from "@gsap/react";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/3dModel/scene'), {
  ssr:false
})

// Custom Hook for Mouse Position
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
}

// Memoized Cursor Component with Display Name
const MemoizedCursor = React.memo(({ mousePosition, rotate }) => (
  <Image
      src="/cursors/curve_text.svg"
      alt="Curved text cursor"
      width={70}
      height={70}
      className={styles.rotating}
      ref={rotateRef}
      style={{
        position: 'fixed',
        left: `${mousePosition.x + 3}px`,
        top: `${mousePosition.y + 5}px`,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
));
MemoizedCursor.displayName = "MemoizedCursor";

// Main Page Component with Display Name
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
  });
  const [activeField, setActiveField] = useState('name');
  const [cursor, setCursor] = useState(false);
  const [submitHover, setSubmitHover] = useState(false);
  const mousePosition = useMousePosition();
  const rotate = useRef();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => submitData.append(key, value));
    await sendEmail(submitData);
    setFormData({ name: '', email: '', subject: '', description: '' });
    setActiveField('');
  }, [formData]);

  const handleCursorEnter = useCallback(() => setCursor(true), []);
  const handleCursorLeave = useCallback(() => setCursor(false), []);
  const handleSubmitHover = useCallback(() => setSubmitHover(true), []);
  const handleSubmitLeave = useCallback(() => setSubmitHover(false), []);

  useGSAP(() => {
    gsap.to(rotate.current, {
      rotation: 360,
      duration: 3,
      ease: "none",
      repeat: -1,
    });
  }, [cursor]);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from('.input__block', {
      duration: 0.8,
      opacity: 0,
      x: 50,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  const inputFields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Nika' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Nika@gmail.com' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'SunGod' },
    { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Hello I am Nika' },
  ];

  const renderInputField = ({ name, label, type, placeholder }) => (
    <div
      key={name}
      className={`${style.input__block} input__block`}
      onFocus={() => setActiveField(name)}
      onBlur={() => setActiveField('')}
    >
      <label htmlFor={name} style={{
        top: activeField === name || formData[name] ? '-13px' : '',
        color: activeField === name ? 'orange' : '',
        backgroundImage: 'linear-gradient(#0C0E0F, black)',
        transition: 'top 0.3s ease'
      }}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          required
          autoComplete="off"
          placeholder={activeField === name ? placeholder : ''}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          required
          autoFocus={name === 'name'}
          autoComplete="off"
          placeholder={activeField === name ? placeholder : ''}
        />
      )}
    </div>
  );

  return (
    <>
      <div className={style.container} onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>
        <h1>Let&apos;s Connect <div className='threedDiv' style={{
        left:375,
        position:'absolute',
        width:'200px',
        height:'200px',
      }}>
       <Scene pos={mousePosition}/>
      </div></h1>
        <p><span className='pink'>Collaborate</span> and <span className='blue'>create</span></p>
        <form className={style.form} onSubmit={handleSubmit}>
          {inputFields.map(renderInputField)}

          <div className={`${style.input__btn} input__btn`}>
            <button
              type='submit'
              onMouseEnter={handleSubmitHover}
              onMouseLeave={handleSubmitLeave}
              style={{
                backgroundColor: submitHover ? 'beige' : 'black',
                color: submitHover ? 'black' : '',
                transition: 'all 0.3s ease'
              }}
            >
              Connect!
            </button>
            <button
              type='submit'
              onMouseEnter={handleSubmitHover}
              onMouseLeave={handleSubmitLeave}
              style={{
                backgroundColor: submitHover ? 'black' : 'beige',
                transition: 'all 0.3s ease'
              }}
            >
              <Image
                src={submitHover ? "/Arrow/arrow-top-right-normal-green.svg" : "/Arrow/arrow-right-normal-black.svg"}
                alt="right-arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </form>
        {cursor && <MemoizedCursor mousePosition={mousePosition} rotate={rotate} />}
      </div>
      {/* <Footer /> */}
    </>
  );
}

