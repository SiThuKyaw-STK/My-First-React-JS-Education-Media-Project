import React from 'react';
import Nav2 from "./shares/Nav2";
import LatestLesson from "./LatestLesson";
import MostViewLesson from "./MostViewLesson";
import {Link,Outlet} from "react-router-dom";
import Nav from "./shares/Nav";
import Footer from "./Footer";

const ShowLessons = () => {
    return (
        <>
            <Nav/>
            <LatestLesson/>
            <MostViewLesson/>
            <Footer/>
        </>
    );
};

export default ShowLessons;