import React, {useEffect, useState} from 'react';
import SlideShow from "./shares/SlideShow";
import LessonCard from "./shares/LessonCard";
import logoImg from "../assets/static/logo-img.png";
import Nav2 from "./shares/Nav2";
import ReactPaginate from "react-paginate";
import Loading from "./shares/Loading";
import Nav from "./shares/Nav";
import Footer from "./Footer";

const ShowAllLessons = () => {
    const [lessons, setLessons] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [isLoading,setIsLoading] =useState(false);
    const loadLessons = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/lessons?page=${currentPage}`);
        const resData = await response.json();
        setLessons(resData.data);
        setPageCount(resData.meta.last_page);
        if (resData){
            setIsLoading(false);
        }

    }

    const handlePagination = async (data) => {
        setCurrentPage(data.selected + 1);
    }

    useEffect(() => {
        setIsLoading(true);
        loadLessons();

    }, [currentPage])
    return (
        <>
            <Nav/>
            <Nav2/>
            <section id={"allLessons"} className={`${lessons.length>0 ?'flex' :''} flex-col md:flex-row items-center px-[100px] py-[100px]`}>

                <div className="relative">
                    {isLoading && <Loading/>}

                      <h1 className={`text-green-400 text-[25px] leading-[28px] font-bold`}>All Lessons</h1>
                      <div className={`grid grid-cols-5 gap-10 mt-5`}>
                          {
                              lessons.length > 0 && lessons.map((lesson) => <LessonCard
                                  imgWidth={"w-full"}
                                  imgHeight={"h-[182px]"}
                                  key={lesson.id}
                                  id={lesson.id}
                                  headerImage={lesson.headerImage}
                                  title={lesson.title.substr(0,30)}
                                  description={lesson.description.substr(0,60)}
                                  date={lesson.date}
                                  grade={lesson.grade_title}
                                  subject={lesson.subject_title}
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
            <Footer/>
        </>
    );
};

export default ShowAllLessons;