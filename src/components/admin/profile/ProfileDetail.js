import React, {useEffect, useState, Fragment} from 'react';
import {useParams} from "react-router-dom";
import dImg from "../../../assets/static/user-default.jpg";
import {Dialog, Transition} from '@headlessui/react'
import Modal from "../../shares/Modal";
import {useSelector} from "react-redux";
import ModalFile from "../../shares/ModalFile";
import ModalTArea from "../../shares/ModalTArea";

const ProfileDetail = () => {
    const {id} = useParams();
    const userData = useSelector(state => state.userData);
    const [isOpenUName, setIsOpenUName] = useState(false);
    const [isOpenUEmail, setIsOpenUEmail] = useState(false);
    const [isOpenUImg, setIsOpenUImg] = useState(false);
    const [isOpenUBio, setIsOpenUBio] = useState(false);

    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [cBio, setCBio] = useState('');
    const [img, setImg] = useState(null);
    const [cImg, setCImg] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);

    const apiUName = async () => {
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('name', name);
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
            method: "POST",
            body: formData,
            headers: {
                // 'Content-Type': 'application/json',
                authorization: `Bearer ${userData.token}`
            }
        })
        const resData = await response.json();
        if (resData) {
            loadUser();
        }
    };
    const apiUEmail = async () => {
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('email', email);
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
            method: "POST",
            body: formData,
            headers: {
                // 'Content-Type': 'application/json',
                authorization: `Bearer ${userData.token}`
            }
        })
        const resData = await response.json();
        if (resData) {
            loadUser();
        }
    };
    const apiUBio = async () => {
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('bio', cBio);
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
            method: "POST",
            body: formData,
            headers: {
                // 'Content-Type': 'application/json',
                authorization: `Bearer ${userData.token}`
            }
        })
        const resData = await response.json();
        if (resData) {
            loadUser();
        }
    };
    const apiUImg = async () => {
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('user_image', cImg);
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
            method: "POST",
            body: formData,
            headers: {
                // 'Content-Type': 'application/json',
                authorization: `Bearer ${userData.token}`
            }
        })
        const resData = await response.json();
        if (resData) {
            loadUser();
        }
    };
    const loadUser = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`);
        const resData = await response.json();
        setUser(resData);
        setName(resData.name);
        setEmail(resData.email);
        setBio(resData.bio);
        setImg(resData.user_image);
    };
    useEffect(() => {
        loadUser();
    }, []);

    function closeUName() {
        setIsOpenUName(false)
    }

    function openUName() {
        setIsOpenUName(true)
    }

    function openUEmail() {
        setIsOpenUEmail(true);
    }

    function closeUEmail() {
        setIsOpenUEmail(false);
    }

    function openUImg() {
        setIsOpenUImg(true);
    }

    function closeUImg() {
        setIsOpenUImg(false);
        setImgPreview(null);
    }

    function openUBio() {
        setIsOpenUBio(true);
    }

    function closeUBio() {
        setIsOpenUBio(false);
    }

    const submitName = e => {
        e.preventDefault();
        apiUName();
        setIsOpenUName(false);
    }
    const submitEmail = e => {
        e.preventDefault();
        apiUEmail();
        setIsOpenUEmail(false);
    }
    const submitImg = e => {
        e.preventDefault();
        apiUImg();
        setIsOpenUImg(false);
    }
    const submitBio = e => {
        e.preventDefault();
        apiUBio();
        setIsOpenUBio(false);
    }

    const onFileChange = e => {
        console.log('OnFileChange', e.target.files[0])
        setCImg(e.target.files[0]);
    }
    return (
        <div className={` grid grid-cols-12 gap-4 m-12`}>
            <div className={`col-span-6 p-12 bg-white text-center rounded-lg `}>
                <div className={`relative inline-block`}>
                    {
                        img !== null ? <img src={`http://127.0.0.1:8000/storage/profile/${img}`}
                                            className={`w-[100px] h-[100px] rounded-full inline-block`} alt=""/> :
                            <img src={dImg} className={`w-[100px] h-[100px] rounded-full inline-block`} alt=""/>
                    }
                    <i onClick={openUImg}
                       className="fa fa-camera text-[15px] absolute top-[70%] right-[0%] bg-white p-1 rounded-full"></i>
                </div>
                <h1 className={`font-bold text-[20px]`}>
                    {user.name} <i onClick={openUName} className="fa fa-pen-to-square"></i>
                </h1>
                <h2>{user.email} <i onClick={openUEmail} className="fa fa-pen-to-square"></i></h2>
                <h3>
                    {
                        user.role === '0' ? 'Admin' : 'User'
                    }
                </h3>

                <h6 className={`mt-5 text-left text-gray-500`}>
                    {bio ? 'Change Bio': 'Add Bio'}<i onClick={openUBio} className="fa fa-pen-to-square ml-1 text-black"></i>
                </h6>
                <div className={`text-justify text-[20px]`}>
                    {bio}
                </div>
            </div>

            {/*For Name Change*/}
            <Modal
                onChange={setName}
                isOpen={isOpenUName}
                submit={submitName}
                closeModal={closeUName}
                inputTitle={'Your Name'}
                inputData={name}/>
            {/*For Email Change*/}
            <Modal
                onChange={setEmail}
                isOpen={isOpenUEmail}
                submit={submitEmail}
                closeModal={closeUEmail}
                inputTitle={'Your Email'}
                inputData={email}/>
            {/*For Profile Photo Change*/}
            <ModalFile
                imgPreview={imgPreview}
                setImgPreview={setImgPreview}
                cImg={cImg}
                img={img}
                onChange={onFileChange}
                isOpen={isOpenUImg}
                submit={submitImg}
                closeModal={closeUImg}/>
            {/*For Bio Change*/}
            <ModalTArea
                isOpen={isOpenUBio}
                closeModal={closeUBio}
                submit={submitBio}
                inputTitle={'Describe who you are'}
                onChange={setCBio}
                inputData={bio}/>
        </div>
    );
};

export default ProfileDetail;