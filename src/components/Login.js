import React, {useState} from 'react';
import logoNav from "../assets/static/logo-nav.png";
import {Link} from "react-router-dom";
import Loading from "./shares/Loading";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const apiLogin = async user => {
        const response = await fetch(`http://127.0.0.1:8000/api/login`,{
            method: "POST",
            body: JSON.stringify(user),
            headers: {"content-type": "application/json"}
        });
        const resData = await response.json();
        if (resData){
            setIsLoading(false);
        }
    }
    const loginUser = event => {
        event.preventDefault();
        setIsLoading(true);
        let user = {email,password};
        apiLogin(user);
    }
    return (
        <section id={"login"} className={"min-h-screen grid grid-cols-12 gap-4 relative"}>
            {isLoading && <Loading/>}
            <div className={"col-span-8 px-[70px] py-[200px]"}>
                <img className={"w-[300px] h-[54px]"} src={logoNav} alt=""/>
                <h1 className={"text-white text-[40px] leading-[45px] font-bold w-[520px] mt-[200px]"}>
                    WELCOME TO EDUCATION ON THE WEB
                </h1>
                <h3 className={"text-slate-600 text-[20px] leading-[22px] font-normal w-[374px] mt-5"}>
                    Access your logins and personal data in the web app __ quickly and securely.
                </h3>
            </div>
            <div className="col-span-4 px-[70px] py-[200px] bg-white">
                <div className={'absolute right-1 top-5 flex items-center'}>
                    <h1>New User ?</h1>
                    <Link to={"/register"} className={`bg-blue-500 font-bold text-white px-[10px] py-[10px] ml-2 rounded-md`}>GET STARTED NOW !</Link>
                </div>
                <h1 className={`text-black text-[30px] leading-[34px] font-bold text-center`}>Hi, Welcome Back !</h1>
                <form onSubmit={loginUser}>
                    <div className={`mt-5`}>
                        <label className={`text-[14px]`}>Email</label>
                        <input
                            required
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type="text"
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
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full rounded-md border-gray-500 focus:outline-none focus:ring focus:ring-blue-300 p-[10px] border-2"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <div className="form-check flex items-center">
                            <input type="checkbox" className="form-checkbox mr-1"/>
                            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                            >Remember me</label
                            >
                        </div>
                        <a href="#!" className="text-gray-800">Forgot password?</a>
                    </div>
                    <div className={`mt-9 text-center`}>
                        <button className={`bg-blue-500 px-[100px] py-[10px] font-bold text-white`}>LOGIN</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;