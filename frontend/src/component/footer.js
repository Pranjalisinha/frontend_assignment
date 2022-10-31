import React from "react";
import "./footer.css";

const Footer = () =>{
    return (
        <>
        <div className="foot">
            <div className="footC">
                <img src="gift.png" alt="gift" height={100} width={80}/>
            </div>
            <div>
                <p><b>GENUINE PRODUCT</b></p>
                <p>PURE QUALITY FROM BRANDS</p>
            </div>
            <div className="footC">
                <img src="free.png" alt="free" height={100} width={80}/>
            </div>
            <div>
                <p><b>FREE SHIPPING</b></p>
                <p>SAFE AND FREE ORDER DELIVERY</p>
            </div>
            <div className="footC">
                <img src="secure.png" alt="secure" height={100} width={80}/>
            </div>
            <div>
                <p><b>SECURE PAYMENT</b></p>
                <p>USING ONLINE PAYMENT IS SAFE AND SECURE</p>
            </div>
        </div>
        </>
    )
}
export default Footer;