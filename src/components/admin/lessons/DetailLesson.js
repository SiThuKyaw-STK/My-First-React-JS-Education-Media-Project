import React, {useEffect, useState} from 'react';
import defUserImg from "../../../assets/static/user-default.jpg";
import {useParams} from "react-router-dom";
import Loading2 from "../../shares/Loading2";

const DetailLesson = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [lesson, setLesson] = useState([]);
    const [grade, setGrade] = useState('');
    const [subject, setSubject] = useState('');
    const [uploader, setUploader] = useState([]);
    const loadLesson = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/lessons/${id}`);
        const resData = await response.json();
        setLesson(resData.data);
        setGrade(resData.data.grade);
        setSubject(resData.data.subject);
        setUploader(resData.data.uploader);
        resData && setLoading(false);
    }
    useEffect(() => {
        setLoading(true)
        loadLesson();
    }, []);

    return (
        <section className={`flex flex-col ${loading ? 'h-full' : 'px-[100px] py-[100px]'} relative`}>
            {loading && <Loading2/>}
            <div className={``}>
                <span
                    className={`text-gradient text-[25px] leading-[28px] font-normal`}>{grade.title}/{subject.title}</span>
                <h1 className={`text-white text-[40px] leading-[45px] font-bold mt-5`}>
                    {lesson.title}
                </h1>
                <h2 className={`text-white text-[24px] leading-[27px] font-light mt-2`}>
                    Sub Title Lorem ipsum dolor sit amet consectetur. Habitant in viverra ligula
                    vitae sit non turpis sollicitudin.
                </h2>
                <div className={`flex items-center mt-8`}>
                    {
                        uploader.user_image ?
                            <img className={`w-[50px] h-[50px] rounded-full`}
                                 src={`http://127.0.0.1:8000/storage/profile/${uploader.user_image}`} alt=""/>
                            :
                            <img className={`w-[50px] h-[50px] rounded-full`} src={defUserImg} alt=""/>
                    }
                    <span className={`text-white text-[24px] font-normal mx-3`}>
                        By <strong className={`text-gradient`}>{uploader.title}</strong></span>
                    <span className={`text-slate-400 text-[24px] font-normal`}>{lesson.date}</span>
                </div>
            </div>
            <hr className={`my-5 w-full`}/>
            <div className={``}>
                <div className={`text-center`}>
                    {
                        lesson.headerImage &&
                        <img className={`m-auto`}
                             src={`http://127.0.0.1:8000/storage/header_image/${lesson.headerImage}`} alt=""/>
                    }
                </div>
                <div
                    className={`wysiwyg mt-5 text-justify text-white`}
                    dangerouslySetInnerHTML={{__html: lesson.description}}/>
            </div>
        </section>
    );
};

export default DetailLesson;