import React from 'react';
import './App.css';
import Body1 from './component/body';
import Body2 from './component/body2';
import ProductPage from './component/description';
import Footer from './component/footer';
import Navbar from './component/navbar';
import Review from './component/review';

function App() {
  return (
    <>
    <div className='navbar'>
      <Navbar/>
    </div>
    <div className='body'>
    <div className='child'>
      <Body1/>
    </div>
    <div className='child'>
      <Body2/>
    </div>
    </div>
    <div className='bot'>
      <h1>YOU MAY ALSO LIKE</h1>
    </div>
    <div className='youMay'>
      <ProductPage/>
    </div>
    <div className='bot'>
            <h1>REVIEWS</h1>
            <div className="vl"></div>
            <h1> Q & A</h1>
    </div>
    <Review/>
    <Footer/>
    </>
  );
}

export default App;
