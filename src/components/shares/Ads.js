import React from 'react';
import AdsImg from "../../assets/static/ads.png";


const Ads = () => {
    return (
        <section id={"ads"} className={"px-[100px]"}>
            <div className={"flex justify-center"}>
                <img src={AdsImg} alt=""/>
            </div>
        </section>
    );
};

export default Ads;