import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="bg-color">
        <div className="row container extra-style">
            
            <div className="col-md-4 footer-padding ">
               <li>H#340(4th Floor).Road #24.</li>
               <li>DOHS.Mohakhali,Dhaka,Bangladesh</li>
               <li>Phone: DIBXXXXXXXXXX</li>
               <li>E-mail:info@company.com</li>
            </div>
            <div className="col-md-2 footer-padding">
            <h4>Company</h4>
            <li>About</li>
            <li>Site Mop</li>
            <li>Support Center</li>
            <li>Torms Conditins</li>
            <li>Submit Listing</li>
            
           </div>
           <div className="col-md-2 footer-padding">
               <h4>Quick Links</h4>
            <li>Quick Links</li>
            <li>Rentals</li>
            <li>Sales</li>
            <li>Contact</li>
            <li>Terms Conditions</li>
            <li>Our blog</li>
           </div>
           <div className="col-md-4 footer-padding">
                <h4>About Us</h4>
                <p>We are the top real state agency in sydney with agents avaiable to answer any qusetion 24/7</p>
           </div>
           </div>
        </div>
        
    );
};

export default Footer;