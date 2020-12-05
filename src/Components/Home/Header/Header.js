import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="bg-image d-flex justify-content-center align-items-center">
          <div className="">
          <h1>FIND YOUR HOUSE RENT</h1>
          <br/>
          <input type="Search" placeholder="Search..."/>
          <button className="btn-style">Find Now</button>
          </div>
        </div>
    );
};

export default Header;