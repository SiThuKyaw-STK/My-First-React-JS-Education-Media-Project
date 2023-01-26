import React, {useEffect, useState} from 'react';
import DataTable from "react-data-table-component";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Loading2 from "../../shares/Loading2";

const AllLessons = () => {
    const userData = useSelector(state => state.userData);
    const [loading, setLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0);
    const [lessons, setLessons] = useState([]);
    const loadLessons = async (page) => {
        const response = await fetch(`http://127.0.0.1:8000/api/lessons?page=${page}`);
        const resData = await response.json();
        setLessons(resData.data);
        setPageCount(resData.meta.total);
        resData && setLoading(false);
        // console.log(resData);
    };
    const apiLessonDelete = async (id) => {
        await fetch(`http://127.0.0.1:8000/api/lessons/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${userData.token}`
            }
        });
        loadLessons();
    }

    useEffect(() => {
        setLoading(true)
            loadLessons();
    }, []);

    //Data table custom
    const columns = [
        {
            name: 'Id',
            sortable: true,
            selector: row => row.id,
            maxWidth: '100px'
        },
        {
            name: "Grade",
            sortable: true,
            selector: row => row.grade.title,
            maxWidth: '100px'
        },
        {
            name: 'Subject',
            sortable: true,
            selector: row => row.subject.title,
            maxWidth: '200px'

        },
        {
            name: 'Title',
            sortable: true,
            selector: row => row.title,
            maxWidth: '600px', // when using custom you should use width or maxWidth, otherwise, the table will default to flex grow behavior
        },
        {
            name: 'Date',
            sortable: true,
            selector: row => row.date + '/' + row.time,
            maxWidth: '300px'
        }
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
                background: 'gray',
                border: '1px solid rgba(0,0,0,.12)'
            },
        },
        cells: {
            style: {
                fontSize: '15px',
                border: '1px solid rgba(0,0,0,.12)'
            },
        },
    };
    const control = ({data}) => {
        const lessonId = data.id;
        return (
            <>
                <Link to={`/admin/lessons/detail/${lessonId}`} className={`inline-block px-2 py-1 my-2 rounded-full bg-blue-300 mr-1`}>
                    <i className="fa-regular fa-eye"></i>
                </Link>
                <Link to={`/admin/lessons/edit/${lessonId}`} className={`inline-block px-2 py-1 my-2 rounded-full bg-green-300 mr-1`}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </Link>
                <button onClick={() => apiLessonDelete(lessonId)}
                        className={`inline-block px-2 py-1 my-2 rounded-full bg-red-500 mr-1`}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </>
        )
    };

    //Data table pagination
    const handlePageChange = page => {
        loadLessons(page);
    };
    const handlePerRowsChange = async (page) => {

        const response = await fetch(`http://127.0.0.1:8000/api/lessons?page=${page}`);
        const resData = await response.json();
        // console.log(resData)

        setLessons(resData.data);
    };


    return (
        <div className={`relative min-h-screen`}>
            {loading && <Loading2/>}
        <div className={`px-[30px] py-[15px]`}>
            <h1 className={`text-[30px] text-info font-bold mb-2`}><i className="fa fa-list mr-1"></i>Lessons</h1>
            <DataTable
                columns={columns}
                data={lessons}
                responsive
                highlightOnHover
                pointerOnHover
                expandableRows
                expandOnRowDoubleClicked
                expandableRowsComponent={control}
                customStyles={customStyles}
                pagination
                paginationServer
                paginationTotalRows={pageCount}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
                fixedHeader
                fixedHeaderScrollHeight="100%"
            />
        </div>
        </div>

    );
};

export default AllLessons;