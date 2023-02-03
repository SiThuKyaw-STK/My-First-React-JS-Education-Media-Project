import React, {Fragment} from 'react';
import {Dialog, Transition} from "@headlessui/react";

const ModalTArea = ({isOpen,closeModal,submit,onChange,inputTitle,inputData}) => {
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
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Update Info
                                </Dialog.Title>
                                <form onSubmit={submit} className="mt-2">
                                    <label htmlFor="first-name" className="block text-md font-bold text-gray-600">
                                        {inputTitle}
                                    </label>
                                    <textarea className="mt-1 block w-full rounded-md border-gray-400 shadow-sm
                                          focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                           name=""
                                              minLength={100}
                                           id=""
                                              rows="15"
                                           defaultValue={inputData}
                                           onChange={e => onChange(e.target.value)}
                                           autoComplete="given-name"/>
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

export default ModalTArea;