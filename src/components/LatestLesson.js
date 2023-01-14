import React from 'react';
import SlideShow from "./shares/SlideShow";
import Nav2 from "./shares/Nav2";
import Ads from "./shares/Ads";
import {Link} from "react-router-dom";

const LatestLesson = () => {
    const counts = [0,1,2,3,4,5,6,7,8,9];

    return (
        <>
            <Nav2/>
            <section className={`flex flex-col md:flex-row items-center justify-center px-[100px] py-[100px]`}>
                <div className="relative">
                    <h1 className={`text-green-400 text-[25px] leading-[28px] font-bold`}>Latest Lesson</h1>
                    <SlideShow counts={counts} slideSm={2} slideMd={3} slideLg={5}/>
                </div>
            </section>
            <Ads/>
        </>
    );
};

export default LatestLesson;