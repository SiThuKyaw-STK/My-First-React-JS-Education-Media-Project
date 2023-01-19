import React, {useEffect, useState} from 'react';
import DataTable from "react-data-table-component";
import {Form, Link} from "react-router-dom";
import {useSelector} from "react-redux";

const AllSub = () => {
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [grades,setGrades] = useState([]);
    const [grade,setGrade] = useState('');
    const userData = useSelector(state => state.userData);
    const loadSubjects = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/subjects`);
        const resData = await response.json();
        // console.log(resData.data);
        setSubjects(resData.data);
    }
    const loadGrades = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/grades`);
        const resData = await response.json();
        // console.log(resData.data);
        setGrades(resData.data);
    }
    const apiSubAdd = async () => {
        const formData = new FormData();
        formData.append("grade",grade);
        formData.append("subject_title",subject);
        formData.append("user_id",userData.data[0].id);
        const response = await fetch(`http://127.0.0.1:8000/api/subjects`,{
            method: "POST",
            body: formData,
            headers: {
                authorization: `Bearer ${userData.token}`
            }
        });
        const resData = await response.json();
        loadSubjects();
    }
    const apiSubDelete= async (id) =>{
        await fetch(`http://127.0.0.1:8000/api/subjects/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json",
                authorization: `Bearer ${userData.token}`
            }
        });
        loadSubjects();
    }
    useEffect(() => {
        loadSubjects();
        loadGrades();
    }, [])

    //Form Submit
    const submitSubject = e => {
        e.preventDefault();
        // console.log(grade,subject,userData.data[0].id);
        apiSubAdd();
        setSubject('');
        setGrade(1);
    }

    //For react data-table component
    const columns = [
        {
            name: 'Id',
            sortable:true,
            selector: row => row.id,
        },
        {
            name: "Grade",
            sortable:true,
            selector: row => row.grade,
        },
        {
            name: 'Title',
            sortable:true,
            selector: row => row.title,
        },
        {
            name: 'Date/Time',
            sortable:true,
            selector: row => row.date+'/'+row.time,
        },
    ];
    const customStyles = {
        rows: {
            style: {
                minHeight: '50px', // override the row height
            },
        },
        headCells: {
            style: {
                fontSize: '15px',
                background:'gray',
                border:'1px solid rgba(0,0,0,.12)'
            },
        },
        cells: {
            style: {
                fontSize:'15px',
                border:'1px solid rgba(0,0,0,.12)'
            },
        },
    };
    const control = ({data}) => {
        const subId = data.id;
        return (
            <>
                <Link to={`/admin/subjects/edit/${subId}`} className={`inline-block px-2 py-1 my-2 rounded-full bg-green-300 mr-1`}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </Link>
                <button onClick={()=>apiSubDelete(subId)} className={`inline-block px-2 py-1 my-2 rounded-full bg-red-500 mr-1`}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </>
        )
    };
    return (
        <>
            <div className={`grid grid-cols-12 gap-6 m-3`}>
                <div className={`col-span-6`}>
                    <div className={``}>
                        <h1 className={`text-[20px] font-bold mb-2`}><i className="fa fa-pen mr-1"></i>Create Subjects</h1>
                        <form onSubmit={submitSubject}>
                            <div className="overflow-hidden border border-gray-200 shadow-md sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="grade"
                                                   className="block text-sm font-medium text-gray-700">
                                                Select Grade
                                            </label>
                                            <select onChange={e => setGrade(e.target.value)} id="grade" name="grade" autoComplete="grade-name"
                                                    className="mt-1 block w-full rounded-md border border-gray-300
                                                     bg-white py-2 px-3 shadow-sm focus:border-indigo-500
                                                      focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                {grades.length > 0 && grades.map((grade) =>
                                                    (<option key={grade.id} value={grade.id}>{grade.title}</option>))}
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="subject"
                                                   className="block text-sm font-medium text-gray-700">
                                                Subject
                                            </label>
                                            <input type="text"
                                                   name="subject"
                                                   id="subject"
                                                   value={subject}
                                                   onChange={e => setSubject(e.target.value)}
                                                   autoComplete="given-name"
                                                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                                                    focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent
                                             bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm
                                              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500
                                               focus:ring-offset-2">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`col-span-6`}>
                    <h1 className={`text-[20px] font-bold mb-2`}><i className="fa fa-list mr-1"></i>Subjects List</h1>
                    <DataTable
                        columns={columns}
                        data={subjects}
                        pagination
                        responsive
                        highlightOnHover
                        pointerOnHover
                        expandableRows
                        expandOnRowDoubleClicked
                        expandableRowsComponent={control}
                        customStyles={customStyles}
                    />
                </div>
            </div>
        </>
    );
};

export default AllSub;