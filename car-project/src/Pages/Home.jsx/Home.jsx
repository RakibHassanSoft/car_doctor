import React from 'react';
import Banner from './Banner/Banner'
import About from './About/About';
import Services from './Services/Services';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Login></Login>
            <Signup></Signup>
        </div>
    );
};

export default Home;