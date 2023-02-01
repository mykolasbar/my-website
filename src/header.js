import React, { useState, useEffect, useContext }  from 'react';
import BurgerMenu from './BurgerMenu';
import LanguageSwitcher from './LanguageSwitcher';
import { HashLink as Link } from 'react-router-hash-link';
import {ReactComponent as LinkedinLogo} from './linkedin-svgrepo-com.svg';
import { LangContext } from './LanguageContext';

const Header = () => {
    let lang = useContext(LangContext)
    let [burgerActive, setBurgerActive] = useState(false)

    let makeBurgerActive = () => {setBurgerActive(!burgerActive)}

    return (
        <>
            <nav id = "header">
            <BurgerMenu burgerActive = {burgerActive} makeBurgerActive = {makeBurgerActive} />
                <div style = {{width:"15%"}}></div>
                <div id = "headercontainer">
                    <div id = "mainmenu">
                        <div><Link to="#aboutsection" smooth style={{color:"white"}}>{lang.getLanguage() == "LT" ? "Apie" : "About"}</Link></div>
                        <div><Link to="#contact" smooth style={{color:"white"}}>{lang.getLanguage() == "LT" ? "Susisiekite" : "Contact"}</Link></div>
                        <div><Link to="#projects" smooth style={{color:"white"}}>{lang.getLanguage() == "LT" ? "Proektai" : "Projects"}</Link></div>
                    </div>
                </div>
                <div style = {{width:"15%", height:"100%", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
                    <LanguageSwitcher />
                    <div style={{margin:"7px 7px 7px 0", oxSizing:"border-box"}}><a href="https://www.linkedin.com/in/mykolas-baranauskas-b3809b110/" target="_blank"><LinkedinLogo /></a></div>
                </div>
            </nav>
            <div id = "fullwidthcentering" style = {{backgroundColor:"#61dafb"}}>
                <div id = "mainmenusmall" style={{display: burgerActive ? "block" :"none"}}>
                    <div id="mainmenusmallitem"><Link to="#aboutsection" smooth style={{color:"white"}}>{lang.getLanguage() == "LT" ? "Apie" : "About"}</Link></div>
                    <div id="mainmenusmallitem"><Link to="#contact" smooth style={{color:"white"}}>{lang.getLanguage() == "LT" ? "Susisiekite" : "Contact"}</Link></div>
                    <div id="mainmenusmallitem"><Link to="#projects" smooth style={{color:"white"}}>{lang.getLanguage() == "LT" ? "Projektai" : "Projects"}</Link></div>
                </div>
            </div>
        </>
    );
};

export default Header;