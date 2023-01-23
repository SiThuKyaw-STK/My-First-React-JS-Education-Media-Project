import React, {useEffect, useState} from 'react';
import {Editor} from "@tinymce/tinymce-react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const EditLesson = () => {
    const {id} = useParams();
    const userData = useSelector(state => state.userData);
    const currentUser = userData.data[0].id;
    const navigate = useNavigate();
    const [grades, setGrades] = useState([]);
    const [grade, setGrade] = useState('');
    const [currentGrade, setCurrentGrade] = useState('');
    const [subject, setSubject] = useState('');
    const [currentSubject, setCurrentSubject] = useState('');
    const [subjectsByGrade, setSubjectsByGrade] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const loadGrades = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/grades`);
        const resData = await response.json();
        setGrades(resData.data);
    }
    const loadSubjectsByGrade = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/subjectsByGrade/${currentGrade}`);
        const resData = await response.json();
        // console.log(resData)
        setSubjectsByGrade(resData.data)
    }
    const loadLesson = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/lessons/${id}`);
        const resData = await response.json();
        setGrade(resData.data.grade);
        setSubject(resData.data.subject);
        setTitle(resData.data.title);
        setDesc(resData.data.description);
        console.log(resData.data)
    }
    const apiUpdateLesson = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/lessons/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                grade: currentGrade,
                subject: currentSubject,
                lesson_title: title,
                lesson_description: desc,
                user_id: currentUser
            }),
            headers: {
                'content-type': "application/json",
                authorization: `Bearer ${userData.token}`
            }
        });
        const resData = await response.json();
        if (resData) {
            navigate('/admin/lessons/all')
        }
    }
    useEffect(() => {
        loadGrades();
        loadLesson();
        loadSubjectsByGrade();
    }, [currentGrade]);
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
        // console.log(currentGrade,currentSubject,title,desc)
        apiUpdateLesson();
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