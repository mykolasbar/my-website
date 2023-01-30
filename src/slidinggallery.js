import React, { useState, useEffect }  from 'react';

const SlidingGallery = (props) => {
    let [imgindex, setImgIndex] = useState(0)
    let [percentage, setPercentage] = useState(0)
    let [width, setWidth] = useState(100 * props.images.length)

    useEffect(() => {
        setTimeout(() => {
            setImgIndex(imgindex += 1)
            setPercentage(percentage += 100/props.images.length)
            if (imgindex == props.images.length)
                {setImgIndex(imgindex = 0)
                setPercentage(percentage = 0)
            }
        }, 3000);
    }, [imgindex]);


    return (
        <div style={{overflow:"hidden", margin: "auto"}} id="slidinggallery">
            <div style={{width: width + "%", display:"inline-flex", flexDirection:"row", flexWrap:"nowrap", whiteSpace: "no-wrap", transition:"transform 0.3s", transform: "translateX(-" + percentage + "%)"}}>
                {props.images.map((image) => <div key={image.id} style = {{backgroundImage: "URL(" + image.src + ")", backgroundSize: "cover", backgroundPosition: "center", display:"inline-flex", height: "240px", width:"100vw", boxSizing:"border-box"}}></div>)}
            </div>
        </div>
    );
};

export default SlidingGallery;