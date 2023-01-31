import React, { useEffect } from 'react';

const FullImage = (props) => {
    useEffect(()=>{console.log(props.image)}, [])

    return (
        <div style = {{width:"100vw", height:"100vh", position:"fixed", display:"flex", alignItems:"center", justifyContent:"center", zIndex:"2900", flexDirection:"column", alignItems:"center"}}>
                <div id="closeIcon" style={{}}><span className="material-symbols-outlined" style={{cursor:"pointer"}} onClick={()=>{props.closeModal()}}>close</span></div>
                <div id="fullImage" style={{width: window.innerWidth > 480 ? "60%" : "100%", height:"400px", backgroundImage: "URL(" + props.image + ")", backgroundSize: "contain", backgroundRepeat:"no-repeat"}}> 
            </div>
        </div>
    );
};

export default FullImage;