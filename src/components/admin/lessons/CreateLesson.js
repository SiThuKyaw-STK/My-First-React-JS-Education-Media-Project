import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Editor} from "@tinymce/tinymce-react";

const CreateLesson = () => {
    const navigate = useNavigate();
    const userData = useSelector(state => state.userData);
    const [file, setFile] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [grades, setGrades] = useState([]);
    const [grade, setGrade] = useState('#');
    const [subjectsByGrade, setSubjectsByGrade] = useState([]);
    const [subject, setSubject] = useState('');
    const [imgPreview, setImgPreview] = useState(null);
    const loadGrades = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/grades`);
        const resData = await response.json();
        setGrades(resData.data);
    };
    const loadSubjectsByGrade = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/subjectsByGrade/${grade}`);
        const resData = await response.json();
        setSubjectsByGrade(resData.data)
    }
    const apiAddLesson = async () => {
        const formData = new FormData();
        formData.append('grade', grade);
        formData.append('subject', subject);
        formData.append('lesson_title', title);
        formData.append('lesson_description', desc);
        formData.append('header_image', file);
        formData.append("user_id", userData.data[0].id);
        const response = await fetch(`http://127.0.0.1:8000/api/lessons`, {
            method: "POST",
            body: formData,
            headers: {
                authorization: `Bearer ${userData.token}`
            }
        });
        console.log(response)
        const resData = await response.json();
        if (resData) {
            navigate('/admin/lessons/all')
            console.log(resData)
        }
    }
    useEffect(() => {
        loadGrades();
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
    }, [grade, file]);
    const submitLesson = e => {
        e.preventDefault();
        // console.log(grade,subject,title,desc,file,userData.data[0].id)
        apiAddLesson();
    }
    const onFileChange = e => {
        // console.log(e.target.files[0])
        setFile(e.target.files[0]);
    }
    return (
        <div className={`px-[100px] py-[50px]`}>
            <div className="overflow-hidden shadow sm:rounded-md bg-white px-4 py-2">
                <h1 className={`text-info text-[25px] font-bold mb-5`}>
                    <i className="fa-regular fa-square-plus mr-1"></i>
                    Create Lesson
                </h1>
                <form onSubmit={submitLesson} encType="multipart/form-data">
                    <div className="mb-5">
                        <label htmlFor="grade" className="block text-lg font-bold text-gray-600">Select Grade</label>
                        <select id="grade"
                                name="grade"
                                autoComplete="grade-title"
                                onChange={e => setGrade(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-gray-400 bg-white py-2 px-3
                                           shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500
                                           sm:text-sm">
                            <option value="#">please select grade</option>
                            {grades.length > 0 && grades.map(grade =>
                                <option key={grade.id} value={grade.id}>{grade.title}</option>)}
                        </select>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="subject" className="block text-lg font-bold text-gray-600">Select
                            Subject</label>
                        <select id="subject"
                                name="subject"
                                autoComplete="subject-title"
                                onChange={e => setSubject(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-gray-400 bg-white py-2 px-3
                                           shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500
                                           sm:text-sm">
                            {grade !== '#' ?
                                subjectsByGrade.map((subject) =>
                                    <option key={subject.id} value={subject.id}>{subject.title}</option>
                                ) : <option>You need to select grade!!!</option>}
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
                               onChange={event => setTitle(event.target.value)}
                               autoComplete="given-name"/>
                    </div>
                    <div className="mb-5">
                        <label className="block text-lg font-bold text-gray-600">Header Image</label>
                        <div
                            className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                                {imgPreview ? <img className={`w-[100px] m-auto`} src={imgPreview} alt=""/>:
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                         viewBox="0 0 48 48" aria-hidden="true">
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>}

                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload"
                                           className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
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
                            onEditorChange={(text) => setDesc(text)}
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

export default CreateLesson;