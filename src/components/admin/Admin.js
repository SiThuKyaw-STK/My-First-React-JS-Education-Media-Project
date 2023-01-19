import React from 'react';
import img from "../../assets/static/logo-nav.png";
import user from "../../assets/static/user-default.jpg";
import {Link,Outlet} from "react-router-dom";
import SideNav from "../shares/SideNav";

const Admin = () => {
    return (
        <div className={`min-h-screen`}>
            <div className="grid grid-cols-12">
                <SideNav/>
                <div className={`col-span-10`}>
                    <nav className={`bg-info`}>
                        <div className={`flex justify-between items-center px-2 py-3`}>
                            <i className="fa fa-bars fa-2xl"></i>
                            <div className={`flex items-center`}>
                                <img className={`w-[30px] rounded-full mr-2`} src={user} alt=""/>
                                <strong>Mr.Jhon Doe</strong>
                            </div>
                        </div>
                    </nav>

                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Admin;