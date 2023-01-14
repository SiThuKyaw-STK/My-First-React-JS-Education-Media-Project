import React from 'react';
import loading1 from '../../assets/static/loadin1.svg';
import loading2 from '../../assets/static/loading2.svg';

const Loading = () => {
    return (
        <div className={`absolute w-full h-full bg-primary z-[100]`}>
            <div className={`flex justify-center items-center h-full`}>
                <img src={loading1} alt=""/>
            </div>
        </div>
    );
};

export default Loading;