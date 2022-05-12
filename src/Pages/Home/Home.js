import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Footer from '../Shared/Footer';
import Form from './Form';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;