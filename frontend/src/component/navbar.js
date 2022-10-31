import React from 'react';
import "./navbar.css";

const Navbar = () =>{
  return (
    <>
    <div className='nav'>
      <img src='logo.webp' alt='logo' className='logo'/>
        <input type="text" className='sbar'/>
        <p className='track'>TRACK ORDER</p>
        <img src='login.jpg' alt='login' className='login'/>
        <p className='log'><b>LOGIN/REGISTER</b></p>
        <img src='heart.png' alt='heart' className='login1'/>
        <img src='cart.png' alt='cart' className='login1'/>
    </div><br/>
    <div className='nav'>
    <p className='itm'>NEW ARRIVAL</p>
    <p className='itm'>MAKEUP</p>
    <p className='itm'>SKIN CARE</p>
    <p className='itm'>HARE CARE</p>
    <p className='itm'>BATH & BEAUTY</p>
    <p className='itm2'>OFFERS</p>
    <p className='itm'>SUN CARE</p>
    <p className='itm'>KITS/COMBOS</p>
    <p className='itm1'>BRANDS</p>
    <p className='itm'>TUTORIALS/BLOGS</p>
    </div>
    </>
  );
}

export default Navbar;
