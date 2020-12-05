import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Service.css'

const Service = () => {
    const service=[
        {
            image:'https://i.ibb.co/0KRGVGF/apartment-1.png',
            title:'Wide range of properties',
            dec:'With a robust swlection of popular properties on hand.as well as leading properties from experts',
        },
        {
            image:'https://i.ibb.co/JQSCY0g/affordable-1.png',
            title:'Financing Made Easy',
            dec:'Our stress-free finance department that can find financial solutinns to save you money.',
        },
        {
            image:'https://i.ibb.co/jfZ2k9p/lessee-1.png',
            title:'Trusted by Thousands',
            dec:'10 new offers overy day.350 offers an site. trusted by a communty of thousands',
        }
    ]
    return (
        <div className="body-design">
        <div className="container">

            <h6 className="text-center pt-5 service" >Service</h6>
            <h4 className="text-center dec-style pb-5">We are an agency tailored to all<br/>clients need that always delivered</h4>
            <div className="row">
                {
                    service.map(img=><ServiceDetail data={img}></ServiceDetail>)
                }
            </div>
        </div>
        </div>
    );
};

export default Service;