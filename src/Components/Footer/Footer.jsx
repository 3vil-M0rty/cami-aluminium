import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';
import { faTimeline, faMapLocation, faCreditCard, faX } from '@fortawesome/free-solid-svg-icons';

function Footer({language}) {
    const [activeButton, setActiveButton] = useState('map');
    const translations = {
        fr: {
            title: 'Cami Menuiserie Aluminium',
            par: "CAMI Aluminium, située à Marrakech, est une entreprise de référence spécialisée dans la fabrication et l'installation de châssis et structures en aluminium, tels que des portes, fenêtres, baies vitrées, portes de garage, et menuiseries sur mesure. Avec sa propre station de thermolaquage, son bureau technique, et ses équipes de pose qualifiées, CAMI intervient sur tout le territoire marocain, offrant conseils et services de qualité.\nFondée en 2014 par M. Michele Federico et son fils Candido Federico, CAMI apporte plus de 45 ans d'expérience italienne. En 2022, la société a créé deux nouvelles filiales, CAMI Laquage et Gimav, spécialisées respectivement dans le thermolaquage et la transformation du vitrage, faisant d'elle l'une des rares entreprises autonomes et indépendantes en termes de production.",
            contact: "contact",
            tel: "téléphone",
            lundi: "Lundi",
            jeudi: "Jeudi",
            vendredi: "Vendredi",
            samedi: "Samedi",
        },
        it: {
            title: 'Cami Serramenti in Alluminio',
            par: "CAMI Aluminium, situata a Marrakech, è un'azienda di riferimento specializzata nella produzione e installazione di telai e strutture in alluminio, come porte, finestre, vetrate, porte da garage e falegnameria su misura. Con la propria stazione di verniciatura a polvere, ufficio tecnico e squadre di installazione qualificate, CAMI opera su tutto il territorio marocchino, offrendo consulenza e servizi di qualità.\nFondata nel 2014 da Michele Federico e suo figlio Candido Federico, CAMI porta con sé oltre 45 anni di esperienza italiana. Nel 2022, l'azienda ha creato due nuove filiali, CAMI Laquage e Gimav, specializzate rispettivamente nella verniciatura a polvere e nella trasformazione del vetro, rendendola una delle poche aziende autonome e indipendenti in termini di produzione.",
            contact: "contatto",
            tel: "telefono",
            lundi: "Lunedì",
            jeudi: "Giovedì",
            vendredi: "Venerdì",
            samedi: "Sabato",
        }
    };
    
    const {title, par, contact, tel, lundi, jeudi, vendredi, samedi} = translations[language];
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <h1>{title}</h1>
                <p>{par}</p>
            </div>
            <div className={styles.contact}>
                <h5>{contact}</h5>
                <p>N°432, Marrakech 40000<br />
                    {tel}: <a className={styles.tel} href="tel:+212524336247">+212 5 24 33 62 47</a></p>
            </div>
            
            <div className={styles.left}>
                <div className={styles.buttons}>
                    <FontAwesomeIcon className={styles.buttonIcon} icon={faMapLocation} onClick={() => setActiveButton('map')} flip />
                    <FontAwesomeIcon className={styles.buttonIcon} icon={faTimeline} onClick={() => setActiveButton('timeline')} beat />
                </div>
                <div className={styles.buttonContent}>
                    {activeButton === 'map' && (
                        <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.8625562752864!2d-8.048689789318678!3d31.664979839876384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafed8554b372d7%3A0x42e1d018a1ab2f3e!2sCami%20Aluminium!5e0!3m2!1sfr!2sma!4v1724425534709!5m2!1sfr!2sma&zoom=0"><a href="https://www.gps.ie/">gps devices</a></iframe>
                    )}
                    {activeButton === 'timeline' && (
                        <div className={styles.timetable}>
                            <div className={styles.dayGroup}>
                                <div className={styles.day}>{lundi} - {jeudi}</div>
                                <div className={styles.hours}>08:30 - 13:00 | 14:00 - 18:30</div>
                            </div>
                            <div className={styles.dayGroup}>
                                <div className={styles.day}>{vendredi}</div>
                                <div className={styles.hours}>08:30 - 13:00 | 15:00 - 18:30</div>
                            </div>
                            <div className={styles.dayGroup}>
                                <div className={styles.day}>{samedi}</div>
                                <div className={styles.hours}>08:30 - 14:00</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Footer;
