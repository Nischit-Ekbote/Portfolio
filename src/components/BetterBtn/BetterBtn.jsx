import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

export default function BetterBtn({ icon, text, href = '/contact' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [onBtn, setOnBtn] = useState(false);
  const linkRef = useRef(null);

  const updateMousePosition = useCallback((ev) => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setMousePosition({
        x: (ev.clientX - centerX) / 5,
        y: (ev.clientY - centerY) / 5
      });
    }
  }, []);

  useEffect(() => {
    if (onBtn) {
      window.addEventListener('mousemove', updateMousePosition);
      return () => window.removeEventListener('mousemove', updateMousePosition);
    }
  }, [onBtn, updateMousePosition]);

  const handleMouseEnter = () => setOnBtn(true);
  const handleMouseLeave = () => {
    setOnBtn(false);
    setMousePosition({ x: 0, y: 0 });
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
        padding: '0px 10px',
        height: '60px',
        position: 'relative',
        left: onBtn ? `${mousePosition.x}px` : '0px',
        top: onBtn ? `${mousePosition.y}px` : '0px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '50px',
        zIndex: '1000',
        overflow: 'hidden',
        border: '1px solid #ffffe332',

      }}
    >
      {icon} {text}
      <span 
        style={{
          position: 'absolute',
          zIndex: '-1',
          backgroundColor: 'blue',
          height: '250px',
          width: '250px',
          bottom: onBtn ? '-85px' : '-250px',
          transition: 'bottom 0.5s ease-out',
          borderRadius: '100%'
        }}
      />
    </Link>
  );
}

BetterBtn.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};