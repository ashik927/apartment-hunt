import React from 'react';
import './ServiceDetail.css'
const ServiceDetail = (props) => {

    const {title,image,dec}=props.data;
    return (
        <div className="col-md-4">
            <div>
                <img className="img-design rounded mx-auto d-block" src={image} alt=""/>
                 <h4 className="text-center pt-2 pb-2"> {title}</h4>
                  <p className="text-center">{dec}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;