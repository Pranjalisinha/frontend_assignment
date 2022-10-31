import React, { useState } from "react";
import "./body.css";

const Body1 = () => {
    const imgs = [
        {id:0, value:"images (2).jpg"},
        {id:1, value:"image(3).jpg"},
        {id:2, value:"images (1).jpg"},
        {id:3, value:"image(5).jpg"},
        {id:4, value:"images.jpg"},
        {id:5, value:"image(4).webp"},
    ]
    const [sliderData, setSliderData] = useState(imgs[0])
    const handleClick=(i)=>{
        console.log(i)
        const slider = imgs[i];
        setSliderData(slider)
    }

    return(
        <>
        <div className="body1">
            <div className="small">
        <img src={sliderData.value} alt="makeup" height="400" width="300" className="main_img"/>
            <div className="back_g">
                
                    {
                        imgs.map((data, i) =>
                        <img key={data.id} src={data.value} alt="image" className="imgs" onClick={()=>handleClick(i)} height={70} width={100} />
                        )
                    }
            </div>
            </div>
        </div>
        </>
    )
}
export default Body1;