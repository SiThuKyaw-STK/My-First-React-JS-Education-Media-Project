import React, {Fragment, useRef, useState} from "react";
import {Routes, Route} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LessonDetail from "./components/LessonDetail";
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
import AllLessons from "./components/admin/lessons/AllLessons";
import DetailLesson from "./components/admin/lessons/DetailLesson";
import EditLesson from "./components/admin/lessons/EditLesson";
import CreateLesson from "./components/admin/lessons/CreateLesson";
import ProfileDetail from "./components/admin/profile/ProfileDetail";
import AllUsers from "./components/admin/users/AllUsers";
import UserProfileDetail from "./components/admin/users/UserProfileDetail";

function App(props) {

    return (
        <div className={"bg-primary w-full"}>
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
                    <Route path="lessons">
                        <Route path="all" element={<AllLessons/>}/>
                        <Route path="create" element={<CreateLesson/>}/>
                        <Route path="detail/:id" element={<DetailLesson/>}/>
                        <Route path="edit/:id" element={<EditLesson/>}/>
                    </Route>
                    <Route path="profile">
                        <Route path="detail/:id" element={<ProfileDetail/>}/>
                    </Route>
                    <Route path="users">
                        <Route path="all" element={<AllUsers/>}/>
                        <Route path="detail/:id" element={<UserProfileDetail/>}/>
                    </Route>
                </Route>
                <Route path="*" element={<FallBackRoute/>} />
            </Routes>
        </div>
    );
}
export default App;
