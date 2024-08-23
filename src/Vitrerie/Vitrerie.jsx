import React from 'react';

function Vitrerie({ language }) {
  return (
    <div>
      <h1>{language === "fr" ? "Service Technique" : "Servizio Tecnico"}</h1>
      <p>
        {language === "fr"
          ? "Le service technique se charge de l'étude technique du projet, de l'organisation des travaux, et de s'assurer de la qualité des produits livrés."
          : "Il servizio tecnico si occupa dello studio tecnico del progetto, dell'organizzazione dei lavori e di garantire la qualità dei prodotti consegnati."}
      </p>
    </div>
  );
}

export default Vitrerie;
