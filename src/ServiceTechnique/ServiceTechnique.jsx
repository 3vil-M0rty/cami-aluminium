import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import NavItem from '../Components/NavItem/NavItem';
import { ReactComponent as Home } from '../Icons/home.svg';
import { ReactComponent as France } from '../Icons/france.svg';
import { ReactComponent as Italy } from '../Icons/italy.svg';
import { ReactComponent as Map } from '../Icons/map.svg';
import { ReactComponent as CaretIcon } from '../Icons/caret.svg';
import { ReactComponent as Contact } from '../Icons/contact.svg';
import DropDownMenu from "../Components/DropDownMenu/DropDownMenu";
import { useLanguage } from '../LanguageContext';
import TechniqueVid from '../assets/videos/technique.mp4'
import TechniqueVidIT from '../assets/videos/techniqueIT.mp4'
import styles from './ServiceTechnique.module.css'
function ServiceTechnique({ }) {

  const { language, toggleLanguage } = useLanguage();
  const flag = language === "fr" ? <France /> : <Italy />;

  return (
    <>
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
      <div className={styles.container}>
        <video src={language == "fr" ? TechniqueVid : TechniqueVidIT} className={styles.video} autoPlay muted loop></video>
      </div>
    </>

  );
}

export default ServiceTechnique;
