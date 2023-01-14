import React from 'react';
import phone from "../assets/static/phone.png";
import google from "../assets/static/google.png";
import apple from "../assets/static/apple.png";

const Application = () => {
    return (
        <section className={`flex flex-col md:flex-row items-center px-[100px] py-[100px]`}>
            <div className="flex-1">
                <div>
                    <img className={"w-[300px]"} src={phone} alt=""/>
                </div>
            </div>
            <div className={"flex-1 flex-col"}>
                <div>
                    <h1 className={`text-[60px] text-gradient font-bold leading-[67px]`}>
                        Get Andorid & IOS  APP <br/>
                        Now
                    </h1>
                    <p className={"font-normal text-slate-300 w-[469px] text-[20px] mt-4"}>Lorem ipsum dolor sit amet consectetur. Tellus eu aliquet mattis duis
                        faucibus urna risus. Laoreet magna urna neque amet blandit nisl dignissim.
                    </p>
                    <div className={"flex mt-3"}>
                        <a href="#" className={"mr-5"}>
                            <img src={google} alt="google"/>
                        </a>
                        <a href="#">
                            <img src={apple} alt="google"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Application;