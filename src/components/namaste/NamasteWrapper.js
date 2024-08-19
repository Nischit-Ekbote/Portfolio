// NamasteWrapper.js
'use client'

import { useState, useEffect } from "react";
import styles from './NamasteWrapper.module.css';

export default function NamasteWrapper({ children }) {
    const [greetingText, setGreetingText] = useState("");
    const [showNamaste, setShowNamaste] = useState(true);
    const [showContent, setShowContent] = useState(false);
    
    useEffect(() => {
        const greetings = ["hello", " नमस्ते", 'ನಮಸ್ಕಾರ'];
        let currentIndex = 0;
        
        const intervalId = setInterval(() => {
            if (currentIndex < greetings.length) {
                setGreetingText(greetings[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(intervalId);
                setTimeout(() => setShowNamaste(false), 100);
                setTimeout(() => setShowContent(true), 500);
            }
        }, 300);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.namaste} ${showNamaste ? styles.visible : styles.hidden}`}>
                <ul style={{
                     color: '#FFFFE3',
                     fontWeight: '300',
                     fontSize: '40px'
                }}>
                    <li>{greetingText}</li>
                </ul>
            </div>
            <div className={`${styles.content} ${showContent ? styles.visible : styles.hidden}`}>
                {children}
            </div>
        </div>
    );
}