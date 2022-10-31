import React, { useState } from "react";
import "./description.css";
import Pagination from "./pagination";

const ProductPage = () =>{
    const showperpage = 4;
    const [pagenation , setpagenation] = useState({
        start : 0,
        end : showperpage
    })
    const onPaginationChange = (start,end)=>{
        setpagenation({start : start,end : end})
    }

    const product = [
        {id:0, value:"highlight.jpg", title:"MILANI", product:"Highlighter", price:"1,499"},
        {id:1, value:"lipgloss.webp", title:"MILANI", product:"Lipgloss", price:"1,279" },
        {id:2, value:"eyeshadow.jpg", title:"MILANI", product:"Eyeshadow", price:"1,399"},
        {id:3, value:"primer.jpg", title:"MILANI", product:"Supercharged Primer", price:"899"},
        {id:4, value:"foundation.jpg", title:"MILANI", product:"Liquid Foundation", price:"699"},
        {id:5, value:"blush.jpg", title:"MILANI", product:"Rose Blush", price:"1,129"},
        {id:6, value:"eyeliner.jpg", title:"MILANI", product:"No Smudge EyerLiner Pencile", price:"299"},
        {id:7, value:"nailpaint.jpg", title:"MILANI", product:"Bright Nail Paint", price:"50"},
    ]
    return(
        <>
        <div className="product">
            {
                product.slice(pagenation.start , pagenation.end).map((item, i)=>
                <div className="item">
                    <img src={item.value} alt="product_image"  height={350} width={270}/>
                    <h1>{item.title}</h1>
                    <p>{item.product}</p>
                    <h3 className="priceP"><span class="material-symbols-outlined">
                    currency_rupee
                </span>{item.price}</h3>
                    <button className="addCbtn">ADD TO CART</button>
                    </div>
                )
            }
        </div>
        <div className='pagenation'>
        <Pagination showPerPage ={showperpage} total = {product.length} onPaginationChange = {onPaginationChange}/>
      </div>
        </>
    )
}
export default ProductPage;