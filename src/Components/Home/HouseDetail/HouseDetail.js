import React from 'react'
import './HouseDetail.css'
const HouseDetail = (props) => {
const{title,image,icon1,dec,icon2,iconDec2,icon3,iconDec3,amount,button}=props.detail;
    return (
       
            <div className="col-md-4 bodyMargin">
            <div className="bg-style">
            
            <img style={{width:'288px'}} src={image} alt=""/>
              <div className="padding-inside">
              <h5>{title}</h5>

<img style={{height:'15px',marginRight:'8px'}} src={icon1} alt=""/>
  <span>{dec}</span>
  <div style={{display:'flex'}}>
      <div>
          <img style={{height:'15px',marginRight:'8px'}} src={icon2} alt=""/>

       <span>{iconDec2}</span>
      </div>
      <div>
          <img style={{height:'15px',marginRight:'8px',marginLeft:'20px'}} src={icon3} alt=""/>

           <span>{iconDec3}</span>
      </div>
  </div>
      <div className="view-detail">
          <div className="amount-design">
          <h3>{amount}</h3>
          </div>

          <div>
    <button className="button-design">View Details</button>
          </div>
      </div>
              </div>
            </div>
        
       </div>
    );
};

export default HouseDetail;