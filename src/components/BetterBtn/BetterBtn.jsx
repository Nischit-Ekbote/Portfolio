import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

export default function BetterBtn({ iconLeft, iconRight, text, href = '/contact', padding, width, screenWidth }) {
  const [onBtn, setOnBtn] = useState(false);
  const linkRef = useRef(null);
  const spanRef = useRef(null);
  const initialPosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((ev) => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      gsap.to(linkRef.current, {
        x: (ev.clientX - centerX) / 5,
        y: (ev.clientY - centerY) / 5,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    }
  }, []);

  useEffect(() => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      initialPosition.current = { x: rect.left, y: rect.top };
    }

    if (onBtn) {
      window.addEventListener('mousemove', updateMousePosition);
      return () => window.removeEventListener('mousemove', updateMousePosition);
    } else {
      gsap.to(linkRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    }
  }, [onBtn, updateMousePosition]);

  const handleMouseEnter = () => {
    setOnBtn(true);
    gsap.to(spanRef.current, {
      bottom: '-85px',
      duration: 0.5,
      ease: "none"
    });
  };

  const handleMouseLeave = () => {
    setOnBtn(false);
    gsap.to(spanRef.current, {
      bottom: '-250px',
      duration: 0.5,
      ease: "none"
    });
    gsap.to(linkRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <Link
      href={href}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: screenWidth < 700 ? '40px' : '60px',
        position: 'relative',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '50px',
        zIndex: '998',
        overflow: 'hidden',
        border: '1px solid #ffffe332',
        padding: padding,
        gap: '10px',
        // width:screenWidth < 700 ? 10 : width,
        fontSize: screenWidth < 700 ? '10px' : ''
      }}
    >
      {iconLeft} {text} {iconRight}
      <span 
        ref={spanRef}
        style={{
          position: 'absolute',
          zIndex: '-1',
          backgroundColor: '#7161ef',
          height: '250px',
          width: '250px',
          bottom: '-250px',
          borderRadius: '100%',
        }}
      />
    </Link>
  );
}

BetterBtn.propTypes = {
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};