import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();
const routeMappings = {
  fr: {
    '/Servizio-Tecnico': '/Service-Technique',
    '/Verniciatura-a-Polvere' : '/Thermolaquage',
    '/Produzione' : '/Production',
    '/Vetreria' : '/Vitrerie',  
    // Add other French paths here
  },
  it: {
    '/Service-Technique' : '/Servizio-Tecnico',
    '/Thermolaquage' : '/Verniciatura-a-Polvere',
    '/Production' : '/Produzione',
    '/Vitrerie' : '/Vetreria',
    // Add other Italian paths here
  }
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = (prevLanguage === 'fr' ? 'it' : 'fr');
      const currentPath = location.pathname;
      const newPath = routeMappings[newLanguage][currentPath] || currentPath;
      window.location = newPath
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
