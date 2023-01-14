import React from 'react';
import exampleDetailImg from "../../assets/static/exampleDetailImg.png";

const RelatedLessons = () => {
    return (
        <div>
            <div className={`flex justify-center items-center mb-3`}>
                <img className={`w-[100px] h-[100px] object-cover`} src={exampleDetailImg} alt=""/>
                <p className={`text-center text-[13px] leading-[16px] font-bold`}>
                    UN expert on Myanmar: Security Council resolution not strong enough on 'systematic
                    gross human rights violations'
                </p>
            </div>
        </div>
    );
};

export default RelatedLessons;