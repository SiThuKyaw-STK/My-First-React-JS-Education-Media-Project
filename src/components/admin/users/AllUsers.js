import React, {useEffect, useState} from 'react';
import Loading2 from "../../shares/Loading2";
import DataTable from "react-data-table-component";
import {Link} from "react-router-dom";

const AllUsers = () => {
    const [users,setUsers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const loadUsers = async (page) =>{
        const response = await fetch(`http://127.0.0.1:8000/api/users?page=${page}`);
        const resData = await response.json();
        setUsers(resData.data);
        setPageCount(resData.meta.total);

    }
    useEffect(() => {loadUsers();},[]);

    //Data table custom
    const columns = [
        {
            name: 'Id',
            sortable: true,
            selector: row => row.id,
            maxWidth: '100px'
        },
        {
            name: "Name",
            sortable: true,
            selector: row =>
                <div className={`flex items-center`}>
                    {row.user_image?
                        <img
                        className={`w-[30px] rounded-full mr-1`}
                        src={`http://127.0.0.1:8000/storage/profile/${row.user_image}`} alt=""/>:''}
                    {row.title}
                </div>,
            maxWidth: '300px'
        },
        {
            name: "Bio",
            sortable: true,
            selector: row => row.bio?row.bio:<strong className={`font-bolder`}>There is no bio yet!</strong>,
            maxWidth: '600px'
        },
        {
            name: 'Role',
            sortable: true,
            selector: row => row.role==='0'?"Admin":row.role!=='2'?"Editor":"User",
            maxWidth: '100px'

        },
        {
            name: 'IsBaned',
            sortable: true,
            selector: row => row.isBaned==='1'?
                <button disabled className={`px-5 py-1 rounded-full text-white font-bold bg-green-600`}>Member</button>:
                <button disabled className={`px-5 py-1 rounded-full text-white font-bold bg-red-600`}>Baned</button>,
            maxWidth: '150px',
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
                background: 'gray',
                border: '1px solid rgba(0,0,0,.12)'
            },
        },
        cells: {
            style: {
                fontSize: '15px',
                border: '1px solid rgba(0,0,0,.12)',
            },
        },
    };
    const control = ({data}) => {
        const userId = data.id;
        return (
            <>
                <Link to={`/admin/users/detail/${userId}`}
                      className={`inline-block px-2 py-1 my-2 rounded-full bg-blue-300 ml-1`}>
                    <i className="fa-regular fa-eye"></i>
                </Link>
            </>
        )
    };

    //Data table pagination
    const handlePageChange = page => {
        loadUsers(page);
    };
    const handlePerRowsChange = async (page) => {

        const response = await fetch(`http://127.0.0.1:8000/api/users?page=${page}`);
        const resData = await response.json();
        // console.log(resData)

        loadUsers(resData.data);
    };
    return (
        <div className={`relative min-h-screen`}>
            <div className={`px-[30px] py-[15px]`}>
                <h1 className={`text-[30px] text-info font-bold mb-2`}><i className="fa fa-users mr-1"></i>Users</h1>
                <DataTable
                    columns={columns}
                    data={users}
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

export default AllUsers;