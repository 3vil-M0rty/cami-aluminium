import React from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import NavItem from "./Components/NavItem/NavItem";
import DropDownMenu from "./Components/DropDownMenu/DropDownMenu";
import HomePage from "./Components/HomePage/HomePage";
import Departements from "./Components/Departements/Departements";
import Footer from "./Components/Footer/Footer"
import { ReactComponent as Map } from './Icons/map.svg';
import { ReactComponent as Home } from './Icons/home.svg';
import { ReactComponent as CaretIcon } from './Icons/caret.svg';
import { ReactComponent as Contact } from './Icons/contact.svg';
import { ReactComponent as France } from './Icons/france.svg';
import { ReactComponent as Italy } from './Icons/italy.svg';
import { useLanguage } from './LanguageContext';

function App() {
  const { language, toggleLanguage } = useLanguage();
  const flag = language === "fr" ? <France /> : <Italy />;


  return (
    <>
      <Background />
      <Navbar>
        <img src="../public/logo.webp" className="home" alt="" onClick={() => window.location = "/"} />
        <NavItem onClick={() =>
          window.location = '/'} icon={<Home />} title={language === "fr" ? "Accueil" : "Home"} />
        <NavItem icon={flag} title={language === "fr" ? "Italiano" : "Français"} onClick={toggleLanguage} />
        <NavItem path="tel:+212524336247" icon={<Contact />} title={language === "fr" ? "Contact" : "Contatto"} />
        <NavItem target="_blank" path="https://maps.app.goo.gl/u6ahA2xzQHs865aGA" icon={<Map />} title={language === "fr" ? "Localisation" : "Localizzazione"} />
        <NavItem icon={<CaretIcon />}>
          <DropDownMenu language={language} />
        </NavItem>
      </Navbar>
      <HomePage language={language} />
      <Departements language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;
