import React from 'react';

import logo1 from './map-marker-alt-solid 1.png'

import logo2 from './bed 1.png'
import logo3 from './bath 1.png'
import HouseDetail from '../HouseDetail/HouseDetail';

import './HouseRent.css'
const HouseRent = () => {

    const house=[
        {
            image:'https://i.ibb.co/K0VjQXy/Rectangle-394.png',
            title:'Washington Avenue',
            dec:'Nasirabad H/S, Chattogram',
            amount:'$294',
            icon1:logo1,
            iconDec2:'3 Bedrooms',
            iconDec3:'3 Bathrooms',
            icon2:logo2,
            icon3:logo3,
        },
        {
            image:'https://i.ibb.co/V2pk8tL/Rectangle-396.png',
            title:'Family apartment Three',
            dec:'Nasirabad H/S, Chattogram',
            amount:'$394',
            iconDec2:'3 Bedrooms',
            iconDec3:'3 Bathrooms',
            icon1:logo1,
            icon2:logo2,
            icon3:logo3,
        },
        {
            image:'https://i.ibb.co/JKSH2hg/Rectangle-398.png',
            title:'Gorgeous House',
            dec:'Nasirabad H/S, Chattogram',
            amount:'$522',
            iconDec2:'3 Bedrooms',
            iconDec3:'3 Bathrooms',
            icon1:logo1,
            icon2:logo2,
            icon3:logo3,
        },
        {
            image:'https://i.ibb.co/0Qk8B3b/Rectangle-403.png',
            title:'Luxury Villa',
            dec:'Nasirabad H/S, Chattogram',
            amount:'$344',
            iconDec2:'3 Bedrooms',
            iconDec3:'3 Bathrooms',
            icon1:logo1,
            icon2:logo2,
            icon3:logo3,
        },
        {
            image:'https://i.ibb.co/jhT3xct/Rectangle-404.png',
            title:'Epic Huda Palacio',
            dec:'Nasirabad H/S, Chattogram',
            amount:'$333',
            iconDec2:'3 Bedrooms',
            iconDec3:'3 Bathrooms',
            icon1:logo1,
            icon2:logo2,
            icon3:logo3,
        },
        {
            image:'https://i.ibb.co/d6skNCC/Rectangle-405.png',
            title:'Washington Avenue',
            dec:'Nasirabad H/S, Chattogram',
            amount:'$433',
            iconDec2:'3 Bedrooms',
            iconDec3:'3 Bathrooms',
            icon1:logo1,
            icon2:logo2,
            icon3:logo3,
        }
    ]

    return (

        <div className="main-color">
        <div className="container">
       
        <h6 className="text-center rent-design">House Rent</h6>

        <h2 className="text-center">Discover the latest Rent <br/>avaliavle today</h2>
        
        <div className="row">
            
            {
                house.map(pd=><HouseDetail detail={pd}></HouseDetail>)
            }
        </div>
        </div>
        </div>
    );
};

export default HouseRent;