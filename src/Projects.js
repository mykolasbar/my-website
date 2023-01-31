import React, { useContext, useState, useEffect }  from 'react';
import FullImage from './fullImage';
import { LangContext } from './LanguageContext';

const Projects = (props) => {
    let lang = useContext(LangContext)

    return (<>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"30px", marginBottom:"30px"}}><h2>Projects</h2></div>
            <div id = "projectssection">
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div onClick = {()=>{props.selectImage('projects-1.png'); props.displayImage()}} style = {{cursor: "pointer", backgroundImage: "URL(projects-1.png)", backgroundSize: "contain", backgroundRepeat:"no-repeat", maxWidth: window.innerWidth > 480 ? "350px" : "90%", height:"200px", marginBottom:"5px"}}></div>
                    <div>{lang.getLanguage() == "LT" ? <span>Ugdymo įstaigų platforma<br/><b>Projektas prieinamas:</b> <a style={{textDecoration:"underline"}} href="https://ugdymoistaigosfe.herokuapp.com/" target="_blank">shorturl.at/oIS69</a></span> : <span>School registration system<br/><b>Available at:</b> <a style={{textDecoration:"underline"}} href="https://ugdymoistaigosfe.herokuapp.com/" target="_blank">shorturl.at/oIS69</a><br/><b>GitHub Repository:</b> <a  style={{textDecoration:"underline"}} href="https://github.com/mykolasbar/ugdymo_istaigos_fe" target="_blank">shorturl.at/uDTZ2</a></span>}</div>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div onClick = {()=>{props.selectImage('projects-2.png'); props.displayImage()}} style = {{cursor: "pointer", backgroundImage: "URL(projects-2.png)", backgroundSize: "contain", backgroundRepeat:"no-repeat", maxWidth: window.innerWidth > 480 ? "350px" : "90%", height:"200px", marginBottom:"5px",}}></div>
                    <div>{lang.getLanguage() == "LT" ? <span>Slaptažodžių generatorius<br/><b>Projektas prieinamas:</b> <a style={{textDecoration:"underline"}} href="https://mykolasbar.github.io/password-generator/" target="_blank">shorturl.at/fpuDX</a></span> : <span>Password generator<br/><b>Available at:</b> <a style={{textDecoration:"underline"}} href="https://mykolasbar.github.io/password-generator/" target="_blank">shorturl.at/fpuDX</a><br/><b>GitHub Repository:</b> <a  style={{textDecoration:"underline"}} href="https://github.com/mykolasbar/password-generator" target="_blank">shorturl.at/ikq69</a></span>}</div>
                </div>
            </div>
        </>
    );
};

export default Projects;