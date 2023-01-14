import React, {useRef} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import LessonCard from "./shares/LessonCard";
import logoImg from "../assets/static/logo-img.png";
import SlideShow from "./shares/SlideShow";

const MostViewLesson = () => {

    const counts = [0,1,2,3,4];

    return (
      <section id={"mostView"}
               className={`flex flex-col md:flex-row items-center justify-center px-[100px] py-[100px]`}>
        <div className="relative">
          <h1 className={`text-green-400 text-[25px] leading-[28px] font-bold`}>
            MostView Lesson
          </h1>
            <SlideShow
                counts={counts}
                slideSm={2}
                slideMd={2}
                slideLg={2}
                imgMargin={"mr-3"}
                imgWidth={"w-[260px]"}
                imgHeight={"h-[187px]"}
                flexICenter={"flex items-center"}
            />
        </div>
      </section>
  )
}

export default MostViewLesson