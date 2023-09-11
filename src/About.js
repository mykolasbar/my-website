import React, { useContext, useState, useEffect }  from 'react';
import { LangContext } from './LanguageContext';
import {ReactComponent as LinkedinLogo} from './linkedin-svgrepo-com.svg';

const About = () => {
    let lang = useContext(LangContext)

    return (
        <div id = "aboutsection">
            {/* <img id = "imagelogos" style = {{}} src = { require("./image3.jpg") } alt="logos"></img> */}
            <div id = "imagelogos" style = {{display:"flex", flexDirection:"column"}}>
                <div style = {{display:"flex", flexDirection:"row"}}>
                    <img id = "circleLogo" style = {{}} src = { require("./html_logo.png") } alt="logos"></img>
                    <img id = "circleLogo" style = {{}} src = { require("./css_logo.png") } alt="logos"></img>
                    <img id = "circleLogo" style = {{}} src = { require("./js_logo.png") } alt="logos"></img>
                </div>
                <div style = {{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <img id = "circleLogo" style = {{}} src = { require("./php_logo.png") } alt="logos"></img>
                    <img id = "circleLogo" style = {{}} src = { require("./sql_logo.png") } alt="logos"></img>
                </div>
            </div>
            <div style = {{}}>{lang.getLanguage() == "LT" ? <span>Esu pradedantis tinklo programuotojas (web developer). Dirbu su JavaScript, TypeScript, PHP, ReactJS ir Laravel, CSS, HTML, SQL technologijomis. Baigiau PHP + JavaScript fullstack (front-end bei back-end) programuotojo kursus BIT (Baltic Institute of Technology) ir turiu full-stack programuotojo programuotojo profesinį diplomą (jaunesniojo programuotojo kvalifikacija, Lietuvos kvalifikacijų 4 lygis). Teikiu web programavimo paslaugas.</span> 
                : 
                <span>My name is Mykolas, I am beginner web developer working with with JavaScript, PHP, ReactJS, Laravel, SQL, in addition to HTML and CSS. I have recently obtained a diploma in PHP + JavaScript development (European Level 4 qualification, junior programmer vocational degree). During my studies, in addition to obtaining theoretical knowledge, I had a chance to build my skillset in working on various applications. I offer very low fees.</span>}
                <br /><br />
                {lang.getLanguage()== "LT" ? "Mano GitHub paskyra: " : "My Github account: "}
                <a href="https://github.com/mykolasbar" target="_blank"><img style={{height:"24px", width:"24px", filter:"contrast(50"}} src = { require("./github-mark.png") } alt="githublogo" /></a>
                <br />
                {lang.getLanguage()== "LT" ? "Mano LinkedIn paskyra: " : "My LinkedIn account: "}
                <a href="https://www.linkedin.com/in/mykolas-baranauskas-b3809b110/" target="_blank"><LinkedinLogo /></a>
                <br />
                {lang.getLanguage()== "LT" ? (<div style={{display:"flex", flexDirection:"row", alignItems:"center"}}><div><span>Mano gyvenimo aprašymas:&nbsp;</span></div> <div className="material-symbols-outlined"><a href = "/Resume_1.2_EN.pdf" download>attachment</a></div></div>) 
                : 
                (<div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>My resume:  <a href = "/Resume_1.2_EN.pdf" download><span className="material-symbols-outlined"> attachment</span></a></div>)}
            </div>
        </div>
    );
};

export default About;