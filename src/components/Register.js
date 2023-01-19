import React, {useState} from 'react';
import logoNav from '../assets/static/logo-nav.png';
import {Link,useNavigate} from "react-router-dom";
import Loading from "./shares/Loading";

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password_confirmation,setConFirmPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const navigator = useNavigate();
    const apiRegister = async user => {
        const response = await fetch(`http://127.0.0.1:8000/api/register`,{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        });
        const resData = await response.json();
        if (resData){
            setIsLoading(false);
            navigator("/login");
        }else {
            console.log(resData)
        }
    }
    const registerUser = event => {
        event.preventDefault();
        setIsLoading(true);
        let user = {
            name,email,password,password_confirmation
        }
        apiRegister(user);
        setName('');
        setEmail('');
        setPassword('');
        setConFirmPassword('');
    }
    return (
        <section id={"register"} className={"min-h-screen grid grid-cols-12 gap-4 relative"}>
            {isLoading && <Loading/>}
            <div className={"col-span-8 px-[70px] pt-[200px]"}>
                <img className={"w-[300px] h-[54px]"} src={logoNav} alt=""/>
                <h1 className={"text-white text-[40px] leading-[45px] font-bold w-[520px] mt-[200px]"}>
                    WELCOME TO EDUCATION ON THE WEB
                </h1>
                <h3 className={"text-slate-600 text-[20px] leading-[22px] font-normal w-[374px] mt-5"}>
                    Access your logins and personal data in the web app __ quickly and securely.
                </h3>
                <Link to={`/`} className={`text-blue-500 hover:text-blue-800 underline mt-5 inline-block`}>Go Home Page</Link>
            </div>
            <div className="col-span-4 px-[70px] pt-[200px] bg-white">
                <div className={'absolute right-1 top-5 flex items-center'}>
                    <h1>Already Have Account ?</h1>
                    <Link to={"/login"} className={`bg-blue-500 font-bold text-white px-[10px] py-[10px] ml-2 rounded-md`}>LOGIN HERE !</Link>
                </div>
                <h1 className={`text-black text-[30px] leading-[34px] font-bold text-center`}>Hi, Register Here !</h1>
                <form onSubmit={registerUser}>
                    <div className={`mt-5`}>
                        <label className={`text-[14px]`}>Name</label>
                        <input
                            required
                            value={name}
                            onChange={event => setName(event.target.value)}
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full rounded-md border-gray-500 focus:outline-none focus:ring focus:ring-blue-300 p-[10px] border-2"
                            placeholder="Name"
                        />
                    </div>
                    <div className={`mt-5`}>
                        <label className={`text-[14px]`}>Email</label>
                        <input
                            required
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-gray-500 focus:outline-none focus:ring focus:ring-blue-300 p-[10px] border-2"
                            placeholder="Email"
                        />
                    </div>
                    <div className={`mt-5`}>
                        <label className={`text-[14px]`}>Password</label>
                        <input
                            required
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            autoComplete={"on"}
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full rounded-md border-gray-500 focus:outline-none focus:ring focus:ring-blue-300 p-[10px] border-2"
                            placeholder="Password"
                        />
                    </div>
                    <div className={`mt-5`}>
                        <label className={`text-[14px]`}>Confirm Password</label>
                        <input
                            required
                            value={password_confirmation}
                            onChange={event => setConFirmPassword(event.target.value)}
                            autoComplete={"on"}
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            className="block w-full rounded-md border-gray-500 focus:outline-none focus:ring focus:ring-blue-300 p-[10px] border-2"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className={`mt-9 text-center`}>
                        <button type={'submit'} className={`bg-blue-500 px-[100px] py-[10px] font-bold text-white`}>REGISTER</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;