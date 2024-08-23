import styles from './DropDownMenu.module.css';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as CogIcon } from '../../Icons/cog.svg';
import { ReactComponent as Product } from '../../Icons/product.svg';
import { ReactComponent as About } from '../../Icons/about.svg';
import { ReactComponent as ChevronIcon } from '../../Icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../Icons/arrow.svg';
import { ReactComponent as RArrowIcon } from '../../Icons/rArrow.svg';
import { ReactComponent as Slide } from '../../Icons/slide.svg';
import { ReactComponent as Door } from '../../Icons/door.svg';
import { ReactComponent as Roulant } from '../../Icons/roulant.svg';
import { ReactComponent as Rideau } from '../../Icons/rideau.svg';
import { ReactComponent as Gcorps } from '../../Icons/gcorps.svg';
import { ReactComponent as Whatsapp } from '../../Icons/whatsapp.svg';
import { ReactComponent as Gmail } from '../../Icons/gmail.svg';

import React, { useState } from 'react';

function DropDownMenu({ language }) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    const texts = {
        fr: {
            discoverUs: "Découvrez-nous",
            products: "Produits",
            whatsapp: "Whatsapp",
            emailUs: "Envoyez-nous un email",
            mainMenu: "Menu Principal",
            slidingDoors: "Coulissants",
            doors: "Portes",
            curtainWalls: "Murs Rideaux",
            rollerShutters: "Volets Roulants",
            guardRails: "Gardes Corps"
        },
        it: {
            discoverUs: "Scopri chi siamo",
            products: "Prodotti",
            whatsapp: "Whatsapp",
            emailUs: "Inviaci un'email",
            mainMenu: "Menu Principale",
            slidingDoors: "Scorrevoli",
            doors: "Porte",
            curtainWalls: "Facciate Continue",
            rollerShutters: "Tapparelle",
            guardRails: "Parapetti"
        }
    };

    const t = texts[language];

    function calcHeight(el) {
        const height = el.offsetHeight * 1.14;
        setMenuHeight(height);
    }

    function DropDownItem(props) {
        return (
            <a href={props.path} className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                {props.rightIcon && <span className='icon-button icon-right'>{props.rightIcon}</span>}
            </a>
        );
    }

    return (
        <div className='dropdown' style={{ height: menuHeight }}>
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>

                <div className='menu'>
                    <DropDownItem leftIcon={<About />}>{t.discoverUs}</DropDownItem>
                    <DropDownItem leftIcon={<Product />} rightIcon={<RArrowIcon />} goToMenu="settings">
                        {t.products}
                    </DropDownItem>
                    <DropDownItem leftIcon={<Whatsapp />}>{t.whatsapp}</DropDownItem>
                    <DropDownItem leftIcon={<Gmail />}>{t.emailUs}</DropDownItem>
                </div>
            </CSSTransition>
            <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>

                <div className='menu'>
                    <DropDownItem leftIcon={<ArrowIcon />} goToMenu="main">
                        {t.mainMenu}
                    </DropDownItem>
                    <DropDownItem leftIcon={<Slide />}>{t.slidingDoors}</DropDownItem>
                    <DropDownItem leftIcon={<Door />}>{t.doors}</DropDownItem>
                    <DropDownItem leftIcon={<Rideau />}>{t.curtainWalls}</DropDownItem>
                    <DropDownItem leftIcon={<Roulant />}>{t.rollerShutters}</DropDownItem>
                    <DropDownItem leftIcon={<Gcorps />}>{t.guardRails}</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default DropDownMenu;
