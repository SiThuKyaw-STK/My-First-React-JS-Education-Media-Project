import React from 'react';
import Nav2 from "./shares/Nav2";
import LatestLesson from "./LatestLesson";
import MostViewLesson from "./MostViewLesson";
import {Link,Outlet} from "react-router-dom";

const ShowLessons = () => {
    return (
        <>
            <LatestLesson/>
            <MostViewLesson/>
        </>
    );
};

export default ShowLessons;