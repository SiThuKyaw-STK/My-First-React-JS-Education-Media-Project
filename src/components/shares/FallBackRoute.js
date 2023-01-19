import React from 'react';
import {Link} from "react-router-dom";

const FallBackRoute = () => {
    return (
        <div className={`min-h-screen text-center`}>
            <h1 className={`text-gradient text-[100px]`}>No Rout Found!</h1>
            <Link to={`/`} className={`text-blue-900 hover:text-blue-700 text-[50px] underline`}>Go Back Home</Link>
        </div>
    );
};

export default FallBackRoute;