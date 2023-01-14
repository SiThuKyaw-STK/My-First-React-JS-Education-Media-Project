import React from 'react';
import {useState} from "react";
import logoNav from '../../assets/static/logo-nav.png';
import close from '../../assets/static/close.svg';
import menu from '../../assets/static/menu.svg';
import DropDown from "./DropDown";
import {Link} from "react-router-dom";
import {Menu, Transition} from "@headlessui/react";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const forms = [
        {
            id: "login",
            title: "Login",
        },
        {
            id: "register",
            title: "Register",
        }
    ]
    return (
        <nav className={"w-full bg-nav flex py-[15px] px-[100px] justify-between items-center navbar"}>
            <Link to={"/"}><img src={logoNav} alt="education" className={"w-[300px] h-[54px]"}/></Link>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                <Link to={"/"} className={"font-normal hover:text-white cursor-pointer text-[20px] text-slate-400 mr-10"}>Home</Link>
                <Link to={"/lessons"} className={"font-normal hover:text-white cursor-pointer text-[20px] text-slate-400 mr-10"}>Lessons</Link>
                <li className={"font-normal hover:text-white cursor-pointer text-[20px] text-slate-400 mr-10"}><a href="#">Testimonials</a>
                </li>
                <li className={"font-normal hover:text-white cursor-pointer text-[20px] text-slate-400 mr-10"}><a href="#">Dashboard</a></li>
                {/*drop down*/}
                <Menu as={'div'} className="relative inline-block text-left z-[3]">
                    {({open}) => (
                        <>
                            <Menu.Button>
                                <div className={"text-slate-400 hover:text-white"}>
                                    <i className={`fa fa-user`}></i>
                                    <i className="ml-2 fa fa-angle-down"></i>
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
                                        {
                                            forms && forms.map((form) =>
                                                <Menu.Item key={form.id}>
                                                    <Link to={`/${form.id}`} className={"text-gray-700 block px-4 py-2 text-sm"}>{form.title}</Link>
                                                </Menu.Item>)
                                        }
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </ul>


            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${!toggle ? "hidden" : "flex"} 
                    p-6 bg-nav absolute top-20 right-0 mx-4 
                    my-2 min-w-[140px] rounded-xl slide-top`}>

                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        <li className={"font-medium cursor-pointer text-[16px] text-white mb-4"}><a href="#">Home</a>
                        </li>
                        <li className={"font-medium cursor-pointer text-[16px] text-white mb-4"}><a href="#">Lessons</a>
                        </li>
                        <li className={"font-medium cursor-pointer text-[16px] text-white mb-4"}><a
                            href="#">Testimonials</a></li>
                        <li className={"font-medium cursor-pointer text-[16px] text-white mb-4"}><a
                            href="#">Dashboard</a></li>
                        {/*drop down*/}
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Nav;