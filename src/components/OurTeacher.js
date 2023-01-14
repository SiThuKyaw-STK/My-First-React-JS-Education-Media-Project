import React from 'react';
import defUser from "../assets/static/user-default.jpg";

const OurTeacher = () => {
    return (
        <>
            <section className={`flex flex-col items-center px-[100px] py-[100px] relative z-[1]`}>
                <div className="flex flex-col w-full">
                    <div className={"text-center"}>
                        <h1 className={"text-gradient text-[30px] leading-[34px] font-normal"}>~ Team Member ~</h1>
                        <h1
                            className={"text-[50px] leading-[56px] font-normal tracking-widest text-white mt-3"}>
                            Our teachers is read to <br/>
                            help our students!
                        </h1>
                        <p className={"w-[542px] h-[44px] text-[20px] leading-[22px] text-slate-300 inline-block mt-2"}>
                            We love what we do and we do it with passion. We value the
                            experimentation of the message and smart incentives.
                        </p>
                    </div>
                </div>
                <div className={"grid md:grid-cols-4 gap-4 mt-[50px]"}>
                    <div className="flex-1 flex-row border-4 border-gray-500 rounded-t-2xl">
                        <div className={"w-[300px] h-[400px] bg-white rounded-t-xl flex flex-col justify-center items-center"}>
                            <img src={defUser} alt="defUser" className={`w-[100px] h-[100px] rounded-full border-4 border-gray-500`}/>
                            <h1 className={`text-[30px] font-bold leading-[34px] mt-1`}>Jhon Doe</h1>
                            <h2 className={`text-[17px] leading-[19px] mt-2`}>Math & Physic</h2>
                            <p className={`text-[19px] leading-[21px] mt-3 w-[228px] text-center text-gray-500`}>Lorem ipsum dolor sit amet consectetur. Sagittis ultrices dui eget
                                viverra non senectus non amet. Sit sapien tellus gravida a dis
                                elit aliquet iaculis.
                            </p>
                            <a href="#" className={`py-[5px] px-[70px] bg-gradient rounded-md mt-3`}>view more detail</a>
                        </div>
                    </div>
                    <div className="flex-1 flex-row border-4 border-gray-500 rounded-t-2xl">
                        <div className={"w-[300px] h-[400px] bg-white rounded-t-xl flex flex-col justify-center items-center"}>
                            <img src={defUser} alt="defUser" className={`w-[100px] h-[100px] rounded-full border-4 border-gray-500`}/>
                            <h1 className={`text-[30px] font-bold leading-[34px] mt-1`}>Jhon Doe</h1>
                            <h2 className={`text-[17px] leading-[19px] mt-2`}>Math & Physic</h2>
                            <p className={`text-[19px] leading-[21px] mt-3 w-[228px] text-center text-gray-500`}>Lorem ipsum dolor sit amet consectetur. Sagittis ultrices dui eget
                                viverra non senectus non amet. Sit sapien tellus gravida a dis
                                elit aliquet iaculis.
                            </p>
                            <a href="#" className={`py-[5px] px-[70px] bg-gradient rounded-md mt-3`}>view more detail</a>
                        </div>
                    </div>
                    <div className="flex-1 flex-row border-4 border-gray-500 rounded-t-2xl">
                        <div className={"w-[300px] h-[400px] bg-white rounded-t-xl flex flex-col justify-center items-center"}>
                            <img src={defUser} alt="defUser" className={`w-[100px] h-[100px] rounded-full border-4 border-gray-500`}/>
                            <h1 className={`text-[30px] font-bold leading-[34px] mt-1`}>Jhon Doe</h1>
                            <h2 className={`text-[17px] leading-[19px] mt-2`}>Math & Physic</h2>
                            <p className={`text-[19px] leading-[21px] mt-3 w-[228px] text-center text-gray-500`}>Lorem ipsum dolor sit amet consectetur. Sagittis ultrices dui eget
                                viverra non senectus non amet. Sit sapien tellus gravida a dis
                                elit aliquet iaculis.
                            </p>
                            <a href="#" className={`py-[5px] px-[70px] bg-gradient rounded-md mt-3`}>view more detail</a>
                        </div>
                    </div>
                    <div className="flex-1 flex-row border-4 border-gray-500 rounded-t-2xl">
                        <div className={"w-[300px] h-[400px] bg-white rounded-t-xl flex flex-col justify-center items-center"}>
                            <img src={defUser} alt="defUser" className={`w-[100px] h-[100px] rounded-full border-4 border-gray-500`}/>
                            <h1 className={`text-[30px] font-bold leading-[34px] mt-1`}>Jhon Doe</h1>
                            <h2 className={`text-[17px] leading-[19px] mt-2`}>Math & Physic</h2>
                            <p className={`text-[19px] leading-[21px] mt-3 w-[228px] text-center text-gray-500`}>Lorem ipsum dolor sit amet consectetur. Sagittis ultrices dui eget
                                viverra non senectus non amet. Sit sapien tellus gravida a dis
                                elit aliquet iaculis.
                            </p>
                            <a href="#" className={`py-[5px] px-[70px] bg-gradient rounded-md mt-3`}>view more detail</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className={"absolute z-[0] w-[1000px] h-[300px] rounded-full top-[250%] left-[15%] blue__gradient"}>
            </div>
            <div className={"absolute z-[0] w-[500px] h-[300px] rounded-full top-[250%] left-[30%] blue__gradient"}>
            </div>
        </>
    );
};

export default OurTeacher;