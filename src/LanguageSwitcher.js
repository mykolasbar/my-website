import React, { createContext, useState, useEffect, useContext }  from 'react';
import { LangContext } from './LanguageContext';

const LanguageSwitcher = () => {
    let lang = useContext(LangContext)

    return (
        <select id="languageswitcher" style={{}} onChange = {(event)=>lang.setLanguage(event.target.value)} value = {lang.getLanguage() == "LT" ? "LT" : "EN"}>
            <option>LT</option>
            <option>EN</option>
        </select>
    );
};

export default LanguageSwitcher;