import React, {useEffect, useState} from 'react';
import {Editor} from "@tinymce/tinymce-react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const EditLesson = () => {
    const {id} = useParams();
    const userData = useSelector(state => state.userData);
    const currentUser = userData.data[0].id;
    const navigate = useNavigate();
    const [file, setFile] = useState('');
    const [grades, setGrades] = useState([]);
    const [grade, setGrade] = useState('');
    const [currentGrade, setCurrentGrade] = useState('');
    const [subject, setSubject] = useState('');
    const [currentSubject, setCurrentSubject] = useState('');
    const [subjectsByGrade, setSubjectsByGrade] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [imgPreview, setImgPreview] = useState(null);
    const [oldImg,setOldImg] = useState(null);
    const loadGrades = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/grades`);
        const resData = await response.json();
        setGrades(resData.data);
    }
    const loadSubjectsByGrade = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/subjectsByGrade/${currentGrade}`);
        const resData = await response.json();
        // console.log('subjectsByGrade', resData.data)
        setSubjectsByGrade(resData.data)
    }
    const loadLesson = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/lessons/${id}`);
        const resData = await response.json();
        setGrade(resData.data.grade);
        setSubject(resData.data.subject);
        setTitle(resData.data.title);
        setDesc(resData.data.description);
        setOldImg(resData.data.headerImage);
    }
    const apiUpdateLesson = async () => {
        const formData = new FormData();
        formData.append('_method','PUT');
        formData.append('grade', currentGrade);
        formData.append('subject', currentSubject);
        formData.append('lesson_title', title);
        formData.append('lesson_description', desc);
        formData.append('header_image', file);
        formData.append("user_id", currentUser);
        const response = await fetch(`http://127.0.0.1:8000/api/lessons/${id}`, {
            method: "POST",
            body: formData,
            headers: {
                // 'Content-Type': 'application/json',
                // 'enctype': 'multipart/form-data',
                authorization: `Bearer ${userData.token}`
            }
        });
        const resData = await response.json();
        console.log('updateData::: ', resData)
        if (resData) {
            navigate('/admin/lessons/all')
        } else {
            console.log(resData)
        }
    }
    useEffect(() => {
        loadGrades();
        loadLesson();
        loadSubjectsByGrade();
        if (file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            }
            reader.readAsDataURL(file);
        }else {
            setImgPreview(null);
        }
    }, [currentGrade,file]);
    let clickGrade = setInterval(function () {
        let data = document.getElementById('grade');
        let data2 = document.getElementById('subject')
        data.click()
        data2.click()
    }, 500)
    setTimeout(function () {
        clearInterval(clickGrade)
    }, 1000);
    const submitLesson = e => {
        e.preventDefault();
        apiUpdateLesson();
    }
    const onFileChange = e => {
        console.log('OnFileChange', e.target.files[0])
        setFile(e.target.files[0]);
    }
    return (
        <div className={`px-[100px] py-[50px]`}>
            <div className="overflow-hidden shadow sm:rounded-md bg-white px-4 py-2">
                <h1 className={`text-info text-[25px] font-bold mb-5`}>
                    <i className="fa-regular fa-edit mr-1"></i>
                    Update Lesson
                </h1>
                <form onSubmit={submitLesson} encType="multipart/form-data">
                    <div className="mb-5">
                        <label htmlFor="grade" className="block text-lg font-bold text-gray-600">Select Grade</label>
                        <select id="grade"
                                name="grade"
                                autoComplete="grade-title"
                                onClick={e => setCurrentGrade(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-gray-400 bg-white py-2 px-3
                                           shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500
                                           sm:text-sm">
                            {grades.map((cGrade) => <option selected={cGrade.id === grade.id} key={cGrade.id}
                                                            value={cGrade.id}>{cGrade.title}</option>)}
                        </select>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="subject" className="block text-lg font-bold text-gray-600">Select
                            Subject</label>
                        <select id="subject"
                                name="subject"
                                autoComplete="subject-title"
                                onClick={e => setCurrentSubject(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-gray-400 bg-white py-2 px-3
                                           shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500
                                           sm:text-sm">
                            {subjectsByGrade.map((cSubject) =>
                                <option selected={subject.id === cSubject.id} key={cSubject.id}
                                        value={cSubject.id}>{cSubject.title}</option>)}
                        </select>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="first-name" className="block text-lg font-bold text-gray-600">
                            Lesson Title
                        </label>
                        <input className="mt-1 block w-full rounded-md border-gray-400 shadow-sm
                                          focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                               type="text"
                               name="lesson-title"
                               id="lesson-title"
                               value={title}
                               onChange={e => setTitle(e.target.value)}
                               autoComplete="given-name"/>
                    </div>
                    <div className="mb-5">
                        <label className="block text-lg font-bold text-gray-600">Header Image</label>
                        <div
                            className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                                {imgPreview ? <img className={`w-[100px] m-auto`} src={imgPreview} alt=""/>: oldImg==null ?
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                         viewBox="0 0 48 48" aria-hidden="true">
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    :<img className={`w-[100px] m-auto`} src={`http://127.0.0.1:8000/storage/header_image/${oldImg}`} alt=""/>}
                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload"
                                           className="relative cursor-pointer rounded-md bg-white font-medium
                                           text-indigo-600 focus-within:outline-none focus-within:ring-2
                                           focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input
                                            accept={`image/*`}
                                            onChange={onFileChange}
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"/>
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, up to 10MB</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lesson-description" className="block text-lg font-bold text-gray-600">
                            Lesson Description
                        </label>
                        <Editor
                            value={desc}
                            onEditorChange={(text) => setDesc(text)}
                            init={{
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough |' +
                                    ' link image media table mergetags | addcomment showcomments | ' +
                                    'a11ycheck typography | align lineheight | checklist numlist bullist indent outdent ' +
                                    '| emoticons charmap | removeformat',
                                plugins: 'anchor autolink charmap codesample emoticons image link lists media ' +
                                    'searchreplace table visualblocks wordcount checklist mediaembed casechange export ' +
                                    'formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen ' +
                                    'powerpaste advtable advcode editimage tinycomments tableofcontents footnotes ' +
                                    'mergetags autocorrect typography inlinecss',
                            }}
                        />
                    </div>
                    <div className="bg-gray-50 text-right">
                        <button type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent
                                bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditLesson;