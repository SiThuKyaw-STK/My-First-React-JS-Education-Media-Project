import React, {useEffect, useState} from 'react';
import Nav2 from "./shares/Nav2";
import Loading from "./shares/Loading";
import LessonCard from "./shares/LessonCard";
import ReactPaginate from "react-paginate";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import DropDown from "./shares/DropDown";
import {setGradeSubject} from "../redux/actions";

const LessonsByGrade = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {type, id, title} = useSelector(state => state.byGradeData);
    const [lessonsByGrade, setLessonsByGrade] = useState([]);
    const [subjectsByGrade, setSubjectByGrade] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const loadLessonsByGrade = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/lessonsByGrade/${id}?page=${currentPage}`);
        const resData = await response.json();
        setLessonsByGrade(resData.data);
        setPageCount(resData.meta.last_page);
        console.log(resData)
        if (resData) {
            setIsLoading(false);
        }
    }
    const loadSubjectsByGrade = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/subjectsByGrade/${id}`);
        const resData = await response.json();
        setSubjectByGrade(resData.data);

    }

    const handlePagination = async (data) => {
        setCurrentPage(data.selected + 1);
    }

    const changePage = (type, grade_id, id, title,grade) => {
        dispatch(setGradeSubject({type, grade_id, id, title,grade}))
        navigate("/lessonsByGradeSubject")
    }

    useEffect(() => {
        setIsLoading(true);
        loadLessonsByGrade();
        loadSubjectsByGrade();

    }, [id, currentPage])
    return (
        <>
            <Nav2/>
            <nav className={"w-full bg-nav flex py-[15px] px-[100px] justify-between items-center mt-[1px]"}>
                <ul className="list-none sm:flex hidden items-center flex-1">
                    {
                        subjectsByGrade.length > 0 && subjectsByGrade.map((subjects) =>
                                <a className={"font-normal hover:text-white cursor-pointer text-[20px] text-slate-400 mr-10"}
                                   key={subjects.id}
                                   onClick={() => changePage("ByGradeSubject", subjects.grade_id, subjects.id, subjects.title,subjects.grade)}>
                                    {subjects.title}
                                </a>
                            // <Link
                            //     key={subjects.id}
                            //     to={`/lessonsByGradeSubject/${subjects.grade_id}/${subjects.id}`}
                            //     className={"font-normal hover:text-white cursor-pointer text-[20px] text-slate-400 mr-10"}>
                            //     {subjects.title}
                            // </Link>

                        )
                    }
                </ul>
            </nav>
            <section id={"searchByGrade"}
                     className={`${lessonsByGrade.length > 0 ? 'flex' : ''} flex-col md:flex-row items-center px-[100px] py-[100px]`}>

                <div className="relative">
                    {isLoading && <Loading/>}

                    <h1 className={`text-green-400 text-[25px] leading-[28px] font-bold`}>
                        {title}
                    </h1>
                    <div className={`grid grid-cols-4 gap-10 mt-5`}>
                        {
                            lessonsByGrade.length > 0 && lessonsByGrade.map((lesson) => <LessonCard
                                imgWidth={"w-full"}
                                imgHeight={"h-[182px]"}
                                key={lesson.id}
                                id={lesson.id}
                                headerImage={lesson.headerImage}
                                title={lesson.title.substr(0, 30)}
                                description={lesson.description.substr(0, 60)}
                                date={lesson.date}
                                grade={lesson.grade}
                                subject={lesson.subject}
                                uploader={lesson.uploader.title}
                            />)
                        }
                    </div>
                    <div>
                        <ReactPaginate
                            previousLabel={"previous"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePagination}
                            containerClassName={"isolate inline-flex -space-x-px rounded-md shadow-sm mt-5 float-right"}
                            pageLinkClassName={"relative inline-flex items-center border border-gray-300 " +
                            "bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                            previousLinkClassName={"relative inline-flex items-center rounded-l-md border" +
                            " border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                            nextLinkClassName={"relative inline-flex items-center rounded-r-md border border-gray-300 " +
                            "bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                            breakLinkClassName={"relative inline-flex items-center border border-gray-300 " +
                            "bg-white px-4 py-2 text-sm font-medium text-gray-700"}
                            activeLinkClassName={"z-10 bg-indigo-50 border-indigo-500 text-indigo-600"}
                        />
                    </div>

                </div>
            </section>
        </>
    );
};

export default LessonsByGrade;