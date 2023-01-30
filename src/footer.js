import React, { useContext }  from 'react';
import { LangContext } from './LanguageContext';


const Footer = () => {
    let lang = useContext(LangContext)

    return (
        <footer id = "footer">
            {lang.getLanguage() == "LT" ? "Svetainės autorius - Mykolas Baranauskas" : "Website by Mykolas Baranauskas "} (<a href = "https://github.com/mykolasbar" target="_blank" style={{color:"white", textDecoration:"underline"}}>GitHub</a> , <a href = "https://www.linkedin.com/in/mykolas-baranauskas-b3809b110/" target="_blank"  style={{color:"white", textDecoration:"underline"}}>LinkedIn</a>).
        </footer>

    );
};

export default Footer;