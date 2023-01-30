import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Backtotopbutton = () => {
    return (
       <div className = "backtotopbutton" onClick = {()=>{window.scrollTo({top:0, behavior: 'smooth'})}} style={{cursor:"pointer"}}>
            <span className="material-symbols-outlined">arrow_upward</span>
        </div>
    );
};

export default Backtotopbutton;