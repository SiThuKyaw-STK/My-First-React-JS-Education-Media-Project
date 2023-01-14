import React from 'react';
import {Menu, Transition} from "@headlessui/react";
import {Link,useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../redux/actions";

const DropDown = ({name,iName,position,links,changePage,type}) => {
    const pageSetter = useSelector(state => state.pageSetter);

    return (
        <Menu as={'div'} className="relative inline-block text-left z-[3]">
            {({open}) => (
                <>
                    <Menu.Button>
                        <div className={"text-slate-400 hover:text-white"}>
                            {name}
                            <i className={`fa fa-${iName}`}></i>
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
                            className={`absolute ${position} z-10 mt-2 w-56 origin-top-right rounded-md
                                bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1"
                            static>
                            <div className="py-1" role="none">
                                {
                                    links && links.map((link) =>
                                        <Menu.Item key={link.id}>
                                            <a className={"text-gray-700 block px-4 py-2 text-sm cursor-pointer"} onClick={() => changePage(type,link.id,link.title)}>{link.title}</a>
                                            {/*<Link to={`/lessonsByGrade/${link.id}`} className={"text-gray-700 block px-4 py-2 text-sm"}>{link.title}</Link>*/}
                                        </Menu.Item>)
                                }
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

export default DropDown;