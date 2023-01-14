import React from 'react';
import home1 from "../assets/static/home1.png";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <>
            <section id={"home"} className={`flex flex-col md:flex-row items-center px-[100px] py-[100px] z-[2] relative`}>
                <div className={`flex-1 flex-col`}>
                    <div className={""}>
                        <h1 className={`text-[60px] leading-[67px] text-gradient font-bold`}>
                            Let’s Learn Something<br/>
                            amazing with Our <br/>
                            Website.
                        </h1>
                        <p className={`w-[469px] font-normal text-slate-300 text-[18px] leading-[25px] mt-5`}>Lorem
                            ipsum dolor sit amet consectetur. Tellus eu aliquet mattis duis
                            faucibus urna risus. Laoreet magna urna neque amet blandit nisl dignissim.
                        </p>
                        <div className={`mt-3`}>
                            <a href="#"
                               className={`px-[35px] py-[13px] text-[20px] font-bold mr-3 rounded bg-gradient inline-block`}>Learn
                                More</a>
                            <Link className={`px-[35px] py-[13px] text-[20px] font-bold rounded 
                               border-gradient inline-block`} to={"/lessons"}>
                                <span
                                    className={"text-gradient"}>Lessons
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`flex-1 flex-col`}>
                    <img src={home1} className={`w-full`} alt=""/>
                </div>
            </section>
            <div className={"absolute z-[0] w-[40%] h-[25%] rounded-full top-[30%] left-[-10%] blue__gradient"}></div>
            <div className={"absolute z-[1] w-[40%] h-[20%] rounded-full bottom-40 blue__gradient"}></div>
            <div className={"absolute z-[0] w-[40%] h-[25%] top-[80%] right-[10%] blue__gradient rounded-full"}></div>

        </>
    );
};

export default Hero;