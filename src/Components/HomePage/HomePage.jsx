import React from 'react';
import styles from './HomePage.module.css';

function HomePage({ language }) {
    const translations = {
        fr: {
            title: 'Cami',
            subtitle: 'Au Service de La Qualité.',
            description: 'Menuiserie Aluminium'
        },
        it: {
            title: 'Cami',
            subtitle: 'Al Servizio della Qualità.',
            description: 'Serramenti in Alluminio'
        }
    };

    const { title, subtitle, description } = translations[language];

    return (
        <div className={styles.homeContainer}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title} data-text={title}>{title}</h2>
                <span className={styles.cont}>&nbsp;{description}</span>
            </div>
            <span className={styles.subtitle}>{subtitle}</span>
        </div>
    );
}

export default HomePage;
