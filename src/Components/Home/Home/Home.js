import React from 'react';
import NavBar from '../../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HouseRent from '../HouseRent/HouseRent';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <HouseRent></HouseRent>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;
