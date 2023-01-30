import React, { createContext, useState, useEffect, useContext }  from 'react';

export let LangContext = createContext()

export let LangProvider = ({children}) => {

    var parser = require('accept-language-parser');

    var languages = parser.parse('en-GB,en;q=0.8');

    console.log(languages);

    let [lang, setLang] = useState(() => languages[0].code == 'LT' ? 'LT' : 'EN')
    
    let setLanguage = (lan) => {setLang(lan)}

    let getLanguage = () => lang

    let testing = () => "aaaaaaaaaaa"

    return (
        <LangContext.Provider value={{ testing, setLanguage, getLanguage }}>{children}</LangContext.Provider>
    );
}