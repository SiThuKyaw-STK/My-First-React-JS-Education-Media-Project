import React from 'react';
import img from "../../assets/static/logo-nav.png";
import user from "../../assets/static/user-default.jpg";
import {Link, Outlet, useNavigate} from "react-router-dom";
import SideNav from "../shares/SideNav";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Transition} from "@headlessui/react";
import {removeUser} from "../../redux/actions";


const Admin = () => {
    const userData = useSelector(state => state.userData);
    const userName = userData.data[0].name;
    const userImg = userData.data[0].user_image;
    const userId = userData.data[0].id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(removeUser(null))
        navigate("/login");
    }
    return (
        <div className={`min-h-screen`}>
            <div className="grid grid-cols-12">
                <SideNav/>
                <div className={`col-span-10`}>
                    <nav className={`bg-info`}>
                        <div className={`flex justify-between items-center px-2 py-3`}>
                            <i className="fa fa-bars fa-2xl"></i>
                            <div className={`flex items-center`}>
                                <Menu as={'div'} className="relative inline-block text-left z-[3]">
                                    {({open}) => (
                                        <>
                                            <Menu.Button>
                                                <div className={"hover:text-black text-slate-800 flex items-center"}>
                                                    <img className={`w-[30px] rounded-full mr-2`}
                                                         src={`http://127.0.0.1:8000/storage/profile/${userImg}`} alt=""/>
                                                    <strong>{userName}</strong>
                                                </div>
                                            </Menu.Button>

                                            <Transition
                                                show={open}
                                                enter="transform transition duration-200 ease-in"
                                                enterFrom="opacity-0 translate-y-2"
                                                enterTo="opacity-100 -translate-y-2"
                                                leave="transform transition duration-175 ease-out"
                                                leaveFrom="opacity-100 -translate-y-2"
                                                leaveTo="opacity-0 translate-y-2">
                                                <Menu.Items
                                                    className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md
                                bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1"
                                                    static>
                                                    <div className="py-1" role="none">
                                                        {userData &&
                                                        <>
                                                            <Menu.Item>
                                                                <Link to={`/admin/profile/detail/${userId}`} className={"text-gray-700 block px-4 py-2 text-sm"}>Profile Setting</Link>
                                                            </Menu.Item>
                                                            <hr className={`border border-slate-500`}/>
                                                            <Menu.Item>
                                                                <a onClick={logout} className={"text-gray-700 block px-4 py-2 text-sm"}>Logout</a>
                                                            </Menu.Item>
                                                        </>
                                                        }
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    )}
                                </Menu>

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