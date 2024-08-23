import React, { useEffect, useRef } from 'react';
import styles from './Background.module.css';

function Background() {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const scale = 1 + scrollTop / 4600; // Adjust the divisor to control the zoom speed
            imgRef.current.style.transform = `scale(${scale})`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.backgroundContainer}>
            <img ref={imgRef} src="../src/assets/images/back.jpg" alt="Background" />
        </div>
    );
}

export default Background;
