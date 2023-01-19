import React, {useEffect, useState} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const EditSub = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const userData = useSelector(state => state.userData);
    // console.log(userData.data[0].id)
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');
    const apiSubUpdate = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/subjects/${id}`,{
            method:"PATCH",
            body: JSON.stringify({
                grade_id:grade.id,
                title:subject,
                user_id:userData.data[0].id,
            }),
            headers: {
                'content-type': "application/json",
                authorization: `Bearer ${userData.token}`
            }
        });
        const resData = await response.json();
        if (resData){
            navigate('/admin/subjects/all')
        }
    }
    const loadCurrentData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/subjects/${id}`);
        const resData = await response.json();
        setSubject(resData.title);
        setGrade(resData.grade);
    }
    useEffect(() => {loadCurrentData();},[]);
    const submitSubject = e => {
        e.preventDefault();
        apiSubUpdate();
    }
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form onSubmit={submitSubject}>
                <div className="form-group mb-6">
                    <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">
                        Grade
                    </label>
                    <input type="text" disabled className="form-control
                                                   block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                                   bg-white bg-clip-padding border border-solid border-gray-300
                                                   rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                                                    focus:border-blue-600 focus:outline-none"
                           id="grade"
                           value={grade.title}/>
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="exampleInputPassword2"
                           className="form-label inline-block mb-2 text-gray-700">Subject</label>
                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal
                                                      text-gray-700 bg-white bg-clip-padding border border-solid
                                                      border-gray-300 rounded transition ease-in-out m-0
                                                      focus:text-gray-700 focus:bg-white focus:border-blue-600
                                                      focus:outline-none"
                           id="exampleInputPassword2"
                           value={subject}
                           onChange={e => setSubject(e.target.value)}/>
                </div>
                <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs
                                                 leading-tight uppercase rounded shadow-md hover:bg-blue-700
                                                 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none
                                                 focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
                                                 ease-in-out">
                    Update Subject
                </button>
            </form>
        </div>
    );
};

export default EditSub;