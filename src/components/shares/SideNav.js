import React from 'react';
import {Link} from "react-router-dom";
import img from "../../assets/static/logo-nav.png";
import {useSelector} from "react-redux";

const SideNav = () => {
    const userData = useSelector(state => state.userData);
    const userRole = userData.data[0].role;
    return (
        <div className={`col-span-2  bg-nav min-h-screen`}>
            <Link to={`/`}><img className={`py-5 px-5`} src={img} alt=""/></Link>
            <div>
                <ul className="mt-9">
                    <li className="text-dimWhite font-bold px-5">
                        Pages
                    </li>
                    <li className="pl-12 mt-3">
                        <ul>
                            <a href="#" className="text-white">
                                <i className="fa-sharp fa-solid fa-chart-simple mr-1"></i>
                                <span className="">Dashboard</span>
                            </a>
                        </ul>
                    </li>
                    <div className={`my-3 inline-block`}></div>
                    <li className="text-dimWhite font-bold px-5">
                        <i className="fa-solid fa-book-open mr-1"></i>Lessons Control
                    </li>
                    <li className="pl-12 mt-3">
                        <ul id="articles" className="text-white">
                            <li className="mt-3">
                                <Link to={`/admin/lessons/all`} className="">
                                    <i className="fa-solid fa-table-list mr-1"></i>Lessons
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to={`/admin/subjects/all`} className="">
                                    <i className="fa-solid fa-pencil mr-1"></i>Create Subject
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to={`/admin/lessons/create`} className="">
                                    <i className="fa-solid fa-plus mr-1"></i>Create Lesson
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <div className={`my-3 inline-block`}></div>
                    {
                        userRole === "0" || userRole === "1" ?
                        <>
                            <li className="text-dimWhite font-bold px-5">
                                <i className="fa fa-users mr-1"></i> Users Control
                            </li>
                            <li className="">
                                <ul id="users" className="text-white pl-12 mt-3">
                                    <li className="">
                                        <Link to={`/admin/users/all`} className="">
                                            <i className="fa fa-users mr-1"></i>Users</Link>
                                    </li>
                                </ul>
                            </li>
                        </>:""
                    }
                    <div className={`my-3 inline-block`}></div>
                    <li className="text-dimWhite font-bold px-5">
                        <i className="fa-solid fa-image mr-1"></i> Gallery
                    </li>
                    <li className="">
                        <ul id="photos" className="text-white pl-12 mt-3">
                            <li className="">
                                <a href="#" className="">
                                    <i className="fa-solid fa-image mr-1"></i>Photos</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={`text-center mt-5`}>
                    <Link to={'/'} className={`bg-info px-10 py-2 font-bold text-primary rounded`}>
                        GO TO FRONTEND
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SideNav;