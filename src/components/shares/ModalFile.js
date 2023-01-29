import React, {Fragment, useEffect, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import dImg from "../../assets/static/user-default.jpg";
const ModalFile = ({isOpen,closeModal,onChange,submit,img,cImg,imgPreview,setImgPreview}) => {
    // const [imgPreview, setImgPreview] = useState(null);
    useEffect(() => {
        if (cImg){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            }
            reader.readAsDataURL(cImg);
        }else {
            setImgPreview(null);
        }
    },[cImg]);
    const closeTest = () => {
        setImgPreview(null);
        closeModal();
    }
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                                >
                                    Change Profile Picture
                                    <i onClick={closeTest} className="fa fa-xmark fa-xl text-red-900 cursor-pointer"></i>
                                </Dialog.Title>
                                <form onSubmit={submit} className="mt-2" encType={'multipart/form-data'}>
                                    {
                                        imgPreview ? <img className={`w-[100px] h-[100px] rounded-full object-cover`}
                                                          src={imgPreview}/>:
                                                        <img className={`w-[100px] h-[100px] rounded-full`}
                                                            src={`http://127.0.0.1:8000/storage/profile/${img}`}/>
                                        }
                                    <label htmlFor="file-upload"
                                           className="relative cursor-pointer rounded-md bg-white font-medium
                                           text-indigo-600 focus-within:outline-none focus-within:ring-2
                                           focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                    <input
                                        accept={`image/*`}
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        onChange={onChange}
                                        className={`sr-only object-cover`}/>
                                    </label>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent
                                        bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200
                                        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 mt-4
                                        focus-visible:ring-offset-2 float-right"
                                    >
                                        Update
                                    </button>
                                </form>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    );
};

export default ModalFile;