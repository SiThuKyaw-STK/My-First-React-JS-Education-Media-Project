import React from 'react';
import Nav from "./shares/Nav";
import LatestLesson from "./LatestLesson";
import MostViewLesson from "./MostViewLesson";
import Hero from "./Hero";
import Application from "./Application";
import OurTeacher from "./OurTeacher";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Nav/>
            <Hero/>
            <Application/>
            <OurTeacher/>
            <Footer/>
        </>
    );
};

export default Home;