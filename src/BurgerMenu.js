import React from 'react';

const BurgerMenu = (props) => {
    

    return (
        <div id = "burgermenubackground" style = {{}}>
            <div style = {{cursor:"pointer", transform: props.burgerActive && "rotate(90deg)", transition: "transform 0.5s"}} id = "burgermenu" onClick = {()=>{props.makeBurgerActive()}}>
                <div className = "burgerlayer"></div>
                <div className = "burgerlayer"></div>
                <div className = "burgerlayer"></div>
            </div>
        </div>
    );
};

export default BurgerMenu;