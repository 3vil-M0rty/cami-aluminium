import React, { useEffect } from 'react';
import styles from './Departements.module.css';

function Departements({ language }) {
    const translations = {
        fr: {
            serviceTechnique: {
                title: 'Service Technique',
                description: "Le service technique se charge de l'étude technique du projet, de l'organisation des travaux, et de s'assurer de la qualité des produits livrés."
            },
            thermolaquage: {
                title: 'Thermolaquage',
                description: "Avec ses nouveaux équipements, l'unité Cami laquage effectue le thermolaquage en interne et en externe, offrant un large choix de couleurs et de textures."
            },
            production: {
                title: 'Production',
                description: "Le cœur de l'entreprise, où sont réalisés le découpage, le perçage, l'assemblage et le vitrage de tous les châssis en aluminium."
            },
            vitrerie: {
                title: 'Vitrerie',
                description: "Rapidité, qualité et engagement sont les principes de l'unité qui transforme tous types de vitrage (double vitrage, feuilleté, trempé, etc.)."
            }
        },
        it: {
            serviceTechnique: {
                title: 'Servizio Tecnico',
                description: "Il servizio tecnico si occupa dello studio tecnico del progetto, dell'organizzazione dei lavori e di garantire la qualità dei prodotti consegnati."
            },
            thermolaquage: {
                title: 'Verniciatura a Polvere',
                description: "Con le sue nuove attrezzature, l'unità Cami verniciatura esegue la verniciatura a polvere internamente ed esternamente, offrendo una vasta scelta di colori e texture."
            },
            production: {
                title: 'Produzione',
                description: "Il cuore dell'azienda, dove si effettuano il taglio, la foratura, l'assemblaggio e la vetratura di tutti i telai in alluminio."
            },
            vitrerie: {
                title: 'Vetreria',
                description: "Velocità, qualità e impegno sono i principi dell'unità che trasforma tutti i tipi di vetri (vetrocamera, stratificato, temperato, ecc.)."
            }
        }
    };

    const { serviceTechnique, thermolaquage, production, vitrerie } = translations[language];

    useEffect(() => {
        const cards = document.querySelectorAll(`.${styles.card}`);

        const handleMouseMove = (e, cursor, card) => {
            if (cursor) {
                const x = e.clientX;
                const y = e.clientY;
                const c = card.getBoundingClientRect();
                const cX = c.left;
                const cY = c.top;
                const rect = cursor.getBoundingClientRect();
                const imgWidth = rect.width;
                const imgHeight = rect.height;
                cursor.style.left = `${x - cX}px`;
                cursor.style.top = `${y - cY}px`;
            }
        };

        const mouseMoveHandler = (e) => {
            cards.forEach(card => {
                const cursor = card.querySelector(`.${styles.fImg}`);
                handleMouseMove(e, cursor, card);
            });
        };

        document.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <div className={styles.depContainer} >
            <div className={styles.card} id={styles.card1} onClick={()=> 
                window.location = language === 'fr'? "/Service-Technique" : "Servizio-Tecnico"}>
                <h3 className={styles.cardTitle}>{serviceTechnique.title}</h3>
                <p>{serviceTechnique.description}</p>
                <div className={styles.fImg}></div>
            </div>
            <div className={styles.card} id={styles.card2} onClick={()=> 
                window.location = language === 'fr'? '/Thermolaquage' : '/Verniciatura-a-Polvere' }>
                <h3 className={styles.cardTitle}>{thermolaquage.title}</h3>
                <p>{thermolaquage.description}</p>
                <div className={styles.fImg}></div>
            </div>
            <div className={styles.card} id={styles.card3} onClick={()=> 
            window.location = language === 'fr' ? '/Production' : '/Produzione'}>
                <h3 className={styles.cardTitle}>{production.title}</h3>
                <p>{production.description}</p>
                <div className={styles.fImg}></div>
            </div>
            <div className={styles.card} id={styles.card4} onClick={()=> 
            window.location = language === 'fr' ? '/Vitrerie' : '/Vetreria'}>
                <h3 className={styles.cardTitle}>{vitrerie.title}</h3>
                <p>{vitrerie.description}</p>
                <div className={styles.fImg}></div>
            </div>
        </div>
    );
}

export default Departements;
