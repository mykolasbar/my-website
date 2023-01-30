import React, { useContext, useState, useEffect }  from 'react';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Header from './header';
import Contact from './contact';
import SlidingGallery from './slidinggallery';
import { LangContext } from './LanguageContext';
import About from './About';
import Projects from './Projects';
import FullImage from './fullImage';
import Footer from './footer';
import Backtotopbutton from './backtotopbutton';

const LandingPage = () => {
    let lang = useContext(LangContext)
    let [showImage, setShowImage] = useState(false)
    let [image, setImage] = useState()
    let [showBackToTopButton, setShowBackToTopButton] = useState(false)

    let selectImage = (img) => {setImage(img)}
    
    let displayImage = () => {setShowImage(!showImage)}

    let closeModal = () => {
        showImage && setShowImage(false)
    }

    let handleScroll = () => {window.scrollY > 250 ? setShowBackToTopButton(true) : setShowBackToTopButton(false)}

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        
    }, [])

    const images = [
        {id: 1, src: "image1.png"},
        {id: 2, src: "image2.jpeg"},
        {id: 3, src: "image3.jpg"},
    ]

    return (
        <>
        {showImage && <div style={{width:"100vw", height:"100vh", position:"fixed", backgroundColor:"grey", opacity:"0.6", zIndex:"1500"}}></div>}
        {showImage && <FullImage image={image} closeModal={closeModal}/>}
            <Header/>
            <SlidingGallery images = {images} />
            <div className = "fullwidthcentering">
                <div id="container">
                    <About />
                </div>
            </div>
            <div id = "fullwidthcenteringbgyellow">
                <div id="container">
                    <Contact />
                </div>
            </div>
            <div className = "fullwidthcentering" id = "projects">
                <div id="container">
                    <Projects displayImage = {displayImage} selectImage = {selectImage}/>
                </div>
            </div>
            <Footer />
            {showBackToTopButton && <Backtotopbutton />}
        </>
    );
};

export default LandingPage;