import React, {useEffect, useState} from 'react';
import defUserImg from "../assets/static/user-default.jpg";
import exampleDetailImg from "../assets/static/exampleDetailImg.png";
import RelatedLessons from "./shares/RelatedLessons";
import {useParams} from "react-router-dom";
import Nav2 from "./shares/Nav2";
import Nav from "./shares/Nav";

const LessonDetail = () => {
    const { id } = useParams();
    const [lesson,setLesson] = useState([]);
    const [uploader,setUploader] = useState([]);
    const loadLesson = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/lessons/${id}`);
        const resData = await response.json();
        setLesson(resData.data);
        setUploader(resData.data.uploader.title);
    }
    useEffect(() => {
        loadLesson();
    },[])
    return (
        <>
            <Nav/>
            <Nav2/>
        <section className={`flex flex-col px-[100px] py-[100px]`}>
            <div className={``}>
                <span className={`text-gradient text-[25px] leading-[28px] font-normal`}>{lesson.grade}/{lesson.subject}</span>
                <h1 className={`text-white text-[40px] leading-[45px] font-bold mt-5`}>
                    {lesson.title}
                </h1>
                <h2 className={`text-white text-[24px] leading-[27px] font-light mt-2`}>
                    Sub Title Lorem ipsum dolor sit amet consectetur. Habitant in viverra ligula
                    vitae sit non turpis sollicitudin.
                </h2>
                <div className={`flex items-center mt-8`}>
                    <img className={`w-[50px] h-[50px] rounded-full`} src={defUserImg} alt=""/>
                    <span className={`text-white text-[24px] font-normal mx-3`}>
                        By <strong className={`text-gradient`}>{uploader}</strong></span>
                    <span className={`text-slate-400 text-[24px] font-normal`}>{lesson.date}</span>
                </div>
            </div>
            <hr className={`my-5 w-full`}/>
            <div className={`grid grid-cols-4 gap-4`}>
                <div className={`col-span-3 relative`}>
                    <div className={`text-center`}>
                        <img className={`m-auto`} src={`http://127.0.0.1:8000/storage/header_image/${lesson.headerImage}`} alt=""/>
                    </div>
                    <div
                        className={`wysiwyg mt-5 text-justify text-white`}
                        dangerouslySetInnerHTML={{__html: lesson.description}} />
                    <i className="text-[30px] cursor-pointer fa fa-square-caret-right
                            absolute text-gradient right-0 bottom-0 z-[1]"/>
                    <i className="text-[30px] cursor-pointer fa fa-square-caret-left
                           absolute text-gradient right-[3%] bottom-0 z-[1]"/>
                </div>
                <div className={`col-span-1`}>
                    {/*RELATED LESSONS*/}
                    <div className={`bg-slate-100 p-4`}>
                        <h1 className={`text-slate-800 text-[24px] leading-[34px] font-bold`}>RELATED LESSONS</h1>
                        <div className={`mt-5`}>
                            {[0, 1, 2].map((count, index) => <RelatedLessons key={count}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default LessonDetail;