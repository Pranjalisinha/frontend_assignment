import React from "react";
import "./body2.css";

const Body2 = () => {
    return (
        <>
            <div className="hi">
                <h1><i>BOLD COLOUR STATEMENT<br /> MATTE LIPSTICK</i></h1>
                <p>36g</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <p className="rat"><b>364</b> REVIEWS  <u>WRITE A REVIEW</u></p>
                <h3 className="pric"><span class="material-symbols-outlined">
                    currency_rupee
                </span>
                    680 <s className="strike">850</s></h3>
                <p>SELECT YOUR SHADE</p>
                <input type="radio" className="radio1"/>
                <input type="radio" className="radio2"/>
                <input type="radio" className="radio3"/>
                <input type="radio" className="radio4"/>
                <div className="btnb">
                    <p className="boxp">1 -</p>
                <button className="btnAdd">ADD TO BAG</button>
                </div>
                <div className="dis">
                <h3>Description</h3><h3 className="plus">+</h3>
                </div>
                <div className="dis">
                <h3>Ingredients</h3><h3 className="plus1">+</h3>
                </div>
                <div className="dis">
                <h3>Directions</h3><h3 className="plus2">+</h3>
                </div>
                <div className="dis">
                <h3>Delivery and Returns</h3><h3 className="plus3">+</h3>
                </div>
            </div>
        </>
    )
}
export default Body2;