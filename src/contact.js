import React, { useContext, useState, useRef }  from 'react';
import { LangContext } from './LanguageContext';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com'

const Contact = () => {
    let lang = useContext(LangContext)
    let [data, setData] = useState()

    const form = useRef();

    const handleData = (event) => {
        setData({...data, [event.target.name] : event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(        
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
    )
        .then((result) => {
        alert(lang.getLanguage() == "LT" ? "Žinutė išsiųsta sėkmingai, artimiausiu metu su jumis susisieksime" : "Message sent, we will get back to you shortly", result.text);
        console.log(form.current)
        },
        (error) => {
        alert(lang.getLanguage() == "LT" ? "Įvyko klaida, bandykite dar kartą" : "An error occurred, please try again", error.text);
        });
        };
        

    return (
        <form style={{paddingTop:"40px", paddingBottom:"40px"}} ref={form} onSubmit = {handleSubmit}>
            <h2>{lang.getLanguage() == "LT" ? "Susisiekite" : "Get in touch"}</h2>
            <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
                <input style={{margin:"10px 0px 5px 0px", height:"50ox", fontSize:"20px"}} type = "text" name = "from_name" onChange={handleData} placeholder = {lang.getLanguage() == "LT" ? "Vardas" : "Name"} />
                <input style={{margin:"10px 0px 5px 0px", height:"50px", fontSize:"20px"}} id="emailAddress" type="email" onChange={handleData} name = "email" placeholder = {lang.getLanguage() == "LT" ? "El. paštas" : "Email"}/>
                <input style={{margin:"5px 0px 5px 0px", height:"200px", fontSize:"20px"}} type="text" name = "message" onChange={handleData} placeholder = {lang.getLanguage() == "LT" ? "Žinutė" : "Message"} ref={form}/>
                <input id = "submitbutton" type="submit" value = {lang.getLanguage() == "LT" ? "Siųsti" : "Submit"} style={{}} />
            </div>
        </form>
    );
};

export default Contact;