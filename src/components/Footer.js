import React from 'react';
import logo from "../assets/static/logo-nav.png";
import facebook from "../assets/static/facebook.svg";
import instagram from "../assets/static/instagram.svg";
import twitter from "../assets/static/twitter.svg";

const Footer = () => {
    return (
        <section className={"flex py-[50px] px-[100px] relative z-[1] bg-nav"}>
            <div className={`flex flex-auto flex-col`}>
                <img className={`w-[300px] h-[54px]`} src={logo} alt=""/>
                <p className={`text-[14px] leading-[24px] w-[371px] mt-5 font-normal text-white`}>
                    Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras
                    redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
                    inde.
                </p>
                <div className={"flex gap-4 mt-[20px]"}>
                    <img src={facebook} alt=""/>
                    <img src={instagram} alt=""/>
                    <img src={twitter} alt=""/>
                </div>
            </div>
            <div className="flex flex-auto flex-col text-start">
                <ul className={`grid grid-rows-1 gap-5`}>
                    <li className={`text-white text-[18px] leading-[21px] font-bold`}>Pages</li>

                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">Home it work</a>
                    </li>
                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">Pricing</a>
                    </li>
                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">Blog</a>
                    </li>
                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">Demo</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-auto flex-col text-start">
                <ul className={`grid grid-rows-1 gap-5`}>
                    <li className={`text-white text-[18px] leading-[21px] font-bold`}>Services</li>

                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">Shopify</a>
                    </li>
                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">WordPress</a>
                    </li>
                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">UI/UX Design</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-auto flex-col text-start">
                <ul className={`grid grid-rows-1 gap-5`}>
                    <li className={`text-white text-[18px] leading-[21px] font-bold`}>Contact</li>

                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">example@mail.com</a>
                    </li>
                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">09-999999999</a>
                    </li>
                    <li className={`text-white text-[14px] leading-[16px] font-normal`}>
                        <a href="#">Myanmar/Yangon</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-auto flex-col gap-4">
                <h1 className={`text-white text-[18px] leading-[21px] font-bold`}>Map Location</h1>
                <iframe className={`w-full`}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488799.48744450853!2d95.90137476858672!3d16.838952486284864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2z4YCb4YCU4YC64YCA4YCv4YCU4YC6!5e0!3m2!1smy!2smm!4v1672389700603!5m2!1smy!2smm"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
            </div>
        </section>
    );
};

export default Footer;