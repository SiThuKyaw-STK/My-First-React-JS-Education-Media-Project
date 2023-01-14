import React, {useEffect, useState} from 'react';
import DropDown from "./DropDown";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeUser, setGrade, setTeacher} from "../../redux/actions";

const Nav2 = () => {
    const [grades,setGrades] =useState([]);
    const [users,setUsers] =useState([]);
    const loadGrades = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/grades`);
        const resData = await response.json();
        setGrades(resData.data);

    };
    const loadUsers = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/users`);
        const resData = await response.json();
        setUsers(resData.data);

    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const byGrade = (type,id,title) => {
        dispatch(setGrade({type,id,title}));
        navigate("/lessonsByGrade")
    };
    const byTeacher = (type,id,title) => {
        dispatch(setTeacher({type,id,title}));
        navigate("/lessonsByTeacher")
        console.log(type,id,title)

    };

    useEffect(() => {
        loadGrades();
        loadUsers();
    },[]);
    return (
        <nav className={"w-full bg-nav flex py-[15px] px-[100px] justify-between items-center mt-[1px]"}>
            <div className={"gap-4 flex"}>
                <DropDown type={"byGrade"} changePage={byGrade} links={grades} name={"Search By Grade"}/>
                {/*<DropDown name={"Search By Subject"}/>*/}
                <DropDown changePage={byTeacher} links={users} name={"Search By Teacher"}/>
                <Link type={"byTeacher"} to={"/allLessons"} className={`text-slate-400 hover:text-white`}>All lessons</Link>
            </div>

            <div className={""}>
                <div className="relative mx-auto text-gray-600">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search"/>
                    <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav2;