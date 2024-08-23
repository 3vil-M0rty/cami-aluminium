import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ServiceTechnique from './ServiceTechnique/ServiceTechnique.jsx';
import Thermolaquage from './Thermolaquage/Thermolaquage.jsx';
import Production from './Production/Production.jsx';
import Vitrerie from './Vitrerie/Vitrerie.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import './index.css';
import { LanguageProvider, useLanguage } from './LanguageContext';

const Router = () => {
  const { language } = useLanguage();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: language === 'fr' ? '/Service-Technique' : '/Servizio-Tecnico',
      element: <ServiceTechnique />,
    },
    {
      path: language === 'fr' ? '/Thermolaquage' : '/Verniciatura-a-Polvere',
      element: <Thermolaquage />,
    },
    {
      path: language === 'fr' ? '/Production' : '/Produzione',
      element: <Production />,
    },
    {
      path: language === 'fr' ? '/Vitrerie' : '/Vetreria',
      element: <Vitrerie />,
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  </React.StrictMode>,
);
