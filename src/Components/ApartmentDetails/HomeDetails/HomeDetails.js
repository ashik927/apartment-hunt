import React from 'react';
import { useForm } from "react-hook-form";
import './HomeDetails.css'
import bg from './bg.png';
import outside from './outdoor1.png'
import indoor1 from './interior1.png'
import indoor2 from './interior2.png'
import indoor3 from './interior3.png'
import indoor4 from './interior4.png';
import { ErrorMessage } from '@hookform/error-message';
import NavBar from '../../NavBar/NavBar';
import { useHistory } from 'react-router-dom';


const HomeDetails = () => {
  const history = useHistory();
  var sectionStyle = {
    maxWidth: "100%",
    height: "377px",
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})`,
    backgroundSize: "cover",
    color: 'white',
    fontSize: '50px',
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    const rentIt = {
      email: data.email,
      name: data.fullName,
      phone: data.phoneNo,
      message: data.message,
      status: 'pending'
    }
    sendRentData(rentIt);
  };

  const sendRentData = (rentData) => {
    fetch('https://cryptic-tor-84231.herokuapp.com/rentit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rentData)
    })
    history.push('/');
}

  return (
    <div>
      <NavBar></NavBar>
      <p style={sectionStyle}> <span style={{ textAlign: "center", fontSize: "1em", padding: '30%' }}>Apartment</span> </p>
      <div className="row m-3 h-50">
        <div className="col-md-8 col-sm-12">
          <img className="w-100 h-25 m-1" src={outside} alt="" />
          <div className="m-1">
            <img className="w-25 " src={indoor1} alt="" />
            <img className="w-25 " src={indoor2} alt="" />
            <img className="w-25 " src={indoor3} alt="" />
            <img className="w-25 " src={indoor4} alt="" />
          </div>
          <div >
            <div style={{ fontWeight: "100px" }} className='d-flex bd-highlight mb-3'>
              <h5 className='mr-auto  bd-highligh'><strong>Apartment for 3</strong>  </h5>
              <h5><strong>$335</strong></h5>
            </div>
            <div>
              <p className='text-left'> 3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne. </p>
            </div>
          </div>
          <div >
            <div style={{ fontWeight: "100px" }} className='d-flex bd-highlight mb-3'>
              <h5 className='mr-auto bd-highligh'><strong>Price Details</strong>  </h5>

            </div>
            <div>
              <p className='text-left' >Rent/Month: $550 (negotiable)  <br />
Service Charge : 8,000/= Tk per month, subject to change <br />
Security Deposit : 3 month’s rent <br />
Flat Release Policy : 3 months earlier notice required</p>
            </div>
          </div>
          <div >
            <div style={{ fontWeight: "100px" }} className='d-flex bd-highlight mb-3'>
              <h5 className='mr-auto bd-highligh'><strong>Property Details</strong>  </h5>

            </div>
            <div>
              <p className='text-left' >   Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. <br />
Flat Size : 3000 Sq Feet. <br />
Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) <br />
Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br />
Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. <br />
Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
</p>
            </div>
            <br />
          </div>
        </div>

        <div className="col-md-3 col-sm-12 m-2">
          <div style={{ width: '340px', height: '405px', backgroundColor: '#F4F4F4', padding: '20px' }} >

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="fullName" placeholder="Full Name " ref={register} />

              <br />
              <ErrorMessage errors={errors} name="fullName">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>

              <input name="phoneNo" placeholder="Phone no" ref={register({ required: 'this field is required' })} />
              <br />
              <ErrorMessage errors={errors} name='phoneNo'>
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>
              <input name="email" defaultValue="" placeholder="email " ref={register} />
              <br />
              <ErrorMessage errors={errors} name="email">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>
              <input name="message" defaultValue="" placeholder="Message" ref={register} />
              <br />
              <ErrorMessage errors={errors} name="message">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              </ErrorMessage>

              

              <input className='submit' type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;