import React from 'react';
import loading from "../../assets/static/loading2.svg";

const Loading2 = () => {
    return (
        <div className={`absolute w-full h-full bg-primary z-[100]`}>
                <div className="flex h-full justify-center items-center">
                    <div>
                        <img src={loading} alt=""/>
                        <h1 className={`text-gradient text-[25px] text-center font-bold`}>Loading...</h1>
                    </div>
                </div>
        </div>
    );
};

export default Loading2;