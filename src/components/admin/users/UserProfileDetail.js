import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import dImg from "../../../assets/static/user-default.jpg";
import {useSelector} from "react-redux";
import Modal from "../../shares/Modal";

const UserProfileDetail = () => {
    const navigate = useNavigate();
    const userData = useSelector(state => state.userData);
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const img = user.user_image;
    const bio = user.bio;

    const loadUser = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`);
        const resData = await response.json();
        setUser(resData);
    };
    const apiBanUser = async (id) => {
        await fetch(`http://127.0.0.1:8000/api/ban/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userData.token}`
            }
        });
        loadUser();
        navigate('/admin/users/all')
    };
    const apiRestoreUser = async (id) => {
        await fetch(`http://127.0.0.1:8000/api/restore/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userData.token}`
            }
        });
        loadUser();
        navigate('/admin/users/all')
    };
    const apiMakeEditor = async (id) => {
        await fetch(`http://127.0.0.1:8000/api/makeEditor/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userData.token}`
            }
        });
        loadUser();
        navigate('/admin/users/all')
    };
    const apiMakeUser = async (id) => {
        await fetch(`http://127.0.0.1:8000/api/makeUser/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userData.token}`
            }
        });
        loadUser();
        navigate('/admin/users/all')
    };

    useEffect(() => {
        loadUser()
    }, []);

    return (
        <div className={`m-12`}>
            <h1 className={`text-[30px] text-info font-bold mb-2`}>
                <i className="fa fa-address-card mr-1"></i>User Detail
            </h1>
            <div className={`p-12 bg-white text-center rounded-lg`}>
                {
                    user.isBaned === "0" ?
                        <h1 className={`bg-red-200 text-red-900 font-bold py-1 rounded-lg mb-5`}>This User is
                            Baned!</h1>
                        :
                        ""
                }
                <div className={`relative inline-block`}>
                    {
                        img !== null ? <img src={`http://127.0.0.1:8000/storage/profile/${img}`}
                                            className={`w-[100px] h-[100px] rounded-full inline-block`} alt=""/> :
                            <img src={dImg} className={`w-[100px] h-[100px] rounded-full inline-block`} alt=""/>
                    }
                </div>
                <h1 className={`font-bold text-[20px]`}>
                    {user.name}
                </h1>
                <h2>
                    {user.email}
                </h2>
                <h3>
                    {
                        user.role === '0' ? 'Admin' : user.role === '1' ? 'Editor' : 'User'
                    }
                </h3>

                <div className={`text-justify text-[20px]`}>
                    {bio?bio:<h1 className={`text-center text-red-900 font-bold my-12`}>There is no biography yet!</h1>}
                </div>
                {
                    userData.data[0].role === '0' ?
                        <div className={`flex justify-end`}>
                            {/*isBaned*/}
                            <div className={`mr-1`}>
                                {
                                    user.isBaned === "1" ?
                                        <button onClick={() => apiBanUser(user.id)}
                                                className={`bg-red-500 py-1 px-3 rounded-full`}>
                                            Ban This User
                                        </button> :
                                        <button onClick={() => apiRestoreUser(user.id)}
                                                className={`bg-green-500 py-1 px-3 rounded-full`}>
                                            Restore This User
                                        </button>
                                }
                            </div>
                            {/*User Permission Change*/}
                            <div>
                                {
                                    user.role === "2" ?
                                        <button onClick={() => apiMakeEditor(user.id)}
                                                className={`bg-info py-1 px-3 rounded-full`}>Make
                                            Editor
                                        </button> : user.role === "0" ? '' :
                                        <button onClick={() => apiMakeUser(user.id)}
                                                className={`bg-info py-1 px-3 rounded-full`}>Make
                                            User
                                        </button>
                                }
                            </div>
                        </div>
                        :''
                }
            </div>
        </div>

    );
};

export default UserProfileDetail;