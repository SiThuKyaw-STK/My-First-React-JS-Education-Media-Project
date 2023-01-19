import React, {Fragment, useRef, useState} from "react";
import Nav from "./components/shares/Nav";
import Hero from "./components/Hero";
import Application from "./components/Application";
import OurTeacher from "./components/OurTeacher";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import DropDown from "./components/shares/DropDown";
import SlideShow from "./components/shares/SlideShow";
import LatestLesson from "./components/LatestLesson";
import logoImg from "./assets/static/logo-img.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LessonCard from "./components/shares/LessonCard";
import MostViewLesson from "./components/MostViewLesson";
import Nav2 from "./components/shares/Nav2";
import Ads from "./components/shares/Ads";
import LessonDetail from "./components/LessonDetail";
import logoNav from "./assets/static/logo-nav.png";
import Login from "./components/Login";
import Home from "./components/Home";
import ShowLessons from "./components/ShowLessons";
import Register from "./components/Register";
import ShowAllLessons from "./components/ShowAllLessons";
import LessonsByGrade from "./components/LessonsByGrade";
import LessonsByTeacher from "./components/LessonsByTeacher";
import LessonsByGradeSubject from "./components/LessonsByGradeSubject";
import ErrorBoundary from "./components/shares/ErrorBoundary";
import Admin from "./components/admin/Admin";
import RouteGuard from "./components/shares/RouteGuard";
import FallBackRoute from "./components/shares/FallBackRoute";
import AllSub from "./components/admin/subjects/AllSub";
import EditSub from "./components/admin/subjects/EditSub";

function App(props) {

    return (
        <div className={"bg-white w-full"}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/lessons" element={<ShowLessons/>}/>
                <Route path="/allLessons" element={<ShowAllLessons/>}/>
                <Route path="/lessonsByGrade" element={<ErrorBoundary><LessonsByGrade/></ErrorBoundary>}/>
                <Route path="/lessonsByTeacher" element={<ErrorBoundary><LessonsByTeacher/></ErrorBoundary>}/>
                <Route path="/lessonsByGradeSubject" element={<ErrorBoundary><LessonsByGradeSubject/></ErrorBoundary>}/>
                <Route path="/lessonDetail/:id" element={<ErrorBoundary><LessonDetail/></ErrorBoundary>}/>
                <Route path="/admin" element={<RouteGuard><Admin/></RouteGuard>}>
                    <Route path="subjects">
                        <Route path="all" element={<AllSub/>}/>
                        <Route path="edit/:id" element={<EditSub/>}/>
                    </Route>
                </Route>
                <Route path="*" element={<FallBackRoute/>} />
            </Routes>
        </div>
    );
}
export default App;
